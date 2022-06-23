import { orderBy, collection, query, onSnapshot, doc, deleteDoc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { db, storage } from "../../service/firebase";
import { Container, Divider, Postuser } from "./style";
import {FiTrash2} from 'react-icons/fi'



export function Articles(){
    const [articles, setArticles] = useState([])

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
            {articles.length == 0 ? (
                <span>Sem postagens...</span>
            ):(
                articles.map(({id, title, description, imageUrl, createdAt})=>(
                    <div className="post" key={id}>
                        <Postuser>
                            <div className="post-grid">
                                <img src={imageUrl} alt="oii" />
                                <span><h1>{title}</h1></span>
                                <span>{description}</span>
                                <button><FiTrash2 onClick={()=>handleDeletePost({id, imageUrl})}/></button>
                            </div>
                        </Postuser>
                            <Divider/>

                    </div>
                ))
            )

            }
        </Container>
    )
}