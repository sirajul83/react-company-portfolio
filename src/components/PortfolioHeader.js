
export default function PortfolioHeader(){
    return (
        <div className="container-fluid page-header d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5 mb-5">
            <h1 className="display-4 text-white mb-3 mt-0 mt-lg-5">Portfolio</h1>
            <div className="d-inline-flex text-white">
                <p className="m-0"><a className="text-white" href="">Home</a></p>
                <p className="m-0 px-2">/</p>
                <p className="m-0">Portfolio</p>
            </div>
        </div>
    );
}