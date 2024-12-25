import RecursiveComponent from "./components/RecursiveComponent";
import { fileStructure } from "./data/fileTree";
import "./index.css";

function App() {
  return <RecursiveComponent fileTree={fileStructure} />;
}

export default App;
