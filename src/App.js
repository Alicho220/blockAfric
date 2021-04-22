import './App.css';
import Navbar from './componets/NavBar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import BalanceDisplay from './componets/Balance/BalanceDisplay';
import Select from './componets/Select/Select';
import Token from './componets/Token/Token';
import ButtonArea from './componets/Button/ButtonArea';
import RecentAcitity from './componets/Recent/RecentActivity';
import Description from './componets/Description/Description';
import Menu from './componets/Menu/Menu';

function App() {
  return (
    <div className="App">
      <Router>

      <Navbar />
      <BalanceDisplay />
      <Select />
      <Token />
      <ButtonArea />
      <RecentAcitity />
      <Description />
      <Menu />
      </Router>
    </div>
  );
}

export default App;
