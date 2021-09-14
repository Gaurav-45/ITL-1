import React from 'react'
import "./Contact.css";


function Contact() {
    return (
        <div>
            <div className="contact">
                <form className="form" action="">
                    <input type="text" name="name" id="" placeholder="Your Name"/>
                    <input type="email" name="email" id="" placeholder="Your Email"/>
                    <input type="text" name="subject" id="" placeholder="Your Subject"/>
                    <textarea name="message" id="" cols="30" rows="10" placeholder="Your meassage"></textarea>
                    <button className="btn-submit" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
