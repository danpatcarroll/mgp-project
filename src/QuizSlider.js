import React, {useState, useEffect} from 'react'
import "./InteractiveQuiz.css"

export default function QuizSlider(props) {
    const [value, setValue] = useState(0)

    // useEffect(() => {
    //     props.js[1](() => {return value*props.js[2]})
    // }, [value])

    function handleNext() {
        let temp = value
        props.handleNext(temp, value*props.code[0], value*props.code[1], value*props.code[2], value*props.code[3], value*props.code[4], value*props.code[5], value*props.code[6], value*props.code[7], value*props.code[8], value*props.code[9], value*props.code[10])
        resetValue()
    }

    function resetValue() {
        setValue(0)
    }

  return (
    <div>
        <div className="item">{props.text}</div>
        <div className='barrier item' />
        <div className='item markcont'><div className='item inline marker'>1</div><div className='item inline marker'>2</div><div className='item inline marker'>3</div><div className='item inline marker'>4</div><div className='item inline marker'>5</div></div>
        <input className="slider item" type="range" min={0} max={4} onChange={e => {setValue(() => {return parseInt(e.target.value)})}} value={value}></input>
        <button className="button item" onClick={handleNext}>Next</button>
    </div>
  )
}
