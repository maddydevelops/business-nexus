import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [role, setRole] = useState("investor");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRole = (selectedRole) => {
    setRole(selectedRole);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Validate if both email and password are entered
    if (!email || !password) {
      alert("Please enter both email and password.");
      return; // Prevent navigation if either field is empty
    }
  
    // Proceed with navigation based on selected role
    if (role === "entrepreneur") {
      navigate("/dashboard/entrepreneur");
    } else if (role === "investor") {
      navigate("/dashboard/investor");
    } else {
      alert("Please select a role.");
    }
  };
  

  return (
    <div className="min-h-screen w-full bg-gradient-to-tr from-[#4e54c8] to-[#8f94fb] flex items-center justify-center px-4 pt-10 py-10 font-[Poppins]">
      <div className="w-full max-w-5xl grid md:grid-cols-2 bg-white/10 backdrop-blur-2xl border border-white/30 shadow-2xl rounded-3xl overflow-hidden">
        <div className="p-10 flex flex-col justify-center bg-white/10">
          <h2 className="text-4xl font-extrabold text-white mb-2 text-center">
            Business Nexus
          </h2>
          <p className="text-sm text-white/80 mb-6 text-center">
            Connect with your business community
          </p>
          <div className="flex justify-center gap-3 mb-6">
            <button
              onClick={() => handleRole("investor")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition duration-300 ${
                role === "investor"
                  ? "bg-white text-indigo-700 shadow-md"
                  : "bg-white/70 text-gray-800 hover:bg-white"
              }`}
            >
              Investor
            </button>
            <button
              onClick={() => handleRole("entrepreneur")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition duration-300 ${
                role === "entrepreneur"
                  ? "bg-white text-indigo-700 shadow-md"
                  : "bg-white/70 text-gray-800 hover:bg-white"
              }`}
            >
              Entrepreneur
            </button>
          </div>

          {/* Updated Login Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email Address"
              className="w-full px-4 py-3 border border-white/30 bg-white/20 text-white placeholder-white/70 rounded-lg focus:ring-2 focus:ring-white focus:outline-none"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-3 border border-white/30 bg-white/20 text-white placeholder-white/70 rounded-lg focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button
              type="submit"
              className="w-full py-3 bg-white text-indigo-700 font-semibold rounded-lg hover:bg-gray-100 transition duration-300"
            >
              Login Now as {role.charAt(0).toUpperCase() + role.slice(1)}
            </button>
            <div className="mt-2 text-center flex flex-col">
              <p className="text-white/70 text-sm">
                Don't have an account?{" "}
                <a
                  href="/register"
                  className="text-white font-semibold underline hover:text-indigo-200"
                >
                  Register Now
                </a>
              </p>
              <a href="/forgot-password" className="text-white">
                Forgot Password?
              </a>
            </div>
          </form>

          {/* Social Buttons */}
          <div className="mt-6 text-center text-sm text-white/70">Or sign in with</div>
          <div className="mt-4 flex flex-col gap-3">
            <button className="flex items-center justify-center gap-3 w-full border border-white/30 bg-white/20 py-2 rounded-lg hover:bg-white/30 transition duration-200 text-white">
              <FcGoogle className="text-2xl bg-white rounded-full" />
              <span className="text-sm font-medium">Login with Google</span>
            </button>
            <button className="flex items-center justify-center gap-3 w-full border border-white/30 bg-white/20 py-2 rounded-lg hover:bg-white/30 transition duration-200 text-white">
              <FaFacebookF className="text-blue-500 bg-white rounded-full p-1 text-xl" />
              <span className="text-sm font-medium">Login with Facebook</span>
            </button>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="relative h-full">
          <img
            src="https://images.unsplash.com/photo-1706234952374-85f1940d18ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVzaW5lc3MlMjBuZXh1c3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Illustration"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-start text-center text-white px-6 py-30">
            <h3 className="text-3xl font-bold mb-3">Welcome Back!</h3>
            <p className="text-sm leading-relaxed text-white/90 max-w-xs">
              Join our thriving business community today.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
