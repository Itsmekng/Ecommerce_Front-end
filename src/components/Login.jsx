import Header from "../models/Header"
import Footer from "../models/Footer"
import Appbar from "../models/Appbar"

function Login(){
    return (
        <div className="bg-[#f4efe1]">
        <Header />
        <div className="w-full h-full p-12">
            <div className="border-1 sm:w-[40vw] justify-self-center p-4" >
                <h6 className="font-medium text-2xl  text-center pb-4">Login</h6>
                <form action="" id="loginform" className="text-center">  
                    <input type="email" id="loginEmail" className="w-4/6 py-4 pl-4 focus:outline-0 text-gray-600 border-b-1" placeholder="Email" />
                    <input type="email" id="loginPassword" className="w-4/6 py-4 mb-8 pl-4 focus:outline-0 text-gray-600 border-b-1" placeholder="Password" />
                    {/* <h6 className="mb-8 text-blue-500"><a href="/">Forget Password?</a></h6> */}
                </form>
                <div className="w-full text-center">
                    <button id="login_button" className="border-1 px-14 py-3 mb-8 bg-white">Login</button>
                </div>
                <hr className=" border-gray-400 pb-4 mx-6" />
                <h6 className="font-medium text-2xl  text-center pb-4">Register</h6>
                <form action="" id="loginform" className="text-center"> 
                    <input type="name" id="RegisterName" className="w-4/6 py-4 pl-4 focus:outline-0 text-gray-600 border-b-1" placeholder="Name" /> 
                    <input type="email" id="RegisterEmail" className="w-4/6 py-4 pl-4 focus:outline-0 text-gray-600 border-b-1" placeholder="Email" />
                    <input type="password" id="RegisterPassword" className="w-4/6 py-4 mb-8 pl-4 focus:outline-0 text-gray-600 border-b-1" placeholder="Password" />
                </form>
                <div className="w-full text-center">
                    <button id="register_button" className="border-1 px-14 py-3 mb-8 bg-white">Register</button>
                </div>
            </div>

            
        </div>
        <Footer/>
        <Appbar/>
        </div>
    )
}

export default Login