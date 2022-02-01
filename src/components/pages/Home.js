import HeaderSlider from "../HeaderSlider";
import AboutComponent from "../AboutComponent";
import ServiceOffrer from "../ServiceOffter";
import Expereince from "../Expereince";
import TeamComponent from "../TeamComponent";
import Clients from "../Clients";

export default function Home(){
    return (
        <>
        
            <HeaderSlider />
            <AboutComponent />
            <ServiceOffrer />
            <Expereince />
            <Clients />
            <TeamComponent />
        </>
    );

}