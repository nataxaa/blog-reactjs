import styled from 'styled-components'


export const Container = styled.div`


`

export const Postuser = styled.div`
    background-color:var(--background-post);
    width:50rem ;
    border-radius:10px ;
    padding:10px ;
    margin-bottom:1rem ;
    div.post-grid{
        display:flex ;
        flex-direction:column ;
        align-items:center ;
        text-align:center ;
    }
    img{
        width:20rem ;
        height:15rem ;
    }

    button{
        position: relative;
        right: -24rem ;
        top: -21rem ;
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