import React, { useState, useEffect, useRef } from 'react';
import './AwCard.css';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Sample data for cards
const cardData = [
  // Healthcare
  { 
    id: 1, 
    title: 'Preventive Care & Wellness',
   
   
    image: 'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/download_21.jpg?v=1758280778',
    category: 'Healthcare'
  },
  { 
    id: 2, 
    title: 'Medical Conditions & Treatments',
  
   
    image: 'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Doctor_measuring_blood_pressure_from_the_patient___Premium_Photo.jpg?v=1758280767',
    category: 'Healthcare'
  },
  { 
    id: 3, 
    title: 'Nutrition & Healthy Living',
  
    image: 'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/foodstagram_foodie_foodporn.jpg?v=1758280767',
    category: 'Healthcare'
  },
  { 
    id: 4, 
    title: 'Mental Health & Mindfulness',
   
    image: 'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Why_Prioritizing_Mental_Wellness_Matters_in_Today_s_World_d96e73e7-067a-49a2-a3da-98dcf3552621.jpg?v=1758280766',
    category: 'Healthcare'
  },
  
  // Herbal
  { 
    id: 5, 
    title: 'Herbal Remedies & Home Care',
   
    image: 'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/21_Best_Vitamins_for_Mental_Health_Guaranteed.jpg?v=1758281263',
    category: 'Herbal'
  },
  { 
    id: 6, 
    title: 'Ayurveda & Traditional Healing',
   
    image: 'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Dark_Circles_home_remedy.jpg?v=1758281182',
    category: 'Herbal'
  },
  { 
    id: 7, 
    title: 'Herbal Nutrition & Lifestyle',
    
    image: 'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Blog_23.jpg?v=1751981381',
    category: 'Herbal'
  },
  { 
    id: 8, 
    title: 'Skin, Hair & Beauty with Herbs',
  
    image: 'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Blog_22.jpg?v=1751981382',
    category: 'Herbal'
  },
  
  // Nutraceuticals
  { 
    id: 9, 
    title: 'Nutraceutical Science & Innovation',
    
    image: 'https://cdn.shopify.com/s/files/1/0653/9830/9053/files/BLOG_-1.jpg?v=1740834248',
    category: 'Nutraceuticals'
  },
  { 
    id: 10, 
    title: 'Preventive Health & Immunity',
   
    image: 'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/TOP_10_BENEFITS_OF_ORGANIC_FOOD_FOR_BETTER_HEALTH.jpg?v=1758281532',
    category: 'Nutraceuticals'
  },
  { 
    id: 11, 
    title: 'Nutrition, Fitness & Performance',
    
    image: 'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/What_role_does_the_Immune_System_play_in_Hypertension.jpg?v=1758281532',
    category: 'Nutraceuticals'
  },
  { 
    id: 12, 
    title: 'Beauty & Wellness from Within',
   
    image: 'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/01_Cosmetic_Jar_Box_Mock-up_18-04-2025_-_Beauty_Jar_New_mockup_4.png?v=1758281518',
    category: 'Nutraceuticals'
  },
  
  // Doctor Consultation
  { 
    id: 13, 
    title: 'General & Family Health',
   
    image: 'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Los_cuidados_paliativos_en_la_medicina_familiar.jpg?v=1758281785',
    category: 'Doctor Consultation'
  },
  { 
    id: 14, 
    title: 'Specialist Consultation',
   
    image: 'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/1_8.jpg?v=1758111117',
    category: 'Doctor Consultation'
  },
  { 
    id: 15, 
    title: 'Online Consultation & Telemedicine',
  
    image: 'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Telemedicine_App_Development_Everything_to_get_started_in_2021.jpg?v=1758281785',
    category: 'Doctor Consultation'
  },
  { 
    id: 16, 
    title: 'Preventive & Regular Checkups',
   
    image: ' https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Desktop_banner.jpg?v=1758030425',
   
    category: 'Doctor Consultation'
  },
  
  // Health Supplements
  { 
    id: 17, 
    title: 'Startup Growth & Innovation',
    description: 'Complete daily nutrition in one tablet',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Health Supplement'
  },
  { 
    id: 18, 
    title: 'Herbal Supplements',
    description: 'Natural supplements for vitality',
    image: 'https://images.unsplash.com/photo-1591343396623-8c4ffb3ba7b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Health Supplement'
  },
  { 
    id: 19, 
    title: 'Investment & Growth in Wellness Ecosystem',
    description: 'Support for healthy weight goals',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Health Supplement'
  },
  { 
    id: 20, 
    title: 'Focus on Innovation, Technology & Wellness Products',
    description: 'Strengthen your immune system',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Health Supplement'
  },
  
  // Accelerator
  { 
    id: 21, 
    title: 'Startup Growth & Innovation',
    
    image: 'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Room_ideaaaaa.jpg?v=1758282091',
    category: 'Accelerator'
  },
  { 
    id: 22, 
    title: 'Focus on Innovation, Technology & Wellness Products',
   
    image: 'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Mental_Health_Wearables__Revolutionizing_Self-Care_Discover_the_power_of_mental_health_wearables_These_innovative_devices_are_changing_the_game_in_mental_health_care_and_self-manageme.jpg?v=1758282092',
    category: 'Accelerator'
  },
  { 
    id: 23, 
    title: 'Investment & Growth in Wellness Ecosystem',
   
    image: 'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Top_Blue_chip_Mutual_Funds_in_India.jpg?v=1758282091',
    category: 'Accelerator'
  },
  { 
    id: 24, 
    title: 'Startup Growth & Innovation',
   
    image: 'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Accelerated_Wealth_Building_with_Crypto_Trading.jpg?v=1758282231',
    category: 'Accelerator'
  }
];

