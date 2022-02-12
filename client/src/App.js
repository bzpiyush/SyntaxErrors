import './App.css';
import Auth from "./components/Auth.js"
import MainScreen from './components/MainScreen';

import { useUserContext} from "./context/UserContext"

function App() {
  const { user, loading, error } = useUserContext();

  return (
    <div className="App">
      {error && <p className="error">{error}</p>}

      {loading ? (
        <div style={{textAlign: "center", fontSize: "12rem", fontWeight: "bold", marginTop: "20%"}}>
          <h2 style={{ fontSize: "4rem", fontFamily: "cursive"}}>Loading.....</h2>{" "}
        </div>
      ) : (
        <>{user ? <MainScreen /> : <Auth />}</>
      )}
    </div>
  );
}

export default App;
