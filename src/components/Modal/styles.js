import styled from 'styled-components'

export const Wrapper = styled.div`
  flex: 1;
  margin: 2rem;
  display: flex;
  flex-direction: column;
  max-width: 80rem;
  height: 65rem;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 4px;
  gap: 2.4rem;
  padding: 5.4rem 6rem 9rem 6rem;

  @media (max-width: 630px) {
    padding: 4.8rem 2.6rem 9rem 2.6rem;
  }

  @media (max-width: 380px) {
    padding: 4.8rem 1.6rem 9rem 1.6rem;
  }
`
export const Header = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 7.9rem;
  align-items: baseline;
`

export const FilterWrapper = styled.nav`
  display: flex;
  width: 17.5rem;
  height: 3.2rem;
  align-items: center;
  gap: 0.8rem;
  @media (max-width: 800px) {
    width: 100%;
    justify-content: flex-end;
  }
`
export const ControllerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 800px) {
    gap: 1.6rem;
    min-height: 8rem;
  }
`

export const SearchWrapper = styled.div`
  width: 45rem;
  height: 4.2rem;

  @media (max-width: 800px) {
    width: 100%;
  }
`
