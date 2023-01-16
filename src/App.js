import './App.css';
import { useState, useEffect } from 'react';

import quizData from './quizData';
import Header from './components/Header';
import Question from './components/Question';


function App() {
  const [datas, setDatas] = useState(quizData)
  const [isGameStarting, setIsGameStarting] = useState(false)
  const [gameStatus, setGameStatus] = useState(false)

  useEffect(() => {
    setDatas(quizData)
  }, [])

  function startGame() {
    setIsGameStarting(true)
    setGameStatus(true)
  }

  function endGame() {
    // setIsGameStarting(false)
    setGameStatus(false)
  }

  return (
    <div className='app'>
      {!isGameStarting ? <Header startGame={startGame}/> :
        datas.map(data => (
          <Question key={data.id} item={data} gameStatus={gameStatus} />
        ))
      }
      {isGameStarting ? <button className='checkBtn' onClick={endGame}>Check Answers</button> : ''}
    </div>
  );
}

export default App;