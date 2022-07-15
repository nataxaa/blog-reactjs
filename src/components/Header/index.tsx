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
        <header>
        <h1>My blog</h1>
        <div className="link-style">
        <Link className="link-home" to="/">Home</Link>
        <Link className="link-home" to="/Register">Registrar</Link>
        <Link className="link-home" to="/Login">Login</Link>
        </div>
        {user &&(
                <div>
                    <span>Usuario {user.displayName }</span>
                    <button onClick={()=>{signOut(auth)}}>Logout</button>
                </div>
        )}
        </header>
        
    </Container>

    )
}