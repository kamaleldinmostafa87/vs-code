import OpendFileBar from "./components/OpendFileBar";
import RecursiveComponent from "./components/RecursiveComponent";
import ResizablePanel from "./components/ResizablePanel";
import { fileStructure } from "./data/fileTree";
import "./index.css";

function App() {
  return (
    <div className="flex h-screen">
      {/* <div className="w-64 border-r border-white">
        <RecursiveComponent fileTree={fileStructure} />
      </div> */}

      <ResizablePanel
        leftContent={<RecursiveComponent fileTree={fileStructure} />}
        rightContent={<OpendFileBar />}
      />
    </div>
  );
}

export default App;
