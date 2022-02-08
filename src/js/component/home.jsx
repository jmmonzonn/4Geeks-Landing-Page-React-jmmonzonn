import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Cards from "./cards.jsx";

//create your first component

const Home = () => {
	return (
		<div className="container">
			<Navbar />
			<Jumbotron />
			<Cards />
		</div>
	);
};

export default Home;
