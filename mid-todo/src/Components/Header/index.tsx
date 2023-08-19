import { Col, Day, Head, LeftSide, Text } from "./style";

export default function Header(){

	const todaysDate = new Date()

	const day = todaysDate.getDate();
	const month = todaysDate.toLocaleDateString('en-US', {month: 'short'});
	const year = todaysDate.getFullYear();
	const dayOfWeek = todaysDate.toLocaleDateString('en-US', {weekday: 'long'});

	return(
		<Head>
			<LeftSide>
				<Day>{day}</Day>

				<Col>
					<Text>{month}</Text>
					<Text>{year}</Text>
				</Col>
			</LeftSide>

			<Text>{dayOfWeek}</Text>
		</Head>
	)
}
