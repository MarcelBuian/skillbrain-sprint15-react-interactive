import { useState } from 'react';

export default function MyForm(props) {
    const [myCar, setMyCar] = useState(props.name || "Volvo");

    const handleChange = (event) => {
        console.log("Car has been changed!");
        setMyCar(event.target.value)
    }

    return (
        <form>
            <div>My car is: {myCar}</div>
            <select value={myCar} onChange={handleChange}>
                <option value="Ford">Ford</option>
                <option value="Volvo">Volvo</option>
                <option value="Fiat">Fiat</option>
            </select>
        </form>
    )
}