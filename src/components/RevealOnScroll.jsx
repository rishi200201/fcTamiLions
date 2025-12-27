import { useEffect, useRef } from "react";

export const RevealOnScroll = ({ 
  children, 
  threshold = 0.15, 
  rootMargin = "0px 0px -50px 0px",
  delay = 0,
  stagger = false,
  animation = "default" 
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const element = ref.current;
          
          // Apply delay if specified
          if (delay > 0) {
            setTimeout(() => {
              element.classList.add("visible");
            }, delay);
          } else {
            element.classList.add("visible");
          }

          // Handle staggered animations for child elements
          if (stagger && element) {
            const children = element.querySelectorAll('.stagger-item');
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('visible');
              }, delay + (index * 100));
            });
          }

          // Disconnect observer after first intersection for performance
          observer.unobserve(element);
        }
      },
      { 
        threshold, 
        rootMargin 
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, [threshold, rootMargin, delay, stagger]);

  // Animation class mapping
  const animationClasses = {
    default: "reveal",
    "slide-up": "reveal",
    "slide-left": "reveal-slide-left", 
    "fade-scale": "reveal-fade-scale",
    "slide-right": "reveal-slide-right"
  };

  return (
    <div 
      ref={ref} 
      className={`${animationClasses[animation] || animationClasses.default} ${delay > 0 ? 'reveal-delay' : ''}`}
      style={{ animationDelay: delay > 0 ? `${delay}ms` : undefined }}
    >
      {children}
    </div>
  );
};
