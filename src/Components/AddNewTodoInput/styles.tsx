import styled from "styled-components";
import { theme } from "../../GlobaStyles/theme";

export const InputContainer = styled.form`
  width: 100%;
  display: flex;
  height: 48px;

    input{ 
        width: 100%;
        border: 1px solid ${theme.colors.gray200} ;
        border-radius: 4px 0 0 4px;
        padding-left: 20px;

        ::placeholder{
            color: ${theme.colors.gray500};
            opacity: 0.5;
        }
    }
    button{
        display: grid;
        place-content: center;
        place-items: center;
        border: none;
        width: 44px;
        background-color: ${theme.colors.cyan500};
        border-radius: 0 4px 4px 0;
        transition: opacity 0.2s ease-in-out;
    }
`;
