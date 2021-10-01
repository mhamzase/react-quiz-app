import React, { useState } from 'react'
import './App.css';

function App() {

  const questions = [
    {
      questionText: 'Which one is the largest ocean in the World?',
      answerOptions: [
        { answerText: 'Indian', isCorrect: false },
        { answerText: 'Pacific', isCorrect: true },
        { answerText: 'Atlantic', isCorrect: false },
        { answerText: 'Arctic', isCorrect: false }
      ]
    },
    {
      questionText: 'Which country is known as the "playground of Europe" ',
      answerOptions: [
        { answerText: 'Austria', isCorrect: false },
        { answerText: 'Holland', isCorrect: false },
        { answerText: 'Switzerland', isCorrect: true },
        { answerText: 'Italy', isCorrect: false }
      ]
    },
    {
      questionText: 'In which country, white elephant is found? ',
      answerOptions: [
        { answerText: 'India', isCorrect: false },
        { answerText: 'Sri Lanka', isCorrect: false },
        { answerText: 'Thailand', isCorrect: true },
        { answerText: 'Malaysia', isCorrect: false }
      ]
    },
    {
      questionText: 'Which one is the largest producer of tea in the world? ',
      answerOptions: [
        { answerText: 'China', isCorrect: true },
        { answerText: 'Kenya', isCorrect: false },
        { answerText: 'Pakistan', isCorrect: false },
        { answerText: 'India', isCorrect: false }
      ]
    },
    {
      questionText: 'Which country is the largest producer of coffe in the world ',
      answerOptions: [
        { answerText: 'Vietnam', isCorrect: false },
        { answerText: 'Brazil', isCorrect: true },
        { answerText: 'Colombia', isCorrect: false },
        { answerText: 'Mexico', isCorrect: false }
      ]
    },
    {
      questionText: 'Who invented the light bulb?',
      answerOptions: [
        { answerText: 'Newton', isCorrect: false },
        { answerText: 'Einstein', isCorrect: false },
        { answerText: 'Edison', isCorrect: true },
        { answerText: 'Franklin', isCorrect: false }
      ]
    },
    {
      questionText: 'Who painted the Mona Lisa?',
      answerOptions: [
        { answerText: 'Donatello', isCorrect: false },
        { answerText: 'Michelangelo', isCorrect: false },
        { answerText: 'Leonardo', isCorrect: true },
      ]
    }
  ]


const [currentQuestion,setCurrentQuestion] = useState(0)
const [score, setScore] = useState(0)
const [showScore, setShowScore] = useState(false)

const handleOptionClick = (isCorrect) =>{
      if(isCorrect)
      {
        setScore(score+1);
      }
      
      const nextQuestion = currentQuestion + 1;

      if(nextQuestion < questions.length)
      {
         setCurrentQuestion(nextQuestion)
      }
      else
      {
        setShowScore(true)
      }

}

  return (
    <div className='app'>
      {/* HINT: replace "false" with logic to display the 
    score when the user has answered all the questions */}
      {showScore ? (
        <div className='score-section'>Your score {score} out of {questions.length}</div>
      ) : (
          <>
            <div className='question-section'>
              <div className='question-count'>
                <span>Question {currentQuestion+1}</span>/{questions.length}
              </div>
              <div className='question-text'>{questions[currentQuestion].questionText}</div>
            </div>
            <div className='answer-section'>
             
             {questions[currentQuestion].answerOptions.map((answerOption) =>(

               <button onClick={() => handleOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>

             ))}
              
            </div>
          </>
        )}
    </div>
  );
}

export default App;
