import styled from 'styled-components'

export const MenuContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:space-around;


min-height:10vh;

.icon{
    display:flex;
    flex-direction:column;
    align-items:center;
    
    h3{
        padding:0;
        margin:0;
        font-size:15px;
        color:red;
    }
}


svg{
    color:red;
    font-size:30px;
    padding:10px;

}

`