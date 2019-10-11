import React from 'react'

const Footer = () => {
  return (
    <div>
      <section class="contact-area" id="contact">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 offset-lg-3">
              <div class="contact-content text-center">
                <div class="hr"></div>
                <div class="contact-social">
                  <ul>
                    <li><a class="hover-target" href=""><i class="fab fa-facebook-f"></i></a></li>
                    <li><a class="hover-target" href=""><i class="fab fa-linkedin-in"></i></a></li>
                    <li><a class="hover-target" href=""><i class="fab fa-github-alt"></i></a></li>
                    <li><a class="hover-target" href=""><i class="fab fa-pinterest-p"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <p>&copy; Luis galeas last updated Oct 11, 2019</p>
      </footer>
    </div>
  )
}

export default Footer
