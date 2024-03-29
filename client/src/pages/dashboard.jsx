import React from 'react';

function dashboard(){
    return (
        <>
           <div>
                <div>
                    <nav className="navbar fixed-top bg-dark ">
                        <div className="position-relative d-flex justify-content-evenly">
                            <div className="container-fluid">
                                <a className="navbar-brand text-white" href="#">Fixed top</a>
                            </div>
                            <div>
                                <a href="/signin">SignIn</a>
                            </div>
                        </div>    
                    </nav>
                </div>
            <div>
                <div>
                    <h2 className='position-absolute top-50 start-50 translate-middle'>Welcome Home</h2>
                </div>
            </div>
           </div>
        </>
    );
}

export default dashboard;