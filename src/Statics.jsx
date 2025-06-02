import Comp4 from "./Comp4";

export default function Statics(){
    return(
        <>
        <div className="container-fluid mt-3 ">
            <div className="row mt-2">
                <div className="col-12 col-lg-6">
                  <div className="p-2 border rounded bg-white">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <p className="p-0 m-0">My Watchlist</p>
                        </div>
                        <div>
                           <button className="btn border">View All</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Comp4/>  
                        </div>
                    </div>
                  </div>
                  
                </div>
                
                <div className="col-12 col-lg-6">
                  <div className="p-2 border rounded bg-white">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <p className="p-0 m-0">My Stocks</p>
                        </div>
                        <div>
                           <button className="btn border">All Stocks</button>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center mt-3">
                        <h6>Stock</h6>
                        <h6 className="d-none d-md-block">Quantity</h6>
                        <h6 className="d-none d-md-block">Stock Price</h6>
                        <h6>Total</h6>
                    </div>

                    <div className="d-flex justify-content-between align-items-center mt-4">
                        <span>Github</span>
                        <span className="d-none d-md-block">100</span>
                        <span className="d-none d-md-block">$145.20</span>
                        <span>$14,520.00</span>
                    </div>

                    <div className="d-flex justify-content-between align-items-center mt-5">
                        <span>Amazon</span>
                        <span className="d-none d-md-block">50</span>
                        <span className="d-none d-md-block">$3,500.00</span>
                        <span>$175,000.00</span>
                    </div>

                    <div className="d-flex justify-content-between align-items-center mt-5">
                        <span>Microsoft </span>
                        <span className="d-none d-md-block">75</span>
                        <span className="d-none d-md-block">$265.75</span>
                        <span>$19,931.25</span>
                    </div>

                    <div className="d-flex justify-content-between align-items-center mt-5">
                        <span>Alphabet </span>
                        <span className="d-none d-md-block">30</span>
                        <span className="d-none d-md-block">$2,550.00</span>
                        <span>$76,500.00</span>
                    </div>

                    <div className="d-flex justify-content-between align-items-center mt-5 pb-4">
                        <span> Facebook</span>
                        <span className="d-none d-md-block">60</span>
                        <span className="d-none d-md-block">$325.60</span>
                        <span>$19,536.00</span>
                    </div>
                  </div>
                   

                  
                </div>
            </div>

        </div>
        
        
        </>
    )
}