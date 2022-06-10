import React from "react";

interface ITopbarProps {
    openMenu : () => void
}

const Topbar : React.FC<ITopbarProps> = ({openMenu}) => {   
    return (
        <div className="topbar">
            <div className="hamburguer-menu" onClick={openMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <a href="" className="logout">Sair</a>
        </div>
    );
}

export default Topbar;