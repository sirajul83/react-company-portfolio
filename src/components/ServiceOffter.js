import React,{ useState, useEffect} from "react";
import axios from "axios";
import useApiurl from "./hooks/apiUrl";

export default function ServiceOffrer(){
    const url = useApiurl();  
    const [services, setServices] = useState([]);
    const [servicesheading, setServiceHeading] = useState('');

    useEffect(()=>{

        // get all service
        async function getAllService(){
            try {
                const service = await axios.get(url+"api/service")
                //console.log(service.data.data)
                setServices(service.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        getAllService()

    }, [])

    
    useEffect(()=>{
        async function getServiceHeading(){
        try {
            const service_heading = await axios.get(url+"api/service-heading")
           /// console.log(service_heading.data.data)
            setServiceHeading(service_heading.data.data)
        } catch (error) {
            console.log(error)
        }
        }
        getServiceHeading()
    }, [])

    return (
        <div className="container-fluid pt-5 pb-3">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mb-5">
                        <small className="bg-primary text-white text-uppercase font-weight-bold px-1">{servicesheading.short_title}</small>
                        <h1 className="mt-2 mb-3">{servicesheading.title}</h1>
                        <h4 className="font-weight-normal text-muted mb-4"> {servicesheading.description} </h4>
                        <a href="" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold">Discover More</a>
                    </div>
                    <div className="col-lg-8">
                        <div className="row">
                                {
                            services.map((item, index) => { 
                                return (
                                    <div className="col-md-6 mb-5" key={item.id}>
                                        <div className="d-flex">
                                            <i className={ item.icon +' text-primary mr-4 '}></i>
                                            <div className="d-flex flex-column">
                                                <h4 className="font-weight-bold mb-3">{item.title}</h4>
                                                <p>{item.description}</p>
                                                <a className="font-weight-semi-bold" href="">Read More <i className="fa fa-angle-double-right"></i></a>
                                            </div>
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