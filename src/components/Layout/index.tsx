import React, { ReactChildren, ReactNode, Children, useState } from "react";
import TopBar from "./Topbar";

import "../../styles/src/components/Layout/index.css";
import Sidebar from "./Sidebar";

const LayoutWrapper : React.FC<{children : ReactNode}> = ({children}) => {

    const [isSidebarVisible, setSidebarVisibility] = useState(false);

    return (
        <div className="layout-container">
            <Sidebar visible={isSidebarVisible} />
            <main>
                <TopBar openMenu={() => setSidebarVisibility(!isSidebarVisible)} />
                { children }
            </main>
        </div>
    );
}

export default LayoutWrapper;