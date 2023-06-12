import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";



const MyEnrolledClass = () => {
  

  const {user}=useAuth()
  const { data: myEnrollClass = [],  } = useQuery(["class"], async () => {
      const res = await fetch(`https://final-assaignment-project-server.vercel.app/enrollclass?email=${user?.email}`);
      return res.json();
    });


  return (
    <div className="p-5">
      <h4 className="m-5 p-3 text-center rounded-full text-white text-4xl mx-auto bg bg-cyan-700 w-1/2 font-bold">Total Enrolled Classes: {myEnrollClass.length}</h4>


      <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Image</th>
        <th>Class Name</th>
        <th>Instructor Name </th>
        <th>Available Seats</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody >
      {myEnrollClass.map((classes,index)=><tr  key={classes._id}>
        <th>{index+1}</th>
        <td >
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask rounded-lg w-20 h-20">
                <img src={classes.photoURL} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <th>{classes.className}</th>
        <td>
         {classes.insName}
        </td>
        <td className="font-bold">{classes.seats}</td>
        <td className="font-bold">${classes.price}</td>
      </tr>)}
    </tbody>
    
  </table>


    </div>
  );
};

export default MyEnrolledClass;
