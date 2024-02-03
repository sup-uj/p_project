import NavSection from '../components/nav.jsx'
import Sbar from "../components/sidebar.jsx"


const SoldPage = () => {
  return (
    <>
        <NavSection/>
        <div className="flex mb-6">
          <div className="w-1/6 "><Sbar></Sbar></div>
          
          <div className="w-5/6 bg-gray-600 h-12"><h1>Item Sold</h1></div>
        </div>
    </>
  )
}

export default SoldPage