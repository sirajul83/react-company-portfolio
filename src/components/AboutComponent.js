
import React,{ useState, useEffect} from "react";
import axios from "axios";

export default function AboutComponent(){
    const [aboutheading, setAboutHeading] = useState('');
    const [companyinfo, setCompanyinfo] = useState('');

    useEffect(()=>{
        async function getAboutHeading(){
            try {
                const about_heading = await axios.get("http://localhost/step-techbd/api/about-heading")
                // console.log(about_heading.data.data)
                setAboutHeading(about_heading.data.data)
            } catch (error) {
                console.log(error)
            }
        }

        // company info 
        async function getCompanyinfo(){
            try {
                const company_info = await axios.get("http://localhost/step-techbd/api/companyinfo")
                    console.log(company_info.data.data)
                setCompanyinfo(company_info.data.data)
            } catch (error) {
                console.log(error)
            }
        }

        getAboutHeading();
        getCompanyinfo();
    }, [])

    return (
        <div className="container-fluid py-5">
            <div className="container">
                <div className="row align-items-center pb-1">
                    <div className="col-lg-5">
                        <img className="img-thumbnail p-3" src={"http://localhost/step-techbd/public/assets/images/"+aboutheading.image} alt="" />
                    </div>
                    <div className="col-lg-7 mt-5 mt-lg-0">
                        <small className="bg-primary text-white text-uppercase font-weight-bold px-1">{aboutheading.short_title}</small>
                        <h1 className="mt-2 mb-4">{aboutheading.title}</h1>
                        <p className="mb-4"> {aboutheading.description} </p>
                        <a href="#" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold">Read More</a>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-4">
                        <div className="d-flex align-items-center border mb-4 mb-lg-0 p-4" style={{height: '120px'}}>
                            <i className="fa fa-2x fa-map-marker-alt text-primary mr-3"></i>
                            <div className="d-flex flex-column">
                                <h5 className="font-weight-bold">Our Office</h5>
                                <p className="m-0">{companyinfo.address}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="d-flex align-items-center border mb-4 mb-lg-0 p-4" style={{height: '120px'}}>
                            <i className="fa fa-2x fa-envelope-open text-primary mr-3"></i>
                            <div className="d-flex flex-column">
                                <h5 className="font-weight-bold">Email Us</h5>
                                <p className="m-0">{companyinfo.email}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="d-flex align-items-center border mb-4 mb-lg-0 p-4" style={{height: '120px'}}>
                            <i className="fas fa-2x fa-phone-alt text-primary mr-3"></i>
                            <div className="d-flex flex-column">
                                <h5 className="font-weight-bold">Call Us</h5>
                                <p className="m-0">{companyinfo.mobile_no1}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}