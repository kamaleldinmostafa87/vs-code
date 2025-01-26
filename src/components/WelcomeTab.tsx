import IconImage from "./IconImage";
import VsCodeImage from "./SVG/vscode.svg";

export default function WelcomeTab() {
  return (
    <div className="flex justify-center items-center ">
      <IconImage src={VsCodeImage} className="w-64 h-screen" />
    </div>
  );
}
