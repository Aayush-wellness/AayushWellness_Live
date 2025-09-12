import React from 'react'
import './AwCard.css'
import DecryptedText from './DecryptedText'
import BlurText from './BlurText'
import { Helmet } from 'react-helmet';

const AwCard = () => {
  // Schema.org structured data
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Aayush Wellness - Premium Natural Health & Wellness Solutions",
    "description": "Discover Aayush Wellness' range of scientifically crafted wellness products with natural ingredients for better health and well-being.",
    "publisher": {
      "@type": "Organization",
      "name": "Aayush Wellness",
      "logo": {
        "@type": "ImageObject",
        "url": "https://aayushlife.com/logo.png"
      },
      "description": "Aayush Wellness combines traditional Ayurvedic knowledge with modern science to create effective health and wellness solutions.",
      "sameAs": [
        "https://www.facebook.com/aayushwellness",
        "https://www.instagram.com/aayushwellness",
        "https://twitter.com/aayushwellness"
      ]
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Product",
            "name": "Natural Wellness Products",
            "description": "Premium health supplements made with pure herbal extracts and natural ingredients for holistic well-being.",
            "category": "Health & Wellness"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Product",
            "name": "Scientifically Formulated Supplements",
            "description": "Research-backed wellness solutions developed using modern scientific methods and traditional knowledge.",
            "category": "Dietary Supplements"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "Product",
            "name": "Daily Wellness Solutions",
            "description": "Convenient and effective daily health supplements designed for modern lifestyles.",
            "category": "Health Products"
          }
        }
      ]
    }
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>
      {/* Hidden SEO Headers */}
      <h1 style={{ display: 'none' }}>Aayush Wellness - Premium Natural Health & Wellness Solutions</h1>
      <h2 style={{ display: 'none' }}>Discover our range of scientifically crafted wellness products with natural ingredients</h2>
      
      <div style={{background:"white"}} className="Block_container__Nv4cD Block_isCream__VRtaM Up_container__1NlPf Up_hasThreeColumns__AzNPd snipcss-Qmnp5 blocks">
  <div className="Title_container__J38Ea">
    <div className="Container_container__NvvWg">
      <div className="Title_head__rrr2_ style-BO1LT" id="style-BO1LT">
        <h2 className="TitleAnimation_container__smkeR TitleAnimation_isSmall__wq35M">
          {/* <div>
            <div aria-hidden="true" className="TitleAnimation_title__liMEF style-bE9h9" id="style-bE9h9">
              <div>
                <div id="style-LgCij" className="style-LgCij">Solutions for enterprise </div>
              </div>
              <div>
                <div id="style-Ijwpq" className="style-Ijwpq">organizations</div>
              </div>
            </div>
          
          </div> */}
          <div className=' text-[#000] md:text-6xl text-[25px] leading-[1.2]'>
          <BlurText
            text="PERSONALIZED WELLNESS, POWERED BY NATURE"
            animateOn="view"
            revealDirection="center"
            className=' text-[#000] md:text-6xl text-[25px] leading-[1.2] font-bold'
          />
          </div>
        </h2>
        <p className="Title_copy__lEX70 style-AiVpi" id="style-AiVpi" style={{fontFamily: "Minionpro", color: "#000"}}>Aayush Wellness blends Ayurveda with modern science to bring you innovative, high-quality health solutions.</p>
      </div>
      {/* <div className="Title_ctaWrapper__xSCNE style-TXqfd" id="style-TXqfd"><a className="BaseButton_baseButton__gki38 BaseButton_isLushGreen__Of4fS BaseButton_hasOutline__IILGk" text="View our solutions" href="/solutions"><span className=' text-[14px]'>View our solutions</span><svg width={11} height={10} viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path fillRule="evenodd" clipRule="evenodd" d="M7.586.531a.75.75 0 1 0-1.172.938L8.64 4.25H1a.75.75 0 0 0 0 1.5h7.64L6.414 8.531a.75.75 0 1 0 1.172.938l3.2-4a.75.75 0 0 0 0-.938l-3.2-4Z" fill="currentColor" />
          </svg></a></div> */}
    </div>
  </div>
  <div className="Container_container__NvvWg">
    <div className="Up_cards__CQa8N">
      <div className="IconCard_contentCardWrapper__RhxGf IconCard_container__yA35h IconCard_isCream__DM_79" imagesizes="[object Object]" breadcrumbs="[object Object],[object Object]" date source topics>
        <div className="IconCard_head__LrWtD">
          <div className="IconCard_logoWrapper__TE3eO">
            <div><img alt loading="lazy" width={28} height={28} decoding="async" data-nimg={1} src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/sprout.gif?v=1744892674" className="IconCard_logo__Wwg7E style-aYJJM"  id="style-aYJJM" /></div>
          </div>
          <div className="CircleButton_circleButton__hdzso CircleButton_isCream__S13Cl IconCard_circleButton__4U5_0"><svg width={11} height={10} viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="false">
              <path fillRule="evenodd" clipRule="evenodd" d="M7.586.531a.75.75 0 1 0-1.172.938L8.64 4.25H1a.75.75 0 0 0 0 1.5h7.64L6.414 8.531a.75.75 0 1 0 1.172.938l3.2-4a.75.75 0 0 0 0-.938l-3.2-4Z" fill="currentColor" />
            </svg></div>
        </div>
        <div className="IconCard_content__4IB9P">
          <div className="IconCard_title__S5GeF"><a href="/ayurveda" style={{fontFamily: "ROGBold", color: "#fff"}}>Natural Ingredients, Proven Benefits</a></div>
          <p className="IconCard_text__hTwP4" style={{fontFamily: "Minionpro", color: "#fff"}}>Harnessing the power of nature, our products are formulated with pure herbal extracts, vitamins, and minerals for maximum effectiveness.</p>
        </div>
      </div>
      <div className="IconCard_contentCardWrapper__RhxGf IconCard_container__yA35h IconCard_isCream__DM_79" imagesizes="[object Object]" breadcrumbs="[object Object],[object Object]" date source topics>
        <div className="IconCard_head__LrWtD">
          <div className="IconCard_logoWrapper__TE3eO">
            <div><img alt loading="lazy" width={48} height={48} decoding="async" data-nimg={1} className="IconCard_logo__Wwg7E style-h8lYP" src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/catalyst.gif?v=1744894836" id="style-h8lYP" /></div>
          </div>
          <div className="CircleButton_circleButton__hdzso CircleButton_isCream__S13Cl IconCard_circleButton__4U5_0"><svg width={11} height={10} viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="false">
              <path fillRule="evenodd" clipRule="evenodd" d="M7.586.531a.75.75 0 1 0-1.172.938L8.64 4.25H1a.75.75 0 0 0 0 1.5h7.64L6.414 8.531a.75.75 0 1 0 1.172.938l3.2-4a.75.75 0 0 0 0-.938l-3.2-4Z" fill="currentColor" />
            </svg></div>
        </div>
        <div className="IconCard_content__4IB9P">
          <div className="IconCard_title__S5GeF"><a href="/wellness/modern-science" style={{fontFamily: "ROGBold",color: "#fff"}}>Scientifically Crafted for Your Well-being</a></div>
          <p className="IconCard_text__hTwP4" style={{fontFamily: "Minionpro", color: "#fff"}}>Each product is developed using rigorous research and testing, ensuring safe, effective, and results-driven wellness solutions.</p>
        </div>
      </div>
      <div className="IconCard_contentCardWrapper__RhxGf IconCard_container__yA35h IconCard_isCream__DM_79" imagesizes="[object Object]" breadcrumbs="[object Object],[object Object]" date source topics>
        <div className="IconCard_head__LrWtD">
          <div className="IconCard_logoWrapper__TE3eO">
            <div><img alt loading="lazy" width={48} height={48} decoding="async" data-nimg={1} className="IconCard_logo__Wwg7E style-POSdl" src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/rate.gif?v=1744893156" id="style-POSdl" /></div>
          </div>
          <div className="CircleButton_circleButton__hdzso CircleButton_isCream__S13Cl IconCard_circleButton__4U5_0"><svg width={11} height={10} viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="false">
              <path fillRule="evenodd" clipRule="evenodd" d="M7.586.531a.75.75 0 1 0-1.172.938L8.64 4.25H1a.75.75 0 0 0 0 1.5h7.64L6.414 8.531a.75.75 0 1 0 1.172.938l3.2-4a.75.75 0 0 0 0-.938l-3.2-4Z" fill="currentColor" />
            </svg></div>
        </div>
        <div className="IconCard_content__4IB9P">
          <div className="IconCard_title__S5GeF"><a href="/wellness/health-wellness" style={{fontFamily: "ROGBold",color: "#fff"}}>Delicious, Convenient, & Effective</a></div>
          <p className="IconCard_text__hTwP4" style={{fontFamily: "Minionpro",color: "#fff"}}>No pills, no hassle—our wellness solutions are designed to be easy-to-use, great-tasting, and perfect for your daily routine.</p>
        </div>
      </div>
    </div>
  </div>
  {/* <div className="Block_container__Nv4cD Block_isCream__VRtaM DefaultCtaBreaker_container__5uX7F DefaultCtaBreaker_isLushGreen__Dn8d5 snipcss-lhvqP">
  <div className="Container_container__NvvWg">
    <div className="DefaultCtaBreaker_content__nrBUX">
      <h2 className="DefaultCtaBreaker_title__kEIvB">Let’s get to work</h2>
      <div className="RichText_container__wB3Cy DefaultCtaBreaker_copy__5QFOE">
        <p>Contact our team today to learn how Aayuswellness can Help you.</p>
      </div>
      <div className="MultiButton_multiButton__iqSU8 DefaultCtaBreaker_multiButton__rKUkw"><a className="BaseButton_baseButton__gki38" id="194f8e15-8e15-4000-8f8e153830-9d5" text="Request demo" href="/contact"><span>Request demo</span><svg width={11} height={10} viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path fillRule="evenodd" clipRule="evenodd" d="M7.586.531a.75.75 0 1 0-1.172.938L8.64 4.25H1a.75.75 0 0 0 0 1.5h7.64L6.414 8.531a.75.75 0 1 0 1.172.938l3.2-4a.75.75 0 0 0 0-.938l-3.2-4Z" fill="currentColor" />
          </svg></a></div>
    </div>
    <div className="DefaultCtaBreaker_imageWrapper__XVefW">
      <div><img alt="Arcadia wave" loading="lazy" width={1266} height={852} decoding="async" data-nimg={1} className="DefaultCtaBreaker_image__wmeLz style-r2Mx2" src="https://images.prismic.io/arcadia-marketing-site-2023/dccdb9d4-ad04-421c-9c91-c04e55c63ea7_arcadia-wave.png?auto=compress%2Cformat&q=70&fit=max&w=3840" id="style-r2Mx2" /></div>
    </div>
  </div>
</div> */}
</div>
    </>
  )
}

export default AwCard;
