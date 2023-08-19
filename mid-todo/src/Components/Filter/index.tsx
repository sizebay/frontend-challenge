import { Container, FilterBtn, FilterInput, Form } from "./style";
import { AiOutlineSearch } from "react-icons/ai";

export default function Filter(){
  return(
    <Container>
      <div>
        <FilterBtn>Done</FilterBtn>
        <FilterBtn>Pending</FilterBtn>
      </div>
      <Form>
        <AiOutlineSearch style={{
          color: '#333',
          cursor: 'pointer',
          height: 20,
          position: 'absolute',
          right: 10,
          top: '50%',
          transform: 'translateY(-50%)',
          width: 20
        }}/>
        <FilterInput name="search" placeholder="Search"/>
      </Form>
    </Container>
  )
}
