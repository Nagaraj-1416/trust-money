import "@assets/profile.css"
import profile_icon from '../../assets/profile-icon.svg'; 
import email_icon from '../../assets/email.svg'; 
import mobile_icon from '../../assets/mobile.svg'; 
import location_icon from '../../assets/location.svg'; 
import profile_seetting from '../../assets/profile-setting.svg'; 
import bank_icon from '../../assets/bank.svg'; 
import user_icon from '../../assets/user.svg'; 
import secure_icon from '../../assets/secure-icon.svg'; 
import edit_profile from '../../assets/edit-profile.svg'; 

const Profile: React.FC = () => {
    return (
      <>
      <section className="profile-section pt-2">
      <div className="container">    
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="bonds-cards">
              <div className="row">
                <div className="col-lg-12">
                  <h2><img width="26px" height="26px" src={profile_icon} /> <span className="ml-02 font-3">Your Profile</span></h2>
                </div>                        
              </div>
              <div className="row mt-1">
                <div className="col-lg-12">              
                  <div className="bonds-card">                     
                    <div className="p-15">
                      <div className="prof-deatail">
                        <p className="text flex-wrap flex-center"><img className="mr-1" src={user_icon} /> <span>SARFARAZ ANSARI</span> <span className="ml-05">(S2358)</span></p>
                      </div>
                      <div className="mt-1 prof-deatail">
                        <p className="text flex-wrap flex-center"><img className="mr-1" src={email_icon} /> <span>sarfaraz.ansari@trustgroup.in</span></p>
                      </div>
                      <div className="mt-1 prof-deatail">
                        <p className="text flex-wrap flex-center"><img className="mr-1" src={mobile_icon} /> <span>+91 7208707204</span></p>
                      </div>
                      <div className="mt-1 prof-deatail">
                        <p className="text flex-wrap flex-center"><img className="mr-1" src={location_icon} /> <span>11 TH FLOOR NAMAN CENTREBKC   MUMBAI MAHARASHTRA</span></p>
                      </div>
                    </div>                  
                  </div>  
                  <div className="bonds-card">                     
                    <div className="p-15">
                      <div>
                        <div className="row">
                          <div className="col-lg-12">
                            <h3 className="title-3 flex-wrap flex-center"><img className="mr-1" src={profile_seetting} /> <span>Demat Details</span></h3>                        
                          </div>
                          <div className="col-lg-12 b-top mt-1">   
                            <div className="card-group">                                             
                              <div className="bonds-card">
                                <div className="row">
                                  <div className="col-lg-12">
                                    <div>
                                      <h4 className="title-4">DP Name:</h4>
                                      <p className="text">5PAISA CAPITAL LIMITED </p>
                                    </div>
                                  </div>
                                  <div className="col-6">
                                    <div className="mt-1">
                                      <h4 className="title-4">DP ID</h4>
                                      <p className="text">IN110002</p>
                                    </div>
                                  </div>
                                  <div className="col-6">
                                    <div className="mt-1">
                                      <h4 className="title-4">CLIENT ID</h4>
                                      <p className="text">11000018</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="tag-right nsdl-color">
                                  <span>NSDL</span>
                                </div>
                              </div>
                              <div className="bonds-card">
                                <div className="row">
                                  <div className="col-lg-12">
                                    <div>
                                      <h4 className="title-4">DP Name:</h4>
                                      <p className="text">IL&amp;FS SECURITIES SERVICES LTD </p>
                                    </div>
                                  </div>
                                  <div className="col-6">
                                    <div className="mt-1">
                                      <h4 className="title-4">DP ID</h4>
                                      <p className="text">IN300095</p>
                                    </div>
                                  </div>
                                  <div className="col-6">
                                    <div className="mt-1">
                                      <h4 className="title-4">CLIENT ID</h4>
                                      <p className="text">12345688</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="tag-right nsdl-color">
                                  <span>NSDL</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>                    
                      </div>
                    </div>                  
                  </div>
                  <div className="bonds-card">                     
                    <div className="p-15">
                      <div >
                        <div className="row">
                          <div className="col-lg-12">
                            <h3 className="title-3 flex-wrap flex-center"><img className="mr-1" src={bank_icon} /> <span>BANK A/C Details</span></h3>                        
                          </div>
                          <div className="col-lg-12 b-top mt-1">
                            <div className="card-group">                           
                              <div className="bonds-card bank">
                                <div className="row">
                                  <div className="col-lg-12 mb-1">                        
                                    <div >
                                      <h4 className="title-4">Bank Name</h4>
                                      <p className="text">AXIS BANK</p>
                                    </div>
                                  </div>    
                                  <div className="col-lg-4">                        
                                    <div >
                                      <h4 className="title-4">Bank Branch</h4>
                                      <p className="text">MUMBAI</p>
                                    </div>
                                  </div>             
                                  <div className="col-lg-4 lg-mt-1">
                                    <div>
                                      <h4 className="title-4">A/C NO</h4>
                                      <p className="text">0450504506585</p>
                                    </div>
                                  </div>
                                  <div className="col-lg-4 lg-mt-1">
                                    <div>
                                      <h4 className="title-4">IFSC CODE</h4>
                                      <p className="text">UTIB0000003</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="bonds-card bank">
                                <div className="row">
                                  <div className="col-lg-12 mb-1">                        
                                    <div >
                                      <h4 className="title-4">Bank Name</h4>
                                      <p className="text">HDFC BANK</p>
                                    </div>
                                  </div>    
                                  <div className="col-lg-4">                        
                                    <div >
                                      <h4 className="title-4">Bank Branch</h4>
                                      <p className="text">FORT</p>
                                    </div>
                                  </div>             
                                  <div className="col-lg-4 lg-mt-1">
                                    <div>
                                      <h4 className="title-4">A/C NO</h4>
                                      <p className="text">2000000020000018</p>
                                    </div>
                                  </div>
                                  <div className="col-lg-4 lg-mt-1">
                                    <div>
                                      <h4 className="title-4">IFSC CODE</h4>
                                      <p className="text">HDFC9999999</p>
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
                  <div className="bonds-card">                     
                    <div className="p-15">
                      <div >
                        <div className="row">
                          <div className="col-lg-12">
                            <h3 className="title-3 flex-wrap flex-center"><img className="mr-1" src={secure_icon} /> <span>Exhange Registration </span></h3>
                            <h3 className="title-3" />
                          </div>
                          <div className="col-lg-12">
                            <div className="row b-top mt-1">
                              <div className="col-lg-6">                        
                                <div className="mt-1">
                                  <h4 className="title-4">BSE</h4>
                                  <p className="text">Participant Code : SARFARAZA</p>
                                </div>
                              </div>
                              <div className="col-lg-6">                        
                                <div className="mt-1">
                                  <h4 className="title-4">NSE</h4>
                                  <p className="text">Participant Code : DUMMY1018A</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>                    
                      </div>
                    </div>                  
                  </div>
                  <button className="btn btn-primary st-open-modal mb-5" id="editProfile"><img className="mr-1" src={edit_profile} /> <span>Reset Password</span></button>
                </div>
              </div>
            </div>
          </div>          
        </div>
      </div></section>
      </>
    )
}

export default Profile