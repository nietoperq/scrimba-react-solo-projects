function Question(props) {
    let checkScore = props.checkScore;
    let { id, question, answers } = props.questionData;

    function cleanString(str) {
        let newStr = str.replace(/(&quot\;)/g, "\"");
        newStr = newStr.replace(/(&#039\;)/g, "\'");
        newStr = newStr.replace(/(&ldquo\;)/g, "“");
        newStr = newStr.replace(/(&rdquo\;)/g, "”");
        newStr = newStr.replace(/(&lt\;)/g, "<");
        newStr = newStr.replace(/(&gt\;)/g, ">");
        newStr = newStr.replace(/(&eacute\;)/g, "é");
        newStr = newStr.replace(/(&oacute\;)/g, "ó");
        newStr = newStr.replace(/(&amp\;)/g, "&");

        return newStr;
    }

    const allAnswers = answers.map(eachAnswer => {
        let buttonStyle = "";
        if (checkScore) {
            buttonStyle = "disabled"
        }
        if (eachAnswer.selected && checkScore && eachAnswer.selected !== eachAnswer.correct) {
            buttonStyle = "wrong";
        } else if (checkScore && eachAnswer.correct) {
            buttonStyle = "correct";
        } else if (eachAnswer.selected && !checkScore) {
            buttonStyle = "selected";
        }

        return (
            <button
                key={eachAnswer.id}
                className={`answer ${buttonStyle}`}
                onClick={() => props.handleClick(id, eachAnswer.id)}
                disabled={checkScore}
            >
                {`${cleanString(eachAnswer.answer)}`}
            </button >)
    })

    return (
        <div className="question-container">
            <h2 className="question">{`${cleanString(question)}`}</h2>
            {allAnswers}
        </div>
    );
}

export default Question;