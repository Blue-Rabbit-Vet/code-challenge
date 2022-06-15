import React, { useState, useEffect } from "react";
import axios from "axios";

export const Profile = () => {
	const [name, setName] = useState("");
	const [tempName, setTempName] = useState("");
	const [avatar, setAvatar] = useState<File>();
	useEffect(() => {
		async function fetchProfile() {
			const response = await axios.request({
				method: "get",
				baseURL: "http://localhost:8000/api/profile",
			});
			setName(response.data.profile.name);
		}
		fetchProfile();
	}, []);
	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTempName(e.target.value);
	};
	const onChangeAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			setAvatar(e.target.files[0]);
		}
	};
	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		async function postProfile() {
			const formData = new FormData();
			formData.append("name", tempName);
			if (avatar) {
				formData.append("avatar", avatar, avatar.name);
			}
			const response = await axios.request({
				method: "post",
				baseURL: "http://localhost:8000/api/profile",
				data: formData,
			});
			alert("Profile is submitted correctly!!!");
			setName(response.data.profile.name);
		}
		postProfile();
	};
	return (
		<div>
			{name && (
				<form onSubmit={onSubmit}>
					<p>
						My name is <b>{name}</b>
					</p>
					<input
						name="name"
						placeholder="name"
						value={tempName}
						onChange={onChange}
					/>
					<br />
					<br />
					<input type="file" onChange={onChangeAvatar} accept="image/*" />
					<br />
					<br />
					<button type="submit">Upload Profile</button>
				</form>
			)}
			{!name && <div>Server is not connected. Please confirm again.</div>}
		</div>
	);
};
