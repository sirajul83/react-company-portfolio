
import React,{ useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Footer(){
    const [companyinfo, setCompanyinfo] = useState('');
    useEffect(()=>{
        async function getCompanyinfo(){
            try {
                const company_info = await axios.get("http://localhost/step-techbd/api/companyinfo")
                   // console.log(company_info.data.data)
                setCompanyinfo(company_info.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        getCompanyinfo();

    }, [])
    //console.log(companyinfo);
    return (
        <>
            <div className="container-fluid bg-secondary text-white mt-5 pt-5 px-sm-3 px-md-5">
                <div className="row pt-5">
                    <div className="col-lg-3 col-md-6 mb-5">
                        <Link to="/" className="navbar-brand">
                            <h1 className="m-0 mt-n2 text-white display-4"><span className="text-primary">S</span>tep<span className="text-primary">T</span>ech</h1>
                        </Link>
                        <p>{companyinfo.slogan}</p>
                        <div className="d-flex justify-content-start mt-4">
                            <Link className="btn btn-outline-primary rounded-circle text-center mr-2 px-0" style={{width: '38px', height: '38px'}} to={"www.twitter.com"+companyinfo.twitter}><i className="fab fa-twitter"></i></Link>
                            <Link className="btn btn-outline-primary rounded-circle text-center mr-2 px-0" style={{width: '38px', height: '38px'}} to={"www.facebook.com"+companyinfo.facebook}><i className="fab fa-facebook-f"></i></Link>
                            <Link className="btn btn-outline-primary rounded-circle text-center mr-2 px-0" style={{width: '38px', height: '38px'}} to={"www.linkedin"+companyinfo.linkedIn}><i className="fab fa-linkedin-in"></i></Link>
                            <Link className="btn btn-outline-primary rounded-circle text-center mr-2 px-0" style={{width: '38px', height: '38px'}} to={"www.instagram"}><i className="fab fa-instagram"></i></Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5">
                        <h5 className="font-weight-bold text-primary mb-4">Quick Links</h5>
                        <div className="d-flex flex-column justify-content-start">
                            <Link className="text-white mb-2" to="/"><i className="fa fa-angle-right text-primary mr-2"></i>Home</Link>
                            <Link className="text-white mb-2" to="about"><i className="fa fa-angle-right text-primary mr-2"></i>About Us</Link>
                            <Link className="text-white mb-2" to="service"><i className="fa fa-angle-right text-primary mr-2"></i>Services</Link>
                            <Link className="text-white mb-2" to="portfolio"><i className="fa fa-angle-right text-primary mr-2"></i>Portfolio</Link>
                            <Link className="text-white mb-2" to="team"><i className="fa fa-angle-right text-primary mr-2"></i>Team</Link>
                            <Link className="text-white" to="contact"><i className="fa fa-angle-right text-primary mr-2"></i>Contact Us</Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5">
                        <h5 className="font-weight-bold text-primary mb-4">Popular Links</h5>
                        <div className="d-flex flex-column justify-content-start">
                            <Link className="text-white mb-2" to="#"><i className="fa fa-angle-right text-primary mr-2"></i>Home</Link>
                            <Link className="text-white mb-2" to="#"><i className="fa fa-angle-right text-primary mr-2"></i>About Us</Link>
                            <Link className="text-white mb-2" to="#"><i className="fa fa-angle-right text-primary mr-2"></i>Services</Link>
                            <Link className="text-white mb-2" to="#"><i className="fa fa-angle-right text-primary mr-2"></i>Portfolio</Link>
                            <Link className="text-white mb-2" to="#"><i className="fa fa-angle-right text-primary mr-2"></i>Team</Link>
                            <Link className="text-white" to="#"><i className="fa fa-angle-right text-primary mr-2"></i>Contact Us</Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5">
                        <h5 className="font-weight-bold text-primary mb-4">Get In Touch</h5>
                        <p><i className="fa fa-map-marker-alt text-primary mr-2"></i> {companyinfo.address}</p>
                        <p><i className="fa fa-phone-alt text-primary mr-2"></i>{companyinfo.mobile_no1}</p>
                        <p><i className="fa fa-phone-alt text-primary mr-2"></i>{companyinfo.mobile_no2}</p>
                        <p><i className="fa fa-envelope text-primary mr-2"></i>{companyinfo.email}</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid py-4 px-sm-3 px-md-5">
                <p className="m-0 text-center">
                    &copy; 2022  <a className="font-weight-semi-bold" href="#">STEP TECH</a>. All Rights Reserved. Designed by
                    <a className="font-weight-semi-bold" href="#"> STEP TECH</a>
                </p>
            </div>
        </>
    );
}