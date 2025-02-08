import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

interface IProps {
  rightContent: React.ReactNode;
  leftContent: React.ReactNode;
  defaultLayout?: number[] | undefined;
}

export default function ResizablePanel({
  defaultLayout = [20, 80],
  rightContent,
  leftContent,
}: IProps) {
  const onLayout = (sizes: number[]) => {
    document.cookie = `layout=${sizes}react-resizable-panels:layout=JSON.stringify(sizes)`;
  };

  return (
    <PanelGroup autoSaveId="example" direction="horizontal" onLayout={onLayout}>
      <Panel defaultSize={defaultLayout[0]}>{leftContent}</Panel>
      <PanelResizeHandle className=" border-r border-gray-600" />
      <Panel defaultSize={defaultLayout[1]}>{rightContent}</Panel>
    </PanelGroup>
  );
}
