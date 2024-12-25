import IconImage from "./IconImage";
import reactIcon from "./../assets/react.svg";
import typeScriptIcon from "./../assets/typescript-svgrepo-com.svg";
import openedFolder from "./../assets/opened-folder.svg";
import closedFolder from "./../assets/closed-folder.svg";

function RenderFileName({
  fileName,
  open,
  isFolder,
}: {
  fileName: string;
  open: boolean;
  isFolder: boolean;
}) {
  const extenstion = fileName.split(".").pop();

  console.log("extension", extenstion);

  if (extenstion === "tsx" && !isFolder)
    return (
      <>
        <IconImage src={reactIcon} /> {fileName}
      </>
    );

  if (extenstion === "ts" && !isFolder)
    return (
      <>
        <IconImage src={typeScriptIcon} /> {fileName}
      </>
    );

  if (extenstion === "node_modules" && isFolder && open)
    return (
      <>
        <IconImage src={openedFolder} /> {fileName}
      </>
    );

  if (isFolder && open)
    return (
      <>
        <IconImage src={openedFolder} /> {fileName}
      </>
    );

  if (isFolder && !open) return;
  return (
    <>
      <IconImage src={closedFolder} /> {fileName}
    </>
  );

  // return (
  //   <>
  //     {fileName}
  //     <img src="./react.svg" alt="icon" />;
  //   </>
  // );

  // return (
  //   <div>
  //     {extenstion} {fileName}
  //   </div>
  // );
}

export default RenderFileName;
