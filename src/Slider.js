import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Play, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import closepng from "./images/close.png";
import searchIcon from "./images/search-gray.svg";
import Hls from "hls.js";

const bannerData = [
  {
    id: 1,
    type: "banner",
    image: {
      desktop: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Screenshot_2025-09-17_134446.png?v=1758096902",
      mobile: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Home_page_slider_banner_1_mobile.jpg?v=1758104854"
    },
    title: "Smarter, Faster & Accessible Diagnostics Across India",
    description: "Mumbai, Hyderabad, Bangalore, Pune",
    buttonText: "Read More",
    path: "/aayush-labs-announcement"
    
  },
  // {
  //   id: 2,
  //   type: "banner",
  //   image: {
  //     desktop: "https://img.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17818.jpg",
  //     mobile: "https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg"
  //   },
  //   title: "Expert Medical Consultation",
  //   description: "Connect with our team of experienced healthcare professionals",
  //   buttonText: "Book Now",
  //   path: "/consultation"
  // },
 {
  id: 3,
  type: "video",
  thumbnail: {
    desktop: "",
    mobile: ""
  },
  videoUrl: "https://res.cloudinary.com/ddoz8ya3l/video/upload/v1757483421/Homeabnner1_g5eydo.m3u8",
  videoUrlMobile: "https://res.cloudinary.com/ddoz8ya3l/video/upload/v1757483421/ngahi3e9q6of8ezb7zfw_1_tj1owt.mp4", // <-- add this line
  title: "A New Era of Healthcare",
  description: "We prioritise prevention over treatment, offering healthcare, science-backed products, and holistic wellness empowering individuals towards lifelong well-being.",
},
  // {
  //   id: 4,
  //   type: "banner",
  //   image: {
  //     desktop: "https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg",
  //     mobile: "https://img.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17818.jpg"
  //   },
  //   title: "Wellness Programs",
  //   description: "Comprehensive wellness solutions for a healthier you",
  //   buttonText: "Explore",
  //   path: "/wellness"
  // }
];

