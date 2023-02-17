import { useState } from 'react'
import axios from 'axios';

function App() {
    const [value, setValue] = useState<string>('');
    const [label, setLabel] = useState<string>('');

    const handleChange = (e: any) => {
        setValue(e.target.value);
    }

    const handleClick = () => {
        axios
            .get(`http://127.0.0.1:8000/${value}`)
            .then((result: any) => setLabel(result.data['message']));
    }

    return (
        <div>
            <input 
                value={value}
                onChange={handleChange}
            />
            <button
                onClick={handleClick}
            >
                Click
            </button>
            {label}
        </div>
    );
}

export default App
