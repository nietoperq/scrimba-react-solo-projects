import twitterIcon from './../img/twitter-icon.png'
import facebookIcon from './../img/facebook-icon.png'
import instagramIcon from './../img/instagram-icon.png'
import linkedinIcon from './../img/linkedin-icon.png'
import githubIcon from './../img/github-icon.png'

function Footer() {
    return (
        <footer className="footer">
            <a className="footer-link" href="#"> <img src={twitterIcon} /> </a>
            <a className="footer-link" href="#"> <img src={facebookIcon} /> </a>
            <a className="footer-link" href="#"> <img src={instagramIcon} /> </a>
            <a className="footer-link" href="#"> <img src={linkedinIcon} /> </a>
            <a className="footer-link" href="#"> <img src={githubIcon} /> </a>
        </footer>
    );
}

export default Footer;