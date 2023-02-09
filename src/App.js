import { Route, Routes } from 'react-router-dom';
import './App.css';
import BillChart from './Components/BillChart';
import BillDashboard from './Components/BillDashboard';
import Header from './Components/Header';
import MonthlyBudget from './Components/MonthlyBudget';

function App() {
  return (
    <div className="App">
      <Header/>
       <Routes>
       <Route path="/monthly-graph" element={ <BillChart/>}/>
       <Route path="/monthly-budget" element={ <MonthlyBudget/>}/>
       <Route path="/" element={ <BillDashboard/>}/>
       </Routes>
      
    </div>
  );
  //  <Route path="/"  exact />
}

export default App;
