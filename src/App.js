import {BrowserRouter, Routes, Route} from "react-router-dom";
import Index from "../src/pages/index/Index"
import Dashboard from "./pages/dashboard/Dashboard";
import Loogin from "./pages/loogin/Loogin";
import Shop from "./pages/shop/Shop";
import Test from "./pages/test/Test";
import Test13Day from "./pages/test13day/Test13Day";
import DroupDown from "./pages/droupDown/DroupDown";

function App() {


    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index/>}/>
                <Route path="/login" element={<Loogin/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/shop" element={<Shop/>}/>
                <Route path="/test" element={<Test/>}/>
                <Route path="/Test13Day" element={<Test13Day/>}/>
                <Route path="/DroupDown" element={<DroupDown/>}/>

            </Routes>
        </BrowserRouter>
    );
}

export default App;
