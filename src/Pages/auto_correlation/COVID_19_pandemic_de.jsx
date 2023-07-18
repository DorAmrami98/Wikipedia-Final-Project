import { Link } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import ACCOVID19PandemicDE from "../../charts_auto_correlation/COVID-19_pandemic_de.png";
import SA from "../../flags/sa.svg";
import US from "../../flags/us.svg";
import IT from "../../flags/it.svg";
import IN from "../../flags/in.svg";
import JP from "../../flags/jp.svg";
import FR from "../../flags/fr.svg";
import DE from "../../flags/de.svg";
import CN from "../../flags/cn.svg";

function AC_COVID_19_pandemic_de() {
    return (
        <>
        <Header />
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4 sidebar">
                    <Link to="/auto-correlation">
                    <div className="card card-body text-center mb-2">
                        <h5>2009 L'Aquila Earthquake</h5>
                        <div className="d-flex justify-content-center">
                            <Link to="/auto-correlation"><img src={US} className="flag_icon mr-3" /></Link>
                            <Link to="/auto-correlation-aquila-earthquake-it"><img src={IT} className="flag_icon" /></Link>
                        </div>
                    </div>
                    </Link>
                    <Link to="/auto-correlation-covid-19-pandemic-en">
                    <div className="card card-body text-center mb-2 active_card_lang">
                        <h5>Covid-19 Pandemie</h5>
                        <div className="d-flex justify-content-center">
                            <Link to="/auto-correlation-covid-19-pandemic-en"><img src={US} className="flag_icon" /></Link>
                            <Link to="/auto-correlation-covid-19-pandemic-de"><img src={DE} className="flag_icon mx-3 active_lang" /></Link>
                            <Link to="/auto-correlation-covid-19-pandemic-fr"><img src={FR} className="flag_icon" /></Link>
                            <Link to="/auto-correlation-covid-19-pandemic-it"><img src={IT} className="flag_icon mx-3" /></Link>
                            <Link to="/auto-correlation-covid-19-pandemic-cn"><img src={CN} className="flag_icon" /></Link>
                            <Link to="/auto-correlation-covid-19-pandemic-sa"><img src={SA} className="flag_icon ml-3" /></Link>
                        </div>
                    </div>
                    </Link>
                    <Link to="/auto-correlation-manchester-arena-bombing-en">
                    <div className="card card-body text-center mb-2">
                        <h5>Manchester Arena Bombing</h5>
                        <div className="d-flex justify-content-center">
                            <Link to="/auto-correlation-manchester-arena-bombing-en"><img src={US} className="flag_icon mr-3" /></Link>
                            <Link to="/auto-correlation-manchester-arena-bombing-sa"><img src={SA} className="flag_icon" /></Link>
                        </div>
                    </div>
                    </Link>
                    <Link to="/auto-correlation-aude-river-flooding">
                    <div className="card card-body text-center mb-2">
                        <h5>Inondation de la rivière Aude</h5>
                        <div className="d-flex justify-content-center">
                            <Link to="/auto-correlation-aude-river-flooding"><img src={FR} className="flag_icon" /></Link>
                        </div>
                    </div>
                    </Link>
                    <Link to="/auto-correlation-visakhapatnam-gas-leak-en">
                    <div className="card card-body text-center mb-2">
                        <h5>Visakhapatnam Gas Leak</h5>
                        <div className="d-flex justify-content-center">
                            <Link to="/auto-correlation-visakhapatnam-gas-leak-en"><img src={US} className="flag_icon mr-3" /></Link>
                            <Link to="/auto-correlation-visakhapatnam-gas-leak-in"><img src={IN} className="flag_icon" /></Link>
                        </div>
                    </div>
                    </Link>
                    <Link to="/auto-correlation-tohoku-earthquake-tsunami-en">
                    <div className="card card-body text-center mb-2">
                        <h5>2011 Tōhoku Earthquake &amp; Tsunami</h5>
                        <div className="d-flex justify-content-center">
                            <Link to="/auto-correlation-tohoku-earthquake-tsunami-en"><img src={US} className="flag_icon mr-3" /></Link>
                            <Link to="/auto-correlation-tohoku-earthquake-tsunami-jp"><img src={JP} className="flag_icon" /></Link>
                        </div>
                    </div>
                    </Link>
                    <Link to="/auto-correlation-european-floods-en">
                    <div className="card card-body text-center mb-2">
                        <h5>2021 European Floods</h5>
                        <div className="d-flex justify-content-center">
                            <Link to="/auto-correlation-european-floods-en"><img src={US} className="flag_icon mr-3" /></Link>
                            <Link to="/auto-correlation-european-floods-de"><img src={DE} className="flag_icon" /></Link>
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="col-md-8">
                    <div className="card card-body pt-0">
                        <img src={ACCOVID19PandemicDE} width="700px" height="400px" />
                    </div>
                </div>
            </div>
        </div>
        <Footer pageName="ac" />
        </>
    );
}

export default AC_COVID_19_pandemic_de;