import React from 'react'

function Keypad(){
   
    function eventChange(){
        console.log("Entering password...")
    }
    return (
        <input type="password" onChange={eventChange}/>
    )
}

export default Keypad
