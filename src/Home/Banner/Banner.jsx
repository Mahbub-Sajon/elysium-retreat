import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img from '../../assets/banner/banner.jpg'
import img2 from '../../assets/banner/banner2.jpg'
import img3 from '../../assets/banner/banner3.jpg'
const Banner = () => {
    return (
        <section>
             <Carousel infiniteLoop={true} autoPlay={true} showThumbs={false} >
                <div>
                    <img src={img} />
                </div>
                <div>
                    <img src={img2} />
                </div>
                <div>
                    <img src={img3} />
                </div>
            </Carousel>
        </section>
    );
};

export default Banner;