export default function AnimatedSlider() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAyurvedaDropdownOpen, setIsAyurvedaDropdownOpen] = useState(false)
  const [isWellnessDropdownOpen, setIsWellnessDropdownOpen] = useState(false)
  const [isNewsroomDropdownOpen, setIsNewsroomDropdownOpen] = useState(false)
  const [isAboutUsDropdownOpen, setIsAboutUsDropdownOpen] = useState(false)
  const [isCsrSubcategoryOpen, setIsCsrSubcategoryOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false)
  const [isCorporateDropdownOpen, setIsCorporateDropdownOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [showText, setShowText] = useState(false)
  const videoRef = useRef(null)
  const intervalRef = useRef(null)
  const sliderRef = useRef(null)
  const [csrOpen, setCsrOpen] = useState(false)

  console.log("bannerData :", bannerData)

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === bannerData.length - 1 ? 0 : prev + 1))
    if (isVideoPlaying) {
      videoRef.current?.pause()
      setIsVideoPlaying(false)
    }
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? bannerData.length - 1 : prev - 1))
    if (isVideoPlaying) {
      videoRef.current?.pause()
      setIsVideoPlaying(false)
    }
  }

  const goToSlide = (index) => {
    setActiveIndex(index)
    if (isVideoPlaying) {
      videoRef.current?.pause()
      setIsVideoPlaying(false)
    }
  }

  const toggleVideoPlay = () => {
    const currentSlide = bannerData[activeIndex]
    if (currentSlide.type === 'video') {
      if (isVideoPlaying) {
        videoRef.current?.pause()
      } else {
        videoRef.current?.play()
      }
      setIsVideoPlaying(!isVideoPlaying)
    }
  }

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [activeIndex])

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const currentSlide = bannerData[activeIndex]
  const videos = {
    desktop: {
      src: "https://res.cloudinary.com/ddoz8ya3l/video/upload/v1757483421/Homeabnner1_g5eydo.m3u8",
      text: "Transforming Wellness , Transforming Lives",
    },
    mobile: {
      src: "https://res.cloudinary.com/ddoz8ya3l/video/upload/v1757483421/ngahi3e9q6of8ezb7zfw_1_tj1owt.m3u8",
      text: "Transforming wellness, transforming lives",
    },
  }

  console.log("currentSlide :", currentSlide)
  
  // Use the selected video source based on device
  const videoSource = isMobile ? videos.mobile.src : videos.desktop.src

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
        if (entry.isIntersecting) {
          setTimeout(() => setShowText(true), 5000) // Start text animation after 5 seconds
        }
      },
      { threshold: 0.1 },
    )

    if (sliderRef.current) {
      observer.observe(sliderRef.current)
    }

    return () => {
      if (sliderRef.current) {
        observer.unobserve(sliderRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const video = videoRef.current;
    
    // Pause any currently playing video when slide changes
    if (video) {
      video.pause();
    }

    // If the current slide is a video, play it
    if (currentSlide.type === 'video') {
      const playVideo = () => {
        if (video) {
          const playPromise = video.play();
          if (playPromise !== undefined) {
            playPromise.catch(error => {
              console.log('Autoplay prevented:', error);
            });
          }
        }
      };

      // Small delay to ensure the video is in the DOM
      const timer = setTimeout(playVideo, 100);
      return () => clearTimeout(timer);
    }
  }, [activeIndex, currentSlide.type]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Only initialize if it's a video slide
    if (currentSlide.type === 'video') {
      const videoSrc = currentSlide.videoUrl;

      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(videoSrc);
        hls.attachMedia(video);
        
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          video.play().catch(error => {
            console.log('Autoplay prevented:', error);
          });
        });

        return () => {
          hls.destroy();
        };
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        // For Safari
        video.src = videoSrc;
        video.addEventListener('loadedmetadata', () => {
          video.play().catch(error => {
            console.log('Autoplay prevented:', error);
          });
        });
      }
    }
  }, [currentSlide]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
    console.log("Menu toggled:", isMenuOpen)
  }

  const toggleAyurvedaDropdown = () => {
    setIsAyurvedaDropdownOpen(!isAyurvedaDropdownOpen)
    toggleIcon("svg", "svg4")
  }

  const toggleWellnessDropdown = () => {
    setIsWellnessDropdownOpen(!isWellnessDropdownOpen)
    toggleIcon("svg", "svg2")
  }

  const toggleNewsroomDropdown = () => {
    setIsNewsroomDropdownOpen(!isNewsroomDropdownOpen)
    toggleIcon("svg1", "svg3")
  }

  const toggleAboutUsDropdown = () => {
    setIsAboutUsDropdownOpen(!isAboutUsDropdownOpen)
    toggleIcon("svg5", "svg6")
  }

  const toggleCsrSubcategory = () => {
    setIsCsrSubcategoryOpen(!isCsrSubcategoryOpen)
    toggleIcon("svg7", "svg8")
  }

  const handleDropdownLinkClick = () => {
    setIsAyurvedaDropdownOpen(false)
    setIsWellnessDropdownOpen(false)
    setIsNewsroomDropdownOpen(false)
    setIsAboutUsDropdownOpen(false)
    setIsCsrSubcategoryOpen(false)
    setIsSearchOpen(false)
    setIsProductDropdownOpen(false)
  }

  const toggleIcon = (iconIdToToggle, iconIdToToggleOther) => {
    var iconToToggle = document.getElementById(iconIdToToggle)
    var iconToToggleOther = document.getElementById(iconIdToToggleOther)
    if (iconToToggle && iconToToggleOther) {
      iconToToggle.classList.toggle("svg")
      iconToToggleOther.classList.toggle("svg")
    }
  }

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
  }

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50   text-black"
        style={{
          fontFamily: '"Inter", sans-serif',
          fontWeight: "bold",
          fontSize: "clamp(0.875rem, 0.9rem + 0.2667vw, 1.125rem)",
        }}
      >
        <div className="max-w-[109rem] mx-auto px-4">
          <div className="flex justify-between md:justify-between items-center h-auto">
            <div className="flex items-center">
              <Link to="/">
                <img
                  className="md:h-[5.7rem] h-[4rem] md:pt-3 md:pb-3"
                  src="https://cdn.shopify.com/s/files/1/0653/9830/9053/files/Aayush_Wellness_Limited_-_Logo_-_17-10-2024-02_-_png-white.png?v=1734763399"
                  alt="logo"
                />
              </Link>
            </div>
            <div className="hidden gap-4 md:flex space-x-4  text-[20px] font-[500]" style={{color: 'white'}}>
              <Link to="/" className=" hover:text-primary/80" style={{ fontFamily: '"Inter", sans-serif' }}>
                Home
              </Link>

              <div className="navbar-dropdown relative group">
                <button
                  className="hover:text-primary/80 flex items-center mt-1"
                  style={{ fontFamily: '"Inter", sans-serif' }}
                >
                  Our Story
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>

                {/* Dropdown Menu */}
                <div className="absolute left-0 top-full w-[1110px] h-[250px] bg-white shadow-lg rounded-lg p-5 opacity-0 invisible transform translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 flex justify-between z-50 mt-6">
                  {/* Left Side: Title & Description */}
                  <div className="w-[60%] mt-10">
                    <h3 className="text-3xl font-bold text-gray-900">Our Story</h3>
                    <p className="text-lg text-gray-600 mt-2">
                      We started with a vision to create something meaningful. Our journey has been shaped by passion,
                      innovation, and dedication.
                    </p>
                  </div>

                  {/* Right Side: Links */}
                  <div className="w-[35%] flex flex-col gap-3 mt-12 ">
                    <Link
                      to="/about-us"
                      className="grid grid-cols-1 text-left py-2  rounded-md !text-[#004037] hover:bg-[#004037] transition w-full hover:!text-white "
                    >
                      <span className="block font-bold w-full px-4 text-inherit">About Us </span>
                      <span className="block text-sm px-4 text-grey-900 text-inherit">
                        We started with a vision to create something
                      </span>
                    </Link>

                    <Link
                      to="/about/mission-vision"
                      className="grid grid-cols-1 text-left py-2 rounded-md !text-[#004037] hover:bg-[#004037] transition w-full hover:!text-white"
                    >
                      <span className="block font-bold w-full px-4 text-inherit">Mission & Vision</span>
                      <span className="block text-sm px-4 text-grey-900 text-inherit">
                        Our mission is to do something Great
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Our Offerings Dropdown - Desktop */}
              <div className="navbar-dropdown relative group">
                <button
                  className="hover:text-primary/80 flex items-center mt-1"
                  style={{ fontFamily: '"Inter", sans-serif' }}
                >
                  Our Offerings
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>

                {/* Our Offerings Dropdown Menu */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-[1110px] h-[510px] bg-white shadow-lg rounded-lg p-5 opacity-0 invisible translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 flex justify-between z-50 mt-6 ">
                  <div className="w-[60%] mt-10">
                    <h3 className="text-3xl font-bold text-gray-900"> Our Offeringss</h3>
                    <p className="text-lg text-gray-600 mt-2">
                      Discover our range of premium products designed for your well-being and lifestyle.
                    </p>
                  </div>

                  <div className="w-[35%] flex flex-col gap-3 ">
                    <Link
                      to="/gummies-sleep"
                      className="grid grid-cols-1 text-left py-2  rounded-md !text-[#004037] hover:bg-[#004037] transition w-full hover:!text-white"
                    >
                      <span className="block font-bold w-full px-4 text-inherit">Dreamy Sleep Gummies</span>
                      <span className="block text-sm px-4 text-grey-900 text-inherit">
                        Supports better sleep and relaxation
                      </span>
                    </Link>

                    <Link
                      to="/gummies"
                      className="grid grid-cols-1 text-left py-2  rounded-md !text-[#004037] hover:bg-[#004037] transition w-full hover:!text-white"
                    >
                      <span className="block font-bold w-full px-4 text-inherit">Beauty Vitamin Gummies</span>
                      <span className="block text-sm px-4 text-grey-900 text-inherit">
                        Enhances skin, hair, and nail health
                      </span>
                    </Link>

                    <Link
                      to="/pan-masala"
                      className="grid grid-cols-1 text-left py-2  rounded-md !text-[#004037] hover:bg-[#004037] transition w-full hover:!text-white"
                    >
                      <span className="block font-bold w-full px-4 text-inherit">Herbal Pan Masala</span>
                      <span className="block text-sm px-4 text-grey-900 text-inherit">
                        Refreshing and herbal mouth freshener
                      </span>
                    </Link>

                    <Link
                      to="/ourproduct"
                      className="grid grid-cols-1 text-left py-2  rounded-md !text-[#004037] hover:bg-[#004037] transition w-full hover:!text-white"
                    >
                      <span className="block font-bold w-full px-4 text-inherit">View Our Offeringss</span>
                      <span className="block text-sm px-4 text-grey-900 text-inherit">
                        {" "}
                        Explore our full range of high-quality products
                      </span>
                    </Link>

                    <Link
                      to="/consultation"
                      className="grid grid-cols-1 text-left py-2  rounded-md !text-[#004037] hover:bg-[#004037] transition w-full hover:!text-white"
                    >
                      <span className="block font-bold w-full px-4 text-inherit">Book Doctor Consultation</span>
                      <span className="block text-sm px-4 text-grey-900 text-inherit">
                        Connect with qualified healthcare professionals online
                      </span>
                    </Link>

                    <Link
                      to="/healthcheck"
                      className="grid grid-cols-1 text-left py-2  rounded-md !text-[#004037] hover:bg-[#004037] transition w-full hover:!text-white"
                    >
                      <span className="block font-bold w-full px-4 text-inherit">Health checkups at Home</span>
                      <span className="block text-sm px-4 text-grey-900 text-inherit">
                        Convenient diagnostic tests and screenings at your doorstep
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="navbar-dropdown relative group">
                <button
                  className="hover:text-primary/80 flex items-center mt-1"
                  style={{ fontFamily: '"Inter", sans-serif' }}
                >
                  Corporate
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>

                {/* Dropdown Menu */}
                <div className="absolute left-1/2 top-full w-[1110px] h-auto bg-white shadow-lg rounded-lg p-5 opacity-0 invisible transform -translate-x-1/2 translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 flex justify-between z-50 mt-6">
                  {/* Left Side: Title & Description */}
                  <div className="w-[60%] mt-10">
                    <h3 className="text-3xl font-bold text-[#004037]">Corporate Initiatives</h3>
                    <p className="text-lg text-gray-600 mt-2">
                      Our dedication to ethical business practices, community engagement, and sustainable growth.
                    </p>
                    <p className="text-lg text-gray-600 mt-2">
                      We believe in making a lasting impact through responsible actions and meaningful partnerships.
                    </p>
                  </div>

                  {/* Right Side: Links */}
                  <div className="w-[35%] flex flex-col gap-3 mt-8">
                    {/* CSR Dropdown */}
                    <div className="relative">
                      <button
                        onClick={() => setCsrOpen(!csrOpen)}
                        className="grid grid-cols-1 text-left py-2  rounded-md !text-[#004037] hover:bg-[#004037] transition w-full hover:!text-white flex justify-between items-center"
                      >
                        <div>
                          <span className="block font-bold text-inherit flex px-4 items-center">
                            Welfare
                            <svg
                              className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                                csrOpen ? "rotate-180" : ""
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                              ></path>
                            </svg>
                          </span>
                          <span className="block text-sm px-4 text-gray-900 text-inherit">
                            Our impact on society and sustainability efforts
                          </span>
                        </div>
                      </button>

                      {csrOpen && (
                        <div className="absolute left-0 top-full mt-2 w-full bg-white shadow-md rounded-lg p-3 flex flex-col gap-2 border border-gray-200">
                          <Link
                            to="/csr-at-aayush/malnutrition"
                            className="grid grid-cols-1 text-left py-2 text-black rounded-md hover:bg-[#004037] !text-[#004037] hover:bg-[#004037] transition w-full hover:!text-white"
                          >
                            <span className="block font-bold w-full px-4 text-inherit">Malnutrition</span>
                            <span className="block text-sm px-4 text-gray-900 text-inherit">
                              Fighting malnutrition with dedicated programs
                            </span>
                          </Link>

                          <Link
                            to="/csr-at-aayush/health-check"
                            className="grid grid-cols-1 text-left py-2 text-black rounded-md !text-[#004037] hover:bg-[#004037] transition w-full hover:!text-white"
                          >
                            <span className="block font-bold w-full px-4 text-inherit">Healthcare Check</span>
                            <span className="block text-sm px-4 text-gray-900 text-inherit">
                              Providing essential healthcare services
                            </span>
                          </Link>

                          <Link
                            to="/sustainability"
                            className="grid grid-cols-1 text-left py-2 text-black rounded-md !text-[#004037] hover:bg-[#004037] transition w-full hover:!text-white"
                          >
                            <span className="block font-bold w-full px-4 text-inherit">Sustainability</span>
                            <span className="block text-sm px-4 text-gray-900 text-inherit">
                              Driving positive change for a greener future
                            </span>
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* Other Links */}
                    <Link
                      to="/career"
                      className="grid grid-cols-1 text-left py-2 text- rounded-md !text-[#004037] hover:bg-[#004037] transition w-full hover:!text-white"
                    >
                      <span className="block font-bold w-full px-4 text-inherit">Careers</span>
                      <span className="block text-sm px-4 text-gray-900 text-inherit">
                        Join our team and shape the future
                      </span>
                    </Link>

                    <Link
                      to="/investors"
                      className="grid grid-cols-1 text-left py-2 text-black rounded-md !text-[#004037] hover:bg-[#004037] transition w-full hover:!text-white"
                    >
                      <span className="block font-bold w-full px-4 text-inherit">Investors</span>
                      <span className="block text-sm px-4 text-gray-900 text-inherit">
                        Partner with us for sustainable growth
                      </span>
                    </Link>
                        <Link
                      to="/press-releases"
                      className="grid grid-cols-1 text-left py-2 text-black rounded-md !text-[#004037] hover:bg-[#004037] transition w-full hover:!text-white"
                    >
                      <span className="block font-bold w-full px-4 text-inherit">Press Releases</span>
                      <span className="block text-sm px-4 text-gray-900 text-inherit">
                         Stay updated with our latest announcements and milestones
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

              <Link to="/support" className=" hover:text-primary/80" style={{ fontFamily: '"Inter", sans-serif' }}>
                Support
              </Link>
              <Link to="/healthcare" className="hover:text-primary/80" style={{ fontFamily: '"Inter", sans-serif' }}>
                HealthCare
              </Link>
              <Link
                to="/growth-accelerator"
                className="  hover:text-primary/80"
                style={{ fontFamily: '"Inter", sans-serif' }}
              >
                Accelerator
              </Link>
            </div>
            <div className="js pl-[5px]  flex justify-center items-center">
              {/* Search Input */}
              <button onClick={toggleSearch} className="   pl-[20px] pr-3  relative hidden md:flex">
                <img src={searchIcon || "/placeholder.svg"} alt="Search" className="h-6 w-6" />
              </button>
              {isSearchOpen && (
                <div class="sp" className=" hidden md:flex  absolute right-44 top-16 z-[99999]">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="px-4 py-2 border rounded-md focus:outline-none text-black"
                    onBlur={() => setIsSearchOpen(false)} // Hide search input when it loses focus
                  />
                </div>
              )}
            </div>

            <div className="md:hidden">
              <div className="flex">
                {/* <button
                  onClick={toggleSearch}
                  className="block py-2 px-2  hover:text-primary/80"
                >
                  <img src={searchIcon || "/placeholder.svg"} alt="Search" className="h-6 w-6" />
                </button> */}

                {isSearchOpen && (
                  <input
                    type="text"
                    placeholder="Search..."
                    className="px-2 py-2 border rounded-md  absolute top-14 left-[30%] z-[9999]"
                    onBlur={() => setIsSearchOpen(false)}
                  />
                )}
                <button
                  id="mobile-menu-button"
                  className=" hover:text-primary/80 focus:outline-none"
                  onClick={toggleMenu}
                >
                  {/* Mobile Search */}

                  <img
                    className="h-7"
                    src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/svgviewer-output_5.svg?v=1741865350"
                    alt="menu"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          id="mobile-menu"
          className={`fixed top-0 left-0 h-full w-full bg-white shadow-md z-50 transition-all duration-300 ${
            isMenuOpen ? "block !translate-x-0" : "hidden !-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center px-6 ">
            {/* Logo on the left */}
            <img
              className="h-15 w-36 "
              src="https://aayushlife.com/cdn/shop/files/Aayush_Wellness_Limited_-_Logo_-_17-10-2024-02_240x.png?v=1729951951"
              alt="Logo"
            />

            {/* Close Button on the right */}
            <button className="hover:text-primary/80 focus:outline-none" onClick={toggleMenu}>
              <img className="h-8" src={closepng || "/placeholder.svg"} alt="Close Menu" />
            </button>
          </div>

          <div className="flex flex-col mt-10 px-6 overflow-y-auto h-full pb-20">
            {/* Home Link */}
            <Link
              to="/"
              className="block py-4 font-extrabold text-[#004037] text-[36px] "
              onClick={handleDropdownLinkClick}
            >
              Home
            </Link>
            <div className="h-px w-full bg-gray-200 my-1"></div>

            <div className="relative">
              <button
                onClick={() => setIsAboutUsDropdownOpen(!isAboutUsDropdownOpen)}
                className="w-full py-4 font-extrabold text-[#004037] text-[36px] flex items-center justify-between"
              >
                <span>Our Story</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${isAboutUsDropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              {isAboutUsDropdownOpen && (
                <div className="rounded-md mt-2 mb-3 py-2 ">
                  {/* Title & Description */}
                  <div className="px-4 py-2">
                    <h3 className="text-xl font-bold text-[#004037]">Our Story</h3>
                    <p className="text-lg text-gray-600 mt-2">
                      We started with a vision to create something meaningful. Our journey has been shaped by passion,
                      innovation, and dedication.
                    </p>
                  </div>

                  {/* Dropdown Links */}
                  <div className="flex flex-col">
                    <Link
                      to="/about-us"
                      className="block px-4 py-3 text-[#004037] font-bold transition"
                      onClick={() => setIsAboutUsDropdownOpen(false)}
                    >
                      About Us
                      <p className="text-sm text-gray-600">We started with a vision to create something</p>
                    </Link>

                    <Link
                      to="/about/mission-vision"
                      className="block px-4 py-3 text-[#004037] font-bold hover:bg-gray-100 transition"
                      onClick={() => setIsAboutUsDropdownOpen(false)}
                    >
                      Mission & Vision
                      <p className="text-sm text-gray-600">Our mission is to do something Great</p>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div className="h-px w-full bg-gray-200 my-1"></div>

            {/* Our Offerings Dropdown - Mobile */}
            <div className="relative">
              <button
                onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
                className="w-full py-4 font-extrabold text-[#004037] text-[36px] flex items-center justify-between"
              >
                <span>Our Offerings</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${isProductDropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isProductDropdownOpen && (
                <div className="rounded-md mt-2 mb-3 py-2 ">
                  {/* Title & Description */}
                  <div className="px-4 py-2 ">
                    <h3 className="text-xl font-bold text-[#004037]">Our Offerings</h3>
                    <p className="text-lg text-gray-600 mt-2">
                      Discover our range of premium products designed for your well-being and lifestyle.
                    </p>
                  </div>

                  {/* Dropdown Links */}
                  <div className="flex flex-col">
                    <Link
                      to="/gummies-sleep"
                      className="block px-4 py-3 text-[#004037] font-bold hover:bg-gray-100 transition"
                      onClick={() => setIsProductDropdownOpen(false)}
                    >
                      Dreamy Sleep Gummies
                      <p className="text-sm text-gray-600">Supports better sleep and relaxation</p>
                    </Link>

                    <Link
                      to="/gummies"
                      className="block px-4 py-3 text-[#004037] font-bold hover:bg-gray-100 transition"
                      onClick={() => setIsProductDropdownOpen(false)}
                    >
                      Beauty Vitamin Gummies
                      <p className="text-sm text-gray-600">Enhances skin, hair, and nail health</p>
                    </Link>

                    <Link
                      to="/pan-masala"
                      className="block px-4 py-3 text-[#004037] font-bold hover:bg-gray-100 transition"
                      onClick={() => setIsProductDropdownOpen(false)}
                    >
                      Herbal Pan Masala
                      <p className="text-sm text-gray-600">Refreshing and herbal mouth freshener</p>
                    </Link>

                    <Link
                      to="/ourproduct"
                      className="block px-4 py-3 text-[#004037] font-bold hover:bg-gray-100 transition"
                      onClick={() => setIsProductDropdownOpen(false)}
                    >
                      View Our Offerings
                      <p className="text-sm text-gray-600"> Explore our full range of high-quality products</p>
                    </Link>

                    <Link
                      to="/consultation"
                      className="block px-4 py-3 text-[#004037] font-bold hover:bg-gray-100 transition"
                      onClick={() => setIsProductDropdownOpen(false)}
                    >
                      Book Doctor Consultation
                      <p className="text-sm text-gray-600">Connect with qualified healthcare professionals online</p>
                    </Link>

                    <Link
                      to="/healthcheck"
                      className="block px-4 py-3 text-[#004037] font-bold hover:bg-gray-100 transition"
                      onClick={() => setIsProductDropdownOpen(false)}
                    >
                      Health checkups at Home
                      <p className="text-sm text-gray-600">Convenient diagnostic tests and screenings at your doorstep</p>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div className="h-px w-full bg-gray-200 my-1"></div>
            <div className="relative">
              <button
                onClick={() => setIsCorporateDropdownOpen(!isCorporateDropdownOpen)}
                className="w-full py-4 font-extrabold text-[#004037] text-[36px] flex items-center justify-between"
              >
                <span>Corporate</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${isCorporateDropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              {isCorporateDropdownOpen && (
                <div className="rounded-md mt-2 mb-3 py-2 ">
                  {/* Title & Description */}
                  <div className="px-4 py-2">
                    <h3 className="text-xl font-bold text-[#004037]">Corporate Initiatives</h3>
                    <p className="text-lg text-gray-600 mt-2">
                      Our dedication to ethical business practices, community engagement, and sustainable growth.
                    </p>
                  </div>

                  {/* Dropdown Links */}
                  <div className="flex flex-col">
                    {/* CSR Section with Dropdown */}
                    <div className="relative">
                      <button
                        onClick={() => setIsCsrSubcategoryOpen(!isCsrSubcategoryOpen)}
                        className="block w-full px-4 py-3 text-[#004037] font-extrabold  flex justify-between items-center"
                      >
                        <span>welfare</span>
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isCsrSubcategoryOpen ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </button>

                      {isCsrSubcategoryOpen && (
                        <div className="ml-4  mt-2 py-2">
                          <Link
                            to="/csr-at-aayush/malnutrition"
                            className="block px-4 py-3 text-[#004037] "
                            onClick={() => {
                              setIsCsrSubcategoryOpen(false)
                              setIsCorporateDropdownOpen(false)
                            }}
                          >
                            Malnutrition
                            <p className="text-sm text-gray-600">Fighting malnutrition with dedicated programs</p>
                          </Link>
                          <Link
                            to="/csr-at-aayush/health-check"
                            className="block px-4 py-3 text-[#004037] "
                            onClick={() => {
                              setIsCsrSubcategoryOpen(false)
                              setIsCorporateDropdownOpen(false)
                            }}
                          >
                            Healthcare Check
                            <p className="text-sm text-gray-600">Providing essential healthcare services</p>
                          </Link>
                          <Link
                            to="/sustainability"
                            className="block px-4 py-3 text-[#004037] "
                            onClick={() => {
                              setIsCsrSubcategoryOpen(false)
                              setIsCorporateDropdownOpen(false)
                            }}
                          >
                            Sustainability
                            <p className="text-sm text-gray-600">Driving positive change for a greener future</p>
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* Other Links */}
                    <Link
                      to="/career"
                      className="block px-4 py-3 text-[#004037] font-bold "
                      onClick={() => setIsCorporateDropdownOpen(false)}
                    >
                      Careers
                      <p className="text-sm text-gray-600">Join our team and shape the future</p>
                    </Link>

                    <Link
                      to="/investors"
                      className="block px-4 py-3 text-[#004037] font-bold "
                      onClick={() => setIsCorporateDropdownOpen(false)}
                    >
                      Investors
                      <p className="text-sm text-gray-600">Partner with us for sustainable growth</p>
                    </Link>
                         <Link
                      to="/press-releases"
                      className="block px-4 py-3 text-[#004037] font-bold "
                      onClick={() => setIsCorporateDropdownOpen(false)}
                    >
                      Press Releases
                      <p className="text-sm text-gray-600">Stay updated with our latest announcements and milestones</p>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div className="h-px w-full bg-gray-200 my-1"></div>
            <Link
              to="/support"
              className="block py-4 font-extrabold text-[#004037] text-[36px] "
              onClick={handleDropdownLinkClick}
            >
              Support
            </Link>
            <div className="h-px w-full bg-gray-200 my-1"></div>
            <Link
              to="/healthcare"
              className="block py-4 font-extrabold text-[#004037] text-[36px] "
              onClick={handleDropdownLinkClick}
            >
              Healthcare
            </Link>
            <div className="h-px w-full bg-gray-200 my-1"></div>

            <Link
              to="/growth-accelerator"
              className="block py-4 font-extrabold text-[#004037] text-[36px]"
              onClick={handleDropdownLinkClick}
            >
              Accelerator
            </Link>
          </div>
        </div>
      </nav>

      {/* Banner Section */}
  <div className="relative w-full h-screen md:h-screen sm:h-[60vh] overflow-hidden bg-gray-100 mb-10">
    {/* Banner Image/Video */}
    <div className="relative w-full h-full">
     {currentSlide.type === 'video' ? (
  <div className="relative w-full h-full">
    <video
      ref={videoRef}
      className="w-full h-full object-cover"
      poster={isMobile ? currentSlide.thumbnail.mobile : currentSlide.thumbnail.desktop}
      loop
      muted
      autoPlay
      playsInline
    >
      <source
        src={isMobile && currentSlide.videoUrlMobile ? currentSlide.videoUrlMobile : currentSlide.videoUrl}
        type={
          (isMobile && currentSlide.videoUrlMobile ? currentSlide.videoUrlMobile : currentSlide.videoUrl).endsWith('.m3u8')
            ? 'application/x-mpegURL'
            : 'video/mp4'
        }
      />
      Your browser does not support the video tag.
    </video>
  </div>
) : (
        <img
          src={isMobile ? currentSlide.image.mobile : currentSlide.image.desktop}
          alt={currentSlide.title}
          className="w-full h-full object-cover"
        />
      )}


           {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-end pb-24 md:pb-32 px-4 sm:px-8 bg-gradient-to-t via-black/30 to-transparent"
        style={{
          backgroundImage: 'url("https://cdn.shopify.com/s/files/1/0636/5226/6115/files/tile4020.png?v=1758020387")',
          height: '100vh'
        }}>
            <div className="max-w-4xl mx-auto text-center w-full px-4 text-white ">
          <h2 className="sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white-700 mb-4 sm:mb-6 leading-tight" style={{ color: 'white' }}>
            {currentSlide.title}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-[#33cccc] mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            {currentSlide.description}
          </p>
          {currentSlide.path ? (
            <Link
              to={currentSlide.path}
              className="inline-flex items-center bg-[#33cccc] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-medium hover:bg-[#2bb8b8] transition-colors text-lg sm:text-xl"
            >
                  {currentSlide.buttonText}
              <ChevronRight className="ml-2 w-6 h-6" />
            </Link>
          ) : (
            <div></div>
          )}
        </div>
      </div>
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {bannerData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'bg-white w-8' : 'bg-white/50 w-3'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="hidden md:flex absolute left-8 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-xl transition-all"
          aria-label="Previous slide"
        >
          <ChevronRight className="w-8 h-8 text-gray-800 transform rotate-180" />
        </button>
        <button
          onClick={nextSlide}
          className="hidden md:flex absolute right-8 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-xl transition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="w-8 h-8 text-gray-800" />
        </button>
      </div>
    </>
  )
}
