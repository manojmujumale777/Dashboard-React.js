export default function StockValue(){
    return(
        <>
        <div className="container-fluid">
            <div className="row  mt-4">
                <div className="col-12">
                    <div className="d-md-flex justify-content-between align-items-center">
                        <div>
                            <h5>Stock Market Value</h5>
                        </div>
                        <div class="btn-group" role="group" aria-label="Basic outlined example">
                            <button type="button" class="btn btn-outline-primary rounded ">Today</button>
                            <button type="button" class="btn btn-outline-primary rounded ms-2">Weekely</button>
                            <button type="button" class="btn btn-outline-primary rounded ms-2">Yearly</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-2 bg-light pb-3 pt-3">
                <div className="col-12 col-md-6 col-lg-3 mt-2 ps-2 m-0">
                    <p>Total Investment</p>
                    <p className="h3">$15,874.50</p> <span className="value ps-2 pe-2  text-light rounded"><i class="fa-solid fa-arrow-trend-up text-light pe-2"></i>0.32%</span>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mt-2 ps-2 m-0">
                   <p>Market Cap</p>
                   <p className="h3">$124,784.23</p> <span className="bg-danger ps-2 pe-2  text-light rounded"><i class="fa-solid fa-arrow-trend-down text-light pe-2"></i>0.12%</span>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mt-2 ps-2 m-0">
                    <p className="p-0 m-0"> <span className="text-primary">+124.25</span> Yesterday</p>
                    <p>Jun 16, 2022 10:45 AM UTC +5:30</p>
                </div>
                <div className="col-12 col-md-6 col-lg-3 mt-2 ps-2 m-0 text-md-end">
                    <button className="btn bg-danger-subtle mt-lg-5 mt-md-2"><i class="fa-solid fa-plus pe-3"></i>Compare</button>
                </div>
            </div>
        </div>
        
        
        </>
    )
}