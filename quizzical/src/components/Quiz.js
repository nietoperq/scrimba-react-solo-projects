import { useState, useEffect } from "react";
import { nanoid } from 'nanoid';
import ReactConfetti from 'react-confetti';
import Question from './Question';


function Quiz() {
    const [questions, setQuestions] = useState([]);
    const [score, setScore] = useState(0);
    const [checkScore, setCheckScore] = useState(false);

    useEffect(() => {
        if (!checkScore) {
            fetch("https://opentdb.com/api.php?amount=5&type=multiple")
                .then(res => res.json())
                .then(data => setQuestions(processQuestions(data.results)))
        }
    }, [checkScore])

    function processQuestions(data) {
        const processedQuestions = [];
        data.forEach(q => {
            processedQuestions.push({
                id: nanoid(),
                question: q.question,
                answers: [
                    {
                        id: nanoid(),
                        selected: false,
                        correct: true,
                        answer: q.correct_answer
                    },
                    ...q.incorrect_answers.map(incorrectAnswer => ({
                        id: nanoid(),
                        selected: false,
                        correct: false,
                        answer: incorrectAnswer
                    }))
                ].sort(() => (Math.random() > 0.5 ? 1 : -1))
            })
        })

        return processedQuestions;
    }

    function toggleAnswer(questionId, answerId) {
        console.log('toggleAnswer');
        setQuestions(prevQuestions =>
            prevQuestions.map((prevQuestion) => {
                if (prevQuestion.id === questionId) {
                    return {
                        ...prevQuestion,
                        answers: prevQuestion.answers.map((answer) => {
                            return answer.id === answerId
                                ? { ...answer, selected: !answer.selected }
                                : { ...answer, selected: false };
                        }),
                    };
                }
                return prevQuestion;
            })
        )
    }

    function toggleCheckScore() {
        let scoreCount = 0;
        questions.forEach(eachQuestion => {
            eachQuestion.answers.forEach(eachAnswer => {
                if (eachAnswer.correct && eachAnswer.selected) {
                    scoreCount++;
                }
            })
        })
        setCheckScore(prevCheckScore => !prevCheckScore);
        setScore(scoreCount);
    }

    const questionList = questions.map(question =>
        <Question key={question.id} questionData={question} handleClick={toggleAnswer} checkScore={checkScore} />
    )

    console.log(checkScore);
    console.log(score);

    const scoreText = <p className="score-text">You scored {score}/5 correct answers</p>;

    return (
        <div className="quiz-screen">
            {checkScore && score === 5 && <ReactConfetti />}
            <div className="question-list">
                {questionList}
            </div>
            {checkScore && scoreText}
            <button className="button small-button" onClick={toggleCheckScore}>{checkScore ? "Play again" : "Check answers"}</button>
        </div>
    );
}

export default Quiz;