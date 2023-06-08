import { FaTrashAlt } from "react-icons/fa";
import useClass from "../../../Hooks/useClass";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const MySelectClass = () => {
  const [selectedClass,refetch] = useClass();
  const [axiosSecure]=useAxiosSecure()

  const handleDeleteClass =(classes)=>{

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
            axiosSecure.delete(`/selectedclass/${classes._id}`)
            .then((data) => {
              if(data.data.deletedCount>0){
                refetch()
                  Swal.fire("Deleted!", "Your Class has been deleted.", "success");
              }
              console.log(data);
            });
        }
      });
  }


  return (
    <div className="pt-16">
      <h4>This Is My Selectede Classess:{selectedClass?.length} </h4>
      <div className="w-full">
      <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>Cancle</th>
        <th>Image</th>
        <th>Class Name</th>
        <th>Instructor Name </th>
        <th>Available Seats</th>
        <th>Price</th>
        <th>Payment</th>
      </tr>
    </thead>
    <tbody >
      {selectedClass.map(classes=><tr  key={classes._id}>
        <th><button onClick={()=> handleDeleteClass(classes)} className="btn btn-sm"><FaTrashAlt></FaTrashAlt> </button></th>
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
        </td>
        <td>{classes.seats}</td>
        <td>{classes.price}</td>
        <th>
        <Link to='/dashboard/payment'>
          <button className="btn btn-outline  bg-sky-800 text-white  btn-sm">
            Payment
          </button>
          </Link>
        </th>
      </tr>)}
    </tbody>
    
  </table>
</div>

      </div>
    </div>
  );
};

export default MySelectClass;
