import { useState, useEffect } from "react";
import axios from "../../api/axios";

function CreatePost() {
	const [tags, setTags] = useState([]);

	const [post, setPost] = useState({
		title: "",
		body: "",
		file: "",
		// tags: {tags: tags,},
	});

	// useEffect(() => {
	// 	setPost({ ...post, tags: {tags} });
	// }, [tags]);

	const createPost = () => {
		console.log(post);
		console.log(post.tags);

		const token = JSON.parse(localStorage.getItem("access_token"));

		const config = {
			headers: {
				'Accept': "application/json", 
				'Content-Type': "multipart/form-data",
				Authorization: `Bearer ${token}`,
			},
		};

		let postData = new FormData();
		postData.append('title', post.title);
		postData.append('body', post.body);
		postData.append('file', post.file);
		// postData.append('tags', post.tags);


		axios
			.post("/blog/create", postData, config)
			.then((response) => {
				console.log(response.data);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const tagHandler = (e) => {
		if (e.key === "Enter") {
			setTags([...tags, { title: e.target.value }]);
			e.target.value = "";
		}
	};

	return (
		<div className="dashboard-boxes">
			<h1>Create a new post</h1>
			<div className="row">
				<label htmlFor="title">Title:</label>
				<input
					id="title"
					type="text"
					onChange={(e) =>
						setPost({ ...post, title: e.target.value })
					}
				/>
			</div>
			<div className="row">
				<label htmlFor="body">Body:</label>
				<textarea
					id="body"
					type="text"
					onChange={(e) => setPost({ ...post, body: e.target.value })}
				/>
			</div>
			<div className="row">
				<label htmlFor="picture">Picture:</label>
				<input
					id="picture"
					type="file"
					onChange={(e) => {
						setPost({ ...post, file: e.target.files[0] });
					}}
				/>
			</div>
			<div className="row">
				<label htmlFor="tags">tags:</label>
				<div className="tag">
					<input
						id="tags"
						type="search"
						onKeyPress={(e) => tagHandler(e)}
					/>
					<div className="tag-title">
						{tags.map((item, i) => {
							return <span key={i}>{item.title}</span>;
						})}
					</div>
				</div>
			</div>

			<button className="change" onClick={() => createPost()}>
				Create
			</button>
		</div>
	);
}

export default CreatePost;
