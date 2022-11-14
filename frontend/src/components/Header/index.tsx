import logo from "../../assets/img/logo.svg";
import './styles.css';

function Header() {
    return (
        <>
            <header>
                <div className="dsmeta-logo-container">
                    <img src={logo} alt="DS Meta" />
                    <h1>DS Meta</h1>
                    <p>
                        Developed by
                        <a href="https://github.com/olvericc"> @olvericc</a>
                    </p>
                </div>
            </header>
        </>
    );
}

export default Header;