function RenderFileName({ fileName }: { fileName: string }) {
  const extenstion = fileName.split(".").pop();
  return (
    <div>
      {extenstion} {fileName}
    </div>
  );
}

export default RenderFileName;
