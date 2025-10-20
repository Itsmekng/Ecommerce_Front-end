import logo from '../assets/Screenshot 2025-10-16 044640.png'

function Header(){
    return (
        <>
           <div className="bg-[#f4efe1] w-full flex justify-between sm:px-22 px-8 place-items-center drop-shadow-lg ">
                <div className=" space-x-6 flex place-items-center">
                    <img className='h-[8vh]' src={logo} alt="cart app logo" />
                    <div className='hidden sm:flex space-x-6  place-items-center'>
                        <a href="" className='hover:underline'>home</a>
                        <a href="" className='hover:underline'>Contact us</a>
                        <a href="" className='hover:underline'>Cart</a>
                        <a href="" className='hover:underline'>Account</a>
                        <input type="text" placeholder='Search' id='search' className='focus:outline-0' />
                    </div>
                </div>
                <div className='hover:underline'>Logout</div>
           </div>
           <hr />
           <input type="text" placeholder='Search' id='search' className='bg-white block sm:hidden focus:outline-0 border-1 w-[95vw] p-2 m-2' />
        </>
    )
}

export default Header