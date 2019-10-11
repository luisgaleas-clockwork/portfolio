import React from 'react'

const Contact = () => {
    return (
        <div className="contact-bg animated fadeIn slow">
            <h2>Contact Me</h2>
            <form action="https://formspree.io/xarpynrm" method="POST">
                <input name="name" type="text" class="feedback-input" placeholder="Name" />
                <input name="email" type="text" class="feedback-input" placeholder="Email" />
                <textarea name="text" class="feedback-input" placeholder="Comment"></textarea>
                <input type="submit" value="SUBMIT" />
            </form>
        </div>
    )
}

export default Contact