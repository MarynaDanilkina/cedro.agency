import { useMemo } from "react";
import Label from "../Label/label";
import "./selected.css";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper/modules';

const Selected = ({activeData, getActiveData}) => {

  const content = useMemo(() => {
    if (activeData.length > 0) {
      return (
        <div className="selected__container">
          <div className="selected">
            <Swiper
              slidesPerView="auto"
              spaceBetween={4}
              pagination={{
                clickable: true,
              }}
              freeMode={true}
              modules={[FreeMode]}
              className="mySwiper"
            >
              {activeData.map((el) => (
                <SwiperSlide
                  key={el}
                >
                  <Label text={el} getActiveData={getActiveData} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )
    }
    return null;
  }, [activeData])

  return content;
}
export default Selected;
