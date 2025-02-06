import { useState } from 'react';
import { ThumbsUp, ThumbsDown, Send } from 'lucide-react'; // Importing Lucide icons

const Dashboard = () => {
  // States to manage stories and votes
  const [stories, setStories] = useState<{ id: number; content: string; votes: number }[]>([]);
  const [newStory, setNewStory] = useState<string>('');
  const [isInputVisible, setIsInputVisible] = useState<boolean>(false); // Control visibility of input area

  const handleStorySubmit = () => {
    if (newStory.trim() === '') return;
    const newStoryObj = {
      id: Date.now(), // Unique ID for the story
      content: newStory,
      votes: 0,
    };
    setStories([newStoryObj, ...stories]);
    setNewStory(''); // Reset input field
    setIsInputVisible(false); // Hide the story input after submission
  };

  const handleVote = (id: number, type: 'up' | 'down') => {
    setStories((prevStories) =>
      prevStories.map((story) =>
        story.id === id
          ? {
              ...story,
              votes: type === 'up' ? story.votes + 1 : story.votes - 1,
            }
          : story
      )
    );
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Story Input Toggle Button */}
      {!isInputVisible && (
        <div className="mb-8">
          <button
            onClick={() => setIsInputVisible(true)}
            className="bg-pink-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-pink-700 transition"
          >
            <Send className="inline-block mr-2" /> Share Your Story
          </button>
        </div>
      )}

      {/* Story Input */}
      {isInputVisible && (
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-3xl font-semibold text-pink-800 mb-4">Write Your Story</h2>
          <textarea
            className="w-full h-32 p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
            placeholder="Write your worst Valentine's Day story..."
            value={newStory}
            onChange={(e) => setNewStory(e.target.value)}
          />
          <div className="mt-4 flex justify-end space-x-4">
            <button
              className="bg-gray-400 text-white px-6 py-3 rounded-full shadow-md hover:bg-gray-500 transition"
              onClick={() => setIsInputVisible(false)}
            >
              Cancel
            </button>
            <button
              className="bg-pink-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-pink-700 transition"
              onClick={handleStorySubmit}
            >
              <Send className="inline-block mr-2" /> Submit Story
            </button>
          </div>
        </div>
      )}

      {/* Stories List */}
      <div className="space-y-6">
        {stories
          .sort((a, b) => b.votes - a.votes) // Sort stories by votes in descending order
          .map((story) => (
            <div
              key={story.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
            >
              <p className="text-lg text-gray-700 mb-4">{story.content}</p>
              <div className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-2">
                  <button
                    className="bg-pink-600 text-white p-2 rounded-full hover:bg-pink-700 transition"
                    onClick={() => handleVote(story.id, 'up')}
                  >
                    <ThumbsUp size={20} />
                  </button>
                  <button
                    className="bg-pink-600 text-white p-2 rounded-full hover:bg-pink-700 transition"
                    onClick={() => handleVote(story.id, 'down')}
                  >
                    <ThumbsDown size={20} />
                  </button>
                </div>
                <span className="text-lg font-semibold text-pink-600">{story.votes} Votes</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
