import "./NamePicker.css";
import { useState } from "react";
import { AiOutlineUser } from 'react-icons/ai'

function NamePicker(props) {
    const [name, setName] = useState('Set Username:')

    function showInput() {
        console.log('showinput')
        document.querySelector('.setName').className = 'setName hidden'
        document.getElementById('nameInput').className = ''
    }

    function hideInput() {
        console.log('hi input')
        document.querySelector('.setName').className = 'setName'
        document.getElementById('nameInput').className = 'hidden' 
        send();
    }


    function onKeyPress(e) {
        if (e.key === "Enter") {
            hideInput();
            
        }
    }

    function send() {
        setName(name)
    }

    return (
        <div>
            <button onClick={showInput} className='setName'>{name}
            <AiOutlineUser />
            </button>
            <div id='nameInput' className='hidden'>
                <input 
                    onChange={(e) => setName(e.target.value)}
                    onKeyPress={onKeyPress}
                /><button onClick={hideInput}>OK</button>
            </div>
        </div>
    )
}

export default NamePicker