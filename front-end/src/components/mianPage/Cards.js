import Post from "./Post";
import { connect } from "react-redux";
import posts from "../../data/actions/posts";
import { useEffect, useState } from "react";

const Cards = (props) => {
	const [allPosts, setAllPosts] = useState(null);

	useEffect(() => props.posts(), []);
	useEffect(() => {
		setAllPosts(props.post[0]);
	}, [props.post]);

	return (
		<div className="cards">
			{allPosts == null ?   (
				<h1>Loading...</h1>
			):(
				allPosts.map((post, index) => {
					return <Post post={post} key={index} />;
				})
			)}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		post: state.post,
	};
};

export default connect(mapStateToProps, { posts })(Cards);
