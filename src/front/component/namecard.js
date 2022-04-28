import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

export const Namecard = props => {
	return (
		<div className="row">
			<div className="row">
				<div className="card width: 3rem;">
					<img
						className="card-img-top"
						src="https://i.ytimg.com/vi/ACtj9PmWmoM/mqdefault.jpg"
						alt="Card image cap"
					/>
					<div className="card-body">
						<a href="#" className="card-text">
							About Me!
						</a>
					</div>
					<ul className="post-details list-group list-group-flush">
						<li className="list-group-item">
							Name:
							{props.name}
						</li>
					</ul>

					<div className="card-body">
						<button className="btn btn-primary" type="submit" onClick="">
							This is me
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

Namecard.propTypes = {
	name: PropTypes.string,
};