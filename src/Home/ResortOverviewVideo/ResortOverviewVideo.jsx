import video from '../../assets/video/elysium.mp4';
const ResortOverviewVideo = () => {
    return (
       <section>
        <video className='mx-auto w-[65rem]' controls src={video}></video>
       </section>
    );
};

export default ResortOverviewVideo;