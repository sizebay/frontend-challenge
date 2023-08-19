import Filter from "../Components/Filter";
import Header from "../Components/Header";
import List from "../Components/List";
import ProgressBar from "../Components/ProgressBar";

export default function TODO() {
	return(
		<>
			<Header/>
			<ProgressBar />
			<Filter />
			<List />
		</>
	)
}