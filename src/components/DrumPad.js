import React, { useEffect } from 'react'
import displayAction from '../redux/displayAction';
import { useDispatch } from 'react-redux';

const DrumPad = (props) => {
    
    
    const dispatch = useDispatch();
    useEffect( () =>{
     
        const onKeyDownHandler = (e) => {
            if(e.keyCode === props.keyCode){
               var sound = document.getElementById(props.keyTrigger);
                sound.play();
                dispatch(displayAction(props.id));
            }
        }
        document.addEventListener('keydown',onKeyDownHandler)
        
        return () =>{
            document.removeEventListener('keydown', onKeyDownHandler);
        }
        
    })

    const onClickHandler = (e) => {
        e.target.childNodes[0].play()
        dispatch(displayAction(e.target.id));
    }
    
    return (
        <div id ={props.id} className="drum-pad" onClick={(e) => onClickHandler(e)}>
            <audio className="clip" src={props.src} id={props.keyTrigger}> 
            </audio>      
           {props.text}
        </div>
    )
}

export default DrumPad
