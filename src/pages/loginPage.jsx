import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer"
import LoginForm from "../components/loginForm";
import bg1 from "../assets/imagens/bg1.jpg";

 
const LoginPage = () => {
    return(
        <>
            <div className="flex flex-col min-h-screen bg-cover bg-center h-[900px]"
            style={{backgroundImage: `url(${bg1})`}}  >
                <Navbar/>
                <div className="flex-grow flex items-center justify-center ">
                <LoginForm/>
                </div>
                <Footer/>
            </div>
        </>
    )
}
 
export default LoginPage