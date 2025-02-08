import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import DropMenu from "./ContextMenu";
import FolderComponent from "./FolderComponent";
import Highlight from "./Highlight";

// type FolderComponentType = React.ComponentType<{ file?: any }>;
// // type HighlightType = React.ComponentType<{ content: string | undefined }>;
// // type DropMenuType = React.ComponentType<{ position: { x: number; y: number } }>;

// const [FolderComponent, Highlight, DropMenu]: any = [
//   "FolderComponent",
//   "Highlight",
//   "DropMenu",
// ].map((component) => React.lazy(() => import(`./${component}.tsx`)));

export default function OpendFileBar() {
  const { openedFile, clickedFile } = useSelector(
    (state: RootState) => state.tree
  );

  return (
    // <Suspense fallback={<div>Loading...</div>}>
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
    // </Suspense>
  );
}
