import styled from 'styled-components'


export const Container = styled.div`

background-color: var(--background-post);
width:30rem ;
height: 23rem ;
padding:10px ;
border-radius:10px ;

display:flex ;
flex-direction:column ;
position:fixed ;
right:0.5rem ;

.form-style{
    padding:10px ;
    border:none ;
    border-radius:10px ;
    box-shadow:10px ;
    outline:none ;
    margin-bottom:1rem ;
    background-color:#EDDED4 ;
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