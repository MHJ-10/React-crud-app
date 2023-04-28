import { useContext } from 'react';
import { AppContext } from '../hooks/stateContext';
import {Form, DropdownButton} from 'react-bootstrap';
import { SelectOptions } from '../services/options';


export const handleGetName = (array:number[]) => {
  const selectedOption = new Set(array)
  return SelectOptions.filter((option) => selectedOption.has(option.id)).map(
      option => option.name
  )
}

const MultiSelect = () => {
   const {setSelectedOptions} = useContext(AppContext)

   const handleOptions = (optionId: number) => {
    const updatedOptions = SelectOptions.map((option) => {
        if(option.id === optionId){
            return{ ...option, selected:!option.selected }
        } else {
            return option
        }
    });
     setSelectedOptions((prevSelectedOptions) => {
        if(prevSelectedOptions.includes(optionId)){
          return prevSelectedOptions.filter((id) => id !== optionId)
        }
        else { 
            return [...prevSelectedOptions, optionId]
        }
     });

     const updatedSelectOptions = [...updatedOptions];
     SelectOptions.forEach((option, index) => {
    Object.assign(option, updatedSelectOptions[index]);
  });
     
    }
    
   

    return(
     <Form.Group className='d-flex justify-content-center p-3'>
        <Form.Label className='mt-2 mx-3 '>
            مهارت ها:
        </Form.Label>
        <DropdownButton
         variant='light'
         drop='down-centered'
         title="مهارت ها">
          {
          SelectOptions.map((option) => (
              <div key={option.id} className='d-flex d-flex justify-content-end mx-auto'> 
                <Form.Label htmlFor={`option ${option.id}`}>
                 {option.name} 
                </Form.Label>
                <Form.Check
                 id={`option ${option.id}`}
                 className='px-2'
                 type='checkbox'
                 checked={option.selected}
                 onChange={() => handleOptions(option.id)} 
                 />    
              </div> 
            ))}
        </DropdownButton>
     </Form.Group>
    )
}

export default MultiSelect;