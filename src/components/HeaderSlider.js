
import React,{ useState, useEffect} from "react";
import axios from "axios";

export default function HeaderSlider(){
    const [slider, setSlider] = useState([]);

    useEffect(()=>{
        async function getSlider(){
            try {
                const sliderinfo = await axios.get("http://localhost/step-techbd/api/slider")
                //console.log(slider_header.data.data)
                setSlider(sliderinfo.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        getSlider();
    }, [])

//console.log(slider);

    return (
        <>
            <div className="container-fluid p-0 mb-5">
                <div id="header-carousel" className="carousel slide carousel-fade" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#header-carousel" data-slide-to="0" className="active"></li>
                        <li data-target="#header-carousel" data-slide-to="1"></li>
                        <li data-target="#header-carousel" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        {
                            slider.map((Slideritem) => { 
                                return (
                                    <div className={ (Slideritem.position ===1) ? "carousel-item active" : "carousel-item"}  key={Slideritem.id}>
                                        <img className="img-fluid" src={"http://localhost/step-techbd/public/assets/images/"+Slideritem.image } alt="SliderImage" />
                                        <div className="carousel-caption d-flex align-items-center justify-content-center">
                                            <div className="p-5" style={{width: '100%', maxWidth: '900px'}}>
                                                <h5 className="text-white text-uppercase mb-md-3">{Slideritem.short_title}</h5>
                                                <h1 className="display-3 text-white mb-md-4">{Slideritem.title}</h1>
                                                <a href="" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Learn More</a>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    
                    </div>
                </div>
            </div>
        </>
    );
}