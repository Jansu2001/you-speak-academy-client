import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";

const AllClassess = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: classess = [] } = useQuery(["class"], async () => {
    const res = await fetch("http://localhost:5000/addclass");
    return res.json();
  });
  const approvedClasses=classess.filter(classes=>classes.status==='approved')

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
    <div className="pt-16 ">
      <div className="overflow-x-auto ">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {approvedClasses.map((classes) => (
              <tr key={classes._id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={classes.photoURL}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <th>{classes.className}</th>
                <td>{classes.insName}</td>
                <td>{classes.seats}</td>
                <td>${classes.price}</td>
                <th>
                  <button
                    onClick={() => handleSelectClass(classes)}
                    className="btn btn-ghost btn-xs"
                  >
                    Select
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllClassess;
