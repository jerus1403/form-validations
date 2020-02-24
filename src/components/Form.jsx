import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';

import { colors, breakpoints } from '../styleUtils';
import Input from './Input';

import Canada from '../assets/ic-canada-desktop@3x.jpg';
import Usa from '../assets/ic-usa-desktop@3x.jpg';
import Tooltip from '../assets/ico-help-desktop@3x.png';

const RegisterButton = styled.button`
  background-color: #1b6fc5;
  color: ${colors.white};
  font-size: 14px;
  line-height: 1.1;
  padding: 10px 30px;
  width: 50%;
  margin: 20px auto 0 auto;
  border: none;
  @media (max-width: ${breakpoints.mobile}) {
    width: 90%;
  }
`;

const Error = styled.div`
  position: relative;
  left: 40px;
  text-align: left;
  width: 556px;
  margin: auto;
  @media (max-width: ${breakpoints.mobile}) {
    width: auto;
    left: 0;
  }
`;

const ErrorMessage = styled.div`
  color: red;
`;

const Term = styled.div`
  margin: auto;
  width: 556px;
  padding: 15px 0;
  div {
    padding: 5px 10px;
  }
  #term {
    display: inline;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: auto;
    div {
      padding: 5px;
    }
  }
`;

const Box = styled.div`
  text-align: center;
  height: 735px;
  width: 556px;
  margin: auto;
  background: ${colors.formBg};
  background: ${colors.formBgGradient};
  #required {
    text-align: left;
    padding: 15px 15px 0;
  }
  input {
    padding: 0 5px;
  }
  input[type='text'],
  input[type='password'] {
    width: 516px;
    height: 35px;
    border: none;
  }
  input::placeholder {
    color: ${colors.textBox};
  }
  .birthdate,
  #phone-label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    label {
      margin-bottom: 0px;
    }
    p {
      margin: 0 15px 10px;
      font-size: 12px;
      color: #206fcc;
      line-height: 1.2;
    }
    .tooltip {
      margin-right: 15px;
      img {
        width: 22px;
        height: 22px;
      }
    }
  }
  .tooltip #tooltip {
    background-color: #1b6fc5;
    color: ${colors.white};
    padding: 7px;
    border-radius: 3px;
  }
  .type-dark.place-left:after {
    border: none;
  }
  .birthday-inputs {
    display: flex;
    justify-content: center;
    margin: 5px 15px;
    div {
      flex-grow: 1;
      width: 164px;
      height: 35px;
      select {
        color: ${colors.textBox};
        width: 100%;
        height: 100%;
        border: none;
        background-color: ${colors.white};
      }
    }
    div:nth-child(1),
    div:nth-child(2) {
      margin-right: 5px;
    }
  }
  .country-container {
    display: flex;
  }
  @media (max-width: ${breakpoints.mobile}) {
    width: auto;
    input[type='text'],
    input[type='password'] {
      width: 90%;
    }
  }
`;

const Container = styled.div`
  margin: auto;
  label {
    text-align: left;
    line-height: 1.1;
    margin-left: 15px;
    margin-bottom: 5px;
    display: block;
  }
`;

