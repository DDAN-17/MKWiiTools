import TabType from "./TabType.ts";
import {useState} from "react";
import Workspace from "./Workspaces/Workspace.tsx";
import {render} from "./main.tsx"
import "./TabBar.css"

import close from "./assets/close.svg"
//import add from "./assets/add.svg"
import archive from "./assets/archive.svg"
import image from "./assets/image.svg"
import err from "./assets/err.svg"

import Tab from "./Tab.ts";

function TabBar() {
	const defTab:Tab = {type: TabType.Empty, file: "nofile", name: ""}
	const [tabs, setTabs] = useState([defTab, {type: TabType.Archive, file: "testFile.szs", name: "Example Tab"}])
	const [tabNum, setTabNum] = useState(1);

	function getTabImg(type: TabType):string {
		switch (type) {
			case TabType.Empty:
				return err
			case TabType.Archive:
				return archive
			case TabType.Image:
				return image
			default:
				return err
		}
	}

	function getTabTypeName(type: TabType):string {
		switch (type) {
			case TabType.Empty:
				return "Error"
			case TabType.Archive:
				return "Archive"
			case TabType.Image:
				return "Image"
			default:
				return "Error"
		}
	}

	let tabsRender = []

	for (let i = 0; i < tabs.length; i++) {
		let tab = tabs[i]

		tabsRender.push((
			<>
				{tab.type != TabType.Empty && <li key={i}>
        	    <span>
        	    	<a onClick={function () {
						setTabNum(i)
					}}>
						<img className="ico" src={getTabImg(tab.type)} alt={getTabTypeName(tab.type)}/>
						<div>{tab.name}</div>
						<img onClick={() => {
							console.log("Deleting tab {}", i)
							let newTabs = tabs
							newTabs.splice(i, 1)
							setTabs(newTabs)
							if (tabNum == i) {
								setTabNum(i - 1)
							}
							render()
						}} className="close" src={close} alt="close"/>
					</a>
        	    </span>
			</li>}
		</>
		))
	}

	return (
		<div className="TabBar">
			<ul>
				{tabsRender}
			</ul>
			{tabs[tabNum] ? <Workspace tab={tabs[tabNum]}/> : <Workspace tab={defTab}/>}
		</div>
	);
}

export default TabBar;