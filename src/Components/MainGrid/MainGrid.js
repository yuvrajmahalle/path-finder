import React, { Component } from "react";
import classes from './MainGrid.css';
import GridCell from './GridCell/GridCell';
 

class mainGrid  extends Component{
    
    state = {
        defaultGrid : [],
        defaultGirdRow : 26,
        defaultGirdCol : 66,
        isActiveMap : {}

    }

    componentDidMount(){
        const tempUpdatedGrid = this.setDefaultGrid();
        this.setState({defaultGrid : tempUpdatedGrid });
        
    }

    handleEvent = (event) => {
        if (event.type === "mousedown") {
           //event.type 
        } else {
            console.log( "Mouse  Up");
        }
    }
 
    setDefaultGrid = () =>{
        const grid = [];
        var isActive = {};
        for(let i = 0 ;i<this.state.defaultGirdRow;i++){
            let tempGridRow = [];
            for(let j=0;j<this.state.defaultGirdCol;j++){
                if(Math.floor(parseFloat(parseInt(this.state.defaultGirdRow)/2)) === i &&   Math.floor(parseFloat(parseInt(this.state.defaultGirdCol)/6)) === j){
                    tempGridRow.push(
                        <GridCell key={i+"_"+j} 
                            clicked = {(e) => {this.cellClickHandler(i,j)}}
                            rowNumber={i} 
                            colNumber={j} 
                            currentClassName={classes.GridCellStart}/>);
 
                }else if(Math.floor(parseFloat(parseInt(this.state.defaultGirdRow)/2)) === i  &&  j === 55){
        
                    tempGridRow.push(
                        <GridCell key={i+"_"+j} 
                            clicked = {(e) => {this.cellClickHandler(i,j)}}
                            rowNumber={i} 
                            colNumber={j} 
                            currentClassName={classes.GridCellFinish}/>);
                
                }
                else{
                    tempGridRow.push(
                        <GridCell key={i+"_"+j} 
                            clicked = {(e) => {this.cellClickHandler(i,j)}}
                            rowNumber={i} 
                            colNumber={j} 
                            currentClassName={classes.GridCellInActive}/>);
                }
 
                isActive[i+"_"+j] = false;
            }
            grid.push(tempGridRow);
        }

        this.setState({isActiveMap : isActive });
        return grid;
    }   

    cellClickHandler = (row,col) =>{
        
        const defaultGridTemp = [...this.state.defaultGrid];
        
        if(!(Math.floor(parseFloat(parseInt(this.state.defaultGirdRow)/2)) === row && (col === 55 || Math.floor(parseFloat(parseInt(this.state.defaultGirdCol)/6)) === col ))){
            if(this.state.isActiveMap[row+"_"+col]){
                defaultGridTemp[row][col] = <GridCell key={row+"_"+col} clicked = {(e) => {this.cellClickHandler(row,col)}}  rowNumber={row} colNumber={col} currentClassName={classes.GridCellInActive}/>;
            }else{
                defaultGridTemp[row][col] = <GridCell key={row+"_"+col} clicked = {(e) => {this.cellClickHandler(row,col)}}  rowNumber={row} colNumber={col} currentClassName={classes.GridCellActive}/>;
            }
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
                        <tbody onMouseDown={ this.handleEvent } onMouseUp={ this.handleEvent }>
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