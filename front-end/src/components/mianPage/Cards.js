import Post from "./Post";
import { connect } from "react-redux";
import posts from "../../data/actions/posts";
import { useEffect, useState } from "react";

const Cards = (props) => {
	const [allPosts, setAllPosts] = useState([]);

	useEffect(() => props.posts(), []);
	useEffect(() => {
		setAllPosts([...allPosts, props.post]);
        console.log(allPosts);
	}, [props.post]);

	return (
		<div className="cards">
			<Post />
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		post: state.post,
	};
};

export default connect(mapStateToProps, { posts })(Cards);
