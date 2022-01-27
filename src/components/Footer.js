import * as React from "react";
import {Link} from "react-router-dom";

export default function Footer(){
    return (
        <>
            <div className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>About Us</h4>
                            <ul>
                                <li><i className="ion-ios-arrow-forward"></i> <Link to="/">Home</Link></li>
                                <li><i className="ion-ios-arrow-forward"></i> <Link to="about">About us</Link></li>
                                <li><i className="ion-ios-arrow-forward"></i> <Link to="service">Our services</Link></li>
                                <li><i className="ion-ios-arrow-forward"></i> <Link to="/">Terms & condition</Link></li>
                                <li><i className="ion-ios-arrow-forward"></i> <Link to="/">Privacy policy</Link></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><i className="ion-ios-arrow-forward"></i> <a href="#">Lorem ipsum</a></li>
                                <li><i className="ion-ios-arrow-forward"></i> <a href="#">Pellentesque</a></li>
                                <li><i className="ion-ios-arrow-forward"></i> <a href="#">Suspendisse egestas</a></li>
                                <li><i className="ion-ios-arrow-forward"></i> <a href="#">Nulla tristique</a></li>
                                <li><i className="ion-ios-arrow-forward"></i> <a href="#">Phasellus leo</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-contact">
                            <h4>Contact Us</h4>
                            <p>
                               1/29 Asad Avenue, Mohammadpur-1207<br />
                                DHaka <br />
                                Bangladesh <br />
                                <strong>Phone:</strong> 01866543951<br />
                                <strong>Email:</strong> Step@example.com<br />
                            </p>

                            <div className="social-links">
                                <a href="#"><i className="ion-logo-twitter"></i></a>
                                <a href="#"><i className="ion-logo-facebook"></i></a>
                                <a href="#"><i className="ion-logo-linkedin"></i></a>
                                <a href="#"><i className="ion-logo-instagram"></i></a>
                                <a href="#"><i className="ion-logo-googleplus"></i></a>
                            </div>

                        </div>

                        <div className="col-lg-3 col-md-6 footer-newsletter">
                            <h4>Subscription</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
                            <form action="" method="post">
                                <input type="email" name="email" /><input type="submit"  value="Subscribe" />
                            </form>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 copyright">
                        Copyright &copy; 2022 <a href="#"> Step Technology </a>. All Rights Reserved
                    </div>
                    <div className="col-md-6 credit">
                        Designed by <a href="#"> Step Teach </a>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}