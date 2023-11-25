import lodging from '../../assets/services/service1.png'
import restaurant from '../../assets/services/service2.png'
import beach from '../../assets/services/service3.png'
import island from '../../assets/services/service4.png'
const Services = () => {
    return (
        <section className="text-sm md:text-2xl font-serif pt-10 bg-[#c5d4ee]">
           <div className="mx-12 md:mx-72">
           <div className='text-center flex justify-between items-center'>
                <h3 className="mb-5">
                    <span className=" bg-[#224698] rounded-full p-3 mr-4 text-black">
                        01
                    </span>
                    Lodging
                </h3>
                <img src={lodging} alt="" />
            </div>
            <hr className=" h-[3px] my-6 bg-[#becde6]"/>
            <div className='flex justify-between'>
                <h3 className="mb-5">
                    <span className=" bg-[#224698] rounded-full p-3 mr-4  text-black">
                        02
                    </span>
                    Restaurant
                </h3>
                <img src={restaurant} alt="" />
            </div>
            <hr className=" h-[3px] my-6 bg-[#becde6]"/>
            <div className='flex justify-between'>
                <h3 className="mb-5">
                    <span className=" bg-[#224698] rounded-full p-3 mr-4  text-black">
                        03
                    </span>
                    Beach Activities
                </h3>
                <img src={beach} alt="" />
            </div>
            <hr className=" h-[3px] my-6 bg-[#becde6]"/>
            <div className='flex justify-between'>
                <h3 className="mb-5">
                    <span className=" bg-[#224698] rounded-full p-3 mr-4 text-black">
                        04
                    </span>
                    St. Martin Island
                </h3>
                <img src={island} alt="" />
            </div>
            <hr className=" h-[3px] my-6 bg-[#becde6]"/>
           </div>
        </section>
    );
};

export default Services;