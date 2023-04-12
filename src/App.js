import "./styles.css";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/Render">Render</Link>
        <Link to="/Fetch">Fetch</Link>
        <Link to="/Test">Test</Link>
      </nav>
      <h1>Hello boxsand</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
