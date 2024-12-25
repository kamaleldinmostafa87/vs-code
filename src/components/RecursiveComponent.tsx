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

export default function RecursiveComponent({
  fileTree: { name, isFolder, children },
}: Props) {
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
          {isFolder ? (
            <>
              <span className="flex">
                {open ? <BottomIcon /> : <RightIcon />}
                <RenderFileName
                  fileName={name}
                  isFolder={isFolder}
                  open={open}
                />
              </span>
            </>
          ) : (
            <div className="flex">
              <RenderFileName fileName={name} isFolder={isFolder} open={open} />
            </div>
          )}
        </span>
      </div>

      {open &&
        children &&
        children?.map((file, idx) => (
          <RecursiveComponent key={idx} fileTree={file} />
        ))}
    </div>
  );
}
