export default function Filter (){
    return (
        <>
         <div className="container-fluid main">
            <div className="row pt-3 pb-3">
                
                    <div className="col-12 col-md-6">
                        <a href="" className="text-decoration-none">Dashboard</a><i class="fa-solid fa-arrow-right ps-3 pe-3"></i>
                        <span>Stocks</span>
                        <h5>Stocks</h5>
                    </div>

                    <div className="col-12 col-md-6 text-md-end">
                        <button className="btn btn-light ps-3 pe-3  border"><i class="bi bi-filter pe-2"></i> Filter</button>
                        <button className="btn btn-info ps-3 pe-3 ms-3 "><i class="fa-solid fa-share pe-2"></i>Share</button>
                    </div>
            
            </div>
         </div>
        </>
    )
}