import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../../service/firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Container } from "./style";


export function Register(){
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  let navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      updateProfile(auth.currentUser, { displayName: name });
      navigate("/");
    } catch (error) {
      toast(error.code, { type: "error" });
    }
  };

    return(
    <Container>

        
             <h1>Register</h1>
             <div className="register-style">

      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your name"
          onChange={(e) => {
              setName(e.target.value);
            }}
            />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter your email"
          onChange={(e) => {
              setEmail(e.target.value);
            }}
            />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          />
      </div>
      <br />
      <button className="btn" onClick={handleSignup}>
        Registrar
      </button>
          </div>
        
    </Container>
    )
}