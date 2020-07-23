import React from 'react'

const Footer = () => {
    return (<footer>
        <div className="footer">
        <div className="social"><h2>Contact Us: </h2></div>
            <div className="social"><a href="mailto:mollyrosefoundation@gmail.com" aria-hidden="true" target="_blank" rel="noopener noreferrer"><i class="fa fa-envelope-o fa-2x"></i></a></div>
            <div className="social"><a href="https://twitter.com/mollyrosecancer" aria-hidden="true" target="_blank" rel="noopener noreferrer"><i class="fa fa-twitter fa-2x" ></i></a></div>
            <p className="muted footer-text">Designed and Developed by Alan Mc Gee <br></br> &copy;&nbsp;2020</p>
        </div> 
    </footer>)
}

export default Footer