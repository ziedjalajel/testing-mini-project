import im from "../images/microphone.jpg";
const BestInClass = () => {
  return (
    <div className="BestInClassDiv">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <img className="BestInClassImg" src={im} />
          </div>
          <div className="col-8">
            <div className="NextToImg">
              <h2 className="ml-50">Best in Class</h2>
              <h5>
                Holisticly predominate extensible testing procedures for
                reliable supply chains. Dynamically innovate resource-leveling
                customer service for state of the art customer service.
              </h5>
              <button type="button" class="btn btn-success">
                CLASSIFY IT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BestInClass;
