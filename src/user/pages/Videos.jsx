import { useState } from "react";
import { Modal, Button } from "flowbite-react";
import { Play, Eye, Clock } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const videos = [
  {
    id: 1,
    title: "Stretching for Flexibility",
    category: "Exercise",
    duration: "10:20",
    views: "45.1K",
    description: "Daily stretching routine to improve your flexibility and mobility.",
    thumbnail: "https://i.imgur.com/VWcIq5M.jpeg",
    video: "/videos/stretching.jsx"
  },
  {
    id: 2,
    title: "Home Exercise Routine for Back Pain",
    category: "Exercise",
    duration: "18:30",
    views: "28.5K",
    thumbnail: "https://i.imgur.com/dWOiXyQ.jpeg",
    description: "Simple exercises you can do at home to relieve back pain.",
    video: "/videos/backpain.mp4"
  },
  {
    id: 3,
    title: "Post-Surgery Rehabilitation Tips",
    category: "Recovery",
    duration: "15:00",
    views: "9.3K",
    description: "Essential tips for recovery after orthopedic surgery.",
    thumbnail: "https://i.imgur.com/IhQ4FZy.jpeg",
    videoUrl: "https://youtu.be/FI51zRzgIe4"
  }
];
 
export default function VideoLibrary() {
  const [open, setOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openVideo = (video) => {
    setSelectedVideo(video);
    setOpen(true);a
  };

  return (
   <>
    <Header/>
        <div className="px-8 py-10">
           
          <h1 className="text-4xl font-bold text-gray-800">Video Library</h1>
          <p className="text-gray-500 mt-2 mb-8">
            Browse our collection of educational therapy videos
          </p>
    
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((v) => (
              <div
                key={v.id}
                className="bg-white shadow-md rounded-xl overflow-hidden cursor-pointer hover:shadow-lg transition"
                onClick={() => openVideo(v)}
              >
                <div className="relative">
                  <img src={v.thumbnail} alt="" className="h-56 w-full object-cover" />
    
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/80 p-3 rounded-full shadow-md">
                      <Play className="text-blue-600" />
                    </div>
                  </div>
    
                  <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {v.duration}
                  </span>
                </div>
    
                <div className="p-4">
                  <span className="bg-teal-100 text-teal-700 text-xs px-2 py-1 rounded">
                    {v.category}
                  </span>
    
                  <h2 className="text-lg font-semibold mt-2">{v.title}</h2>
    
                  <p className="text-sm text-gray-500 mt-1">{v.description}</p>
    
                  <div className="flex items-center gap-4 mt-3 text-gray-500 text-sm">
                    <span className="flex items-center gap-1">
                      <Eye size={16} /> {v.views}
                    </span>
    
                    <span className="flex items-center gap-1">
                      <Clock size={16} /> {v.duration}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
    
          {selectedVideo && (
            <Modal size="6xl" show={open} onClose={() => setOpen(false)}>
              <Modal.Header>{selectedVideo.title}</Modal.Header>
    
              <Modal.Body>
                <video
                  src={selectedVideo.video}
                  controls
                  className="w-full rounded-lg"
                />
    
                <p className="mt-4 text-gray-700">{selectedVideo.description}</p>
    
                <div className="flex items-center gap-4 text-gray-600 mt-3">
                  <span className="bg-teal-100 text-teal-700 text-xs px-2 py-1 rounded">
                    {selectedVideo.category}
                  </span>
    
                  <span className="flex items-center gap-1">
                    <Eye size={16} /> {selectedVideo.views} views
                  </span>
    
                  <span className="flex items-center gap-1">
                    <Clock size={16} /> {selectedVideo.duration}
                  </span>
                </div>
              </Modal.Body>
    
              <Modal.Footer>
                <Button color="gray" onClick={() => setOpen(false)}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          )}
        </div>
                  <Footer/>
   </>
  );
}
