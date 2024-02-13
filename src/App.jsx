import './App.css';
import Card from './components/Card/Card';
import NavBar from './components/NavBar/NavBar';
import beach from './assets/beach.png';
import sun from './assets/sun.png';
import Switcher from './components/CitiesSwitcher/Switcher';
import { useState } from 'react';
import dummyData from './data/data';
import cloud from './assets/clouds.png';
import winter from './assets/indoors.png';
import rain from './assets/rain.svg';
import ConfigCard from './components/ConfigCard/ConfigCard';

function App() {
  const [selectedCity, setSelectedCity] = useState(1);
  const [selectedOption, setSelectedOption] = useState(1);

  const selectCityHandler = (data) => {
    setSelectedCity(data);
  };
  const selectedOptioHandler = (data) => {
    setSelectedOption(data);
  };

  let icon = dummyData[selectedCity].weatherToday.icon;

  return (
    <div>
      <div className='container'>
        <div className='floating-up'>
          {selectedOption === 0 && (
            <img
              className={icon === 'sunny' ? 'sun' : ''}
              src={icon === 'sunny' ? sun : icon === 'cloudy' ? cloud : rain}
            ></img>
          )}
        </div>
        {selectedOption === 0 && (
          <div className='floating-down'>
            <img src={icon === 'sunny' ? beach : winter}></img>
          </div>
        )}
        <NavBar onSelectedOption={selectedOptioHandler} />
        <div className='content'>
          {selectedOption === 0 ? (
            <>
              <Card selectedCity={selectedCity} />
              <Switcher onSelected={selectCityHandler} />
            </>
          ) : (
            ''
          )}
          {selectedOption === 1 ? <ConfigCard /> : ''}
        </div>
      </div>
    </div>
  );
}

export default App;
