import React from "react";

const Jumbotron = () => {
	return (
		<div className="m-3 bg-light rounded">
			<div className="m-3 pt-5 ps-1">
				<h1>A Warm Welcome!</h1>
			</div>
			<div className="ms-3 mt-3 ps-1">
				<p className="m-0">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Curabitur at lectus nulla. Duis viverra facilisis ex, quis
					fermentum diam dictum vel.
				</p>
			</div>
			<div className="pb-5 ps-1">
				<button type="button" class="btn btn-primary ms-3 mt-3 mb-5">
					Hola que pasa!
				</button>
			</div>
		</div>
	);
};

export default Jumbotron;
