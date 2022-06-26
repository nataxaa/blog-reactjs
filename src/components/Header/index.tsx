import { Container } from "./style";
import {Link} from "react-router-dom"
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../service/firebase";
import { signOut } from "firebase/auth";

export function Header(){
    const [user] = useAuthState(auth)
    console.log(user) 
    return(
    <Container>
        <div className="header-style">
        <h1>Meu blog</h1>
        <Link className="link-home" to="/">Home</Link>
        <Link className="link-home" to="/Register">Registrar</Link>
        <Link className="link-home" to="/Login">Login</Link>
        {user &&(
                <div>
                    <span>Usuario {user.displayName }</span>
                    <button onClick={()=>{signOut(auth)}}>Logout</button>
                </div>
        )}
        </div>
        
    </Container>

    )
}