/* eslint-disable react/prop-types */
import './ConfigCard.css';

import { useEffect, useState } from 'react';

const ConfigCard = ({ selectedCity }) => {
  const [move, setMove] = useState(false);

  useEffect(() => {
    setMove(true);
    setTimeout(() => {
      setMove(false);
    }, 2000);
  }, [selectedCity]);

  console.log(move);

  return (
    <>
      <div
        className={move ? 'card-side move-card-side' : 'card-side'}
        style={{ padding: '4rem ' }}
      >
        <div className='card-side-content'>
          <div className='header'>
            <p>Your Cities</p>
          </div>
          <div>
            <ul>
              <li>Portsaid, Egypt</li>
              <li>Annaba, Algeria</li>
              <li>Soest, Germany</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='card'></div>
    </>
  );
};

export default ConfigCard;
