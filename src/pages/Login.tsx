import React, { useState } from 'react';
import trustLogo from '../assets/trsut-group-logo.svg'; 
import login_bond_icon from '../assets/login-bond-icon-1.svg'; 
import eye_icon from '../assets/eye-open.svg'; 
import eye_strike_icon from '../assets/eye-open-close.svg'; 
import check_full from '../assets/check-full.svg'; 
import call_icon from '../assets/call-icon-brand.svg'; 
import email_icon from '../assets/email-icon-brand.svg'; 
import { TextField } from '@mui/material';

function Login() {
  const [panNumber, setPanNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="register-box">
  <div className="m-auto main-wrapper">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="logo">
            {' '}
            <a
              className="d-inline-block"
              href="/"
            >
              <img
                alt="Trust Securities"
                src={trustLogo}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="form-wrapper">
        <div className="row reverse-mob">
          <div className="col-lg-12">
            <div className="row reverse-mob">
              <div className="col-lg-6 ugf-sidebar-bg">
                <div className="row">
                  <div className="col-lg-9 m-auto">
                    <div className="p-relative index-btn">
                      <div className="text-left p-0  ">
                        <div className="doc-wrapper">
                          <div>
                            <img
                              height="209px"
                              src={login_bond_icon}
                              width="250px"
                            />
                          </div>
                          <h4 className="title">
                            <strong>
                              Smart Returns Made Easy and Accessible with Bonds
                            </strong>
                          </h4>
                          <ul className="mt-2">
                            <li className="flex-wrap flex-center mb-1">
                              <img
                                src={check_full}
                                style={{
                                  height: '20px',
                                  width: '10px' 
                                }}
                              />
                              <span className="ml-1 font14 sucess-text inherit">
                                Fair and Competitive Pricing.
                              </span>
                            </li>
                            <li className="flex-wrap flex-center mb-1">
                              <img
                                src={check_full}
                                style={{
                                  height: '20px',
                                  width: '20px'
                                }}
                              />
                              <span className="ml-1 font14 sucess-text inherit">
                                Knowledge and Understanding Unlocked.
                              </span>
                            </li>
                            <li className="flex-wrap flex-center">
                              <img
                                src={check_full}
                                style={{
                                  height: '20px',
                                  width: '20px'
                                }}
                              />
                              <span className="ml-1 font14 sucess-text inherit">
                                Access to 500+ Bonds.
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-lg-9 m-auto">
                    <div className="register-wraper">
                      <div className="text-left">
                        <h1 className="title title-big">
                          Login with{' '}
                          <span className="brand-color">
                            TRUST
                          </span>
                        </h1>
                        <p className="termsBox pb-2 font14">
                          If you don’t have account?
                          <a
                            href="/register"
                          >
                            Sign Up
                          </a>
                        </p>
                      </div>
                      <div className="form-section mt-1">
                      <form
                            autoComplete="off"
                            id="loginForm"
                          >
                            <div className="form-input forgot-psw input-switch p-0" id="passwordBox">
                              <div className="form-input mt-1">
                                <TextField
                                  id="outlined-pan"
                                  label="PAN"
                                  variant="outlined"
                                  fullWidth
                                  value={panNumber}
                                  onChange={(e) => setPanNumber(e.target.value)}
                                />
                                <div className="error-login" id="pan_error"></div>
                              </div>
                              <div className="form-input">
                                <TextField
                                  id="outlined-password"
                                  label="Password"
                                  type={showPassword ? 'text' : 'password'}
                                  variant="outlined"
                                  fullWidth
                                  value={password}
                                  onChange={(e) => setPassword(e.target.value)}
                                />
                                <div className="psw-eye" onClick={togglePasswordVisibility}>
                                  <img
                                    id="passEye"
                                    alt="eye"
                                    width="21px"
                                    height="21px"
                                    src={showPassword ? eye_icon : eye_strike_icon}
                                  />
                                </div>
                                <div className="error-login" id="pass_error"></div>
                                <div className="font14 text-right">
                                  <a href="#" id="forgotPassword">
                                    Forgot password?
                                  </a>
                                </div>
                              </div>
                              <div className="form-input">
                                <a
                                  className="btn btn-primary d-block"
                                  href="/login"
                                  id="loginBtn"
                                >
                                  LOGIN
                                </a>
                              </div>
                            </div>
                          </form>
                        {/* <form
                          autoComplete="off"
                          id="passOptLoginForm"
                        >
                          <div
                            className="form-input d-none"
                            id="verifyOtpPasswordBox"
                          >
                            <div className="form-input">
                              <h3>
                                Two-Step Verification
                              </h3>
                              <div className="mt-1" />
                              <svg
                                fill="none"
                                height="47"
                                viewBox="0 0 40 47"
                                width="40"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M11.5945 39.4204H20.8698C21.1773 39.4204 21.4722 39.2983 21.6897 39.0808C21.9071 38.8634 22.0293 38.5685 22.0293 38.261C22.0293 37.9535 21.9071 37.6586 21.6897 37.4411C21.4722 37.2237 21.1773 37.1016 20.8698 37.1016H11.5945C11.287 37.1016 10.9921 37.2237 10.7746 37.4411C10.5572 37.6586 10.4351 37.9535 10.4351 38.261C10.4351 38.5685 10.5572 38.8634 10.7746 39.0808C10.9921 39.2983 11.287 39.4204 11.5945 39.4204Z"
                                  fill="#C0C0C0"
                                />
                                <path
                                  d="M27.2417 46.3768H5.22202C3.76074 46.2895 2.393 45.6275 1.41637 44.535C0.439745 43.4425 -0.0667543 42.0077 0.00707261 40.543V5.83385C-0.0667543 4.36908 0.439745 2.93435 1.41637 1.84182C2.393 0.749281 3.76074 0.0873381 5.22202 0H27.2417C28.703 0.0873381 30.0708 0.749281 31.0474 1.84182C32.024 2.93435 32.5305 4.36908 32.4567 5.83385V40.543C32.5305 42.0077 32.024 43.4425 31.0474 44.535C30.0708 45.6275 28.703 46.2895 27.2417 46.3768ZM5.22202 2.33354C4.37954 2.4227 3.60551 2.83915 3.066 3.49355C2.52649 4.14794 2.26449 4.98814 2.33622 5.83385V40.543C2.26449 41.3887 2.52649 42.2289 3.066 42.8833C3.60551 43.5377 4.37954 43.9541 5.22202 44.0433H27.2417C28.0842 43.9541 28.8583 43.5377 29.3978 42.8833C29.9373 42.2289 30.1993 41.3887 30.1276 40.543V5.83385C30.1993 4.98814 29.9373 4.14794 29.3978 3.49355C28.8583 2.83915 28.0842 2.4227 27.2417 2.33354H5.22202Z"
                                  fill="#C0C0C0"
                                />
                                <rect
                                  fill="white"
                                  height="10.0145"
                                  rx="3.5"
                                  stroke="#C0C0C0"
                                  width="28.5652"
                                  x="10.9351"
                                  y="14.4131"
                                />
                                <path
                                  d="M34.0889 17.7147L34.8425 19.0874L33.1872 19.6661L34.8425 20.2314L34.0351 21.6579L32.6893 20.4736L33.0257 22.2231H31.4512L31.7741 20.4736L30.4418 21.6714L29.6074 20.2179L31.2627 19.6392L29.6209 19.1009L30.388 17.7147L31.7876 18.8856L31.4377 17.1091H33.0392L32.6893 18.8856L34.0889 17.7147Z"
                                  fill="#C0C0C0"
                                />
                                <path
                                  d="M26.8995 17.7147L27.6531 19.0874L25.9978 19.6661L27.6531 20.2314L26.8456 21.6579L25.4998 20.4736L25.8363 22.2231H24.2617L24.5847 20.4736L23.2524 21.6714L22.418 20.2179L24.0733 19.6392L22.4314 19.1009L23.1985 17.7147L24.5981 18.8856L24.2482 17.1091H25.8497L25.4998 18.8856L26.8995 17.7147Z"
                                  fill="#C0C0C0"
                                />
                                <path
                                  d="M19.711 17.7147L20.4646 19.0874L18.8093 19.6661L20.4646 20.2314L19.6571 21.6579L18.3114 20.4736L18.6478 22.2231H17.0732L17.3962 20.4736L16.0639 21.6714L15.2295 20.2179L16.8848 19.6392L15.243 19.1009L16.0101 17.7147L17.4097 18.8856L17.0598 17.1091H18.6613L18.3114 18.8856L19.711 17.7147Z"
                                  fill="#C0C0C0"
                                />
                              </svg>
                            </div>
                            <div className="form-input">
                              <p
                                className="font14"
                                id="sucessText"
                              >
                              </p>
                            </div>
                            <div className="form-input">
                              <input
                                defaultValue=""
                                id="login_pannumber"
                                name="login_pannumber"
                                type="hidden"
                              />
                              <input
                                className="form-control"
                                id="loginotp"
                                // maxLength="4"
                                // minLength="4"
                                name="loginotp"
                                required
                                title="Please enter correct OTP"
                                type="number"
                              />
                              <label className="input-label">
                                Enter OTP
                              </label>
                              <div
                                className="error-login"
                                id="otp_error"
                              />
                            </div>
                            <div
                              className="form-input"
                              id="timerBox"
                            >
                              <div className="text-left termsBox">
                                <p className="font-14">
                                  Didn't recieve OTP
                                  <span
                                    className="loader small ml-02"
                                    id="loaderTimer"
                                  />
                                  <span
                                    className="brand-color"
                                    id="otpTimer"
                                  />
                                  <a
                                    className="d-none"
                                    href="#"
                                    id="resend_otp_login_pass"
                                  >
                                    Resend?
                                  </a>
                                </p>
                              </div>
                            </div>
                            <div className="form-input index-btn p-relative">
                              <button
                                className="btn btn-primary d-block"
                                id="verifyBtnPassOtp"
                                type="submit"
                              >
                                LOGIN
                              </button>
                            </div>
                          </div>
                        </form>
                        <form
                          autoComplete="off"
                          id="loginOtp"
                        >
                          <div
                            className="form-input d-none input-switch"
                            id="mobileBox"
                          >
                            <div className="form-input">
                              <input
                                autoFocus
                                className="form-control"
                                id="pan_number_otp"
                                // maxLength="10"
                                // minLength="10"
                                name="pan_number_otp"
                                required
                                title="Please enter your pan"
                                type="text"
                              />
                              <label className="input-label">
                                PAN
                              </label>
                              <div
                                className="error-login"
                                id="pan_error"
                              />
                            </div>
                            <div className="form-input">
                              <input
                                className="form-control"
                                id="mobile_otp"
                                // minLength="6"
                                name="mobile_otp"
                                required
                                title="Please enter your mobile"
                                type="number"
                              />
                              <label className="input-label">
                                Mobile
                              </label>
                              <div
                                className="error-login"
                                id="mobile_error"
                              />
                              <div className="font14 text-right">
                                <a
                                  href="#"
                                  id="rememberPassword"
                                >
                                  Login with password?
                                </a>
                              </div>
                            </div>
                            <div className="form-input index-btn p-relative">
                              <button
                                className="btn btn-primary d-block"
                                id="otpBtn"
                                type="submit"
                              >
                                LOGIN
                              </button>
                            </div>
                          </div>
                        </form>
                        <form
                          autoComplete="off"
                          id="optLoginForm"
                        >
                          <div
                            className="form-input d-none"
                            id="verifyOtpBox"
                          >
                            <div className="form-input">
                              <h3>
                                OTP Verification
                              </h3>
                              <div className="mt-1" />
                              <svg
                                fill="none"
                                height="47"
                                viewBox="0 0 40 47"
                                width="40"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M11.5945 39.4204H20.8698C21.1773 39.4204 21.4722 39.2983 21.6897 39.0808C21.9071 38.8634 22.0293 38.5685 22.0293 38.261C22.0293 37.9535 21.9071 37.6586 21.6897 37.4411C21.4722 37.2237 21.1773 37.1016 20.8698 37.1016H11.5945C11.287 37.1016 10.9921 37.2237 10.7746 37.4411C10.5572 37.6586 10.4351 37.9535 10.4351 38.261C10.4351 38.5685 10.5572 38.8634 10.7746 39.0808C10.9921 39.2983 11.287 39.4204 11.5945 39.4204Z"
                                  fill="#C0C0C0"
                                />
                                <path
                                  d="M27.2417 46.3768H5.22202C3.76074 46.2895 2.393 45.6275 1.41637 44.535C0.439745 43.4425 -0.0667543 42.0077 0.00707261 40.543V5.83385C-0.0667543 4.36908 0.439745 2.93435 1.41637 1.84182C2.393 0.749281 3.76074 0.0873381 5.22202 0H27.2417C28.703 0.0873381 30.0708 0.749281 31.0474 1.84182C32.024 2.93435 32.5305 4.36908 32.4567 5.83385V40.543C32.5305 42.0077 32.024 43.4425 31.0474 44.535C30.0708 45.6275 28.703 46.2895 27.2417 46.3768ZM5.22202 2.33354C4.37954 2.4227 3.60551 2.83915 3.066 3.49355C2.52649 4.14794 2.26449 4.98814 2.33622 5.83385V40.543C2.26449 41.3887 2.52649 42.2289 3.066 42.8833C3.60551 43.5377 4.37954 43.9541 5.22202 44.0433H27.2417C28.0842 43.9541 28.8583 43.5377 29.3978 42.8833C29.9373 42.2289 30.1993 41.3887 30.1276 40.543V5.83385C30.1993 4.98814 29.9373 4.14794 29.3978 3.49355C28.8583 2.83915 28.0842 2.4227 27.2417 2.33354H5.22202Z"
                                  fill="#C0C0C0"
                                />
                                <rect
                                  fill="white"
                                  height="10.0145"
                                  rx="3.5"
                                  stroke="#C0C0C0"
                                  width="28.5652"
                                  x="10.9351"
                                  y="14.4131"
                                />
                                <path
                                  d="M34.0889 17.7147L34.8425 19.0874L33.1872 19.6661L34.8425 20.2314L34.0351 21.6579L32.6893 20.4736L33.0257 22.2231H31.4512L31.7741 20.4736L30.4418 21.6714L29.6074 20.2179L31.2627 19.6392L29.6209 19.1009L30.388 17.7147L31.7876 18.8856L31.4377 17.1091H33.0392L32.6893 18.8856L34.0889 17.7147Z"
                                  fill="#C0C0C0"
                                />
                                <path
                                  d="M26.8995 17.7147L27.6531 19.0874L25.9978 19.6661L27.6531 20.2314L26.8456 21.6579L25.4998 20.4736L25.8363 22.2231H24.2617L24.5847 20.4736L23.2524 21.6714L22.418 20.2179L24.0733 19.6392L22.4314 19.1009L23.1985 17.7147L24.5981 18.8856L24.2482 17.1091H25.8497L25.4998 18.8856L26.8995 17.7147Z"
                                  fill="#C0C0C0"
                                />
                                <path
                                  d="M19.711 17.7147L20.4646 19.0874L18.8093 19.6661L20.4646 20.2314L19.6571 21.6579L18.3114 20.4736L18.6478 22.2231H17.0732L17.3962 20.4736L16.0639 21.6714L15.2295 20.2179L16.8848 19.6392L15.243 19.1009L16.0101 17.7147L17.4097 18.8856L17.0598 17.1091H18.6613L18.3114 18.8856L19.711 17.7147Z"
                                  fill="#C0C0C0"
                                />
                              </svg>
                            </div>
                            <div className="form-input">
                              <p
                                className="font14"
                                id="sucessText2"
                              >
                              </p>
                            </div>
                            <div className="form-input">
                              <input
                                defaultValue=""
                                id="login_pan_number"
                                name="login_pan_number"
                                type="hidden"
                              />
                              <input
                                defaultValue=""
                                id="login_mobile_number"
                                name="login_mobile_number"
                                type="hidden"
                              />
                              <input
                                className="form-control"
                                id="login_otp"
                                // maxLength="4"
                                // minLength="4"
                                name="login_otp"
                                required
                                title="Please enter correct OTP"
                                type="number"
                              />
                              <label className="input-label">
                                Enter OTP
                              </label>
                              <div
                                className="error-login"
                                id="otp_error_2"
                              />
                            </div>
                            <div
                              className="form-input"
                              id="timerBox"
                            >
                              <div className="text-left termsBox">
                                <p className="font-14">
                                  Didn't recieve OTP
                                  <span
                                    className="loader small ml-02"
                                    id="loaderTimer"
                                  />
                                  <span
                                    className="brand-color"
                                    id="otpTimer"
                                  />
                                  <a
                                    className="d-none"
                                    href="#"
                                    id="resend_otp_login"
                                  >
                                    Resend?
                                  </a>
                                </p>
                              </div>
                            </div>
                            <div className="form-input index-btn p-relative">
                              <button
                                className="btn btn-primary d-block"
                                id="verifyBtn"
                                type="submit"
                              >
                                LOGIN
                              </button>
                            </div>
                          </div>
                        </form>
                        <form
                          autoComplete="off"
                          className="d-none"
                          id="birthYearForm"
                        >
                          <div className="form-input">
                            <h3>
                              Two-Step Verification
                            </h3>
                            <div className="mt-1" />
                            <svg
                              fill="none"
                              height="47"
                              viewBox="0 0 40 47"
                              width="40"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M11.5945 39.4204H20.8698C21.1773 39.4204 21.4722 39.2983 21.6897 39.0808C21.9071 38.8634 22.0293 38.5685 22.0293 38.261C22.0293 37.9535 21.9071 37.6586 21.6897 37.4411C21.4722 37.2237 21.1773 37.1016 20.8698 37.1016H11.5945C11.287 37.1016 10.9921 37.2237 10.7746 37.4411C10.5572 37.6586 10.4351 37.9535 10.4351 38.261C10.4351 38.5685 10.5572 38.8634 10.7746 39.0808C10.9921 39.2983 11.287 39.4204 11.5945 39.4204Z"
                                fill="#C0C0C0"
                              />
                              <path
                                d="M27.2417 46.3768H5.22202C3.76074 46.2895 2.393 45.6275 1.41637 44.535C0.439745 43.4425 -0.0667543 42.0077 0.00707261 40.543V5.83385C-0.0667543 4.36908 0.439745 2.93435 1.41637 1.84182C2.393 0.749281 3.76074 0.0873381 5.22202 0H27.2417C28.703 0.0873381 30.0708 0.749281 31.0474 1.84182C32.024 2.93435 32.5305 4.36908 32.4567 5.83385V40.543C32.5305 42.0077 32.024 43.4425 31.0474 44.535C30.0708 45.6275 28.703 46.2895 27.2417 46.3768ZM5.22202 2.33354C4.37954 2.4227 3.60551 2.83915 3.066 3.49355C2.52649 4.14794 2.26449 4.98814 2.33622 5.83385V40.543C2.26449 41.3887 2.52649 42.2289 3.066 42.8833C3.60551 43.5377 4.37954 43.9541 5.22202 44.0433H27.2417C28.0842 43.9541 28.8583 43.5377 29.3978 42.8833C29.9373 42.2289 30.1993 41.3887 30.1276 40.543V5.83385C30.1993 4.98814 29.9373 4.14794 29.3978 3.49355C28.8583 2.83915 28.0842 2.4227 27.2417 2.33354H5.22202Z"
                                fill="#C0C0C0"
                              />
                              <rect
                                fill="white"
                                height="10.0145"
                                rx="3.5"
                                stroke="#C0C0C0"
                                width="28.5652"
                                x="10.9351"
                                y="14.4131"
                              />
                              <path
                                d="M34.0889 17.7147L34.8425 19.0874L33.1872 19.6661L34.8425 20.2314L34.0351 21.6579L32.6893 20.4736L33.0257 22.2231H31.4512L31.7741 20.4736L30.4418 21.6714L29.6074 20.2179L31.2627 19.6392L29.6209 19.1009L30.388 17.7147L31.7876 18.8856L31.4377 17.1091H33.0392L32.6893 18.8856L34.0889 17.7147Z"
                                fill="#C0C0C0"
                              />
                              <path
                                d="M26.8995 17.7147L27.6531 19.0874L25.9978 19.6661L27.6531 20.2314L26.8456 21.6579L25.4998 20.4736L25.8363 22.2231H24.2617L24.5847 20.4736L23.2524 21.6714L22.418 20.2179L24.0733 19.6392L22.4314 19.1009L23.1985 17.7147L24.5981 18.8856L24.2482 17.1091H25.8497L25.4998 18.8856L26.8995 17.7147Z"
                                fill="#C0C0C0"
                              />
                              <path
                                d="M19.711 17.7147L20.4646 19.0874L18.8093 19.6661L20.4646 20.2314L19.6571 21.6579L18.3114 20.4736L18.6478 22.2231H17.0732L17.3962 20.4736L16.0639 21.6714L15.2295 20.2179L16.8848 19.6392L15.243 19.1009L16.0101 17.7147L17.4097 18.8856L17.0598 17.1091H18.6613L18.3114 18.8856L19.711 17.7147Z"
                                fill="#C0C0C0"
                              />
                            </svg>
                          </div>
                          <div className="form-input">
                            <p
                              className="font14"
                              id="sucessText3"
                            >
                              Please enter your 4-digit birth year as per your PAN.
                            </p>
                          </div>
                          <div className="form-input">
                            <input
                              defaultValue=""
                              id="login_pan_number_birth"
                              name="login_pan_number"
                              type="hidden"
                            />
                            <input
                              defaultValue=""
                              id="login_mobile_number_birth"
                              name="login_mobile_number"
                              type="hidden"
                            />
                            <input
                              className="form-control"
                              id="login_birth_year"
                              // maxLength="4"
                              // minLength="4"
                              name="login_birth_year"
                              required
                              title="Please enter correct birth year"
                              type="number"
                            />
                            <label className="input-label">
                              Enter Birth Year
                            </label>
                            <div
                              className="error-login"
                              id="birth_year_error"
                            />
                          </div>
                          <div className="form-input index-btn p-relative">
                            <button
                              className="btn btn-primary d-block"
                              id="verifyBtnYear"
                              type="submit"
                            >
                              LOGIN
                            </button>
                          </div>
                        </form> */}
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-lg-12">
                        <h2 className="title-2 brand-color">
                          Need Help ?
                        </h2>
                      </div>
                      <div className="col-lg-12 mt-1">
                        <a
                          className="reg-anchor"
                          href="tel:022 - 2656 7536"
                        >
                          <img src={call_icon} />
                          <span className="ml-02">
                            022 - 2656 7536
                          </span>
                        </a>
                      </div>
                      <div className="col-lg-12">
                        <a
                          className="reg-anchor"
                          href="mailto:trustsecurities@trustgroup.in"
                        >
                          <img src={email_icon} />
                          <span className="ml-02">
                            trustsecurities@trustgroup.in
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Login;
