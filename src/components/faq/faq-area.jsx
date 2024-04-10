import React from 'react';

const accordion_items = [
  { id: 'one', show: true, title: 'Is my data safe?', desc: "At El Kindy Conservatory, we take the security and privacy of your data very seriously. We implement robust measures to safeguard your personal information, including encryption, access controls, and regular security audits. Additionally, we adhere to strict data protection regulations to ensure that your data is handled responsibly and in accordance with applicable laws. You can trust that your data is safe with us." },
  { id: 'two', title: 'How experienced are your instructors?', desc: "Our instructors at El Kindy Conservatory are highly experienced professionals with extensive backgrounds in music education and performance. They are dedicated to providing the highest quality instruction and support to our students." },
  { id: 'three', title: 'Can beginners enroll in your programs?', desc: "Absolutely! We welcome students of all skill levels, including beginners. Our programs are designed to accommodate students at every stage of their musical journey, from novice to advanced levels." },
  { id: 'four', title: 'What types of musical instruments and genres do you offer instruction in?', desc: "At El Kindy Conservatory, we offer instruction in a wide range of musical instruments including piano, guitar, violin, flute, and more. We also cover various genres such as classical, jazz, contemporary, and traditional music." },
  { id: 'five', title: 'Are there performance opportunities for students?', desc: "Yes, we offer regular performance opportunities for our students, including recitals, concerts, and competitions. These events allow students to showcase their talents and gain valuable performance experience." },
  { id: 'six', title: 'What sets El Kindy Conservatory apart from other music schools?', desc: "At El Kindy Conservatory, we pride ourselves on our commitment to excellence, personalized instruction, and innovative teaching methods. Our goal is to provide the finest education and support to help each student reach their full potential in music." },
 ]

const FaqArea = () => {
  return (
    <>
      <div className="sd-accordio-area pt-130 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-custom-accordio faq-accordio-border">
                <div className="accordion" id="accordionExample">

                  {accordion_items.map((item, i) => {
                    const { id, show, title, desc } = item;
                    return <div key={id} className='accordion-items'>
                      <h2 className="accordion-header" id={`heading-${id}`}>
                        <button className={`accordion-buttons ${show ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${id}`}
                          aria-expanded={show ? 'true' : 'false'} aria-controls={`collapse-${id}`}>
                          {title}
                        </button>
                      </h2>
                      <div id={`collapse-${id}`} className={`accordion-collapse collapse ${show ? 'show' : ''}`} aria-labelledby={`heading-${id}`} data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          {desc}
                        </div>
                      </div>
                    </div>
                  })}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqArea;