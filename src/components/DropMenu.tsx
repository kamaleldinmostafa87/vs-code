interface IProps {
  position: {
    x: number;
    y: number;
  };
  //   show: boolean
}

export default function DropMenu({ position }: IProps) {
  return (
    <ul
      className={`bg-white w-fit h-fit text-black rounded-md  p-4 absolute top-${position.x} bottom-${position.y}`}
    >
      <li>Close</li>
      <li>Close All</li>
    </ul>
  );
}
