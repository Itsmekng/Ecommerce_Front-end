
import Subscribe from '../elements/subscribe.jsx'
function Footer(){
    return (
        <>
        <div className="relative  inset-x-0 bottom-0 bg-[#f4efe1] hidden sm:block">
            <hr />
            <div className="py-4 font-normal">
                    <h1 className="sm:text-[4vh] text-[3vh] ml-4 pb-2 sm:justify-self-center">Join our mailing list</h1>
                    <h4 className="sm:text-[3vh] text-[2vh] sm:justify-self-center ml-4">Stay up to date with the latest news, updated, special offers and more!</h4>
                    <Subscribe/>
                    <hr />
                    <h4 className="text-[2vh] pt-3 justify-self-center">© 2023 Aman <span className="text-red-500">Sahni</span> INDIA , inc. All rights reserved.</h4>
            </div>
        </div>
        </>
    )
    
}

export default Footer