import React, { useState } from "react";
import questionsData from "../questions.json"; // Import the JSON file

const InterviewQuiz = ({ category, role }) => {

  
  // Filter questions by role & category
  const questions = questionsData.filter(
    (q) => q.role.toLowerCase() === role.toLowerCase() && q.category === category
  );

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  

  if (!questions.length)
    return (
      <div className="text-center text-red-600">
        No questions available for this category.
      </div>
    );

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (option) => {
    setSelectedAnswers({ ...selectedAnswers, [currentQuestionIndex]: option });
    setShowAnswer(true);
    if (option === currentQuestion.answer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    setShowAnswer(false);
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizFinished(true);
    }
  };

  if (quizFinished)
    return (
      <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-6 space-y-4 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Quiz Finished!</h2>
        <p className="text-xl text-gray-600">Your Score: {score} / {questions.length}</p>
      </div>
    );

  return (
    
    <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-xl p-8 space-y-6 ">
      <h2 className="text-2xl font-semibold text-gray-700">{currentQuestion.question}</h2>
      <div className="space-y-4">
        {currentQuestion.options.map((option, index) => {
          const isCorrect = option === currentQuestion.answer;
          const isSelected = selectedAnswers[currentQuestionIndex] === option;

          return (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              disabled={showAnswer}
              className={`w-full text-left px-4 py-3 rounded-lg border transition ${
                showAnswer
                  ? isCorrect
                    ? "bg-green-500 text-white border-green-600"
                    : isSelected
                    ? "bg-red-500 text-white border-red-600"
                    : "bg-white text-gray-700 border-gray-300"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-indigo-100"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
      {showAnswer && (
        <div className="flex justify-end">
          <button
            onClick={nextQuestion}
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            {currentQuestionIndex + 1 === questions.length ? "Finish Quiz" : "Next"}
          </button>
        </div>
      )}
    </div>
  );
};

export default InterviewQuiz;