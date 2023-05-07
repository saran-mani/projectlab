import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import {
  ItSem,
  CseSem,
  CceSem,
  CsbsSem,
  EceSem,
  EteSem,
  CsdSem,
  CsSem,
  AimlSem,
  AidsSem,
} from "./semster/semester";
import { CseSem1Sub } from "./Subjects/subject";
import GE3171 from "./questions/question";
import AnsPage from "./Answer/Answer";

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Home />}/>
        <Route path="/cse-sem" element={<CseSem />}/>
        <Route path="/it-sem" element={<ItSem />}/>
        <Route path="/cce-sem" element={<CceSem />}/>
        <Route path="/aids-sem" element={<AidsSem />}/>
        <Route path="/csbs-sem" element={<CsbsSem />}/>
        <Route path="/ece-sem" element={<EceSem />}/>
        <Route path="/ete-sem" element={<EteSem />}/>
        <Route path="/csd-sem" element={<CsdSem />}/>
        <Route path="/cyber-security-sem" element={<CsSem />}/>
        <Route path="/ai&ml-sem" element={<AimlSem />}/>
        <Route path="/cse-sem/cse-sem1-sub" element={<CseSem1Sub/>}/>
        <Route path="/cse-sem/cse-sem1-sub/GE3171-problem-solving-and-python-programming-laboratory" element={<GE3171/>}/>
        <Route path="/cse-sem/cse-sem1-sub/GE3171-problem-solving-and-python-programming-laboratory/GE3171-ans-1" element={<AnsPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
