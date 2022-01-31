import SearchBox from '../SearchBox';
import Filters from '../Filters';

import { NavigationContainer } from './styles';

export default function Navigation() {
  return (
    <NavigationContainer>
      <Filters />
      <SearchBox />
    </NavigationContainer>
  );
}
