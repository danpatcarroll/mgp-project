import React, {useState, useRef, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import data from './data.json'
import Guessed from './Guessed'
import InputBox from './InputBox'
import haversine from "./haversine"
import './City.css'
import Modal from './Modal'
import Menu from './Menu'

function City({setCity, order, setOrder}) {
  const [guessed, setGuessed] = useState([]) //Array of objects of all cities that were guessed
  const guessNameRef = useRef() //Whatever's in the input field
  const [curCity, setCurCity] = useState({}) //JSON object of the answer
  const [error, setError] = useState('') // Sends message saying a city isn't valid
  const [numGuess, setNumGuess] = useState(1) // Sets the current number of guesses
  const [val, setVal] = useState("") //Sets the value of the input box
  const [rerun, setRerun] = useState(false) //Flips value every time handleGuess is run
  const [isOpen, setIsOpen] = useState(false) //Determines whether the modal should be open
  const [didWin, setDidWin] = useState(false)
  const [didLose, setDidLose] = useState(false)
  const [mode, setMode] = useState(0)
  const [minDist, setMinDist] = useState(10000000)
  const [possible, setPossible] = useState(['3651000',
  '1250015082',
  '1826645935',
  '1643318494',
  '1392685764',
  '1484247881',
  '644000',
  '1724616994',
  '1076887657',
  '1356872604',
  '1156228865',
  '1818253931',
  '1036074917',
  '1724594040',
  '1792756324',
  '1714000',
  '1643616350',
  '1032717330',
  '1156073548',
  '1604728603',
  '1380382862',
  '1360771077',
  '1356226629',
  '1410836482',
  '1784736618',
  '1076532519',
  '1152554349',
  '1608618140',
  '1764068610',
  '1364305026',
  '1710550792',
  '1170483426',
  '1124279679',
  '1702341327',
  '1368596238',
  '1566593751',
  '1344982653',
  '1392419823',
  '1458988644',
  '1682999334',
  '1818695837',
  '1704774326',
  '1404000661',
  '1050529279',
  '1356060520',
  '1180000363',
  '1586129469',
  '1158881289',
  '1024949724',
  '1729268475',
  ])

  document.body.style = 'background: white;';

  // console.log(curCity.name)

  function handlePlayAgain() {
    setGuessed([])
    setCurCity(() => {
      const posid = possible[Math.floor(Math.random()*50)]
      for (var i=0; i<data.length; i++) {
        if (data[i].id.toString() === posid) {
          return data[i]
        }
      }
    })
    setError('')
    setNumGuess(1)
    setVal('')
    setDidWin(false)
    setIsOpen(false)
    setDidLose(false)
    setMinDist(10000000)
  }

  function handleGuess () { // Runs whenever submit is pressed
    // console.log("Handle guess running")

    setRerun(prev => { // Make rerun the opposite of what it is
      return !prev
    })

    setGuessed(prevGuessed => { // Creates dataRef variable to assign the input value to a JSON data object
      const name = guessNameRef.current.value.split(",")
      // console.log("Name: " + name)
      const lowerName = name[0].toLowerCase().replace(/[^A-Za-z0-9]/g,'')
      let dataRef
      for (let i=0; i<data.length; i++) {
        if (!dataRef) {
          if (name.length === 1) {
            for (let j=0; j<data[i].accepted.length; j++) {
              if (data[i].accepted[j].replace(/[^A-Za-z0-9]/g,'') === lowerName) {
                dataRef = data[i]
              }
            }
          } else {
            if (name[1].toUpperCase() === data[i].iso) {
              for (let j=0; j<data[i].accepted.length; j++) {
                if (data[i].accepted[j].replace(/[^A-Za-z0-9]/g,'') === lowerName) {
                  dataRef = data[i]
                }
              }
            }
          }
        }
      }

      setError(() => { // If not a valid city, send an error message
        if(!dataRef) {
          return "Not a valid city"
        }
        return null
      })

      setVal("")

      if (!dataRef) {
        setVal(name)
        return [...prevGuessed]
      }

      setNumGuess(prev => { // Increase the number of guesses by 1
        return prev + 1
      })

      setMinDist(prev => {
        // console.log("data ref dist is: "+ dataRef.dist)
        if (dist < prev) {
          return dist
        }
        return prev
      })

      const dist = haversine(dataRef, curCity) // Calculate distance with the haversine formula

      if (dist === 0) {
        handleWin()
      }

      return [...prevGuessed, {key: uuidv4(), name: dataRef.name, check: lowerName, dataRef: dataRef, dist: dist, numGuess: numGuess}]
    })
  }

  function handleWin() {
    setTimeout(() => {
      // console.log("You win!")
      setDidWin(true)
      setIsOpen(true)
    }, 2000)
  }

  function handleGiveUp() {
    setDidLose(true)
    setIsOpen(true)
  }

  useEffect(() => {
    setCurCity(() => {
      const posid = possible[Math.floor(Math.random()*50)]
      for (var i=0; i<data.length; i++) {
        if (data[i].id.toString() === posid) {
          return data[i]
        }
      }
    })
  }, [mode])

  function handleSetMode(n) {
    setMode(n)
    handlePlayAgain()
  }

  function handleSetMenu() {
    setMode(0)
  }

  function handleHome() {
    setCity(false)
    setOrder(0)
  }

  if (mode === 0) {
    return (
    <div>
      <Menu setMode={handleSetMode} order={order}/>
    </div>
    )
  }

  return (
  <div className='scren'>
    <h1 className='title flex'>Cityguessr</h1>
    <div className='flex'>Game Mode: {mode === 1 ? 'Easy' : mode === 2 ? 'Medium' : 'Hard'}</div>
    <div className='box flex'>
      <Guessed allCities={guessed} cur={curCity} mode={mode} minDist={minDist}/>
    </div>
    <div className='input flex'>
      <InputBox guessNameRef={guessNameRef} handleGuess={handleGuess} prevVal={val} rerun={rerun}/>
      <div className='error'>{error}⠀</div>
    </div>
    <div className='buton flex'>
      <button className='submit' onClick={handleGuess}>Submit</button>
      <button className='again' onClick={handleGiveUp}>{didWin||didLose ? 'Show Stats' : 'Give Up'}</button>
    </div>
    <Modal open={isOpen} onClose={() => setIsOpen(false)} didWin={didWin} city={guessed} cur={curCity} handlePlayAgain={handlePlayAgain} handleSetMode={handleSetMenu} handleHome={handleHome}/>
  </div>
  )
}
export default City;