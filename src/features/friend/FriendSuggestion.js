export default function FriendSuggestion() {
    return (
      <>
        <h1 className="mb-3 fw-bold text-5">Friend Suggestions</h1>
        <div className="row g-2">
          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <div className="card h-100 shadow">
              <img
                src="https://images.unsplash.com/photo-1550831858-3c2581fed470"
                className="card-img-top"
                alt="user"
              />
              <div className="card-body">
                <h6 className="card-title">Andy Dufresne</h6>
                <div className="d-flex flex-column gap-2">
                  <button className="btn btn-primary text-3.5">Confirm</button>
                  <button className="btn btn-gray-200 text-3.5">Delete</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <div className="card h-100 shadow">
              <img
                src="https://images.unsplash.com/photo-1627541718143-1adc1b582e62"
                className="card-img-top"
                alt="user"
              />
              <div className="card-body">
                <h6 className="card-title">Anju Salgaonkar</h6>
                <div className="d-flex flex-column gap-2">
                  <button className="btn btn-primary text-3.5">Confirm</button>
                  <button className="btn btn-gray-200 text-3.5">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  