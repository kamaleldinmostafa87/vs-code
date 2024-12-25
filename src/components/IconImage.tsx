import reactIcon from "./react.svg";
interface IconImageProps {
  src: string;
}

function IconImage({ src }: IconImageProps) {
  // function IconImage() {

  return (
    <>
      <img src={src} className="w-10" alt="icon" />
    </>
  );
}

export default IconImage;
