import Link from 'next/link';
import React from 'react';
import SocialLinks from '../social-links';
import CopyrightArea from './component/copyright-area';

const footer_contents = {
  shapes: ['hero-shape-5.1.png', 'testimonial-shape-5.4.png'],
  logo: '/assets/img/logo/logo-blue.png',
  widget_desc: 'Discover a seamless, reliable, and 100% secure payment experience at El Kindy Conservatory. Simplifying transactions for your peace of mind.',
  footer_widgets: [
    {
      w_class: 'd-flex justify-content-lg-center',
      title: 'Useful Links',
      widget_lists: ['Contact us', 'About us', 'Home', 'Q & A']
    },
    {
      padd: 'pl-20',
      title: 'Community',
      widget_lists: ['Help Center', 'Our Team', 'Events']
    },
  ],
  subscribe_title: 'Subscribe Newslatter',
  subscribe_text: 'Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo',
  copy_right_text: <>© Copyright ©{new Date().getFullYear()} Collax. All Rights Reserved Copyright</>,
  conditions: ['Terms and conditions', 'Privacy policy', 'Login / Signup']
}
const { conditions, copy_right_text, footer_widgets, logo, widget_desc, subscribe_text, subscribe_title, shapes }
  = footer_contents;

const FooterFour = () => {
  return (
    <footer >
      <div className="tp-footer-area pt-130 pb-30 p-relative">
        {shapes.map((s, i) => (
          <div key={i} className={`bp-foooter-shape-${i + 1} d-none d-lg-block`}>
            <img src={`/assets/img/footer/${s}`} alt="" />
          </div>
        ))}
        <div className="container">
          <div className="copyright-border pt-40 row wow tpfadeUp"  data-wow-duration=".3s" data-wow-delay=".5s">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="tp-footer-widget">
                <div className="tp-footer-widget__logo mb-30">
                  <Link href="/">
                    <a><img src={logo} alt="" style={{height:"100px", width:"100px"}} /></a>
                  </Link>
                </div>
                <div className="tp-footer-widget__text mb-30">
                  <p>{widget_desc}</p>
                </div>
                <div className="tp-footer-widget__social-link tp-footer-widget__social-link-2 ">
                  <SocialLinks />
                </div>
              </div>
            </div>
            {footer_widgets.map((w, i) => {
              const { title, widget_lists, w_class, padd } = w;
              return <div key={i} className={`col-xl-3 col-lg-2 col-md-6 ${w_class ? w_class : ''}`}>
                <div className={`tp-footer-widget ${padd ? padd : ''}`}>
                  <div className="tp-footer-widget__title pb-15">
                    <h3 className="footer-title text-black">{title}</h3>
                  </div>
                  <div className="tp-footer-widget__list">
                    <ul>
                      {widget_lists.map((l, i) => <li key={i}><a href="#">{l}</a></li>)}
                    </ul>
                  </div>
                </div>
              </div>
            })}
            
          </div>
        </div>
        {/* CopyrightArea start 
        <CopyrightArea copy_right_text={copy_right_text} conditions={conditions} color={'tp-copyright-color'} />
         CopyrightArea end */}
      </div>
    </footer>
  );
};

export default FooterFour;