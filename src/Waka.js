import React from 'react'
import "./Waka.css"

export default function Waka(props) {

    document.body.style = 'background: #e6eee0; margin: 0;';

    function onHome() {
        props.setWaka(false)
        props.setOrder(0)
    }

  return (
    <div className='screen'>
        <div className='nav item'><img className='logo' src={require('./wakanav.jpg')} alt='' height='100%' width='100%'/></div>
        <div className='trust item'><img className='trustword' src={require('./wakatrust.jpg')} alt='' height='100%' width='100%'/></div>
        {props.order > 0 ? <div className='item first'>This is the second step in the coding journey. It represents the process of learning a skill after you decided what to learn.</div> : <div />}
        <img className='item' src={require('./waka1.jpg')} alt='' height='463' width='1000'/>
        <img className='item' src={require('./waka2.jpg')} alt='' height='463' width='1000'/>
        <img className='item' src={require('./waka3.jpg')} alt='' height='463' width='1000'/>
        <img className='item' src={require('./waka4.jpg')} alt='' height='463' width='1000'/>
        <img className='item' src={require('./waka5.jpg')} alt='' height='463' width='1000'/>
        <img className='item' src={require('./waka6.jpg')} alt='' height='463' width='1000'/>
        <img className='item' src={require('./waka7.jpg')} alt='' height='463' width='1000'/>
        <img className='item' src={require('./waka8.jpg')} alt='' height='463' width='1000'/>
        <button onClick={onHome} class="home">Return Home</button>
        {props.order > 0 ? <button className="order" onClick={() => {props.setWaka(false);props.setOrder(prev => {return prev + 1})}}>Next Step</button> : <div />}
    </div>
  )
}
