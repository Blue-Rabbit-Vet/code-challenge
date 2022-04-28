import e from "cors";
import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { UploadImage } from "../component/UploadImage";
import { useHistory } from "react-router-dom";

export const Registerpet = () => {
	const [values, setValues] = React.useState({
		name: "",
		picture: ""
	});
	const history = useHistory();

	const handleChange = event => {
		setValues({
			...values,
			[event.target.name]: event.target.value
		});
	};
	const handleImageChange = picture => {
		setValues({
			...values,
			picture
		});
	};
	const handleFormSubmit = async () => {
		const response = await fetch(process.env.BACKEND_URL + "/api/introduction", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(values)
		});
		if (response.status === 200) {
			history.push("/");
		} else {
			history.push("/petregister");
		}
	};

	return (
		<div className="petregis w-100">
			<Card className="row2 d-flex justify-content-center text-center">
				<Card.Body className="bcard">
					<div className="form-group">
						<div className="form-group mx-auto">
							<label htmlFor="name">My name</label>
							<input
								type="text"
								className="form-control mx-auto"
								id="exampleFormControlInput1"
								placeholder="Possible Pet Name"
								name="possible_name"
								value={values.name}
								onChange={handleChange}
							/>
						</div>
					</div>
					
		
					
				
					<UploadImage value={values.image} onChange={handleImageChange} className="form-control mx-auto" />
					<p />
					<button className="btn btn-primary" type="submit" onClick={handleFormSubmit}>
						SUBMIT
					</button>
				</Card.Body>
			</Card>
		</div>
	);
};
