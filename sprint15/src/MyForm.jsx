import { useState } from 'react';

export default function MyForm(props) {
    const [name, setName] = useState(props.name);
    const [keyCode, setKeyCode] = useState(null);

    const onKeyUp = (e) => {
        console.log("key code pressed = " + e.keyCode);
        setKeyCode(e.keyCode);
    }

    return (
        <form>
            <label>Enter your name:
                <input
                    type="text"
                    onKeyUp={onKeyUp}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                {name}
            </label>
            <label>Last key code pressed was: {keyCode}</label>
        </form>
    )
}
