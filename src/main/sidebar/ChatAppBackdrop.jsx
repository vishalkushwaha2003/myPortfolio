import React from "react";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ChatIcon from '@mui/icons-material/Chat';

import chatimg1 from "../../assets/images/chatApp1.png";
import chatimg2 from "../../assets/images/chatApp2.png";
import chatimg3 from "../../assets/images/chatApp3.png";
import chatimg4 from "../../assets/images/chatApp4.png";

function ChatAppBackdrop() {
  return (
    <div className="w-full h-full  flex justify-center items-center">
      <div className="w-[50%] h-[80%] bg-[rgba(251,185,182,0.05)] rounded-xl flex flex-col">
        <div className="w-[100%] h-[10%] flex justify-center items-center text-3xl font-bold">
          <a href="https://chatting-app-ouxe.onrender.com" target="_blank" className="hover:text-blue-700"><ChatIcon/>  Chat App <OpenInNewIcon/></a>
        </div>
        <div className="h-[90%] w-full p-2 flex flex-col space-y-4 overflow-scroll">
          <div className="text-wrap flex flex-col space-y-4">
            <div className="text-3xl">Introduction</div>
            <div className="text-xl">
              The chat application is a dynamic and interactive platform that
              allows users to engage in real-time conversations with one
              another. This project integrates several modern web development
              technologies and tools to provide a seamless user experience. The
              core functionalities include user registration, login, real-time
              messaging, online status indication, and a visually appealing user
              interface.
            </div>
          </div>




          <div className="min-h-auto w-full grid grid-cols-3  grid-rows-2 gap-2">
            <div className="col-span-2 row-span-1 rounded-lg  overflow-hidden ">
              <img
                src={chatimg1}
                alt="chatapp img"
                className="w-full h-full object-cover rounded-lg hover:scale-105 transition-all duration-300 "
              />
            </div>
            <div className="col-span-1 row-span-1 rounded-lg  overflow-hidden">
              <img
                src={chatimg2}
                alt="chatapp img"
                className="w-full h-full object-cover rounded-lg hover:scale-105 transition-all duration-300"
              />
            </div>
            <div className="col-span-1 row-span-1 rounded-lg  overflow-hidden">
              <img
                src={chatimg3}
                alt="chatapp img"
                className="w-full h-full object-cover rounded-lg hover:scale-105 transition-all duration-300"
              />
            </div>
            <div className="col-span-2 row-span-1 rounded-lg  overflow-hidden">
              <img
                src={chatimg4}
                alt="chatapp img"
                className="w-full h-full object-cover rounded-lg hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>


          <div className="text-wrap flex flex-col space-y-4">
          <div className="text-3xl">User Registration and Authentication</div>
          <div className="text-xl">
          The first step for any new user is the signup process. During signup, users are required to provide their full name, a unique username, and a password. This information is essential for creating a personalized user account and ensuring secure access to the chat platform. The password is securely hashed using bcrypt before being stored in the MongoDB database, ensuring that user credentials are protected.
 <br />
For users who have already signed up, the application offers a straightforward login process. By entering their username and password, users can quickly access their accounts and continue their conversations without the need to sign up again.
          </div>
          </div>

          <div className="text-wrap flex flex-col space-y-4">
          <div className="text-3xl">Real-Time Messaging with Socket.IO</div>
          <div className="text-xl">
          One of the standout features of the chat application is its ability to facilitate real-time messaging. This is achieved using Socket.IO, a powerful library that enables bidirectional communication between the client and server. With Socket.IO, messages are instantly transmitted between users, creating a seamless and responsive chatting experience.
          </div>
          </div>



          <div className="text-wrap flex flex-col space-y-4">
          <div className="text-3xl">Backend and Database Management</div>
          <div className="text-xl">
          The backend of the application is built using Express, a popular web application framework for Node.js. Express provides a robust foundation for handling various server-side operations, including user authentication, message routing, and database interactions.
           <br />
           For database management, MongoDB is employed due to its flexibility and scalability. MongoDB stores user information, chat history, and other essential data in a NoSQL format, which is well-suited for applications requiring high performance and scalability.
         </div>
          </div>


          <div className="text-wrap flex flex-col space-y-4">
          <div className="text-3xl">Deployment on Render</div>
          <div className="text-xl">
          Deploying the chat application is streamlined through Render, a platform that offers free deployment options with just a single click. Render simplifies the process of getting the application online, making it accessible to users without the need for complex deployment procedures. This ensures that the application is always available and running smoothly.      
             
         </div>
          </div>

          <div className="text-wrap flex flex-col space-y-4">
          <div className="text-3xl">Online Status Indicator</div>
          <div className="text-xl">
          To provide users with information about the availability of their contacts, the chat application includes an online status indicator. A green dot next to a user’s name signifies that they are currently online and available for chat. This feature enhances the real-time aspect of the application, allowing users to know when their friends or contacts are active.             
         </div>
          </div>


          <div className="text-wrap flex flex-col space-y-4">
          <div className="text-3xl">Signup and Login Process</div>
          <div className="text-xl">
          <b>Signup :</b> During signup, the user provides their full name, username, and password. The password is hashed using bcrypt, which ensures that even if the database is compromised, the actual passwords remain secure. The hashed password, along with other user details, is then stored in the MongoDB database.         
         <br></br> <b>Login :</b> For returning users, the login process is simple. Users input their username and password, which are validated against the stored credentials in the database. Upon successful authentication, users can access their accounts and resume chatting.
          </div>
          </div>


          <div className="text-wrap flex flex-col space-y-4">
          <div className="text-3xl">User Interface Design</div>
          <div className="text-xl">
          <b>Navigation Bar :</b> Provides quick access to different sections of the application.
             <br/>
           <b> Chat Window:</b> Displays the conversation with a selected contact. Messages are shown in a threaded format for easy readability.
             <br />
             <b>User List : </b> Shows a list of contacts along with their online status indicated by a green dot.
             <br />
             <b>Icons :</b> Various icons from the React Icon library are used to enhance the visual appeal and functionality of the UI.
            </div>
          </div>




          <div className="text-wrap flex flex-col space-y-4">
          <div className="text-3xl">Conclusion</div>
          <div className="text-xl">
          The chat application project leverages a combination of modern technologies to deliver a robust and engaging platform for real-time communication. From the secure signup and login process to the real-time messaging powered by Socket.IO, every component is designed to provide users with a seamless and enjoyable experience. The use of Express and MongoDB for backend and database management ensures scalability and performance, while the attractive UI enhances usability. Deploying the application on Render further simplifies the process, making it accessible to users at all times. Overall, this chat application is a comprehensive solution for real-time communication needs, offering security, functionality, and an exceptional user experience.
          
           
           </div>
          </div>


          <div className="text-wrap flex flex-col space-y-4">
        <div className="text-3xl">What next ➡️</div>
        <div className="text-xl">
        Improvement in the chat application is continue........Task is to make it responsive 
        <br /> currently please open in the desktop mode. And upcoming changes consider to add media transfer and video call feature.
         </div>
        </div>

        </div>
      </div>
    </div>
  );
}

export default ChatAppBackdrop;
