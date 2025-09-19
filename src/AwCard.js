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
    title: 'Healthcare',
    description: 'Comprehensive healthcare solutions for your well-being',
   
    image: 'https://images.unsplash.com/photo-1505751172876-fa1a2b3f8d1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Healthcare'
  },
  { 
    id: 2, 
    title: 'Medical Checkup',
    description: 'Regular health checkups for early detection',
   
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Healthcare'
  },
  { 
    id: 3, 
    title: 'Emergency Care',
    description: '24/7 emergency medical services',
    image: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Healthcare'
  },
  { 
    id: 4, 
    title: 'Pediatric Care',
    description: 'Specialized healthcare for children',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8b25a84?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Healthcare'
  },
  
  // Herbal
  { 
    id: 5, 
    title: 'Herbal Remedies',
    description: 'Natural herbal solutions for holistic health',
    image: 'https://images.unsplash.com/photo-1597318181407-1a67726db345?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Herbal'
  },
  { 
    id: 6, 
    title: 'Ayurvedic Medicine',
    description: 'Ancient healing with modern approach',
    image: 'https://images.unsplash.com/photo-1591343395082-e120087245dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Herbal'
  },
  { 
    id: 7, 
    title: 'Herbal Tea Blends',
    description: 'Healing teas for wellness',
    image: 'https://images.unsplash.com/photo-1515827368157-7b3cc3a9105f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Herbal'
  },
  { 
    id: 8, 
    title: 'Essential Oils',
    description: 'Pure essential oils for aromatherapy',
    image: 'https://images.unsplash.com/photo-1582719471384-894eaa114d3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Herbal'
  },
  
  // Nutraceuticals
  { 
    id: 9, 
    title: 'Vitamins & Minerals',
    description: 'Essential nutrients for daily wellness',
    image: 'https://images.unsplash.com/photo-1607619056574-7ce0e0e5f9f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Nutraceuticals'
  },
  { 
    id: 10, 
    title: 'Protein Supplements',
    description: 'High-quality protein for muscle health',
    image: 'https://images.unsplash.com/photo-1594824477048-3b3f7d4b3b0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Nutraceuticals'
  },
  { 
    id: 11, 
    title: 'Omega-3 Supplements',
    description: 'Essential fatty acids for heart health',
    image: 'https://images.unsplash.com/photo-1625772459865-55d3f4c1c5f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Nutraceuticals'
  },
  { 
    id: 12, 
    title: 'Probiotics',
    description: 'Support your gut health naturally',
    image: 'https://images.unsplash.com/photo-1594824477048-3b3f7d4b3b0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Nutraceuticals'
  },
  
  // Doctor Consultation
  { 
    id: 13, 
    title: 'General Physician',
    description: 'Expert medical advice at your fingertips',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8b25a84?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Doctor Consultation'
  },
  { 
    id: 14, 
    title: 'Specialist Consultation',
    description: 'Consult with medical specialists',
    image: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Doctor Consultation'
  },
  { 
    id: 15, 
    title: 'Video Consultation',
    description: 'Consult doctors online from home',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Doctor Consultation'
  },
  { 
    id: 16, 
    title: 'Second Opinion',
    description: 'Get expert second opinions',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Doctor Consultation'
  },
  
  // Health Supplements
  { 
    id: 17, 
    title: 'Multivitamins',
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
    title: 'Weight Management',
    description: 'Support for healthy weight goals',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Health Supplement'
  },
  { 
    id: 20, 
    title: 'Immunity Boosters',
    description: 'Strengthen your immune system',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Health Supplement'
  },
  
  // Accelerator
  { 
    id: 21, 
    title: 'Wellness Program',
    description: '30-day wellness transformation',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Accelerator'
  },
  { 
    id: 22, 
    title: 'Fitness Challenge',
    description: '90-day fitness transformation',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Accelerator'
  },
  { 
    id: 23, 
    title: 'Nutrition Plan',
    description: 'Personalized meal plans',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Accelerator'
  },
  { 
    id: 24, 
    title: 'Mindfulness Program',
    description: 'Reduce stress, improve focus',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Accelerator'
  }
];

const AwCard = () => {
  const categories = ['Healthcare', 'Herbal', 'Nutraceuticals', 'Doctor Consultation', 'Health Supplement', 'Accelerator'];
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
        rotateY: position === 0 ? -90 : position === 2 ? 90 : 0,
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
                viewport={{ once: true, amount: 0.2 }}
                onClick={(e) => toggleFlip(card.id, e)}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px',
                  cursor: 'pointer',
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
