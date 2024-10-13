import home_icon from '@assets/home-icon.svg'; 
import nipa_sheth from '@assets/nipa-sheth.png'; 
import pranav_inamndar from '@assets/pranav-inamdar.png'; 
import about_user_icon from '@assets/about-user-icon.svg'; 
import about_expirence_icon from '@assets/about-experience-icon.svg'; 
import about_award_icon from '@assets/about-award-icon.svg'; 
import linked_in_logo from '@assets/linkedin.svg'; 
import twitter_logo from '@assets/twitter.svg'; 
import facebook_logo from '@assets/facebook.svg';

const AboutUS: React.FC = () => {
    return (
<>
<div>
  <section className="main-section banner-img about-us">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="heading-box">
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="breadcrumb-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <ul className="breadcrumb flex-wrap flex-center">
            <li>
              <a href="/">
                <img
                  alt="home icon"
                  src={home_icon}
                />
              </a>
            </li>
            <li>
              <span>
                About Us
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section className="about-us-page primary-bonds-section pb-2">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="heading-box">
            <div className="text-center">
              <h2 className="title">
                About{' '}
                <span>
                  Us
                </span>
              </h2>
              <div className="gradient-line" />
              <p className="text brand-color">
                Trust Securities Services is the Non-Institutional Clientele vertical of one of India's leading full-service financial houses, TRUST Group.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 col-sm-12 about-text">
          <p className="text">
            Under the parentage and market leadership of TRUST Group, Trust Securities services was incorporated in 2015 to serve as a 'one stop shop for financial products' across ticket sizes and client genre.
          </p>
          <p className="text">
            We wear the genesis of Trust Group as our emblem of pride, translating over 15 years of experience and a multitude of accolades to our name; we assure perennial partnerships and high value addition, with you, for you.
          </p>
          <p className="text">
            As a proactive debt specialist pioneering the Indian DCM market, Trust Securities services is present across the value chain with direct access to a plethora of debt, quasi-debt and quasi-equity products.
          </p>
          <p className="text">
            We are a TRUSTed partner and innovator having proficiency across a repertoire of Fixed Income services encapsulating debt fund raising needs. From arranging to end execution of primary issuances to facilitation and through secondary market deliveries, we service all denominations suited to whole investment quantum - from retail to corporate.
          </p>
          <p className="text">
            Comprehensively equipped with rich experience, a seasoned managerial team, insightful investment advisory and holistic pan India reach, Trust Securities services aims to be your go-to investment house for all your fixed income needs.
          </p>
        </div>
        <div className="col-lg-6 col-sm-12" />
      </div>
    </div>
  </section>
  <section className="our-team-sectin pb-2 bg-white">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="heading-box">
            <div className="text-center">
              <h2 className="title">
                Our{' '}
                <span>
                  Team
                </span>
              </h2>
              <div className="gradient-line" />
            </div>
          </div>
        </div>
      </div>
      <div className="row card-listing">
        <div className="col-lg-6">
          <div className="bonds-card">
            <div className="p-20">
              <div className="flex-wrap p-relative">
                <div className="brand-img">
                  <img src={nipa_sheth} />
                </div>
                <div className="ml-1 index-btn">
                  <div className="b-title">
                    <h3 className="brand-color">
                      Nipa Sheth
                    </h3>
                    <p>
                      Founder Director of Trust Group
                    </p>
                  </div>
                  <div className="b-bottom gradient divider" />
                  <p className="text-1">
                    Seldom do men and women in the Bond market make it to front pages. Nipa Sheth the founder Director of Trust Group is one such persona. She is a CA gold medalist and a CFA.
                  </p>
                  <div className="mt-2">
                    <a
                      className="btn btn-border border-gradient st-open-modal"
                      href="#nipaSheth"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <ul className="social-connect">
                <li>
                  <a href="#">
                    <img
                      alt="linkedin"
                      src={linked_in_logo}
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      alt="Twitter"
                      src={twitter_logo}
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      alt="Facebook"
                      src={facebook_logo}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="bonds-card">
            <div className="p-20">
              <div className="flex-wrap p-relative">
                <div className="brand-img">
                  <img src={pranav_inamndar}/>
                </div>
                <div className="ml-1 index-btn">
                  <div className="b-title">
                    <h3 className="brand-color">
                      Pranav Inamdar
                    </h3>
                    <p>
                      Director of Trust Group & Trust Securities
                    </p>
                  </div>
                  <div className="b-bottom gradient divider" />
                  <p className="text-1">
                    Pranav Inamdar, Director of Trust Group & Trust Securities services, is one of the founder member of Trust Securities services and drives a national network of niche relationships at Trust Group..
                  </p>
                  <div className="mt-2">
                    <a
                      className="btn btn-border border-gradient st-open-modal"
                      href="#pranavInamdar"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <ul className="social-connect">
                <li>
                  <a href="#">
                    <img
                      alt="linkedin"
                      src={linked_in_logo}
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      alt="Twitter"
                      src={twitter_logo}
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      alt="Facebook"
                      src={facebook_logo}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="about-section pb-2">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="heading-box index-btn p-relative">
            <div className="text-center">
              <h2 className="title">
                Why customer{' '}
                <span>
                  love us
                </span>
              </h2>
              <div className="about-border mt-1">
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
              13750+
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
              20+
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
              12+
            </h3>
            <p className="font14 white-text">
              Awards
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</>
)
}

export default AboutUS