import { Form, DropdownButton } from 'react-bootstrap';
import { SelectOptions } from '../services/options';

interface IMultiSelect {
  selectedOptions: string[];
  setSelectedOptions: React.Dispatch<React.SetStateAction<string[]>>;
}

const MultiSelect = ({ selectedOptions, setSelectedOptions }: IMultiSelect) => {
  
  const handleOptions = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((o) => o !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <Form.Group className='d-flex justify-content-center p-3'>
      <Form.Label className='mt-2 mx-3'>مهارت ها:</Form.Label>
      <DropdownButton title='مهارت ها' drop='down-centered' variant='light'>
        {SelectOptions.map((option) => (
          <div key={option} className='d-flex justify-content-center px-1 my-2'>
            <Form.Label>{option}</Form.Label>
            <Form.Check
              defaultChecked={selectedOptions.includes(option)}
              className='me-1'
              type='checkbox'
              onClick={() => handleOptions(option)}
            />
          </div>
        ))}
      </DropdownButton>
    </Form.Group>
  );
};

export default MultiSelect;