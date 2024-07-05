import React from "react";
import PortfolioChard from "./PortfolioChard";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


import ChatAppBackdrop from "./ChatAppBackdrop";
import ActivityTrackerBackdrop from "./ActivityTrackerBackdrop";
import FunQrewBackdrop from "./FunQrewBackdrop";
import RunnerBackdrop from "./RunnerBackdrop";

function All() {
  const data = ["chat App", "Activity Tracker", "FunQrew", "Runner"];
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
      case 'chat App':
        return <ChatAppBackdrop />;
      case 'Activity Tracker':
        return <ActivityTrackerBackdrop />;
      case 'FunQrew':
        return <FunQrewBackdrop />;
      case 'Runner':
        return <RunnerBackdrop />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full h-auto p-5 gap-5 justify-evenly flex items-center  overflow-x-scroll">
      <div className="animate__animated animate__fadeInLeft">
        <PortfolioChard data={data[0]} handleOpen={() => handleOpen('chat App')} />
      </div>
      <div className="animate__animated animate__fadeInUp">
        <PortfolioChard data={data[1]} handleOpen={() => handleOpen('Activity Tracker')} />
      </div>
      <div className="animate__animated animate__fadeInUp">
        <PortfolioChard data={data[2]} handleOpen={() => handleOpen('FunQrew')} />
      </div>
      <div className="animate__animated animate__fadeInRight">
        <PortfolioChard data={data[3]} handleOpen={() => handleOpen('Runner')} />
      </div>

      <Backdrop
        sx={{
          color: '#fff',
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backdropFilter: 'blur(4px)',
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }}
        open={open}
        onClick={handleClose}
      >
        {renderComponent()}
      </Backdrop>
    </div>
  );
}

export default All;
