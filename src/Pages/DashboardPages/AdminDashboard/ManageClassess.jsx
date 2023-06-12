import { useQuery } from "@tanstack/react-query";
// import { useState } from "react";
import Swal from "sweetalert2";

const ManageClassess = () => {

    const { data: classess = [],refetch  } = useQuery(["class"], async () => {
        const res = await fetch("https://final-assaignment-project-server.vercel.app/addclass");
        return res.json();
      });



      const handleApproved = (classes) => {
        fetch(`https://final-assaignment-project-server.vercel.app/addclass/status/approved/${classes._id}`, {
          method: "PATCH",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount) {
              refetch();
              Swal.fire("Approved!", `${classes?.insName} Request Approved`, "success");
            }
          });
      };

      const handleDeny = (classes) => {
        fetch(`https://final-assaignment-project-server.vercel.app/addclass/status/deny/${classes._id}`, {
          method: "PATCH",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount) {
              refetch();
              Swal.fire("Deny!", `${classes?.insName} Request Denied`, "success");
            }
          });
      };


      const handleFeedback=()=>{
        // 
      }


    return (
        <div className="w-full mx-auto">
      <h3 className=" text-3xl font-semibold my-4">
        Total Classes: {classess.length}
      </h3>
      <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>Image</th>
        <th>Class Name</th>
        <th>Instructor Name & Email</th>
        <th>Available Seats</th>
        <th>Price</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody >
      {classess.map(classes=><tr  key={classes._id}>
        <td >
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={classes.photoURL} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <th>{classes.className}</th>
        <td>
         {classes.insName}
          <br/>
          <span className="badge badge-ghost badge-sm">{classes.email}</span>
        </td>
        <td>{classes.seats}</td>
        <td>{classes.price}</td>
        <th>
          {/* <button className="btn btn-ghost btn-xs">{classes.status}</button> */}
          <button disabled={classes.status=='deny'} onClick={()=> handleApproved(classes)} className="btn btn-ghost btn-xs"> {classes.status=='approved'? <span className="text-green-500 font-bold">Approved</span> : 'Approved'}</button>
           <button disabled={classes.status=='approved'} onClick={()=> handleDeny(classes)} className="btn btn-ghost btn-xs">{classes.status=='deny'? <span className="text-red-500"> Deny</span> : 'Deny'}</button>
          <button disabled={classes.status=='approved' || classes.status=='deny'} onClick={()=> handleFeedback(classes)} className="btn btn-ghost btn-xs">{classes.role=='feedback'? 'Feedback' : 'Feedback'}</button>
        </th>
      </tr>)}
    </tbody>
    
  </table>
</div>
    </div>
    );
};

export default ManageClassess;