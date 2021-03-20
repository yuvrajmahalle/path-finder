import React, { Component } from "react";
import classes from './MainGrid.css';
import GridCell from './GridCell/GridCell';
 

class mainGrid  extends Component{
   
   
    state = {
        defaultGrid : [],
        defaultGirdRow : 25,
        defaultGirdCol : 65,
        isActiveMap : {}

    }

    componentDidMount(){
        const tempUpdatedGrid = this.setDefaultGrid();
        this.setState({defaultGrid : tempUpdatedGrid });
        
    }
 
    setDefaultGrid = () =>{
        const grid = [];
        var isActive = {};
        for(let i = 0 ;i<this.state.defaultGirdRow;i++){
            let tempGridRow = [];
            for(let j=0;j<this.state.defaultGirdCol;j++){
                tempGridRow.push(
                            <GridCell key={i+"_"+j} 
                                clicked = {(e) => {this.cellClickHandler(i,j)}}
                                rowNumber={i} 
                                colNumber={j} 
                                currentClassName={classes.GridCellInActive}/>);
                isActive[i+"_"+j] = false;
            }
            grid.push(tempGridRow);
        }

        this.setState({isActiveMap : isActive });
        return grid;
    }

    cellClickHandler = (row,col) =>{
        
        const defaultGridTemp = [...this.state.defaultGrid];
        debugger;
 
        if(this.state.isActiveMap[row+"_"+col]){
            defaultGridTemp[row][col] = <GridCell key={row+"_"+col} clicked = {(e) => {this.cellClickHandler(row,col)}}  rowNumber={row} colNumber={col} currentClassName={classes.GridCellInActive}/>;
        }else{
            defaultGridTemp[row][col] = <GridCell key={row+"_"+col} clicked = {(e) => {this.cellClickHandler(row,col)}}  rowNumber={row} colNumber={col} currentClassName={classes.GridCellActive}/>;
        }

        const isActiveMapFlag = this.state.isActiveMap[row+"_"+col];
        const isActiveMapTemp = {...this.state.isActiveMap};
        isActiveMapTemp[row+"_"+col] = !isActiveMapFlag;
        this.setState({isActiveMap : isActiveMapTemp})
        this.setState({defaultGrid : defaultGridTemp });
    }
 

    render(){
        
 
        return (  
            <div className={classes.MainDiv}>
                <table >
                        <thead></thead>
                        <tbody>
                        {
                            this.state.defaultGrid.map((item, rowIndex) => {
                                return(
                                    <tr  key={rowIndex} id={"row_"+rowIndex} >
                                    {
                                        item.map((itemSec,colIndex) => {
                                            return(
                                                itemSec
                                            )
                                        })
                                    }
                                    </tr>
                                )
                            })
                        } 
                        </tbody>           
                </table>
            </div>
        )
    }
}

export default mainGrid;