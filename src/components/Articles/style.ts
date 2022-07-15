import styled from 'styled-components'


export const Container = styled.div`
margin-top:4rem ;

display:grid ;
grid-template-columns:1fr 1fr ;
margin-left:10rem ;
color: #EFFFC8 ;
gap:4rem;

div.style-myblog{
   
    align-items:center ;
   position:relative ;
    top:6rem ;
    right:-12rem; 
    z-index:-1;
}
h1.title{
    padding-left:2.5rem ;
}
span.icon-file{
    font-size:12rem ;
}

h1{
    width:10rem ;
}
`


export const Postuser = styled.div`
    background-color:#E7DAE7 ;
    width:35rem ;
    border-radius:10px ;
    padding:10px ;
    margin-bottom:1rem ;
    color:#4D243D ;
    .like-style{
        position: relative;
        right:-28rem ;
    }
   
    
    div.post-grid{
       
        align-items:center ;
        text-align:center ;
        
    }
    img{
        width:20rem ;
        height:15rem ;
    }

    button{
        position: relative;
        top:-14rem ;
        left:-4.1rem ;
        font-size:1.2rem ;
        background:none ;
        outline:none ;
        border:none ;
        cursor: pointer;
    }
`
export const Divider = styled.div`
margin-bottom:1rem ;
width:32rem ;
border-bottom: 1px solid #F9F4F1 ;

`