import { useState } from "react";
import RightIcon from "./SVG/RightIcon";
import { IFile } from "../interfaces/fileTree";
import BottomIcon from "./SVG/BottomIcon";
import RenderFileName from "./RenderFileName";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { setOpenedFile } from "../app/features/fileTreeSlice";
import { doesOjectExists } from "../utils/functions";

type Props = {
  fileTree: IFile;
};

export default function RecursiveComponent({ fileTree }: Props) {
  //useSelector to get the store
  const { openedFile } = useSelector((state: RootState) => state.tree);

  const dispatch = useDispatch();
  const { name, isFolder, children } = fileTree;
  const [open, setOpen] = useState(false);

  const handleOpenFile = () => {
    // get the id of the selected file then compare it with the id that exists in the openedFile
    if (doesOjectExists(openedFile, fileTree.id)) return;
    dispatch(setOpenedFile([...openedFile, fileTree]));
  };
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
            <span className="flex">
              {open ? <BottomIcon /> : <RightIcon />}
              <RenderFileName fileName={name} isFolder={isFolder} open={open} />
            </span>
          ) : (
            <div
              className="flex"
              // use dispatch to call the reducer setOpenedFile
              onClick={handleOpenFile}
            >
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
