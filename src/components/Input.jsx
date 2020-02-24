import React, { useEffect } from 'react';
import styled from 'styled-components';

import { colors } from '../styleUtils';

const Container = styled.div`
  display: block;
  margin-bottom: ${props => props.marginBottom};
  input,
  label {
    color: ${props => props.inputError} !important;
  }
  #country {
    display: flex;
    align-items: center;
    input {
      margin: 7px;
    }
    img {
      height: 30px;
      width: 50px;
    }
  }
`;

const Input = ({
  type,
  label,
  name,
  state,
  onChange,
  isChecked,
  value,
  icon,
  options,
  placeholder,
  isValid
}) => {
  if (type === 'checkbox') {
    return (
      <Container
        marginBottom='0px'
        inputError={isValid === true || isValid === null ? colors.label : 'red'}
      >
        <label>
          <input
            name={name}
            onChange={onChange}
            checked={isChecked}
            type={type}
          />
          <div id='term'>{label}</div>
        </label>
      </Container>
    );
  } else if (type === 'dropdown') {
    return (
      <Container
        marginBottom='15px'
        inputError={isValid ? colors.label : 'red'}
      >
        <select value={state} onChange={onChange} name={name}>
          <option value=''>{name}</option>
          {options.map(option => {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })}
        </select>
      </Container>
    );
  } else if (type === 'radio') {
    return (
      <Container
        marginBottom='15px'
        inputError={isValid ? colors.label : 'red'}
      >
        <label id='country'>
          <input
            name={name}
            type={type}
            value={value}
            checked={state === value}
            onChange={onChange}
          />
          <img src={icon} alt={value} />
        </label>
      </Container>
    );
  } else if (type === 'text' && name === 'phone') {
    return (
      <Container
        marginBottom='15px'
        inputError={isValid ? colors.label : 'red'}
      >
        <div id='phone-label'>
          <label>{label}</label>
          <p>Lorem ipsum dolor.</p>
        </div>
        <input
          name={name}
          value={state}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
        />
      </Container>
    );
  }

  return (
    <Container marginBottom='15px' inputError={isValid ? colors.label : 'red'}>
      <label>{label}</label>
      <input name={name} value={state} onChange={onChange} type={type} />
    </Container>
  );
};

export default Input;
