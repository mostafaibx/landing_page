/* eslint-disable react/prop-types */
import { useState } from 'react';
import './Switcher.css';

const Switcher = ({ onSelected }) => {
  const [selected, setSelected] = useState(1);

  const selectHandler = (e) => {
    setSelected(e);
    onSelected(e);
  };

  return (
    <div className='switcher'>
      <div
        className={`icon ${selected === 0 ? 'selected' : ''}`}
        onClick={() => selectHandler(0)}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 384 512'
          fill='currentColor'
        >
          <path d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z' />
        </svg>
      </div>
      <div
        className={`icon ${selected === 1 ? 'selected' : ''}`}
        onClick={() => selectHandler(1)}
      >
        {' '}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 384 512'
          fill='currentColor'
        >
          <path d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z' />
        </svg>
      </div>
      <div
        className={`icon ${selected === 2 ? 'selected' : ''}`}
        onClick={() => selectHandler(2)}
      >
        {' '}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 384 512'
          fill='currentColor'
        >
          <path d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z' />
        </svg>
      </div>
    </div>
  );
};

export default Switcher;
