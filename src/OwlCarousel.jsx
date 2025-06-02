import { Comp1 } from "./Comp1";

export default function OwlCarousel(){

    
    return(
        <>
        <div className="container-fluid border rounded p-2 main" >
            <div className="row mt-2">
                <div className="col-12 col-md-4 ">
                    <div className="p-3 border bg-white">
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <span className="border border-dark rounded-circle p-1 text-center ">
                                    <i class="bi bi-currency-bitcoin text-warning"></i>
                                </span>
                                <span  className="ps-3">Bitcoin</span>
                            </div>

                            <div className="text-center">
                               <span className="text-danger mt-2">-2.14%</span> 
                               <p className="p-0 m-0">BTC</p>
                            </div>
                        </div>

                        <div className="d-flex justify-content-between align-items-center pt-2">
                            <div>
                               <span>Current Value:</span>
                               <p>$ 58,151.02 <i class="bi bi-caret-down-fill text-danger"></i></p>
                            </div>
                            <div className="chart">
                                <Comp1/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="p-3 border bg-white">
                        <div className="d-flex justify-content-between align-items-center ">
                            <div>
                                <span className="border border-dark rounded-circle p-1 text-center ">
                                    <i class="fa-brands fa-apple"></i>
                                </span>
                                <span  className="ps-3">Apple</span>
                            </div>

                            <div className="text-center">
                                <span className="text-primary">+0.14%</span>
                                <p className="p-0 m-0">AAPL</p>
                            </div>
                        </div>

                        <div className="d-flex justify-content-between align-items-center pt-2">
                            <div>
                               <span>Current Value:</span>
                               <p>$ 1,780.80 <i class="bi bi-caret-up-fill text-primary"></i></p>
                            </div>
                            <div className="chart">
                                <Comp1/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="p-3 border bg-white">
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <span className="border border-dark rounded-circle p-1 text-center ">
                                    <i class="fa-brands fa-amazon text-warning"></i>
                                </span>
                                <span className="ps-3">Amazon</span>
                            </div>

                            <div className="text-center">
                                <span className="text-danger">-5.14%</span>
                                <p className="p-0 m-0">AMZN</p>
                            </div>
                        </div>

                        <div className="d-flex justify-content-between align-items-center pt-2">
                            <div>
                               <span>Current Value:</span>
                               <p>$ 63,251.11 <i class="bi bi-caret-down-fill text-danger"></i></p>
                            </div>
                            <div className="chart">
                                <Comp1/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
}