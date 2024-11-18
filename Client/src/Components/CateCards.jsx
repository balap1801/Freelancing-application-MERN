                      Inventore, praesentium.
                    </p>
                    <a href="/" className="button">
                      Learn More
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            </div>
            {/* <!-- Slide-end --> */}

            {/* <!-- Slide-start --> */}
            <div className="swiper-slide catecards-slide">
              <SwiperSlide
                style={{
                  maxWidth: "max-content",
                  maxHeight: "max-content",
                  padding: "1rem",
                  background: "transparent",
                  borderRadius: "2rem",
                }}
              >
                <div
                  data-aos="fade-left"
                  data-aos-offset="350"
                  data-aos-duration="500"
                  data-aos-easing="ease-in-out"
                  className="card-6 card"
                >
                  <div className="card-content">
                    <h2 className="card-title">Data Entry</h2>
                    <p className="card-body">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Inventore, praesentium.
                    </p>
                    <a href="/" className="button">
                      Learn More
                    </a>
                  </div>
                </div>
                {/* </motion.div> */}
              </SwiperSlide>
            </div>
            {/* <!-- Slide-end --> */}

            {/* <!-- Slide-start --> */}
            <div className="swiper-slide catecards-slide">
              <SwiperSlide
                style={{
                  maxWidth: "max-content",
                  maxHeight: "max-content",
                  padding: "1rem",
                  background: "transparent",
                  borderRadius: "2rem",
                }}
              >
                <div
                  data-aos="fade-left"
                  data-aos-offset="350"
                  data-aos-duration="500"
                  data-aos-easing="ease-in-out"
                  className="card-7 card"
                >
                  <div className="card-content">
                    <h2 className="card-title">Logistics</h2>
                    <p className="card-body">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Inventore, praesentium.
                    </p>
                    <a href="/" className="button">
                      Learn More
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            </div>
            {/* <!-- Slide-end --> */}
          </div>
        </section>
      </Swiper>
      <div className="catecards-slider-control">
        <div className="swiper-button-prev slider-arrow">
          <FaChevronCircleLeft className="ion-icon" />
        </div>
        <div className="swiper-button-next slider-arrow">
          <FaChevronCircleRight className="ion-icon" />
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </>
  );
};

export default CateCards;
