import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
	return (
		<div className="header">
			<div className="right-items">
				<li className="item">Home</li>
				<li className="item">
					Categories
					<ul className="sub-items">
						<li className="sub-item">Programmer</li>
						<li className="sub-item">Developer</li>
					</ul>
				</li>
				<li className="item">About</li>
				<li className="item">Contact</li>
			</div>
			<div className="left-items">
				<FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
				<FontAwesomeIcon className="icon" icon={faUser} />
			</div>
		</div>
	);
};

export default Header;
