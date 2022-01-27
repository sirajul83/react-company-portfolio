export default function Counter(){
    return (
        <div className="counters">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-6 text-center">
                        <i className="ion-md-person"></i>
                        <h2 data-toggle="counter-up">100</h2>
                        <p>Our Staffs</p>
                    </div>

                    <div className="col-lg-3 col-6 text-center">
                        <i className="ion-md-people"></i>
                        <h2 data-toggle="counter-up">200</h2>
                        <p>Our Clients</p>
                    </div>

                    <div className="col-lg-3 col-6 text-center">
                        <i className="ion-md-checkmark"></i>
                        <h2 data-toggle="counter-up">300</h2>
                        <p>Completed Projects</p>
                    </div>

                    <div className="col-lg-3 col-6 text-center">
                        <i className="ion-md-trending-up"></i>
                        <h2 data-toggle="counter-up">400</h2>
                        <p>Running Projects</p>
                    </div>
                </div>
            </div>
        </div>
    );
}