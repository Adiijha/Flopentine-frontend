// src/components/HowItWorks.tsx
import { Pencil, ThumbsUp, Laugh } from "lucide-react"; // Icons for steps

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-pink-50 py-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        
        {/* Left: Steps */}
        <div>
          <h2 className="text-4xl font-extrabold text-pink-700 mb-8">How It Works</h2>
          <div className="space-y-8">
            
            {/* Step 1 */}
            <div className="flex items-center gap-4">
              <Pencil className="text-pink-700 w-10 h-10" />
              <div>
                <h3 className="text-2xl font-semibold text-pink-800">Post Anonymously</h3>
                <p className="text-gray-600 mt-1">Share your story without revealing your identity.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-center gap-4">
              <ThumbsUp className="text-pink-700 w-10 h-10" />
              <div>
                <h3 className="text-2xl font-semibold text-pink-800">Vote & React</h3>
                <p className="text-gray-600 mt-1">Upvote the funniest fails or sympathize with others.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-center gap-4">
              <Laugh className="text-pink-700 w-10 h-10" />
              <div>
                <h3 className="text-2xl font-semibold text-pink-800">Enjoy the Chaos</h3>
                <p className="text-gray-600 mt-1">Read hilarious disasters and share the laughs!</p>
              </div>
            </div>

          </div>
        </div>

        {/* Right: Illustration */}
        <div className="flex justify-center">
          <img 
            src="https://source.unsplash.com/500x500/?love,broken" 
            alt="How It Works" 
            className="w-80 md:w-96 rounded-lg shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
