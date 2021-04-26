// import Button from '@material-ui/core/Button';
// import ButtonGroup from '@material-ui/core/ButtonGroup';
import React, { useState } from 'react';
import '../App.css';

export default function Counter() {
    const [value, setValue] = useState(0);
    return (
        <div>
            <div className="counter__container">
                <div className="counter__display">{value}</div>
                <div variant="text" color="primary" aria-label="">
                    <button type="button" onClick={() => setValue(value - 1)}>
                        Decrement
                    </button>
                    <button type="button" onClick={() => setValue(value + 1)}>
                        Increment
                    </button>
                </div>
            </div>
        </div>
    );
}
