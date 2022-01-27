export default function Header(){
    return (
        <>
             <div className="header">
            <div id="header-slider" className="carousel slide" data-ride="carousel">
                <ul className="carousel-indicators">
                    <li data-target="#header-slider" data-slide-to="0" className="active"></li>
                    <li data-target="#header-slider" data-slide-to="1"></li>
                    <li data-target="#header-slider" data-slide-to="2"></li>
                </ul>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="carousel-content">
                                    <h2>Lorem ipsum</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur</p>
                                    <a className="btn" href="">Read More</a>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="carousel-img">
                                    <img src="img/slider-1.png" alt="Image" />
                                </div>
                            </div>
                        </div>   
                    </div>
                    <div className="carousel-item">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="carousel-content">
                                    <h2>Nulla tristique</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur</p>
                                    <a className="btn" href="">Read More</a>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="carousel-img">
                                    <img src="img/slider-2.png" alt="Image" />
                                </div>
                            </div>
                        </div>   
                    </div>
                    <div className="carousel-item">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="carousel-content">
                                    <h2>Pellentesque rutrum</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur</p>
                                    <a className="btn" href="">Read More</a>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="carousel-img">
                                    <img src="img/slider-3.png" alt="Images" />
                                </div>
                            </div>
                        </div>   
                    </div>
                </div>

                <a className="carousel-control-prev" href="#header-slider" data-slide="prev">
                    <i className="ion-ios-arrow-back"></i>
                </a>
                <a className="carousel-control-next" href="#header-slider" data-slide="next">
                    <i className="ion-ios-arrow-forward"></i>
                </a>
            </div>
        </div>
        </>
    );
}