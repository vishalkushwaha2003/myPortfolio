import React, { useState } from 'react';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const MessageComponent = () => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      console.log('Message sent:', message);
      setMessage('');
    }
  };

  return (
    <div className="flex items-center border h-full w-full bg-transparent border-none rounded-lg ">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        className="flex-grow p-2  rounded-l-lg focus:outline-none h-[70%] bg-[rgba(68,64,60,0.19)] overflow-auto shadow-2xl focus:border-[0.5px] focus:border-[rgba(238,183,160,0.54)] text-[rgb(251,185,182)]"
        style={{ resize: 'none' }}
      />
      <button
        onClick={handleSend}
        className=" text-white/60 p-2 rounded-r-lg focus:outline-none hover:text-white/90"
      >
        <SendOutlinedIcon />
      </button>
    </div>
  );
};

export default MessageComponent;
