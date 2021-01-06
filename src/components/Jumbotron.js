import React from 'react'

export const Jumbotron = () => {
    return (
        <div className="jumbotron text-center">
            <div className="container">
                <h1 className="h1 text-white">Travel Agency</h1>
                <p className="lead text-white mt-5">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
            <div className="container">
                <a className="btn btn-primary mx-5" href="#services">Services</a>
                <a className="btn btn-primary mx-5" href="#contact"> Contact</a>
            </div>
        </div>
    )
}



export const JumbotronServices = () => {
            
    return (
        <div className="jumbotron-services text-center">
        <div className="container">
            <h1 className="h1 text-white">Our services</h1>
            <p className="lead text-white mt-5">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
    </div>
    )
}
export const JumbotronContact = () => {
            
    return (
        <div className="jumbotron-services text-center">
        <div className="container">
            <h1 className="h1 text-white">Get in touch</h1>
            <p className="lead text-white mt-5">Get in touch with one of our agents now!</p>
        </div>
    </div>
    )
}


export default Jumbotron

