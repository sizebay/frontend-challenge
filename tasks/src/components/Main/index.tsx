import React from 'react';

import Header from '../Header';

import { Container, Content } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Content>
        <Header />
      </Content>
    </Container>
  );
};

export default Main;
