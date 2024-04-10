import React from 'react';
import useModal from '../../hooks/use-modal';
import VideoModal from '../common/modals/modal-video';


const contents = {
  title: 'Building software for world changers',
  video_title: 'See Demo Video',
  video_id: '8D6b3McyhhU',
  right_text_1: "Collax builds digital products that let people do things differently. Share your challenge with our team, and we’ll work with you to deliver a revolutionary digital product. Our clients have changed the way people do banking, listen to music.",
  right_text_2: "learn languages, and rent bikes. Their products have been featured in TechCrunch, Business Insider, and Product Hunt.",
  client_icon: '/assets/img/about/testi-7.png',
  client_name: 'El Kindy Conservatory ',
  client_title: 'Since 1999, El Kindy has been the heartbeat of musical mastery, cultivating prodigious talent with a symphony of expertise and passion.',
  desc: "We customize our programs to elevate your learning journey, guaranteeing every student receives unparalleled education and guidance to unlock their musical brilliance.",
  about_img: '/assets/img/breadcrum/ab-1.2.jpg',
}
const { about_img, client_icon, client_name, client_title, desc, right_text_1, right_text_2, title, video_id, video_title } = contents;

const AboutArea = () => {
  const { isVideoOpen, setIsVideoOpen } = useModal();
  return (
    <>
      <div className="ac-about-content-area pt-130">
        <div className="container">
          <div className="ac-border-bottom">
            <div className="row">
              <div className="row ac-testimonial-space">
                <div className="col-xl-6 col-lg-6 wow tpfadeLeft" data-wow-duration=".3s" data-wow-delay=".5s">
                  <div className="ac-testimonial-info">
                    <div className="actestimonial">

                      <div className="actestimonial__position">
                        <h1 className="ac-ab-title"><a href="#">{client_name}</a></h1>
                        <span>{client_title}</span>
                      </div>
                      <div className="actestimonial__paragraph">
                        <p> <span><i className="fas fa-quote-right"></i></span>{desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 wow tpfadeRight" data-wow-duration=".5s" data-wow-delay=".7s">
                  <div className="ac-testimonial-right">
                    <img src={about_img} style={{ height: "380px" }} alt="" />
                  </div>
                </div>
              </div>

              


            </div>
          </div>
        </div>
      </div>

      {/* video modal start */}
      <VideoModal isVideoOpen={isVideoOpen} setIsVideoOpen={setIsVideoOpen} videoId={video_id} />
      {/* video modal end */}
    </>
  );
};

export default AboutArea;