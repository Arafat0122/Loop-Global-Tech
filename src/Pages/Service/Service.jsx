import Feature from "../../components/Feature";
import Newsletter from "../../components/NewsLatter";

const Service = () => {
	return (
		<div className="py-12 md:py-24">
		<div className="text-center items-center py-12 md:py-24">
		<h2 
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Services
        </h2>
		<p>
          Customer Satisfaction is our first priority
        </p>
		</div>
			<Feature />
			<Newsletter />
		</div>
	);
};

export default Service;