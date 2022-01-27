export default function Pricing(){
    return (
        <div className="pricing mt-100">
        <div className="container">
            <div className="section-header">
                <h2>Our Pricing</h2>
                <p>
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas 
                </p>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="price-content">
                        <div className="price-plan">
                            <i className="ion-md-home"></i>
                            <p className="price-title">Silver</p>
                            <h2 className="price-amount"><span>$</span>9<span>.99</span><span> / m</span></h2>
                        </div>
                        <ul className="price-details">
                            <li><i className="ion-md-checkmark"></i><strong>HTML5</strong> and <strong>CSS3</strong></li>
                            <li><i className="ion-md-checkmark"></i><strong>Bootstrap 4</strong></li>
                            <li><i className="ion-md-checkmark"></i><strong>Well-commented</strong> code</li>
                            <li><i className="ion-md-close"></i><strong>IonIcons</strong> integrated</li>
                            <li><i className="ion-md-close"></i>Free <strong>Google Font</strong> integrated</li>
                            <li><i className="ion-md-close"></i><strong>Responsive</strong> design</li>
                        </ul>
                        <a href="#" className="btn mian-btn price-btn">Buy Now</a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="price-content features-price">
                        <div className="price-plan">
                            <i className="ion-md-star"></i>
                            <p className="price-title">Gold</p>
                            <h2 className="price-amount"><span>$</span>19<span>.99</span><span> / m</span></h2>
                        </div>
                        <ul className="price-details">
                            <li><i className="ion-md-checkmark"></i><strong>HTML5</strong> and <strong>CSS3</strong></li>
                            <li><i className="ion-md-checkmark"></i><strong>Bootstrap 4</strong></li>
                            <li><i className="ion-md-checkmark"></i><strong>Well-commented</strong> code</li>
                            <li><i className="ion-md-checkmark"></i><strong>IonIcons</strong> integrated</li>
                            <li><i className="ion-md-checkmark"></i>Free <strong>Google Font</strong> integrated</li>
                            <li><i className="ion-md-close"></i><strong>Responsive</strong> design</li>
                        </ul>
                        <a href="#" className="btn mian-btn price-btn features-price-btn">Buy Now</a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="price-content">
                        <div className="price-plan">
                            <i className="ion-md-gift"></i>
                            <p className="price-title">Platinum</p>
                            <h2 className="price-amount"><span>$</span>29<span>.99</span><span> / m</span></h2>
                        </div>
                        <ul className="price-details">
                            <li><i className="ion-md-checkmark"></i><strong>HTML5</strong> and <strong>CSS3</strong></li>
                            <li><i className="ion-md-checkmark"></i><strong>Bootstrap 4</strong></li>
                            <li><i className="ion-md-checkmark"></i><strong>Well-commented</strong> code</li>
                            <li><i className="ion-md-checkmark"></i><strong>IonIcons</strong> integrated</li>
                            <li><i className="ion-md-checkmark"></i>Free <strong>Google Font</strong> integrated</li>
                            <li><i className="ion-md-checkmark"></i><strong>Responsive</strong> design</li>
                        </ul>
                        <a href="#" className="btn mian-btn price-btn">Buy Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}