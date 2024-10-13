import search_icon from '@assets/search-icon.svg'; 
import home_icon from '@assets/home-icon.svg'; 
import up_arrow from '@assets/arrow-down-icon.svg'; 


const Faq: React.FC = () => {
    return (
      <>
      <div>
  <section className="main-section banner-img faqs">
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
                Faqs
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
                Frequently Asked
                <span>
                  Questions
                </span>
              </h2>
              <div className="gradient-line" />
              <p className="text">
                Have a questions ? We're here to help
              </p>
            </div>
            <div className="search-box p-relative mt-2">
              <div>
                <input
                  className="search-input"
                  id="faqSearch"
                  name="search"
                  placeholder="Search..."
                  type="search"
                />
                <div className="s-icon">
                  <img src={search_icon} />
                </div>
              </div>
            </div>
            <div className="bonds-list mt-2">
              <div className="faqs-box">
                <div className="bonds-card">
                  <div className="faq-questions">
                    <div className="flex-wrap">
                      <div>
                        <h3>
                          Why should one invest in fixed income securities?
                        </h3>
                      </div>
                      <div className="ml-auto">
                        <div className="caret-arrow">
                          <img src={up_arrow} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="faq-answer active">
                    <p className="text-1">
                      While many investments provide some form of income, fixed income securities tend to offer fixed and the most reliable cash streams; these are rated by credit rating agencies, allowing investors to choose bonds from financially stable issuers. A diversified bond portfolio can provide decent yield with a lower level of volatility than equities or any other asset classes. Fixed income securities at maturity provide investors with the principal amount they had invested in addition to the interest they have received.
                    </p>
                  </div>
                </div>
              </div>
              <div className="faqs-box">
                <div className="bonds-card">
                  <div className="faq-questions">
                    <div className="flex-wrap">
                      <div>
                        <h3>
                          What are the advantages of investing in bonds?
                        </h3>
                      </div>
                      <div className="ml-auto">
                        <div className="caret-arrow">
                          <img src={up_arrow} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="faq-answer active">
                    <p className="text-1">
                      <strong>
                        Stability of principal
                      </strong>
                      : One advantage of investing in fixed income securities is peace of mind that comes from capital preservation. Investors benefit by investing in fixed income securities as they preserve and increase their invested capital.
                    </p>
                    <p className="text-1">
                      <strong>
                        Generates a steady and regular income stream
                      </strong>
                      : Fixed income securities provide investors with a steady stream of income, For example, by investing Rs. 1,00,000/- in bond with 12% annual coupon rate, the investor has the assurance to get Rs. 12,000 directly in the bank account on yearly basis till the maturity of the bond.
                    </p>
                    <p className="text-1">
                      <strong>
                        High priority claims to assets
                      </strong>
                      : Fixed income investors get benefit from their position in the capital structure of an entity (issuer) issuing both equity and debt investments. Investors in bonds of a corporation have a higher priority over common and preferred stockholders of the same entity (issuer).
                    </p>
                    <p className="text-1">
                      <strong>
                        Nullify market volatility
                      </strong>
                      : The price of debt securities displays a very lower average volatility as compared to the price of equity or mutual funds and ensures the greater safety of the investment.
                    </p>
                    <p className="text-1">
                      <strong>
                        Zero credit risk
                      </strong>
                      : Investors can neutralize the default risk on their investments by investing in government securities, which are normally referred to as risk-free investments due to the sovereign guarantee on these instruments.
                    </p>
                    <p className="text-1">
                      <strong>
                        Efficient portfolio diversification
                      </strong>
                      : Fixed income securities enable efficient portfolio diversification and thus assist in portfolio risk mitigation.
                    </p>
                  </div>
                </div>
              </div>
              <div className="faqs-box">
                <div className="bonds-card">
                  <div className="faq-questions">
                    <div className="flex-wrap">
                      <div>
                        <h3>
                          What is a bond?
                        </h3>
                      </div>
                      <div className="ml-auto">
                        <div className="caret-arrow">
                          <img src={up_arrow} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="faq-answer active">
                    <p className="text-1">
                      A bond is a fixed income instrument that represents a loan made by an investor (bond holder) to a borrower (bond issuer). Governments, corporates, banks, and municipalities issue bonds when they need capital. Bonds traditionally pay a fixed interest rate (coupon) to the debtholders along with the principal amount at maturity.
                    </p>
                  </div>
                </div>
              </div>
              <div className="faqs-box">
                <div className="bonds-card">
                  <div className="faq-questions">
                    <div className="flex-wrap">
                      <div>
                        <h3>
                          What is a maturity date?
                        </h3>
                      </div>
                      <div className="ml-auto">
                        <div className="caret-arrow">
                          <img src={up_arrow} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="faq-answer active">
                    <p className="text-1">
                      A bond pays interest periodically and repays the principal at a stated time, known as maturity.
                    </p>
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

export default Faq