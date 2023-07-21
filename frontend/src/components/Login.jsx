import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";

export default function Login() {
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const [{ user }, dispatch] = useUserContext();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("You must provide an email and a password !");
    } else {
      // console.log("Email:", email); // Vérifier la valeur de email
      // console.log("Password:", password); // Vérifier la valeur de password
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/users/login`, {
        method: "POST",
        credentials: "include", // cookie
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })
        .then((res) => {
          // console.log("response :", res);
          return res.json();
        })
        .then((data) => {
          console.warn(data);
          dispatch({ type: "SET_USER", payload: data });
          navigate(`/gallery`); // !!!! CHANGEMENT ROUTE T'EN QUE ID NULL
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Error to login, please try again!!!");
        });
    }
  };

  return (
    <section className=" min-h-screen flex pt-14 text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-[#282e4d] shadow-[#1a1c27] shadow-xl px-14 py-5 rounded-xl text-white  m-auto flex flex-col items-center  w-2/6 "
      >
        <div>
          <label
            htmlFor="email"
            className="flex text-md m-4 w-full items-center"
          >
            Email :
            <input
              className="shadow-[#0e0f14] shadow-xl ml-3 py-1 px-3 text-black flex-1 bg-[#d9dae2] rounded-md"
              type="email"
              id="email"
              required
              value={email}
              onChange={handleChangeEmail}
            />
          </label>
        </div>
        <div className="flex">
          <label htmlFor="password" className="flex text-md m-4 items-center">
            Mot de passe :
            <input
              className=" shadow-[#0e0f14] shadow-xl ml-3 py-1 px-3 bg-[#d9dae2]  text-black flex-1 rounded-md"
              type={passwordIsVisible ? "text" : "password"}
              id="password"
              required
              value={password}
              onChange={handleChangePassword}
            />
          </label>
          <button
            className="relative"
            onClick={() => setPasswordIsVisible(!passwordIsVisible)}
            type="button"
          >
            {!passwordIsVisible ? (
              <svg
                className="absolute right-5 bottom-[22px] fill-black"
                src="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 11c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z" />
                <path d="M12 10c-1.084 0-2 .916-2 2s.916 2 2 2 2-.916 2-2-.916-2-2-2z" />
              </svg>
            ) : (
              <svg
                className="absolute right-5 bottom-[22px] fill-black"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M8.073 12.194 4.212 8.333c-1.52 1.657-2.096 3.317-2.106 3.351L2 12l.105.316C2.127 12.383 4.421 19 12.054 19c.929 0 1.775-.102 2.552-.273l-2.746-2.746a3.987 3.987 0 0 1-3.787-3.787zM12.054 5c-1.855 0-3.375.404-4.642.998L3.707 2.293 2.293 3.707l18 18 1.414-1.414-3.298-3.298c2.638-1.953 3.579-4.637 3.593-4.679l.105-.316-.105-.316C21.98 11.617 19.687 5 12.054 5zm1.906 7.546c.187-.677.028-1.439-.492-1.96s-1.283-.679-1.96-.492L10 8.586A3.955 3.955 0 0 1 12.054 8c2.206 0 4 1.794 4 4a3.94 3.94 0 0 1-.587 2.053l-1.507-1.507z" />
              </svg>
            )}
          </button>
        </div>
        <div className="mt-3">
          <button
            className="mx-4 bg-[#52597a] rounded-full shadow-[#0b0b10] shadow-xl px-6 py-2 hover:text-white hover:bg-[#3c4369]"
            type="submit"
          >
            Se connecter
          </button>
        </div>
      </form>
    </section>
  );
}