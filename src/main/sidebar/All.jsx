import React from "react";
import PortfolioChard from "./PortfolioChard";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


import ChatAppBackdrop from "./ChatAppBackdrop";
import ActivityTrackerBackdrop from "./ActivityTrackerBackdrop";
import FunQrewBackdrop from "./FunQrewBackdrop";
import RunnerBackdrop from "./RunnerBackdrop";
import NetflexBackdrop from "./NetflexBackdrop";
import ErpPortalBackdrop from "./ErpPortalBackdrop";
import BookAllocationBackdrop from "./BookAllocationBackdrop";
import MusicAppBackdrop from "./MusicAppBackdrop";

function All() {
  const data = ["chat App", "Activity Tracker", "FunQrew", "Runner","Netflex","ERP portal","Book Allocation","Music App"];
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
      case 'Netflex':
        return <NetflexBackdrop/>; 
      case 'ERP portal':
        return <ErpPortalBackdrop />; 
      case 'Book Allocation':
        return <BookAllocationBackdrop />;
      case 'Music App':
        return <MusicAppBackdrop />;    
      default:
        return null;
    }
  };

  return (
   <div>
     
     <div className="w-full h-auto p-5 gap-5 justify-evenly flex items-center  overflow-x-scroll">
      <div className="animate__animated animate__fadeIn">
        <PortfolioChard data={data[0]} handleOpen={() => handleOpen('chat App')} linkdin={'https://www.linkedin.com/in/vishal-kushwaha-947364249/'} GitHub={'https://github.com/vishalkushwaha2003/Chatting-app'}/>
      </div>
      <div className="animate__animated animate__fadeIn">
        <PortfolioChard data={data[1]} handleOpen={() => handleOpen('Activity Tracker')} linkdin={'https://www.linkedin.com/feed/update/urn:li:activity:7207322850955862016/'} GitHub={'https://github.com/vishalkushwaha2003/ActivityTrackerExtension'}/>
      </div>
      <div className="animate__animated animate__fadeIn">
        <PortfolioChard data={data[2]} handleOpen={() => handleOpen('FunQrew')} linkdin={'https://www.linkedin.com/in/vishal-kushwaha-947364249/'} GitHub={'https://github.com/vishalkushwaha2003'}/>
      </div>
      <div className="animate__animated animate__fadeIn">
        <PortfolioChard data={data[3]} handleOpen={() => handleOpen('Runner')} linkdin={'https://www.linkedin.com/in/vishal-kushwaha-947364249/'} GitHub={'https://github.com/vishalkushwaha2003/runner'} />
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


<div className="w-full h-auto p-5 gap-5 justify-evenly flex items-center  overflow-x-scroll">
<div className="animate__animated animate__fadeIn">
  <PortfolioChard data={data[4]} handleOpen={() => handleOpen('Netflex')} linkdin={'https://www.linkedin.com/in/vishal-kushwaha-947364249/'} GitHub={'https://github.com/vishalkushwaha2003/Movies-world'}/>
</div>
<div className="animate__animated animate__fadeIn">
  <PortfolioChard data={data[5]} handleOpen={() => handleOpen('ERP portal')} linkdin={'https://www.linkedin.com/in/vishal-kushwaha-947364249/'} GitHub={'https://github.com/vishalkushwaha2003'}/>
</div>
<div className="animate__animated animate__fadeIn">
  <PortfolioChard data={data[6]} handleOpen={() => handleOpen('Book Allocation')} linkdin={'https://www.linkedin.com/in/vishal-kushwaha-947364249/'} GitHub={'https://github.com/vishalkushwaha2003/Book-store'} />
</div>
<div className="animate__animated animate__fadeIn">
  <PortfolioChard data={data[7]} handleOpen={() => handleOpen('Music App')} linkdin={'https://www.linkedin.com/in/vishal-kushwaha-947364249/'} GitHub={'https://github.com/vishalkushwaha2003'}/>
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

   </div>

  );
}

export default All;
