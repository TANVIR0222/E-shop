import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="card bg-base-100 w-full  max-w-sm shrink-0 shadow-2xl">
          <h2 className=" text-2xl text-center font-semibold pt-5">
            Please Login
          </h2>

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
                  maxLength: 20,
                  minLength: 8,
                  pattern: /^[A-Za-z]+$/i,
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
            <div className="form-control mt-5">
              <button className="p-3 bg-black text-white rounded">Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
