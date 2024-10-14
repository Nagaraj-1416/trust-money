import React from 'react'

const DiscoverBonds = () => {
  return (
    <section className="profile-section pt-2 main-section" style={{marginLeft:'7%'}}>
  <div className="container">
    <div className="row">
      <div className="col-lg-4">
        <div className="row">
          <div className="col-12">
            <div className="filter-container">
              <div className="overlap-box">
                <div className="b-bottom b-white pb-1">
                  <div className="row">
                    <div className="col-6">
                      <h3>Filter</h3>
                    </div>
                    {/* <div class="col-6 text-right">
                <img src="images/icons/filter-icon.svg">
              </div> */}
                  </div>
                </div>
                <div className="mt-03">
                  <div className="row">
                    <div className="col-6">
                      <p className="font14">
                        <span id="filterCount">0</span> filter applied
                      </p>
                    </div>
                    <div className="col-6 text-right">
                      <a href="discover-bonds">Clear All</a>
                    </div>
                    <div className="col-lg-12">
                      <div id="filter_checked_items">
                        <span id="filter_checked_items_radio" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-1">
                  <form id="filter-form">
                    <div className="accordion active">
                      <div className="accordion-title">
                        <div className="flex-wrap flex-center">
                          <h4>Investment Amount</h4>
                          <div className="accor-icon ml-auto">
                            <img src="images/dashboard/caret.svg" />
                          </div>
                        </div>
                      </div>
                      <div className="accord-body" style={{ display: "block" }}>
                        <div className="filer-list">
                          <label className="radio-group">
                            <div className="flex-wrap flex-center">
                              <input
                                className="radio"
                                type="radio"
                                defaultValue="<10l"
                                name="filter_amount"
                              />
                              <span className="ml-05">Less than 10 Lac</span>
                            </div>
                          </label>
                        </div>
                        <div className="filer-list">
                          <label className="radio-group">
                            <div className="flex-wrap flex-center">
                              <input
                                className="radio"
                                type="radio"
                                defaultValue="10to50l"
                                name="filter_amount"
                              />
                              <span className="ml-05">10-50 Lac</span>
                            </div>
                          </label>
                        </div>
                        <div className="filer-list">
                          <label className="radio-group">
                            <div className="flex-wrap flex-center">
                              <input
                                className="radio"
                                type="radio"
                                defaultValue=">50l"
                                name="filter_amount"
                              />
                              <span className="ml-05">Above 50 lacs</span>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="accordion active">
                      <div className="accordion-title">
                        <div className="flex-wrap flex-center">
                          <h4>Payment Frequency</h4>
                          <div className="accor-icon ml-auto">
                            <img src="images/dashboard/caret.svg" />
                          </div>
                        </div>
                      </div>
                      <div className="accord-body" style={{ display: "block" }}>
                        <div className="filer-list">
                          <label className="radio-group">
                            <div className="flex-wrap flex-center">
                              <input
                                className="radio"
                                type="checkbox"
                                defaultValue="annual"
                                name="filter_frequency[]"
                              />
                              <span className="ml-05">Annual</span>
                            </div>
                          </label>
                        </div>
                        <div className="filer-list">
                          <label className="radio-group">
                            <div className="flex-wrap flex-center">
                              <input
                                className="radio"
                                type="checkbox"
                                defaultValue="monthly"
                                name="filter_frequency[]"
                              />
                              <span className="ml-05">Monthly</span>
                            </div>
                          </label>
                        </div>
                        <div className="filer-list">
                          <label className="radio-group">
                            <div className="flex-wrap flex-center">
                              <input
                                className="radio"
                                type="checkbox"
                                defaultValue="quarterly"
                                name="filter_frequency[]"
                              />
                              <span className="ml-05">Quarterly</span>
                            </div>
                          </label>
                        </div>
                        <div className="filer-list">
                          <label className="radio-group">
                            <div className="flex-wrap flex-center">
                              <input
                                className="radio"
                                type="checkbox"
                                defaultValue="halfyearly"
                                name="filter_frequency[]"
                              />
                              <span className="ml-05">Half Yearly</span>
                            </div>
                          </label>
                        </div>
                        <div className="filer-list">
                          <label className="radio-group">
                            <div className="flex-wrap flex-center">
                              <input
                                className="radio"
                                type="checkbox"
                                defaultValue="paymentMaturarity"
                                name="maturity"
                              />
                              <span className="ml-05">Payment on maturity</span>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="accordion active">
                      <div className="accordion-title">
                        <div className="flex-wrap flex-center">
                          <h4>Issue Type</h4>
                          <div className="accor-icon ml-auto">
                            <img src="images/dashboard/caret.svg" />
                          </div>
                        </div>
                      </div>
                      <div className="accord-body" style={{ display: "block" }}>
                        <div className="filer-list">
                          <label className="radio-group">
                            <div className="flex-wrap flex-center">
                              <input
                                className="radio"
                                type="checkbox"
                                defaultValue="DEBENTURES"
                                name="issuertype[]"
                              />
                              <span className="ml-05">Debentures</span>
                            </div>
                          </label>
                        </div>
                        <div className="filer-list">
                          <label className="radio-group">
                            <div className="flex-wrap flex-center">
                              <input
                                className="radio"
                                type="checkbox"
                                defaultValue="BONDS"
                                name="issuertype[]"
                              />
                              <span className="ml-05">Bonds</span>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="close-filter">
                  <img src="images/icons/close-icon.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-8">
        <div className="bonds-cards md:bonds-cards">
          <div className="row">
            <div className="col-lg-12">
              <div className="filter-wrapper bonds-card">
                <div className="row flex-center">
                  <div className="col-6">
                    <div className="hiddex-xs">
                      <button className="fl-action" id="filterBtn">
                        {/* <img src="images/icons/filter-icon.svg" alt="filter">  */}
                        <span>Filter</span>
                      </button>
                    </div>
                  </div>
                  <div className="text-right p-relative col-6">
                    <div className="filter-box">
                      <button className="fl-action" id="sortBtn">
                        <img
                          style={{ width: 15, height: 14 }}
                          src="images/Filter.svg"
                          alt="sort"
                        />
                        <span>Sort by</span>
                      </button>
                      <div className="filter-list">
                        <div>
                          <form id="sort-form">
                            <ul className="p-relative">
                              <li>
                                <label className="flex-wrap">
                                  <div className="text-label">
                                    <img
                                      style={{ width: 15, height: 14 }}
                                      src="images/icons/sorting.svg"
                                      alt="sort"
                                    />
                                    {/* <lottie-player class="d-inline-block v-align-middle" style="width: 25px;height: 25px" src="images/Filter.json" background="transparent"  speed="1" loop autoplay ></lottie-player> */}
                                    <span>
                                      <strong>Sort by</strong>
                                    </span>
                                  </div>
                                </label>
                              </li>
                              <li>
                                <label className="flex-wrap">
                                  <div className="input-radio-item">
                                    <input
                                      type="radio"
                                      defaultValue="investment_htol"
                                      name="bonds_filter"
                                    />
                                  </div>
                                  <div className="text-label">
                                    <span>
                                      Investment <small>- High to Low ↓</small>
                                    </span>
                                  </div>
                                </label>
                              </li>
                              <li>
                                <label className="flex-wrap">
                                  <div className="input-radio-item">
                                    <input
                                      type="radio"
                                      defaultValue="investment_ltoh"
                                      name="bonds_filter"
                                    />
                                  </div>
                                  <div className="text-label">
                                    <span>
                                      Investment <small>- Low to High ↑</small>
                                    </span>
                                  </div>
                                </label>
                              </li>
                              <li>
                                <label className="flex-wrap">
                                  <div className="input-radio-item">
                                    <input
                                      type="radio"
                                      defaultValue="tenure_htol"
                                      name="bonds_filter"
                                    />
                                  </div>
                                  <div className="text-label">
                                    <span>
                                      Tenure <small>- High to Low ↓</small>
                                    </span>
                                  </div>
                                </label>
                              </li>
                              <li>
                                <label className="flex-wrap">
                                  <div className="input-radio-item">
                                    <input
                                      type="radio"
                                      defaultValue="tenure_ltoh"
                                      name="bonds_filter"
                                    />
                                  </div>
                                  <div className="text-label">
                                    <span>
                                      Tenure <small>- Low to High ↑</small>
                                    </span>
                                  </div>
                                </label>
                              </li>
                            </ul>
                          </form>
                          <div className="close-filter">
                            <img src="images/icons/close-icon.svg" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 p-0" id="bondList">
              <div className="col-lg-12">
                <a href="bond-detail.html" className="bonds-card">
                  <div
                    className="brand-blur"
                    style={{
                      backgroundImage: "url(images/brands/default-icon.jpg)"
                    }}
                  />
                  <div className="b-bottom">
                    <div className="p-1 p-relative">
                      <div className="flex-wrap flex-start">
                        <div className="flex-wrap flex-center flex-resposive">
                          <div className="brand-img mr-2">
                            <img src="images/brands/default-icon.jpg" />
                          </div>
                          <div className="lg-mt-05">
                            <h3>SUGMYA FINANCE PRIVATE LIMITED</h3>
                            <ul className="info-list mt-03 flex-wrap flex-center">
                              <li>
                                {" "}
                                ISIN
                                <span
                                  className="info-tag ml-02"
                                  id="isinNumber"
                                >
                                  INE0NSW07123
                                </span>
                              </li>
                              <li
                                className="share_icon st-open-modal"
                                id="shareModal"
                                data-url="bond-detail.html"
                                data-name="SUGMYA FINANCE PRIVATE LIMITED"
                              >
                                <span className="p-relative //tooltip-wrap">
                                  {/* <img //tooltip="Share"  style="width: 17px;height:20px" src="images/share.svg" class="copy-item //tooltip"> */}
                                  <img
                                    //tooltip="Share"
                                    style={{ width: 17, height: 20 }}
                                    src="images/share.svg"
                                    className="copy-item //tooltip"
                                  />
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-1">
                    <div className="flex-wrap justify-between normal-sm">
                      <div className="b-details sm-col-6">
                        <p>Face Value</p>
                        <h3>₹₹1,00,000.00</h3>
                      </div>
                      <div className="b-details sm-col-6">
                        <p>Coupon</p>
                        <h3>13.75%</h3>
                      </div>
                      <div className="b-details sm-col-6">
                        <p>Payments</p>
                        <h3>MONTHLY</h3>
                      </div>
                      <div className="b-details sm-col-6">
                        <p>Call/Maturity Date</p>
                        <h3>07-Apr-2025</h3>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-12">
                <a href="bond-detail.html" className="bonds-card">
                  <div
                    className="brand-blur"
                    style={{
                      backgroundImage: "url(images/brands/default-icon.jpg)"
                    }}
                  />
                  <div className="b-bottom">
                    <div className="p-1 p-relative">
                      <div className="flex-wrap flex-start">
                        <div className="flex-wrap flex-center flex-resposive">
                          <div className="brand-img mr-2">
                            <img src="images/brands/default-icon.jpg" />
                          </div>
                          <div className="lg-mt-05">
                            <h3>AMBIUM FINSERVE PRIVATE LIMITED</h3>
                            <ul className="info-list mt-03 flex-wrap flex-center">
                              <li>
                                {" "}
                                ISIN
                                <span
                                  className="info-tag ml-02"
                                  id="isinNumber"
                                >
                                  INE0RU307064
                                </span>
                              </li>
                              <li
                                className="share_icon st-open-modal"
                                id="shareModal"
                                data-url="bond-detail.html"
                                data-name="AMBIUM FINSERVE PRIVATE LIMITED"
                              >
                                <span className="p-relative //tooltip-wrap">
                                  <img
                                    //tooltip="Share"
                                    style={{ width: 17, height: 20 }}
                                    src="images/share.svg"
                                    className="copy-item //tooltip"
                                  />
                                  {/* <img //tooltip="Share"  style="width: 17px;height:20px" src="images/share.svg" class="copy-item //tooltip"> */}
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-1">
                    <div className="flex-wrap justify-between normal-sm">
                      <div className="b-details sm-col-6">
                        <p>Face Value</p>
                        <h3>₹₹1,00,000.00</h3>
                      </div>
                      <div className="b-details sm-col-6">
                        <p>Coupon</p>
                        <h3>11.00%</h3>
                      </div>
                      <div className="b-details sm-col-6">
                        <p>Payments</p>
                        <h3>QUATERLY</h3>
                      </div>
                      <div className="b-details sm-col-6">
                        <p>Call/Maturity Date</p>
                        <h3>03-Apr-2026</h3>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-12">
                <a href="bond-detail.html" className="bonds-card">
                  <div
                    className="brand-blur"
                    style={{
                      backgroundImage: "url(images/brands/default-icon.jpg)"
                    }}
                  />
                  <div className="b-bottom">
                    <div className="p-1 p-relative">
                      <div className="flex-wrap flex-start">
                        <div className="flex-wrap flex-center flex-resposive">
                          <div className="brand-img mr-2">
                            <img src="images/brands/default-icon.jpg" />
                          </div>
                          <div className="lg-mt-05">
                            <h3>
                              KEYWEST EDUINFRA &amp; SERVICES PRIVATE LIMITED
                            </h3>
                            <ul className="info-list mt-03 flex-wrap flex-center">
                              <li>
                                {" "}
                                ISIN
                                <span
                                  className="info-tag ml-02"
                                  id="isinNumber"
                                >
                                  INE0QAS07023
                                </span>
                              </li>
                              <li
                                className="share_icon st-open-modal"
                                id="shareModal"
                                data-url="bond-detail.html"
                                data-name="KEYWEST EDUINFRA & SERVICES PRIVATE LIMITED"
                              >
                                <span className="p-relative //tooltip-wrap">
                                  {/* <img //tooltip="Share"  style="width: 17px;height:20px" src="images/share.svg" class="copy-item //tooltip"> */}
                                  <img
                                    //tooltip="Share"
                                    style={{ width: 17, height: 20 }}
                                    src="images/share.svg"
                                    className="copy-item //tooltip"
                                  />
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-1">
                    <div className="flex-wrap justify-between normal-sm">
                      <div className="b-details sm-col-6">
                        <p>Face Value</p>
                        <h3>₹₹10,000.00</h3>
                      </div>
                      <div className="b-details sm-col-6">
                        <p>Coupon</p>
                        <h3>%</h3>
                      </div>
                      <div className="b-details sm-col-6">
                        <p>Payments</p>
                        <h3>NONE</h3>
                      </div>
                      <div className="b-details sm-col-6">
                        <p>Call/Maturity Date</p>
                        <h3>30-Jun-2029</h3>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-12">
                <a href="bond-detail.html" className="bonds-card">
                  <div
                    className="brand-blur"
                    style={{
                      backgroundImage: "url(images/brands/default-icon.jpg)"
                    }}
                  />
                  <div className="b-bottom">
                    <div className="p-1 p-relative">
                      <div className="flex-wrap flex-start">
                        <div className="flex-wrap flex-center flex-resposive">
                          <div className="brand-img mr-2">
                            <img src="images/brands/default-icon.jpg" />
                          </div>
                          <div className="lg-mt-05">
                            <h3>SAGAR DEPOSITS AND ADVANCES LIMITED</h3>
                            <ul className="info-list mt-03 flex-wrap flex-center">
                              <li>
                                {" "}
                                ISIN
                                <span
                                  className="info-tag ml-02"
                                  id="isinNumber"
                                >
                                  INE01EU07352
                                </span>
                              </li>
                              <li
                                className="share_icon st-open-modal"
                                id="shareModal"
                                data-url="bond-detail.html"
                                data-name="SAGAR DEPOSITS AND ADVANCES LIMITED"
                              >
                                <span className="p-relative //tooltip-wrap">
                                  {/* <img //tooltip="Share"  style="width: 17px;height:20px" src="images/share.svg" class="copy-item //tooltip"> */}
                                  <img
                                    //tooltip="Share"
                                    style={{ width: 17, height: 20 }}
                                    src="images/share.svg"
                                    className="copy-item //tooltip"
                                  />
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-1">
                    <div className="flex-wrap justify-between normal-sm">
                      <div className="b-details sm-col-6">
                        <p>Face Value</p>
                        <h3>₹₹1,00,000.00</h3>
                      </div>
                      <div className="b-details sm-col-6">
                        <p>Coupon</p>
                        <h3>14.00%</h3>
                      </div>
                      <div className="b-details sm-col-6">
                        <p>Payments</p>
                        <h3>MONTHLY</h3>
                      </div>
                      <div className="b-details sm-col-6">
                        <p>Call/Maturity Date</p>
                        <h3>28-Mar-2025</h3>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="row text-right">
            <div className="col-lg-12" id="showpagination">
              <ul className="pasignation">
                <li>
                  <a
                    data-page={0}
                    //onclick="pagination($(this))"
                    href="javascript:void(0)"
                    className="disableClick"
                  >
                    <img src="images/icons/back-icon.svg" alt="Back" />
                  </a>
                </li>
                <li className="active">
                  <a
                    data-page={1}
                    //onclick="pagination($(this))"
                    href="javascript:void(0)"
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    data-page={1}
                    href="javascript:void(0)"
                    //onclick="pagination($(this))"
                    className="disableClick"
                  >
                    <img src="images/icons/next-icon.svg" alt="Next" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default DiscoverBonds