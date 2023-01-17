import { actualDate } from '../../shared/helpers/actualDate';
import { Container, DateContainer } from './style';

function Header() {
  const {day,month,weekday,year} = actualDate();

  return (
    <Container>
      <DateContainer>
        <span>{day}</span>
        <aside>
          <span>{month}</span>
          <span>{year}</span>
        </aside>
      </DateContainer>
      <span className='weekday'>{weekday}</span>
    </Container>
  );
}

export default Header;