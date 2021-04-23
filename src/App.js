import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./componets/Index";
import ActivityPage from "./componets/Activity/ActivityPage";
import WalletPage from "./componets/Wallet/WalletPage";
import MarketPage from "./componets/Market/MarketPage";
import EarnPage from "./componets/Earn/Earn";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/activity" exact component={ActivityPage} />
          <Route path="/wallet" exact component={WalletPage} />
          <Route path="/market" exact component={MarketPage} />
          <Route path="/earn" exact component={EarnPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
