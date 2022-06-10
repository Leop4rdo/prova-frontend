import React, { useState } from "react";

import "../styles/src/components/Opportunity/index.css";
import StudentsContainer from "../components/Students";
import CandidateDetailsModal from "../components/Modals/CandidateDetails";



const OpportunityPage : React.FC = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <div className="opportunity-page-container">
            <div className="opportunity">
                <header>
                    <div className="title">
                        <div className="back-btn"><img src="/assets/icons/right-arrow.png" alt=""/></div>
                        <h2>Emprego - AUXILIAR DE MANUTENÇÃO </h2>
                    </div>

                    <div className="total">
                        <span>1 vaga</span>
                        <div className="refresh-btn"><img src="/assets/icons/refresh.png" alt=""/></div>
                    </div>
                </header>

                <div className="details">
                    <div className="column">
                        <div className="item">
                            <h3>Responsabilidades e Atribuições</h3>
                            <span>https://sesisenaisp.jobs.recrut.ai/job/Y5UR4G</span>
                        </div>
                        <div className="item">
                            <h3>Local de trabalho</h3>
                            <span>Rua Elton Silva</span>
                        </div>  
                        <div className="item">
                            <h3>Horario</h3>
                            <span>De segunda a domingo. 8 horas diarias</span>
                        </div>
                        <div className="item">
                            <h3>beneficios</h3>
                            <span>não informado</span>
                        </div>
                    </div>
                    <div className="column">
                        <div className="requirements">
                            <h3>Requesitos</h3>
                            <p className="item">Conhecimentos basicos em x y e z</p>
                            <p className="item">Conhecimentos basicos em x y e z</p>
                        </div>

                        <div className="item">
                            <h3>Salario</h3>
                            <span>R$ 1981</span>
                        </div>

                        <div className="item">
                            <h3>Observações</h3>
                            <span>Link para inscrição: https://sesisenaisp.jobs.recrut.ai/job/G07Q8S</span>
                        </div>
                    </div>
                </div>
            
                <StudentsContainer openModal={() => setModalVisible(true)}/>
            </div>

            { modalVisible && <CandidateDetailsModal onClose={() => setModalVisible(false)}/>}
        </div>
    );
}

export default OpportunityPage;