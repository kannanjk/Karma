import React from "react"

interface InputProps {
    placeHolder?: string
    value?: string
    type?: string
    disabled?: boolean
    onChange: (even: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = ({
    placeHolder, value, type, disabled, onChange
}) => {
    return (
        <input
            disabled={disabled}
            onChange={onChange}
            value={value}
            placeholder={placeHolder}
            type={type}
            className="w-full p-4 text-lg bg-black border-2 transition
        disabled:bg-neutral-800 disabled:opacity-70 disabled:cursor-not-allowed
        "
        />
    )
}

export default Input