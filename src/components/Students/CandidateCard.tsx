import React from "react";

interface ICandidateCardProps {
    id : number | string,
    name : string,
    address : string,
    lastFormation : string,
    openModal : () => void
}

const CandidateCard : React.FC<ICandidateCardProps> = ({ id, name, address, lastFormation, openModal }) => {
    return (
        <div className="candidate-card">
            <h3>{name}</h3>
            <div className="info-container">
                <div className="item">
                    <img src="/assets/icons/location.png"/>
                    <span>{address}</span>
                </div>
                <div className="item">
                    <img src="/assets/icons/student.png"/>
                    <span>{lastFormation}</span>
                </div>
            </div>
            <div className="action-container">
                <div className="action" onClick={openModal}>
                    <img src="/assets/icons/details.png" alt=""/>
                    detalhes
                </div>
                <div className="action positive-action">
                    <img src="/assets/icons/done.png" alt=""/>
                    Contratei!
                </div>
            </div>
        </div>
    );
}

export default CandidateCard;