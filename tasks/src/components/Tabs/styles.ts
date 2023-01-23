import * as Tabs from '@radix-ui/react-tabs';
import styled from 'styled-components';

export const TabsContainer = styled(Tabs.Root)`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px){
    position: absolute;
    width: fit-content;
    bottom: 0;
    right: 0;
  }
`

export const TabsOptionsContainer = styled(Tabs.List)`
  display: flex;
  gap: 1rem;
`

export const TabOption = styled(Tabs.Trigger)`
  width: fit-content;
  padding: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  color: ${(props) => props.theme['gray-100']};
  border: 1px solid ${(props) => props.theme.border};
  user-select: none;
  background-color:${(props) => props.theme.white};
  border-radius: 17px;

  &:hover{
    color:${(props) => props.theme['green-500']};
  }

  &[data-state='active'] {
  color:${(props) => props.theme['green-100']};
  border: 1px solid ${(props) => props.theme['green-100']};
  svg{
    display: block;
  }
}
svg{
  display: none;
}
`

export const TabContent = styled(Tabs.Content)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`