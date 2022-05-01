import Card from "../mianPage/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faEraser } from "@fortawesome/free-solid-svg-icons";

function EditPost() {
	return (
		<div className="dashboard-boxes">
			<h1>Edit your posts</h1>
			<div className="row-edit">
				<Card />
				<FontAwesomeIcon className="icon" icon={faEdit} />
				<FontAwesomeIcon className="icon" icon={faEraser} />
			</div>
		</div>
	);
}

export default EditPost;
