export default function Clients(){
    return (
        <div className="container-fluid pt-5">
   <div className="container">
      <div className="row">
         <div className="col-lg-4 mb-5">
            <small className="bg-primary text-white text-uppercase font-weight-bold px-1">What clients say</small>
            <h1 className="mt-2 mb-3">Clients Say About Our Services</h1>
            <h4 className="font-weight-normal text-muted mb-4">Lorem ut kasd elitr sed est duo ea ipsum justo diam, est erat lorem clita diam elitr</h4>
            <a href="" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold">Submit Review</a>
         </div>
         <div className="col-lg-8 mb-5">
            <div className="owl-carousel testimonial-carousel owl-loaded owl-drag">
               <div className="owl-stage-outer">
                  <div className="owl-stage" style={{transform: "translate3d('-1900px', '0px', '0px')", transition: 'all 1s ease 0s', width: '4180px'}}>
                     <div className="owl-item cloned" style={{width: '350px', marginRight: '30px'}}>
                        <div className="testimonial-item">
                           <div className="testimonial-text position-relative border mb-4" style={{padding: '25px 30px'}}>
                              Sed ea amet kasd elitr stet nonumy, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolores tempor voluptua ipsum sanctus clita
                           </div>
                           <div className="d-flex align-items-center">
                              <img className="img-fluid rounded-circle" src="assets/img/testimonial-3.jpg" style={{width: '80px', height: '80px'}} alt="" />
                              <div className="pl-4">
                                 <h6 className="font-weight-bold">Client Name</h6>
                                 <i className="text-muted">Profession</i>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="owl-item cloned" style={{width: '350px', marginRight: '30px'}}>
                        <div className="testimonial-item">
                           <div className="testimonial-text position-relative border mb-4" style={{padding: '25px 30px'}}>
                              Sed ea amet kasd elitr stet nonumy, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolores tempor voluptua ipsum sanctus clita
                           </div>
                           <div className="d-flex align-items-center">
                              <img className="img-fluid rounded-circle" src="assets/img/testimonial-4.jpg" style={{width: '80px', height: '80px'}} alt="" />
                              <div className="pl-4">
                                 <h6 className="font-weight-bold">Client Name</h6>
                                 <i className="text-muted">Profession</i>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="owl-item cloned" style={{width: '350px', marginRight: '30px'}}>
                        <div className="testimonial-item">
                           <div className="testimonial-text position-relative border mb-4" style={{padding:'25px 30px'}}>
                              Sed ea amet kasd elitr stet nonumy, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolores tempor voluptua ipsum sanctus clita
                           </div>
                           <div className="d-flex align-items-center">
                              <img className="img-fluid rounded-circle" src="assets/img/testimonial-5.jpg" style={{width: '80px', height: '80px'}} alt="" />
                              <div className="pl-4">
                                 <h6 className="font-weight-bold">Client Name</h6>
                                 <i className="text-muted">Profession</i>
                              </div>
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
                  <div className="owl-dot active"><span></span></div>
                  <div className="owl-dot"><span></span></div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
    );
}