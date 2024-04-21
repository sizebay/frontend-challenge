import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 75px;

  width: 100%;
  height: fit-content;
  max-width: 680px;

  @media (max-width: ${({ theme }) => theme.breakpoints.Mobile}){
    flex-direction: column-reverse;
    align-items: flex-end;
    gap: 10px;
  }
`

export const FilterButtonsBox = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  & > li{
    list-style: none;
  }
`

export const InputBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-width: 450px;
  max-height: 40px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.backgroundColors.grayBackgroundItem};;
`

