import { useState } from 'react';

export default function Test3() {
    const [clickedAmount, setClickedAmount] = useState(0);

    const handleClick = (e) => {
        console.log(e);
        const inputEl = e.target.previousSibling;
        let increment = inputEl?.value;
        increment = increment ? increment : 1;
        increment = parseInt(increment);

        setClickedAmount(clickedAmount + increment);
    }

    return (
        <>
            <span>+</span><input placeholder='1'></input>
            <button onClick={handleClick}>
                {clickedAmount}
            </button>
        </>
    );
}
