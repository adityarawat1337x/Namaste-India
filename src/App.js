import React from "react";
import {
	BrowserRouter as Router,
	NavLink,
	Switch,
	Route,
	useLocation,
} from "react-router-dom";
import Home from "./components/Home";
import East from "./components/East";
import South from "./components/South";
import West from "./components/West";
import North from "./components/North";

import { AnimatePresence } from "framer-motion";

function App() {
	const location = useLocation();

	return (
		<div style={{ position: "relative" }}>
		
			<AnimatePresence onExitComplete>
				<Switch location={location} key={location.pathname}>
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/east" exact>
						<East />
					</Route>
					<Route path="/west" exact>
						<West />
					</Route>
					<Route path="/north" exact>
						<North />
					</Route>
					<Route path="/south" exact>
						<South />
					</Route>
				</Switch>
			</AnimatePresence>
		</div>
	);
}

export default App;