const Form = () => {
  const dropDownData = [
    {
      default: 'month',
      options: [
        'January',
        'Febuary',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ]
    },
    {
      default: 'day',
      options: Array.from(Array(32), (_, x) => x)
    },
    {
      default: 'year',
      options: Array.from(Array(15), (_, x) => x + 1990)
    }
  ];
  const radioData = [
    {
      value: 'canada',
      icon: Canada
    },
    {
      value: 'usa',
      icon: Usa
    }
  ];
  // INITIAL STATE FOR ALL THE INPUT FIELDS
  const intialState = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: '',
    month: '',
    day: '',
    year: '',
    phone: '',
    country: 'canada',
    zip: '',
    accept_term: null,
    offer_term: false
  };

  // INITIAL STATE FOR ERRORS FROM THE INPUT FIELDS
  const errorInitialState = {
    hasError: null,
    firstNameError: '',
    firstNameValid: true,
    lastNameError: '',
    lastNameValid: true,
    emailError: '',
    emailValid: true,
    passwordError: '',
    passwordValid: true,
    confirmPasswordError: '',
    confirmPasswordValid: true,
    birthdateError: '',
    birthdateValid: true,
    phoneError: '',
    phoneValid: true,
    countryError: '',
    countryValid: true,
    zipError: '',
    zipValid: true,
    acceptTermError: '',
    acceptTermValid: null,
    offerTermError: '',
    offerTermValid: false
  };

  const [field, setField] = useState(intialState);
  const [errorObject, setError] = useState(errorInitialState);

  useEffect(() => {
    console.log(field, 'FIELD');
  }, [field, errorObject]);

  // ONCHANGE METHOD TO GET VALUE FROM ALL THE INPUT FIELDS
  const onChangeHandler = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setField({
      ...field,
      [event.target.name]: value
    });
    // REGULAR EXPRESSIONS TO CHECK NUMERIC FIELD AND EMAIL FIELD
    const nameRegex = /^[A-Za-z]+$/;
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/;
    const phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
    const zipRegex = /(^\d{5}$)|(^\d{5}-\d{4}$)/;

    let errors = errorObject;
    switch (name) {
      case 'first_name':
        errors.firstNameError = nameRegex.test(value)
          ? ''
          : '- Invalid First Name';
        errors.firstNameValid = nameRegex.test(value) ? true : false;
        break;
      case 'last_name':
        errors.lastNameError = nameRegex.test(value)
          ? ''
          : '- Invalid Last Name';
        errors.lastNameValid = nameRegex.test(value) ? true : false;
        break;
      case 'email':
        errors.emailError = emailRegex.test(value)
          ? ''
          : '- Invalid Email Address';
        errors.emailValid = emailRegex.test(value) ? true : false;
        break;
      case 'password':
        errors.passwordError = passwordRegex.test(value)
          ? ''
          : '- Password is not valid';
        errors.passwordValid = passwordRegex.test(value) ? true : false;
        break;
      case 'confirm_password':
        errors.confirmPasswordError =
          passwordRegex.test(value) && value === field.password
            ? ''
            : "- Passwords don't match";
        errors.confirmPasswordValid =
          passwordRegex.test(value) && value === field.password ? true : false;
        break;
      case 'month':
        errors.birthdateError = value ? '' : '- Invalid Birthdate';
        errors.birthdateValid = value ? true : false;
        break;
      case 'day':
        errors.birthdateError = value ? '' : '- Invalid Birthdate';
        errors.birthdateValid = value ? true : false;

        break;
      case 'year':
        errors.birthdateError = value ? '' : '- Invalid Birthdate';
        errors.birthdateValid = value ? true : false;
        break;
      case 'phone':
        errors.phoneError = phoneRegex.test(value)
          ? ''
          : '- Invalid Phone Number';
        errors.phoneValid = phoneRegex.test(value) ? true : false;
        break;
      case 'country':
        errors.countryError = value ? '' : '- Invalid Country';
        errors.countryValid = value ? true : false;
        break;
      case 'zip':
        errors.zipError = zipRegex.test(value) ? '' : '- Invalid Zip Code';
        errors.zipValid = zipRegex.test(value) ? true : false;
        break;
      case 'accept_term':
        errors.acceptTermError = value
          ? ''
          : '- You must accept the terms & conditions and privacy policy';
        errors.acceptTermValid = true ? true : false;
        break;
      default:
        break;
    }
    setError({ ...errors });
  };

  const submitHandler = event => {
    event.preventDefault();
    console.log('SUBMITTED FORM');
  };

  const term = (
    <span>
      Yes, I accept the <u>Terms & Conditions</u> and <u>Privacy Policy</u>
    </span>
  );
  return (
    <Container>
      <Box>
        <p
          id='required'
          style={{
            color:
              errorObject.firstNameError ||
              errorObject.lastNameError ||
              errorObject.emailError ||
              errorObject.passwordError ||
              errorObject.confirmPasswordError ||
              errorObject.birthdateError ||
              errorObject.phoneError ||
              errorObject.zipError ||
              errorObject.acceptTermError
                ? 'red'
                : colors.label
          }}
        >
          * Fields required
        </p>
        <Input
          label='First Name*'
          name='first_name'
          state={field.first_name}
          isValid={errorObject.firstNameValid}
          type='text'
          onChange={onChangeHandler}
        />
        <Input
          label='Last Name*'
          name='last_name'
          state={field.last_name}
          isValid={errorObject.lastNameValid}
          type='text'
          onChange={onChangeHandler}
        />
        <Input
          label='Email Address*'
          name='email'
          state={field.email}
          isValid={errorObject.emailValid}
          type='text'
          onChange={onChangeHandler}
        />
        <Input
          label='Choose Password*'
          name='password'
          state={field.password}
          isValid={errorObject.passwordValid}
          type='password'
          onChange={onChangeHandler}
        />
        <Input
          label='Confirm Password*'
          name='confirm_password'
          state={field.confirm_password}
          isValid={errorObject.confirmPasswordValid}
          type='password'
          onChange={onChangeHandler}
        />
        <div className='birthdate'>
          <label
            style={{
              color:
                errorObject.birthdateValid ||
                errorObject.birthdateValid === null
                  ? colors.label
                  : 'red'
            }}
          >
            Birthdate*
          </label>
          <div className='tooltip'>
            <ReactTooltip id='tooltip' effect='solid' place='left'>
              <div>We'll use this to send you birthday bonus points</div>
            </ReactTooltip>
            <img
              src={Tooltip}
              alt='tooltip'
              data-for='tooltip'
              data-tip
              data-event='click focus'
            />
          </div>
        </div>
        <div className='birthday-inputs'>
          {dropDownData.map(item => {
            return (
              <Input
                key={item.default}
                name={item.default}
                type='dropdown'
                options={item.options}
                state={field[item.default]}
                isValid={errorObject.birthdateValid}
                onChange={onChangeHandler}
              />
            );
          })}
        </div>

        <Input
          label='Phone Number*'
          name='phone'
          placeholder='(XXX) XXX-XXXX'
          state={field.phone}
          isValid={errorObject.phoneValid}
          type='text'
          onChange={onChangeHandler}
        />
        <label>Country*</label>
        <div className='country-container'>
          {radioData.map(option => {
            return (
              <Input
                key={option.value}
                name='country'
                state={field.country}
                value={option.value}
                icon={option.icon}
                type='radio'
                onChange={onChangeHandler}
              />
            );
          })}
        </div>

        <Input
          label='ZipPostal Code*'
          name='zip'
          state={field.zip}
          isValid={errorObject.zipValid}
          type='text'
          onChange={onChangeHandler}
        />
      </Box>
      <Term>
        <Input
          label={term}
          name='accept_term'
          type='checkbox'
          isChecked={field.accept_term}
          isValid={field.accept_term}
          onChange={onChangeHandler}
        />
        <Input
          label="Yes, I'd like to receive news and special offers"
          name='offer_term'
          type='checkbox'
          isChecked={field.offer_term}
          isValid={true}
          onChange={onChangeHandler}
        />
        <RegisterButton onClick={submitHandler}>REGISTER</RegisterButton>
      </Term>
      <Error>
        {errorObject.firstNameError ||
        errorObject.lastNameError ||
        errorObject.emailError ||
        errorObject.passwordError ||
        errorObject.confirmPasswordError ||
        errorObject.birthdateError ||
        errorObject.phoneError ||
        errorObject.zipError ||
        errorObject.acceptTermError ? (
          <ErrorMessage>The following errors have occurred:</ErrorMessage>
        ) : (
          ''
        )}

        {!errorObject.firstNameValid ? (
          <ErrorMessage>{errorObject.firstNameError}</ErrorMessage>
        ) : (
          ''
        )}
        {!errorObject.lastNameValid ? (
          <ErrorMessage>{errorObject.lastNameError}</ErrorMessage>
        ) : (
          ''
        )}
        {!errorObject.emailValid ? (
          <ErrorMessage>{errorObject.emailError}</ErrorMessage>
        ) : (
          ''
        )}
        {!errorObject.passwordValid ? (
          <ErrorMessage>{errorObject.passwordError}</ErrorMessage>
        ) : (
          ''
        )}
        {!errorObject.confirmPasswordValid ? (
          <ErrorMessage>{errorObject.confirmPasswordError}</ErrorMessage>
        ) : (
          ''
        )}
        {!errorObject.birthdateValid ? (
          <ErrorMessage>{errorObject.birthdateError}</ErrorMessage>
        ) : (
          ''
        )}
        {!errorObject.phoneValid ? (
          <ErrorMessage>{errorObject.phoneError}</ErrorMessage>
        ) : (
          ''
        )}
        {!errorObject.countryValid ? (
          <ErrorMessage>{errorObject.countryError}</ErrorMessage>
        ) : (
          ''
        )}
        {!errorObject.zipValid ? (
          <ErrorMessage>{errorObject.zipError}</ErrorMessage>
        ) : (
          ''
        )}
        {!field.accept_term === true ? (
          <ErrorMessage>{errorObject.acceptTermError}</ErrorMessage>
        ) : (
          ''
        )}
      </Error>
    </Container>
  );
};

export default Form;
