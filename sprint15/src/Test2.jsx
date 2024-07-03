import { useState } from 'react';

export default function Test2() {
    const [isToggleOn, setIsToggleOn] = useState(true);

    const handleClick = (event, postfix) => {
        setIsToggleOn(!isToggleOn);
        // console.log(event.target);
        // console.log(postfix);
    }

    return (
        <button onClick={(e) => handleClick(e, "all day")}>
            {isToggleOn ? 'ON' : 'OFF'}
        </button>
    );
}
