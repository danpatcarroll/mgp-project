import React, {useState} from 'react'
import "./Challenge.css"

export default function Challenge(props) {
  const [value, setValue] = useState("")

  function onHome() {
    props.setChallenge(false)
    props.setOrder(0)
}

  document.body.style = 'background: white;';
  return (
    <div className='chalscreen'>
      {props.order > 0 ? <div className='chalitem first'>This is the third step in the coding journey. It represents improving your skills after you learn the fundamentals of a language.</div> : <div />}
      <div className='chalitem'>Challenge Name: Dice God</div>
      <div className='chalitem'>Language: Python</div>
      <div className='chalitem'>Difficulty: 2/5</div>
      <div className='chalitem'>Estimated Time: 15 minutes</div>
      <div className='chalitem'/>
      <div className='chalitem'/>
      <div className='chalitem'/>
      <div className='chalitem'>For this challenge, you must design a python function that is able to simulate the rolling of a dice. It will take 2 parameters, <i>a</i> and <i>b</i>. <i>a</i> represents the number of sides on the dice. <i>b</i> represents the number of times the dice will be rolled. The function must return a list of 7 items.</div>
      <ul className='chalitem'>
        <li>The first item must be a list of length <i>b</i> of random numbers between 1 and <i>a</i>, inclusive. This represents the dice rolls.</li>
        <li>The second item must be a integer representing the sum of all dice rolls given in the first item.</li>
        <li>The third item must be a integer representing the the median value of all rolls.</li>
        <li>The fourth item must be a integer representing the the arithmetic mean of all rolls.</li>
        <li>The fifth item must be a integer representing the the minimum value of all rolls.</li>
        <li>The sixth item must be a integer representing the the maximum value of all rolls.</li>
        <li>The seventh item must be a integer representing the the range of all rolls, or the maximum minus the minimum.</li>
      </ul>
      <div className='chalitem'>Please put your code in the indicated space.</div>
      <div className='code'>from random import randint <br />
 <br />
def roll(a, b): <br />
  #START CODE HERE <br />
   <br />
  #END CODE HERE <br />
 <br />
dice = roll(6, 5) <br />
 <br />
print("Your rolls are: " + str(dice[0])) <br />
print("\nThe sum of all your rolls is: " + str(dice[1])) <br />
print("\nThe median of your rolls is: " + str(dice[2])) <br />
print("\nThe average of your rolls is: " + str(dice[3])) <br />
print("\nThe lowest roll is: " + str(dice[4])) <br />
print("\nThe highest roll is: " + str(dice[5])) <br />
print("\nThe range is: " + str(dice[6]))</div>
<div className='chalitem'/>
<div className='chalitem'/>
<div className='chalitem'/>
      <div className='chalitem'>For an additional challenge, try to complete the function using as little characters as possible. Paste your code below to see its length.</div>
      <input onChange={e => {setValue(() => {return e.target.value})}} value={value}/>
      <div className='chalitem'>Length of code: {value.length}</div>
      <button onClick={onHome} class="home">Return Home</button>
      {props.order > 0 ? <button className="order" onClick={() => {props.setChallenge(() => {return false});props.setOrder(4)}}>Next Step</button> : <div />}
    </div>
  )
}
