import {createGlobalStyle} from 'styled-components'
import styled from 'styled-components'




export const GlobalStyle = createGlobalStyle`

*{
    margin:0 auto;

}

:root{
    --background-post: #F9F4F1; 
}

body{
    background-color:#0A0A0A ;
    font-family:sans-serif ;
    color:black ;    
}

.bb{
    top:4rem ;
    position:relative ;
    text-decoration:none ;
    color:white ;
    background-color:red ;
    padding:10px ;
    border-radius:10px ;
}


`
export const Container = styled.div`
    display:grid ;
    grid-template-columns: 1fr 1fr ;
    
 
`

