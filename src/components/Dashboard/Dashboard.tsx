import { useState, useEffect } from "react";
import { Heart, HeartOff, Send, Plus } from "lucide-react";
import { getStories, createStory, voteStory, Story } from "../../api/api";

const Dashboard = () => {
  const [stories, setStories] = useState<Story[]>([]);
  const [newStory, setNewStory] = useState<string>("");
  const [isInputVisible, setIsInputVisible] = useState<boolean>(false);

  // Fetch stories on component mount
  useEffect(() => {
    getStories()
      .then((data) => setStories(data || [])) // Set stories array
      .catch((error) => console.error("Error fetching stories:", error));
  }, []);

  // Handle story submission
  const handleStorySubmit = async () => {
    if (!newStory.trim()) return;
    try {
      const story = await createStory(newStory);
      if (!story || !story._id) {
        console.error("Invalid story response from API:", story);
        return;
      }
      setStories((prevStories) => [story, ...prevStories]);
      setNewStory("");
      setIsInputVisible(false);
    } catch (error) {
      console.error("Error submitting story:", error);
    }
  };

  // Handle voting
  const handleVote = async (id: string, type: "upvote" | "downvote") => {
    if (!id) return;
    try {
      const updatedStory = await voteStory(id, type);
      setStories((prevStories) =>
        prevStories.map((story) => (story._id === id ? updatedStory : story))
      );
    } catch (error) {
      console.error("Error voting:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-pink-300 px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-pink-800 mb-8">
          Stories ❤️
        </h1>

        {/* Story Input */}
        {isInputVisible && (
          <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
            <h2 className="text-2xl font-semibold text-pink-800 mb-4">Share Your Story</h2>
            <textarea
              className="w-full h-32 p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-600"
              placeholder="Write your worst Valentine's Day story..."
              value={newStory}
              onChange={(e) => setNewStory(e.target.value)}
            />
            <div className="mt-4 flex justify-end space-x-4">
              <button
                className="bg-gray-400 text-white px-6 py-2 rounded-full shadow-md hover:bg-gray-500 transition"
                onClick={() => setIsInputVisible(false)}
              >
                Cancel
              </button>
              <button
                className="bg-pink-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-pink-700 transition"
                onClick={handleStorySubmit}
              >
                <Send className="inline-block mr-2" /> Submit
              </button>
            </div>
          </div>
        )}

        {/* Stories List */}
        <div className="space-y-6">
          {stories.length > 0 ? (
            stories
              .filter((story) => story.content?.trim()) // Remove empty stories
              .sort((a, b) => (b.upvotes - b.downvotes) - (a.upvotes - a.downvotes)) // Sort by votes
              .map((story) => {
                const upvotes = story.upvotes ?? 0;
                const downvotes = story.downvotes ?? 0;
                return (
                  <div
                    key={story._id}
                    className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
                  >
                    <p className="text-lg text-gray-700 mb-4">{story.content}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <button
                          className="bg-pink-600 text-white p-2 rounded-full hover:bg-pink-700 transition flex items-center"
                          onClick={() => handleVote(story._id, "upvote")}
                        >
                          <Heart size={20} className="mr-1" /> {upvotes}
                        </button>
                        <button
                          className="bg-gray-400 text-white p-2 rounded-full hover:bg-gray-500 transition flex items-center"
                          onClick={() => handleVote(story._id, "downvote")}
                        >
                          <HeartOff size={20} className="mr-1" /> {downvotes}
                        </button>
                      </div>
                      <span className="text-lg font-semibold text-pink-600">
                        {upvotes - downvotes} Votes
                      </span>
                    </div>
                  </div>
                );
              })
          ) : (
            <p className="text-center text-gray-700">No stories yet. Be the first to share yours!</p>
          )}
        </div>
      </div>

      {/* Floating Add Story Button */}
      {!isInputVisible && (
        <button
          className="fixed bottom-8 right-8 bg-pink-600 text-white p-4 rounded-full shadow-lg hover:bg-pink-700 transition flex items-center"
          onClick={() => setIsInputVisible(true)}
        >
          <Plus size={24} className="mr-1" /> Add a Story
        </button>
      )}
    </div>
  );
};

export default Dashboard;
