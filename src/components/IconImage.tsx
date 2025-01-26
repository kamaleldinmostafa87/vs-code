interface IconImageProps {
  src: string;
  className?: string;
}

function IconImage({ src, className = "w-5" }: IconImageProps) {
  return (
    <>
      <img src={src} className={className} alt="icon" />
    </>
  );
}

export default IconImage;
