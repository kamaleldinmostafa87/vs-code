import { useDispatch, useSelector } from "react-redux";
import { setClickedFileAction } from "../app/features/fileTreeSlice";
import { IFile } from "../interfaces/fileTree";
import FolderIcon from "./SVG/FolderIcon";
import { RootState } from "../app/store";
import Highlight from "./Highlight";

type Props = {
  file: IFile;
};
function OpenedFileBarTab({ file }: Props) {
  const {
    clickedFile: { activeTabId },
  } = useSelector((state: RootState) => state.tree);
  const dispatch = useDispatch();
  const { name, content, active, id } = file;
  const handleOnClick = () => {
    dispatch(setClickedFileAction({ name, content, active, activeTabId: id }));
    //opened the file
    //opened is true
    //apply the style on the opened file tab
  };
  return (
    <div className={`flex flex-col`}>
      <div
        className={`flex items-center justify-center border-t ${
          activeTabId === file.id ? "  border-red-400" : "   border-transparent"
        }`}
        onClick={handleOnClick}
      >
        <span className="mr-4">
          <FolderIcon />
        </span>
        <span> {name}</span>
      </div>
      {/* <Highlight content={file.content} /> */}
    </div>
  );
}

export default OpenedFileBarTab;
