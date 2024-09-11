import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      axios
        .post("", {
          username,
          password,
        })
        .then(() => {
          console.log("ok");
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleReset = () => {
    const a = confirm("do you realy want to reset form");
    if (a) {
      setUsername("");
      setPassword("");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-row border border-black border-[12px] border-solid "
      >
        <h1>LoginForm</h1>
        <div>
          <label>Username</label>
          <input
            placeholder="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>password</label>
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="w-[12px] h-[12px] bg-black text-white">
          Submit
        </button>
        <button className="w-[12px] h-[12px] bg-blue" onClick={handleReset}>
          Reset
        </button>
      </form>
    </>
  );
};

export default LoginForm;
