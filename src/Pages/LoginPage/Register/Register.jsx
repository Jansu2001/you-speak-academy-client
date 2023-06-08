import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import { useState } from "react";
import SocialLogin from "../socialLogin/SocialLogin";

const Register = () => {
  const [error,setError]=useState('')
  const [success,setSuccess]=useState('')
  const {signUpUser,displayUser}=useAuth()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    const email = data.email;
    const password = data.password;
    const confirmPassword = data.confirmPassword;

    if(password!==confirmPassword){
      setError('Your Password did not match')
      return;
    }

    signUpUser(email, password)
    .then(result => {
      const createdUser = result.user;
      console.log(createdUser);
      setError('')
      setSuccess('User SuccessFully Created')
        displayUser(data.name, data.photoURL)
        .then(() => {
          const savedUser = {
            name: data.name,
            email: data.email,
            password: data.password
          };
          fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(savedUser)
          })
            .then(res => res.json())
            .then(data => {
              console.log(data);
              if (data.insertedId) {
                
                reset();
                Swal.fire(
                  "Account Created!",
                  "Your Account has been Registered.",
                  "success"
                );
                navigate("/");
              }
            });
        });
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      });
  };

  return (
    <div>
      <div className="hero  ">
        <div className="hero-content w-full ">
          
          <div className="card  w-1/2 shadow-2xl ">
            <h2 className="text-center text-4xl pt-6 font-bold">
              Register Here
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Name"
                  className="input input-bordered rounded-none"
                />
                {errors.name && (
                  <span className="text-red-400">This Field is Required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  placeholder="PhotoURL"
                  className="input input-bordered rounded-none"
                />
                {errors.name && (
                  <span className="text-red-400">This Field is Required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  {...register("email", { required: true })}
                  placeholder="Email"
                  className="input input-bordered rounded-none"
                />
                {errors.email && (
                  <span className="text-red-400">This Field is Required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 14,
                    // pattern:/(?=.*[A-Z])(?=.*[@$!%*?&])/
                  })}
                  placeholder="Password"
                  className="input input-bordered rounded-none"
                />
                {errors.password?.type === "minLength" && (
                  <span className="text-red-400">
                    Password Must be 6 Characters up
                  </span>
                )}
                {/* {errors.password?.type === "pattern" && (
                  <span className="text-red-400">
                    Password Must be Have 1 UpperCase
                  </span>
                )} */}
                <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="text"
                  {...register("confirmPassword", { required: true })}
                  placeholder="Confirm Password"
                  className="input input-bordered rounded-none"
                />
                {errors.email && (
                  <span className="text-red-400">This Field is Required</span>
                )}
              </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
                  <span className="text-red-400">{error}</span>
                  <span className="text-success">{success}</span>
              </div>
              
              <div className="form-control mt-6">
                <input
                  className="btn btn bg bg-[#D1A054] border-none"
                  type="submit"
                  value="Register"
                />
              </div>
              <p className="text-[#D1A054] text-center">
                Already Registered ?{" "}
                <Link to="/login" className="font-bold">
                  Go to Log in
                </Link>
              </p>
              <SocialLogin setSuccess={setSuccess} setError={setError}></SocialLogin>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
