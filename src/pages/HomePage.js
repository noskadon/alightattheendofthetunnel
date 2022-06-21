import { Container, Row } from "reactstrap";
import SubHeader from "../components/SubHeader";

const HomePage = () => {
	return (
		<Container>
			<SubHeader current="Home" />
			<Row>DisplayList or something similar</Row>
		</Container>
	);
};

export default HomePage;
