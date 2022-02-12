import "./styles/Portfolio.css";
import React,{ useState, useEffect} from "react";
import axios from "axios";
import useApiurl from "./hooks/apiUrl";

export default function PortfolioComponent(){
    const url = useApiurl();    
    const [portfolioheading, setPortfolioHeading] = useState('');
    const [portfolio, setpPortfolio] = useState([]);

    useEffect(()=>{

        async function getPortfolioHeading(){
            try {
                const portfolio_heading = await axios.get(url+"api/portfolio-heading")
                // console.log(portfolio_heading.data.data)
                setPortfolioHeading(portfolio_heading.data.data)
            } catch (error) {
                console.log(error)
            }
        }
          // get all portfolio
          async function getAllPortfolio(){
            try {
                const portfolio = await axios.get(url+"api/portfolio")
                //console.log(portfolio.data.data)
                setpPortfolio(portfolio.data.data)
            } catch (error) {
                console.log(error)
            }
        }

        getPortfolioHeading();
        getAllPortfolio();
    }, [])

 //console.log(portfolio);
    return (
        <div className="container-fluid pt-5">
        <div className="container">
            <div className="text-center">
                <small className="bg-primary text-white text-uppercase font-weight-bold text-center px-1">{portfolioheading.short_title}</small>
                <h1 className="mt-2 mb-5">{portfolioheading.title}</h1>
            </div>
            <div className="row">
            {
                    portfolio.map((item, index) => { 
                        return (
                            <div className="col-md-4 mb-5 ProjectDiv" key={item.id}>
                            <div className="position-relative">
                                
                                <img className="img-fluid w-100" src={url+"public/assets/images/"+item.image } alt="" />
                                
                            </div>
                            <div className="border border-top-0" style={{padding: '10px'}}>
                                <div className="d-flex mb-1">
                                    <div className="d-flex align-items-center">
                                        <h4>{ item.title}</h4>
                                    </div>
                                </div>
                                <h5> { item.short_description} </h5>
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
