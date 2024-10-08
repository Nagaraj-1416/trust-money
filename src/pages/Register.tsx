import React from 'react'
import trustLogo from '../assets/trsut-group-logo.svg';
import about_experience_icon from '../assets/about-experience-icon.svg';
import whatsapp_icon from '../assets/whatsApp.svg';


const Register = () => {
  return (
    <section className="register-section">
    <div className="container">
      <div className="row reverse-mob">
        <div className="col-lg-6 bg-white">
          <div className="text-center p-20">
            <a href="/">
              <img
                alt="Trust Securities"
                height="152.33"
                src={trustLogo}
                width="136.56"
              />
            </a>
            <p className="mt-2 font14">
              Trust Securities Services is the Non-Institutional Clientele vertical of one of India's leading full-service financial houses, TRUST Group.
            </p>
            <div className="about-border mt-1">
              <span className="gray-color">
                Lead Arranger to all marquee debt IPO
              </span>
            </div>
            <div className="abt-wrap mt-2">
              <img
                alt="Users trust us"
                className="mb-2"
                height="91"
                src={about_experience_icon}
                width="91"
              />
              <h3 className="title m-0">
                20+
              </h3>
              <p className="font14 gray-color">
                Years of experience
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 bg-light-gold">
          <div className="p-20">
            <h1 className="title m-0">
              Open an Account with{' '}
              <span>
                TRUST
              </span>
            </h1>
            <p className="termsBox pb-2">
              Already have and account?
              <a href="/login">
                Sign in
              </a>
            </p>
            <div
              className="pb-2"
              id="registerArea"
            >
              <div className="form-section mt-1">
                <form id="registerForm">
                  <div className="form-input">
                    <input
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Full Name"
                      required
                      type="text"
                    />
                  </div>
                  <div className="form-input">
                    <input
                      className="form-control"
                      id="mobile"
                      // maxLength="10"
                      // minLength="10"
                      name="mobile"
                      placeholder="Mobile"
                      required
                      type="number"
                    />
                  </div>
                  <div className="form-input">
                    <input
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Email"
                      required
                      type="email"
                    />
                  </div>
                  <div className="form-input user-terms">
                    <div>
                      <label className="form-check font14">
                        <div className="flex-wrap">
                          <input
                            defaultChecked
                            defaultValue="Subscribed"
                            id="whatsappOpt"
                            name="whatsappOpt"
                            type="checkbox"
                          />
                          <div className="col-lg-11">
                            <span>
                              Subscribe For Updates On
                            </span>
                            <img
                              alt="whatsApp"
                              src={whatsapp_icon}
                              style={{height:'20px',width:'20px',marginLeft:'5px',marginRight:'5px'}}
                            />
                            <strong>
                              WhatsApp
                            </strong>
                          </div>
                        </div>
                      </label>
                    </div>
                    <div className="mt-1">
                      <label className="form-check font14">
                        <div className="flex-wrap">
                          <input
                            defaultChecked
                            id="termsCondition"
                            name="termsCondition"
                            type="checkbox"
                          />
                          <div className="col-lg-11">
                            <span>
                              By creating account you agree to our{' '}
                              <a href="#">
                                Privacy Policy
                              </a>
                              ,{' '}
                              <a href="#">
                                Terms of Service
                              </a>
                              {' '}and{' '}
                              <a href="#">
                                Notification Setting
                              </a>
                            </span>
                          </div>
                        </div>
                        <div id="termsError" />
                      </label>
                    </div>
                  </div>
                  <div className="form-input sticky-bottom">
                    <button
                      className="btn btn-primary d-block"
                      id="registerBtn"
                    >
                      CREAT AN ACCOUNT
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div
              className="pb-2 d-none"
              id="otpArea"
            >
              <form id="optForm">
                <div className="form-input otp-text">
                  <div className="text-left">
                    <h3 className="title-3">
                      OTP verification
                    </h3>
                    <p className="sucess-text mt-1">
                      We have sent OTP on your Email Id and Mobile Number Please verify and proceed
                    </p>
                  </div>
                </div>
                <div className="form-input">
                  <input
                    className="form-control"
                    id="mobileOTP"
                    // maxLength="4"
                    // minLength="4"
                    name="mobileOTP"
                    placeholder="Mobile OTP"
                    required
                    type="number"
                  />
                </div>
                <div className="form-input">
                  <input
                    className="form-control"
                    id="emailOTP"
                    // maxLength="4"
                    // minLength="4"
                    name="emailOTP"
                    placeholder="Email OTP"
                    required
                    type="number"
                  />
                </div>
                <div className="pb-2">
                  <div className="text-left termsBox">
                    <p>
                      Didn’t recieve OTP?{' '}
                      <a href="#">
                        Resend OTP
                      </a>
                    </p>
                  </div>
                </div>
                <div className="form-input sticky-bottom">
                  <button
                    className="btn btn-primary d-block"
                    id="submitOTP"
                  >
                    Verify OTP
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Register