import { useState } from "react";
import Welcome from './components/Welcome';
import Quiz from './components/Quiz';

function App() {

  const [quizStarted, setQuizStarted] = useState(false);

  function toggleQuizStarted() {
    setQuizStarted(prevQuizStarted => !prevQuizStarted);
  }

  return (
    <>
      {quizStarted ? <Quiz /> : <Welcome handleClick={toggleQuizStarted} />}
    </>
  );
}

export default App;
