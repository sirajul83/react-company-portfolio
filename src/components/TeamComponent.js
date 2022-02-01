export default function TeamComponent(){
    return (
        <>
       <div className="container-fluid pt-5">
   <div className="container">
      <div className="row">
         <div className="col-lg-4 mb-5">
            <small className="bg-primary text-white text-uppercase font-weight-bold px-1">Meet The Team</small>
            <h1 className="mt-2 mb-3">Meet Experts of Behind Work</h1>
            <h4 className="font-weight-normal text-muted mb-4">Eirmod diam magna sed sea rebum, elitr diam dolor lorem ipsum, ipsum stet magna ea diam vero stet vero</h4>
            <a href="" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold">Meet All Experts</a>
         </div>
         <div className="col-lg-8 mb-5">
            <div className="owl-carousel team-carousel owl-loaded owl-drag">
               <div className="owl-stage-outer">
                  <div className="owl-stage" style={{transition: 'all 1s ease 0s', width: '2534px', transform: "translate3d'(-1266px', '0px', '0px')"}}>
                     <div className="owl-item cloned" style={{width: '223.333px', marginRight: '30px'}}>
                        <div className="team-item">
                           <div className="position-relative">
                              <img className="img-fluid w-100" src="assets/img/team-2.jpg" alt="" />
                              <div className="team-overlay position-absolute d-flex align-items-center justify-content-center m-3">
                                 <div className="d-flex align-items-center justify-content-start">
                                   <a className="btn btn-outline-secondary rounded-circle text-center mr-2 px-0" style={{width: '38px', height: '38px'}} href="#"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-outline-secondary rounded-circle text-center mr-2 px-0" style={{width: '38px', height: '38px'}} href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-outline-secondary rounded-circle text-center px-0" style={{width: '38px', height: '38px'}} href="#"><i className="fab fa-linkedin-in"></i></a>
                                 </div>
                              </div>
                           </div>
                           <div className="border border-top-0 text-center" style={{padding: '30px'}}>
                              <h5 className="font-weight-bold">Kate Wilson</h5>
                              <span>Designer</span>
                           </div>
                        </div>
                     </div>
                     <div className="owl-item cloned" style={{width: '223.333px', marginRight: '30px'}}>
                        <div className="team-item">
                           <div className="position-relative">
                              <img className="img-fluid w-100" src="assets/img/team-3.jpg" alt="" />
                              <div className="team-overlay position-absolute d-flex align-items-center justify-content-center m-3">
                                 <div className="d-flex align-items-center justify-content-start">
                                    <a className="btn btn-outline-secondary rounded-circle text-center mr-2 px-0" style={{width: '38px', height: '38px'}} href="#"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-outline-secondary rounded-circle text-center mr-2 px-0" style={{width: '38px', height: '38px'}} href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-outline-secondary rounded-circle text-center px-0" style={{width: '38px', height: '38px'}} href="#"><i className="fab fa-linkedin-in"></i></a>
                                 </div>
                              </div>
                           </div>
                           <div className="border border-top-0 text-center" style={{padding: '30px'}}>
                              <h5 className="font-weight-bold">John Brown</h5>
                              <span>Developer</span>
                           </div>
                        </div>
                     </div>
                     <div className="owl-item active" style={{width: '223.333px', marginRight: '30px'}}>
                        <div className="team-item">
                           <div className="position-relative">
                              <img className="img-fluid w-100" src="assets/img/team-1.jpg" alt="" />
                              <div className="team-overlay position-absolute d-flex align-items-center justify-content-center m-3">
                                 <div className="d-flex align-items-center justify-content-start">
                                    <a className="btn btn-outline-secondary rounded-circle text-center mr-2 px-0" style={{width: '38px', height: '38px'}} href="#"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-outline-secondary rounded-circle text-center mr-2 px-0" style={{width: '38px', height: '38px'}} href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-outline-secondary rounded-circle text-center px-0" style={{width: '38px', height: '38px'}} href="#"><i className="fab fa-linkedin-in"></i></a>
                                 </div>
                              </div>
                           </div>
                           <div className="border border-top-0 text-center" style={{padding: '30px'}}>
                              <h5 className="font-weight-bold">John Brown</h5>
                              <span>Developer</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="owl-nav disabled">
                  <div className="owl-prev">prev</div>
                  <div className="owl-next">next</div>
               </div>
               <div className="owl-dots">
                  <div className="owl-dot"><span></span></div>
                  <div className="owl-dot"><span></span></div>
                  <div className="owl-dot"><span></span></div>
                  <div className="owl-dot active"><span></span></div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
        
        </>
    );

}