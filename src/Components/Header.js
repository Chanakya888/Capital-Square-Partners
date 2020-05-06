import React from "react"
import Logo from "../../assets/Logo.png"
import Threedot from "../../assets/Threedot.png"
import ProgressBar from "./ProgressBar"
const Header = () => {
  return (
    <div className="h-16 z-10 w-screen fixed bg-white shadow-md ">
      <div className="w-full pt-4 pb-4 px-6 flex items-center justify-between">
        <div>
          <img src={Logo} alt="Capital Square Partners Logo" />
        </div>
        <div>
          <img src={Threedot} alt="Navbar button" />
        </div>
      </div>
      <ProgressBar />
    </div>
  )
}
export default Header
