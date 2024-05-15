import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css"; // Import Swiper styles
import { Autoplay, Pagination } from "swiper/modules";
interface ImageData {
  src: string;
  alt: string;
}

interface ProductsProps {}

const Products: React.FC<ProductsProps> = () => {
  const images = [
    { src: "/heroimg1.jpg", alt: "Carousel Image 1" },
    { src: "/heroimg4.jpg", alt: "Carousel Image 4" },
    { src: "/heroimg5.jpg", alt: "Carousel Image 5" },
    { src: "/heroimg2.jpg", alt: "Carousel Image 2" },
    { src: "/heroimg3.jpg", alt: "Carousel Image 3" },
  ];

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const swiper = new Swiper(containerRef.current!, {
      slidesPerView: 4,
      loop: true,
      freeMode: true,
      grabCursor: true,
      centeredSlides: false,
      spaceBetween: 5,
      navigation: true,
      pagination: {
        clickable: true,
        dynamicBullets:true,
      },
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      modules: [Autoplay,Pagination],
    });

    return () => {
      swiper.destroy(true, true);
    };
  }, []);

  return (
    <div className="products">
      <h1>
        <span>BEST SELLING</span>
        <br />
        <p>PRODUCTS</p>
      </h1>
      <div className="imgcontainer" ref={containerRef}>
        <div className="swiper-wrapper">
          {images.map((image, index) => (
            <div
              key={index}
              style={{
                width: "400px",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
              className="swiper-slide"
            >
              <img src={image.src} width={400} height={400} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
