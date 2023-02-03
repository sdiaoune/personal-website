import { useState } from 'react';

const CustomAmountInput = () => {
    const [amount, setAmount] = useState(0);

    const handleChange = (e) => {
        setAmount(e.target.value);
    }

    return (
        <input type="number" onChange={handleChange} value={amount} />
    );
}

export default CustomAmountInput;