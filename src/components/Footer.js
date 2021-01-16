import React from 'react'

const Footer = () => {
    return (<footer>
        <div className="footer">
        <div className="social"><h2>Contact Us: </h2></div>
            <div className="social"><a title="Send an email to us" href="mailto:mollyrosefoundation@gmail.com"  target="_blank" rel="noopener noreferrer"><i className="fa fa-envelope-o fa-2x"></i></a></div>
            <div className="social"><a title="Go to our twitter page" href="https://twitter.com/mollyrosecancer"  target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter fa-2x" ></i></a></div>
            <p className="muted footer-text">Designed and Developed by Alan Mc Gee <br></br> &copy;&nbsp;2020</p>
        </div> 
    </footer>)
}

export default Footer