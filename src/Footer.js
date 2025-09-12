import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <>
            <footer className="overflow-hidden text-foreground p-8 " style={{background:'#FCFAF8'}}>
              <div className="flex flex-col items-center justify-center pb-8 md:hidden">
                <div className="flex justify-center items-center">
                    <Link to="/">
                        <img className='h-14 footer-img' src="https://aayushlife.com/cdn/shop/files/Aayush_Wellness_Limited_-_Logo_-_17-10-2024-02_240x.png?v=1729951951" alt="logo" />
                    </Link>
                </div>
                <div className="block md:hidden text-white text-[10px] text-center">A Public Listed Company on <br/>Bombay Stock Exchange [BSE Code: 539528]</div>
              </div>
                
              <div className="container mx-auto grid grid-cols-2 md:grid-cols-6 gap-8">
                  <div className="flex-col items-center justify-center hidden md:flex">
                    <div className="justify-center items-center flex">
                        <Link to='/'>
                            <img className='h-[4.5rem] footer-img' src="https://aayushlife.com/cdn/shop/files/Aayush_Wellness_Limited_-_Logo_-_17-10-2024-02_240x.png?v=1729951951" alt="logo" />
                        </Link>
                    </div>
                    <div className="hidden text-white justify-center text-center w-full text-[10px] md:flex">A Public Listed Company on <br/>Bombay Stock Exchange [BSE Code: 539528]</div>
                  </div>
                  
                  <div>
                      <h3 className="font-bold text-lg text-white">ABOUT US</h3>
                      <ul className="mt-2 space-y-2">
                          <li><Link to="/about/company-intro" className="hover:text-primary transition-colors text-white">Our Story</Link></li>
                          <li><Link to="/about/mission-vision" className="hover:text-primary transition-colors text-white">Mission & Vision</Link></li>
                      </ul>
                  </div>
                  
                  <div>
                      <h3 className="font-bold text-lg text-white">WELLNESS</h3>
                      <ul className="mt-2 space-y-2">
                          <li><Link to="/wellness/modern-science" className="hover:text-primary transition-colors text-white">Modern Science</Link></li>
                          <li><Link to="/ayurveda" className="hover:text-primary transition-colors text-white">Ayurveda</Link></li>
                          <li><Link to="/wellness/health-wellness" className="hover:text-primary transition-colors text-white">Health & Wellness</Link></li>
                      </ul>
                  </div>
                  
                  <div>
                      <h3 className="font-bold text-lg text-white">NEWSROOM</h3>
                      <ul className="mt-2 space-y-2">
                          <li><Link to="/newsroom/in-the-news" className="hover:text-primary transition-colors text-white">In the News</Link></li>
                          <li><Link to="/press-releases" className="hover:text-primary transition-colors text-white">Press Release</Link></li>
                          <li><Link to="/newsroom/library" className="hover:text-primary transition-colors text-white">Library</Link></li>
                      </ul>
                  </div>
                  
                  <div>
                      <h3 className="font-bold text-lg text-white">CSR</h3>
                      <ul className="mt-2 space-y-2">
                          <li><Link to="/csr-at-aayush/malnutrition" className="hover:text-primary transition-colors text-white">Malnutrition</Link></li>
                          <li><Link to="/csr-at-aayush/health-check" className="hover:text-primary transition-colors text-white">Healthcare Check</Link></li>
                          <li><Link to="/sustainability" className="hover:text-primary transition-colors text-white">Sustainability</Link></li>
                      </ul>
                  </div>

                  <div>
                      <h3 className="font-bold text-lg text-white">Corporate</h3>
                      <ul className="mt-2 space-y-2">
                          <li><Link to="/career" className="hover:text-primary transition-colors text-white">Careers</Link></li>
                          <li><Link to="/privacy-policy" className="hover:text-primary transition-colors text-white">Privacy Policy</Link></li>
                      </ul>
                  </div>
              </div>
            </footer>
        </>
    );
}
