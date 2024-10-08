import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home/home';
import ReactVirtualizedTable from "./view/Table";
import TwoThousandTwentyTwo from "./view/Standings";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { addLeagueData } from "./database/data";
import TwoThousandTwenty from "./view/Standings";

const firebaseConfig = {
    apiKey: "AIzaSyAUa8ASqRSE4H43_o2QfZtnArjHDVIrJJE",
    authDomain: "football-63302.firebaseapp.com",
    projectId: "football-63302",
    storageBucket: "football-63302.appspot.com",
    messagingSenderId: "774176377887",
    appId: "1:774176377887:web:77edbd800ff203abe6d92a",
    measurementId: "G-N5RNS6X4E0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const database = getDatabase();

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/2022" element={<TwoThousandTwenty year={"2022"} />} />
                <Route path="/2023" element={<TwoThousandTwenty year={"2023"} />} />
                <Route path="/2024" element={<TwoThousandTwenty year={"2024"} />} />
                <Route path="/2025" element={<TwoThousandTwenty year={"2025"} />} />
                <Route path="/2026" element={<TwoThousandTwenty year={"2026"} />} />
            </Routes>
            {/*<button onClick={() => addLeagueData()}>Add League Data</button>*/}
        </Router>
    );
}

export default App;
