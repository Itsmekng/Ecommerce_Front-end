import Header from "../models/Header"
import Footer from "../models/Footer"
import Appbar from "../models/Appbar"
import Show_card from "../models/Show_card"

function Liked(){
    return (
        <div className="bg-[#f4efe1]">
            <Header/>
            <div className="pl-8 pt-4 sm:pt-8">
                <h1 className="sm:text-2xl font-semibold text-gray-800">Liked Product</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6 bg-[#f4efe1]">
                    <Show_card/>
                    <Show_card/>
                    <Show_card/>
                    <Show_card/>
                    <Show_card/>
                    <Show_card/>
                    <Show_card/>
                    <Show_card/>
                </div>
            </div>
            <Footer/>
            <Appbar/>
        </div>
    )
}

export default Liked