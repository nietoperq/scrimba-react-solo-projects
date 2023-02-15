import mailIcon from "./../img/mail.png";

function Info() {
    return (
        <section className="info-section">
            <img className="info-picture" src="https://images.pexels.com/photos/6897077/pexels-photo-6897077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <h1 className="info-name">Mittens Kittens</h1>
            <p className="info-title">Very Cute Cat</p>
            <p className="info-website">mittenskittens.website</p>
            <button className="info-button"><img src={mailIcon} />Email</button>
        </section>
    );
}

export default Info;