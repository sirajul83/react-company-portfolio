export default function Portfolio(){
    return (
        <div className="portfolio mt-100">
            <div className="container">
                <div className="section-header">
                    <h2>Our Portfolio</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac lacus eget nunc imperdiet 
                    </p>
                </div>

                <div className="row portfolio-container">
                    <div className="col-lg-4 col-md-6 portfolio-item">
                        <div className="portfolio-img">
                            <img src="img/portfolio-1.jpg" className="img-fluid" alt="Portfolio" />
                            <a href="img/portfolio-1.jpg" data-lightbox="portfolio" data-title="Lorem ipsum dolor" className="link-preview" title="Preview"><i className="ion-md-eye"></i></a>
                            <a href="" className="link-details" title="More Details"><i className="ion-md-open"></i></a>
                        </div>

                        <div className="portfolio-info">
                            <h3>Lorem ipsum dolor</h3>
                            <p>Web Design</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item">
                        <div className="portfolio-img">
                            <img src="img/portfolio-2.jpg" className="img-fluid" alt="Portfolio" />
                            <a href="img/portfolio-2.jpg" className="link-preview" data-lightbox="portfolio" data-title="Nulla ullamcorper pharetra" title="Preview"><i className="ion-md-eye"></i></a>
                            <a href="" className="link-details" title="More Details"><i className="ion-md-open"></i></a>
                        </div>

                        <div className="portfolio-info">
                            <h3>Nulla ullamcorper pharetra</h3>
                            <p>Web Development</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item">
                        <div className="portfolio-img">
                            <img src="img/portfolio-3.jpg" className="img-fluid" alt="Portfolio" />
                            <a href="img/portfolio-3.jpg" className="link-preview" data-lightbox="portfolio" data-title="Phasellus eget dictum" title="Preview"><i className="ion-md-eye"></i></a>
                            <a href="" className="link-details" title="More Details"><i className="ion-md-open"></i></a>
                        </div>

                        <div className="portfolio-info">
                            <h3>Phasellus eget dictum</h3>
                            <p>App Design</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item">
                        <div className="portfolio-img">
                            <img src="img/portfolio-4.jpg" className="img-fluid" alt="Portfolio" />
                            <a href="img/portfolio-4.jpg" data-lightbox="portfolio" data-title="Lorem ipsum dolor" className="link-preview" title="Preview"><i className="ion-md-eye"></i></a>
                            <a href="" className="link-details" title="More Details"><i className="ion-md-open"></i></a>
                        </div>

                        <div className="portfolio-info">
                            <h3>Donec mattis vestibulum</h3>
                            <p>App Development</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item">
                        <div className="portfolio-img">
                            <img src="img/portfolio-5.jpg" className="img-fluid" alt="Portfolio" />
                            <a href="img/portfolio-5.jpg" className="link-preview" data-lightbox="portfolio" data-title="Nulla ullamcorper pharetra" title="Preview"><i className="ion-md-eye"></i></a>
                            <a href="" className="link-details" title="More Details"><i className="ion-md-open"></i></a>
                        </div>

                        <div className="portfolio-info">
                            <h3>Pellentesque ullamcorper</h3>
                            <p>Web Design</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item">
                        <div className="portfolio-img">
                            <img src="img/portfolio-6.jpg" className="img-fluid" alt="Portfolio" />
                            <a href="img/portfolio-6.jpg" className="link-preview" data-lightbox="portfolio" data-title="Phasellus eget dictum" title="Preview"><i className="ion-md-eye"></i></a>
                            <a href="" className="link-details" title="More Details"><i className="ion-md-open"></i></a>
                        </div>

                        <div className="portfolio-info">
                            <h3>Sed pretium sapien</h3>
                            <p>Web Development</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}