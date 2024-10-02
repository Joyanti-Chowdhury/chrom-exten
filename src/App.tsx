import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { cn } from "./lib/utils";
import Resizable from "./components/Resizable";
import { useState } from "react";
import Btn from "./components/Btn";

const App = () => {
  const [popUp, setPopUp] = useState<boolean>(false);

  return (
    <>
      {popUp ? (
        <div className={cn("relative")}>
          <ResizablePanelGroup
            direction="vertical"
            className="min-h-screen fixed top-24 right-16">
            <ResizablePanel defaultSize={0} minSize={0} />
            <ResizablePanel defaultSize={60} minSize={50}>
              <ResizablePanelGroup direction="horizontal" className="items-end">
                <ResizablePanel defaultSize={20} minSize={20} />
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={5} minSize={20} maxSize={40}>
                  <Resizable popUp={setPopUp} />
                </ResizablePanel>
              </ResizablePanelGroup>
            </ResizablePanel>
            <ResizablePanel defaultSize={10} minSize={20} />
          </ResizablePanelGroup>
        </div>
      ) : (
        <Btn popUp={setPopUp} />
      )}
    </>
  );
};

export default App;
