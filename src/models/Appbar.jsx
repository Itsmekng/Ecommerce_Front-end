function Appbar(){
    return(
        <div className="absolute sticky bottom-1">
            <div className=" justify-self-center flex w-[90%] justify-evenly border-2 border-gray-500 rounded-full  bg-[#f4efe1ca] sm:hidden backdrop-blur-xs">
                <div className="justify-items-center">
                    <img className="w-[30px]" src="/src/assets/icons/house-regular-full.svg" alt="" />
                    <h6 className="text-xs">Home</h6>
                </div>
                <div className="justify-items-center">
                    <img className="w-[30px]" src="/src/assets/icons/heart-regular-full.svg" alt="" />
                    <h6 className="text-xs">Wish</h6>
                </div>
                <div className="justify-items-center">
                    <img className="w-[30px]" src="/src/assets/icons/truck-regular-full.svg" alt="" />
                    <h6 className="text-xs">Cart</h6>
                </div>
                <div className="justify-items-center">
                    <img className="w-[30px]" src="/src/assets/icons/circle-user-regular-full.svg" alt="" />
                    <h6 className="text-xs">Account</h6>
                </div>
            </div>
        </div>
    )
}

export default Appbar