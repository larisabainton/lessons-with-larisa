import React from 'react';

const Contact = () => {
    return (
        <div className="contact" id="contact">
            <div className="contact_title">Contact Me</div>
            <div className="contact_form">
                <form method="post" action="https://formspree.io/f/mwkgezkp">
                    <input type="text" aria-label="name" name="name" id="name" placeholder="Name" />
                    <input type="email" aria-label="email" name="email" id="email" placeholder="Email" />
                    <input type="text" aria-label="subject" name="subject" id="subject" placeholder="Subject" />
                    <textarea aria-label="message" name="message" id="message" rows="5" placeholder="Type your message here..."/>
                <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;