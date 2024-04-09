import Link from 'next/link';
import React from 'react';
import { blog_data } from '../../../data';
import { Document, HighlightFive, HighlightFour } from '../../../svg';
import BlogForm from '../../forms/blog-form';

const blog_items = blog_data.filter(blog => blog.home_5);

const blog_contents = {
  shapes: ['bp-chose-5.2.png', 'bp-chose-5.3.png', 'hero-shape-5.2.png'],
  subtitle: 'Blog Post',
  title: <>Read <span className="tp-section-highlight"> Blog <HighlightFour /></span></>,
  contact_subtitle: 'Get in Touch',
  contact_title: <><span className="tp-section-highlight"> Contact <HighlightFive /> </span> us</>,
}

const { contact_subtitle, contact_title, shapes, subtitle, title } = blog_contents;

const BlogArea = () => {
  return (
    <div className="tp-blog-area tp-blog-bs-space yellow-bg pt-130 pb-130 mr-130 ml-130 grey-bg p-relative">
      
      <div className="container">
      <div className="row justify-content-center"> 
          <div className="col-xl-6 col-lg-5 tp-contact-space col-12 ">
            <div className="tp-border-left">
              <div className="tp-blog-section-box pb-35">
                <h5 className="tp-subtitle tp-subtitle-before-color">{contact_subtitle}</h5>
                <h2 className="tp-title-sm">{contact_title}</h2>
              </div>
              <div className="tpcontact">
                <div className="tpcontact__heading">
                  <h4 className="tp-contact-title"><Document />
                    Fill the form
                  </h4>
                </div>
                <div className="tpcontact__form">
                  <BlogForm/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogArea;