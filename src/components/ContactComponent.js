export default function ContactComponent(){
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
                            <p className="m-0">Nilkhet Rd, Dhaka 1000</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center border mb-3 p-4">
                        <i className="fa fa-2x fa-envelope-open text-primary mr-3"></i>
                        <div className="d-flex flex-column">
                            <h5 className="font-weight-bold">Email Us</h5>
                            <p className="m-0">info@steptechbd.com</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center border mb-3 mb-md-0 p-4">
                        <i className="fas fa-2x fa-phone-alt text-primary mr-3"></i>
                        <div className="d-flex flex-column">
                            <h5 className="font-weight-bold">Call Us</h5>
                            <p className="m-0">+880 1672-758084 </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="contact-form">
                        <div id="success"></div>
                        <form name="sentMessage" id="contactForm" novalidate="novalidate" action="javascript:(void)">
                            <div className="form-row">
                                <div className="col-md-6">
                                    <div className="control-group">
                                        <input type="text" className="form-control p-4" id="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="control-group">
                                        <input type="email" className="form-control p-4" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                            </div>
                            <div className="control-group">
                                <input type="text" className="form-control p-4" id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <textarea className="form-control" rows="5" id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message"></textarea>
                                <p className="help-block text-danger"></p>
                            </div>
                            <div>
                                <button className="btn btn-primary font-weight-semi-bold px-4" style={{height: '50px'}} type="submit" id="sendMessageButton">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}