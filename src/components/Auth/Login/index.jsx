import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../../service/firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Container } from "./style";



export function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate()

    const handleSignin = async () => {
       
      try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/");
      } catch (error) {
        toast(error.code, { type: "error" });
        alert("Usuario não cadastrado ou email e senha incorretos")
      }
            
          }
    

    return(
        <Container>

      
     <div className="login-style">
        <label>Email</label>
        <input
          type="email"
          className="form"
          placeholder="Enter your email"
          onChange={(e) => {setEmail(e.target.value) }}
          />
      
        <label>Password</label>
        <input
          type="password"
          className="form"
          placeholder="Password"
          onChange={(e) => {setPassword(e.target.value)}}
            />
    
      <button className="btn" onClick={handleSignin}>
        login
      </button>
            </div>
       
          
            </Container>
    )
}