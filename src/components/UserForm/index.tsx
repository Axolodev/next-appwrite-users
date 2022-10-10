import { useState } from "react";
import InputField from "../InputField";
import FormButton from "./FormButton";

interface LoginModalParams {
  modalType: "login" | "signup";
  submitHandler: (username: string, password: string) => Promise<void>;
}

function LoginModal({ modalType, submitHandler }: LoginModalParams) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const isSignup = modalType === "signup";

  async function userCallHandler(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      submitHandler(username, password);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError(e.message);
    }
  }

  return (
    <form className="bg-white shadow-md rounded p-8">
      <InputField
        changeHandler={(e) => setUsername(e.target.value)}
        id="username"
        label="Username"
        placeholder="Username"
        value={username}
      />
      <InputField
        changeHandler={(e) => setPassword(e.target.value)}
        id="password"
        label="Password"
        placeholder="Password"
        type="password"
        value={password}
      />

      <div className="flex items-end justify-end">
        <FormButton
          loading={loading}
          handler={userCallHandler}
          defaultLabel={isSignup ? "Sign Up" : "Log In"}
          loadingLabel="Loading..."
        />
      </div>
      <p className="text-red-500 font-bold">{error}</p>
    </form>
  );
}

export default LoginModal;
