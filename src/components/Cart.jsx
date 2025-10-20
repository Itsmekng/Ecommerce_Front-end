import Header from "../models/Header"
import Footer from "../models/Footer"
import Appbar from "../models/Appbar"

function Cart(){
    return (
        <div className="bg-[#f4efe1]">
            <Header />
            <div className="ml-8 m-4">
                <h1 className="text-2xl font-medium mb-2">My Bag (4 Items)</h1>
                <hr className="border-gray-900 mb-8 w-2/12" />
                <div className="block sm:flex w-full justify-between">
                    <div className="w-full sm:w-7/12 sm:mb-0 mb-8">
                        <div className="border-1 px-4 py-2 flex bg-green-400 text-black font-normal gap-4 items-center mb-8"><img className="w-8" src="/src/assets/icons/discount.png" alt="" /> You are saving ₹5148 on this order</div>
                        <div className="block sm:flex sm: px-6 py-4 bg-white gap-5 mb-4">
                            <img className="mb-4 sm:mb-0" src="https://images.bewakoof.com/t1080/men-s-lilac-bloom-purple-wave-graphic-printed-t-shirt-689705-1758290313-1.jpg" alt="" />
                            <div className="w-full">
                                <h1 className="text-2xl">Bewakoof®</h1>
                                <h4 className="text-sm mb-2 sm:mb-0">Men's Lilac Bloom Purple Wave Graphic Printed T-shirt</h4>
                                <h4 className="text-sm mb-3 text-blue-500">Buy 3 for 999 offer applied!</h4>
                                <div className="flex justify-between">
                                    <button className=" px-2 py-1 border-1">Quantity 1</button>
                                    <h4 className="content-center"><span className="text-gray-600 line-through decoration-black-100">₹ 1965</span> - <span className="text-green-500 font-bold">₹ 999/-</span></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:w-4/12 w-full mr-8 mb-2">
                        <div className="border-1 flex justify-between px-4 py-2 mb-8" >
                            <h4 className="flex gap-4 items-center"><img className="w-8" src="/src/assets/icons/location.png" alt="" /> Deliver to:<span className="text-black font-semibold">490023</span></h4>
                            <button className="text-blue-500 font-semibold">Change</button>
                        </div>
                        <div className="border-1 block sm:flex justify-between px-4 py-2 mb-8" >
                            <h4 className="flex gap-4 items-center whitespace-nowrap"><img className="w-8" src="/src/assets/icons/voucher.png" alt="" /> Apply coupon:<span className="text-black font-semibold">GIVEME50OFF</span></h4>
                            <button className="text-blue-500 font-semibold">Apply</button>
                        </div>
                        <div className="border-t-1 border-l-1 border-r-1 px-4 py-2" >
                            <h1 className="text-lg mb-1">Price Summary</h1>
                            <div className="flex justify-between">
                                <h4 className="text-sm">Subtotal</h4>
                                <h4 className="text-sm">$1,598</h4>
                            </div>
                        </div>
                        <div className="bg-green-300 border-l-1 border-b-1 border-r-1 text-center mb-8" >Yayy! You get <span className="font-semibold">FREE delivery</span> on this order</div>
                        <button className="text-center bg-yellow-300 w-full py-2 text-lg font-semibold">Proceed</button>
                    </div>
                </div>
            </div>
            <Footer />
            <Appbar />
        </div>
    )
}

export default Cart