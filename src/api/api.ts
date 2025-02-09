import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/stories";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Define types
export interface Story {
  _id: string;
  content: string;
  upvotes: number;
  downvotes: number;
  createdAt: string;
}

// Fetch all stories
export const getStories = async (): Promise<Story[]> => {
    try {
      const response = await api.get(""); // Ensure correct endpoint usage
  
      if (!response.data || !Array.isArray(response.data.message)) {
        throw new Error("Invalid response format: " + JSON.stringify(response.data));
      }
  
      return response.data.message; // ✅ Correctly returning the stories array
    } catch (error) {
      console.error("Error fetching stories:", error);
      throw error;
    }
  };
  
  

// Submit a new story
export const createStory = async (content: string): Promise<Story> => {
    try {
      const response = await api.post("/", { content });
  
      // Ensure response data structure is correct
      if (!response.data || !response.data.data) {
        throw new Error("Invalid response format: " + JSON.stringify(response.data));
      }
  
      return response.data.data;
    } catch (error: any) {
      console.error("Error submitting story:", error.response?.data || error.message);
      throw new Error("Failed to submit story. Please try again.");
    }
  };

  
  // ✅ Fix voteStory
  export const voteStory = async (id: string, type: "upvote" | "downvote") => {
    try {
      const response = await api.post(`/${id}/vote`, { type });
  
      if (!response.data || !response.data._id) {
        throw new Error(`Invalid response format: ${JSON.stringify(response.data)}`);
      }
  
      return response.data;
    } catch (error: any) {
      console.error("Error voting:", error.response?.data || error.message);
      throw new Error("Something went wrong while voting. Please try again.");
    }
  };
  
  
  

// Delete a story (Optional, if moderation is required)
export const deleteStory = async (id: string): Promise<void> => {
  try {
    await api.delete(`/${id}`);
  } catch (error) {
    console.error("Error deleting story:", error);
    throw error;
  }
};
