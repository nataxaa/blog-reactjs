import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { auth, db } from "../../service/firebase";
import { Container } from "./style";


export function ViewArticle(){
    const { id } = useParams();
  const [article, setArticle] = useState();
  const [user] = useAuthState(auth);

  useEffect(() => {
    const docRef = doc(db, "Articles", id);
    onSnapshot(docRef, (snapshot) => {
      setArticle({ ...snapshot.data(), id: snapshot.id });
    });
  }, []);

  console.log(article)
    return(
      <Container>
        <div className="post-descri">
          <img src={article?.imageUrl} alt="oi" />
          <h1>{article?.title}</h1>
          <span>Autor:{article?.createdBy}</span>
          <span>Data da Postagem: {article?.createdAt.toDate().toDateString()}</span>
          <span>Descrição: {article?.description}</span>
          <span>Quantidade de likes: {article?.likes.length}</span>
          </div>
      </Container>
    )
}