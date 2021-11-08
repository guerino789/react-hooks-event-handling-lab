import React from 'react'

function EyesOnMe(){
   
    function eventBtnFocus(){
        console.log("Good!")
    }

    function eventBtnBlur(){
        console.log("Hey! Eyes on me!")
    }
    return (
        <button onFocus={eventBtnFocus} onBlur={eventBtnBlur}> Eyes on me </button>
    )
}

export default EyesOnMe

