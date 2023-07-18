import { Link } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import CC_COVID_19_pandemic from "../../charts_cross_correlation/COVID-19_pandemic_en_de.png";
import SA from "../../flags/sa.svg";
import US from "../../flags/us.svg";
import IT from "../../flags/it.svg";
import IN from "../../flags/in.svg";
import JP from "../../flags/jp.svg";
import CN from "../../flags/cn.svg";
import FR from "../../flags/fr.svg";
import DE from "../../flags/de.svg";

function CC_COVID_19_pandemic_en_de() {
    return (
        <>
        <Header />
        <div className="container mt-5">
            <div className="row">
            <div className="col-md-4 sidebar">
                    <Link to="/cross-correlation">
                    <div className="card card-body text-center mb-2">
                        <h5>2009 L'Aquila Earthquake</h5>
                        <div className="d-flex justify-content-center cc_covid_flags">
                            <span className="btn btn-sm btn-light">
                                <img src={US} className="flag_icon mr-1" />
                                <img src={IT} className="flag_icon" />
                            </span>
                        </div>
                    </div>
                    </Link>
                    <Link to="/cross-correlation-COVID_19_pandemic_en_ar">
                    <div className="card card-body text-center mb-2 active_card_lang">
                        <h5>COVID-19 Pandemic</h5>
                        <div className="d-flex justify-content-center cc_covid_flags">
                            <Link to="/cross-correlation-COVID_19_pandemic_en_zh" className="btn btn-sm btn-light">
                                <img src={US} className="flag_icon mr-1" />
                                <img src={CN} className="flag_icon" />
                            </Link>
                            <Link to="/cross-correlation-COVID_19_pandemic_en_de" className="btn btn-sm btn-light cc_covid_flags_active">
                                <img src={US} className="flag_icon mr-1" />
                                <img src={DE} className="flag_icon" />
                            </Link>
                            <Link to="/cross-correlation-COVID_19_pandemic_en_fr" className="btn btn-sm btn-light">
                                <img src={US} className="flag_icon mr-1" />
                                <img src={FR} className="flag_icon" />
                            </Link>
                            <Link to="/cross-correlation-COVID_19_pandemic_en_it" className="btn btn-sm btn-light">
                                <img src={US} className="flag_icon mr-1" />
                                <img src={IT} className="flag_icon mr-1" />
                            </Link>
                            <Link to="/cross-correlation-COVID_19_pandemic_en_ar" className="btn btn-sm btn-light">
                                <img src={US} className="flag_icon mr-1" />
                                <img src={SA} className="flag_icon mr-1" />
                            </Link>
                            <Link to="/cross-correlation-COVID_19_pandemic_de_zh" className="btn btn-sm btn-light">
                                <img src={DE} className="flag_icon mr-1" />
                                <img src={CN} className="flag_icon" />
                            </Link>
                            <Link to="/cross-correlation-COVID_19_pandemic_de_fr" className="btn btn-sm btn-light">
                                <img src={DE} className="flag_icon mr-1" />
                                <img src={FR} className="flag_icon" />
                            </Link>
                            <Link to="/cross-correlation-COVID_19_pandemic_de_it" className="btn btn-sm btn-light">
                                <img src={DE} className="flag_icon mr-1" />
                                <img src={IT} className="flag_icon" />
                            </Link>
                            <Link to="/cross-correlation-COVID_19_pandemic_de_ar" className="btn btn-sm btn-light">
                                <img src={DE} className="flag_icon mr-1" />
                                <img src={SA} className="flag_icon" />
                            </Link>
                            <Link to="/cross-correlation-COVID_19_pandemic_fr_zh" className="btn btn-sm btn-light">
                                <img src={FR} className="flag_icon mr-1" />
                                <img src={CN} className="flag_icon" />
                            </Link>
                            <Link to="/cross-correlation-COVID_19_pandemic_fr_it" className="btn btn-sm btn-light">
                                <img src={FR} className="flag_icon mr-1" />
                                <img src={IT} className="flag_icon" />
                            </Link>
                            <Link to="/cross-correlation-COVID_19_pandemic_fr_ar" className="btn btn-sm btn-light">
                                <img src={FR} className="flag_icon mr-1" />
                                <img src={SA} className="flag_icon" />
                            </Link>
                            <Link to="/cross-correlation-COVID_19_pandemic_it_zh" className="btn btn-sm btn-light">
                                <img src={IT} className="flag_icon mr-1" />
                                <img src={CN} className="flag_icon mr-1" />
                            </Link>
                            <Link to="/cross-correlation-COVID_19_pandemic_it_ar" className="btn btn-sm btn-light">
                                <img src={IT} className="flag_icon mr-1" />
                                <img src={SA} className="flag_icon mr-1" />
                            </Link>
                            <Link to="/cross-correlation-COVID_19_pandemic_zh_ar" className="btn btn-sm btn-light">
                                <img src={CN} className="flag_icon mr-1" />
                                <img src={SA} className="flag_icon mr-1" />
                            </Link>
                        </div>
                    </div>
                    </Link>
                    <Link to="/cross-correlation-manchester-arena-bombing">
                    <div className="card card-body text-center mb-2">
                        <h5>Manchester Arena Bombing</h5>
                        <div className="d-flex justify-content-center cc_covid_flags">
                            <span className="btn btn-sm btn-light">
                                <img src={US} className="flag_icon mr-1" />
                                <img src={SA} className="flag_icon" />
                            </span>
                        </div>
                    </div>
                    </Link>
                    <Link to="/cross-correlation-visakhapatnam-gas-leak">
                    <div className="card card-body text-center mb-2">
                        <h5>Visakhapatnam Gas Leak</h5>
                        <div className="d-flex justify-content-center cc_covid_flags">
                            <span className="btn btn-sm btn-light">
                                <img src={US} className="flag_icon mr-1" />
                                <img src={IN} className="flag_icon" />
                            </span>
                        </div>
                    </div>
                    </Link>
                    <Link to="/cross-correlation-tohoku-earthquake-tsunami">
                    <div className="card card-body text-center mb-2">
                        <h5>2011 Tōhoku Earthquake &amp; Tsunami</h5>
                        <div className="d-flex justify-content-center cc_covid_flags">
                            <span className="btn btn-sm btn-light">
                                <img src={US} className="flag_icon mr-1" />
                                <img src={JP} className="flag_icon" />
                            </span>
                        </div>
                    </div>
                    </Link>
                    <Link to="/cross-correlation-european-floods">
                    <div className="card card-body text-center mb-2">
                        <h5>2021 European Floods</h5>
                        <div className="d-flex justify-content-center cc_covid_flags">
                            <span className="btn btn-sm btn-light">
                                <img src={US} className="flag_icon mr-1" />
                                <img src={DE} className="flag_icon" />
                            </span>
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="col-md-8">
                    <div className="card card-body pt-0">
                        <img src={CC_COVID_19_pandemic} width="700px" height="400px" />
                    </div>
                </div>
            </div>
        </div>
        <Footer pageName="cc" />
        </>
    );
}

export default CC_COVID_19_pandemic_en_de;