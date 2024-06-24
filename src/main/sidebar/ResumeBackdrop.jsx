import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function ResumeBackdrop() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      
      {open && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center backdrop-blur-sm items-center z-50">
            <div className="bg-[rgba(20,20,20,255)] p-4 rounded-md shadow-md flex flex-col items-center">
              <h1 className="text-base mb-4 text-center">resume</h1>
              <button
                className="bg-[rgba(47,47,47,255)] px-4 py-2 rounded-md hover:cursor-pointer hover:bg-[rgb(57,57,57)]"
                onClick={handleClose}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
    </div>
  );
}
