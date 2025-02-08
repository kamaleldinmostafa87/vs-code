import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenedFileAction } from "../app/features/fileTreeSlice";
import { RootState } from "../app/store";

interface IProps {
  position: {
    x: number;
    y: number;
  };
  setShowMenu: (bool: boolean) => void;
}

export default function DropMenu({ position, setShowMenu }: IProps) {
  const dispatch = useDispatch();

  const { openedFile, tabIdToRemove } = useSelector(
    (state: RootState) => state.tree
  );
  const ref = useRef<HTMLDivElement>(null);

  const onClose = () => {
    console.log("on close");
    console.log(tabIdToRemove);

    const newOpenedFile = openedFile.filter(
      (file) => file.id !== tabIdToRemove
    );
    dispatch(setOpenedFileAction(newOpenedFile));
    setShowMenu(false);

    // dispatch(
    //   setClickedFileAction({
    //     name: "",
    //     content: "",
    //     active: false,
    //     activeTabId: "",
    //   })
    // );
    // dispatch(setTabIdToRemoveAction());
  };

  const onCloseAll = () => {
    dispatch(setOpenedFileAction([]));
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [setShowMenu]);

  return (
    <div ref={ref}>
      <ul
        className={`bg-white cursor-pointer w-fit h-fit text-black rounded-md  p-4`}
        style={{
          position: "absolute",
          left: position.x,
          top: position.y,
        }}
      >
        <li onClick={onClose}>Close</li>
        <li onClick={onCloseAll}>Close All</li>
      </ul>
    </div>
  );
}
