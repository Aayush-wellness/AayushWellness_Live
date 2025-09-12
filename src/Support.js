import React from 'react';
import Header from './Header';
import NewFooter from './NewFooter';
import { FiMail, FiPhone, FiMapPin, FiSend, FiClock, FiMessageSquare } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

// Schema.org structured data for Contact Page with enhanced details
const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://www.aayush.health/support#webpage",
  "name": "Customer Support | Aayush Wellness | Contact Us",
  "description": "Get expert customer support from Aayush Wellness. Contact our team for assistance with products, orders, or any health-related inquiries. We're here to help with your wellness journey.",
  "url": "https://www.aayush.health/support",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.aayush.health/support"
  },
  "publisher": {
    "@id": "https://www.aayush.health/#organization"
  },
  "inLanguage": "en-IN",
  "keywords": [
    "Aayush Wellness support",
    "customer service",
    "contact Aayush Wellness",
    "health product support",
    "wellness product help",
    "order assistance",
    "product inquiries"
  ]
};

// Enhanced Organization schema with more details
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.aayush.health/#organization",
  "name": "Aayush Wellness",
  "url": "https://www.aayush.health",
  "logo": "https://www.aayush.health/logo.png",
  "description": "Aayush Wellness - Your trusted partner for premium health and wellness products, dedicated to enhancing your wellbeing through natural solutions.",
  "sameAs": [
    "https://www.facebook.com/aayushwellness",
    "https://www.instagram.com/aayushwellness",
    "https://twitter.com/aayushwellness",
    "https://www.linkedin.com/company/aayushwellness"
  ],
  "contactPoint": [{
    "@type": "ContactPoint",
    "telephone": "+91 12345 67890",
    "contactType": "customer service",
    "contactOption": ["TollFree", "HearingImpairedSupported"],
    "areaServed": "IN",
    "availableLanguage": ["English", "Hindi"],
    "email": "support@aayushwellness.com",
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "19:00"
    }
  }],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Wellness Street",
    "addressLocality": "Mumbai",
    "addressRegion": "Maharashtra",
    "postalCode": "400001",
    "addressCountry": "IN"
  }
};

// FAQ Schema for common support questions
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How can I track my Aayush Wellness order?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can track your order by logging into your account or using the tracking number provided in your shipping confirmation email."
      }
    },
    {
      "@type": "Question",
      "name": "What is Aayush Wellness's return policy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer a 30-day return policy for unopened and unused products. Please contact our support team for return authorization and instructions."
      }
    }
  ]
};

// Breadcrumb schema with enhanced structure
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.aayush.health/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Customer Support",
      "item": "https://www.aayush.health/support"
    }
  ]
};

