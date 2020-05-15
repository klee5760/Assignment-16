import React from "react";

function Nav(){
    return(
        <nav className="navbar navbar-expand-lg navbar-primary bg-primary">
            <a className="navbar-brand" href="/">
                <h2 className="text-white">Google Book Search</h2>
                </a>

                <div id="navbar">
                    <ul className="navbar-nav">
                        <li className="navbar-nav">
                            <a className="nav-link" href="/"><button type="button" className="btn btn-info text-white">
                                Search Books</button></a>
                        </li>
                        <li>
                            <a className="nav-link" href="/saved"><button type = "button" className = "bt btn-warningntext-white">
                            Saved Books</button></a>
                        </li>
                    </ul>
                </div>
        </nav>
    );
}

export default Nav;


