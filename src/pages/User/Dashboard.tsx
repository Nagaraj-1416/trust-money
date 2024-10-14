import "@assets/dashboard.css"
import bag_icon from '../../assets/bag-icon.svg'
import hand_coin from '../../assets/hand-coin.svg'
import dollers_icon from '../../assets/dollers-icon.svg'
import right_arrow_dash from '../../assets/right-arrow-dash.svg'
import default_icon from '../../assets/default-icon.jpg'
import buy_full_icon from '../../assets/buy-full-icon.svg'
import info_icon from '../../assets/info-icon.svg'
import plus_icon_outline from '../../assets/plus-icon-outline.svg'
import { useState } from "react"
import { Link } from "react-router-dom"
import Navbar from "../../components/layout/Navbar"


const Dashboard: React.FC = () => {

    // State to control the visibility of the profile dropdown
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    // Function to toggle the dropdown visibility
    const toggleDropdown = () => {
      setDropdownVisible(!isDropdownVisible);
    };
    return (
      <>
{/* <div className="ds-main">
  <div className="ds-wrap active">
    <div className="ds-body-wrap"> */}
      {/* <div className="sticky-head">
      <div className="container">
  <div className="row">
    <div className="col-lg-12">
      <header className="ds-main-header">
        <section className="main-header mt-2">
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <div className="ds-search-box" id="searchArea">
              <div className="ds-main-search d-flex align-items-center">
                <img
                  className="ds-search-icon"
                  height="17px"
                  src={search_icon}
                  width="17px"
                />
                <img
                  className="ds-search-icon-mob d-none"
                  height="17px"
                  src={search_icon}
                  width="17px"
                />
                <input
                  className="ds-search"
                  id="search_bond"
                  name="search_bond"
                  placeholder="Search by ISIN / Issuer / Company"
                  type="text"
                  style={{ width: '250px' }}
                />
                <img
                  className="d-none ds-search-close"
                  src="images/icons/close-icon.svg"
                />
              </div>
              <div className="search-mode" id="searchBox">
                <ul className="search-list overflow-item" id="seachItems"></ul>
              </div>
            </div>

<div className="ds-profile" style={{ cursor: 'pointer' }} onClick={toggleDropdown}>
  <div className="ml-auto d-flex align-items-center" id="dashProfileTab">
    <div className="mr-1">
      <img src={profile_icon} alt="Profile" />
    </div>
    <div className="ds-name">
      <div className="font12 sucess-text">Verified</div>
      <div className="d-flex align-items-center">
        <span className="name-text mr-1">SARFARAZ ANSARI</span>
        <img height="7" src={caret_icon} width="17" alt="Caret" />
      </div>
    </div>
  </div>

  {isDropdownVisible && (
    <div className="ds-search-box card-style">
      <div id="dashProfile">
        <ul className="search-list profile-activity" style={{ listStyle: 'none', padding: 0 }}>
          <li>
            <Link to="/profile">
              <img src={profile_line} alt="Profile" />
              <span>View Profile</span>
            </Link>
          </li>
          <li>
            <Link to="/login">
              <img src={log_out} alt="Logout" />
              <span>Sign out</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )}
</div>

          </div>
        </section>
      </header>
    </div>
  </div>
</div>

      </div> */}
      <section className="profile-section pt-2" style={{marginLeft:'7%'}}>
        <div className="container">
          <div className="row flex-center">
            <div className="col-lg-6">
              <h1 className="title-1">
                Portfolio
              </h1>
              <p className="font14 light-gray-color">
                Updated as on 27th Sep 4:16 pm
              </p>
            </div>
            <div className="col-lg-6">
              <ul className="info-list list-anchor">
                <li className="font14 active">
                  <a href="dashboard">
                    All
                  </a>
                </li>
                <li className="font14 ">
                  <a href="dashboard.html">
                    Purchase from TSS
                  </a>
                </li>
                <li className="font14 ">
                  <a href="dashboard.html">
                    Purchase from outside
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row mt-1 flex-center">
            <div className="col-lg-6 col-xl-3 col-md-6 lg-m-tb-1">
              <div className="bonds-card overflow-normal">
                <div className="porfolio-card">
                  <div className="blur-bg green" />
                  <div className="p-1">
                    <div className="flex-wrap flex-center">
                      <div className="mr-2">
                        <img
                          alt="Portfolio"
                          height="32px"
                          src={bag_icon}
                          width="32px"
                        />
                      </div>
                      <div className="b-title">
                        <p>
                          <span className="card-title">
                            Total Face Value
                          </span>
                        </p>
                        <h3>
                          ₹16,00,000.00
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-3 col-md-6 lg-m-tb-1">
              <div className="bonds-card overflow-normal">
                <div className="porfolio-card">
                  <div className="blur-bg blue" />
                  <div className="p-1">
                    <div className="flex-wrap flex-center">
                      <div className="mr-2">
                        <img
                          alt="Portfolio"
                          height="32px"
                          src={hand_coin}
                          width="32px"
                        />
                      </div>
                      <div className="b-title">
                        <p>
                          <span className="card-title">
                            Total Purchase Value
                          </span>
                        </p>
                        <h3>
                          ₹20,38,919.81
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-3 col-md-6 lg-m-tb-1">
              <div className="bonds-card overflow-normal">
                <div className="porfolio-card">
                  <div className="blur-bg yellow" />
                  <div className="p-1">
                    <div className="flex-wrap flex-center">
                      <div className="mr-2">
                        <img
                          alt="Portfolio"
                          height="32px"
                          src={dollers_icon}
                          width="32px"
                        />
                      </div>
                      <div className="b-title">
                        <p>
                          <span className="card-title">
                            Total Interest Received
                          </span>
                        </p>
                        <h3>
                          ₹34,554.79
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-3 col-md-6 lg-m-tb-1">
              <div className="bonds-card overflow-normal brand-bg">
                <div className="porfolio-card">
                  <a
                    className="d-block st-open-modal"
                    href="#"
                    id="addHoldings"
                  >
                    <div className="flex-wrap flex-center" style={{marginTop:'5px'}}>
                      <div className="mr-2 me-4">
                        <img
                          alt="Portfolio"
                          height="32px"
                          src={plus_icon_outline}
                          width="32px"
                          className="ms-3"
                        />
                      </div>
                      <div className="b-title">
                        <p>
                          <span className="card-title">
                            Add other
                          </span>
                        </p>
                        <h3>
                          Holdings
                          <span className="ml-02 mb-4 p-relative">
                            <img
                              height="16px"
                              src={info_icon}
                              width="16px"
                            />
                          </span>
                        </h3>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-1">
            <div className="col-lg-12">
              <p className="font12">
                <strong>
                  Disclaimer:-
                </strong>
                <br />
                Face Value of bonds and Value of Investments are shown based which consist of total securities transacted through Trust Securities Services Private Limited and holdings added by transacted outside of TSS. Kindly refer latest holdings available in the demat account.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="listing-cards mt-1 mb-5" style={{marginLeft:'7%'}} >
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="row">
                <div className="col-lg-12">
                  <div className="bonds-card">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="b-bottom">
                          <div className="blur-bg green" />
                          <div className="p-1 ms-2">
                            <h3>
                              Invested Bonds
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="dash-overlap">
                          <div className="bonds-card">
                            <div className="b-bottom">
                              <div className="blur-bg yellow" />
                              <div className="p-1 p-relative">
                                <div className="flex-wrap flex-start">
                                  <div className="flex-wrap flex-center flex-resposive">
                                    <div className="brand-img mr-2">
                                      <img src={default_icon} />
                                    </div>
                                    <div className="lg-mt-05">
                                      <h3>
                                        SUGMYA FINANCE PRIVATE LIMITED
                                      </h3>
                                      <ul className="info-list mt-03 flex-wrap flex-center">
                                        <li>
                                          ISIN
                                          <span
                                            className="info-tag ml-02"
                                            id="isinNumber"
                                          >
                                            INE0NSW07123
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
                                  <p>
                                    Facevalue
                                  </p>
                                  <h3>
                                    ₹11,00,000.00
                                  </h3>
                                </div>
                                <div className="b-details sm-col-6">
                                  <p>
                                    Qty
                                  </p>
                                  <h3>
                                    11
                                  </h3>
                                </div>
                                <div className="b-details sm-col-6 ">
                                  <p>
                                    Purchase Consideration
                                  </p>
                                  <h3>
                                    ₹14,94,637.99
                                  </h3>
                                </div>
                                <div className="b-details sm-col-6 me-2 mb-2">
                                  <a
                                    className="btn btn-border"
                                    href=""
                                  >
                                    View{' '}
                                    <img src={right_arrow_dash} />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bonds-card">
                            <div className="b-bottom">
                              <div className="blur-bg yellow" />
                              <div className="p-1 p-relative">
                                <div className="flex-wrap flex-start">
                                  <div className="flex-wrap flex-center flex-resposive">
                                    <div className="brand-img mr-2">
                                      <img src={default_icon} />
                                    </div>
                                    <div className="lg-mt-05">
                                      <h3>
                                        BHANIX FINANCE AND INVESTMENT LIMITED
                                      </h3>
                                      <ul className="info-list mt-03 flex-wrap flex-center">
                                        <li>
                                          ISIN
                                          <span
                                            className="info-tag ml-02"
                                            id="isinNumber"
                                          >
                                            INE08X507301
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
                                  <p>
                                    Facevalue
                                  </p>
                                  <h3>
                                    ₹5,00,000.00
                                  </h3>
                                </div>
                                <div className="b-details sm-col-6">
                                  <p>
                                    Qty
                                  </p>
                                  <h3>
                                    5
                                  </h3>
                                </div>
                                <div className="b-details sm-col-6">
                                  <p>
                                    Purchase Consideration
                                  </p>
                                  <h3>
                                    ₹5,44,281.82
                                  </h3>
                                </div>
                                <div className="b-details sm-col-6 me-2 mb-2">
                                  <a
                                    className="btn btn-border"
                                    href="invested-bond-history.html"
                                  >
                                    View{' '}
                                    <img src={right_arrow_dash} />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 md-mt-1">
              <div className="bonds-card">
                <div className="b-bottom">
                  <div className="blur-bg blue" />
                  <div>
                    <div className="flex-wrap flex-center ms-2">
                      <h3>
                        Recent activity
                      </h3>
                      <div className="ml-auto me-3">
                        <a
                          className="font14"
                          href="order-history.html"
                        >
                          View all
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-1 r-card-overlap">
                  <div className="r-card-warpper ms-2">
                    <div className="row">
                      <div className="col-lg-8">
                        <div className="flex-wrap flex-top">
                          <div className="brand-small">
                            <div className="brand-img mr-2">
                              <img src={buy_full_icon} />
                            </div>
                          </div>
                          <div>
                            <h3 className="limited-text">
                              U.P.POWER CORPORATION LIMITED
                            </h3>
                            <ul className="info-list">
                              <li className="font14 light-gray-color">
                                Sep 26, 2024
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 text-right">
                        <p className="font14 brand-color">
                          {' '}₹20,58,827.14
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="r-card-warpper ms-2">
                    <div className="row">
                      <div className="col-lg-8">
                        <div className="flex-wrap flex-top">
                          <div className="brand-small">
                            <div className="brand-img mr-2">
                              <img src={buy_full_icon} />
                            </div>
                          </div>
                          <div>
                            <h3 className="limited-text">
                              POWER GRID CORPORATION OF INDIA LIMITED
                            </h3>
                            <ul className="info-list">
                              <li className="font14 light-gray-color">
                                Sep 24, 2024
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 text-right">
                        <p className="font14 brand-color">
                          {' '}₹54,14,846.53
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="r-card-warpper ms-2">
                    <div className="row">
                      <div className="col-lg-8">
                        <div className="flex-wrap flex-top">
                          <div className="brand-small">
                            <div className="brand-img mr-2">
                              <img src={buy_full_icon} />
                            </div>
                          </div>
                          <div>
                            <h3 className="limited-text">
                              BHANIX FINANCE AND INVESTMENT LIMITED
                            </h3>
                            <ul className="info-list">
                              <li className="font14 light-gray-color">
                                Sep 24, 2024
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 text-right">
                        <p className="font14 brand-color">
                          {' '}₹5,47,014.70
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="r-card-warpper ms-2">
                    <div className="row">
                      <div className="col-lg-8">
                        <div className="flex-wrap flex-top">
                          <div className="brand-small">
                            <div className="brand-img mr-2">
                              <img src={buy_full_icon} />
                            </div>
                          </div>
                          <div>
                            <h3 className="limited-text">
                              BHANIX FINANCE AND INVESTMENT LIMITED
                            </h3>
                            <ul className="info-list">
                              <li className="font14 light-gray-color">
                                Sep 24, 2024
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 text-right">
                        <p className="font14 brand-color">
                          {' '}₹5,47,014.70
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="r-card-warpper ms-2">
                    <div className="row">
                      <div className="col-lg-8">
                        <div className="flex-wrap flex-top">
                          <div className="brand-small">
                            <div className="brand-img mr-2">
                              <img src={buy_full_icon} />
                            </div>
                          </div>
                          <div>
                            <h3 className="limited-text">
                              BHANIX FINANCE AND INVESTMENT LIMITED
                            </h3>
                            <ul className="info-list">
                              <li className="font14 light-gray-color">
                                Sep 24, 2024
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 text-right">
                        <p className="font14 brand-color">
                          {' '}₹5,47,014.70
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
      {/* <div
        className="st-modal sellbond"
        data-modal="sellBond"
      >
        <div className="ds-card-box">
          <div className="square-card">
            <div
              className="ds-close"
              id="closeOTP"
            >
              <img
                src="images/aof/close-red.svg"
                style={{
                  height: '24px',
                  width: '24px'
                }}
              />
            </div>
            <div className="md-body">
              <form
                autoComplete="off"
                id="sellbondSubmit"
              >
                <div className="sell-head">
                  <div className="text-left">
                    <h3 className="title-3 flex-wrap">
                      <img
                        className="mr-2"
                        src="images/dashboard/icons/sell-icon.svg"
                      />
                      <div>
                        <span>
                          Sell your bond
                        </span>
                        <p>
                          To sell the bond with trust, kindly provide the requested details:
                        </p>
                      </div>
                    </h3>
                  </div>
                  <div className="sell-form-wrapper">
                    <div className="form-input">
                      <div className="ds-search-box">
                        <div className="ds-main-search">
                          <input
                            className="form-control search-scheme"
                            id="isinNumber"
                            name="isinNumber"
                            pattern="[A-Za-z]{3}[0-9]{1}[a-zA-Z]{3}[0-9]{5}"
                            placeholder="Enter.."
                            required
                            title="ISIN is not matched"
                            type="text"
                          />
                          <label className="input-overlay">
                            ISIN
                          </label>
                        </div>
                        <div className="search-mode search-items">
                          <ul className="search-list overflow-item">
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="form-input">
                      <input
                        className="form-control datepicker"
                        defaultValue=""
                        id="purchaseDate"
                        name="purchaseDate"
                        placeholder="Enter Date"
                        type="text"
                      />
                      <label className="input-overlay">
                        Date of purchase
                      </label>
                    </div>
                    <div className="form-input">
                      <input
                        className="form-control"
                        defaultValue=""
                        id="purchasePrice"
                        name="purchasePrice"
                        placeholder="Enter.."
                        required
                        type="number"
                      />
                      <label className="input-overlay">
                        Purchase Price
                      </label>
                    </div>
                    <div className="form-input">
                      <input
                        className="form-control"
                        defaultValue=""
                        id="totalpurchase"
                        name="totalpurchase"
                        placeholder="Enter.."
                        type="number"
                      />
                      <label className="input-overlay">
                        Total Purchase Consideration
                      </label>
                    </div>
                    <div className="form-input">
                      <input
                        className="form-control"
                        defaultValue=""
                        id="quantity"
                        maxLength="100"
                        minLength="1"
                        name="quantity"
                        placeholder="Enter.."
                        required
                        type="number"
                      />
                      <label className="input-overlay">
                        Units
                      </label>
                      <div
                        className="error"
                        id="error_exchange"
                      />
                    </div>
                  </div>
                </div>
                <div className="sell-form-body">
                  <div className="form-input sticky-bottom text-center">
                    <button
                      className="btn btn-primary d-block"
                      id="sellbondSubmit"
                    >
                      <span>
                        SELL
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        className="st-modal sellbond holdings-add"
        data-modal="addHoldings"
      >
        <div className="ds-card-box">
          <div className="square-card">
            <div
              className="ds-close"
              id="closeOTP"
            >
              <img src="images/icons/close-icon.svg" />
            </div>
            <div className="md-body">
              <form
                autoComplete="off"
                id="submitHoldings"
              >
                <div className="sell-head">
                  <div className="text-left">
                    <h3 className="title-3 flex-wrap">
                      <div>
                        <span>
                          Add your Holdings
                        </span>
                        <p>
                          To adding your holdings with trust, kindly provide the requested details:
                        </p>
                      </div>
                    </h3>
                  </div>
                  <div className="sell-form-wrapper">
                    <div className="form-input">
                      <div className="ds-search-box">
                        <div className="ds-main-search">
                          <label className="input-overlay">
                            <div className="flex-wrap flex-center">
                              <span>
                                ISIN
                              </span>
                            </div>
                          </label>
                          <input
                            className="form-control"
                            id="isinNumber_holding"
                            maxLength="12"
                            minLength="12"
                            name="isinNumber_holding"
                            placeholder="Enter.."
                            required
                            type="text"
                          />
                          <div
                            className="right-icons"
                            id="isin_respo"
                          />
                          <div
                            className="error"
                            id="isin_error"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-input">
                      <label className="input-overlay">
                        <div className="flex-wrap flex-center">
                          <span>
                            Date of purchase
                          </span>
                        </div>
                      </label>
                      <input
                        className="form-control datepicker"
                        defaultValue=""
                        id="purchaseDate_holding"
                        name="purchaseDate_holding"
                        placeholder="Enter Date"
                        required
                        type="text"
                      />
                    </div>
                    <div className="form-input">
                      <label className="input-overlay">
                        <div className="flex-wrap flex-center">
                          <span>
                            Purchase Price
                          </span>
                        </div>
                      </label>
                      <input
                        className="form-control"
                        defaultValue=""
                        id="purchasePrice_holding"
                        min="0"
                        name="purchasePrice_holding"
                        placeholder="Enter.."
                        required
                        type="number"
                      />
                    </div>
                    <div className="form-input">
                      <label className="input-overlay">
                        <div className="flex-wrap flex-center">
                          <span>
                            Total Purchase Consideration
                          </span>
                        </div>
                      </label>
                      <input
                        className="form-control"
                        defaultValue=""
                        id="totalpurchase_holding"
                        min="1"
                        name="totalpurchase_holding"
                        placeholder="Enter.."
                        required
                        type="number"
                      />
                    </div>
                    <div className="form-input">
                      <label className="input-overlay">
                        <div className="flex-wrap flex-center">
                          <span>
                            Quantity
                          </span>
                        </div>
                      </label>
                      <input
                        className="form-control"
                        defaultValue=""
                        id="quantity_holding"
                        maxLength="100"
                        min="1"
                        minLength="1"
                        name="quantity_holding"
                        placeholder="Enter.."
                        required
                        type="number"
                      />
                    </div>
                  </div>
                </div>
                <div className="sell-form-body">
                  <div className="form-input sticky-bottom text-center">
                    <button
                      className="btn btn-primary d-block"
                      id="submittedHolding"
                    >
                      <span>
                        ADD HOLDINGS
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        className="st-modal sellbond holdings-add"
        data-modal="sellbondSubmit"
      >
        <div className="ds-card-box">
          <div className="square-card">
            <div
              className="ds-close"
              id="closeOTP"
            >
              <img src="images/icons/close-icon.svg" />
            </div>
            <div className="md-body">
              <form id="quotedPriceSell">
                <div className="sell-head">
                  <div className="text-left">
                    <h3 className="title-3">
                      <span>
                        Quote your price
                      </span>
                      <p>
                        Trust Securities will respond promptly to your quoted price.
                      </p>
                    </h3>
                  </div>
                  <div className="sell-form-wrapper">
                    <div className="form-input">
                      <label className="input-overlay">
                        <div className="flex-wrap flex-center">
                          <span>
                            Enter Price
                          </span>
                        </div>
                      </label>
                      <input
                        className="form-control"
                        defaultValue=""
                        id="quote_price"
                        name="quote_price"
                        placeholder="Enter.."
                        required
                        type="number"
                      />
                      <input
                        className="form-control"
                        id="isinNumber_sell"
                        name="isinNumber_sell"
                        type="hidden"
                      />
                      <input
                        className="form-control"
                        id="order_sell"
                        name="order_sell"
                        type="hidden"
                      />
                      <div className="mt-1">
                        <p className="font12 alert-bg">
                          The quoted price will be negotiable. Trust Securities will send the negotiable price via Email/SMS.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sell-form-body">
                  <div className="form-input sticky-bottom text-center">
                    <button
                      className="btn btn-primary d-block"
                      id="submittedQuote"
                      type="submit"
                    >
                      <span>
                        SUBMIT
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        className="st-modal quoted-request sellbond"
        data-modal="submittedQuoteModel"
      >
        <div className="ds-card-box">
          <div className="square-card">
            <div className="ds-close">
              <img
                src="images/aof/close-red.svg"
                style={{
                  height: '24px',
                  width: '24px'
                }}
              />
            </div>
            <div className="md-body">
              <div id="optForm">
                <div className="form-input sell-head">
                  <div className="text-center">
                    <h3 className="title-3">
                      <img
                        className="mb-1"
                        src="images/dashboard/icons/check-fill.svg"
                        style={{
                          height: '70px',
                          width: '70px'
                        }}
                      />
                      <div>
                        <span>
                          Your Quote is Submitted Successfully.
                        </span>
                        <p>
                          Our Relationship Manager will connect with you soon to provide a requested quote from Trust Securities.
                        </p>
                        <p>
                        </p>
                      </div>
                    </h3>
                  </div>
                </div>
                <div className="sell-form-body">
                  <div className="form-input sticky-bottom text-center">
                    <button
                      className="btn btn-primary close-modal"
                      type="button"
                    >
                      <span>
                        Done
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="st-modal quoted-request sellbond"
        data-modal="submittedHolding"
      >
        <div className="ds-card-box">
          <div className="square-card">
            <div className="ds-close">
              <img
                src="images/aof/close-red.svg"
                style={{
                  height: '24px',
                  width: '24px'
                }}
              />
            </div>
            <div className="md-body">
              <div id="optForm">
                <div className="form-input sell-head">
                  <div className="text-center">
                    <h3 className="title-3">
                      <img
                        className="mb-1"
                        src="images/dashboard/icons/check-fill.svg"
                        style={{
                          height: '70px',
                          width: '70px'
                        }}
                      />
                      <div>
                        <span>
                          Holdings Added successfully to your account.
                        </span>
                        <p>
                          Thank you for choosing our services.
                        </p>
                        <p>
                        </p>
                      </div>
                    </h3>
                  </div>
                </div>
                <div className="sell-form-body">
                  <div className="form-input sticky-bottom text-center">
                    <a
                      className="btn btn-primary"
                      href="dashboard"
                    >
                      <span>
                        Done
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="d-none"
        id="loader"
      >
        <div className="full-loader">
          <span className="loader" />
        </div>
      </div> */}
    {/* </div>
  </div>
</div> */}
      </>
    )
}

export default Dashboard