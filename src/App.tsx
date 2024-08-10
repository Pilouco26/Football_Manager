import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home/home';
import ReactVirtualizedTable from "./view/Table";
import TwoThousandTwentyTwo from "./view/2022";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/table" element={<ReactVirtualizedTable />} />
                <Route path="/2022" element={<TwoThousandTwentyTwo />} />
            </Routes>
        </Router>
    );
}

export default App;
