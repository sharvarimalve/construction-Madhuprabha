import React from 'react';
import { Award, Users, Target, Building2, CheckCircle, Star, TrendingUp } from 'lucide-react';
import { aboutUsData, testimonials } from '../mockData';
import Footer from '../components/Footer';

const AboutPage = () => {
  const achievements = [
    { icon: Award, number: "20+", label: "Years Experience", color: "from-orange-500 to-red-600" },
    { icon: Building2, number: "200+", label: "Projects Completed", color: "from-blue-500 to-blue-600" },
    { icon: Users, number: "150+", label: "Happy Clients", color: "from-green-500 to-green-600" },
    { icon: TrendingUp, number: "100%", label: "Success Rate", color: "from-purple-500 to-purple-600" }
  ];

  const values = [
    {
      icon: Target,
      title: "Quality First",
      description: "We never compromise on quality. Every project reflects our commitment to excellence and precision in construction."
    },
    {
      icon: CheckCircle,
      title: "Timely Delivery",
      description: "We understand the value of time and ensure all projects are completed within the agreed timeline."
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Our clients are at the heart of everything we do. We listen, understand, and deliver beyond expectations."
    },
    {
      icon: Award,
      title: "Innovation",
      description: "We embrace modern construction techniques and technologies to provide innovative solutions."
    }
  ];

  const teamMembers = [
    {
      name: "Mr. Ashish Londe",
      role: "Founder & Managing Director",
      experience: "19+ Years Experience",
      image: "/images/vikashsir.jpeg",
    },
    {
      name: "Mr. Vikas Mishra",
      role: "Project Manager",
      experience: "12+ Years Experience",
      image: "/images/project_manager.jpeg",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-red-500 rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-600/20 backdrop-blur-sm border border-orange-500/30 rounded-full mb-6">
              <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">About Us</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Building Excellence
              </span>
              <br />
              <span className="text-white">Since 2005</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {aboutUsData.shortDescription}
            </p>
          </div>

          {/* Achievements */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="text-center group">
                  <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{achievement.number}</div>
                  <div className="text-gray-400 font-medium">{achievement.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Our{' '}
                  <span className="bg-gradient-to-r from-orange-600 to-red-700 bg-clip-text text-transparent">
                    Journey
                  </span>
                </h2>
                <div className="prose prose-lg text-gray-600 text-justify">
                  <p className="mb-6">
                    {aboutUsData.fullDescription.split('\n\n')[0]}
                  </p>
                  <p className="mb-6">
                    {aboutUsData.fullDescription.split('\n\n')[1]}
                  </p>
                  <p>
                    {aboutUsData.fullDescription.split('\n\n')[2]}
                  </p>
                </div>
              </div>
            </div>

            {/* Images */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <img
                    src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=400&h=300&fit=crop&crop=center"
                    alt="Construction Excellence"
                    className="w-full rounded-2xl shadow-lg"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=200&fit=crop&crop=center"
                    alt="Modern Architecture"
                    className="w-full rounded-2xl shadow-lg"
                  />
                </div>
                <div className="space-y-6 mt-12">
                  <img
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop&crop=center"
                    alt="Quality Work"
                    className="w-full rounded-2xl shadow-lg"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=250&fit=crop&crop=center"
                    alt="Happy Clients"
                    className="w-full rounded-2xl shadow-lg"
                  />
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-orange-500 to-red-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold">20+</div>
                  <div className="text-sm opacity-90">Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-orange-600 to-red-700 bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide every decision we make and every project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200 transform hover:-translate-y-2">
                  <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-justify">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-orange-600 to-red-700 bg-clip-text text-transparent">
                Team
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the leaders who drive our vision and ensure excellence in every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-orange-50 pt-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-55 h-48 object-cover  mx-auto mb-6 shadow-lg border-4 border-white"
                />
                <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-orange-600 font-semibold mb-2">{member.role}</p>
                <p className="text-gray-600">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Footer />
    </div>
  );
};

export default AboutPage;
