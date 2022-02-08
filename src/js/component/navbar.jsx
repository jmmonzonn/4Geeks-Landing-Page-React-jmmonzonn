import React from "react";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<a className="navbar-brand ms-4" href="#">
					Start Bootstrap
				</a>
				<ul class="nav justify-content-end me-4">
					<li class="nav-item">
						<a
							class="nav-link active link-light"
							aria-current="page"
							href="#">
							Home
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link link-secondary" href="#">
							About
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link link-secondary" href="#">
							Services
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link link-secondary">Contact</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
