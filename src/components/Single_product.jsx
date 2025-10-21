import Header from "../models/Header"
import Footer from "../models/Footer"
import Appbar from "../models/Appbar"
import Show_card from "../models/Show_card"

function Single_product(){
    return (
        <div className="bg-[#f4efe1]">
            <Header/>
            <div className="sm:flex block w-[85vw] justify-center mb-12">
                <div className="sm:w-[50%] px-21 pt-8">
                    <img className="w-full border-1 border-gray-400 rounded-3xl" src="https://images.bewakoof.com/t1080/men-s-bold-red-never-stop-graphic-printed-oversized-t-shirt-689696-1758516282-2.jpg" alt="" />
                </div>
                <div className="w-50% p-8">
                    <h1 className="sm:text-2xl text-3xl font-semibold pb-3">Nike</h1>
                    <h3 className="text-gray-600">Men's Bold Red Never Stop Graphic Printed Oversized T-shirt</h3>
                    <h6 className="pb-4 text-gray-600"><span className="text-gray-600 line-through decoration-black-100">₹ 1965</span> - <span className="text-green-500 font-bold">₹ 999/-</span></h6>
                    <div className="border-1 p-1 flex justify-between mb-6">
                        <div className="text-sm">Get 50% off :- GiveMe50OFF</div>
                        <img className="w-6" src="/src/assets/icons/copy-regular-full.svg" alt="" />
                    </div>
                    <hr className="border-gray-400 w-2/3 mb-8" />
                    <h1 className="font-medium mb-4">Select Size</h1>
                    <div className="flex gap-5 mb-4 w-fit overflow-x-auto scrollbar-width-none">
                        <div className="sm:w-[60px] sm:h-[60px] w-[50px] h-[50px] border-1 border-gray-400 rounded-2xl sm:text-2xl text-sm font-normal text-center content-center">S</div>
                        <div className="sm:w-[60px] sm:h-[60px] w-[50px] h-[50px] border-1 border-gray-400 rounded-2xl sm:text-2xl text-sm font-normal text-center content-center">M</div>
                        <div className="sm:w-[60px] sm:h-[60px] w-[50px] h-[50px] border-1 border-gray-400 rounded-2xl sm:text-2xl text-sm font-normal text-center content-center">L</div>
                        <div className="sm:w-[60px] sm:h-[60px] w-[50px] h-[50px] border-1 border-gray-400 rounded-2xl sm:text-2xl text-sm font-normal text-center content-center">XL</div>
                        <div className="sm:w-[60px] sm:h-[60px] w-[50px] h-[50px] border-1 border-gray-400 rounded-2xl sm:text-2xl text-sm font-normal text-center content-center">2XL</div>
                    </div>
                    <hr className="border-gray-400 w-2/3 mb-8" />
                    <div className="flex justify-around mb-6">
                        <button className="border-1 px-4 py-2 text-xs sm:text-sm text-nowrap">Add To Cart</button>
                        <button className="bg-yellow-400 px-4 py-2 text-xs sm:text-sm text-nowrap">Go to bag</button>
                        <img className="h-8 self-center" src="/src/assets/icons/heart-regular-full.svg" alt="" />
                    </div>
                    <hr className="border-gray-400 w-2/3 mb-8" />
                    <h1 className="font-medium mb-4">Check for Delivery Details</h1>
                    <div className="flex gap-5 sm:h-fit h-8">
                        <input type="email" id="RegisterEmail" className="w-4/6 py-4 pl-4 focus:outline-0 text-gray-600 border-b-1" placeholder="Email" />
                        <button className="bg-green-400 px-4 w-2/6 text-xs sm:text-base text-nowrap">Search</button>
                    </div>
                    <h1 className="text-red-600 text-xs">Sorry, We currently don’t deliver to this pincode.</h1>
                </div>
            </div>
            <hr className="border-gray-500 mb-4 mx-8" />
            <h1 className="font-medium mb-4 ml-8">Product Description</h1>
            <p className="text-sm sm:text-xm mx-8 text-gray-500 mb-8">Designed for the restless spirit, this Never Stop Graphic Printed Men's Bold Red Oversized T-shirt meets relentless energy. Pair with joggers and high-top sneakers for a bold athleisure look.
                Country of Origin - India<br/><br/>

                Manufactured By - Bewakoof Brands Pvt Ltd,
                Sairaj logistic hub #A5, BMC pipeline road, Opposite all saints high school, Amane, Bhiwandi, Thane, Maharashtra 421302<br/><br/>

                Packed By - Bewakoof Brands Pvt Ltd,<br/>
                Sairaj logistic hub #A5, BMC pipeline road, Opposite all saints high school, Amane, Bhiwandi, Thane, Maharashtra 421302<br/><br/>

                Commodity - Men's T-Shirt<br/>
                Product Specifications<br/>
                Oversized fit - Super Loose On Body Thoda Hawa Aane De<br/>
                Single Jersey - Classic, lightweight jersey fabric comprising 100% cotton.<br/>
            </p>
            <hr className="border-gray-500 mb-4 mx-8" />
            <h1 className="font-medium mb-4 ml-8">You May Also Like</h1>
            <div className="w-[95vw] my-2 sm:m-4 overflow-x-auto scrollbar-width-none">
                <div className="flex gap-5 my-2 w-full scroll-behaviour-smooth">
                    <Show_card/>
                    <Show_card/>
                    <Show_card/>
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

export default Single_product