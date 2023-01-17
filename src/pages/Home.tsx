import Header from '../components/Header';
import ProgressBar from '../components/ProgressBar';

function Home() {
  return (
    <>
      <Header />
      <ProgressBar allTasks={100} completedTasks={50}/>
    </>
  );
}

export default Home;
