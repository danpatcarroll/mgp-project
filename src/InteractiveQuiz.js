import React, {useState} from 'react'
import { useEffect } from 'react/cjs/react.production.min'
import QuizSlider from './QuizSlider'
import "./InteractiveQuiz.css"

export default function InteractiveQuiz(props) {
    const [py, setPy] = useState(0)
    const [js, setJs] = useState(0)
    const [java, setJava] = useState(0)
    const [html, setHtml] = useState(0)
    const [cpp, setCpp] = useState(0)
    const [csharp, setCsharp] = useState(0)
    const [php, setPhp] = useState(0)
    const [swift, setSwift] = useState(0)
    const [kotlin, setKotlin] = useState(0)
    const [ruby, setRuby] = useState(0)
    const [sql, setSql] = useState(0)
    const [step, setStep] = useState(1)
    const [sorted, setSorted] = useState([])

    document.body.style = 'background: black;';

    function handleClick() {
        setStep(prev => {return prev+1})
    }

    function handleFinal() {
        setStep(prev => {return prev+1})
        sortCode()
    }

    function handleNext(e, f, g, h, i, j, k, l, m, n, o, p) {
        setStep(prev => {return prev+1})
        setPy(prev => {return prev + f})
        setJs(prev => {return prev + g})
        setJava(prev => {return prev + h})
        setHtml(prev => {return prev + i})
        setCpp(prev => {return prev + j})
        setCsharp(prev => {return prev + k})
        setPhp(prev => {return prev + l})
        setSwift(prev => {return prev + m})
        setKotlin(prev => {return prev + n})
        setRuby(prev => {return prev + o})
        setSql(prev => {return prev + p})
    }

    function handleAgain() {
        setStep(1)
        setPy(0)
        setJs(0)
        setJava(0)
        setHtml(0)
        setCpp(0)
        setCsharp(0)
        setPhp(0)
        setSwift(0)
        setKotlin(0)
        setRuby(0)
        setSql(0)
    }

    function handleHome() {
        props.setQuiz(false)
    }

    function sortCode() {
        const cobj = {"Python": py, 
        "JavaScript": js,
        "Java": java,
        "HTML": html,
        "C++": cpp,
        "C#": csharp,
        "PHP": php,
        "Swift": swift,
        "Kotlin": kotlin,
        "Ruby": ruby,
        "SQL": sql
        }

        const sort = Object.entries(cobj).sort(([,a],[,b]) => b-a)

        setSorted(() => {return sort})
        console.log(sort)
    }

  return (
    <div className="screen">
        {step === 1 ?
        <div>
            <div className="item">For this quiz, enter a number from 1 to 5 indicating how interested you are in learning a skill. 1 means you are not interested at all and 5 means you are very interested. After it's done, you'll get an ordered list of the most useful languages for you to learn along with a score for how relatively useful it is.</div>
            <button className="item button" onClick={handleClick}>I Understand</button>
        </div> : step === 2 ?
            <QuizSlider code={[3,5,0,5,0,3,3,0,0,3,1]} handleNext={handleNext} text={"1. How interested are you in website development?"}/> : step === 3 ?
            <QuizSlider code={[0,0,5,0,2,1,0,0,5,0,0]} handleNext={handleNext} text={"2. How interested are you in Android mobile app development?"}/> : step === 4 ?
            <QuizSlider code={[0,0,0,0,0,0,0,5,0,0,0]} handleNext={handleNext} text={"3. How interested are you in Apple iOS mobile app development?"}/> : step === 5 ?
            <QuizSlider code={[3,2,4,2,5,5,0,0,0,0,0]} handleNext={handleNext} text={"4. How interested are you in game development?"}/> : step === 6 ?
            <QuizSlider code={[5,2,2,0,0,0,0,0,0,2,5]} handleNext={handleNext} text={"5. How interested are you in data analysis?"}/> : step === 7 ?
            <QuizSlider code={[5,0,2,0,3,1,0,0,0,0,0]} handleNext={handleNext} text={"6. How interested are you in artificial intelligence and machine learning?"}/> : step === 8 ?
            <QuizSlider code={[2,1,0,0,3,2,0,2,0,0,0]} handleNext={handleNext} text={"7. How interested are you in desktop application development?"}/> : step === 9 ?
            <QuizSlider code={[3,5,0,2,0,0,0,0,0,0,0]} handleNext={handleNext} text={"8. How interested are you in making animations?"}/> : step === 10 ?
            <QuizSlider code={[3,1,4,0,5,0,0,0,0,0,0]} handleNext={handleNext} text={"9. How interested are you in competitive programming (fast & efficient code)?"}/> : step === 11 ?
            <div>
                <div className='item'>You're done with the quiz. Click next to see the ordered list of languages you should learn from least to most useful.</div>
                <button className="button item" onClick={handleFinal}>Next</button>
            </div> :
            <div className='container'>
                <div className="item">1. {sorted[0][0]}: {sorted[0][1]}</div>
                <div className="item">2. {sorted[1][0]}: {sorted[1][1]}</div>
                <div className="item">3. {sorted[2][0]}: {sorted[2][1]}</div>
                <div className="item">4. {sorted[3][0]}: {sorted[3][1]}</div>
                <div className="item">5. {sorted[4][0]}: {sorted[4][1]}</div>
                <div className="item">6. {sorted[5][0]}: {sorted[5][1]}</div>
                <div className="item">7. {sorted[6][0]}: {sorted[6][1]}</div>
                <div className="item">8. {sorted[7][0]}: {sorted[7][1]}</div>
                <div className="item">9. {sorted[8][0]}: {sorted[8][1]}</div>
                <div className="item">10. {sorted[9][0]}: {sorted[9][1]}</div>
                <div className="item">11. {sorted[10][0]}: {sorted[10][1]}</div>
                <div className='item barrier'/>
                <div className="item">This is just a list of suggestions rather than a pathway to follow. In the end, the most important thing is staying committed to a language. Some languages also are just more likely to show up.</div>
                <button className="item button" onClick={handleAgain}>Try Again</button><button className='item button' onClick={handleHome}>Return Home</button>
            </div>
        }
    </div>
  )
}
