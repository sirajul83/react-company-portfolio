import "./styles/Portfolio.css";

export default function PortfolioComponent(){
    return (
        <div className="container-fluid pt-5">
        <div className="container">
            <div className="text-center">
                <small className="bg-primary text-white text-uppercase font-weight-bold text-center px-1">Our Project</small>
                <h1 className="mt-2 mb-5">Step Tech working lots of project.</h1>
            </div>
            <div className="row">
                <div className="col-md-4 mb-5 ProjectDiv">
                    <div className="position-relative">
                        <img className="img-fluid w-100" src="assets/img/online-admission.jpg" alt="" />
                        
                    </div>
                    <div className="border border-top-0" style={{padding: '10px'}}>
                        <div className="d-flex mb-1">
                            <div className="d-flex align-items-center">
                                <h4>Online Admission</h4>
                            </div>
                        </div>
                        <h5>Online Registration, Application & Result Process</h5>
                    </div>
                </div>
                <div className="col-md-4 mb-5 ProjectDiv">
                    <div className="position-relative">
                        <img className="img-fluid w-100" src="assets/img/up_automation.9625550c.png" alt="" />
                        
                    </div>
                    <div className="border border-top-0" style={{padding: '10px'}}>
                        <div className="d-flex mb-1">
                            <div className="d-flex align-items-center">
                                <h4>UP Automation</h4>
                            </div>
                        </div>
                        <h5>Union Parisad Automation software</h5>
                    </div>
                </div>
                <div className="col-md-4 mb-5 ProjectDiv">
                    <div className="position-relative">
                        <img className="img-fluid w-100" src="assets/img/hospital_website.36f986c7.png" alt="" />
                        
                    </div>
                    <div className="border border-top-0" style={{padding: '10px'}}>
                        <div className="d-flex mb-1">
                            <div className="d-flex align-items-center">
                                <h4>Hospital Website</h4>
                            </div>
                        </div>
                        <h5>Hospital Website and Management System</h5>
                    </div>
                </div>
                <div className="col-md-4 mb-5 ProjectDiv">
                    <div className="position-relative">
                        <img className="img-fluid w-100" src="assets/img/du_club.84138d64.png" alt="" />
                        
                    </div>
                    <div className="border border-top-0" style={{padding: '10px'}}>
                        <div className="d-flex mb-1">
                            <div className="d-flex align-items-center">
                                <h4>Club Management</h4>
                            </div>
                        </div>
                        <h5>Member & Accounting Manage, Service Efficiency.</h5>
                    </div>
                </div>
                <div className="col-md-4 mb-5 ProjectDiv">
                    <div className="position-relative">
                        <img className="img-fluid w-100" src="assets/img/inventory_accounting.b5a1ae57.jpg" alt="" />
                        
                    </div>
                    <div className="border border-top-0" style={{padding: '10px'}}>
                        <div className="d-flex mb-1">
                            <div className="d-flex align-items-center">
                                <h4>Invantory & Accounting</h4>
                            </div>
                        </div>
                        <h5>Inventory Stock & Stock Management</h5>
                    </div>
                </div>
                <div className="col-md-4 mb-5 ProjectDiv">
                    <div className="position-relative">
                        <img className="img-fluid w-100" src="assets/img/construction_company.14c69cdc.jpg" alt="" />
                        
                    </div>
                    <div className="border border-top-0" style={{padding: '10px'}}>
                        <div className="d-flex mb-1">
                            <div className="d-flex align-items-center">
                                <h4>Construction Manage</h4>
                            </div>
                        </div>
                        <h5>Construction Company Project Management</h5>
                    </div>
                </div>
               
            </div>
        </div>
    </div>
    );
}
