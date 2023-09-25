import React from 'react';

const Contact = () => {
    return (
        <div className="contact" id="contact">
            <div className="contact_title">Contact Me</div>
            <div className="contact_form">
                <form method="post" action="https://getform.io/f/ad45fa58-d5f5-4bcf-88ec-79299a0bf6eb">
                <label>
                    Name
                    <input type="text" name="name" id="name" />
                </label>
                <label>
                    Email
                    <input type="email" name="email" id="email" />
                </label>
                <label>
                    Subject
                    <input type="text" name="subject" id="subject" />
                </label>
                <label>
                    Message
                    <textarea name="message" id="message" rows="5" />
                </label>
                <button type="submit">Send</button>
                <input type="reset" value="Clear" />
                </form>
            </div>
        </div>
    )
}

export default Contact;