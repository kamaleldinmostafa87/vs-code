import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import OpenedFileBarTab from "./OpenedFileBarTab";
import Highlight from "./Highlight";

export default function OpendFileBar() {
  const { openedFile, clickedFile } = useSelector(
    (state: RootState) => state.tree
  );
  //dispatchsetIDofFile
  return (
    <div className="w-full">
      <ul className="flex items-start">
        {openedFile.map((file, idx) => (
          <>
            {/* <RenderFileName fileName={file.name} /> */}
            <li
              key={idx}
              className={`flex items-center gap-3 cursor-pointer p-2 hover:bg-light-gray`}
            >
              <OpenedFileBarTab file={file} />
            </li>
          </>
        ))}
      </ul>
      <Highlight content={clickedFile.content} />
    </div>
  );
}
