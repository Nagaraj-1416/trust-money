import React from 'react';
import location_icon from '../../assets/location-icon.svg'; 
import email_icon from '../../assets/email-icon.svg'; 
import call_icon from '../../assets/call-icon.svg'; 
import trust_footer_logo from '../../assets/trust-securities-footer-logo.svg'; 
import linked_in_logo from '../../assets/linkedin.svg'; 
import twitter_logo from '../../assets/twitter.svg'; 
import facebook_logo from '../../assets/facebook.svg';
import whatsapp_icon from '../../assets/whatsApp.svg'; 
import up_arrow_icon from '../../assets/up-arrow-icon.svg';  

const Footer: React.FC = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-sm-12">
                            <div className="row">
                                <div className="col-lg-4 col-sm-6">
                                    <div className="ft-list">
                                        <img
                                            alt="Trust Securities"
                                            height="63"
                                            src={trust_footer_logo}
                                            width="117"
                                        />
                                        <ul className="mt-1">
                                            <li>
                                                <a href="tel:+91 22 4084 5000">
                                                    <img src={call_icon} />
                                                    <span>
                                                        +91 22 4084 5000
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="mailto:info@trustgroup.in">
                                                    <img src={email_icon} />
                                                    <span>
                                                        info@trustgroup.in
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <img src={location_icon} />
                                                <span>
                                                    1202, Naman Center, BKC, Bandra (East), Mumbai - 400051
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="ft-list">
                                        <h3>Our Offerings</h3>
                                        <div className="line" />
                                        <ul>
                                            <li>
                                                <a href="primary-offerings">Primary Offerings</a>
                                            </li>
                                            <li>
                                                <a href="other-offerings">Other Offerings</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="ft-list">
                                        <h3>About Trust</h3>
                                        <div className="line" />
                                        <ul>
                                            <li>
                                                <a href="about-us.html">About Us</a>
                                            </li>
                                            <li>
                                                <a href="download.html">Downloads</a>
                                            </li>
                                            <li>
                                                <a href="faq.html">FAQs</a>
                                            </li>
                                            <li>
                                                <a href="awards.html">Awards</a>
                                            </li>
                                            <li>
                                                <a href="contact-us.html">Contact Us</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="ft-list m-0">
                                <h3>Newsletter</h3>
                                <div className="line" />
                                <div className="newsletter">
                                    <p className="text">
                                        Get latest updates and offers.
                                    </p>
                                    <form>
                                        <div className="nws-box p-relative">
                                            <input
                                                id="newsletter"
                                                name=""
                                                placeholder="Enter your email address"
                                                required
                                                title="Please fill out email id"
                                                type="email"
                                            />
                                            <button
                                                className="btn btn-primary"
                                                type="submit"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div className="social-icon mt-1">
                                    <a
                                        href="https://www.linkedin.com/company/trust-group-india"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img height="45" src={linked_in_logo} width="45" />
                                    </a>
                                    <a
                                        href="https://twitter.com/TRUSTGrp_India"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img height="45" src={twitter_logo} width="45" />
                                    </a>
                                    <a
                                        href="https://www.facebook.com/TRUST-1805221439701191"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img height="45" src={facebook_logo} width="45" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="divider" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="disclaimer">
                                <p className="font14">
                                    TRUST SECURITIES SERVICES PVT. LTD. a member of BSE. SEBI Regn. No. INZ000158031. CIN: U65929MH2016PTC287266. Regd. Office: 109/110, BALARAMA, BANDRA KURLA COMPLEX, BANDRA (EAST), MUMBAI-400051; Phone: +91 22 26567536 TRUST SECURITIES SERVICES PVT. LTD is a distributor of IPO’s. AMFI Registration ARMFA: ARN – 138077 Trading and investments in Equities and other securities are subject to market risk; there is no assurance or guarantee of the returns. Please read the Risk Disclosure Document and Do's & Dont's prescribed by the Exchanges carefully before investing.
                                </p>
                                <p className="mt-1">
                                    In order to download rights & obligations, uniform risk disclosure document, do’s & don’t in vernacular languages please visit
                                    <br />
                                    <a
                                        href="https://www.bseindia.com/static/investors/client_regislanguages.aspx?expandable=3"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        https://www.bseindia.com/static/investors/client_regislanguages.aspx?expandable=3
                                    </a>
                                </p>
                                <p className="mt-1">
                                    <strong>Disclaimer</strong>
                                    <br />
                                    Investments in debt securities/ municipal debt securities/ securitised debt instruments are subject to risks including delay and/ or default in payment. Read all the offer related documents carefully
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright mt-2 bondsDTL">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <p className="cp-list">
                                    ©{' '}
                                    <span id="fullYear" />
                                    {' '}All Rights Reserved.
                                </p>
                            </div>
                            <div className="col-lg-6">
                                <ul className="cp-list">
                                    <li>
                                        <a href="terms-of-use">Terms of use</a>
                                    </li>
                                    <li>
                                        <a href="disclaimer">Disclaimer</a>
                                    </li>
                                    <li>
                                        <a href="privacy-policy">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="regulatory-disclosures">Regulatory Disclosures</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="fixed-btm">
                <a
                    href="https://wa.me/+918839514698?text=I want to buy bond online"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img alt="WhatsApp" src={whatsapp_icon} />
                </a>
                <a href="#" id="scrollTop">
                    <img src={up_arrow_icon} />
                </a>
            </div>
        </>
    );
};

export default Footer;
