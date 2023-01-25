import {
  CreateTask,
  DateTask,
  Filters,
  ListTask,
  ProgressBar,
  Search,
} from "../../components";

import { Actions, Container, Main, Section } from "./style";

export default function Home() {
  return (
    <Container>
      <Main>
        <DateTask />
        <ProgressBar />
        <Actions>
          <Filters />
          <Search />
        </Actions>
        <Section>
          <CreateTask />
          <ListTask />
        </Section>
      </Main>
    </Container>
  );
}
