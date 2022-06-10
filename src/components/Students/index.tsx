import React from "react";

import "../../styles/src/components/StudentsContainer/index.css";

import CandidateCard from "./CandidateCard";
import candidateData from "../../DATA/candidate_data.json";

interface IStudentsContainerProps {
    openModal : () => void
}

const StudentsContainer : React.FC<IStudentsContainerProps> = ({openModal}) => {
    return (
        <div className="students-container">
            <h2>
                <em>15</em> Candidatos de  
                <em>407</em> vinculados
            </h2>

            <div className="item-container">
                <h3>Novos</h3>
                <span>ainda não temos novos candidatos</span>
            </div>

            <div className="item-container">
                <h3>Vistos</h3>
                <div className="card-container">
                    {
                        candidateData.data.map(({id, name, address, lastFormation}) =>
                            <CandidateCard key={id} name={name} address={address} lastFormation={lastFormation} id={id} openModal={openModal} />
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default StudentsContainer;