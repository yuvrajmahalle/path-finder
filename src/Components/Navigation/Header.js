import React from 'react';
import Aux from '../../hoc/Auxi/Auxi'
  

const header = () => {
    return(
        <Aux>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">PathFinder</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Select Algo
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href="#">Breadth-First Search (BFS)</a>
                        <a className="dropdown-item" href="#">Depth-First Search (DFS)</a>
                        <a className="dropdown-item" href="#">Dijkstra</a>
                        <a className="dropdown-item" href="#">...</a>
                        </div>
                    </li>
                </ul>
                <form className="form-inline">
                    <button className="btn btn-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                </div>
            </nav>
        </Aux>
    )
}

export default header;