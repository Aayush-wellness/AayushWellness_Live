import React, { useState, useEffect, useRef } from "react";
import "./Stackimage.css";
import BlurText from "./BlurText";
import { Helmet } from 'react-helmet';

const StackImage = () => {
    const [isInView, setIsInView] = useState(false);
    const sectionRefs = useRef([]);

    // Schema.org structured data
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Aayush Wellness - Premium Health & Wellness Products",
        "description": "Aayush Wellness is a trusted provider of premium health and wellness products, combining traditional knowledge with modern science to deliver effective solutions for better living.",
        "publisher": {
            "@type": "Organization",
            "name": "Aayush Wellness",
            "logo": {
                "@type": "ImageObject",
                "url": "https://aayushlife.com/logo.png"
            },
            "description": "Aayush Wellness is a trusted provider of premium health and wellness products, combining traditional knowledge with modern science to deliver effective solutions for better living.",
            "sameAs": [
                "https://www.facebook.com/aayushwellness",
                "https://www.instagram.com/aayushwellness",
                "https://twitter.com/aayushwellness"
            ]
        },
        "mainEntity": [{
            "@type": "Product",
            "name": "Sleep & Beauty Gummies",
            "description": "Aayush Wellness Sleep & Beauty Gummies combine the power of Melatonin, Chamomile, Glutathione, Biotin, Hyaluronic Acid, and Collagen in a delicious gummy format. These scientifically formulated gummies are designed to promote restful sleep while enhancing natural beauty from within. Ideal for individuals seeking better sleep quality and improved skin, hair, and nail health.",
            "brand": {
                "@type": "Brand",
                "name": "Aayush Wellness",
                "description": "Aayush Wellness - Your trusted partner in premium health and wellness solutions"
            },
            "category": "Health & Wellness",
            "offers": {
                "@type": "Offer",
                "priceCurrency": "INR",
                "price": "",
                "availability": "https://schema.org/InStock",
                "description": "Premium quality sleep and beauty supplement in gummy form"
            },
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "127"
            }
        },
        {
            "@type": "Product",
            "name": "Premium Pan Masala",
            "description": "Experience the authentic taste of India with Aayush Wellness Premium Pan Masala. Meticulously crafted using a blend of premium betel leaves, areca nuts, and exotic spices, our Pan Masala delivers a rich, refreshing flavor that awakens your senses. Perfect for those who appreciate traditional flavors with a touch of premium quality.",
            "brand": {
                "@type": "Brand",
                "name": "Aayush Wellness",
                "description": "Aayush Wellness - Bringing you authentic and premium quality traditional products"
            },
            "category": "Food & Beverage",
            "offers": {
                "@type": "Offer",
                "priceCurrency": "INR",
                "price": "",
                "availability": "https://schema.org/InStock",
                "description": "Authentic Pan Masala with premium ingredients"
            },
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.7",
                "reviewCount": "89"
            }
        }]
    };

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const rect = entry.boundingClientRect;
            const windowHeight = window.innerHeight;

            if (rect.top < windowHeight * 0.47 && rect.bottom > -windowHeight * 0.5) {
              setIsInView(true);
             // 50% to 150%
            } else {
              setIsInView(false);
               // Above 50%
            }
          });
        },
        { threshold: [1]} // Trigger at 50% visibility
      );  
    
  
      sectionRefs.current.forEach((section) => {
        if (section) observer.observe(section);
      });
  
      return () => observer.disconnect();
    }, []);
  return (
    <>
      <Helmet>
        <title>Aayush Wellness - Premium Health & Wellness Products</title>
        <meta 
          name="description" 
          content="Aayush Wellness offers premium health and wellness products including Sleep & Beauty Gummies and Premium Pan Masala. Discover our range of wellness products for better sleep, beauty, and authentic flavors." 
        />
        <meta 
          name="keywords" 
          content="Aayush Wellness, health products, wellness, sleep gummies, beauty gummies, pan masala, natural wellness, premium health, beauty products, authentic flavors" 
        />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>
      <h1 style={{ display: 'none' }}>Aayush Wellness - Premium Health & Wellness Products</h1>
      <h2 style={{ display: 'none' }}>Discover our range of wellness products including Sleep & Beauty Gummies and Premium Pan Masala</h2>
      <div className={`Block_container__Nv4cD Block_isCream__VRtaMm StackedContent_container__DfJEU snipcss-YBdoL blocks hidden md:block  ${isInView ? "active-background" : ""}`}>
        <div className="Container_container__NvvWg StackedContent_wrapper__2JCtc snipcss0-1-1-2 style-ee6GF" id="style-ee6GF">
          <div className="StackedContent_mediaContainer__5BNSM">
            <div className="StackedContent_mediaWrapper___gRyP StackedContent_isActive__U4mo3">
              <div>
                <video
                loop
                autoPlay
                // poster="https://cdn.shopify.com/s/files/1/0653/9830/9053/files/display_image_for_gummies_6d8e5494-f02b-4bc9-a00f-ce1f30451c0f.jpg?v=1739540178"
                muted
                playsInline
                  alt=""
                  loading="lazy"
                  width="1528"
                  height="1644"
                  decoding="async"
                  data-nimg="1"
                  className="StackedContent_media__haQuf style-mKRVT image-transition"
                  src={
                    isInView
                      ? "https://cdn.shopify.com/videos/c/o/v/9ae83fdffa0e4715b186839c452deadd.mp4"
                      : "https://cdn.shopify.com/videos/c/o/v/fed476cd8dd24d17b7ebf64e63335c99.mp4"
                  }
                  id="style-mKRVT"
                />
              </div>
            </div>
            <div className="StackedContent_mediaWrapper___gRyP">
              <div>
                <img
                  alt=""
                  loading="lazy"
                  width="1528"
                  height="1644"
                  decoding="async"
                  data-nimg="1"
                  className="StackedContent_media__haQuf style-9BbQF image-transition"
                  src="https://cdn.shopify.com/s/files/1/0653/9830/9053/files/display_image_for_Panmasala.jpg?v=1739539866"
                  id="style-9BbQF"
                />
              </div>
            </div>
          </div>
          <div className="StackedContent_contentWrapper__6MXgH snipcss0-2-2-10">
            <div className="StackedContent_content__QTFkv StackedContent_isActive__U4mo3">
            <BlurText
  text="SLEEP PEACEFULLY, GLOW NATURALLY"
  delay={150}
  animateBy="words"
  direction="top"
  
  className="md:text-6xl mb-8 text-[25px]  font-bold text-[#000]"  style={{ fontFamily: "ROGBold" }}
/>
              <p className="  text-[20px]" style={{ fontFamily: "Minionpro" }}>
              Wake up refreshed and radiant with our expertly crafted Sleep & Beauty Gummies. Infused with powerful ingredients to support deep sleep and enhance natural beauty from within.
              <br/>
              <div><br/><b>Melatonin & Chamomile</b> – Promotes restful sleep & relaxation</div>
              <div><b> Glutathione & Biotin</b>  – Enhances skin glow & strengthens hair</div>
              <div><b> Hyaluronic Acid & Collagen </b> – Boosts hydration & skin elasticity</div>
              </p>
             
              <a
                className="BaseButton_baseButton__gki38 BaseButton_isLushGreen__Of4fS BaseButton_hasOutline__IILGk StackedContent_cta__9aF3N"
                text="Learn more"
                href="https://aayushlife.com/"
              >
                <span className=" text-[20px] " style={{ fontFamily: "Minionpro", color: "#33cccc" }}>Explore Gummies</span>
                <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.586.531a.75.75 0 1 0-1.172.938L8.64 4.25H1a.75.75 0 0 0 0 1.5h7.64L6.414 8.531a.75.75 0 1 0 1.172.938l3.2-4a.75.75 0 0 0 0-.938l-3.2-4Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>

            <div ref={(el) => (sectionRefs.current[0] = el)} className={`StackedContent_content__QTFkv ${isInView ? "active-section" : ""}`}>
            <BlurText
  text="PREMIUM BLEND, AUTHENTIC FLAVOR"
  delay={150}
  animateBy="words"
  direction="top"
  className={`md:text-6xl mb-8 text-[25px]  font-bold text-black ${isInView ? "active-text" : ""} `}
 
/>
              {/* <h2 className={`StackedContent_title__2FGoE ${isInView ? "active-text" : ""} `}>Built on our leading data platform</h2> */}
              <p className="  text-[20px]" style={{ fontFamily: "Minionpro" }}>
              Crafted with the finest ingredients, our Pan Masala delivers an exquisite taste and rich aroma. Experience tradition with every bite, enhanced by a perfect balance of flavors.
              <br/>
              <div><br/><b>Authentic Spices </b> – A signature blend for a refreshing taste</div>
              <div><b>  Premium Ingredients </b>  – Handpicked for superior quality</div>
              
              </p>
              <a
                className="BaseButton_baseButton__gki38 BaseButton_isLushGreen__Of4fS BaseButton_hasOutline__IILGk StackedContent_cta__9aF3N"
                text="Learn more"
                href="https://aayushveda.in/"
              >
                <span className=" text-[20px]" style={{ fontFamily: "Minionpro",color: "#33cccc" }}>Discover More</span>
                <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.586.531a.75.75 0 1 0-1.172.938L8.64 4.25H1a.75.75 0 0 0 0 1.5h7.64L6.414 8.531a.75.75 0 1 0 1.172.938l3.2-4a.75.75 0 0 0 0-.938l-3.2-4Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
   
  );
};

export default StackImage;
