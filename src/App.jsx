import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Aquila_earthquake_en from "./Pages/Aquila_earthquake_en";
import Aquila_earthquake_it from "./Pages/Aquila_earthquake_it";
import COVID_19_pandemic_en from "./Pages/COVID_19_pandemic_en";
import COVID_19_pandemic_cn from "./Pages/COVID_19_pandemic_cn";
import COVID_19_pandemic_fr from "./Pages/COVID_19_pandemic_fr";
import COVID_19_pandemic_de from "./Pages/COVID_19_pandemic_de";
import COVID_19_pandemic_it from "./Pages/COVID_19_pandemic_it";
import COVID_19_pandemic_sa from "./Pages/COVID_19_pandemic_sa";
import European_floods_en from "./Pages/European_floods_en";
import European_floods_de from "./Pages/European_floods_de";
import Inondations_d from "./Pages/Inondations_d";
import Manchester_Arena_bombing_en from "./Pages/Manchester_Arena_bombing_en";
import Manchester_Arena_bombing_sa from "./Pages/Manchester_Arena_bombing_sa";
import Tohoku_earthquake_and_tsunami_en from "./Pages/Tohoku_earthquake_and_tsunami_en";
import Tohoku_earthquake_and_tsunami_jp from "./Pages/Tohoku_earthquake_and_tsunami_jp";
import Visakhapatnam_gas_leak_en from "./Pages/Visakhapatnam_gas_leak_en";
import Visakhapatnam_gas_leak_in from "./Pages/Visakhapatnam_gas_leak_in";
import AC_Aquila_earthquake_en from "./Pages/auto_correlation/Aquila_earthquake_en";
import AC_Aquila_earthquake_it from "./Pages/auto_correlation/Aquila_earthquake_it";
import AC_COVID_19_pandemic_en from "./Pages/auto_correlation/COVID_19_pandemic_en";
import AC_COVID_19_pandemic_de from "./Pages/auto_correlation/COVID_19_pandemic_de";
import AC_COVID_19_pandemic_fr from "./Pages/auto_correlation/COVID_19_pandemic_fr";
import AC_COVID_19_pandemic_it from "./Pages/auto_correlation/COVID_19_pandemic_it";
import AC_COVID_19_pandemic_sa from "./Pages/auto_correlation/COVID_19_pandemic_sa";
import AC_COVID_19_pandemic_cn from "./Pages/auto_correlation/COVID_19_pandemic_cn";
import AC_Manchester_Arena_bombing_en from "./Pages/auto_correlation/Manchester_Arena_bombing_en";
import AC_Manchester_Arena_bombing_sa from "./Pages/auto_correlation/Manchester_Arena_bombing_sa";
import AC_Aude_River_flooding from "./Pages/auto_correlation/Aude_River_flooding";
import AC_Visakhapatnam_gas_leak_en from "./Pages/auto_correlation/Visakhapatnam_gas_leak_en";
import AC_Visakhapatnam_gas_leak_in from "./Pages/auto_correlation/Visakhapatnam_gas_leak_in";
import AC_Tohoku_earthquake_and_tsunami_en from "./Pages/auto_correlation/Tōhoku_earthquake_and_tsunami_en";
import AC_Tohoku_earthquake_and_tsunami_jp from "./Pages/auto_correlation/Tōhoku_earthquake_and_tsunami_jp";
import AC_European_floods_en from "./Pages/auto_correlation/European_floods_en";
import AC_European_floods_de from "./Pages/auto_correlation/European_floods_de";
import CC_Aquila_earthquake from "./Pages/cross_correlation/Aquila_earthquake";
import CC_COVID_19_pandemic_de_ar from "./Pages/cross_correlation/COVID-19_pandemic_de_ar";
import CC_COVID_19_pandemic_de_fr from "./Pages/cross_correlation/COVID-19_pandemic_de_fr";
import CC_COVID_19_pandemic_de_it from "./Pages/cross_correlation/COVID-19_pandemic_de_it";
import CC_COVID_19_pandemic_de_zh from "./Pages/cross_correlation/COVID-19_pandemic_de_zh";
import CC_COVID_19_pandemic_en_ar from "./Pages/cross_correlation/COVID-19_pandemic_en_ar";
import CC_COVID_19_pandemic_en_de from "./Pages/cross_correlation/COVID-19_pandemic_en_de";
import CC_COVID_19_pandemic_en_fr from "./Pages/cross_correlation/COVID-19_pandemic_en_fr";
import CC_COVID_19_pandemic_en_it from "./Pages/cross_correlation/COVID-19_pandemic_en_it";
import CC_COVID_19_pandemic_en_zh from "./Pages/cross_correlation/COVID-19_pandemic_en_zh";
import CC_COVID_19_pandemic_fr_ar from "./Pages/cross_correlation/COVID-19_pandemic_fr_ar";
import CC_COVID_19_pandemic_fr_it from "./Pages/cross_correlation/COVID-19_pandemic_fr_it";
import CC_COVID_19_pandemic_fr_zh from "./Pages/cross_correlation/COVID-19_pandemic_fr_zh";
import CC_COVID_19_pandemic_it_ar from "./Pages/cross_correlation/COVID-19_pandemic_it_ar";
import CC_COVID_19_pandemic_it_zh from "./Pages/cross_correlation/COVID-19_pandemic_it_zh";
import CC_COVID_19_pandemic_zh_ar from "./Pages/cross_correlation/COVID-19_pandemic_zh_ar";
import CC_Manchester_Arena_bombing from "./Pages/cross_correlation/Manchester_Arena_bombing";
import CC_Visakhapatnam_gas_leak from "./Pages/cross_correlation/Visakhapatnam_gas_leak";
import CC_Tohoku_earthquake_and_tsunami from "./Pages/cross_correlation/Tōhoku_earthquake_and_tsunami";
import CC_European_floods from "./Pages/cross_correlation/European_floods";
import "./App.css";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/general" element={<Aquila_earthquake_en />} />
            <Route path="/aquila_earthquake_it" element={<Aquila_earthquake_it />} />
            <Route path="/covid_19_pandemic_en" element={<COVID_19_pandemic_en />} />
            <Route path="/covid_19_pandemic_cn" element={<COVID_19_pandemic_cn />} />
            <Route path="/covid_19_pandemic_fr" element={<COVID_19_pandemic_fr />} />
            <Route path="/covid_19_pandemic_de" element={<COVID_19_pandemic_de />} />
            <Route path="/covid_19_pandemic_it" element={<COVID_19_pandemic_it />} />
            <Route path="/covid_19_pandemic_sa" element={<COVID_19_pandemic_sa />} />
            <Route path="/european_floods_en" element={<European_floods_en />} />
            <Route path="/european_floods_de" element={<European_floods_de />} />
            <Route path="/inondations_d" element={<Inondations_d />} />
            <Route path="/manchester_arena_bombing_en" element={<Manchester_Arena_bombing_en />} />
            <Route path="/manchester_arena_bombing_sa" element={<Manchester_Arena_bombing_sa />} />
            <Route path="/tohoku_earthquake_and_tsunami_en" element={<Tohoku_earthquake_and_tsunami_en />} />
            <Route path="/tohoku_earthquake_and_tsunami_jp" element={<Tohoku_earthquake_and_tsunami_jp />} />
            <Route path="/visakhapatnam_gas_leak_en" element={<Visakhapatnam_gas_leak_en />} />
            <Route path="/visakhapatnam_gas_leak_in" element={<Visakhapatnam_gas_leak_in />} />
            <Route path="/auto-correlation" element={<AC_Aquila_earthquake_en />} />
            <Route path="/auto-correlation-aquila-earthquake-it" element={<AC_Aquila_earthquake_it />} />
            <Route path="/auto-correlation-covid-19-pandemic-en" element={<AC_COVID_19_pandemic_en />} />
            <Route path="/auto-correlation-covid-19-pandemic-de" element={<AC_COVID_19_pandemic_de />} />
            <Route path="/auto-correlation-covid-19-pandemic-fr" element={<AC_COVID_19_pandemic_fr />} />
            <Route path="/auto-correlation-covid-19-pandemic-it" element={<AC_COVID_19_pandemic_it />} />
            <Route path="/auto-correlation-covid-19-pandemic-sa" element={<AC_COVID_19_pandemic_sa />} />
            <Route path="/auto-correlation-covid-19-pandemic-cn" element={<AC_COVID_19_pandemic_cn />} />
            <Route path="/auto-correlation-manchester-arena-bombing-en" element={<AC_Manchester_Arena_bombing_en />} />
            <Route path="/auto-correlation-manchester-arena-bombing-sa" element={<AC_Manchester_Arena_bombing_sa />} />
            <Route path="/auto-correlation-aude-river-flooding" element={<AC_Aude_River_flooding />} />
            <Route path="/auto-correlation-visakhapatnam-gas-leak-en" element={<AC_Visakhapatnam_gas_leak_en />} />
            <Route path="/auto-correlation-visakhapatnam-gas-leak-in" element={<AC_Visakhapatnam_gas_leak_in />} />
            <Route path="/auto-correlation-tohoku-earthquake-tsunami-en" element={<AC_Tohoku_earthquake_and_tsunami_en />} />
            <Route path="/auto-correlation-tohoku-earthquake-tsunami-jp" element={<AC_Tohoku_earthquake_and_tsunami_jp />} />
            <Route path="/auto-correlation-european-floods-en" element={<AC_European_floods_en />} />
            <Route path="/auto-correlation-european-floods-de" element={<AC_European_floods_de />} />
            <Route path="/cross-correlation" element={<CC_Aquila_earthquake />} />
            <Route path="/cross-correlation-COVID_19_pandemic_de_ar" element={<CC_COVID_19_pandemic_de_ar />} />
            <Route path="/cross-correlation-COVID_19_pandemic_de_fr" element={<CC_COVID_19_pandemic_de_fr />} />
            <Route path="/cross-correlation-COVID_19_pandemic_de_it" element={<CC_COVID_19_pandemic_de_it />} />
            <Route path="/cross-correlation-COVID_19_pandemic_de_zh" element={<CC_COVID_19_pandemic_de_zh />} />
            <Route path="/cross-correlation-COVID_19_pandemic_en_ar" element={<CC_COVID_19_pandemic_en_ar />} />
            <Route path="/cross-correlation-COVID_19_pandemic_en_de" element={<CC_COVID_19_pandemic_en_de />} />
            <Route path="/cross-correlation-COVID_19_pandemic_en_fr" element={<CC_COVID_19_pandemic_en_fr />} />
            <Route path="/cross-correlation-COVID_19_pandemic_en_it" element={<CC_COVID_19_pandemic_en_it />} />
            <Route path="/cross-correlation-COVID_19_pandemic_en_zh" element={<CC_COVID_19_pandemic_en_zh />} />
            <Route path="/cross-correlation-COVID_19_pandemic_fr_ar" element={<CC_COVID_19_pandemic_fr_ar />} />
            <Route path="/cross-correlation-COVID_19_pandemic_fr_it" element={<CC_COVID_19_pandemic_fr_it />} />
            <Route path="/cross-correlation-COVID_19_pandemic_fr_zh" element={<CC_COVID_19_pandemic_fr_zh />} />
            <Route path="/cross-correlation-COVID_19_pandemic_it_ar" element={<CC_COVID_19_pandemic_it_ar />} />
            <Route path="/cross-correlation-COVID_19_pandemic_it_zh" element={<CC_COVID_19_pandemic_it_zh />} />
            <Route path="/cross-correlation-COVID_19_pandemic_zh_ar" element={<CC_COVID_19_pandemic_zh_ar />} />            
            <Route path="/cross-correlation-manchester-arena-bombing" element={<CC_Manchester_Arena_bombing />} />
            <Route path="/cross-correlation-visakhapatnam-gas-leak" element={<CC_Visakhapatnam_gas_leak />} />
            <Route path="/cross-correlation-tohoku-earthquake-tsunami" element={<CC_Tohoku_earthquake_and_tsunami />} />
            <Route path="/cross-correlation-european-floods" element={<CC_European_floods />} />
        </Routes>
    );
}

export default App;