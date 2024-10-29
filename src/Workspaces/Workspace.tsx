import Tab from '../Tab.ts';
import TabType from "../TabType.ts";

function Workspace({ tab }: {tab: Tab}) {
    var content = <p>This is not an Archive workspace.</p>
    if (tab.type == TabType.Archive) {
        content = <p>This is an Archive workspace.</p>
    }
    if (tab.type == TabType.Empty) {
        content = <></>
    }

    return (
        <div className="Workspace">
            {content}
        </div>
    );
}

export default Workspace;