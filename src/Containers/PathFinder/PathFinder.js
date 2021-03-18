import React, { Component } from 'react';
import Aux from '../../hoc/Auxi/Auxi';
import Header from '../../Components/Navigation/Header';
import MainGrid from '../../Components/MainGrid/MainGrid';

class PathFinder extends Component{
    render(){
        return(
            <Aux>
                <Header />
                <br/>
                <MainGrid/>
            </Aux>

        );

    }
}
export default PathFinder;