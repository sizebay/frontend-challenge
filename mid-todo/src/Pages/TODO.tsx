import Filter from "../Components/Filter";
import Header from "../Components/Header";
import List from "../Components/List";
import ProgressBar from "../Components/ProgressBar";
import { TodoContainer } from "./styled";

export default function TODO() {
	return(
		<TodoContainer>
			<Header/>
			<ProgressBar />
			<Filter />
			<List />
		</TodoContainer>
	)
}