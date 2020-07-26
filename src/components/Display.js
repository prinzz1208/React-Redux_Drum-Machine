import React from 'react'
import { useSelector } from 'react-redux'

const Display = () => {
    const message = useSelector(state => state.message);
    return (
        <div id="display">
            {message}
        </div>
    )
}

export default Display
