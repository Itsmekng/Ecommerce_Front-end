import Header from "../models/Header"
import Footer from "../models/Footer"
import Appbar from "../models/Appbar"
import Show_card from "../models/show_card"

function Shop_page(){
    return (
        <div className="bg-[#f4efe1]">
            <Header/>
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
            <div className="w-full text-center bg-[#f4efe1]" >   
                <button className=" border-1 px-14 py-3 mb-8 bg-white" >More</button>
            </div>
            <Footer/>
            <Appbar/>
        </div>
    )
}

export default Shop_page