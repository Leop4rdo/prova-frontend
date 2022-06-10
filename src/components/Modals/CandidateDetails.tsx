import React from "react";

import "../../styles/src/components/Modals/index.css"

interface ICandidateDetailsModalProps {
    onClose : () => void
}

const CandidateDetailsModal: React.FC<ICandidateDetailsModalProps> = ({ onClose}) => {
    return (
        <div className="modal-wrapper">
            <div className="modal-container candidate-modal-container">
                <div className="modal-close-btn" onClick={onClose}>
                    <span>X</span>
                </div>

                <div className="modal-header">
                    {/* <img src="/assets/icons/profile.png" alt=""/> */}
                    <h2>Candidato Text</h2>
                </div>

                <div className="icon-container">
                    <div className="item">
                        <img src="/assets/icons/location.png"/>
                        <span>Cidade</span>
                    </div>
                    <div className="item">
                        <img src="/assets/icons/contact.png"/>
                        <span>candidato.teste@mail.com</span>
                    </div>
                    <div className="item">
                        <img src="/assets/icons/phone.png"/>
                        <span>(11) 11111-1111</span>
                    </div>
                    <div className="item">
                        <img src="/assets/icons/file.png"/>
                        <a href="">Ver Curriculo</a>
                    </div>
                </div>
                <div className="info-container">
                    
                </div>
            </div>
        </div>
    );
}

export default CandidateDetailsModal;