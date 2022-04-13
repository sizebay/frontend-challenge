import styled from 'styled-components'

export const InputContainer = styled.div`
width: 450px;
@media (max-width: 720px) {
    width: 100%;
}
`

export const Input = styled.input`
box-sizing: border-box;
background: #FFFFFF 0% 0% no-repeat padding-box;
font-size: 16px;
color: #848484;
border: 1px solid #DBDBDB;
border-radius: 4px;
opacity: 1;
height: 40px;
width: 100%;
padding-left: 16px;
padding-right: 40px;

&:focus {
    outline: none;
}
`

export const IconWrapper = styled.div`
color: #848484;
display: inline-block;
margin-left: -30px;
cursor: pointer;
height: 24px;
width: 23px;
`