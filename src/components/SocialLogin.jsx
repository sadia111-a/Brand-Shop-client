import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const SocialLogin = () => {
  const { user, googleLogin } = useContext(AuthContext);
  const handleSocialLogin = (media) => {
    media()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="divider">continue with</div>
      <div className="text-center flex gap-5 ">
        <button
          onClick={() => handleSocialLogin(googleLogin)}
          className="btn btn-neutral bg-slate-200 text-black hover:text-white btn-sm"
        >
          Google
        </button>
        {/* <button
          onClick={() => handleSocialLogin(githubLogin)}
          className="btn btn-neutral bg-slate-200 text-black hover:text-white btn-sm"
        >
          Github
        </button> */}
      </div>
    </>
  );
};

export default SocialLogin;
