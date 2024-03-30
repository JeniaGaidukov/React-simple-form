// import { Form } from "./components/Form";
import { useState } from 'react';
import './App.css';
import { FormInput } from './components/FormInputs';

export function App() {
  const [values, setValues] = useState({
    username: '',
    surname: '',
    phone: '',
    email: '',
    password: '',
  });

  const inputs = [
    {
      name: 'username',
      type: 'text',
      placeholder: 'Enter your Name',
      errorMessage: 'Username should be 3-16 characters',
      label: 'Username:',
      pattern: '^[A-Za-z0-9]{3,16}$',
      required: true,
    },
    {
      name: 'surname',
      type: 'text',
      placeholder: 'Enter your Surname',
      label: 'Surname:',
    },
    {
      name: 'phone',
      type: 'tel',
      placeholder: 'Enter phone number',
      errorMessage: 'The phone number must start with +380',
      label: 'Phone number:',
      pattern: '^((\\+380)|0)[0-9]{9}$',
      required: true,
    },
    {
      name: 'email',
      type: 'text',
      placeholder: 'Enter your Email',
      errorMessage: 'Email is invalid',
      label: 'Email:',
      pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$',
      required: true,
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'Enter your password',
      errorMessage: 'Password must contain at least 8 symbols and one digit',
      label: 'Password:',
      pattern: '^(?=.*[0-9])[a-zA-Z0-9]{8,}$',
      required: true,
    },
  ];
  console.log();
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <div className="container">
      <form id="form" className="form" onSubmit={handleFormSubmit}>
        <h1 className="form__title">Create Account</h1>
        {inputs.map((input, index) => (
          <FormInput
            key={index}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <div className="form__field">
          <button className="form__button" type="submit">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
