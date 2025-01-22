interface IconImageProps {
  src: string;
}

function IconImage({ src }: IconImageProps) {
  return (
    <>
      <img src={src} className="w-5" alt="icon" />
    </>
  );
}

export default IconImage;
