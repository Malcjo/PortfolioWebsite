import { useNavigate } from "react-router-dom";

export default function BackButton() {
    const navigate = useNavigate(); // Initialize navigate
  
    return (
      <button
        onClick={() => navigate(-1)} // Goes back to the previous page
        className="text-blue-400 hover:text-white bg-gray-800 py-2 px-4 mb-4 rounded-lg"
      >
        ← Back
      </button>
    );
  }
