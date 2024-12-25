import reactIcon from "./react.svg";
interface IconImageProps {
  src: string;
}

function IconImage({ src }: IconImageProps) {
  // function IconImage() {
  console.log("src");

  return (
    <>
      <img src={src} className="w-5" alt="icon" />
    </>
  );
}

export default IconImage;
