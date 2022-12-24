import {BrowserRouter,Routes,Route} from "react-router-dom";
import Index from "../src/pages/index/Index"
import Dashboard from "./pages/dashboard/Dashboard";
import Loogin from "./pages/loogin/Loogin";
import Admin from "./pages/admin/Admin";

function App() {


  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index/>}/>

          <Route path="/admin" element={<Admin/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>

        </Routes>
      </BrowserRouter>
  );
}

export default App;
