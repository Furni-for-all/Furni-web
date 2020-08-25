import React from 'react'
import './Footer.css'
import Icon from '@material-ui/core/Icon';
import GitHubIcon from '@material-ui/icons/GitHub';
export default function Footer() {
    return (
        <div className="main-container">
            <div className="main-flex-container">
                <div className="about">
                    <div className="head-container">
                        <span className="head"><u>About Us</u></span>
                        <div className="about_body">
                        <span>Finding the right product can make independent living and day to day life easier for you and the whole family.</span>
                        </div>
                    </div>
                </div>
                <div className="contact">
                <div className="head-container">
                    <span className="head"><u>Contact Us</u></span>
                    <div className="body">
                        <h2>Sakshi Jain </h2>
                        <h3><a href="https://www.github.com/sakshi172015"><GitHubIcon />    https://www.github.com/sakshi172015</a></h3>
                        <h2>Nandini Bagga </h2>
                        <h3><a href="https://www.github.com/NANDINI-star"><GitHubIcon />    https://www.github.com/NANDINI-star</a></h3>
                    </div>
                </div>
                </div>
            </div>
            <div className="copyright-container">
                <span>© Copyright Furni 2020</span>
            </div>
        </div>
    )
}