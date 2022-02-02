export default function TeamComponent(){
    return (
        <>
       <div className="container-fluid pt-5">
   <div className="container">
      <div className="row">
         <div className="col-lg-4 mb-5">
            <small className="bg-primary text-white text-uppercase font-weight-bold px-1">Meet The Team</small>
            <h1 className="mt-2 mb-3">Meet Experts of Behind Work</h1>
            <h4 className="font-weight-normal text-muted mb-4">Our team working more effectively, efficiently, or innovatively in carrying out complex cognitive.</h4>
         </div>
         <div className="col-lg-8 mb-5">
            <div className="owl-carousel team-carousel owl-loaded owl-drag">
               <div className="owl-stage-outer">
                  <div className="owl-stage" style={{transition: 'all 1s ease 0s', width: '2534px', transform: "translate3d'(-1266px', '0px', '0px')"}}>
                     <div className="owl-item cloned" style={{width: '223.333px', marginRight: '30px'}}>
                        <div className="team-item">
                           <div className="position-relative">
                              <img className="img-fluid w-100" src="assets/img/arif_ali_1.1552f424.jpg" alt="" />
                              <div className="team-overlay position-absolute d-flex align-items-center justify-content-center m-3">
                                 <div className="d-flex align-items-center justify-content-start">
                                   <a className="btn btn-outline-secondary rounded-circle text-center mr-2 px-0" style={{width: '38px', height: '38px'}} href="https://twitter.com/arifibneali"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-outline-secondary rounded-circle text-center mr-2 px-0" style={{width: '38px', height: '38px'}} href="https://facebook.com/arifibneali"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-outline-secondary rounded-circle text-center px-0" style={{width: '38px', height: '38px'}} href="https://linkedin.com/arifibneali"><i className="fab fa-linkedin-in"></i></a>
                                 </div>
                              </div>
                           </div>
                           <div className="border border-top-0 text-center" style={{padding: '30px'}}>
                              <h5 className="font-weight-bold">Arif Ibne Ali</h5>
                              <span>Managing Director</span>
                           </div>
                        </div>
                     </div>
                     <div className="owl-item cloned" style={{width: '223.333px', marginRight: '30px'}}>
                        <div className="team-item">
                           <div className="position-relative">
                              <img className="img-fluid w-100" src="assets/img/arif_rupom.48b108c0.jpg" alt="" />
                              <div className="team-overlay position-absolute d-flex align-items-center justify-content-center m-3">
                                 <div className="d-flex align-items-center justify-content-start">
                                    <a className="btn btn-outline-secondary rounded-circle text-center mr-2 px-0" style={{width: '38px', height: '38px'}} href="#"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-outline-secondary rounded-circle text-center mr-2 px-0" style={{width: '38px', height: '38px'}} href="https://www.facebook.com/arifrupom.0507"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-outline-secondary rounded-circle text-center px-0" style={{width: '38px', height: '38px'}} href="https://www.linkedin.com/in/arif-rupom-8451bb11b/"><i className="fab fa-linkedin-in"></i></a>
                                 </div>
                              </div>
                           </div>
                           <div className="border border-top-0 text-center" style={{padding: '30px'}}>
                              <h5 className="font-weight-bold">Ariful Islam</h5>
                              <span>Project Manager</span>
                           </div>
                        </div>
                     </div>
                     <div className="owl-item active" style={{width: '223.333px', marginRight: '30px'}}>
                        <div className="team-item">
                           <div className="position-relative">
                              <img className="img-fluid w-100" src="assets/img/omar_shohag.23b34d76.jpg" alt="" />
                              <div className="team-overlay position-absolute d-flex align-items-center justify-content-center m-3">
                                 <div className="d-flex align-items-center justify-content-start">
                                    <a className="btn btn-outline-secondary rounded-circle text-center mr-2 px-0" style={{width: '38px', height: '38px'}} href="#"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-outline-secondary rounded-circle text-center mr-2 px-0" style={{width: '38px', height: '38px'}} href="https://www.facebook.com/omarshohag93"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-outline-secondary rounded-circle text-center px-0" style={{width: '38px', height: '38px'}} href="https://www.linkedin.com/in/omar-shohag/"><i className="fab fa-linkedin-in"></i></a>
                                 </div>
                              </div>
                           </div>
                           <div className="border border-top-0 text-center" style={{padding: '30px'}}>
                              <h5 className="font-weight-bold">Md Omar Faruk</h5>
                              <span>Software Developer</span>
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