import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAdmin from "../../../Hooks/useAdmin";
import useInstructor from "../../../Hooks/useInstructor";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
const ClassessCard = ({classes}) => {
    const { user } = useAuth();
    const [isAdmin]=useAdmin()
    const [isInstructor]=useInstructor()
  
    const [axiosSecure] = useAxiosSecure();
    // const { data: classess = [] } = useQuery(["class"], async () => {
    //   const res = await fetch("http://localhost:5000/addclass");
    //   return res.json();
    // });
  
    // const approvedClasses=classess.filter(classes=>classes.status==='approved')

    const navigate = useNavigate();
  
    const handleSelectClass = (selectClass) => {
      const { _id, insName, seats, price, className, photoURL } = selectClass;
      if (user && user?.email) {
        const selectedClass = {
          classId: _id,
          insName,
          seats: parseFloat(seats),
          price,
          className,
          photoURL,
          name: user?.displayName,
          email: user?.email,
        };
  
        axiosSecure.post("/selectedclass", selectedClass)
        .then((data) => {
          if (data.data.insertedId) {
            
            Swal.fire(
              "Selected!",
              `Congragulations ${user.displayName}`,
              "success"
            );
          }
        });
      } else {
        Swal.fire({
          title: "Please Login to Select this Class?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Login Please!",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/login");
          }
        });
      }
    };
    
    return (
        <div>
            {classes.seats===0 
            ?
            <div className= "border p-2 border-green-400 rounded-lg w-80 h-80 mt-20 bg bg-red-700 text-white -white transition duration-300 shadow-xl image-full" >
            
        <div className="">
          <img
            className="mx-auto rounded-lg w-72 h-48 relative -top-16"
            src={classes.photoURL}
            alt=""
          />
          <p className="relative -top-20 left-[40%] bg bg-green-700 w-16 rounded-full px-3 py-2 text-white">${classes.price}</p>
        </div>
          <div className="relative -top-14">
          <h1 className=" font-bold">Instructor: {classes.insName}</h1>
          <h1 className=" font-bold">Available Seats: {classes.seats}</h1>
          <h1 className=" text-2xl font-bold">Course: {classes.className}</h1>
          </div>
          
                    
          <button disabled={isAdmin || isInstructor || classes.seats===0}  onClick={() => handleSelectClass(classes)} className="btn text-white border-none bg bg-gray-400 relative rounded-none rounded-bl-lg rounded-br-lg  -top-8 w-full font-bold ">{classes.seats===0 ? 'Course Full': 'Select Course'}</button>
      </div> 
            :
            <div className= "border p-2 border-green-400 rounded-lg w-80 h-80 mt-20 hover:bg-cyan-400 -white transition duration-300 shadow-xl image-full" >
            
            <div className="">
              <img
                className="mx-auto rounded-lg w-72 h-48 relative -top-16"
                src={classes.photoURL}
                alt=""
              />
              <p className="relative -top-20 left-[40%] bg bg-green-700 w-16 rounded-full px-3 py-2 text-white">${classes.price}</p>
            </div>
              <div className="relative -top-14">
              <h1 className=" font-bold">Instructor: {classes.insName}</h1>
              <h1 className=" font-bold">Available Seats: {classes.seats}</h1>
              <h1 className=" text-2xl font-bold">Course: {classes.className}</h1>
              </div>
              
                        
              <button disabled={isAdmin || isInstructor}  onClick={() => handleSelectClass(classes)} className="btn btn-primary border-none  bg bg-gray-400 relative rounded-none rounded-bl-lg rounded-br-lg -top-8 w-full font-bold text-stone-800">Select Course</button>
          </div>}
        </div>
    );
};

export default ClassessCard;
