import React, { Component } from "react";
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";
import { BiLogoWhatsapp } from "react-icons/bi";

class Contact extends Component {
  render() {
    return (
      <>
        <div className="contact" style={{ marginTop: "9%" }}>
          <div className="headerc">
            <figure>
              <p>CONTACT ME</p>
              <figcaption class="strip blockquote-footer">
                If You Have Any Questions
              </figcaption>
            </figure>
          </div>
          <div className="contentc">
            <form>
              <div class="row">
                <div class="col">
                  <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="firstname" placeholder="First Name"/>
                    <label for="firstname">First Name</label>
                  </div>
                </div>
                <div class="col">
                  <div class="form-floating">
                    <input type="text" class="form-control" id="lastname" placeholder="Last Name"/>
                    <label for="lastname">Last Name</label>
                  </div>
                </div>
                <div class="form-floating mb-3">
                  <input type="email" class="form-control" id="email" placeholder="Email"/>
                  <label for="email" style={{marginLeft: '10px'}}>Email</label>
                </div>
                <div class="form-floating">
                  <textarea class="form-control" placeholder="Leave a comment here" id="question"></textarea>
                  <label for="question" style={{marginLeft: '10px'}}>Question</label>
                </div>
                <div class="col-12 mt-4">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </div>
            </form>
            <div className="right-contentc">
              <p>
              Tak kenal maka ta'aruf, jika Anda ingin berkenalan dengan saya atau Anda memiliki pertanyaan untuk saya, silakan isi form di samping atau bisa hubungi melalui sosial media saya di bawah ini!  
              </p>
              <div className="sosmed">
                <a href="https://www.instagram.com/dzulfikrinf/"><BiLogoInstagram size={40}/></a>
                <a href="https://www.linkedin.com/in/dzulfikrinf/"><BiLogoLinkedinSquare size={40}/></a>
                <a href="https://github.com/dzulfikrinf"><BiLogoGithub size={40}/></a>
                <a href="https://wa.me/6283108873575"><BiLogoWhatsapp size={40}/></a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
