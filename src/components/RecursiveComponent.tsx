import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setClickedFileAction,
  setOpenedFileAction,
} from "../app/features/fileTreeSlice";
import { RootState } from "../app/store";
import { IFile } from "../interfaces/fileTree";
import { doesOjectExists } from "../utils/functions";
import RenderFileName from "./RenderFileName";
import ClosedArrowIcon from "./SVG/ClosedArrowIcon";
import OpenedArrowIcon from "./SVG/OpenedArrowIcon";

type Props = {
  fileTree: IFile;
};

export default function RecursiveComponent({ fileTree }: Props) {
  //useSelector to get the store
  const { openedFile } = useSelector((state: RootState) => state.tree);

  const dispatch = useDispatch();
  const { name, isFolder, children, id, content } = fileTree;
  const [open, setOpen] = useState(false);

  const handleOpenFile = () => {
    // get the id of the selected file then compare it with the id that exists in the openedFile
    dispatch(
      setClickedFileAction({
        name,
        content,
        active: true,
        activeTabId: id,
      })
    );

    if (doesOjectExists(openedFile, fileTree.id)) return;
    dispatch(setOpenedFileAction([...openedFile, fileTree]));
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
            <span className="flex items-center gap-1">
              {open ? <ClosedArrowIcon /> : <OpenedArrowIcon />}
              <RenderFileName fileName={name} isFolder={isFolder} open={open} />
            </span>
          ) : (
            <div
              className="flex items-center gap-2"
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
