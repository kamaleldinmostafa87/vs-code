import { useDispatch } from "react-redux";
import { setClickedFileAction } from "../app/features/fileTreeSlice";
import { IFile } from "../interfaces/fileTree";
import FolderIcon from "./SVG/FolderIcon";

type Props = {
  file: IFile;
};
function FolderComponent({ file }: Props) {
  const dispatch = useDispatch();
  const { name, content } = file;
  const handleOnClick = () => {
    dispatch(setClickedFileAction({ name, content }));
  };
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center" onClick={handleOnClick}>
        <span className="mr-4">
          <FolderIcon />
        </span>
        <span> {name}</span>
      </div>
      {/* <div>{content}</div> */}
    </div>
  );
}

export default FolderComponent;
