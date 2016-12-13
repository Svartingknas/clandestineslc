import React from 'react'


export default React.createClass({
render() {
  return (
  <div>
    <div id="myCarousel" className="carousel slide" data-ride="carousel">

  <ol className="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
    <li data-target="#myCarousel" data-slide-to="3"></li>
  </ol>


  <div className="carousel-inner" role="listbox">

    <div className="item active">
      <img src="/images/past1.jpg" alt="past1" />
    </div>

    <div className="item">
      <img src="/images/past2.jpg" alt="past2" />
    </div>

    <div className="item">
      <img src="/images/past3.jpg" alt="past3" />
    </div>
  </div>

  <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" />
    <span className="sr-only">Previous</span>
  </a>
  <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true" />
    <span className="sr-only">Next</span>
  </a>
  </div>
</div>
  )}
})
