function CreatePost() {
	return (
		<div className="dashboard-boxes">
			<h1>Create a new post</h1>
			<div className="row">
				<label for="title">Title:</label>
				<input id="title" type="text" />
			</div>
			<div className="row">
				<label for="body">Body:</label>
				<textarea id="body" type="text" />
			</div>
			<div className="row">
				<label for="picture">Picture:</label>
				<input id="picture" type="file" />
			</div>
			<div className="row">
				<label for="tags">tags:</label>
				<input id="tags" type="search" />
			</div>
			<button className="change">Create</button>
		</div>
	);
}

export default CreatePost;