function Support() {
    const [result, setResult] = React.useState("");
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setResult("Sending...");
        
        const formData = new FormData(event.target);
        formData.append("access_key", "a880bc0c-8877-4f1c-9d4a-bb1574c365ed");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
            const data = await response.json();
            if (data.success) {
                setResult("Message sent successfully! We'll get back to you soon.");
                event.target.reset();
            } else {
                setResult("Something went wrong. Please try again later.");
            }
        } catch (error) {
            setResult("Network error. Please check your connection and try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactItems = [
        {
            icon: <FiMail className="text-2xl" />,
            title: "Email Us",
            content: "support@aayushwellness.com",
            link: "mailto:support@aayushwellness.com"
        },
        {
            icon: <FiPhone className="text-2xl" />,
            title: "Call Us",
            content: "+91 12345 67890",
            link: "tel:+911234567890"
        },
        {
            icon: <FiMapPin className="text-2xl" />,
            title: "Visit Us",
            content: "123 Wellness Street, Health District, Mumbai, Maharashtra 400001"
        }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Helmet>
                <title>Customer Support | Aayush Wellness | Contact Us</title>
                <meta 
                    name="description" 
                    content="Get expert customer support from Aayush Wellness. Contact our team for assistance with products, orders, or any health-related inquiries. We're here to help with your wellness journey." 
                />
                <meta name="keywords" content="Aayush Wellness support, customer service, contact Aayush Wellness, health product support, wellness product help, order assistance, product inquiries" />
                <meta property="og:title" content="Customer Support | Aayush Wellness | Contact Us" />
                <meta property="og:description" content="Get expert customer support from Aayush Wellness. Contact our team for assistance with products, orders, or any health-related inquiries." />
                <meta property="og:url" content="https://www.aayush.health/support" />
                <meta property="og:type" content="website" />
                
                {/* Schema.org JSON-LD */}
                <script type="application/ld+json">
                    {JSON.stringify(contactPageSchema)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(organizationSchema)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema)}
                </script>
            </Helmet>

            <Header />
            
            {/* Hidden SEO Headers with consistent keywords */}
            <h1 style={{ display: 'none' }}>Customer Support | Aayush Wellness | Contact Us</h1>
            <h2 style={{ display: 'none' }}>Expert Assistance for Your Health & Wellness Journey</h2>

            {/* Hero Section */}
            <div className="relative bg-white overflow-hidden" style={{marginTop:'100px'}}>
                <div className="max-w-7xl mx-auto">
                    <div className="relative z-10 pb-12 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                            <div className="sm:text-center lg:text-left">
                                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                    <span className="block">Need Help?</span>
                                    <span className="block text-[#33cccc]">We're Here For You</span>
                                </h1>
                                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                    Our dedicated support team is ready to assist you with any questions or concerns you may have about our products and services.
                                </p>
                            </div>
                        </main>
                    </div>
                </div>
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" 
                         src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/pexels-iriser-1420003.jpg?v=1757335986" 
                         alt="Support team" />
                </div>
            </div>

            {/* Main Content */}
            <div className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center mb-16">
                        <h2 className="text-base text-[#33cccc] font-semibold tracking-wide uppercase">Contact Us</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Get in Touch
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                        </p>
                    </div>

                    <div className="mt-10">
                        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                            {/* Contact Form */}
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white overflow-hidden shadow rounded-lg"
                            >
                                <div className="px-6 py-5 border-b border-gray-200">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                                        Send us a message
                                    </h3>
                                </div>
                                <div className="px-6 py-5">
                                    <form onSubmit={onSubmit} className="space-y-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                                Full Name
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    required
                                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                Email Address
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    required
                                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    placeholder="your@email.com"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                                                Subject
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    name="subject"
                                                    id="subject"
                                                    required
                                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    placeholder="How can we help?"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                                Your Message
                                            </label>
                                            <div className="mt-1">
                                                <textarea
                                                    name="message"
                                                    id="message"
                                                    rows={4}
                                                    required
                                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    placeholder="Tell us how we can help you..."
                                                    defaultValue={''}
                                                />
                                            </div>
                                        </div>

                                        <div className="flex items-center">
                                            <motion.button
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#33cccc] hover:bg-[#2ab3b3] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#33cccc]"
                                            >
                                                <FiSend className="mr-2" />
                                                {isSubmitting ? 'Sending...' : 'Send Message'}
                                            </motion.button>
                                        </div>

                                        {result && (
                                            <div className={`p-3 rounded-md ${result.includes('successfully') ? 'bg-green-50 text-green-800' : 'bg-yellow-50 text-yellow-800'}`}>
                                                <p className="text-sm">{result}</p>
                                            </div>
                                        )}
                                    </form>
                                </div>
                            </motion.div>

                            {/* Contact Information */}
                            <div className="space-y-8">
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                    className="bg-white overflow-hidden shadow rounded-lg"
                                >
                                    <div className="px-6 py-5 border-b border-gray-200">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                                            Contact Information
                                        </h3>
                                    </div>
                                    <div className="px-6 py-5">
                                        <div className="space-y-6">
                                            {contactItems.map((item, index) => (
                                                <div key={index} className="flex items-start">
                                                    <div className="flex-shrink-0 bg-[#33cccc] bg-opacity-10 p-3 rounded-md">
                                                        {item.icon}
                                                    </div>
                                                    <div className="ml-4">
                                                        <h4 className="text-sm font-medium text-gray-900">{item.title}</h4>
                                                        {item.link ? (
                                                            <a href={item.link} className="text-sm text-[#33cccc] hover:text-[#2ab3b3]">
                                                                {item.content}
                                                            </a>
                                                        ) : (
                                                            <p className="text-sm text-gray-500">{item.content}</p>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-8">
                                            <h4 className="text-sm font-medium text-gray-900 mb-3">Business Hours</h4>
                                            <div className="space-y-2">
                                                {[
                                                    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
                                                    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
                                                    { day: 'Sunday', hours: 'Closed' }
                                                ].map((item, index) => (
                                                    <div key={index} className="flex justify-between text-sm">
                                                        <span className="text-gray-500">{item.day}</span>
                                                        <span className="font-medium text-gray-900">{item.hours}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                    className="bg-[#33cccc] bg-opacity-10 rounded-lg p-6"
                                >
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <FiMessageSquare className="h-6 w-6 text-[#33cccc]" aria-hidden="true" />
                                        </div>
                                        <div className="ml-3">
                                            <h3 className="text-sm font-medium text-[#33cccc]">Need help right away?</h3>
                                            <div className="mt-2 text-sm text-[#33cccc]">
                                                <p>Our customer support team is available 24/7 to assist you with any urgent inquiries.</p>
                                            </div>
                                            <div className="mt-4">
                                                <a href="tel:+911234567890" className="inline-flex items-center text-sm font-medium text-[#33cccc] hover:text-[#2ab3b3]">
                                                    Message Now
                                                    <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <NewFooter />
        </div>
    );
}

export default Support;
