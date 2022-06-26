import styled from 'styled-components'


export const Container = styled.div`

background-color: var(--background-post);
width:30rem ;
height: 23rem ;
padding:10px ;
border-radius:10px ;
display:flex ;
flex-direction:column ;
margin-top:2rem ;



label{
    text-align:left ;
    margin-left:0;
}

div.dados-style{

    display:grid ;
   
    margin-top:1rem ;
    
}

.form-style{
    padding:10px ;
    border:none ;
    border-radius:10px ;
    box-shadow:10px ;
    outline:none ;
    margin-bottom:1rem ;
    background-color:#EDDED4 ;
    width:25rem ;
    
   
}
button{
    padding:10px;
   
    border:none ;
    border-radius:10px ;
    box-shadow:10px ;
    outline:none ;
    cursor: pointer;
   
}
`