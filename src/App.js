import './App.css';
import { useState, useEffect } from 'react';

import quizData from './quizData';
import Header from './components/Header';
import Question from './components/Question';


function App() {
  const [datas, setDatas] = useState(quizData)
  // if ready, show the questions else show the header
  const [isReady, setIsReady] = useState(false)
  // if !running, show the correct answers
  const [isRunning, setIsRunning] = useState(false)
  const [score, setScore] = useState(0)

  useEffect(() => {
    setDatas(quizData)
  }, [])

  function startGame() {
    setIsReady(true)
    setIsRunning(true)
  }

  function endGame() {
    setIsReady(false)
    setScore(0)
  }

  const question = datas.map(data => (
    <Question key={data.id} item={data} isRunning={isRunning} score={score} setscore={setScore} />
  ))

  return (
    <div className='app'>
      {!isReady ? <Header startGame={startGame}/> : question}

      {isReady && !isRunning ? <p className='score'>Score: {score}/5</p> : ''}

      {isReady ?
        <div className='btn-container'>
          <button className='checkBtn' onClick={() => setIsRunning(false)}>Check Answers</button>
          <button className='resetBtn' onClick={endGame}>Restart</button>
        </div> : '' 
      }
    </div>
  );
}

export default App;