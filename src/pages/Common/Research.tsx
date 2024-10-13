import home_icon from '@assets/home-icon.svg'; 
import research_1 from '@assets/r-1.jpg'; 
import research_2 from '@assets/r-2.jpg'; 
import research_3 from '@assets/r-3.jpg'; 
import research_4 from '@assets/r-4.jpg'; 
import calendar_icon from '@assets/calendar-icon.svg'; 

const Research: React.FC = () => {
    return (
      <>
        <div>
  <section className="main-section banner-img research">
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
              <a href="index.html">
                <img
                  alt="home icon"
                  src={home_icon}
                />
              </a>
            </li>
            <li>
              <span>
                Research
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section className="faq-section primary-bonds-section pb-2">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="heading-box">
            <div className="text-center">
              <h2 className="title">
                <span>
                  Research
                </span>
              </h2>
              <div className="gradient-line" />
              <p className="text">
                Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row bonds-list">
        <div className="col-lg-4 col-sm-6">
          <a
            className="bonds-card box-link"
            href="pre-and-post-monetary-policy-reviews-reports-2022.html"
          >
            <div className="full-img">
              <figure>
                <img
                  height="359"
                  src={research_1}
                  width="360"
                />
                <figcaption className="caption-details">
                  <h3>
                    Pre & Post Monetary Policy Reviews - Reports
                  </h3>
                  <div className="b-bottom gradient divider" />
                  <div className="mt-1">
                    <button className="btn btn-border border-gradient">
                      <img src={calendar_icon} />
                      {' '}2022
                    </button>
                  </div>
                </figcaption>
              </figure>
            </div>
          </a>
        </div>
        <div className="col-lg-4 col-sm-6">
          <a
            className="bonds-card box-link"
            href="pre-and-post-monetary-policy-reviews-reports-2021.html"
          >
            <div className="full-img">
              <figure>
                <img
                  height="359"
                  src={research_2}
                  width="360"
                />
                <figcaption className="caption-details">
                  <h3>
                    Pre & Post Monetary Policy Reviews - Reports
                  </h3>
                  <div className="b-bottom gradient divider" />
                  <div className="mt-1">
                    <button className="btn btn-border border-gradient">
                      <img src={calendar_icon}/>
                      {' '}2021
                    </button>
                  </div>
                </figcaption>
              </figure>
            </div>
          </a>
        </div>
        <div className="col-lg-4 col-sm-6">
          <a
            className="bonds-card box-link"
            href="pre-and-post-monetary-policy-reviews-reports-2020-new.html"
          >
            <div className="full-img">
              <figure>
                <img
                  height="359"
                  src={research_3}
                  width="360"
                />
                <figcaption className="caption-details">
                  <h3>
                    Pre & Post Monetary Policy Reviews - Reports
                  </h3>
                  <div className="b-bottom gradient divider" />
                  <div className="mt-1">
                    <button className="btn btn-border border-gradient">
                      <img src={calendar_icon} />
                      {' '}2020
                    </button>
                  </div>
                </figcaption>
              </figure>
            </div>
          </a>
        </div>
        <div className="col-lg-4 col-sm-6">
          <a
            className="bonds-card box-link"
            href="credit-research-reports-2022.html"
          >
            <div className="full-img">
              <figure>
                <img
                  height="359"
                  src={research_4}
                  width="360"
                />
                <figcaption className="caption-details">
                  <h3>
                    Credit Research - Reports
                  </h3>
                  <div className="b-bottom gradient divider" />
                  <div className="mt-1">
                    <button className="btn btn-border border-gradient">
                      <img src={calendar_icon} />
                      {' '}2019
                    </button>
                  </div>
                </figcaption>
              </figure>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</div>
      </>
    )
}

export default Research