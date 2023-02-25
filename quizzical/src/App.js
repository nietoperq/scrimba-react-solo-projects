import { useState } from "react";
import Welcome from './components/Welcome';
import Quiz from './components/Quiz';
import blobBlue from './img/blob-blue.png'
import blobYellow from './img/blob-yellow.png'

function App() {

  const [quizStarted, setQuizStarted] = useState(false);

  function toggleQuizStarted() {
    setQuizStarted(prevQuizStarted => !prevQuizStarted);
  }

  return (
    <main>
      {quizStarted ? <Quiz /> : <Welcome handleClick={toggleQuizStarted} />}
      <img className="blob blob-blue" src={blobBlue} alt="" />
      <img className="blob blob-yellow" src={blobYellow} alt="" />
    </main>
  );
}

export default App;
