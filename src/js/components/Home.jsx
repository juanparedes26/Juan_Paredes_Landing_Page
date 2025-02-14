import React from "react";
import Navbar from "./Navbar"; 
import Jumbotron from "./Jumbotron";
import Cards from "./Cards";
import Final from "./Final";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
				<Navbar/>
				<Jumbotron/>
				<Cards/>
				<Final/>
		</div>
		
	

	
	);
};

export default Home;