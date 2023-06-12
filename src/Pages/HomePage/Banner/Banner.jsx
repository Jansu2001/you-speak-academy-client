import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
const Banner = () => {
  return (
    <div>
      <Carousel className="text-center">
        <div>
          <img
            className=""
            src="https://images.unsplash.com/photo-1548994423-77b5f16a22cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          />
          <div className="relative -top-60 text-white bg bg-gray-400 w-3/4 mx-auto rounded-full p-4 bg-opacity-50">
            <h2 className="text-5xl font-bold">Learn Chinese Language</h2>
            <p className="w-2/3 mx-auto font-bold">
              Chinese is a tonal language with over 1.3 billion speakers. It
              uses characters instead of an alphabet, has various dialects, and
              is the official language of China and Taiwan.
            </p>
          </div>
        </div>
        <div>
          <img
            className=""
            src="https://images.unsplash.com/photo-1583466478015-2dce6bf2f551?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          />
          <div className="relative -top-60 text-white bg bg-gray-400 w-3/4 mx-auto rounded-full p-4 bg-opacity-50">
            <h2 className="text-5xl font-bold mb-4">Learn Japanese Language</h2>
            <p>
              Japanese is a language spoken by about 128 million people. It has
              three writing systems: kanji, hiragana, and katakana. Its unique
              grammar, honorifics, and cultural influence make it a captivating
              and diverse language.
            </p>
          </div>
        </div>
        <div>
          <img
            className=""
            src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=874&q=80"
          />
          <div className="relative -top-60 text-white bg bg-gray-400 w-3/4 mx-auto rounded-full p-4 bg-opacity-50">
            <h2 className="text-5xl font-bold mb-4">Follow Your Dream</h2>
            <p>
              Following your dreams means pursuing your passions and
              aspirations. It requires determination, hard work, and
              perseverance. It empowers you to live a fulfilling life aligned
              with your true desires and potential.
            </p>
          </div>
        </div>
        <div>
          <img
            className=""
            src="https://images.unsplash.com/photo-1548048026-5a1a941d93d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          />
          <div className="relative -top-60 text-white bg bg-gray-400 w-3/4 mx-auto rounded-full p-4 bg-opacity-50">
            <h2 className="text-5xl font-bold mb-4">Our Librarie</h2>
            <p>
              Libraries are havens of knowledge and imagination. They provide
              access to a vast collection of books, resources, and digital
              materials. They foster learning, research, and community
              engagement, promoting literacy and lifelong learning for all.
            </p>
          </div>
        </div>
        <div>
          <img
            className=""
            src="https://plus.unsplash.com/premium_photo-1681681061635-a64755f982f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          />
          <div className="relative -top-60 text-white bg bg-gray-400 w-3/4 mx-auto rounded-full p-4 bg-opacity-50">
            <h2 className="text-5xl font-bold mb-4">Our Student at Librarie</h2>
            <p>
              Students studying at the library benefit from a quiet and
              conducive environment for focused learning. They have access to a
              wide range of resources, such as books, research materials, and
              technology, enhancing their academic pursuits and productivity.
            </p>
          </div>
        </div>
      </Carousel>

      {/* <div className="carousel carousel-center rounded-box">
        <div className="carousel-item">
        <img
            className=""
            src="https://images.unsplash.com/photo-1548994423-77b5f16a22cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          />
        </div>
        <div className="carousel-item">
        <img
            className=""
            src="https://images.unsplash.com/photo-1583466478015-2dce6bf2f551?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          />
        </div>
        <div className="carousel-item">
        <img
            className=""
            src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=874&q=80"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/stock/photo-1494253109108-2e30c049369b.jpg"
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/stock/photo-1550258987-190a2d41a8ba.jpg"
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/stock/photo-1559181567-c3190ca9959b.jpg"
            alt="Pizza"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
            alt="Pizza"
          />
        </div>
      </div> */}
    </div>
  );
};

export default Banner;
