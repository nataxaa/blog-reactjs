import { FiHeart } from "react-icons/fi";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../service/firebase";



export function LikeArticle({id, likes}){
    const [user] = useAuthState(auth);

  const likesRef = doc(db, "Articles", id);

  const handleLike = () => {
    if (likes?.includes(user.uid)) {
      updateDoc(likesRef, {
        likes: arrayRemove(user.uid),
      }).then(() => {
          console.log("unliked");
      }).catch((e) => {
            console.log(e);
      });
    }
    else{
        updateDoc(likesRef,{
            likes:arrayUnion(user.uid)
        }).then(() => {
            console.log("liked");
            console.log(likes)
        }).catch((e) => {
              console.log(e);
        });
        console.log(likes)
    }
    
    
  };
    return(
     
        <button
         onClick={handleLike}
         style={{
          cursor: "pointer",
          color: likes?.includes(user?.uid) ? "red" : null,
         }}
         >
          <FiHeart/>
          </button>
      
    )
}