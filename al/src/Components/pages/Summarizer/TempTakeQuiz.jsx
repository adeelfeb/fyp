import React, { useState } from 'react';
import './TemptakeQuiz.css';
import McqsData from '../QuizAssets/MCQS.json';
import ShortQuestionsData from '../QuizAssets/Short.json';

export default function TakeQuiz() {
    const [indexOfMcqs, setIndexOfMcqs] = useState(0);
    const [indexOfShort, setIndexOfShort] = useState(0);
    const [isMcqsFinished, setIsMcqsFinished] = useState(false);
    const [mcqScore, setMcqScore] = useState(0);
    const [shortScore, setShortScore] = useState(0);
    const [resultEnd, setResultEnd] = useState(false);
    const [userAnswers, setUserAnswers] = useState({});
    const [selectedOption, setSelectedOption] = useState(null);
    const [mcqLocked, setMcqLocked] = useState(false);

    const mcqsQuestions = McqsData.mcqs;
    const shortQuestions = ShortQuestionsData.short_questions;

    const handleNextQuestion = () => {
        if (isMcqsFinished) {
            if (indexOfShort < shortQuestions.length - 1) {
                setIndexOfShort(indexOfShort + 1);
            } else {
                setResultEnd(true);
            }
        } else {
            if (selectedOption !== null) {
                document.querySelectorAll('.option').forEach(option => {
                    option.classList.remove('correct');
                    option.classList.remove('wrong');
                });

                if (indexOfMcqs < mcqsQuestions.length - 1) {
                    setIndexOfMcqs(indexOfMcqs + 1);
                    setSelectedOption(null);
                    setMcqLocked(false);
                } else {
                    setIsMcqsFinished(true);
                    setMcqLocked(false);
                }
            }
        }
    };

    const checkAns = (selectedOptionIndex) => {
        if (!mcqLocked) {
            const currentQuestion = mcqsQuestions[indexOfMcqs];

            document.querySelectorAll('.option').forEach(option => {
                option.classList.remove('correct');
                option.classList.remove('wrong');
            });

            setSelectedOption(selectedOptionIndex);

            if (selectedOptionIndex === currentQuestion.answer) {
                setMcqScore(mcqScore + 1); // Increase score for correct MCQ answer
                document.querySelector(`[data-option="${currentQuestion.answer}"]`).classList.add('correct');
            } else {
                document.querySelector(`[data-option="${selectedOptionIndex}"]`).classList.add('wrong');
                document.querySelector(`[data-option="${currentQuestion.answer}"]`).classList.add('correct');
            }

            setMcqLocked(true);
        }
    };

    const handleShortAnswer = (answer) => {
        const correctAnswer = shortQuestions[indexOfShort].answer;
        const isCorrect = answer.trim().toLowerCase() === correctAnswer.trim().toLowerCase();
        if (isCorrect) {
            setShortScore(shortScore + 1); // Increase score for correct short answer
        }

        setUserAnswers(prevAnswers => ({
            ...prevAnswers,
            [indexOfShort]: { userAnswer: answer, correctAnswer: correctAnswer }
        }));
    };

    const handleNextButtonClick = () => {
        if (isMcqsFinished) {
            handleShortAnswer(userAnswers[indexOfShort]?.userAnswer || "");
            handleNextQuestion();
        } else {
            handleNextQuestion();
        }
    };

    const currentQuestion = isMcqsFinished ? shortQuestions[indexOfShort] : mcqsQuestions[indexOfMcqs];
    const isMcqs = !isMcqsFinished;

    return (
        <div className="mainContainerForQuiz">
            <div className="containerForQuiz">
                <h1>Quiz</h1>
                <hr />
                {resultEnd ? (
                    <>
                        <h2>Your MCQ Score: {mcqScore} out of {mcqsQuestions.length}</h2>
                        <h2>Your Short Answer Score: {shortScore} out of {shortQuestions.length}</h2>
                        <h2>Total Score: {mcqScore + shortScore} out of {mcqsQuestions.length + shortQuestions.length}</h2>
                        <button onClick={() => {
                            setIndexOfMcqs(0);
                            setIndexOfShort(0);
                            setIsMcqsFinished(false);
                            setMcqScore(0);
                            setShortScore(0);
                            setResultEnd(false);
                            setUserAnswers({});
                            setMcqLocked(false);
                            setSelectedOption(null);
                        }}>Reset</button>
                    </>
                ) : (
                    currentQuestion && (
                        <>
                            <h2>{indexOfMcqs + indexOfShort + 1}. {currentQuestion.question}</h2>
                            {isMcqs ? (
                                <ul>
                                    {Object.entries(currentQuestion.options).map(([key, option], index) => (
                                        <li 
                                            key={key} 
                                            className="option"
                                            data-option={index + 1} 
                                            onClick={() => checkAns(index + 1)}
                                        >
                                            {option}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <ul>
                                    
                                        <textarea 
                                        placeholder="Your answer" 
                                        value={userAnswers[indexOfShort]?.userAnswer || ""}
                                        onChange={(e) => handleShortAnswer(e.target.value)} 
                                        className='InputBoxForShortANS'
                                    >   </textarea>

                                </ul>
                            )}
                            <button onClick={handleNextButtonClick} className='NextButton'>Next</button>
                            <div className="indexOfQuestion">
                                {isMcqs ? `${indexOfMcqs + 1}- MCQ of ${mcqsQuestions.length}` : `${indexOfShort + 1}- Short Question of ${shortQuestions.length}`}
                            </div>
                        </>
                    )
                )}
            </div>
        </div>
    );
}


