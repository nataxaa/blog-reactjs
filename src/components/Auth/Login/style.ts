import styled from "styled-components";


export const Container = styled.div`

color:white ;
display:flex ;
flex-direction:column ;



.login-style{
    margin-top:5rem ;
    display:flex ;
    flex-direction:column ;
    background-color: var(--background-post) ;
    padding:10px ;
    border-radius:10px ;
    width:13rem ;
    color:black ;
    height:12rem ;
}
.form{
    font-size:1rem ;
    border:1px solid black;
    padding:9px ;
    border-radius:10px ;
    margin-bottom:1rem;
}
.btn{
    background-color:green ;
    padding:10px ;
    font-size:1rem ;
    border-radius:10px ;
    border:none ;
    outline:none ;
    :hover{
        opacity:0.8 ;
    }
}

`