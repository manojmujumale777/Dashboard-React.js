import SideBar from "./SideBar";

export default function SearchBar() {

  return (
    <>
      <div className="container-fluid" id="top" >
        <div className="row">
          <div className="pt-4 pb-3 d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-center align-items-center">
              <div className="d-lg-none">
                <img src="images\toggle-logo.png" alt="" />
              </div>
              <div className="ps-3 d-none d-lg-block">
                <i class="bi bi-list-nested fs-2"></i>
              </div>

              <div className="d-lg-none">
                <button  type="button"  className="btn fs-2"  data-bs-toggle="offcanvas"  data-bs-target="#demo">
                  <i class="fa-solid fa-bars "></i>
                </button>

                <div className="offcanvas offcanvas-start" id="demo">
                  <div className="offcanvas-header d-flex justify-content-end p-0">
                    <button  className="btn btn-close m-2 "  data-bs-dismiss="offcanvas"></button>
                  </div>

                  <div className="offcanvas-body bg-dark ">
                    <SideBar/>
                  </div>
                </div>
              </div>

              <div className="ps-3 d-none d-md-block ">
                <input  type="search"  placeholder="Search anything here..."  className="search-input"/>
              </div>
            </div>

            <div className="d-flex justify-content-evenly align-items-center ">
              <span className="border border-dark rounded p-2 ms-3 d-md-none">
                <a href="" className="text-decoration-none text-dark"><i class="fa-solid fa-magnifying-glass"></i></a>
              </span>
              <span className="border border-dark rounded p-2 ms-3">
                <a href="" className="text-decoration-none text-dark"> <i class="bi bi-translate"></i></a>
              </span>
              <span className="border border-dark rounded p-2 ms-3">
                <a href="" className="text-decoration-none text-dark" ><i class="bi bi-moon"></i></a>
              </span>
              <span className="border border-dark rounded p-2 ms-3 d-none d-md-block">
                <a href="" className="text-decoration-none text-dark"><i class="fa-solid fa-cart-plus"></i></a>
              </span>
              <span className="border border-dark rounded p-2 ms-3 d-none d-md-block">
               <a href="" className="text-decoration-none text-dark"> <i class="fa-regular fa-bell"></i></a>
              </span>
              <span className="border border-dark rounded p-2 ms-3 d-none d-md-block">
                <a href="" className="text-decoration-none text-dark"><i class="fa-solid fa-maximize"></i></a>
              </span>
              <span className="border border-dark rounded p-2 ms-3 d-none d-md-block">
                <a href="" className="text-decoration-none text-dark"><i class="fa-solid fa-gear"></i></a>
              </span>
            </div>
          </div> 
        </div> 
      </div>
    </>
  );
}
