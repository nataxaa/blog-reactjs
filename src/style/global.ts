import {createGlobalStyle} from 'styled-components'
import styled from 'styled-components'



export const GlobalStyle = createGlobalStyle`

:root{
    --background-post: #F9F4F1; 
}

body{
    background-color:#0A0A0A ;
    font-family:sans-serif ;
    color:black ;    
}

`
export const Container = styled.div`
    display:grid ;
    grid-template-columns: 3fr 1fr ;
 
    

` 
