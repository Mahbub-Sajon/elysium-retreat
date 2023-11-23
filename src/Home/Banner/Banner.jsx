import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img from '../../assets/banner/banner.jpg'
const Banner = () => {
    return (
        <div>
             <Carousel autoPlay={true} showThumbs={false} >
                <div>
                    <img src={img} />
                </div>
                <div>
                    <img src={img} />
                </div>
                <div>
                    <img src={img} />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;