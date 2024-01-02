import Slider from "react-slick";
import "../pages/slick-theme.css";
import "../pages/slick.css";
import { ourValues } from "../assets/constants";
import OurCards from "./OurCards";

const ValueSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        ]
    }


    return (
        <Slider {...settings} className="flex mx-auto items-center justify-center">
            {
                ourValues.map((item) => ( 
                    <div key={item.value} className="max-w-[300px]  max-h-[200px] flex items-center justify-center mx-auto">
                        <OurCards {...item}/>
                    </div>
                ))
            }
        </Slider>
    )
}

export default ValueSlider;