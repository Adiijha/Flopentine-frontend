// src/components/Hero.tsx
import {Link} from "react-router-dom";
import HowItWorks from "./HowItWorks";

const Hero = () => {
    return (
        <>
      <section className="relative h-[660px] bg-gradient-to-b from-pink-100 to-pink-300 flex items-center justify-center text-center">
        
        {/* Decorative Top Shape */}
        <div className="absolute top-0 left-0 w-full">
          <svg className="w-full h-32 text-pink-200" fill="currentColor" viewBox="0 0 1440 320">
            <path d="M0,128L48,112C96,96,192,64,288,80C384,96,480,160,576,181.3C672,203,768,181,864,170.7C960,160,1056,160,1152,144C1248,128,1344,96,1392,80L1440,64V0H0Z"></path>
          </svg>
        </div>
  
        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold text-pink-800 leading-tight">
            💔 Share Your <span className="text-pink-600">Worst</span> <br /> Valentine’s Stories!
          </h1>
          <p className="text-lg text-gray-700 mt-6">
            Anonymously post, upvote/downvote, and enjoy the funniest and most awkward Valentine’s Day experiences.
          </p>
          <Link to="/stories">
          <a href="#" className="mt-6 inline-block bg-pink-600 text-white font-semibold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-pink-700 transition duration-300">
            Share Your Story
          </a>
          </Link>
        </div>
  
        {/* Decorative Bottom Shape */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg className="w-full h-32 text-pink-200" fill="currentColor" viewBox="0 0 1440 320">
            <path d="M0,160L48,176C96,192,192,224,288,208C384,192,480,128,576,117.3C672,107,768,149,864,165.3C960,181,1056,171,1152,165.3C1248,160,1344,160,1392,160L1440,160V320H0Z"></path>
          </svg>
        </div>
  
      </section>
      <HowItWorks/>
      </>
    );
  };
  
  export default Hero;
  