const AwCard = () => {
  const categories = ['Healthcare', 'Herbal', 'Nutraceuticals', 'Doctor Consultation',  'Accelerator'];
  const [activeFilter, setActiveFilter] = useState(categories[0]);
  const [filteredCards, setFilteredCards] = useState(cardData.filter(card => card.category === categories[0]));
  const [flippedCard, setFlippedCard] = useState(null);
  const swiperRef = useRef(null);

  // Filter cards based on active filter
  useEffect(() => {
    setFilteredCards(cardData.filter(card => card.category === activeFilter));
    setFlippedCard(null);
  }, [activeFilter]);

  // Toggle card flip
  const toggleFlip = (cardId, e) => {
    e.stopPropagation();
    setFlippedCard(flippedCard === cardId ? null : cardId);
  };

  // Handle filter change from Swiper
  const handleFilterChange = (swiper) => {
    setActiveFilter(categories[swiper.activeIndex]);
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const getCardVariants = (index) => {
    const position = index % 3;
    return {
      hidden: { 
        opacity: 0,
        rotateY: position === 0 || position === 1 ? -90 : 90,
        x: position === 0 ? -100 : position === 2 ? 100 : 0,
        perspective: 1000,
      },
      show: {
        opacity: 1,
        rotateY: 0,
        x: 0,
        transition: {
          type: 'spring',
          stiffness: 100,
          damping: 15,
          duration: 0.8
        }
      }
    };
  };

  return (
    <div className="aw-container">
      <div className="section-header">
        <h1 className="section-title">PERSONALIZED WELLNESS, POWERED BY NATURE</h1>
        <p className="section-description">
          Aayush Wellness blends Ayurveda with modern science to bring you innovative, high-quality health solutions.
        </p>
      </div>

      {/* Desktop Filter Buttons */}
      <div className="filter-container hidden-mobile">
        <div className="filter-scroll">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Swiper Filter */}
      <div className="mobile-filter-container hidden-desktop">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={'auto'}
          centeredSlides={false}
          onSlideChange={handleFilterChange}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="mobile-filter-swiper"
        >
          {categories.map((category, index) => (
            <SwiperSlide key={category} className="swiper-slide">
              <button
                className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                onClick={() => {
                  setActiveFilter(category);
                  swiperRef.current.slideTo(index);
                }}
              >
                {category}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Cards Grid */}
      <motion.div 
        className="cards-grid"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <AnimatePresence>
          {filteredCards.map((card, index) => {
            const position = index % 3;
            const isFlipped = flippedCard === card.id;
            
            return (
              <motion.div
                key={card.id}
                className={`card ${isFlipped ? 'flipped' : ''}`}
                variants={getCardVariants(index)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
                
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px',
                  cursor: 'default',
                }}
                whileHover={{ 
                  y: -10,
                  transition: { type: 'spring', stiffness: 300 }
                }}
              >
                <div className="card-inner">
                  <div className="card-front">
                    <div className="card-image">
                      <img src={card.image} alt={card.title} />
                    </div>
                    <div className="card-content">
                      <h3>{card.title}</h3>
                      <p>{card.description}</p>
                    </div>
                  </div>
                  <div className="card-back">
                    <h3>More About {card.title}</h3>
                    <p>Discover more about this product and how it can benefit your health and wellness journey.</p>
                    <button 
                      className="learn-more-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Add navigation or other action here
                      }}
                    >
                      Learn More
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default AwCard;
