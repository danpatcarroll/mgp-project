import React, {useState} from 'react'
import City from "./City"
import InteractiveQuiz from "./InteractiveQuiz"
import Challenge from './Challenge'
import "./App.css"

export default function App() {
    const [city, setCity] = useState(false)
    const [quiz, setQuiz] = useState(false)
    const [challenge, setChallenge] = useState(false)

    document.body.style = 'background: white;';

    function handleEasyOver(event) {
        event.target.style.backgroundColor='#8bdd0d'
    }

    function handleEasyOut(event) {
        event.target.style.backgroundColor='#adff2f'
    }

    function handleMediumOver(event) {
        event.target.style.backgroundColor='#dd0'
    }

    function handleMediumOut(event) {
        event.target.style.backgroundColor='#ff0'
    }

    function handleHardOver(event) {
        event.target.style.backgroundColor='#dd2300'
    }

    function handleHardOut(event) {
        event.target.style.backgroundColor='#ff4500'
    }

    function handleHowtoOver(event) {
        event.target.style.backgroundColor='#8bb6c4'
    }

    function handleHowtoOut(event) {
        event.target.style.backgroundColor='#add8e6'
    }

    function handleCityClick() {
        setCity(prev => {return !prev})
    }

    function callCity() {
        return <City setCity={setCity}/>
    }

    function handleQuizClick() {
        setQuiz(prev => {return !prev})
    }

    function callQuiz() {
        return <InteractiveQuiz setQuiz={setQuiz}/>
    }

    function handleChallengeClick() {
        setChallenge(prev => {return !prev})
    }

    function callChallenge() {
        return <Challenge setChallenge={setChallenge}/>
    }

    return (
        city ? callCity() : quiz ? callQuiz() : challenge ? callChallenge() : <div className='flexbox'>
            <div className='genre flex'>Spandan Patel - Multi Genre Project</div>
            <div className='genre flex'>Creativity in Programming</div>
            <button onClick={handleQuizClick} className='quiz flex' onMouseOver={handleEasyOver} onMouseOut={handleEasyOut}>1. Learn to Code Based on Your Desires Quiz</button>
            <button className='waka flex' onMouseOver={handleMediumOver} onMouseOut={handleMediumOut}>2. WakaHow to Code in PyJavaGoPHPSwiftRuby#++</button>
            <button onClick={handleChallengeClick} className='challenge flex' onMouseOver={handleHowtoOver} onMouseOut={handleHowtoOut}>3. Dice God Challenge</button>
            <button onClick={handleCityClick} className='city flex' onMouseOver={handleHardOver} onMouseOut={handleHardOut}>4. Cityguessr</button>
        </div>
  )
  }