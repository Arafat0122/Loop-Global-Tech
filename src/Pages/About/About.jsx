import Partner from "../../components/Partner";
import Purpose from "../../components/Purpose";
import Business from "../../components/Business";

import Newsletter from "../../components/NewsLatter";

const About = () => {
	return (
		<div className="py-12 md:py-24">

		<div className="text-center items-center py-12 md:py-24">
		<h2 
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          About Us
        </h2>
		<p>
          It the best place to start trading
        </p>
		</div>
	
			<Partner />
			<Purpose />
			<Business />
			 
		</div>
	);
};

export default About;