import React from "react";

interface ISidebarProps {
    visible : boolean
}

const Sidebar : React.FC<ISidebarProps> = ({visible}) => {
    return (
        <div className={`sidebar ${(visible) ? "active" : ""}`}>
            <div className="logo">
                <img src="/assets/icons/logo.png" alt=""/>
                <span>JOB</span>
            </div>

            <nav>
                <div className="nav-item">
                    <img src="/assets/icons/home.png" alt=""/>
                    <span>Home</span>
                </div>  
                <div className="nav-item">
                    <img src="/assets/icons/profile.png" alt=""/>
                    <span>Meu Perfil</span>
                </div> 
                <div className="nav-item">
                    <img src="/assets/icons/suitcase.png" alt=""/>
                    <span>Minhas Vagas</span>
                </div> 
            </nav>
        </div>
    );
}

export default Sidebar;