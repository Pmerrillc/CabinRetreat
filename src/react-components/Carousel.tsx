import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules"
import 'swiper/css';
import 'swiper/css/navigation';

interface Props {
    images: {
        smallImage: string;
        largeImage: string
    }[]
}

export const Carousel = (props: Props) => {

    const { images } = props

    return (
        <div className="page-padding max-page-width max-content-width">
    <Swiper
      slidesPerView={1}
      centeredSlides={true}
      centeredSlidesBounds={true}
      modules={[Navigation]}
      navigation={true}
    >

        {images &&
            images.map((image) => {
                return (
                    <SwiperSlide>
                        <img
                        src={image.largeImage}
                        srcSet={`${image.smallImage} 500w, ${image.largeImage} 900w`}
                        sizes={"(max-width: 789px) 400px, 900px"}
                        style={
                            {
                                width: "100%",
                                height: "auto"
                        }
                    }
                        />
                    </SwiperSlide>
                )
            } )
        }

    </Swiper>
    </div>
    )
  ;
}