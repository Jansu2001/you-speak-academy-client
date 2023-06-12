import { NavLink, Outlet } from "react-router-dom";
import { FaCalendar, FaHome, } from "react-icons/fa";
import useAdmin from "../Hooks/useAdmin";
import useInstructor from "../Hooks/useInstructor";
import useAuth from "../Hooks/useAuth";

const Dashboard = () => {


  const {user}=useAuth()



    // const isAdmin = true;
    const [isAdmin]=useAdmin()
    console.log(isAdmin);
    const [isInstructor] = useInstructor()
    // const isInstructor=false
    console.log(isInstructor);


    return (
        <div>
             <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          {/* <!-- Page content here --> */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
            >
           Open Side
          </label>
              <Outlet></Outlet>
        </div>
        <div className="drawer-side bg-gray-200">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80  text-base-content">

              {
              isInstructor
              &&
              
              <>
                   <div className=" h-40 mb-20 mx-auto">
                      <img className=" h-32 mx-auto w-32 rounded-full" src={user.photoURL} alt="" />
                      <h2 className="font-semibold mt-5">Instructor: {user.displayName}</h2>
                    </div>
              <li><NavLink to='/dashboard/addclass'><FaHome></FaHome>Add Classes</NavLink></li>
               <li><NavLink to='/dashboard/myclass'><FaCalendar></FaCalendar>My Classess</NavLink></li>
              </>
              ||
              isAdmin && <>
                   <div className=" h-40 mb-20 mx-auto">
                      <img className=" h-32 mx-auto w-32 rounded-full" src={user.photoURL} alt="" />
                      <h2 className="font-semibold mt-5">Admin: {user.displayName}</h2>
                    </div>
                   <li><NavLink to='/dashboard/manageclasses'><FaHome></FaHome>Manage Classess</NavLink></li>
                    <li><NavLink to='/dashboard/manageusers'><FaCalendar></FaCalendar>Manage users</NavLink></li>
              </>
              ||
              <>
                    <div className=" h-40 mb-20 mx-auto">
                      <img className=" h-32 mx-auto w-32 rounded-full" src={user.photoURL} alt="" />
                      <h2 className="font-semibold mt-5">Student: {user.displayName}</h2>
                    </div>
                
              <li><NavLink to='/dashboard/selectclass'><FaHome></FaHome>Select Classes</NavLink></li>
               <li><NavLink to='/dashboard/enrollclass'><FaCalendar></FaCalendar>My Enrolled Classes</NavLink></li>
               <li><NavLink to='/dashboard/paymenthistory'><FaCalendar></FaCalendar>Payment History</NavLink></li>
              </>
            }
            <div className="divider"></div>
            <li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
          </ul>
        </div>
      </div>
        </div>
    );
};

export default Dashboard;