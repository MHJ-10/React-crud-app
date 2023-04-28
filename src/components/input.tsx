import { Form } from 'react-bootstrap';
import React from "react"


interface IInput {
 id: string
 label: string
 type: string
 value?: number | string
 defaultValue?: number | string
 onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}


const Input = ({id, label, type, value, defaultValue, onChange} : IInput) => {

    return (
        <Form.Group className='d-flex justify-content-center p-3'>
        <Form.Label htmlFor={id} className="mt-2 mx-3">
          {label}:
        </Form.Label>
        <Form.Control
        id={id} 
        type={type}
        value={value}
        defaultValue={defaultValue}
        className='w-25'
        onChange={onChange}
        />
      </Form.Group>
    )
}

export default Input;