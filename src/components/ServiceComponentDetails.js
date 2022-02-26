
import React,{ useState, useEffect} from "react";
import { Link,useParams } from "react-router-dom";
import axios from "axios";
import useApiurl from "./hooks/apiUrl";

export default function PortfolioComponentDetails(){
    const url = useApiurl(); 
    const { id } = useParams();   

    const [services, setServices] = useState([]);

    useEffect(()=>{
          // get service
          async function getService(){
            try {
                const service = await axios.get(url+"api/service/"+id)
                //console.log(service.data.data)
                setServices(service.data.data)
            } catch (error) {
                console.log(error)
            }
        }

        getService();
    }, [])

//  console.log(service);
    return (
        <div className="container-fluid pt-1">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 mb-1 "> 
                     <h4> <i className={ services.icon +' text-primary mr-4 '}></i> {services.title}</h4>
                         <p className="mt-3"> {services.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
