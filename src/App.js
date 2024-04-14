import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/index";
import { User } from "./User";

import "swiper/css";
import "swiper/css/autoplay";

import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";

function App() {
  return (
    <Provider store={store}>
      <header>header</header>
      <User></User>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="my-test">fdsfaf 1222 </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="my-test">fdsfaf 4444</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="my-test">fdsfaf 5555</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="my-test">fdsfaf 666</div>
        </SwiperSlide>
      </Swiper>
    </Provider>
  );
}

export default App;
