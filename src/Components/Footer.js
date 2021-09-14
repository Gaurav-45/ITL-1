import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Footer.css"


function Footer() {
    return (
        <footer>
            <div className="content">
                <p> © Copyrights reserved</p>
                <div className="logos">
                    <p href="#" class="fa fa-facebook"></p>
                    <p href="#" class="fa fa-twitter"></p>
                    <p href="#" class="fa fa-linkedin"></p>
                    <p href="#" class="fa fa-instagram"></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
