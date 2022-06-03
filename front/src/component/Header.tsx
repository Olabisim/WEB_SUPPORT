
import '../css/header.css'

export const Header = () => {
        return (
                <div className="header_main">

                        
                <div className="content">

                        {/* <img src="images/logo.png" className="logo" alt="DHYMM." /> */}

                        <h1>TRAVELLING<br /> AROUND THE WORLD</h1>
                        <h2>An awesome website is under construction, stay tuned.</h2>

                        <div className="arrow bounce">
                                <a className="fa fa-arrow-down" href="#sd">x</a>
                        </div>

                        <section className="button">

                                <div className="searchBox">
                                        <input className="searchInput"type="email" name="" placeholder="Email address*" />
                                        <button className="searchButton">Notify Me</button>
                                </div>

                        </section>

                        <section className="social_icons">
                                <a href="#sa" title="Facebook" target="_blank"><i className="fa fa-facebook"></i></a>
                                <a href="#a" title="Instagram" target="_blank"><i className="fa fa-instagram"></i></a>
                                <a href="#ad" title="Twitter" target="_blank"><i className="fa fa-twitter"></i></a>
                                <a href="#a" title="Telegram" target="_blank"><i className="fa fa-telegram"></i></a>
                        </section>

                </div>

                </div>
        )
}