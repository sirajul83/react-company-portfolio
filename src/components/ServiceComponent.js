import React,{ useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import useApiurl from "./hooks/apiUrl";

export default function ServiceComponent(){
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

 //console.log(servicesheading.title);

    return (
        <div className="container-fluid pt-5 pb-3">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-lg-6 text-center mb-5">
                    <small className="bg-primary text-white text-uppercase font-weight-bold px-1"> {servicesheading.short_title}</small>
                    <h2 className="mt-2 mb-3">{servicesheading.title}</h2>
                   
                </div>
            </div>
            <div className="row serviceTextDiv">
                {
                    services.map((item, index) => { 
                        return (
                            <div className="col-md-4 mb-5" key={item.id}>
                                <div className="d-flex">
                                    <i className={ item.icon +' text-primary mr-4 '}></i>
                                    <div className="d-flex flex-column">
                                        <h4 className="font-weight-bold mb-3">{item.title}</h4>
                                        <p>{item.description}</p>
                                        <Link to={`${item.id}`}  className="font-weight-semi-bold" href="">Read More <i
                                                className="fa fa-angle-double-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
           
            </div>
        </div>
    </div>
    );
}