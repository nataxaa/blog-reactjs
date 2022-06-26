import { Timestamp, collection, addDoc, doc, deleteDoc } from "firebase/firestore";
import { useState } from "react";
import { Container } from "./style";
import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage";
import {  storage, db, auth} from "../../service/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";





export function AddArticles(){

    const [progress, setProgress] = useState(0);
    const [user] = useAuthState(auth);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        image: "",
        createdAt: Timestamp.now().toDate(),
    })

    

    function handlechange(e:any){
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    function handleImagechange(e:any){
        setFormData({...formData, image: e.target.files[0]})
    }

    const handlePublish = () => {
        if (!formData.title || !formData.description || !formData.image) {
          alert("Please fill all the fields");
          return;
        }
    
        const storageRef = ref(
          storage,
          `/images/${Date.now()}${formData.image}`
        );
    
        const uploadImage = uploadBytesResumable(storageRef, formData.image as any);
    
        uploadImage.on(
          "state_changed",
          (snapshot) => {
            const progressPercent = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(progressPercent);
          },
          (err) => {
            console.log(err);
          },
          () => {
            setFormData({
              title: "",
              description: "",
              image: "",
              createdAt: Timestamp.now().toDate(),
            });
    
            getDownloadURL(uploadImage.snapshot.ref).then((url) => {
              const articleRef = collection(db, "Articles");
              addDoc(articleRef, {
                title: formData.title,
                description: formData.description,
                imageUrl: url,
                createdAt: Timestamp.now().toDate(),
                createdBy:user?.displayName,
                userId:user?.uid,
                likes:[],
                comments:[]
              })
                .then(() => {
                  toast("Article added successfully", { type: "success" });
                  setProgress(0);
                })
                .catch((err) => {
                  toast("Error adding article", { type: "error" });
                });
            });
          }
        );
      };

    return(
    <Container>
        <h1>Criação da Postagem</h1>

      <div className="dados-style">

        <label htmlFor="">Titulo</label>
        <input 
        type="text"
        name="title"
        className="form-style"
        value={formData.title}
        onChange={(e)=> handlechange(e)}
         />

         <label htmlFor="">Descrição</label>
         <textarea
          name="description"
          className="form-style"
          value={formData.description}
          onChange={(e)=> handlechange(e)}
          />

         <label htmlFor="">Image</label>
         <input
          type="file"
          name="image"
          accept="image/*"
          className="form-style"
          onChange={(e)=> handleImagechange(e)}
          />
          {progress === 0 ? null : (
            <div className="progress">
              <div
                style={{ width: `${progress}%` }}
              >
                {`uploading image ${progress}%`}
              </div>
              
            </div>
          )}
          <button onClick={handlePublish}>Publicar</button>
        
          </div>

    </Container>
    )
}