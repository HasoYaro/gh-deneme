import logo from '../assets/images/home_icon.svg'
import headerBar from '../assets/images/header_bar.svg'
import '../styles/Header.css'
import { Link } from 'react-router-dom'

function Header() {


    return(
        <>
        <div className="header-div">
            <Link to="/gh-deneme"><img className="header-logo" src={logo} alt="logo" /></Link>
            <label className="header-logo-name">Haso's App</label>
            <label for="check" className="header-checkbtn">
            <img className="header-bar-icon" src={headerBar} alt="header_bar" />
            </label>
            <ul className="header-ul">
                <li><Link to="/database"><div>Veritabanı</div></Link></li>
                <li><Link to="/contact"><div>İletişim</div></Link></li>
                <li><Link to="/login"><div>Giriş</div></Link></li>
            </ul>
        

        <input type="checkbox" id="check"/>
        <div className="header-dropdown">
            <li><Link to="/database">Veritabanı</Link></li>
            <li><Link to="/contact">İletişim</Link></li>
            <li><Link to="/login">Giriş</Link></li>
        </div>
        </div>
        </>
    );
}

export default Header