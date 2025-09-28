// src/components/Slider/sliderData.js
export const sliderImages = [
  "https://picsum.photos/id/1018/1000/600/",
  "https://picsum.photos/id/1015/1000/600/",
  "https://picsum.photos/id/1019/1000/600/",
];




// import React, { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import axios from "axios";

// const ImageSlider = () => {
//   const [images, setImages] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const res = await axios.get("https://your-backend.com/api/slides");
//         setImages(res.data); // assuming res.data = [{id, url}, ...]
//       } catch (err) {
//         console.error("Error fetching images:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchImages();
//   }, []);

//   if (loading) {
//     return <p className="text-center mt-10">Loading slider...</p>;
//   }

//   if (!images.length) {
//     return <p className="text-center mt-10">No images found</p>;
//   }

//   return (
//     <div className="max-w-3xl mx-auto mt-10">
//       <Swiper
//         modules={[Autoplay, Pagination]}
//         spaceBetween={20}
//         slidesPerView={1}
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 3000, disableOnInteraction: false }}
//         loop
//         className="rounded-lg overflow-hidden"
//       >
//         {images.map((img) => (
//           <SwiperSlide key={img.id}>
//             <img
//               src={img.url}
//               alt={`Slide ${img.id}`}
//               className="w-full h-64 md:h-96 object-cover rounded-lg"
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default ImageSlider;
