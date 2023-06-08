import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const SocialLogin = ({ setSuccess, setError }) => {
  const { loginWithGoogle, } =useAuth()

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogle = () => {
    loginWithGoogle()
      .then((result) => {
        setError("");
        setSuccess("User SuccessFully Login with Google");
        const loggeduser = result.user;
        console.log(loggeduser);
        const savedUser = {
          name: loggeduser.displayName,
          email: loggeduser.email,
        };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(savedUser),
        })
          .then((res) => res.json())
          .then(() => {
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        setSuccess("");
        setError(error.message);
        console.log(error.message);
      });
  };
//   const handleGitHub = () => {
//     loginWithGitHub()
//       .then((result) => {
//         setError("");
//         setSuccess("User SuccessFully Login with Github");
//         const user = result.user;
//         console.log(user);
//         navigate(from, { replace: true });
//       })
//       .catch((error) => {
//         setSuccess("");
//         setError(error.message);
//         console.log(error.message);
//       });
//   };

  return (
    <div className="text-center">
      <div className="divider">OR SIGN IN WITH</div>
      <div>
        <button title="Facebook" className="btn btn-circle ml-6 btn-sm">
          <FaFacebook></FaFacebook>
        </button>
        <button
          onClick={handleGoogle}
          title="Google"
          className="btn btn-circle ml-6 btn-sm "
        >
          <FaGoogle></FaGoogle>
        </button>
        <button
        //   onClick={handleGitHub}
          title="Github"
          className="btn btn-circle ml-6 btn-sm "
        >
          <FaGithub></FaGithub>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
