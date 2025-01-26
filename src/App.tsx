import { useSelector } from "react-redux";
import OpendFileBar from "./components/OpendFileBar";
import RecursiveComponent from "./components/RecursiveComponent";
import ResizablePanel from "./components/ResizablePanel";
import { fileStructure } from "./data/fileTree";
import "./index.css";
import { RootState } from "./app/store";
import WelcomeTab from "./components/WelcomeTab";

function App() {
  const { openedFile } = useSelector((state: RootState) => state.tree);
  return (
    <div className="flex h-screen">
      <ResizablePanel
        leftContent={<RecursiveComponent fileTree={fileStructure} />}
        rightContent={openedFile.length ? <OpendFileBar /> : <WelcomeTab />}
      />
    </div>
  );
}

export default App;
