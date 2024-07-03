import React from "react";
import PortfolioChard from "./PortfolioChard";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

function All() {
  const data = ["chat App", "Activity Tracker", "FunQrew", "Runner"];

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="w-full h-full p-5 justify-evenly flex items-center">
      <div className="animate__animated animate__fadeInLeft">
        <PortfolioChard data={data[0]} handleOpen={handleOpen} />
      </div>
      <div className="animate__animated animate__fadeInUp">
        <PortfolioChard data={data[1]} handleOpen={handleOpen} />
      </div>

      <div className="animate__animated animate__fadeInUp">
        <PortfolioChard data={data[2]} handleOpen={handleOpen} />
      </div>
      <div className="animate__animated animate__fadeInRight">
        <PortfolioChard data={data[3]} handleOpen={handleOpen} />
      </div>

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

export default All;
