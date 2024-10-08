import location_icon from '../assets/location-icon.svg'; 
import email_icon from '../assets/email-icon.svg'; 
import call_icon from '../assets/call-icon.svg'; 
import trust_logo from '../assets/trust-logo.jpg'; 
import search_icon from '../assets/search-icon.svg'; 
import document_icon from '../assets/documents-icon.svg'; 
import choose_icon from '../assets/choose-icon.svg'; 
import wallet_icon from '../assets/wallet-icon.svg'; 
import default_icon from '../assets/default-icon.jpg'; 
import nine_dots_icon from '../assets/nine-dots-icon.svg'; 
import award_icon from '../assets/award-icon.svg'; 
import award_small_icon from '../assets/award-small-icon.svg'; 
import about_user_icon from '../assets/about-user-icon.svg'; 
import about_expirence_icon from '../assets/about-experience-icon.svg'; 
import about_award_icon from '../assets/about-award-icon.svg'; 
import trust_footer_logo from '../assets/trust-securities-footer-logo.svg'; 
import linked_in_logo from '../assets/linkedin.svg'; 
import twitter_logo from '../assets/twitter.svg'; 
import facebook_logo from '../assets/facebook.svg'; 
import why_image_1 from '../assets/why-1.jpg'; 
import why_image_2 from '../assets/why-2.jpg'; 
import why_image_3 from '../assets/why-3.jpg'; 
import why_image_4 from '../assets/why-4.jpg'; 
import why_image_5 from '../assets/why-5.jpg'; 
import why_image_6 from '../assets/why-6.jpg';  
import update_1 from '../assets/update-1.jpg';  
import update_2 from '../assets/update-2.jpg';  
import update_3 from '../assets/update-3.jpg';  
import Carousel from 'react-multi-carousel';
import whatsapp_icon from '../assets/whatsApp.svg'; 
import up_arrow_icon from '../assets/up-arrow-icon.svg'; 
// import profile_icon from '../assets/profile.svg'; 
// import banner_image from '../assets/ad-1.jpg'; 

