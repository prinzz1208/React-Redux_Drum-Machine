import React from 'react'
import DrumPad from './DrumPad'
import { bankOne } from "./data";
import Display from './Display';
const DrumMachine = () => {

    const drumpads = bankOne.map(el => (
        <DrumPad
            key={el.id}
            id = {el.id}
            text = {el.keyTrigger}
            src = {el.url}
            keyCode = {el.keyCode}
            keyTrigger = {el.keyTrigger}
         
        />
    ))
    const onKeyPressHandler = (e) => {

    }

    return (
        <div id="drum-machine" onKeyPress={onKeyPressHandler}>
            <div className="drum-pad-box">
                {drumpads}
            </div>
            <Display />
        </div>
    )
}

export default DrumMachine
