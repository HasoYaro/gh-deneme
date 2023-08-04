import insta from '../assets/images/insta.svg'
import twitter from '../assets/images/twitter.svg'
import '../styles/Footer.css'

function Footer() {
    return(
        <>
        <div className="footer">
            <div className="footer-cont">
                <div className="footer-col-head">
                    <h3>Bu site Hasan GENÇSOY tarafından yaratılmıştır.</h3>
                    <h5>Ⓒ 2023 Haso's App. Tüm hakları saklıdır.</h5>
                </div>
                <div className="footer-col-foot">
                    <a href="https://www.instagram.com/gencsoyh/" target="_blank"><img src={insta} alt="instagram" /></a>
                    <a href="https://twitter.com/Kaitenteki" target="_blank"><img src={twitter} alt="twitter" /></a>
                </div>
            </div>
        </div>
        </>
    );
}

export default Footer