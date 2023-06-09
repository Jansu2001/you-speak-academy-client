import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUserSecret, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ManageUsers = () => {

  const [axiosSecure]=useAxiosSecure()
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  //   Handle Make Admin Role
  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`,)
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire("Made Admin!", `${user.name} is an Admin Now`, "success");
        }
      });
  };

  //   Handle Make Instructor Role
  //   TODO:
  const handleMakeInstructor = (user) => {
    axiosSecure.patch(`/users/instructor/${user._id}`)
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire("Made Instructor!", `${user.name} is an Instructor Now`, "success");
        }
      });
  };

  //   Handle Delete Users
  const handleDelete = () => {
    //
  };

  return (
    <div className="w-full mx-auto">
      <h3 className=" text-3xl font-semibold my-4">
        Total Users: {users.length}
      </h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Instructor</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>
                  {user.role == "admin" ? (
                    "Admin Now"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-ghost bg-red-600 text-white"
                      title="Make Admin"
                    >
                      <FaUserSecret></FaUserSecret>
                    </button>
                  )}
                </td>
                <td>
                  {user.role == "instructor" ? (
                    "Instructor Now"
                  ) : (
                    <button
                      onClick={() => handleMakeInstructor(user)}
                      className="btn btn-ghost bg-red-600 text-white"
                      title="Make Instructor"
                    >
                      <FaUserShield></FaUserShield>
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-ghost bg-red-600 text-white"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
