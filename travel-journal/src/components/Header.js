import logo from './../img/earth-icon.png';

function Header() {
    return (
        <div className="header">
            <img src={logo} alt="" />
            <h1>my travel journal.</h1>
        </div>
    );
}

export default Header;