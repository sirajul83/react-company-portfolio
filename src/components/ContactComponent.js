import React,{ useState, useEffect} from "react";
import axios from "axios";
import useApiurl from "./hooks/apiUrl";

export default function ContactComponent(){
    const url = useApiurl();  
    const [companyinfo, setCompanyinfo] = useState('');
    useEffect(()=>{
        async function getCompanyinfo(){
            try {
                const company_info = await axios.get(url+"api/companyinfo")
                    //console.log(company_info.data.data)
                setCompanyinfo(company_info.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        getCompanyinfo();

    }, []);

    const [name, setName]       = useState('');
    const [email, setEmail]     = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState('');
    const [error, setError]     = useState(null);


    const contactSubmit = (e) =>{
        e.preventDefault();
        setLoading(true);
        let  item = { name, email, subject, message};
        
        axios.post(url+"api/contact",item)
        .then((response) => {
            // console.log(response.data.message);
            setSuccess(response.data.message);
        }).catch((err) => {
            setError(err);
        }).finally(() => {
            setLoading(false);
        })
    }
    
    if(loading) return <h3>Loading..</h3>
    if(error) return <h3>Something Wrong try again..</h3>
    // console.log(success);
    return (
        <div className="container-fluid py-5">
        <div className="container">
            <div className="text-center">
                <small className="bg-primary text-white text-uppercase font-weight-bold text-center px-1">Get In Touch</small>
                <h1 className="mt-2 mb-5">Contact For Any Queries</h1>
            </div>
            <div className="row">
                <div className="col-md-5">
                    <div className="d-flex align-items-center border mb-3 p-4">
                        <i className="fa fa-2x fa-map-marker-alt text-primary mr-3"></i>
                        <div className="d-flex flex-column">
                            <h5 className="font-weight-bold">Our Office</h5>
                            <p className="m-0"> {companyinfo.address}</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center border mb-3 p-4">
                        <i className="fa fa-2x fa-envelope-open text-primary mr-3"></i>
                        <div className="d-flex flex-column">
                            <h5 className="font-weight-bold">Email Us</h5>
                            <p className="m-0">{companyinfo.email}</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center border mb-3 mb-md-0 p-4">
                        <i className="fas fa-2x fa-phone-alt text-primary mr-3"></i>
                        <div className="d-flex flex-column">
                            <h5 className="font-weight-bold">Call Us</h5>
                            <p className="m-0">{companyinfo.mobile_no1} </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="contact-form">
                      
                        <div id="success"></div>
                        <form  onSubmit={contactSubmit} >
                            <div className="form-row">
                                <div className="col-md-6">
                                    <div className="control-group">
                                        <input type="text" className="form-control p-4" id="name" onChange={ (e) => setName(e.target.value)} placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="control-group">
                                        <input type="email" className="form-control p-4" id="email" onChange={ (e) => setEmail(e.target.value)} placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                            </div>
                            <div className="control-group">
                                <input type="text" className="form-control p-4" id="subject" onChange={ (e) => setSubject(e.target.value)} placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <textarea className="form-control" rows="5" id="message" onChange={ (e) => setMessage(e.target.value)} placeholder="Message" required="required" data-validation-required-message="Please enter your message"></textarea>
                                <p className="help-block text-danger"></p>
                            </div>
                            <div>
                                <button className="btn btn-primary font-weight-semi-bold px-4" style={{height: '50px'}} type="submit" id="sendMessageButton">Send Message</button> <span style={{color:"green"}}>   {success}</span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}