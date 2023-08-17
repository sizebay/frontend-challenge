import { Col, Day, Head, LeftSide } from "./style";

export default function Header(){

	const todaysDate = new Date()

	const day = todaysDate.getDate()
	const month = todaysDate.toLocaleDateString('en-US', {month: 'short'});
	const year = todaysDate.getFullYear();
	const dayOfWeek = todaysDate.toLocaleDateString('en-US', {weekday: 'long'});

	console.log(day)

	return(
		<Head>
			<LeftSide>
				<Day>{day}</Day>

				<Col>
					<span>{month}</span>
					<span>{year}</span>
				</Col>
			</LeftSide>

			<div>{dayOfWeek}</div>
		</Head>
	)
}
