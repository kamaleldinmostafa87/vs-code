interface IconImageProps {
  src: string;
}

function IconImage({ src }: IconImageProps) {
  return (
    <>
      <img src={src} alt="icon" />
    </>
  );
}

export default IconImage;
