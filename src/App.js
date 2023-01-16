import './App.css';
import { useState, useEffect } from 'react';

import quizData from './quizData';
// import Header from './components/Header';
import Question from './components/Question';


function App() {
  const [data, setData] = useState(quizData)

  useEffect(() => {
    setData(quizData)
  }, [])

  return (
    <div className='app'>
      {/* <Header /> */}
      {data.map(datas => (
        <Question key={datas.id} item={datas}/>
      ))}
      <button className='checkBtn'>Check Answers</button>
    </div>
  );
}

export default App;