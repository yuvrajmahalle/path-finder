import React from "react";
import classes from './MainGrid.css';
 

const mainGrid = () =>{
    const mainGirdRow = new Array(20).fill(0);
    const mainGirdCol = new Array(33).fill(0);
    return (
        <div>
             <table>
                {
                    mainGirdRow.map((item, indexRow) => {
                        return (
                        <tr  key={indexRow} id={"row_"+indexRow} >
                            {
                                 mainGirdCol.map((itemCol,indexCol) => {
                                     return(
                                         <td  className={classes.GridCell} key={indexRow+"_"+indexCol} id={"col_"+indexRow+"_"+indexCol}></td>
                                     )
                                 })
                            }
                        </tr>
                        );
                    })
                }            
             </table>
        </div>
    );
}

export default mainGrid;