import home_icon from '@assets/home-icon.svg'; 
import sc_1 from '@assets/sc-1.jpg'
import sc_2 from '@assets/sc-2.jpg'
import sc_3 from '@assets/sc-3.jpg'
import sc_4 from '@assets/sc-4.jpg'
import sc_5 from '@assets/sc-5.jpg'
import sc_6 from '@assets/sc-6.jpg'
import sc_7 from '@assets/sc-7.jpg'
import sc_8 from '@assets/sc-8.jpg'

const SecondaryOfferings: React.FC = () => {
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
                Secondary Offerings
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section className="primary-bonds-section card-listing pb-2">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="heading-box">
            <div className="text-center">
              <h1 className="title">
                Secondary{' '}
                <span>
                  Offerings
                </span>
              </h1>
              <div className="gradient-line" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="row"
        id="primaryOffering"
      >
        <div className="col-lg-4 col-sm-6">
          <div className="bonds-card">
            <div className="full-img">
              <figure>
                <img
                  alt="Debt IPOs"
                  height="327"
                  src={sc_1}
                  width="327"
                />
                <figcaption className="caption-details">
                  <h3>
                    Sovereign Bonds
                  </h3>
                  <p className="mt-1">
                    Sovereign bonds commonly referred to as government securities or G-Secs are debt securities issued by the Indian Central Government..
                  </p>
                  <div className="index-btn mt-1">
                    <a
                      className="btn btn-border border-gradient st-open-modal"
                      href="#knowMore"
                    >
                      Know more
                    </a>
                  </div>
                  <div className="d-none data-items">
                    <p>
                      Sovereign bonds commonly referred to as government securities or G-Secs are debt securities issued by the Indian Central Government or Indian State Government. Sovereign bonds issued by the state government are known as SDLs (state development loans). The purchaser here will receive interest payment along with the bond's face value at maturity.
                    </p>
                    <div className="index-btn mt-1">
                      <a
                        className="btn btn-border border-gradient"
                        href="https://trustsecurities.in/bonds-list.php"
                      >
                        View Product Note
                      </a>
                    </div>
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
                  alt="54 EC Capital Gain Bonds"
                  height="327"
                  src={sc_2}
                  width="327"
                />
                <figcaption className="caption-details">
                  <h3>
                    Bank Bonds
                  </h3>
                  <p className="mt-1">
                    Bank bonds are the debentures issued by the bank for investors who wish to go for a higher return than the FD of the said bank while bearing..
                  </p>
                  <div className="index-btn mt-1">
                    <a
                      className="btn btn-border border-gradient st-open-modal"
                      href="#knowMore"
                    >
                      Know more
                    </a>
                  </div>
                  <div className="d-none data-items">
                    <p>
                      Bank bonds are the debentures issued by the bank for investors who wish to go for a higher return than the FD of the said bank while bearing a litter higher risk. Banks can issue either perpetual bonds (AT I) or Tier II bonds.
                    </p>
                    <div className="index-btn mt-1">
                      <a
                        className="btn btn-border border-gradient"
                        href="https://trustsecurities.in/bonds-list.php"
                      >
                        View Product Note
                      </a>
                    </div>
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
                  alt="Market Info"
                  height="327"
                  src={sc_3}
                  width="327"
                />
                <figcaption className="caption-details">
                  <h3>
                    Corporate Bonds
                  </h3>
                  <p className="mt-1">
                    SCorporate bonds are debt securities issued by corporations or companies to raise funds and in exchange company/corporation..
                  </p>
                  <div className="index-btn mt-1">
                    <a
                      className="btn btn-border border-gradient st-open-modal"
                      href="#knowMore"
                    >
                      Know more
                    </a>
                  </div>
                  <div className="d-none data-items">
                    <p>
                      Corporate bonds are debt securities issued by corporations or companies to raise funds and in exchange company/corporation will give you interest in addition to the principal amount. These usually carry credit spread over sovereign bonds hence their interest rates are usually higher.
                    </p>
                    <div className="index-btn mt-1">
                      <a
                        className="btn btn-border border-gradient"
                        href="https://trustsecurities.in/bonds-list.php"
                      >
                        View Product Note
                      </a>
                    </div>
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
                  alt="Market Info"
                  height="327"
                  src={sc_4}
                  width="327"
                />
                <figcaption className="caption-details">
                  <h3>
                    Tax Free Bonds
                  </h3>
                  <p className="mt-1">
                    Tax-free bonds are issued by Indian Government backed companies with a reasonable interest rate..
                  </p>
                  <div className="index-btn mt-1">
                    <a
                      className="btn btn-border border-gradient st-open-modal"
                      href="#knowMore"
                    >
                      Know more
                    </a>
                  </div>
                  <div className="d-none data-items">
                    <p>
                      Tax-free bonds are issued by Indian Government backed companies with a reasonable interest rate. These bonds are completely tax exempted. Tax-free bonds have better returns than normal bonds.
                    </p>
                    <div className="index-btn mt-1">
                      <a
                        className="btn btn-border border-gradient"
                        href="https://trustsecurities.in/bonds-list.php"
                      >
                        View Product Note
                      </a>
                    </div>
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
                  alt="Market Info"
                  height="327"
                  src={sc_5}
                  width="327"
                />
                <figcaption className="caption-details">
                  <h3>
                    Commercial Papers (CPs)
                  </h3>
                  <p className="mt-1">
                    Commercial papers are short-term borrowings by corporates, FIs, and primary dealers (PDs), from the money market..
                  </p>
                  <div className="index-btn mt-1">
                    <a
                      className="btn btn-border border-gradient st-open-modal"
                      href="#knowMore"
                    >
                      Know more
                    </a>
                  </div>
                  <div className="d-none data-items">
                    <p>
                      Commercial papers are short-term borrowings by corporates, FIs, and primary dealers (PDs), from the money market. These have a maturity varying from 7 days to 1 year. CPs are unsecured and backed by the credit of the issuing company. These are often issued at a discount with no interest payment, with maturity at its face value.
                    </p>
                    <div className="index-btn mt-1">
                      <a
                        className="btn btn-border border-gradient"
                        href="https://trustsecurities.in/bonds-list.php"
                      >
                        View Product Note
                      </a>
                    </div>
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
                  alt="Market Info"
                  height="327"
                  src={sc_6}
                  width="327"
                />
                <figcaption className="caption-details">
                  <h3>
                    Certificate of Deposits (CDs)
                  </h3>
                  <p className="mt-1">
                    Certificate of deposits are short-term borrowings by the banks or other eligible financial institutions in the form of Usance..
                  </p>
                  <div className="index-btn mt-1">
                    <a
                      className="btn btn-border border-gradient st-open-modal"
                      href="#knowMore"
                    >
                      Know more
                    </a>
                  </div>
                  <div className="d-none data-items">
                    <p>
                      Certificate of deposits are short-term borrowings by the banks or other eligible financial institutions in the form of Usance Promissory Notes having a maturity of not less than 7 days up to a maximum of one year. These are like bank term deposit accounts. CDs are freely negotiable instruments often referred to as negotiable certificate of deposits. Top CDs pay higher interest than best-saving instruments. A certificate of deposit is fully taxable under the Income Tax Act.
                    </p>
                    <div className="index-btn mt-1">
                      <a
                        className="btn btn-border border-gradient"
                        href="https://trustsecurities.in/bonds-list.php"
                      >
                        View Product Note
                      </a>
                    </div>
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
                  alt="Market Info"
                  height="327"
                  src={sc_7}
                  width="327"
                />
                <figcaption className="caption-details">
                  <h3>
                    Real Estate NCDs
                  </h3>
                  <p className="mt-1">
                    Real estate NCDs are non-convertible debentures that provide funds to real estate developers through a structured debt..
                  </p>
                  <div className="index-btn mt-1">
                    <a
                      className="btn btn-border border-gradient st-open-modal"
                      href="#knowMore"
                    >
                      Know more
                    </a>
                  </div>
                  <div className="d-none data-items">
                    <p>
                      Real estate NCDs are non-convertible debentures that provide funds to real estate developers through a structured debt instrument that adds value in the early stage of development. Such structures are used to raise short-term secured loans from investors. These have tenure between 1-5 years. Real estate NCDs generally pay a coupon rate between 12 -22%. These bonds are generally for HNIs as the minimum investment required is ₹ 10 Lakh. The interest you earn through these NCDs is added to your income and taxed according to the income slabs. If you sell these NCDs within a year from the date of allotment, then the income would be taxed under short-term capital gains whereas if you sell these NCDs after a year, income will be taxed under long-term capital gains at 20% with indexation. Real estate NCDs are high-risk & high-return products.
                    </p>
                    <div className="index-btn mt-1">
                      <a
                        className="btn btn-border border-gradient"
                        href="https://trustsecurities.in/downloads.php"
                      >
                        View Product Note
                      </a>
                    </div>
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
                  alt="Market Info"
                  height="327"
                  src={sc_8}
                  width="327"
                />
                <figcaption className="caption-details">
                  <h3>
                    Mutual Fund
                  </h3>
                  <p className="mt-1">
                    Mutual fund is a type of investment vehicle consisting of a portfolio of stocks, bonds, or other securities..
                  </p>
                  <div className="index-btn mt-1">
                    <a
                      className="btn btn-border border-gradient st-open-modal"
                      href="#knowMore"
                    >
                      Know more
                    </a>
                  </div>
                  <div className="d-none data-items">
                    <p>
                      Mutual fund is a type of investment vehicle consisting of a portfolio of stocks, bonds, or other securities. Mutual fund is divided into different categories, representing the kinds of securities they invest in, their investment objectives, and the type of returns they seek.
                    </p>
                    <ul className="data-list-items">
                      <li>
                        <a href="https://trustsecurities.in/pdf/TRUSTMF_Banking_PSU_Debt_Fund.pdf">
                          TRUSTMF Banking & PSU Debt Fund
                        </a>
                      </li>
                      <li>
                        <a href="https://trustsecurities.in/pdf/TRUSTMF_ShortTerm_Fund.pdf">
                          TRUSTMF Short Term Fund
                        </a>
                      </li>
                      <li>
                        <a href="https://trustsecurities.in/pdf/TRUSTMF_Liquid_Fund.pdf">
                          TRUSTMF Liquid Fund
                        </a>
                      </li>
                    </ul>
                    <p className="mt-1">
                      <a href="https://trustsecurities.in/downloads.php">
                        Click Here
                      </a>
                      {' '}to download the application form
                    </p>
                    <div className="index-btn mt-1">
                      <a
                        className="btn btn-border border-gradient"
                        href="https://trustsecurities.in/Corporate-FDs.php"
                      >
                        View Product Note
                      </a>
                    </div>
                  </div>
                </figcaption>
              </figure>
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
export default SecondaryOfferings