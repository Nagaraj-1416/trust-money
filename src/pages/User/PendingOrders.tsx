import '../../assets/pendinorder.css'
import delete_icon from '../../assets/delete.svg'
import default_icon from '../../assets/default-icon.jpg'
import history_active from '../../assets/history-active.svg'
import right_double_arrow from '../../assets/right-double-arrow.svg'
const PendingOrders = () => {
  return (
    <section className="profile-section pt-2">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 m-auto">
          <div className="bonds-cards md:bonds-cards">
            <div className="row">
              <div className="col-lg-12">
                <h2>
                  <img
                    width="26px"
                    height="26px"
                    src={history_active}
                  />{" "}
                  <span className="ml-02 font-3">Pending Orders</span>
                </h2>
              </div>
            </div>
            <div className="row mt-1">
              <div className="col-lg-12">
                <a href="bond-detail.html" className="bonds-card">
                  <div className="b-bottom">
                    <div className="p-1 p-relative">
                      <div className="flex-wrap flex-start">
                        <div className="flex-wrap flex-center flex-resposive">
                          <div className="brand-img mr-2">
                            <img src={default_icon} />
                          </div>
                          <div className="lg-mt-05">
                            <h3>
                              SUGMYA FINANCE PRIVATE LIMITED{" "}
                              <span className="info-tag">BSE</span>
                            </h3>
                            <ul className="info-list mt-03 flex-wrap flex-center">
                              <li>
                                <span className="info-tag">INE0NSW07123 </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="ml-auto p-right">
                          <div className="flex-wrap flex-center">
                            <button
                              className="remove-btn"
                              data-remove="35cf8659cfcb13224cbd47863a34fc58"
                            >
                              <img
                                width="16px"
                                height="16px"
                                src={delete_icon}
                                alt="Delete"
                              />{" "}
                              <span className="ml-02">REMOVE</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-1">
                    <div className="flex-wrap justify-between normal-sm">
                      <div className="b-details sm-col-6">
                        <p>Date</p>
                        <h3>27-Sep-2024</h3>
                      </div>
                      <div className="b-details sm-col-6">
                        <p>No of units</p>
                        <h3>9</h3>
                      </div>
                      <div className="b-details sm-col-6">
                        <p>Type</p>
                        <h3 className="sucess-text">BUY</h3>
                      </div>
                      <div className="b-details sm-col-6">
                        <h3 className="brand-color">
                          Preview &amp; place <br />
                          order{" "}
                          <img
                            width="13px"
                            height="13px"
                            src={right_double_arrow}
                          />
                        </h3>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-12 mt-2 d-none" id="emptyBox">
                <div className="text-center">
                  <img
                    width="210px"
                    src="images/dashboard/no-pending-orders.svg"
                  />
                  <div className="mt-1">
                    <h3 className="title-2">No Pending Orders</h3>
                    <p className="font14 light-gray-color">
                      We are happy to inform you that there are currently no
                      pending orders.
                    </p>
                    <div className="index-btn p-relative mt-2">
                      <a
                        href="discover-bonds"
                        className="btn btn-border border-gradient"
                      >
                        <span>Explore Bonds</span>
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
  </section>
  
  )
}

export default PendingOrders