import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
      <form onSubmit={handleSignup} className="bg-slate-800 p-6 rounded-xl w-80">
        <h2 className="text-xl mb-4">Sign Up</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 rounded bg-slate-700"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-3 p-2 rounded bg-slate-700"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-green-500 py-2 rounded">
          Create Account
        </button>
      </form>
    </div>
  );
}

export default Signup;