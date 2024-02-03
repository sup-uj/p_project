import NavSection from '../components/nav.jsx'
import Sbar from "../components/sidebar.jsx"


const LentPage = () => {
  return (
    <>
        <NavSection/>
        <div className="flex mb-6">
          <div className="w-1/6 "><Sbar></Sbar></div>
          
          <div className="w-5/6 bg-gray-600 h-12"><h1>Items Lent</h1></div>
        </div>
    </>
  )
}

export default LentPage