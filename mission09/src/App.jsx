import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [clickedName, setClickedName] = useState('');
  const [clickedDateTime, setClickedDateTime] = useState('');
  const [isNightMode, setIsNightMode] = useState(false);

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleClick = () => {
    setClickedName(name);
    setClickedDateTime(getCurrentDateTime());
  };

  const getCurrentDateTime = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분 ${seconds}초`;
  };

  const toggleMode = () => {
    setIsNightMode(prevMode => !prevMode);
  };

  return (
    <div className={`App ${isNightMode ? 'night-mode' : 'light-mode'}`}>
      <header className="App-header">
        <button className="mode" onClick={toggleMode}>{isNightMode ? 'light mode' : 'night mode'}</button>
        <h1>이름을 입력해주세요</h1>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleInputChange}
        />
        <br/>
        <button className="namebttn" onClick={handleClick}>확인</button>
        {clickedName && (
          <>
            <p>
              Hello, {clickedName}!
            </p>
            <p>
              Current date and time: {clickedDateTime}
            </p>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
