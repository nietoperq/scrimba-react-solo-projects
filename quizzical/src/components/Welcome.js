import blobBlue from './../img/blob-blue.png'
import blobYellow from './../img/blob-yellow.png'

function Welcome(props) {
    return (
        <div className="welcome-screen">
            <h1>Quizzical</h1>
            <p>Some description if needed</p>
            <button className="button" onClick={props.handleClick}>Start quiz</button>
            <img className="blob blob-blue" src={blobBlue} alt="" />
            <img className="blob blob-yellow" src={blobYellow} alt="" />
        </div>
    );
}

export default Welcome;