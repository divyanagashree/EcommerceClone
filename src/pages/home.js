import Navbar  from "../components/Navbar";

function Home() {
    return(
        <div>
        <Navbar />
            <div className="container py-5">
                <div className="row text-center">
                    <div className="col">
                    <h2 className="text-center">Welcome to Ecommerce</h2>
                    <p>Choose a category to start shopping!</p>

                    <div className="row m-5">
                        <div className="col">
                            <div className="card py-5 bg-dark text-white">
                            <h3 className="text-center">Electronics</h3>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card py-5 bg-dark text-white">
                            <h3 className="text-center">Home Appliances</h3>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card py-5 bg-dark text-white">
                            <h3 className="text-center">Fashion</h3>
                            </div>
                        </div>
                    </div>

                    <div className="row m-5">
                        <div className="col">
                            <div className="card py-5 bg-dark text-white">
                            <h3 className="text-center">Jewellery</h3>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card py-5 bg-dark text-white">
                            <h3 className="text-center">House Decor</h3>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card py-5 bg-dark text-white">
                            <h3 className="text-center">Accessories</h3>
                            </div>
                        </div>
                    </div>

                    <div className="row m-5">
                        <div className="col">
                            <div className="card py-5 bg-dark text-white">
                            <h3 className="text-center">Food</h3>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card py-5 bg-dark text-white">
                            <h3 className="text-center">Kids</h3>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card py-5 bg-dark text-white">
                            <h3 className="text-center">Health and Skin care</h3>
                            </div>
                        </div>
                    </div>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;