export default function About(){
    return (
        <div className="about mt-100">
        <div className="container">
            <div className="section-header">
                <h2>About Us</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac lacus eget nunc imperdiet
                </p>
            </div>
            
            <div className="row align-items-center">
                <div className="col-md-12">
                    <div className="about-img">
                        <img src="img/about.jpg" alt="" className="img-fluid" />
                    </div>
                    <div className="about-content">
                        <h2>Welcome to Our Site</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum rutrum ligula. Integer ac porttitor mi. In finibus vehicula aliquet. Vestibulum et velit placerat pretium lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum rutrum ligula. Integer ac porttitor mi. In finibus vehicula aliquet. Vestibulum et velit placerat pretium lorem
                        </p>
                        <a className="btn" href="#">Read More</a>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <div className="about-img">
                        <img src="img/about-story.jpg" alt="" className="img-fluid" />
                    </div>
                    <div className="about-content">
                        <h2>Our Story</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum rutrum ligula. Integer ac porttitor mi. In finibus vehicula aliquet. Vestibulum et velit placerat pretium lorem
                        </p>
                        <a className="btn" href="#">Read More</a>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="about-img">
                        <img src="img/about-goal.jpg" alt="" className="img-fluid" />
                    </div>
                    <div className="about-content">
                        <h2>Our Goal</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum rutrum ligula. Integer ac porttitor mi. In finibus vehicula aliquet. Vestibulum et velit placerat pretium lorem
                        </p>
                        <a className="btn" href="#">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}