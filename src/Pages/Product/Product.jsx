import Pricing from "../../components/Pricing";
import Monitor from "../../components/Monitor";


const Product = () => {
	return (
		<div className="py-12 md:py-24">
					<div className="text-center items-center py-12 md:py-24">
		<h2 
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Featurd Product
        </h2>
		<p>
          We belive in Quality not Quantity
        </p>
		</div>
			<Monitor />
			<Pricing />
		
		</div>
	);
};

export default Product;