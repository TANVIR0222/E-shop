import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useLoginUserMutation } from "../redux/features/auth/authApi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import { setUser } from "../redux/features/auth/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [loginUser, { isLoading: loginLoading }] = useLoginUserMutation();
  const [error, seterror] = useState("");

  const navigat = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const email = data.email;
    const password = data.password;

    try {
      const res = await loginUser({ email, password }).unwrap();


      // token set localstorage 
      const {token , user } = res;
      dispatch(setUser({user}))

      reset();
      if (res.message) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Log in success ",
          showConfirmButton: false,
          timer: 1500,
        });
        navigat('/')
      }
    } catch (error) {
      console.log("login faild ", error);
      seterror(error);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="card bg-base-100 w-full  max-w-sm shrink-0 shadow-2xl">
          {loginLoading ? (
            <span className="loading mx-auto text-blue-600 loading-infinity loading-lg"></span>
          ) : (
            <h2 className=" text-2xl text-center font-semibold pt-5">
              Please Login
            </h2>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="h-12 bg-gray-50 p-2 border rounded focus:outline-none"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="h-12 bg-gray-50 p-2 border rounded focus:outline-none"
                {...register("password", {
                  required: true,
                })}
              />
              {errors.password?.type === "required" && (
                <p className=" text-red-700" role="alert">
                  Password is required
                </p>
              )}

              <p className="text-sm mt-2">
                Don't have an account ?{" "}
                <a className="text-blue-600 underline" href="/register">
                  register
                </a>{" "}
                here
              </p>
            </div>
            {error && (
              <p className="text-red-600 text-sm  italic">
                {error.data.message}{" "}
              </p>
            )}

            <div className="form-control mt-5">
              <button type="submit" className="p-3 bg-black text-white rounded">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
