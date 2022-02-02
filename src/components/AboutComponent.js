export default function AboutComponent(){
    return (
        <div className="container-fluid py-5">
            <div className="container">
                <div className="row align-items-center pb-1">
                    <div className="col-lg-5">
                        <img className="img-thumbnail p-3" src="assets/img/about.jpg" alt="" />
                    </div>
                    <div className="col-lg-7 mt-5 mt-lg-0">
                        <small className="bg-primary text-white text-uppercase font-weight-bold px-1">Who We Are</small>
                        <h1 className="mt-2 mb-4">Step Tech is the best software firms in Bangladesh</h1>
                        <p className="mb-4">Eirmod est dolor nonumy sea amet dolore erat sit dolor et dolor vero. Tempor ipsum at justo amet at ipsum justo. Aiam kasd sea sit dolor duo elitr dolor amet, justo est ipsum amet dolor ut ipsum. Labore diam et nonumy amet dolores. Volup sit labore dolores erat, magna justo sed lorem kasd ea dolor. Labore sit clita invidunt, est dolores lorem sed ipsum kasd no amet ipsum.</p>
                        <a href="" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold">Read More</a>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-4">
                        <div className="d-flex align-items-center border mb-4 mb-lg-0 p-4" style={{height: '120px'}}>
                            <i className="fa fa-2x fa-map-marker-alt text-primary mr-3"></i>
                            <div className="d-flex flex-column">
                                <h5 className="font-weight-bold">Our Office</h5>
                                <p className="m-0">House#74, Road # 21, Block #B, Banani, Dhaka-1213, Bangladesh</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="d-flex align-items-center border mb-4 mb-lg-0 p-4" style={{height: '120px'}}>
                            <i className="fa fa-2x fa-envelope-open text-primary mr-3"></i>
                            <div className="d-flex flex-column">
                                <h5 className="font-weight-bold">Email Us</h5>
                                <p className="m-0">info@steptechbd.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="d-flex align-items-center border mb-4 mb-lg-0 p-4" style={{height: '120px'}}>
                            <i className="fas fa-2x fa-phone-alt text-primary mr-3"></i>
                            <div className="d-flex flex-column">
                                <h5 className="font-weight-bold">Call Us</h5>
                                <p className="m-0">+880 1672-758084</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}