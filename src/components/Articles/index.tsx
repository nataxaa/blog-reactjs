import { orderBy, collection, query, onSnapshot, doc, deleteDoc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { auth, db, storage } from "../../service/firebase";
import { Container, Divider, Postuser } from "./style";
import {FiTrash2} from 'react-icons/fi'
import { useAuthState } from "react-firebase-hooks/auth";
import { LikeArticle } from "../likeArticles";
import { Link } from "react-router-dom";
import {FiFileText} from 'react-icons/fi'



export function Articles(){
    const [articles, setArticles] = useState([])
    const [user] = useAuthState(auth)

    async function handleDeletePost({id, imageUrl}: any){
        if(window.confirm("Tem certeza que voce quer excluir essa postagem ?")){
          try{
            await deleteDoc(doc(db, "Articles", id))
            toast("Postagem deletada com sucesso.", {type:"success"})
            const storageRef = ref(storage, imageUrl)
            await deleteObject(storageRef)
          }catch(error){
            toast("Erro ao deletar o arquivo", {type:"error"})
            console.log(error)
          }
        }
      }

    useEffect(()=>{
        const articleRef = collection(db, "Articles")
        const q = query(articleRef, orderBy("createdAt", "desc"))
        onSnapshot(q, (snapshot) => {
            const articles = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }))
            setArticles(articles as any)    
            console.log(articles)
        })
        
    }, [])

    return(
        <Container>
            <div>

            {articles.length == 0 ? (
                <span>Sem postagens...</span>
                ):(
                    articles.map(({id, title, description, imageUrl, createdAt, likes})=>(
                        <div className="post" key={id}>
                        <Postuser>
                            <div className="post-grid">
                                {user && (
                                    <button><FiTrash2 onClick={()=>handleDeletePost({id, imageUrl})}/></button>
                                    )}
                                <span className="like-style"><LikeArticle id={id} likes={likes}/></span>
                                <Link to={`/ViewArticle/${id}`}>
                                <img src={imageUrl} alt="oii" />
                                </Link>
                                <span><h1>{title}</h1></span>
                                <span>{description}</span>
                            </div>
                        </Postuser>
                            <Divider/>
                    </div>
                ))
            )}
                </div>
            
            <div className="style-myblog">
                <span className="icon-file"><FiFileText/></span>
                <h1 className="title">My Blog</h1>
            </div>

        </Container>
    )
}