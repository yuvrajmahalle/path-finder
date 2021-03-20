import React from 'react';
 
const gridCell = (props) =>{
    return(
        <td 
            className={ props.currentClassName } 
            onClick = {props.clicked}
            id={"colrow_"+props.rowNumber+"_"+props.colNumber}>
            
        </td>
    );
}

export default gridCell;