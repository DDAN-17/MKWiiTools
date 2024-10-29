import React from "react";
import ReactDOM from "react-dom/client";
import TabBar from "./TabBar.tsx"

let root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

export function render() {
    root.render(
        <React.StrictMode>
            <TabBar/>
        </React.StrictMode>,
    );
}

render()