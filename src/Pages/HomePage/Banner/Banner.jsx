
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

const Banner = () => {
  return (
    <div>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          {" "}
          <div>
            <img
              className="w-full"
              src="https://images.unsplash.com/photo-1548994423-77b5f16a22cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            />
            <div className="relative -top-60 text-white bg bg-gray-400 lg:w-3/4 text-center mx-auto lg:rounded-full lg:p-4 bg-opacity-50">
              <h2 className="lg:text-5xl font-bold">Learn Chinese Language</h2>
              <p className="w-2/3 mx-auto font-bold">
                Chinese is a tonal language with over 1.3 billion speakers. It
                uses characters instead of an alphabet, has various dialects,
                and is the official language of China and Taiwan.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="w-full"
              src="https://images.unsplash.com/photo-1583466478015-2dce6bf2f551?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            />
            <div className="relative -top-60 text-white bg bg-gray-400 lg:w-3/4 text-center mx-auto lg:rounded-full lg:p-4 bg-opacity-50">
              <h2 className="lg:text-5xl font-bold mb-4">
                Learn Japanese Language
              </h2>
              <p>
                Japanese is a language spoken by about 128 million people. It
                has three writing systems: kanji, hiragana, and katakana. Its
                unique grammar, honorifics, and cultural influence make it a
                captivating and diverse language.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="w-full"
              src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=874&q=80"
            />
            <div className="relative -top-60 text-white bg bg-gray-400 lg:w-3/4 text-center mx-auto lg:rounded-full lg:p-4 bg-opacity-50">
              <h2 className="lg:text-5xl font-bold mb-4">Follow Your Dream</h2>
              <p>
                Following your dreams means pursuing your passions and
                aspirations. It requires determination, hard work, and
                perseverance. It empowers you to live a fulfilling life aligned
                with your true desires and potential.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="w-full "
              src="https://images.unsplash.com/photo-1548048026-5a1a941d93d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            />
            <div className="relative -top-60 text-white bg bg-gray-400 lg:w-3/4 text-center mx-auto lg:rounded-full lg:p-4 bg-opacity-50">
              <h2 className="lg:text-5xl font-bold mb-4">Our Librarie</h2>
              <p>
                Libraries are havens of knowledge and imagination. They provide
                access to a vast collection of books, resources, and digital
                materials. They foster learning, research, and community
                engagement, promoting literacy and lifelong learning for all.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="w-full"
              src="https://plus.unsplash.com/premium_photo-1681681061635-a64755f982f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            />
            <div className="relative -top-60 text-white bg bg-gray-400 lg:w-3/4 text-center mx-auto lg:rounded-full lg:p-4 bg-opacity-50">
              <h2 className="lg:text-5xl font-bold mb-4">
                Our Student at Librarie
              </h2>
              <p>
                Students studying at the library benefit from a quiet and
                conducive environment for focused learning. They have access to
                a wide range of resources, such as books, research materials,
                and technology, enhancing their academic pursuits and
                productivity.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
