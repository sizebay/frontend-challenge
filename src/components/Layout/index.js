import { ItemProvider } from '../../contexts/ItemProvider';
import { SearchProvider } from '../../contexts/SearchProvider';

import Header from '../Header';
import Navigation from '../Navigation';
import Routes from '../../Routes';

import { MainContainer } from './styles';

export default function Layout() {
  return (
    <MainContainer>
      <ItemProvider>
        <SearchProvider>
          <Header />
          <Navigation />
          <Routes />
        </SearchProvider>
      </ItemProvider>
    </MainContainer>
  );
}
