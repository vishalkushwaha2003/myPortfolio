import React from "react";
import PortfolioChard from "./PortfolioChard";
import Backdrop from "@mui/material/Backdrop";

import ChatAppBackdrop from "./ChatAppBackdrop";

import FunQrewBackdrop from "./FunQrewBackdrop";
import RunnerBackdrop from "./RunnerBackdrop";
import NetflexBackdrop from "./NetflexBackdrop";

function WebDevelopment() {
  const data = ["chat App", "Netflex", "FunQrew", "Runner"];
  const [open, setOpen] = React.useState(false);
  const [selectedComponent, setSelectedComponent] = React.useState(null);

  const handleClose = () => {
    setOpen(false);
    setSelectedComponent(null);
  };

  const handleOpen = (component) => {
    setSelectedComponent(component);
    setOpen(true);
  };

  const renderComponent = () => {
    switch (selectedComponent) {
      case "chat App":
        return <ChatAppBackdrop />;
      case "FunQrew":
        return <FunQrewBackdrop />;
      case "Runner":
        return <RunnerBackdrop />;
      case "Netflex":
        return <NetflexBackdrop />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="w-full h-auto p-5 gap-5 justify-evenly flex items-center  overflow-x-scroll">
        <div className="animate__animated animate__fadeIn">
          <PortfolioChard
            data={data[0]}
            handleOpen={() => handleOpen("chat App")}
            linkdin={"https://www.linkedin.com/in/vishal-kushwaha-947364249/"}
            GitHub={"https://github.com/vishalkushwaha2003/Chatting-app"}
          />
        </div>
        <div className="animate__animated animate__fadeIn">
          <PortfolioChard
            data={data[1]}
            handleOpen={() => handleOpen("Netflex")}
            linkdin={
              "https://www.linkedin.com/feed/update/urn:li:activity:7207322850955862016/"
            }
            GitHub={
              "https://github.com/vishalkushwaha2003/ActivityTrackerExtensionhttps://github.com/vishalkushwaha2003/Movies-world"
            }
          />
        </div>
        <div className="animate__animated animate__fadeIn">
          <PortfolioChard
            data={data[2]}
            handleOpen={() => handleOpen("FunQrew")}
            linkdin={"https://www.linkedin.com/in/vishal-kushwaha-947364249/"}
            GitHub={"https://github.com/vishalkushwaha2003"}
          />
        </div>
        <div className="animate__animated animate__fadeIn">
          <PortfolioChard
            data={data[3]}
            handleOpen={() => handleOpen("Runner")}
            linkdin={"https://www.linkedin.com/in/vishal-kushwaha-947364249/"}
            GitHub={"https://github.com/vishalkushwaha2003/runner"}
          />
        </div>

        <Backdrop
          sx={{
            color: "#fff",
            zIndex: (theme) => theme.zIndex.drawer + 1,
            backdropFilter: "blur(4px)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
          open={open}
          onClick={handleClose}
        >
          {renderComponent()}
        </Backdrop>
      </div>
    </div>
  );
}

export default WebDevelopment;
