import React from "react"
import { Form } from 'react-bootstrap';

interface IInput {
 id: string
 label: string
 type: string
 value?: number | string
 defaultValue?: number | string
 width: number
 onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}


const Input = ({id, label, type, value, defaultValue, width, onChange} : IInput) => {

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
         className= {`w-${width}`}
         onChange={onChange}
        />
      </Form.Group>
    )
}

export default Input;