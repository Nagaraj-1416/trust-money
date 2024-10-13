import home_icon from '@assets/home-icon.svg'; 
import muthoot_logo from '@assets/muthot-logo.jpg'; 
import india_bulls_logo from '@assets/indiabulls-logo.webp';
import shri_ram_logo from '@assets/shri-ram-logo.jpg'; 
import { Link } from 'react-router-dom';

const PrimaryBonds: React.FC = () => {
    return (
      <>
      <div>
  <section className="main-section banner-img">
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
                Primary Bonds
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section className="invest-bond pb-2">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="heading-box">
            <div className="text-center">
              <h1 className="title">
                Primary{' '}
                <span>
                  Bonds
                </span>
              </h1>
              <div className="gradient-line" />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="bonds-cards bonds-list">
            <div className="row">
              <div className="col-lg-4 col-sm-6">
                <div className="bonds-card">
                  <div
                    className="brand-blur"
                    style={{
                      backgroundImage: 'url(images/brands/edelweiss-capital-squarelogo.png)'
                    }}
                  />
                  <div className="b-bottom">
                    <div className="p-15 p-relative">
                      <div className="flex-wrap">
                        <div className="brand-img">
                          <img src={shri_ram_logo}/>
                        </div>
                        <div className="ml-auto">
                          <div className="card-tags">
                            BSE
                          </div>
                        </div>
                      </div>
                      <div className="b-title mt-1">
                        <h3>
                          EDELWEISS FINANCIAL SERVICES LIMITED
                        </h3>
                        <p>
                          <span>
                            Oct-2022
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-15">
                    <div className="flex-wrap">
                      <div className="b-details left">
                        <p>
                          Opening Date
                        </p>
                        <h3>
                          03/10/2022
                        </h3>
                      </div>
                      <div className="b-details">
                        <p>
                          Closing Date
                        </p>
                        <h3>
                          17/10/2022
                        </h3>
                      </div>
                    </div>
                    <div className="flex-wrap mt-1">
                      <div className="b-details left">
                        <p>
                          Allotment Date
                        </p>
                        <h3>
                          27/10/2022
                        </h3>
                      </div>
                      <div className="b-details">
                        <p>
                          Script ID
                        </p>
                        <h3>
                          EFSLNCDV
                        </h3>
                      </div>
                    </div>
                    <div className="flex-wrap mt-1">
                      <div className="b-details left">
                        <p>
                          Miniimum App
                        </p>
                        <h3>
                          Size
                        </h3>
                      </div>
                      <div className="b-details">
                        <p>
                          Depository
                        </p>
                        <h3>
                          CDSL,NSDL
                        </h3>
                      </div>
                    </div>
                    <div className="flex-wrap index-btn mt-1 p-relative">
                    <Link
                        className="btn btn-border border-gradient d-block"
                        to="/primary-bonds-list"
                      >
                        Invest Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="bonds-card">
                  <div
                    className="brand-blur"
                    style={{
                      backgroundImage: 'url(images/brands/indiabulls-logo.webp)'
                    }}
                  />
                  <div className="b-bottom">
                    <div className="p-15 p-relative">
                      <div className="flex-wrap">
                        <div className="brand-img">
                          <img src={india_bulls_logo}/>
                        </div>
                        <div className="ml-auto">
                          <div className="card-tags">
                            BSE
                          </div>
                        </div>
                      </div>
                      <div className="b-title mt-1">
                        <h3>
                          INDIABULLS HOUSING FINANCIAL SERVICES LIMITED
                        </h3>
                        <p>
                          <span>
                            Oct-2022
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-15">
                    <div className="flex-wrap">
                      <div className="b-details left">
                        <p>
                          Opening Date
                        </p>
                        <h3>
                          03/10/2022
                        </h3>
                      </div>
                      <div className="b-details">
                        <p>
                          Closing Date
                        </p>
                        <h3>
                          17/10/2022
                        </h3>
                      </div>
                    </div>
                    <div className="flex-wrap mt-1">
                      <div className="b-details left">
                        <p>
                          Allotment Date
                        </p>
                        <h3>
                          27/10/2022
                        </h3>
                      </div>
                      <div className="b-details">
                        <p>
                          Script ID
                        </p>
                        <h3>
                          EFSLNCDV
                        </h3>
                      </div>
                    </div>
                    <div className="flex-wrap mt-1">
                      <div className="b-details left">
                        <p>
                          Miniimum App
                        </p>
                        <h3>
                          Size
                        </h3>
                      </div>
                      <div className="b-details">
                        <p>
                          Depository
                        </p>
                        <h3>
                          CDSL,NSDL
                        </h3>
                      </div>
                    </div>
                    <div className="flex-wrap index-btn mt-1 p-relative">
                    <Link
                        className="btn btn-border border-gradient d-block"
                        to="/primary-bonds-list"
                      >
                        Invest Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="bonds-card">
                  <div
                    className="brand-blur"
                    style={{
                      backgroundImage: 'url(images/brands/muthot-logo.jpg)'
                    }}
                  />
                  <div className="b-bottom">
                    <div className="p-15 p-relative">
                      <div className="flex-wrap">
                        <div className="brand-img">
                          <img src={muthoot_logo} />
                        </div>
                        <div className="ml-auto">
                          <div className="card-tags">
                            BSE
                          </div>
                        </div>
                      </div>
                      <div className="b-title mt-1">
                        <h3>
                          MUTHOOT FINANCE LTD
                        </h3>
                        <p>
                          <span>
                            Oct-2022
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-15">
                    <div className="flex-wrap">
                      <div className="b-details left">
                        <p>
                          Opening Date
                        </p>
                        <h3>
                          03/10/2022
                        </h3>
                      </div>
                      <div className="b-details">
                        <p>
                          Closing Date
                        </p>
                        <h3>
                          17/10/2022
                        </h3>
                      </div>
                    </div>
                    <div className="flex-wrap mt-1">
                      <div className="b-details left">
                        <p>
                          Allotment Date
                        </p>
                        <h3>
                          27/10/2022
                        </h3>
                      </div>
                      <div className="b-details">
                        <p>
                          Script ID
                        </p>
                        <h3>
                          EFSLNCDV
                        </h3>
                      </div>
                    </div>
                    <div className="flex-wrap mt-1">
                      <div className="b-details left">
                        <p>
                          Miniimum App
                        </p>
                        <h3>
                          Size
                        </h3>
                      </div>
                      <div className="b-details">
                        <p>
                          Depository
                        </p>
                        <h3>
                          CDSL,NSDL
                        </h3>
                      </div>
                    </div>
                    <div className="flex-wrap index-btn mt-1 p-relative">
                      <Link
                        className="btn btn-border border-gradient d-block"
                        to="/primary-bonds-list"
                      >
                        Invest Now
                      </Link>
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
</div>
      </>
    )
}
export default PrimaryBonds
