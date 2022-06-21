import { Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { selectServiceById } from "../features/coachservices/coachservicesSlice";
import ServiceDetail from "../features/coachservices/ServiceDetail";
import SubHeader from "../components/SubHeader";

const ServiceDetailPage = () => {
	const { serviceId } = useParams();
	const service = selectServiceById(serviceId);

	return (
		<Container>
			<SubHeader current={service.name} detail={true} />

			<Row>
				<ServiceDetail campsite={service} />
			</Row>
		</Container>
	);
};

export default ServiceDetailPage;
