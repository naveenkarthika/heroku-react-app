import React, { useEffect, useState } from 'react'

function Input() {
    const [value, setValue] = useState();

    const handleChange = (e) => {
        const val = e.target.value;
        setValue(val)
    }

    useEffect(() => {
        console.log('Input component called')
    }, [])

    return (
        <div>
            {value}
            <br />
            <input type="text" onChange={handleChange}/>
        </div>
    )
}

export default Input;
