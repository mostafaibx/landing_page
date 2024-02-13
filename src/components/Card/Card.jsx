/* eslint-disable react/prop-types */
import './Card.css';

import dummyData from '../../data/data';
import outdoor from '../../assets/outdoor.svg';
import indoor from '../../assets/indoor.svg';
import sun from '../../assets/sun.svg';
import rain from '../../assets/rain.svg';
import cloud from '../../assets/cloud.svg';
import { useEffect, useState } from 'react';

// will fix the logic for below 1
const height = (deg) => {
  let perc = deg * 0.3;
  if (perc < 1) {
    perc = perc + 1;
  }
  return perc;
};

const Card = ({ selectedCity }) => {
  const icon = dummyData[selectedCity].weatherToday;

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
        <div className='card-side-content-main'>
          <div className={move ? 'circle move-circle' : 'circle'}>
            <img
              src={
                dummyData[selectedCity].weatherToday.descr === 'sunny'
                  ? outdoor
                  : indoor
              }
            ></img>
          </div>
          <div className={move ? 'charts move-circle' : 'charts'}>
            {dummyData[selectedCity].chart.map((item) => {
              return (
                <span
                  key={item[0]}
                  style={{ height: `${height(item[1])}rem` }}
                >
                  {item[1]}°<p>{item[0]}</p>
                </span>
              );
            })}
          </div>
        </div>
      </div>

      <div className='card'>
        <div className={move ? 'col1 move-col1' : 'col1'}>
          <div className='weather'>
            <div className='card-header'>
              <p>{dummyData[selectedCity].weatherToday.degree}°</p>
              <img
                className='card-icon'
                src={icon === 'sunny' ? sun : icon === 'cloudy' ? cloud : rain}
              ></img>
            </div>
            <p
              style={{
                fontSize: '1rem',
                fontWeight: 'bold',
                marginTop: '0.75rem',
              }}
            >
              {dummyData[selectedCity].weatherToday.descr}
            </p>
          </div>
          <span></span>
          <p style={{ fontSize: '1rem', fontWeight: 'bold' }}>
            Lorem ipsum dolor sit amet consectetur
          </p>
          <img
            className='card-img'
            src={dummyData[selectedCity].location.img}
            alt='Egypt'
          />
        </div>
        <div className={move ? 'col2 move-col2' : 'col2'}>
          <p>
            {dummyData[selectedCity].location.city},{' '}
            {dummyData[selectedCity].location.country}
          </p>
          <p className='title'>Explore around the world</p>
          <span></span>
          <p>Suitable for</p>
          <div className='activities'>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 448 512'
                fill='currentColor'
              >
                <path d='M320 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM125.7 175.5c9.9-9.9 23.4-15.5 37.5-15.5c1.9 0 3.8 .1 5.6 .3L137.6 254c-9.3 28 1.7 58.8 26.8 74.5l86.2 53.9-25.4 88.8c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l28.7-100.4c5.9-20.6-2.6-42.6-20.7-53.9L238 299l30.9-82.4 5.1 12.3C289 264.7 323.9 288 362.7 288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H362.7c-12.9 0-24.6-7.8-29.5-19.7l-6.3-15c-14.6-35.1-44.1-61.9-80.5-73.1l-48.7-15c-11.1-3.4-22.7-5.2-34.4-5.2c-31 0-60.8 12.3-82.7 34.3L57.4 153.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l23.1-23.1zM91.2 352H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h69.6c19 0 36.2-11.2 43.9-28.5L157 361.6l-9.5-6c-17.5-10.9-30.5-26.8-37.9-44.9L91.2 352z' />
              </svg>
            </div>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 576 512'
                fill='currentColor'
              >
                <path d='M309.5 178.4L447.9 297.1c-1.6 .9-3.2 2-4.8 3c-18 12.4-40.1 20.3-59.2 20.3c-19.6 0-40.8-7.7-59.2-20.3c-22.1-15.5-51.6-15.5-73.7 0c-17.1 11.8-38 20.3-59.2 20.3c-10.1 0-21.1-2.2-31.9-6.2C163.1 193.2 262.2 96 384 96h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-26.9 0-52.3 6.6-74.5 18.4zM160 160A64 64 0 1 1 32 160a64 64 0 1 1 128 0zM306.5 325.9C329 341.4 356.5 352 384 352c26.9 0 55.4-10.8 77.4-26.1l0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 405.7 417 416 384 416c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.4 27.3-10.1 39.2-1.7l0 0C136.7 341.2 165.1 352 192 352c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0z' />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
