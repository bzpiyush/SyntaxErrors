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
        <div>
          <h2>Loading.....</h2>{" "}
        </div>
      ) : (
        <>{user ? <MainScreen /> : <Auth />}</>
      )}
    </div>
  );
}

export default App;
