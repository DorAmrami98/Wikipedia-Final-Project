import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import VisakhapatnamGasLeakChart from "../charts_edits/Visakhapatnam_gas_leak.png";
import SA from "../flags/sa.svg";
import US from "../flags/us.svg";
import IT from "../flags/it.svg";
import IN from "../flags/in.svg";
import JP from "../flags/jp.svg";
import CN from "../flags/cn.svg";
import FR from "../flags/fr.svg";
import DE from "../flags/de.svg";

function Visakhapatnam_gas_leak_en() {
    const [dataUS, setDataUS] = useState([]);
    const [dataIN, setDataIN] = useState([]);
    useEffect(() => {
        async function fetchData() {
          const response = await fetch("/data.json");
          const jsonData = await response.json();
          setDataUS(jsonData.Views[4]);
          setDataIN(jsonData.Views[5]);
        }
        fetchData();
    }, []);
    const chartData = Object.entries(dataUS).map(([date, value]) => ({date, value}));
    let mergedData = [];
    for (let key in dataUS) {
        if (dataIN.hasOwnProperty(key)) {
            mergedData.push({
                date: key,
                "United States": dataUS[key],
                "India": dataIN[key]
            });
        }
    }

    useEffect(() => {
        const divElement = document.querySelector(".sidebar");
        divElement.scrollTop = divElement.scrollHeight - divElement.clientHeight;
    }, []);
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
                    <div className="card card-body text-center mb-2">
                        <h5>COVID-19 Pandemic</h5>
                        <div className="d-flex justify-content-center">
                            <Link to="/covid_19_pandemic_en"><img src={US} className="flag_icon" /></Link>
                            <Link to="/covid_19_pandemic_cn"><img src={CN} className="flag_icon mx-3" /></Link>
                            <Link to="/covid_19_pandemic_fr"><img src={FR} className="flag_icon" /></Link>
                            <Link to="/covid_19_pandemic_de"><img src={DE} className="flag_icon mx-3" /></Link>
                            <Link to="/covid_19_pandemic_it"><img src={IT} className="flag_icon" /></Link>
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
                    <div className="card card-body text-center mb-2 active_card_lang">
                        <h5>Visakhapatnam Gas Leak</h5>
                        <div className="d-flex justify-content-center">
                            <Link to="/visakhapatnam_gas_leak_en"><img src={US} className="flag_icon mr-3 active_lang" /></Link>
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
                        <h5>Visakhapatnam Gas Leak <img src={US} className="flag_icon" /></h5>
                        <small className="text-muted">Visakhapatnam Gas Leak - Total View</small>
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
                            <img src={VisakhapatnamGasLeakChart} width="700px" height="400px" />
                        </div>
                        <div className="tab-pane fade" id="comparison" role="tabpanel">
                            <LineChart width={700} height={400} data={mergedData}>
                                <XAxis dataKey="date" />
                                <YAxis />
                                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="United States" stroke="#192f5d" activeDot={{ r: 8 }} />
                                <Line type="monotone" dataKey="India" stroke="#dd0000" activeDot={{ r: 8 }} />
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

export default Visakhapatnam_gas_leak_en;