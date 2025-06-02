
import Comp2 from "./Comp2"
import Comp3 from "./Comp3"
import Copyright from "./Copyright"
import Filter from "./Filter"
import OwlCarousel from "./OwlCarousel"
import SearchBar from "./SearchBar"
import SideBar from "./SideBar"
import Statics from "./Statics"
import StockValue from "./StockValue"
import Watchlist from "./Watchlist"

function App() {


  return (
    <>
    <div className="container-fluid">
      <div className="row">
        <div className="col-3 side-bar p-3 d-none d-lg-block  ">
          <SideBar/>
        </div>

        <div className="col-12 col-md-12 col-lg-9 dashboard-section">
          <SearchBar/>
          <div className="main">
            <Filter/>
            <OwlCarousel/>
            

            <div className="bg-white border mt-2 rounded">
              <StockValue/>  
              <Comp2/>
              <Comp3/>
            </div>
         
            <Watchlist/>
            <Statics/>
            <Copyright/>
          </div>
          
          
        </div>

        
        
        
      </div> 
      
    </div>
    </>
  )
}

export default App
