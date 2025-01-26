import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import FolderComponent from "./FolderComponent";
import Highlight from "./Highlight";
import DropMenu from "./DropMenu";
import { useState } from "react";

export default function OpendFileBar() {
  const { openedFile, clickedFile } = useSelector(
    (state: RootState) => state.tree
  );

  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div
      className=""
      onContextMenu={(e) => {
        e.preventDefault();
        setMenuPosition({ x: e.clientX, y: e.clientY });
        setShowMenu(true);
      }}
    >
      <ul className="flex items-start">
        {openedFile.map((file, idx) => (
          <>
            <li
              key={idx}
              className="flex items-center gap-3 cursor-pointer p-2 hover:bg-light-gray"
            >
              <FolderComponent file={file} />
            </li>
          </>
        ))}
      </ul>
      {showMenu && <DropMenu position={menuPosition} />}

      <Highlight content={clickedFile.content} />
    </div>
  );
}
