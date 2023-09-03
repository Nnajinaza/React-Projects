import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative ">
                <img
                  src="images/main-banner-1.jpg"
                  className="img-fluid rounded-3"
                />
                <div className="main-banner-content position-absolute">
                  <h4>SUPECHARGED FOR PROS</h4>
                  <h5>iPad S13+ Pro</h5>
                  <p>From $199.00 or $41.62</p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className="small-banner position-relative ">
                  <img
                    src="images/catbanner-01.jpg"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPECHARGED FOR PROS</h4>
                    <h5>Laptops Max</h5>
                    <p>From $199.00 or $41.62</p>
                    <Link className="button">BUY NOW</Link>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    src="images/catbanner-02.jpg"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPECHARGED FOR PROS</h4>
                    <h5>Laptops Max</h5>
                    <p>From $199.00 or $41.62</p>
                    <Link className="button">BUY NOW</Link>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    src="images/catbanner-03.jpg"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPECHARGED FOR PROS</h4>
                    <h5>Laptops Max</h5>
                    <p>From $199.00 or $41.62</p>
                    <Link className="button">BUY NOW</Link>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    src="images/catbanner-04.jpg"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPECHARGED FOR PROS</h4>
                    <h5>Laptops Max</h5>
                    <p>From $199.00 or $41.62</p>
                    <Link className="button">BUY NOW</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex  align-items-center gap-10 ">
                  <img src="images/service.png" />
                  <div>
                    <h6> Free shipping</h6>
                    <p className="mb-0">From all orders over $100</p>
                  </div>
                </div>
                <div className="d-flex  align-items-center gap-10 ">
                  <img src="images/service-02.png" />
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p className="mb-0">Save up to 15% off</p>
                  </div>
                </div>
                <div className="d-flex  align-items-center gap-10 ">
                  <img src="images/service-03.png" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Shop with an expert</p>
                  </div>
                </div>
                <div className="d-flex  align-items-center gap-10 ">
                  <img src="images/service-04.png" />
                  <div>
                    <h6>Affordable prices</h6>
                    <p className="mb-0">Get factory default prices</p>
                  </div>
                </div>
                <div className="d-flex  align-items-center gap-10 ">
                  <img src="images/service-05.png" />
                  <div>
                    <h6> Secure Payments</h6>
                    <p className="mb-0"> 100% Protected Payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-3 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex flex-wrap align-items-center justify-content-between">
                <div className="d-flex align-items-center ">
                  <div>
                    <h6>Computers & Laptops</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/laptop.jpg" />
                </div>
                <div className="d-flex align-items-center ">
                  <div>
                    <h6>Cameras & Videos</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/camera.jpg" />
                </div>
                <div className="d-flex align-items-center ">
                  <div>
                    <h6>Smart Television</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/tv.jpg" />
                </div>
                <div className="d-flex align-items-center ">
                  <div>
                    <h6>Smartwatches</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/watch.jpg" className="image"/>
                </div>
                <div className="d-flex align-items-center ">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/speaker.jpg" />
                </div>
                <div className="d-flex align-items-center ">
                  <div>
                    <h6>Mobiles & Tablets</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/laptop.jpg" />
                </div>
                <div className="d-flex align-items-center ">
                  <div>
                    <h6>Headphones</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/headphone.jpg" />
                </div>
                <div className="d-flex align-items-center ">
                  <div>
                    <h6>Accessories</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/acc.jpg" />
                </div>
                <div className="d-flex align-items-center ">
                  <div>
                    <h6>Portable Speakers</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/speaker.jpg" />
                </div>
                <div className="d-flex gap-15 align-items-center ">
                  <div>
                    <h6>Home Appliances</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/homeapp.jpg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
