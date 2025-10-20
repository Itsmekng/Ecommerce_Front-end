function Show_card(){
    return (
        <>
            <div className="border-1 w-[75vw] sm:w-[19vw] h-fit justify-self-center m-4 rounded-3xl bg-white">
                <div className="w-[60vw] sm:w-[16vw] rounded-2xl justify-self-center bg-red-400 h-[35vh] m-4" >
                    <img className="w-[60vw] sm:w-[16vw] h-[35vh] rounded-2xl" src="https://www.stylemati.in/cdn/shop/products/mati-shirts-tops-mati-men-s-brown-placket-shirt-29852255715417.jpg?v=1657173529&width=1200" alt="" />
                </div>
                <div className="flex justify-between pr-7">
                    <h6 className="px-8 pb-1 text-black font-normal">ZARA</h6>
                    <img className="h-6" src="/src/assets/icons/heart-regular-full.svg" alt="" />
                </div>
                <h6 className="px-8 pb-1 text-gray-600">Sweat shirt , unique design</h6>
                <h6 className="px-8 pb-4 text-gray-600"><span className="text-gray-600 line-through decoration-black-100">₹ 1965</span> - <span className="text-green-500 font-bold">₹ 999/-</span></h6>
                <button className="ml-8 mb-5 bg-yellow-400 px-4 py-2 text-xs sm:text-sm text-nowrap">Add To Cart</button>
            </div>
        </>
    )
}

export default Show_card