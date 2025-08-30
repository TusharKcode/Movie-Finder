

function Footer(){
    return(
        <>
        <footer className="bg-primary text-white text-center text-lg-left" style={{backgroundColor:"black", border:"solid #eee"}}>
            <div className="container-fluid">
                <div className="row"></div>
                <div className="col-lg-6 mb-4" style={{ fontStyle:"italic", color:"cyan"}}>
                    <h1>PICMovie</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Quae alias nulla perspiciatis eum voluptates nemo ut doloremque officia, 
                        temporibus voluptatum soluta! Tenetur omnis quaerat ducimus! Recusandae 
                        placeat sunt dolore minus.</p>
                    <button>Join the community</button>
                </div>
                <div className="col-lg-3 mb-4" style={{fontWeight:"bold"}}>
                    <h3>
                        <ul className="mb-0">
                            <li><a href="/src/pages/HomeSection.jsx">Home</a></li>
                            <li><a href="/src/pages/Movies.jsx">Movies</a></li>
                            <li><a href="/src/pages/Series.jsx">Series</a></li>
                            <li><a href="/src/pages/People.jsx">People</a></li>
                            <li><a href="/src/pages/AboutUs.jsx">About Us</a></li>
                        </ul>
                    </h3>
                </div>
                <div className="col-lg-3 mb-4" style={{fontWeight:"bold"}}>
                    <h3>
                        Contribution
                    </h3>
                    <ul>
                        <li>Add New Movies</li>
                        <li>Add new TV Series</li>
                    </ul>
                </div>
                <div className="text-center p-3">
                    &copy; {new Date().getFullYear()} Copyright:{' '}
                    <a href="/src/pages/HomeSection.jsx">
                        PicMovie
                    </a>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer