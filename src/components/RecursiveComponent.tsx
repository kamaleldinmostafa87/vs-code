import { useState } from "react";
import FileIcon from "./SVG/FileIcon";
import RightIcon from "./SVG/RightIcon";
import { IFile } from "../interfaces/fileTree";
import FolderIcon from "./SVG/FolderIcon";
import BottomIcon from "./SVG/BottomIcon";
import RenderFileName from "./RenderFileName";

type Props = {
  fileTree: IFile;
};

export default function RecursiveComponent({ fileTree }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="ml-4">
      <div className="flex justify-start">
        <span
          className="cursor-pointer"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {fileTree.isFolder ? (
            <>
              <span className="flex">
                {open ? <BottomIcon /> : <RightIcon />}
                <FolderIcon />
                <RenderFileName fileName={fileTree.name} />
              </span>
            </>
          ) : (
            <div className="flex">
              <FileIcon />
              <RenderFileName fileName={fileTree.name} />
            </div>
          )}
        </span>
      </div>

      {open &&
        fileTree.children &&
        fileTree.children?.map((file, idx) => (
          <RecursiveComponent key={idx} fileTree={file} />
        ))}
    </div>
  );
}
