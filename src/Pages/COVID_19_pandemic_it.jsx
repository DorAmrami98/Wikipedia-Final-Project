import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import CovidPandemicChart from "../charts_edits/COVID-19_pandemic.png";
import SA from "../flags/sa.svg";
import US from "../flags/us.svg";
import IT from "../flags/it.svg";
import IN from "../flags/in.svg";
import JP from "../flags/jp.svg";
import CN from "../flags/cn.svg";
import FR from "../flags/fr.svg";
import DE from "../flags/de.svg";

function COVID_19_pandemic_it() {
    const [dataUS, setDataUS] = useState([]);
    const [dataDE, setDataDE] = useState([]);
    const [dataFR, setDataFR] = useState([]);
    const [dataIT, setDataIT] = useState([]);
    const [dataCN, setDataCN] = useState([]);
    const [dataSA, setDataSA] = useState([]);
    useEffect(() => {
        async function fetchData() {
          const response = await fetch("/data.json");
          const jsonData = await response.json();
          setDataUS(jsonData.Views[9]);
          setDataDE(jsonData.Views[10]);
          setDataFR(jsonData.Views[11]);
          setDataIT(jsonData.Views[12]);
          setDataCN(jsonData.Views[13]);
          setDataSA(jsonData.Views[16]);
        }
        fetchData();
    }, []);
    const chartData = Object.entries(dataIT).map(([date, value]) => ({date, value}));
    let mergedData = [];
    for (let key in dataIT) {
        if (dataUS.hasOwnProperty(key) && dataDE.hasOwnProperty(key) && dataFR.hasOwnProperty(key) && dataCN.hasOwnProperty(key) && dataSA.hasOwnProperty(key)) {
            mergedData.push({
                date: key,
                "United States": dataUS[key],
                "Germany": dataDE[key],
                "France": dataFR[key],
                "Italy": dataIT[key],
                "China": dataCN[key],
                "Arabic": dataSA[key]
            });
        }
    }
    return (
        <>
        <Header />
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4 sidebar">
                    <Link to="/general">
                    <div className="card card-body text-center mb-2">
                        <h5>2009 L'Aquila Earthquake</h5>
                        <div className="d-flex justify-content-center">
                            <Link to="/general"><img src={US} className="flag_icon mr-3" /></Link>
                            <Link to="/aquila_earthquake_it"><img src={IT} className="flag_icon" /></Link>
                        </div>
                    </div>
                    </Link>
                    <Link to="/covid_19_pandemic_en">
                    <div className="card card-body text-center mb-2 active_card_lang">
                        <h5>Pandemia di Covid-19</h5>
                        <div className="d-flex justify-content-center">
                            <Link to="/covid_19_pandemic_en"><img src={US} className="flag_icon" /></Link>
                            <Link to="/covid_19_pandemic_cn"><img src={CN} className="flag_icon mx-3" /></Link>
                            <Link to="/covid_19_pandemic_fr"><img src={FR} className="flag_icon" /></Link>
                            <Link to="/covid_19_pandemic_de"><img src={DE} className="flag_icon mx-3" /></Link>
                            <Link to="/covid_19_pandemic_it"><img src={IT} className="flag_icon active_lang" /></Link>
                            <Link to="/covid_19_pandemic_sa"><img src={SA} className="flag_icon ml-3" /></Link>
                        </div>
                    </div>
                    </Link>
                    <Link to="/manchester_arena_bombing_en">
                    <div className="card card-body text-center mb-2">
                        <h5>Manchester Arena Bombing</h5>
                        <div className="d-flex justify-content-center">
                            <Link to="/manchester_arena_bombing_en"><img src={US} className="flag_icon mr-3" /></Link>
                            <Link to="/manchester_arena_bombing_sa"><img src={SA} className="flag_icon" /></Link>
                        </div>
                    </div>
                    </Link>
                    <Link to="/inondations_d">
                    <div className="card card-body text-center mb-2">
                        <h5>Inondation de la rivière Aude</h5>
                        <div className="d-flex justify-content-center">
                            <Link to="/inondations_d"><img src={FR} className="flag_icon mr-3" /></Link>
                        </div>
                    </div>
                    </Link>
                    <Link to="/visakhapatnam_gas_leak_en">
                    <div className="card card-body text-center mb-2">
                        <h5>Visakhapatnam Gas Leak</h5>
                        <div className="d-flex justify-content-center">
                            <Link to="/visakhapatnam_gas_leak_en"><img src={US} className="flag_icon mr-3" /></Link>
                            <Link to="/visakhapatnam_gas_leak_in"><img src={IN} className="flag_icon" /></Link>
                        </div>
                    </div>
                    </Link>
                    <Link to="/tohoku_earthquake_and_tsunami_en">
                    <div className="card card-body text-center mb-2">
                        <h5>2011 Tōhoku Earthquake &amp; Tsunami</h5>
                        <div className="d-flex justify-content-center">
                            <Link to="/tohoku_earthquake_and_tsunami_en"><img src={US} className="flag_icon mr-3" /></Link>
                            <Link to="/tohoku_earthquake_and_tsunami_jp"><img src={JP} className="flag_icon" /></Link>
                        </div>
                    </div>
                    </Link>
                    <Link to="/european_floods_en">
                    <div className="card card-body text-center mb-2">
                        <h5>2021 European Floods</h5>
                        <div className="d-flex justify-content-center">
                            <Link to="/european_floods_en"><img src={US} className="flag_icon mr-3" /></Link>
                            <Link to="/european_floods_de"><img src={DE} className="flag_icon" /></Link>
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="col-md-8">
                    <div className="card card-body pt-0">
                    <ul className="nav nav-tabs mx-auto" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="border nav-link active" data-toggle="tab" data-target="#views" type="button" role="tab">Views</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="border nav-link" data-toggle="tab" data-target="#edits" type="button" role="tab">Edits</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="border nav-link" data-toggle="tab" data-target="#comparison" type="button" role="tab">Comparison</button>
                        </li>
                    </ul>
                    <div className="tab-content pt-2">
                        <div className="tab-pane fade show active" id="views" role="tabpanel">
                        <div className="text-center mb-3">
                        <h5>Pandemia di Covid-19 <img src={IT} className="flag_icon" /></h5>
                        <small className="text-muted">Pandemia di Covid-19 - Total View</small>
                        </div>
                        <LineChart width={700} height={400} data={chartData}>
                            <XAxis dataKey="date" />
                            <YAxis />
                            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
                        </LineChart>
                        </div>
                        <div className="tab-pane fade" id="edits" role="tabpanel">
                            <img src={CovidPandemicChart} width="700px" height="400px" />
                        </div>
                        <div className="tab-pane fade" id="comparison" role="tabpanel">
                            <LineChart width={700} height={400} data={mergedData}>
                                <XAxis dataKey="date" />
                                <YAxis />
                                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="United States" stroke="#af7b7f" activeDot={{ r: 8 }} />
                                <Line type="monotone" dataKey="Germany" stroke="#c17709" activeDot={{ r: 8 }} />
                                <Line type="monotone" dataKey="France" stroke="#00267f" activeDot={{ r: 8 }} />
                                <Line type="monotone" dataKey="Italy" stroke="#009246" activeDot={{ r: 8 }} />
                                <Line type="monotone" dataKey="China" stroke="#de2910" activeDot={{ r: 8 }} />
                                <Line type="monotone" dataKey="Arabic" stroke="#199d00" activeDot={{ r: 8 }} />
                            </LineChart>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer pageName="general" />
        </>
    );
}

export default COVID_19_pandemic_it;