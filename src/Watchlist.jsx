export default function Watchlist(){
    return(
        <>
        <div className="container-fluid mt-3 border bg-white rounded">
            <div className="row mt-2">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <p className="p-0 m-0">My Watchlist</p>
                    </div>
                    <div>
                        <button className="btn border">View All</button>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="d-flex justify-content-between align-items-center p-2">
                    <div>
                        <span className="border border-dark bg-light rounded-circle p-2 text-center ">
                            <img src="images\apple.png" alt="" className="logo " />
                        </span>
                        <span  className="ps-3">Apple</span>
                    </div>

                    <div>
                        <i class="fa-solid fa-arrow-trend-up text-primary"></i>
                    </div>

                    <div>
                        <p className="p-0 m-0">$150.20</p>
                        <p className="p-0 m-0 text-primary">+1.50%</p>
                    </div>
                </div><hr className="p-0 m-0" />
            </div> 

            <div className="row">
                <div className="d-flex justify-content-between align-items-center p-2">
                    <div>
                        <span className="border border-dark bg-danger-subtle rounded-circle p-2 text-center ">
                            <img src="images\google.png" alt="" className="logo " />
                        </span>
                        <span  className="ps-3">Google</span>
                    </div>

                    <div>
                        <i class="fa-solid fa-arrow-trend-down text-danger"></i>
                    </div>

                    <div>
                        <p className="p-0 m-0">$2,500.5</p>
                        <p className="p-0 m-0 text-danger">-5.25%</p>
                    </div>
                </div><hr className="p-0 m-0" />
            </div>

            <div className="row">
                <div className="d-flex justify-content-between align-items-center p-2">
                    <div>
                        <span className="border border-dark bg-danger-subtle rounded-circle p-2 text-center ">
                            <img src="images\microsoft.png" alt="" className="logo " />
                        </span>
                        <span  className="ps-3">Microsoft</span>
                    </div>

                    <div>
                       <i class="fa-solid fa-arrow-trend-up text-primary"></i>
                    </div>

                    <div>
                        <p className="p-0 m-0">$300.75</p>
                        <p className="p-0 m-0 text-primary">+2.30%</p>
                    </div>
                </div><hr className="p-0 m-0" />
            </div>

            <div className="row">
                <div className="d-flex justify-content-between align-items-center p-2">
                    <div>
                        <span className="border border-dark bg-secondary-subtle rounded-circle p-2 text-center ">
                            <img src="images\amazon.png" alt="" className="logo " />
                        </span>
                        <span  className="ps-3">Amazon</span>
                    </div>

                    <div>
                        <i class="fa-solid fa-arrow-trend-down text-danger"></i>
                    </div>

                    <div>
                        <p className="p-0 m-0">$3,000.00</p>
                        <p className="p-0 m-0 text-danger">-10.50%</p>
                    </div>
                </div><hr className="p-0 m-0" />
            </div>

            <div className="row">
                <div className="d-flex justify-content-between align-items-center p-2">
                    <div>
                        <span className="border border-dark bg-danger-subtle rounded-circle p-2 text-center ">
                            <img src="images\tesla.png" alt="" className="logo " />
                        </span> 
                        <span  className="ps-3">Tesla</span>
                    </div>

                    <div>
                       <i class="fa-solid fa-arrow-trend-up text-primary"></i>
                    </div>

                    <div>
                        <p className="p-0 m-0">$700.80</p>
                        <p className="p-0 m-0 text-primary">+8.00%</p>
                    </div>
                </div><hr className="p-0 m-0" />
            </div>

            <div className="row">
                <div className="d-flex justify-content-between align-items-center p-2">
                    <div>
                        <span className="border border-dark bg-info-subtle rounded-circle p-2 text-center ">
                            <img src="images\facebook.png" alt="" className="logo " />
                        </span> 
                        <span  className="ps-3">Facebook</span>
                    </div>

                    <div>
                        <i class="fa-solid fa-arrow-trend-down text-danger"></i>
                    </div>

                    <div>
                        <p className="p-0 m-0">$350.40</p>
                        <p className="p-0 m-0 text-danger">-3.20%</p>
                    </div>
                </div><hr className="p-0 m-0" />
            </div>

            <div className="row">
                <div className="d-flex justify-content-between align-items-center p-2">
                    <div>
                        <span className="border border-dark bg-success-subtle rounded-circle p-2 text-center ">
                            <img src="images\nvidia.png" alt="" className="logo " />
                        </span> 
                        <span  className="ps-3">Nvidia</span>
                    </div>

                    <div>
                        <i class="fa-solid fa-arrow-trend-up text-primary"></i>
                    </div>

                    <div>
                        <p className="p-0 m-0">$800.60</p>
                        <p className="p-0 m-0 text-primary">+5.75%</p>
                    </div>
                </div><hr className="p-0 m-0" />
            </div>

            
        </div>
        
        </>
    )
}