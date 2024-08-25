
const DashboardContent = () => {
    return (
        <>
            <div className="row">
                <div className="col-lg-3 col-sm-3 col-sm-6">
                    <div className="card text-left bg-primary text-light border-0">

                        <div className="card-body">
                            <h3 className="card-title">150</h3>
                            <p className="card-text">New Orders</p>

                        </div>
                        <div className="card-footer bg-gradient border-0 text-center">
                        More info
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-3 col-sm-6">
                    <div className="card text-left bg-success text-light border-0">

                        <div className="card-body">
                            <h3 className="card-title">53%</h3>
                            <p className="card-text">Bounce Rate</p>

                        </div>
                        <div className="card-footer bg-gradient border-0 text-center">
                        More info
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-3 col-sm-6">
                    <div className="card text-left bg-warning text-dark border-0">

                        <div className="card-body">
                            <h3 className="card-title">44</h3>
                            <p className="card-text">User Registrations</p>

                        </div>
                        <div className="card-footer bg-gradient border-0 text-center">
                            More info
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-3 col-sm-6">
                    <div className="card text-left bg-danger text-light border-0">

                        <div className="card-body">
                            <h3 className="card-title">65</h3>
                            <p className="card-text">Unique Visitors</p>

                        </div>
                        <div className="card-footer bg-gradient border-0 text-center">
                             More info
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardContent;