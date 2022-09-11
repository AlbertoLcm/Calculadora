import React from "react";
import '../stylesheets/BtnClear.css'

const BtnClear = (props) => (
    <div className="btnClear" onClick={props.manejarClic}>
        {props.children}
    </div>
);

export default BtnClear;