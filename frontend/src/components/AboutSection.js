import React, { useState, useEffect, useRef } from 'react';
import { Users, Award, Clock, CheckCircle } from 'lucide-react';
import { Link } from "react-router-dom";

const AboutSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [startCounter, setStartCounter] = useState(false); // scroll detection

  const stats = [
    {
      icon: <Award className="w-8 h-8" />,
      number: 200000,
      suffix: "+",
      label: "Sq.Ft Area Delivered",
      gradient: "from-pink-500 to-red-500",
      bg: "bg-pink-50"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      number: 20,
      suffix: "+",
      label: "Years Experience",
      gradient: "from-yellow-400 to-orange-500",
      bg: "bg-yellow-50"
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: 200,
      suffix: "+",
      label: "Happy Clients",
      gradient: "from-green-400 to-emerald-500",
      bg: "bg-green-50"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      number: 25,
      suffix: "+",
      label: "Projects done",
      gradient: "from-blue-500 to-indigo-600",
      bg: "bg-blue-50"
    }
  ];

  const carouselImages = [
    "/images/about.jpg",
    // "/images/WhatsApp Image 2025-09-13 at 16.54.10_5316750b.jpg",
    "/images/vikashsir.jpeg",
  ];

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  // Counter hook
  const useCounter = (end, duration = 2000, start = false) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!start) return; // only start when section is visible

      let startVal = 0;
      const increment = end / (duration / 30);
      const timer = setInterval(() => {
        startVal += increment;
        if (startVal >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(Math.ceil(startVal));
        }
      }, 30);

      return () => clearInterval(timer);
    }, [end, duration, start]);

    return count;
  };

  // Detect when Stats Section is visible
  const statsRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounter(true);
        }
      },
      { threshold: 0.3 } // 30% visible
    );

    if (statsRef.current) observer.observe(statsRef.current);

    return () => {
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
  }, []);

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-white via-red-50 to-red-100"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              About <span className="text-red-600">Madhuprabha</span>
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            Madhuprabha Construction was started in the year 2005. The business start was modest with the regular clients in Nagpur. Over the period, in last 20 years, now we are the leading company in the construction group. Our projects not only deal in Nagpur but also in and around Central India. The journey of hard work, dedication, and trust of our clients has brought us this long way. We deal in the commercials and housing society. With the experience in designing and building these, our company has higher standards in terms of quality and at the same time, it remains affordable to everyone. We are also very well known for the perfect carvings and core commitment for every project.</p>

            {/* <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our transformation to Madhu Prabha Constructions reflects our growth while maintaining the core values that have guided us from the beginning. We believe that construction is not just about building structures; it's about creating spaces where lives unfold, businesses thrive, and communities flourish.  */}

              {/* Today, with over 500 completed projects and more than 1000 satisfied clients, we continue to set new standards in construction excellence, always staying true to our founding principles of quality, integrity, and customer satisfaction. */}
            {/* </p> */}

            {/* Mission & Values */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Our Mission</h4>
                  <p className="text-slate-600">Our mission is to maintain the relationship with the clients of trust and loyalty. Also to deliver a good quality of services at affordable prices by our qualified personnel for different types of projects to the customers. We aim at giving our best to deliver what exactly clients have in mind.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Our Vision</h4>
                  <p className="text-slate-600">Our vision is to be one of the top construction industry and organizations which are excellent in quality, and deliver the services in a better way so our clients are satisfied.</p>
                </div>
              </div>
            </div>

            <Link
              to="/about"
              className="mt-8 bg-gradient-to-r from-red-500 to-red-700 text-white px-8 py-3 rounded-full font-medium hover:from-red-600 hover:to-red-800 transition-all duration-300 transform hover:scale-105 inline-block"
            >
              <button>
                Learn More About Us
              </button>
            </Link>
          </div>

          {/* Right Carousel */}
          <div className="relative w-full flex justify-center items-center">
            <div className="relative w-full h-80 md:h-96 overflow-hidden rounded-3xl shadow-2xl">
              <div
                className="flex h-full transition-transform duration-1000"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {carouselImages.map((img, index) => (
                  <div key={index} className="relative w-full flex-shrink-0 h-full">
                    <img
                      src={img}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md rounded-2xl px-6 py-4 shadow-lg">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-red-600">20+</span>
                <span className="text-sm text-slate-700">Years of Excellence</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const count = useCounter(stat.number, 2500, startCounter); // 2.5 sec animation
            return (
              <div
                key={index}
                className={`text-center group rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 ${stat.bg}`}
              >
                <div
                  className={`inline-flex items-center justify-center w-20 h-20 
                             bg-gradient-to-br ${stat.gradient} text-white 
                             rounded-2xl mb-4 border-4 border-white shadow-lg
                             group-hover:scale-110 transition-transform duration-300`}
                >
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-2">
                  {count}{stat.suffix}
                </div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
