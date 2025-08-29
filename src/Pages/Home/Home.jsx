import Banner from "../../components/Banner";
import Partner from "../../components/Partner";
import Purpose from "../../components/Purpose";
import Business from "../../components/Business";
import Schedule from "../../components/Schedule";
import Monitor from "../../components/Monitor";
import Pricing from "../../components/Pricing";
import Feature from "../../components/Feature";
import Testimonial from "../../components/Testimonial";
import Newsletter from "../../components/NewsLatter";

const Home = () => {
	return (
		<div>
			<Banner />
			<Partner />
			<Purpose />
			<Business />
			<Schedule />
			<Monitor />
			<Pricing />
			<Feature />
			<Testimonial />
			<Newsletter />
		</div>
	);
};

export default Home;