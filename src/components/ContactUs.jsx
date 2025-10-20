import Footer from "../models/Footer"
import Header from "../models/Header"
import Appbar from "../models/Appbar"

function ContactUs() {

  return (
    <div className="bg-[#f4efe1]">
      <Header/>
        <div className="h-full w-full">
          <h6 className="m-6 sm:m-14 text-2xl font-semibold mb-2">Contact Us</h6>
          <form action="" id="contactform" className=" m-6 sm:m-14">
              <div className="w-full sm:flex block justify-between mb-8" >
                <input type="text" className="w-[90%] sm:w-[45%] h-[6vh] p-4 focus:outline-0 border-b-1 border-gray-500 text-gray-500 mb-4" placeholder="Name" />
                <input type="text" className="w-[90%] sm:w-[45%] h-[6vh] p-4 focus:outline-0 border-b-1 border-gray-500 text-gray-500" placeholder="Email" />
              </div>
              <textarea name="message" id="message" placeholder="Message" className="w-[90%] focus:outline-0 border-b-1 border-gray-500 mb-12 text-gray-500 px-4"></textarea>
              <button className=" border-1 px-14 py-3 mb-8 bg-white">Submit</button>
          </form>
        </div>
        <div className="m-6 sm:m-14">
          <h1 className="text-2xl font-semibold mb-2">Corporate Address :</h1>
          <hr className=" border-1 border-gray-800 w-[80px] mb-4" />
          <h5 className="text-gray-700 font-medium">Cart Brands Pvt. Ltd.</h5>
          <h5 className="text-gray-700 font-medium">WeWorks Chromium,</h5>
          <h5 className="text-gray-700 font-medium">3rd Floor, B114-116,</h5>
          <h5 className="text-gray-700 font-medium">Next to L&T Flyover, Jogeshwari Vikhroli Link Road,</h5>
          <h5 className="text-gray-700 font-medium mb-4">Andheri (East) Mumbai, Maharashtra, 400076</h5>
          <h5 className="text-gray-700 font-medium">You can reach us at <span className="text-gray-800 font-bold">cart@example.com</span> with all queries. We do not have a cart customer care number.</h5>
        </div>
        <Footer/>
        <Appbar/>
    </div>
  )
}

export default ContactUs
