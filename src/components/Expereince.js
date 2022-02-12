import React,{ useState, useEffect} from "react";
import axios from "axios";

export default function Expereince(){
    
    const [experienceheading, setExperienceHeading] = useState('');
    const [experience, setExperience] = useState([]);

    useEffect(()=>{

        async function getExperienceHeading(){
            try {
                const experience_heading = await axios.get("http://localhost/step-techbd/api/experience-heading")
                // console.log(experience_heading.data.data)
                setExperienceHeading(experience_heading.data.data)
            } catch (error) {
                console.log(error)
            }
        }
          // get all experience
          async function getAllExperience(){
            try {
                const experienceinfo = await axios.get("http://localhost/step-techbd/api/experience")
                //console.log(experienceinfo.data.data)
                setExperience(experienceinfo.data.data)
            } catch (error) {
                console.log(error)
            }
        }

        getExperienceHeading();
        getAllExperience();
    }, [])

//  console.log(experience);

    return (
       
        <div className="container-fluid pt-5 pb-2">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 mb-5">
                    <small className="bg-primary text-white text-uppercase font-weight-bold px-1">{experienceheading.short_title}</small>
                    <h1 className="mt-2 mb-3">{experienceheading.title}</h1>
                    <h4 className="font-weight-normal text-muted mb-4"> {experienceheading.description} </h4>
                    
                    <a href="" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold">Learn More</a>
                </div>
                <div className="col-lg-6">
                    <div className="row">
                        {
                            experience.map((item, index) => { 
                                return (
                                    <div className="col-sm-6 pb-1" key={item.id}>
                                        <div className="d-flex flex-column align-items-center border px-4 mb-4">
                                            <h2 className="display-3 text-primary mb-3" data-toggle="counter-up">{item.value}</h2>
                                            <h5 className="font-weight-bold mb-4">{item.title}</h5>
                                        </div>
                                    </div>
                                     );
                                })
                        }        
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}