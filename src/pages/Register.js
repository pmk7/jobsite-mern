import React, { useState, useEffect } from 'react';
import { Logo, FormRow, Alert } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';

const initalState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
  showAlert: true,
};

const Register = () => {
  const [values, setValues] = useState(initalState);

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  const handleChange = (e) => {
    console.log(e);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={handleSubmit}>
        <Logo />
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        {values.showAlert && <Alert />}
        <div className='form-row'>
          <FormRow
            type='text'
            name='name'
            value={values.name}
            handleChange={handleChange}
          />
          <FormRow
            type='text'
            name='email'
            value={values.email}
            handleChange={handleChange}
          />
          <FormRow
            type='text'
            name='password'
            value={values.password}
            handleChange={handleChange}
          />
        </div>
        <button type='submit' className='btn btn-block'>
          submit
        </button>
        <p>
          <button type='button' onClick={toggleMember} className='member-btn'>
            Register
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
