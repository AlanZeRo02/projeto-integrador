import React, { useState } from "react";
import { MdAlternateEmail, MdLockOutline } from "react-icons/md";
import { HiEye, HiOutlineEyeOff } from "react-icons/hi";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const handleClick = (e) => {
    e.preventDefault()
    setShow(!show);
  }

  return (
    <div className="login">
      <div className="login-center">
        <img
          class="displayed"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Bras%C3%A3o_do_Acre.svg/800px-Bras%C3%A3o_do_Acre.svg.png"
          alt=""
          width="100"
          height="100"
          align="center"
        />
        <h1 align="center">Login</h1>

        <div className="login-ImputCPF">
          <MdAlternateEmail />
          <input
            type="email"
            placeholder="CPF"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="login-InputPassword">
          <MdLockOutline />
          <input
            placeholder="Senha"
            type={show ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="login-eye">
            {show ? (
              <HiEye 
                size={20}
                onClick={handleClick}
              />
            ) : (
              <HiOutlineEyeOff 
              size={20}
              onClick={handleClick}
              />
            )}

          </div>
        </div>

        <button type="subnit">Entrar</button>
      </div>
    </div>
  );
}
export default Login;
