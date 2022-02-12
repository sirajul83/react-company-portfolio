import React,{ useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import useApiurl from "./hooks/apiUrl";

export default function TeamComponent(){
   const url = useApiurl();    
   const [teamheading, setTeamHeading] = useState('');
   const [team, setpTeam] = useState([]);

   useEffect(()=>{

      async function getTeamHeading(){
          try {
              const team_heading = await axios.get(url+"api/team-heading")
             // console.log(team_heading.data.data)
              setTeamHeading(team_heading.data.data)
          } catch (error) {
              console.log(error)
          }
      }
        // get all Team
        async function getAllTeam(){
          try {
              const team = await axios.get(url+"api/team")
              //console.log(team.data.data)
              setpTeam(team.data.data)
          } catch (error) {
              console.log(error)
          }
      }

      getTeamHeading();
      getAllTeam();
  }, [])

    return (
        <>
       <div className="container-fluid pt-5">
   <div className="container">
      <div className="row">
         <div className="col-lg-4 mb-5">
            <small className="bg-primary text-white text-uppercase font-weight-bold px-1">{teamheading.short_title}</small>
            <h1 className="mt-2 mb-3">{teamheading.title}</h1>
            <h4 className="font-weight-normal text-muted mb-4">Our team working more effectively, efficiently, or innovatively in carrying out complex cognitive.</h4>
         </div>
         <div className="col-lg-8 mb-5">
            <div className="owl-carousel team-carousel owl-loaded owl-drag">
               <div className="owl-stage-outer">
                  <div className="owl-stage" style={{transition: 'all 1s ease 0s', width: '2534px', transform: "translate3d'(-1266px', '0px', '0px')"}}>
                    
                     {
                        team.map((item, index) => { 
                              return (
                                 <div className="owl-item cloned" style={{width: '223.333px', marginRight: '30px'}} key={item.id}>
                                 <div className="team-item">
                                    <div className="position-relative">
                                       <img className="img-fluid w-100" src={url+"public/assets/images/"+item.image } alt="" />
                                       <div className="team-overlay position-absolute d-flex align-items-center justify-content-center m-3">
                                          <div className="d-flex align-items-center justify-content-start">
                                            <Link className="btn btn-outline-secondary rounded-circle text-center mr-2 px-0" style={{width: '38px', height: '38px'}} target="_blank" to={"www.twitter.com/"+item.twitter}><i className="fab fa-twitter"></i></Link>
                                             <Link className="btn btn-outline-secondary rounded-circle text-center mr-2 px-0" style={{width: '38px', height: '38px'}} target="_blank" to={"www.facebook.com/"+item.facebook}><i className="fab fa-facebook-f"></i></Link>
                                             <Link className="btn btn-outline-secondary rounded-circle text-center px-0" style={{width: '38px', height: '38px'}} target="_blank" to={"www.linkedin.com/"+item.linkedIn}><i className="fab fa-linkedin-in"></i></Link>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="border border-top-0 text-center" style={{padding: '30px'}}>
                                       <h5 className="font-weight-bold">{item.name}</h5>
                                       <span>{item.designation}</span>
                                    </div>
                                 </div>
                              </div>
                              );
                        })
                     }
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
        
        </>
    );

}