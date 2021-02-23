import React from 'react'
import { navigate } from "gatsby";
export interface ResultProps {
    link: string;
    fromField: string;
    message: string;
    toField: string;
}
const Result: React.FC<ResultProps> = ({ link, fromField, message, toField }) => {
    return (
        <div className="result">
            <h4>Share lolly with this link:</h4>
            <h3>{`https://virtual-lolly-byfahad.netlify.app/lollies/${link}`}</h3>
            <div className="resultCard">
                <p className="fromField">To:{fromField}</p>
                <p className="message">Message:{message}</p>
                <p className="toField">From:{toField}</p>
            </div>
            <button onClick={() => navigate("/")}> Go Back</button>
      
        </div>
    )
}

export default Result