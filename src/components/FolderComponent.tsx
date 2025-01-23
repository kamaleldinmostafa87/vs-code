import { useDispatch, useSelector } from "react-redux";
import {
  setClickedFileAction,
  setOpenedFileAction,
} from "../app/features/fileTreeSlice";
import { IFile } from "../interfaces/fileTree";
import FolderIcon from "./SVG/FolderIcon";
import CloseIcon from "./SVG/CloseIcon";
import { RootState } from "../app/store";

type Props = {
  file: IFile;
};
function FolderComponent({ file }: Props) {
  const dispatch = useDispatch();
  // get root state
  const {
    openedFile,
    clickedFile: { activeTabId },
  } = useSelector((state: RootState) => state.tree);
  const { name, content, id } = file;
  const handleOnClick = () => {
    dispatch(
      setClickedFileAction({ name, content, activeTabId: id, active: false })
    );
  };

  const handleCloseFile = (e: any) => {
    e.stopPropagation();

    const newOpenedFile = openedFile.filter((file) => file.id !== activeTabId);
    // here empty array

    console.log("new opened file", newOpenedFile);

    if (newOpenedFile.length === 0) {
      dispatch(setOpenedFileAction([]));
      return;
    }

    // if (newOpenedFile.length === 1) return;
    const { id, name, content } = newOpenedFile[newOpenedFile.length - 1];

    dispatch(setOpenedFileAction(newOpenedFile));
    dispatch(
      setClickedFileAction({
        name,
        content,
        active: false,
        activeTabId: id,
      })
    );
  };
  return (
    <div className="flex flex-col">
      <div
        className={`flex items-center justify-center border-t ${
          activeTabId === file.id ? "  border-red-400" : "   border-transparent"
        } `}
        onClick={handleOnClick}
      >
        <span className="mr-4">
          <FolderIcon />
        </span>
        <span> {name}</span>
        <span
          className="m-0 hover:bg-gray-700"
          onClick={(e: any) => handleCloseFile(e)}
        >
          <CloseIcon />
        </span>
      </div>
      {/* <div>{content}</div> */}
    </div>
  );
}

export default FolderComponent;
