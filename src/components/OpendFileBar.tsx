import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import FolderComponent from "./FolderComponent";
import Highlight from "./Highlight";

export default function OpendFileBar() {
  const { openedFile, clickedFile } = useSelector(
    (state: RootState) => state.tree
  );
  return (
    <div className="">
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

      <Highlight content={clickedFile.content} />
    </div>
  );
}
