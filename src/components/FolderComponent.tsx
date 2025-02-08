import { useDispatch, useSelector } from "react-redux";
import {
  setClickedFileAction,
  setOpenedFileAction,
  setTabIdToRemoveAction,
} from "../app/features/fileTreeSlice";
import { RootState } from "../app/store";
import { IFile } from "../interfaces/fileTree";
import CloseIcon from "./SVG/CloseIcon";
import FolderIcon from "./SVG/FolderIcon";
import { useState } from "react";
import ContextMenu from "./ContextMenu";

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
      setClickedFileAction({ name, content, active: false, activeTabId: id })
    );
  };

  const handleCloseFile = (e: any) => {
    e.stopPropagation();
    const newOpenedFile = openedFile.filter((file) => file.id !== activeTabId);
    // here empty array
    if (newOpenedFile.length === 0) {
      dispatch(setOpenedFileAction([]));
      dispatch(
        setClickedFileAction({
          name: "",
          content: "",
          active: false,
          activeTabId: "",
        })
      );
      return;
    }
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

  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div
      className="flex flex-col"
      onContextMenu={(e) => {
        e.preventDefault();
        setMenuPosition({ x: e.clientX, y: e.clientY });
        setShowMenu(true);
        dispatch(setTabIdToRemoveAction(file.id));
      }}
    >
      <div
        tab-data-id={id}
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

      {showMenu && (
        <ContextMenu position={menuPosition} setShowMenu={setShowMenu} />
      )}
      {/* <div>{content}</div> */}
    </div>
  );
}

export default FolderComponent;
