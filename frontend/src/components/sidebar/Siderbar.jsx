import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import Searchinput from "./Searchinput";

const Sidebar = () => {
	return (
		<div className='border-r border-slate-500 p-4 flex flex-col bg-gray-800'>
            <Searchinput></Searchinput>
			<div className='divider px-3'></div>
            <Conversations></Conversations>
            <LogoutButton></LogoutButton>
		</div>
	);
};

export default Sidebar;