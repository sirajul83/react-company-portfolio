import "./styles/Portfolio.css";
import React,{ useState, useEffect} from "react";
import { Link,useParams } from "react-router-dom";
import axios from "axios";
import useApiurl from "./hooks/apiUrl";

export default function PortfolioComponentDetails(){
    const url = useApiurl(); 
    const { id } = useParams();   
    const [portfolioheading, setPortfolioHeading] = useState('');
    const [portfolio, setpPortfolio] = useState([]);

    useEffect(()=>{
          // get portfolio
          async function getPortfolio(){
            try {
                const portfolio = await axios.get(url+"api/portfolio/"+id)
                //console.log(portfolio.data.data)
                setpPortfolio(portfolio.data.data)
            } catch (error) {
                console.log(error)
            }
        }

        getPortfolio();
    }, [])

//  console.log(portfolio);
    return (
        <div className="container-fluid pt-1">
            <div className="container">
                <div className="row">
                <div className="col-md-5 mb-1 "> 
                    <img className="img-fluid w-100" src={url+"public/assets/images/"+portfolio.image } alt="" />
                </div>
                <div className="col-md-7 mb-1 "> 
                    <h3> {portfolio.title}</h3>
                    <p>
                         <b> User Name : {portfolio.user_name} </b><br/>
                         <b> Pasword : {portfolio.password}    </b>
                    </p>
                    
                    <a target="_blank" className="btn btn-sm btn-primary text-white" href={portfolio.project_url }> View Demo </a>
                    <p className="mt-3"> {portfolio.description}</p>
                </div>
                </div>
            </div>
        </div>
    );
}
