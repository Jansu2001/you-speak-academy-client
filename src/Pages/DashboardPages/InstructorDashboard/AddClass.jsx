import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";

const AddClass = () => {
  const { register, handleSubmit, reset,formState: { errors }, } = useForm();
  const [axiosSecure] = useAxiosSecure();

  const {user}=useAuth()

  const onSubmit = (data) => {
    console.log(data);
    const { price, className,insEmail,insName,photoURL } = data;
    const newClasses = { insName, price: parseFloat(price), className, insEmail,photoURL };
    console.log(newClasses);
    axiosSecure.post("/addclass", newClasses)
    .then((data) => {
      if (data.data.insertedId) {
        reset();
        Swal.fire("Item Added!", "Added Item SuccessFully.", "success");
      }
    });
  };

  
  return (
    <div className="pt-10 ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" space-y-5 pt-5 px-10 bg-[#F3F4F3]  mx-auto"
      >
        <div className="flex gap-5 ">
          <div className="form-control w-1/2 ">
            <label className="label">
              <span className="label-text font-bold">Class Name*</span>
            </label>
            <select
              defaultValue="Pick One"
              {...register("className", { required: true })}
              className="select select-bordered rounded-none"
            >
              <option disabled selected>
                Pick One
              </option>
              <option>English</option>
              <option>Bangla</option>
              <option>Hindi</option>
              <option>Urdu</option>
              <option>Turkish</option>
              <option>French</option>
              </select>
          </div>
          <div className="form-control w-1/2 ">
            <label className="label">
              <span className="label-text font-bold">Price*</span>
            </label>
            <input
              type="number"
              placeholder="Price"
              {...register("price", { required: true, maxLength: 80 })}
              className="input input-bordered w-full rounded-none"
            />
            {errors.price && (
                  <span className="text-red-400">This Field is Required</span>
                )}
          </div>
        </div>
        <div className="flex w-full gap-5 ">
          
          <div className="form-control w-1/2 ">
            <label className="label">
              <span className="label-text font-bold">Instructor Name</span>
            </label>
            <input
              value={user?.displayName}
              type="text"
              {...register("insName", { required: true, maxLength: 80 })}
              className="input input-bordered w-full rounded-none"
            />
          </div>
          <div className="form-control w-1/2 ">
            <label className="label">
              <span className="label-text font-bold">Instructor Email</span>
            </label>
            <input
              value={user?.email}
              type="text"
              {...register("insEmail", { required: true, maxLength: 80 })}
              className="input input-bordered w-full rounded-none"
            />
          </div>
        </div>
       <div className="flex w-full gap-5">
       <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text font-bold">Photo URL*</span>
                </label>
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  placeholder="PhotoURL"
                  className="input input-bordered rounded-none"
                />
                {errors.photoURL && (
                  <span className="text-red-400">This Field is Required</span>
                )}
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text font-bold">Available Seats*</span>
                </label>
                <input
                  type="text"
                  {...register("seats", { required: true })}
                  placeholder="Available Seats"
                  className="input input-bordered rounded-none"
                />
                {errors.seats && (
                  <span className="text-red-400">This Field is Required</span>
                )}
              </div>
       </div>
        <div className="pb-4 ">
          <input className="btn  w-1/2 " type="submit" value="Add Item" />
        </div>
      </form>
    </div>
  );
};

export default AddClass;
