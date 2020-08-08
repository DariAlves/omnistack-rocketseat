import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
    label: string;
}

const Input: React.FC<InputProps> = ({ label, name }) => {
    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} />
        </div>
    );
}

export default Input;