
export default function HeaderSlider(){
    return (
        <>
            <div className="container-fluid p-0 mb-5">
                <div id="header-carousel" className="carousel slide carousel-fade" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#header-carousel" data-slide-to="0" className="active"></li>
                        <li data-target="#header-carousel" data-slide-to="1"></li>
                        <li data-target="#header-carousel" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="img-fluid" src="assets/img/carousel-1.jpg" alt="Image" />
                            <div className="carousel-caption d-flex align-items-center justify-content-center">
                                <div className="p-5" style={{width: '100%', maxWidth: '900px'}}>
                                    <h5 className="text-white text-uppercase mb-md-3">Creative Agency</h5>
                                    <h1 className="display-3 text-white mb-md-4">Creative Services For Brands Grow</h1>
                                    <a href="" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="img-fluid" src="assets/img/carousel-2.jpg" alt="Image" />
                            <div className="carousel-caption d-flex align-items-center justify-content-center">
                                <div className="p-5" style={{width: '100%', maxWidth: '900px'}}>
                                    <h5 className="text-white text-uppercase mb-md-3">Creative Agency</h5>
                                    <h1 className="display-3 text-white mb-md-4">Highly Professional Team Members</h1>
                                    <a href="" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="img-fluid" src="assets/img/carousel-3.jpg" alt="Image" />
                            <div className="carousel-caption d-flex align-items-center justify-content-center">
                                <div className="p-5" style={{width: '100%', maxWidth: '900px'}}>
                                    <h5 className="text-white text-uppercase mb-md-3">Creative Agency</h5>
                                    <h1 className="display-3 text-white mb-md-4">Happy Clients & Positive Reviews</h1>
                                    <a href="" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}