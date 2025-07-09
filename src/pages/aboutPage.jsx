import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import AboutHero from "../components/abouthero";


const About = () => {
    return(
        <>
        <div className="flex flex-col min-h-screen">
                <Navbar/>
                <div>
                   
                    <div>
                    <AboutHero/>
                    </div>
                </div>
                    <Footer />
            </div>
        </>
    )
}
 
export default About;