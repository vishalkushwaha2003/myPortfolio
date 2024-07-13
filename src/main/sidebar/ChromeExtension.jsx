import React from "react";
import PortfolioChard from "./PortfolioChard";
import Backdrop from "@mui/material/Backdrop";

import ActivityTrackerBackdrop from "./ActivityTrackerBackdrop";


function ChromeExtension() {
  const data = ["Activity Tracker"];
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
      case 'Activity Tracker':
        return <ActivityTrackerBackdrop />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="w-full h-auto p-5 pl-16 gap-5 justify-start flex items-center  overflow-x-scroll">
      <div className="animate__animated animate__fadeIn">
        <PortfolioChard data={data[0]} handleOpen={() => handleOpen('Activity Tracker')} linkdin={'https://www.linkedin.com/feed/update/urn:li:activity:7207322850955862016/'} GitHub={'https://github.com/vishalkushwaha2003/ActivityTrackerExtension'}/>
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

export default ChromeExtension;
