import { Col, Row } from "reactstrap";
import DisplayCard from "./DisplayCard";
import { selectFeaturedService } from "../campsites/campsitesSlice";

const DisplayList = () => {
	const items = [selectFeaturedService()];

	return (
		<Row>
			{items.map((item, idx) => {
				return (
					<Col md className="m-1" key={idx}>
						<DisplayCard item={item} />
					</Col>
				);
			})}
		</Row>
	);
};

export default DisplayList;
