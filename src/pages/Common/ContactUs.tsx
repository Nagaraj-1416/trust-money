import home_icon from '@assets/home-icon.svg'; 
import location_br_icon from '@assets/location-br-icon.svg'; 
import email_br_icon from '@assets/email-br-icon.svg'; 
import call_br_icon from '@assets/call-br-icon.svg'; 

const ContactUs: React.FC = () => {
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
                Contact Us
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
                Contact{' '}
                <span>
                  Us
                </span>
              </h2>
              <div className="gradient-line" />
            </div>
          </div>
        </div>
      </div>
      <div className="row bonds-list">
        <div className="col-lg-4">
          <div className="bonds-card">
            <div className="p-15">
              <div className="p-relative">
                <div className="index-btn">
                  <div>
                    <h3 className="flex-wrap">
                      <img
                        className="mr-1"
                        height="30"
                        src={location_br_icon}
                        width="30"
                      />
                      {' '}
                      <span style={{fontSize:'large'}}>
                        Mumbai (Corporate Office)
                      </span>
                    </h3>
                  </div>
                  <div className="b-bottom gradient divider" />
                  <p className="text-1 d-name">
                    1202, Naman Centre, Bandra Kurla Complex, Bandra (East), Mumbai -400 051.{' '}
                    <a
                      href="https://goo.gl/maps/xDxUew8BcUuGCgWJ6"
                      target="_blank"
                    >
                      Google Map
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="bonds-card">
            <div className="p-15">
              <div className="p-relative">
                <div className="index-btn">
                  <div>
                    <h3 className="flex-wrap">
                      <img
                        className="mr-1"
                        height="30"
                        src={email_br_icon}
                        width="30"
                      />
                      {' '}
                      <span style={{fontSize:'large'}}>
                        Email
                      </span>
                    </h3>
                  </div>
                  <div className="b-bottom gradient divider" />
                  <p className="text-1 d-name">
                    <a href="mailto:info@trustgroup.in">
                      info@trustgroup.in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="bonds-card">
            <div className="p-15">
              <div className="p-relative">
                <div className="index-btn">
                  <div>
                    <h3 className="flex-wrap">
                      <img
                        className="mr-1"
                        height="30"
                        src={call_br_icon}
                        width="30"
                      />
                      {' '}
                      <span style={{fontSize:'large'}}>
                        Call
                      </span>
                    </h3>
                  </div>
                  <div className="b-bottom gradient divider" />
                  <div className="text-1 d-name">
                    <div>
                      <a href="tel:022 40845045">
                        022 40845045
                      </a>
                    </div>
                    <div>
                      <a href="tel:022 40845070">
                        022 40845070
                      </a>
                    </div>
                    <div>
                      <a href="tel:022 42245246">
                        022 42245246
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-1">
        <div className="col-lg-12">
          <div>
            <iframe
              className="bonds-card b-none"
              height="480"
              src="https://www.google.com/maps/d/embed?mid=1FX6CYjW-tzj06qW1oNMMPyEEecD9sdg&ehbc=2E312"
              width="100%"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
      </>
    )
}

export default ContactUs