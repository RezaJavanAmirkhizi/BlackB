import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Profile from "./Profile";
import CreatePost from "./CreatePost";
import EditPost from "./EditPost";
import {
	faUser,
	faCirclePlus,
	faCircleMinus,
	faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";

const Dashboard = () => {
	const [isSelected, setIsSelected] = useState("profile");

	let leftSlide;

	if(isSelected === "profile") {
		leftSlide = <Profile />
	}
	else if(isSelected === "createP"){
		leftSlide = <CreatePost />

	}
	else if(isSelected === "editP"){
		leftSlide = <EditPost />
	}

	return (
		<div className="dashboard">
			<div className="right-side">
				<div className="items">
					<div
						className={
							isSelected === "profile" ? "selected" : "item"
						}
                        onClick={() => setIsSelected('profile')}
					>
						<FontAwesomeIcon icon={faUser} />
						<li>Profile</li>
					</div>
					<div
						className={
							isSelected === "createP" ? "selected" : "item"
						}
                        onClick={() => setIsSelected('createP')}
					>
						<FontAwesomeIcon icon={faCirclePlus} />
						<li>Create Post</li>
					</div>
					<div
						className={
							isSelected === "editP" ? "selected" : "item"
						}
                        onClick={() => setIsSelected('editP')}
					>
						<FontAwesomeIcon icon={faCircleMinus} />
						<li>Edit Post</li>
					</div>
				</div>
				<Link to="/" className="link">
					<FontAwesomeIcon icon={faRightFromBracket} />
					Log out
				</Link>
			</div>
			<div className="left-side">
				{leftSlide}
			</div>
		</div>
	);
};

export default Dashboard;
