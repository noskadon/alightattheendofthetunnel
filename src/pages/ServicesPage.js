import { Container, Row } from "reactstrap";
import ServicesList from "../features/coachservices/ServicesList";
import SubHeader from "../components/SubHeader";

const ServicesPage = () => {
	return (
		<Container>
			<SubHeader current="Services" />
			<Row>
				<ServicesList />
			</Row>
		</Container>
	);
};

export default ServicesPage;
