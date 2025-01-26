import IconImage from "./IconImage";
// import reactIcon from "./../assets/react.svg";

import typeScriptIcon from "./../assets/typescript-svgrepo-com.svg";
import openedFolder from "./../assets/opened-folder.svg";
import closedFolder from "./../assets/closed-folder.svg";
import fileIcon from "./../assets/fileIcon.svg";
import ReactIcon from "./SVG/ReactIcon.svg";

function RenderFileName({
  fileName,
  open,
  isFolder,
}: {
  fileName: string;
  open?: boolean;
  isFolder?: boolean;
}) {
  const extenstion = fileName.split(".").pop();

  const extensionPathes: Record<string, string> = {
    // ** files
    ts: typeScriptIcon,
    jsx: ReactIcon as any,
    tsx: ReactIcon as any,
    html: fileIcon,
    css: fileIcon,
    // ** folders
    openedFolder: openedFolder,
    closedFolder: closedFolder,
  };

  if (extenstion && extensionPathes.hasOwnProperty(extenstion)) {
    const iconPath = isFolder
      ? open
        ? `${extensionPathes["openedFolder"]}`
        : `${extensionPathes["closedFolder"]}`
      : `${extensionPathes[extenstion]}`;

    return (
      <>
        <IconImage src={iconPath} /> {fileName}
      </>
    );
  }

  if (isFolder && open) {
    return (
      <>
        <IconImage src={openedFolder} /> {fileName}
      </>
    );
  }

  if (isFolder && !open) {
    return (
      <>
        <IconImage src={closedFolder} /> {fileName}
      </>
    );
  }

  // return (
  //   <>
  //     <IconImage src={fileIcon} />
  //     {fileName}
  //   </>
  // );
}

export default RenderFileName;
