import im2 from "../images/iphone.jpg";

const SuperiorQuality = () => {
  return (
    <div className="SuperiorQuaity">
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div className="NextToImg">
              <h2 className="ml-50">Superior Quality</h2>
              <h5>
                Holisticly predominate extensible testing procedures for
                reliable supply chains. Dynamically innovate resource-leveling
                customer service for state of the art customer service.
              </h5>
              <button type="button" class="btn btn-light">
                TEST IT
              </button>
            </div>
          </div>
          <div className="col-4">
            <img className="SuperiorQualityImg" src={im2} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SuperiorQuality;
