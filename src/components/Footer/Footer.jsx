import './Footer.css';
import iconSend from '../../assets/icons/icon-send.svg';
import facebookIcon from "../../assets/icons/Icon-Facebook.svg";
import twitetrIcon from "../../assets/icons/Icon-Twitter.png";
import instagramIcon from "../../assets/icons/Icon-instagram.svg";
import linkedinIcon from "../../assets/icons/Icon-linkedin.svg";
import qrCode from "../../assets/QrCode.png";
import androidStore from "../../assets/androidstore.png";
import appleStore from "../../assets/applestore.png";
import copyright from "../../assets/icons/icon-copyright.png";
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Footer = () => {
  
    return (
        <footer className='footer'>
            <div className="footer-rows">
            <div className="container">

              
                    <div className="row justify-content-start justify-content-center-sm">
                        <div className="col-sm-8 col-md-5 col-lg-3">
                            <ul>

                                <h3 className='mb-4'>exclusive</h3>
                                <li>subscribe</li>
                                <li>Get 10% off your first order</li>
                                <li>
                                    <div className="email-subscrib  border p-2 rounded">
                                        <input className="emailsub border-0 w-75" type="email" placeholder='Enter your email' />
                                        <img src={iconSend} className="ms-3" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-4 col-md-3 col-lg-2">
                            <h3 className='mb-4'>Quick Link</h3>
                            <ul>
                                <li><a href="">privacy policy</a></li>
                                <li><a href="">terms of use</a></li>
                                <li><a href="">faq</a></li>
                                <li><a href="">contact</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-5 col-md-3 col-lg-2">
                            <h3 className='mb-4'>Account</h3>
                            <ul>
                                <li><a href="">My Account</a></li>
                                <li><a href="">Login / Register</a></li>
                                <li><a href="">Cart</a></li>
                                <li><a href="">Wishlist</a></li>
                                <li><a href="">Shop</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-3 col-lg-2 me-lg-5">
                            <h3 className='mb-4'>Support</h3>
                            <ul>
                                <li>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</li>
                                <li>exclusive@gmail.com</li>
                                <li>+88015-88888-9999</li>
                            </ul>
                        </div>
                        <div className="sol-sm-6 col-md-3 col-lg-2">
                            <h3 className='mb-4'>Download App</h3>
                            <ul>

                                <li className='textSmall fw-light '>Save $3 with App New User Only</li>
                                <li className="d-flex justify-content-between">
                                    <div className="qr w-100">
                                        <img src={qrCode} alt="qr-code" />
                                    </div>
                                    <div className="stores  w-50 d-flex flex-column justify-content-between">
                                        <div className="android">
                                            <img src={androidStore} alt="android Store" />

                                        </div>
                                        <div className="apple">
                                            <img src={appleStore} alt="apple store" />

                                        </div>
                                    </div>
                                </li>
                                <li className="d-flex gap-4">
                                    <img src={facebookIcon} alt="social media icon" />
                                    <img src={twitetrIcon} alt="social media icon" />
                                    <img src={instagramIcon} alt="social media icon" />
                                    <img src={linkedinIcon} alt="social media icon" />
                                </li>
                            </ul>
                        </div>



                    </div>
                </div>
            </div>
            <div className="copy-right p-2 h-100 w-100 d-flex justify-content-center align-items-center">
                <FontAwesomeIcon icon={faCopyright} className="copy-right-icon"/>
                <p className='p-0 m-0'>

                    Copyright Rimel 2022. All right reserved
                </p>
            </div>
        </footer>
    )
}

export default Footer;