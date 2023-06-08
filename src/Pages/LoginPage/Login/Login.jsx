import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import SocialLogin from "../socialLogin/SocialLogin";

const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { signInUser } = useAuth()
  
  const [show,setShow]=useState(false)



  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const email = data.email;
    const password = data.password;

    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        setSuccess("User SuccessFully Logged In");
        Swal.fire({
          title: `User Login SuccessFully`,
          showClass: {
            popup: `animate_animated animate_fadeInDown`,
          },
          hideClass: {
            popup: `animate_animated animate_fadeOutUp`,
          },
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };



  return (
    <>
      <div className="hero ">
        <div className="hero-content w-full ">
          <div className="card w-1/2 shadow-2xl ">
            <h2 className="text-center text-4xl pt-6 font-bold">Login Here</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Email"
                  className="input input-bordered rounded-none"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={show?"text":"password"}
                  {...register("password", { required: true })}
                  placeholder="Password"
                  className="input input-bordered rounded-none"
                />
              </div>
              <div className="form-control">

                <span onClick={()=>setShow(!show)} className="cursor-pointer w-1/6">
                    
                {!show?<small>Show password</small>: <small>Hide password</small>}
                </span>
                <span>{error}</span>
                <span>{success}</span>
              </div>
              <div className="form-control mt-6">
                <input
                  disabled={false}
                  className="btn btn bg bg-[#D1A054] border-none"
                  type="submit"
                  value="Login"
                />
              </div>
              <p className="text-[#D1A054] text-center">
                New here?{" "}
                <Link to="/register" className="font-bold">
                  Create a New Account
                </Link>
              </p>
              <SocialLogin setSuccess={setSuccess} setError={setError}></SocialLogin>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
