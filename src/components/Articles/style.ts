import styled from 'styled-components'


export const Container = styled.div`
margin-top:4rem ;
display:grid ;
grid-template-columns:1fr 1fr ;
gap:1rem;

margin-left:10rem ;


`

export const Postuser = styled.div`
    background-color:var(--background-post);
    width:30rem ;
    border-radius:10px ;
    padding:10px ;
    
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
width:51rem ;
border-bottom: 1px solid #F9F4F1 ;

`