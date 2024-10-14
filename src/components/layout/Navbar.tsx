import { useState } from 'react';
import search_icon from '../../assets/search-icon.svg'; 
import caret_icon from '../../assets/caret.svg'; 
import profile_line from '../../assets/profile-line.svg'; 
import log_out from '../../assets/logout.svg'; 
import profile_icon from '../../assets/profile.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    
    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };
    
    return (
        <div className="container" style={{position:'sticky',top:'0px',zIndex:'9998',marginLeft:'7%'}}>
            <div className="row">
                <div className="col-lg-12">
                        <section className="main-header mt-1">
                            <div className="d-flex justify-content-between align-items-center flex-wrap">
                                <div className="ds-search-box" id="searchArea">
                                    <div className="ds-main-search d-flex align-items-center">
                                        <img
                                            className="ds-search-icon"
                                            height="17px"
                                            src={search_icon}
                                            width="17px"
                                            alt="Search Icon"
                                        />
                                        <img
                                            className="ds-search-icon-mob d-none"
                                            height="17px"
                                            src={search_icon}
                                            width="17px"
                                            alt="Search Icon Mobile"
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
                                            alt="Close Icon"
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
                </div>
            </div>
        </div>
    );
};

export default Navbar;
