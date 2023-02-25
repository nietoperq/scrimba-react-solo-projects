function Welcome(props) {
    return (
        <div className="welcome-screen">
            <h1>Quizzical</h1>
            <p>Some description if needed</p>
            <button className="button" onClick={props.handleClick}>Start quiz</button>
        </div>
    );
}

export default Welcome;