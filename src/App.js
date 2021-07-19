import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import InfoScreen from "./Screens/InfoScreen/InfoScreen";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import * as actions from "./store/action/auth";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = () => {
    dispatch(actions.authCheck());
  };

  return (
    <Switch>
      <Route path="/info" component={InfoScreen} />
      <Route path="/" component={LoginScreen} />
    </Switch>
  );
}

export default App;
