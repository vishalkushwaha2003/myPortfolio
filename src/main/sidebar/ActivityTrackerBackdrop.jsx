import React from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import backend1 from '../../assets/images/backendArchitecture.png'
import activityimg1 from '../../assets/images/activityTracker1.png';
import activityimg2 from '../../assets/images/activityTracker7.png';
import activityimg3 from '../../assets/images/activityTracker3.png';
import activityimg4 from '../../assets/images/activityTracker4.png';
import activityimg5 from '../../assets/images/activityTracker5.png';
import activityimg6 from '../../assets/images/activityTracker6.png';



function ActivityTrackerBackdrop() {
  return (
    <div className="w-full h-full  flex justify-center items-center">
    <div className="lg:w-[50%] lg:h-[80%] sm:w-[70%] sm:h-[80%] w-[96%] h-[96%] bg-[rgba(251,185,182,0.05)] rounded-xl flex flex-col">
      <div className="w-[100%] h-[10%] flex justify-center items-center text-3xl font-bold">
       <AccessTimeIcon fontSize='large'/> ActivityTracker
      </div>
      <div className="h-[90%] w-full p-2 flex flex-col space-y-4 overflow-scroll">
        <div className='w-full h-[20%] grid grid-cols-3 row-span-2 gap-1 px-5'>
          <div className='col-span-3  row-span-1 flex justify-center items-center text-lg'><GroupsIcon/> Team Members</div>
          <div className='col-span-1 row-span-1 bg-[rgba(251,185,182,0.05)]  rounded-md hover:text-blue-500 hover:cursor-pointer'><a href="https://www.linkedin.com/in/vishal-kushwaha-947364249/" target="_blank" className='flex justify-center items-center'><PersonIcon/> Vishal Kushwaha (me)</a></div>
          <div className='col-span-1 row-span-1 bg-[rgba(251,185,182,0.05)]  rounded-md hover:text-blue-500 hover:cursor-pointer'><a href="https://www.linkedin.com/in/ramandeep-singh-3b6560249/" target="_blank" className='flex justify-center items-center'><PersonIcon/> Ramandeep Singh</a></div>
          <div className='col-span-1 row-span-1  bg-[rgba(251,185,182,0.05)] rounded-md hover:text-blue-500 hover:cursor-pointer'><a href="https://www.linkedin.com/in/harsh-srivastav123/"  target="_blank" className='flex justify-center items-center'><PersonIcon/> Harsh Raj Srivastav</a></div>
        </div>
        <div className="text-wrap flex flex-col space-y-4">
          <div className="text-3xl">Introduction</div>
          <div className="text-xl">
          In the digital age, managing online time effectively can be challenging. With countless websites vying for our attention, staying productive requires more than just self-discipline. To address this, our team—comprising Ramandeep Singh, Harsh, and myself, Vishal Kushwaha—has developed the Activity Tracker Chrome Extension. This innovative tool not only records user activity but also provides powerful features like website blocking and advanced admin controls to enhance productivity.
          <br />
          
            • Read my medium post for permissions used in chrome extension... <a href="https://medium.com/@vishal2003kushwaha/permissions-used-in-developing-chrome-extension-cd8d14c441b6" target='_blank' className='hover:text-blue-600'><OpenInNewIcon/></a>
            <br />
            • Read Ramandeep medium post regarding menifest.json file... <a href="https://medium.com/@ramandeepsingh40270/building-your-first-chrome-extension-a-guide-to-the-manifest-json-file-c176dfc5b692" target='_blank' className='hover:text-blue-600'><OpenInNewIcon/></a>
            <br />
            • Read Harsh medium post regarding backend architecture implementation... <a href="" className='hover:text-blue-600'><OpenInNewIcon/></a>
         
          
          </div>
        </div>




        <div className="min-h-auto w-full grid grid-cols-2  grid-rows-3 gap-2">
          <div className="col-span-1 row-span-1 rounded-lg  overflow-hidden ">
            <img
              src={activityimg1}
              alt="chatapp img"
              className="w-full h-full object-cover rounded-lg hover:scale-105 transition-all duration-300 "
            />
          </div>
          <div className="col-span-1 row-span-1 rounded-lg  overflow-hidden">
            <img
              src={activityimg2}
              alt="chatapp img"
              className="w-full h-full object-cover rounded-lg hover:scale-105 transition-all duration-300"
            />
          </div>
          <div className="col-span-1 row-span-1 rounded-lg  overflow-hidden">
            <img
              src={activityimg3}
              alt="chatapp img"
              className="w-full h-full object-cover rounded-lg hover:scale-105 transition-all duration-300"
            />
          </div>
          <div className="col-span-1 row-span-1 rounded-lg  overflow-hidden">
            <img
              src={activityimg4}
              alt="chatapp img"
              className="w-full h-full object-cover rounded-lg hover:scale-105 transition-all duration-300"
            />
          </div>

          <div className="col-span-1 row-span-1 rounded-lg  overflow-hidden">
            <img
              src={activityimg5}
              alt="chatapp img"
              className="w-full h-full object-cover rounded-lg hover:scale-105 transition-all duration-300"
            />
          </div>

          <div className="col-span-1 row-span-1 rounded-lg  overflow-hidden">
            <img
              src={activityimg6}
              alt="chatapp img"
              className="w-full h-full object-cover rounded-lg hover:scale-105 transition-all duration-300"
            />
          </div>

          
        </div>


        <div className="text-wrap flex flex-col space-y-4">
        <div className="text-3xl">Activity Monitoring</div>
        <div className="text-xl">
        The core feature of Activity Tracker is its ability to monitor and record user activity within the Chrome browser. Users can view their activity data organized day-wise, month-wise, and year-wise. This detailed insight helps users understand their browsing habits and identify time-wasting patterns. The extension icon provides a quick summary of the user's daily activity, which can be expanded for more detailed views.
        </div>
        </div>

        <div className="text-wrap flex flex-col space-y-4">
        <div className="text-3xl">Website Blocking</div>
        <div className="text-xl">
        One of the standout features of our extension is the ability to block specific websites. Users can set durations for which sites should be blocked and specify particular days and times when these blocks should be active. This flexible blocking system allows users to tailor their browsing restrictions to their unique schedules, promoting better focus and productivity.
          </div>
        </div>



        <div className="text-wrap flex flex-col space-y-4">
        <div className="text-3xl">Admin Control System</div>
        <div className="text-xl">
        An advanced feature currently in development is the admin control system. This system is designed for organizational use, enabling managers or admins to monitor and manage the web activities of their team members. Admins can see which websites are being used the most, set browsing restrictions, and gather valuable insights into employee productivity. This feature aims to help organizations identify top performers and those who may need additional support.
      
       </div>
        </div>


        <div className="text-wrap flex flex-col space-y-4">
        <div className="text-3xl">User Authentication</div>
        <div className="text-xl">
        To access the advanced features of Activity Tracker, users must authenticate themselves. This ensures that the sensitive data and control features are secure and only accessible to authorized individuals.           
       </div>
        </div>

        <div className="text-wrap flex flex-col space-y-4">
        <div className="text-3xl">Frontend Development process</div>
        <div className="text-xl">
        Ramandeep Singh and I focused on creating a seamless and user-friendly interface for the Activity Tracker extension. We utilized modern web technologies such as React for building the interactive UI components, Chart.js for visualizing activity data, and Material-UI and Tailwind CSS for a polished, responsive design.       </div>
        </div>


        <div className="text-wrap flex flex-col space-y-4">
        <div className="text-3xl">Backend Development process</div>
        <div className="text-2xl flex flex-col space-y-2">
         <div className='text-xl'>
          
        Harsh is responsible for the backend development, which is powered by Spring Boot and Java 17. The backend architecture is designed using microservices, ensuring scalability and flexibility. Here’s a closer look at the backend components:
          
          </div> 
          <div>→ Microservices Architecture
            <div className='text-xl'>
            <b>User Service :</b> Handles all user-related processes, including authentication and data management.
            <br />
           <b>Admin Service :</b> Manages organizational-level operations, allowing admins to control and monitor team activities.
            <br />
            <b>Scheduler Service :</b> Aggregates daily user status and compiles activity reports.
            
            </div>
            
            </div > 
              
            <div className=''>
            <img src={backend1} alt="backend architecture" className='object-cover' />
              </div>  
            <div>→ Security
              <div className='text-xl'>To secure user data and ensure safe authentication processes, we implemented Spring Security with JWT (JSON Web Token) for secure authentication.</div>
              
              </div> 

              <div>→ Event-Driven Architecture
              <div className='text-xl'>The backend utilizes an event-driven architecture for efficient asynchronous processing, ensuring real-time updates and responsiveness.</div>
              
              </div>    


              <div>→ Data Management
            <div className='text-xl'>
            <b>Redis :</b> Used for fast in-memory data storage, handling temporary user data such as active tabs efficiently.
            <br />
          
            <b>Apache Kafka :</b> Facilitates seamless communication between microservices, ensuring data consistency and reliability.
            
            </div>
            </div>
      
         
        </div>
        </div>


        <div className="text-wrap flex flex-col space-y-4">
        <div className="text-3xl">Deployment and Scalability</div>
        <div className="text-xl">
        Our extension is deployed using AWS EC2 and MySQL RDS, providing scalable compute power and managed database services. Continuous Integration and Continuous Deployment (CI/CD) are managed through GitHub Actions, automating the development and deployment process. We also use Nginx for load balancing and as a reverse proxy to improve performance.
          <br />
          For scalability, we employ horizontal scaling, adding more instances to handle increased load. The Spring Eureka Discovery Server manages microservice interactions, while the Config Server centralizes configuration management.
          
          </div>
        </div>




        <div className="text-wrap flex flex-col space-y-4">
        <div className="text-3xl">CI/CD Enhancements</div>
        <div className="text-xl">
        We plan to integrate Jenkins to further enhance our continuous integration and deployment pipeline, making the development process even more efficient.          
         </div>
        </div>



        <div className="text-wrap flex flex-col space-y-4">
        <div className="text-3xl">Advanced AWS Services</div>
        <div className="text-xl">
        In the future, we aim to leverage AWS Lambda for serverless compute and AWS Cognito for advanced user authentication, enhancing the scalability and security of our extension.
         </div>
        </div>


        <div className="text-wrap flex flex-col space-y-4">
        <div className="text-3xl">Monitoring</div>
        <div className="text-xl">
        To ensure the smooth operation of our system, we plan to implement comprehensive monitoring using Grafana, Prometheus, and Loki. These tools will provide valuable insights into system performance and help us proactively address any issues.    
       </div>
        </div>
        




        <div className="text-wrap flex flex-col space-y-4">
        <div className="text-3xl">Conclusion</div>
        <div className="text-xl">
        The Activity Tracker Chrome Extension is a powerful tool designed to help users monitor and manage their web activity effectively. With features like detailed activity tracking, flexible website blocking, and an advanced admin control system, this extension aims to boost productivity and provide insightful analytics. Our team is committed to continuously improving the extension, with exciting new features and enhancements on the horizon. Stay tuned for more updates as we revolutionize productivity monitoring!
        
                </div>
                 </div>

        
        <div className="text-wrap flex flex-col space-y-4">
        <div className="text-3xl">What next ➡️</div>
        <div className="text-xl">
        Improvement in the ActivityTracker is continue........Task is to make it  more secure.
       And upcoming changes consider to add Admit section.
         </div>
        </div>


        

      </div>
    </div>
  </div>
  )
}

export default ActivityTrackerBackdrop