const LandingPage = () => {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1600 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 1600, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1
    }
  };

  const liveRatesResponsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 5 
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };
  return (
    <>
      <section className="top-header">
            <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="flex-wrap flex-center">
          <ul className="top-nav flex-wrap">
            <li>
              <a href="">
                Downloads
              </a>
            </li>
            <li>
              <a href="">
                FAQs
              </a>
            </li>
            <li>
              <a href="">
                About Us
              </a>
            </li>
            <li>
              <a href="">
                Contact Us
              </a>
            </li>
          </ul>
          <ul className="top-nav flex-wrap ml-auto text-right">
            <li className="border-r">
              <img src={location_icon}/>
              <span>
                Mumbai (Corporate Office)
              </span>
            </li>
            <li>
              <img src={email_icon} />
              <span>
                <a href="mailto:info@trustgroup.in">
                  info@trustgroup.in
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
            </div>
      </section>
      <section className="main-header">
        <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="flex-wrap flex-center">
          <div className="brand">
            <a href="">
              <img
                alt="Trust Securities"
                className="img-fluid"
                height="63"
                src={trust_logo}
                width="117"
              />
            </a>
          </div>
          <div className="toggleMenu hidden-xs ml-auto">
            <span />
            <span />
            <span />
          </div>
          <ul className="ml-auto main-nav flex-wrap flex-center">
            <li>
              <a href="">
                Explore all bonds
              </a>
            </li>
            <li>
              <a href="">
                Primary Bonds
              </a>
            </li>
            <li>
              <a
                href=""
              >
                Our Offerings
              </a>
            </li>
            <li className="btn-dist">
                <a
                  className="btn btn-border border-gradient"
                  href="/login"
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  className="btn btn-primary"
                  href="/register"
                >
                  Sign up
                </a>
              </li>
          </ul>
        </div>
      </div>
    </div>
        </div>
      </section>

      <div className="info-sticky" id="marketinfo" >
          <div className="container-fluid">
    <div className="row">
      <div className="col-lg-12 p-0">
        <p className="info-txt">
          These are not LIVE rates, Rates can change in real time
        </p>
        <div className="square-card">
      <Carousel 
        responsive={liveRatesResponsive}
        swipeable={false} 
        draggable={false} 
        showDots={false} 
        infinite={false}
        autoPlay={false}
        keyBoardControl={true}
        removeArrowOnDeviceType={["tablet", "mobile","Laptop"]}
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px mt-1 mb-3"
      >
        <div className="item oil liveratesfont">
          <p>Oil (WTI Crude)</p>
          <h3>74.69</h3>
        </div>
        <div className="item treasury liveratesfont">
          <p>US Treasury Notes (10year)</p>
          <h3>3.53%</h3>
        </div>
        <div className="item money-market liveratesfont">
          <p>Money Market T-Bills (India/91days)</p>
          <h3>6.36%</h3>
        </div>
        <div className="item bond-yield liveratesfont">
          <p>10 Year Gov Bond Yield</p>
          <h3>7.333%</h3>
        </div>
        <div className="item usd-inr liveratesfont">
          <p>USD/INR</p>
          <h3>81.752</h3>
        </div>
      </Carousel>
    </div>
        {/* <div className="square-card ">
          <div className="p-1">
              <div id="marketInfo">
                <div className="item">
                  <div>
                    <p>
                      Oil (WTI Crude)
                    </p>
                    <h3>
                      74.69
                    </h3>
                  </div>
                </div>
                <div className="item">
                  <div>
                    <p>
                      US Treasury Notes (10year)
                    </p>
                    <h3>
                      3.53%
                    </h3>
                  </div>
                </div>
                <div className="item">
                  <div >
                    <p>
                      Money Market T-Bills (India/91days)
                    </p>
                    <h3>
                      6.36%
                    </h3>
                  </div>
                </div>
                <div className="item">
                  <div >
                    <p>
                      10 Year Gov Bond Yield
                    </p>
                    <h3>
                      7.333%
                    </h3>
                  </div>
                </div>
                <div className="item">
                  <div>
                    <p>
                      USD/INR
                    </p>
                    <h3>
                      81.752
                    </h3>
                  </div>
                </div>
              </div>
          </div>
        </div> */}
      </div>
    </div>
          </div>
       </div>

       <section className="animate-box" id="search_section" >
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="heading-box">
          <div className="text-center">
            <h1 className="title">
              Bond Investment{' '}
              <span>
                Made Easy
              </span>
            </h1>
            <div className="gradient-line" />
            <p className="text f">
              Bond investment made easy with Trust Securities online platforms, low fees, and diversified bond ETFs.
            </p>
          </div>
          <div className="search-box p-relative mt-1 s">
            <div>
              <input
                className="search-input"
                id="search_bond"
                name="search_bond"
                placeholder="Search by ISIN / Issuer / Company"
                type="search"
              />
              <div className="s-icon">
                <img src={search_icon} />
              </div>
            </div>
            <div
              className="search-mode"
              id="searchBox"
            >
              <ul
                className="search-list overflow-item"
                id="seachItems"
              >
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
       </section>

       <section className="steps-section pb-2 bg-white animate-box" id="steps_section" >
          <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="heading-box">
          <div className="text-center">
            <h2 className="title">
              Invest in{' '}
              <span>
                3 Simple Steps
              </span>
            </h2>
            <div className="gradient-line" />
          </div>
        </div>
      </div>
    </div>
    <div className="row text-center bg-curve-line">
      <div className="col-lg-4">
        <div className="step-box ">
          <img
            alt="Complete Kyc"
            src={document_icon}
          />
          <h3 className="mt-1 title-3">
            Complete Kyc
          </h3>
          <p className="text f">
            Upload your documents online
          </p>
        </div>
      </div>
      <div className="col-lg-4 lg-mt-1">
        <div className="step-box ">
          <img
            alt="Choose Bonds"
            src={choose_icon}
          />
          <h3 className="mt-1 title-3">
            Choose Bonds
          </h3>
          <p className="text s">
            Select Bonds which matches your investment objective
          </p>
        </div>
      </div>
      <div className="col-lg-4 lg-mt-1">
        <div className="step-box ">
          <img
            alt="Choose Bonds"
            src={wallet_icon}
          />
          <h3 className="mt-1 title-3">
            Do the Payment
          </h3>
          <p className="text">
            Pay online and receive bonds in your demate account
          </p>
        </div>
      </div>
    </div>
    <div className="row text-center mt-2">
      <div className="col-lg-12 index-btn">
        <a
          className="btn btn-border border-gradient"
          href="#"
        >
          Get started
        </a>
      </div>
    </div>
          </div>
       </section>

       <section className="invest-bond pb-2 animate-box" id="invest_section">
           <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="heading-box">
          <div className="text-center">
            <h2 className="title">
              Invest in{' '}
              <span>
                Bonds
              </span>
            </h2>
            <div className="gradient-line" />
            <p className="text">
              Invest in bonds to diversify your portfolio and reduce overall investment risk.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="margin-inline-minus-15">
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={false}
        autoPlay={false}
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px"
      >
        {/* Static Bond Card 1 */}
        <div className="bonds-card">
          <div className="brand-blur" style={{ backgroundImage: `url('images/brands/default-icon2.jpg')` }} />
          <div className="p-15 p-relative b-title">
            <div className="flex-wrap flex-center">
              <div className="brand-img">
                <img src={default_icon} alt="Some Finance Limited logo" />
              </div>
              <div className="b-title list-title">
                <h3>Some Finance Limited</h3>
              </div>
            </div>
          </div>
          <div className="p-15">
            <div className="row">
              <div className="col-6">
                <div className="b-details">
                  <p>Date Of Maturity</p>
                  <h3>10-Dec-2026</h3>
                </div>
              </div>
              <div className="col-6">
                <div className="b-details">
                  <p>Rating</p>
                  <h3>AAA</h3>
                </div>
              </div>
            </div>
            <div className="row mt-1">
              <div className="col-6">
                <div className="b-details">
                  <p>Interest Rate</p>
                  <h3>9.25%</h3>
                </div>
              </div>
              <div className="col-6">
                <div className="b-details">
                  <p>Interest Date</p>
                  <h3>01-Jun-2024</h3>
                </div>
              </div>
            </div>
            <div className="flex-wrap index-btn mt-1 p-relative">
              <a className="btn btn-border border-gradient d-block" href="bond/INE0XYZ09123">
                Invest Now
              </a>
            </div>
          </div>
        </div>
        
        {/* Static Bond Card 2 */}
        <div className="bonds-card">
          <div className="brand-blur" style={{ backgroundImage: `url('images/brands/default-icon2.jpg')` }} />
          <div className="p-15 p-relative b-title">
            <div className="flex-wrap flex-center">
              <div className="brand-img">
                <img src={default_icon} alt="Some Finance Limited logo" />
              </div>
              <div className="b-title list-title">
                <h3>Some Finance Limited</h3>
              </div>
            </div>
          </div>
          <div className="p-15">
            <div className="row">
              <div className="col-6">
                <div className="b-details">
                  <p>Date Of Maturity</p>
                  <h3>10-Dec-2026</h3>
                </div>
              </div>
              <div className="col-6">
                <div className="b-details">
                  <p>Rating</p>
                  <h3>AAA</h3>
                </div>
              </div>
            </div>
            <div className="row mt-1">
              <div className="col-6">
                <div className="b-details">
                  <p>Interest Rate</p>
                  <h3>9.25%</h3>
                </div>
              </div>
              <div className="col-6">
                <div className="b-details">
                  <p>Interest Date</p>
                  <h3>01-Jun-2024</h3>
                </div>
              </div>
            </div>
            <div className="flex-wrap index-btn mt-1 p-relative">
              <a className="btn btn-border border-gradient d-block" href="bond/INE0XYZ09123">
                Invest Now
              </a>
            </div>
          </div>
        </div>

        {/* Static Bond Card 3 */}
        <div className="bonds-card">
          <div className="brand-blur" style={{ backgroundImage: `url('images/brands/default-icon2.jpg')` }} />
          <div className="p-15 p-relative b-title">
            <div className="flex-wrap flex-center">
              <div className="brand-img">
                <img src={default_icon} alt="Some Finance Limited logo" />
              </div>
              <div className="b-title list-title">
                <h3>Some Finance Limited</h3>
              </div>
            </div>
          </div>
          <div className="p-15">
            <div className="row">
              <div className="col-6">
                <div className="b-details">
                  <p>Date Of Maturity</p>
                  <h3>10-Dec-2026</h3>
                </div>
              </div>
              <div className="col-6">
                <div className="b-details">
                  <p>Rating</p>
                  <h3>AAA</h3>
                </div>
              </div>
            </div>
            <div className="row mt-1">
              <div className="col-6">
                <div className="b-details">
                  <p>Interest Rate</p>
                  <h3>9.25%</h3>
                </div>
              </div>
              <div className="col-6">
                <div className="b-details">
                  <p>Interest Date</p>
                  <h3>01-Jun-2024</h3>
                </div>
              </div>
            </div>
            <div className="flex-wrap index-btn mt-1 p-relative">
              <a className="btn btn-border border-gradient d-block" href="bond/INE0XYZ09123">
                Invest Now
              </a>
            </div>
          </div>
        </div>

        {/* Static Bond Card 4 */}
        <div className="bonds-card">
          <div className="brand-blur" style={{ backgroundImage: `url('images/brands/default-icon2.jpg')` }} />
          <div className="p-15 p-relative b-title">
            <div className="flex-wrap flex-center">
              <div className="brand-img">
                <img src={default_icon} alt="Some Finance Limited logo" />
              </div>
              <div className="b-title list-title">
                <h3>Some Finance Limited</h3>
              </div>
            </div>
          </div>
          <div className="p-15">
            <div className="row">
              <div className="col-6">
                <div className="b-details">
                  <p>Date Of Maturity</p>
                  <h3>10-Dec-2026</h3>
                </div>
              </div>
              <div className="col-6">
                <div className="b-details">
                  <p>Rating</p>
                  <h3>AAA</h3>
                </div>
              </div>
            </div>
            <div className="row mt-1">
              <div className="col-6">
                <div className="b-details">
                  <p>Interest Rate</p>
                  <h3>9.25%</h3>
                </div>
              </div>
              <div className="col-6">
                <div className="b-details">
                  <p>Interest Date</p>
                  <h3>01-Jun-2024</h3>
                </div>
              </div>
            </div>
            <div className="flex-wrap index-btn mt-1 p-relative">
              <a className="btn btn-border border-gradient d-block" href="bond/INE0XYZ09123">
                Invest Now
              </a>
            </div>
          </div>
        </div>

        {/* Add more static bond cards here */}
      </Carousel>
    </div>
    <div className="row text-center mt-1">
      <div className="col-lg-12 index-btn">
        <a
          className="btn btn-border border-gradient"
          href="bonds-list"
        >
          <img
            src={nine_dots_icon}
            style={{
              width: '11px !important'
            }}
          />
          {' '}View All
        </a>
      </div>
    </div>
           </div>
        </section>

        <section className="why-invest bg-white pb-2 animate-box" id="why_section">
             <div className="container">
               <div className="row">
      <div className="col-lg-12">
        <div className="heading-box">
          <div className="text-center">
            <h2 className="title fade">
              Why Invest in{' '}
              <span>
                Bonds
              </span>
            </h2>
            <div className="gradient-line" />
            <p className="text">
              Bonds provide stability and predictable income for investors.
            </p>
          </div>
        </div>
      </div>
               </div>
               <div className="row">
      <div className="col-lg-4 col-sm-6">
        <div className="bonds-card">
          <div className="full-img">
            <figure>
              <img
                height="359"
                src={why_image_1}
                width="360"
              />
              <figcaption className="caption-details">
                <h3 className="">
                  Diversification
                </h3>
                <p className="mt-1">
                  Bonds can be useful for those who need to reduce their tax.
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6">
        <div className="bonds-card">
          <div className="full-img ">
            <figure>
              <img
                height="359"
                src={why_image_2}
                width="360"
              />
              <figcaption className="caption-details">
                <h3 className="">
                  Tax Advantage
                </h3>
                <p className="mt-1">
                  Bonds help diversify the overall portfolio because of their low correlation to other asset classes.
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6">
        <div className="bonds-card">
          <div className="full-img">
            <figure>
              <img
                height="359"
                src={why_image_3}
                width="360"
              />
              <figcaption className="caption-details">
                <h3 className="">
                  Easily Predictable
                </h3>
                <p className="mt-1">
                  Bonds help diversify the overall portfolio because of their low correlation to other asset classes.
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6">
        <div className="bonds-card">
          <div className="full-img">
            <figure>
              <img
                height="359"
                src={why_image_4}
                width="360"
              />
              <figcaption className="caption-details ">
                <h3 className="">
                  Income Stream
                </h3>
                <p className="mt-1">
                  Bonds tend to offer the highest and most stable cash streams.
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6">
        <div className="bonds-card">
          <div className="full-img">
            <figure>
              <img
                height="359"
                src={why_image_5}
                width="360"
              />
              <figcaption className="caption-details">
                <h3 className="">
                  Security & Safety
                </h3>
                <p className="mt-1">
                  Bonds tend to offer the highest and most stable cash streams.
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6">
        <div className="bonds-card">
          <div className="full-img">
            <figure>
              <img
                height="359"
                src={why_image_6}
                width="360"
              />
              <figcaption className="caption-details">
                <h3 className="">
                  Inflation Protection
                </h3>
                <p className="mt-1">
                  Floating rate bonds tend to have their payout rise in response to upticks in interest rates caused by rising inflation
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
               </div>
               <div className="row text-center mt-1">
                 <div className="col-lg-12 index-btn">
                   <a
                     className="btn btn-border border-gradient"
                     href="about-us"
                   >
                     Know more
                   </a>
                 </div>
               </div>
             </div>
        </section>

        <section className="about-section pb-2 counter-box animate-box" id="about_section">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="heading-box index-btn p-relative">
          <div className="text-center">
            <h2 className="title">
              About{' '}
              <span>
                Us
              </span>
            </h2>
            <div className="gradient-line" />
            <p className="text">
              Trust Securities Services is the Non-Institutional Clientele vertical of one of India's leading full-service financial houses, TRUST Group.
            </p>
            <div className="about-border">
              <span>
                Lead Arranger to all marquee debt IPO
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row text-center">
      <div className="col-lg-4 col-sm-6">
        <div className="abt-wrap">
          <img
            alt="Users trust us"
            className="mb-2"
            height="91"
            src={about_user_icon}
            width="91"
          />
          <h3 className="title m-0">
            <span className="counter">
              13750
            </span>
            +
          </h3>
          <p className="font14 white-text">
            Users trust us
          </p>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6">
        <div className="abt-wrap">
          <img
            alt="Users trust us"
            className="mb-2"
            height="91"
            src={about_expirence_icon}
            width="91"
          />
          <h3 className="title m-0">
            <span className="counter">
              20
            </span>
            +
          </h3>
          <p className="font14 white-text">
            Years of experience
          </p>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6">
        <div className="abt-wrap">
          <img
            alt="Users trust us"
            className="mb-2"
            height="91"
            src={about_award_icon}
            width="91"
          />
          <h3 className="title m-0">
            <span className="counter">
              0
            </span>
            +
          </h3>
          <p className="font14 white-text">
            Awards
          </p>
        </div>
      </div>
    </div>
    <div className="row text-center mt-2">
      <div className="col-lg-12 index-btn">
        <a
          className="btn btn-border border-gradient"
          href="about-us"
        >
          Know more
        </a>
      </div>
    </div>
  </div>
         </section>

         <section  className="why-invest bg-white pb-2 animate-box"  id="update_section">
           <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="heading-box">
          <div className="text-center">
            <h2 className="title">
              Latest{' '}
              <span>
                Updates
              </span>
            </h2>
            <div className="gradient-line" />
            <p className="text">
              News and developments related to debt securities trading and markets.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4 col-sm-6">
        <div className="bonds-card">
          <div className="full-img">
            <figure>
              <img
                height="427"
                src={update_1}
                width="360"
              />
              <figcaption className="caption-details">
                <h3 className="">
                  Research
                </h3>
                <p className="mt-1">
                  Debt market research analyzes financial instruments, market trends, risk factors, and investment opportunities in debt markets.
                </p>
                <div className="index-btn mt-1">
                  <a
                    className="btn btn-border border-gradient"
                    href="research"
                  >
                    Know more
                  </a>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6">
        <div className="bonds-card">
          <div className="full-img">
            <figure>
              <img
                height="427"
                src={update_2}
                width="360"
              />
              <figcaption className="caption-details">
                <h3 className="">
                  Debt IPO Update
                </h3>
                <p className="mt-1">
                  Debt IPOs refer to the initial public offerings of debt securities by companies, governments, or financial institutions to raise capital.
                </p>
                <div className="index-btn mt-1">
                  <a
                    className="btn btn-border border-gradient"
                    href="primary-bonds"
                  >
                    Know more
                  </a>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6">
        <div className="bonds-card">
          <div className="full-img">
            <figure>
              <img
                height="427"
                src={update_3}
                width="360"
              />
              <figcaption className="caption-details">
                <h3 className="">
                  Market Info
                </h3>
                <p className="mt-1">
                  Debt market info covers trading of debt securities such as bonds, treasury bills, and commercial papers, including market trends and prices.
                </p>
                <div className="index-btn mt-1">
                  <a
                    className="btn btn-border border-gradient"
                    href="market-info"
                  >
                    Know more
                  </a>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
           </div>
         </section>

        <section  className="award-section pb-2 animate-box" id="award_section">
          <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="heading-box">
          <div className="text-center">
            <div className="mb-2">
              <img
                alt="Award"
                src={award_icon}
              />
            </div>
            <h2 className="title">
              Awards &{' '}
              <span>
                Recognition
              </span>
            </h2>
            <div className="gradient-line" />
            <p className="text">
              Celebrating achievements and honoring individuals or organizations for exceptional performance or contribution.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
    </div>
    <div className="row text-center mt-1">
      <div className="col-lg-12 index-btn">
        <a
          className="btn btn-border border-gradient"
          href="awards"
        >
          <img src={award_small_icon} />
          {' '}View All Awards
        </a>
      </div>
    </div>
          </div>
        </section>

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
              <h3>
                Our Offerings
              </h3>
              <div className="line" />
              <ul>
                <li>
                  <a href="primary-offerings">
                    Primary Offerings
                  </a>
                </li>
                <li>
                  <a href="other-offerings">
                    Other Offerings
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="ft-list">
              <h3>
                About Trust
              </h3>
              <div className="line" />
              <ul>
                <li>
                  <a href="about-us.html">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="download.html">
                    Downloads
                  </a>
                </li>
                <li>
                  <a href="faq.html">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="awards.html">
                    Awards
                  </a>
                </li>
                <li>
                  <a href="contact-us.html">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6">
        <div className="ft-list m-0">
          <h3>
            Newsletter
          </h3>
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
            >
              <img
                height="45"
                src={linked_in_logo}
                width="45"
              />
            </a>
            <a
              href="https://twitter.com/TRUSTGrp_India"
              target="_blank"
            >
              <img
                height="45"
                src={twitter_logo}
                width="45"
              />
            </a>
            <a
              href="https://www.facebook.com/TRUST-1805221439701191"
              target="_blank"
            >
              <img
                height="45"
                src={facebook_logo}
                width="45"
              />
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
            TRUST SECURITIES SERVICES PVT. LTD. a member of BSE. SEBI Regn. No. INZ000158031. CIN: U65929MH2016PTC287266. Regd. Office: 109/110, BALARAMA, BANDRA KURLA COMPLEX, BANDRA (EAST), MUMBAI-400051 ; Phone: +91 22 26567536 TRUST SECURITIES SERVICES PVT. LTD is a distributor of IPO’s. AMFI Registration ARMFA: ARN – 138077 Trading and investments in Equities and other securities are subject to market risk, there is no assurance or guarantee of the returns. Please read the Risk Disclosure Document and Do's & Dont's prescribed by the Exchanges carefully before investing.
          </p>
          <p className="mt-1">
            In order to download rights & obligations, uniform risk disclosure document, do’s & don’t in vernacular languages please visit
            <br />
            <a
              href="https://www.bseindia.com/static/investors/client_regislanguages.aspx?expandable=3"
              target="_blank"
            >
              https://www.bseindia.com/static/investors/client_regislanguages.aspx?expandable=3
            </a>
          </p>
          <p className="mt-1">
            <strong>
              Disclaimer
            </strong>
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
              <a href="terms-of-use">
                Terms of use
              </a>
            </li>
            <li>
              <a href="disclaimer">
                Disclaimer
              </a>
            </li>
            <li>
              <a href="privacy-policy">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="regulatory-disclosures">
                Regulatory Disclosures
              </a>
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
  >
    <img
      alt="whatsApp"
      src={whatsapp_icon}
    />
  </a>
  <a
    href="#"
    id="scrollTop"
  >
    <img src={up_arrow_icon} />
  </a>
</div>
    </>
  )
}

export default LandingPage