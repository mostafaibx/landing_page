/* eslint-disable react/prop-types */
import './ConfigCard.css';
import {
  MapContainer,
  TileLayer,
  useMap,
} from 'https://cdn.esm.sh/react-leaflet';

import { useEffect, useState } from 'react';

const ConfigCard = () => {
  const [move, setMove] = useState(false);

  useEffect(() => {
    setMove(true);
    setTimeout(() => {
      setMove(false);
    }, 2000);
  }, []);

  return (
    <>
      <div
        className={move ? 'card-side move-card-side' : 'card-side'}
        style={{ padding: '4rem ' }}
      >
        <div
          className={
            move
              ? 'card-side-content-config move-card-content-config'
              : 'card-side-content-config'
          }
        >
          <div className='header-config'>
            <p>Your Cities</p>
          </div>
          <div className='list'>
            <ul>
              <li>Portsaid, Egypt</li>
              <li>Annaba, Algeria</li>
              <li>Soest, Germany</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='card'>
        <div
          className={
            move
              ? 'card-content-config  move-card-content-config '
              : 'card-content-config '
          }
        >
          <div className='search'>
            <input
              type='text'
              placeholder='search...'
            />
            <button> + </button>
          </div>
          <div className='map'>
            <img
              src='https://www.shutterstock.com/image-vector/map-city-600nw-671959120.jpg'
              alt='map_placeholder'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfigCard;
