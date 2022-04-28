import React from "react";
import axios from "axios";
import PropTypes from "prop-types";

export const UploadImage = props => {
	const [file, setFile] = React.useState();
	const [progress, setProgress] = React.useState([0, 0]);

	const handleProgress = event => {
		setProgress([event.loaded, event.total]);
	};

	const handleUpload = async () => {
		try {
			var formData = new FormData();
			formData.append("image", file);

			const response = await axios.post(process.env.BACKEND_URL + "/api/upload", formData, {
				onUploadProgress: handleProgress,
				headers: {
					"Content-Type": "multipart/form-data"
				}
			});
			console.log(response);
			props.onChange(response.data);
		} catch (ex) {}
	};

	return (
		<div>
			{props.value && (
				<>
					<img src={process.env.BACKEND_URL + "/" + props.value} style={{ width: "100px" }} />
				</>
			)}
			{!props.value && (
				<>
					<input
						type="file"
						onChange={event => {
							setFile(event.target.files[0]);
						}}
					/>
					<div style={{ width: "100%", height: 10, backgroundColor: "#f0f0f0" }}>
						{progress[1] > 0 && (
							<div
								style={{
									width: `${Math.floor((progress[0] / progress[1]) * 100)}%`,
									height: 10,
									backgroundColor: "green"
								}}
							/>
						)}
					</div>
					<button className="btn btn-primary" onClick={handleUpload}>
						Upload
					</button>
				</>
			)}
		</div>
	);
};
UploadImage.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func
};