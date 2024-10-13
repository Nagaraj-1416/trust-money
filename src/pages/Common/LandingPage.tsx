import search_icon from '@assets/search-icon.svg'; 
import document_icon from '@assets/documents-icon.svg'; 
import choose_icon from '@assets/choose-icon.svg'; 
import wallet_icon from '@assets/wallet-icon.svg'; 
import default_icon from '@assets/default-icon.jpg'; 
import nine_dots_icon from '@assets/nine-dots-icon.svg'; 
import award_icon from '@assets/award-icon.svg'; 
import award_small_icon from '@assets/award-small-icon.svg'; 
import about_user_icon from '@assets/about-user-icon.svg'; 
import about_expirence_icon from '@assets/about-experience-icon.svg'; 
import about_award_icon from '@assets/about-award-icon.svg'; 
import why_image_1 from '@assets/why-1.jpg'; 
import why_image_2 from '@assets/why-2.jpg'; 
import why_image_3 from '@assets/why-3.jpg'; 
import why_image_4 from '@assets/why-4.jpg'; 
import why_image_5 from '@assets/why-5.jpg'; 
import why_image_6 from '@assets/why-6.jpg';  
import update_1 from '@assets/update-1.jpg';  
import update_2 from '@assets/update-2.jpg';  
import update_3 from '@assets/update-3.jpg';  
import Carousel from 'react-multi-carousel';
// import profile_icon from '@assets/profile.svg'; 
// import banner_image from '@assets/ad-1.jpg'; 

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
        <div className="bonds-card me-1">
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
        <div className="bonds-card me-1">
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
        <div className="bonds-card me-1">
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
        <div className="bonds-card me-1">
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
            <h2 className="title">
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
    </>
  )
}

export default LandingPage