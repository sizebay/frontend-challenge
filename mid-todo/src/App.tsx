import { Container } from './styles'
import TODO from './Pages/TODO'
import { TodoProvider } from './Provider/Todo'

function App() {
  return (
    <TodoProvider>
      <Container>
        <TODO/>
      </Container>
    </TodoProvider>
  )
}

export default App
