import newFile from '../../assets/newFile.svg'
import './ArchiveTitleBar.css'

function newFileCallback() {
	console.log("New File Selected")
}

function listItem2() {
	console.log("listItem2")
}

function listItem3() {
	console.log("listItem3")
}

function listItem4() {
	console.log("listItem4")
}

function ArchiveTitleBar() {
	return (
		<div className="ArchiveTitleBar">
			<ul>
				<li><a onClick={newFileCallback}><img src={newFile} alt='New File'></img></a></li>
				<li><a onClick={listItem2}></a></li>
				<li><a onClick={listItem3}>ListItem3</a></li>
				<li className="last"><a onClick={listItem4}>ListItem4</a></li>
			</ul>
		</div>
	);
}

export default ArchiveTitleBar