import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";

const MyClass = () => {
  const {user}=useAuth()
    const { data: addedClass = [],  } = useQuery(["class"], async () => {
        const res = await fetch(`http://localhost:5000/AddedClasses?email=${user?.email}`);
        return res.json();
      });

    return (
        <div className="pt-16">

<div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>Image</th>
        <th>Class Name</th>
        <th>Instructor Name</th>
        <th>Available Seats</th>
        <th>Enrolled Students</th>
        <th>Price</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody >
      {addedClass.map(classes=><tr  key={classes._id}>
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
        <td>{classes.enroll}</td>
        <td>${classes.price}</td>
        <th className={classes.status=== 'approved' ? "text-green-500": 'text-red-500'}>
          {/* <button className="btn btn-ghost btn-xs"></button> */}
          {classes.status}
        </th>
      </tr>)}
    </tbody>
    
  </table>
</div>

    </div>
    );
};

export default MyClass;