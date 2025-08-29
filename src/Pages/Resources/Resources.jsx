import Schedule from "../../components/Schedule";
import Purpose from "../../components/Purpose";

const Resources = () => {
	return (
		<div className="py-12 md:py-24">
		<div className="text-center items-center py-12 md:py-24">
		<h2 
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Find Out the Best Resources
        </h2>
		<p>
          It the best place to start trading
        </p>
		</div>

			<Purpose />
			<Schedule />

		</div>
	);
};

export default Resources;