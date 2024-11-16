import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const SignUp = () => {

    const {createUser} = useContext(AuthContext)
    const navigate = useNavigate();

    const handleSignUp = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log( name, email, password)
        ///create user
        createUser(email, password)
        .then(result => {
            console.log(result.user)
            e.target.reset();
            navigate("/")
        })
        .catch(error => {
            console.log(error.message)
        })

    }
    return (
        <div className="hero ">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold my-6">Sign Up!</h1>
        </div>
        <div className="card bg-base-100 w-full  shadow-2xl">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </form>
          <p>Already have an account? please <Link to={"/login"} className="text-blue-300 hover:underline">Login</Link> </p>
        </div>
      </div>
    </div>
    );
};

export default SignUp;