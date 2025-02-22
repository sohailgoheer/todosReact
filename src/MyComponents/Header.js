import React from 'react';
// import PropTypes from 'prop-types';

function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">About</a>
                        </li>

                    </ul>
                    {props.searchBar ? <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> : "Seachbar not showing"}

                </div>
            </div>
        </nav>
    );
}


// Header.PropTypes = {
//     title: PropTypes.string,
//     searchBar: PropTypes.bool.isRequired
// }

Header.defaultProps = {
    title: "Todos List",
    searchBar: true
};

export default Header;

