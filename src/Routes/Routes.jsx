
import {createBrowserRouter} from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/HomePage/Home/Home";
import Login from "../Pages/LoginPage/Login/Login";
import Register from "../Pages/LoginPage/Register/Register";
import Dashboard from "../LayOut/Dashboard";
import ManageUsers from "../Pages/DashboardPages/AdminDashboard/ManageUsers";
import ManageClassess from "../Pages/DashboardPages/AdminDashboard/ManageClassess";
import AddClass from "../Pages/DashboardPages/InstructorDashboard/AddClass";
import MyClass from "../Pages/DashboardPages/InstructorDashboard/MyClass";
import MySelectClass from "../Pages/DashboardPages/StudentsDashboard/MySelectClass";
import MyEnrolledClass from "../Pages/DashboardPages/StudentsDashboard/MyEnrolledClass";
import Payment from "../Pages/DashboardPages/StudentsDashboard/Payment";
import PaymentHistory from "../Pages/DashboardPages/StudentsDashboard/PaymentHistory";
import AllClassess from "../Pages/ClassessPage/AllClassess";
import AllInstructor from "../Pages/InstructorPage/AllInstructor";
import PrivateRoutes from "./PrivateRoutes";
import InstructorRoute from "./InstructorRoute";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'allclassess',
          element:<AllClassess></AllClassess>
        },
        {
          path:'allinstructor',
          element:<AllInstructor></AllInstructor>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/addclass',
          element:<AddClass></AddClass>
        },
      ]
    },
    {
      path:'dashboard',
      element:<PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
      children:[

        // Admin DashBoard
        {
          path:'manageusers',
          element:<ManageUsers></ManageUsers>
        },
        {
          path:'manageclasses',
          element:<ManageClassess></ManageClassess>
        },

        // Instructor DashBoard
        {
          path:'addclass',
          element:<AddClass></AddClass>
        },
        {
          path:'myclass',
          element:<PrivateRoutes><MyClass></MyClass></PrivateRoutes>
        },

        // Students DashBoard
        {
          path:'selectclass',
          element:<MySelectClass></MySelectClass>
        },
        {
          path:'enrollclass',
          element:<MyEnrolledClass></MyEnrolledClass>
        },
        // Student Payment 
        {
          path:'payment',
          element:<Payment></Payment>
        },
        {
          path:'paymenthistroy',
          element:<PaymentHistory></PaymentHistory>
        }
      
      ]
    }
  ]);