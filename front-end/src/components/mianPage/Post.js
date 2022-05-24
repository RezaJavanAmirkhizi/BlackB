import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";

const Post = (props) => {
	return (
		<div className="card">
			<div className="picture">
				<img
					src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
					alt=""
				/>
			</div>
			<div className="description">
				<h1>Eiffel Tower</h1>
				<p>dejfvdsfbksbfjdafvufbsl</p>
				<div className="tags">
					<p>#</p>
				</div>
				<div className="plus">
					<FontAwesomeIcon icon={faComments}></FontAwesomeIcon>
				</div>
			</div>
		</div>
	);
};

export default Post;
