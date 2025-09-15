import React, { useState } from 'react';
import { Award, Users, Building2, CheckCircle, User, Mail, Phone, Briefcase, Upload } from 'lucide-react';
import Footer from '../components/Footer';

const BecomPatner = () => {
  

  

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "",
    experience: "",
    message: "",
    resume: null,
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const positions = [
    { title: "Site Engineer", type: "Full-time", location: "Nagpur", tags: ["On-site", "Civil"] },
    { title: "Project Manager", type: "Full-time", location: "Nagpur", tags: ["Leadership", "Planning"] },
    { 
  title: "Accountant", 
  type: "Contract", 
  location: "Remote", 
  tags: ["Tally prime", "MS Excel"] 
}

    
  ];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'resume') {
      setFormData((prev) => ({ ...prev, resume: files && files[0] ? files[0] : null }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    // live-validate when already touched
    const newValue = name === 'resume' ? (files && files[0] ? files[0] : null) : value;
    if (touched[name]) {
      const error = validateField(name, newValue);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, formData[name]);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const validateEmail = (email) => {
    if (!email) return 'Email is required';
    const re = /^\S+@\S+\.\S+$/;
    return re.test(email) ? '' : 'Enter a valid email address';
  };

  const validatePhone = (phone) => {
    if (!phone) return '';
    const re = /^[0-9+\-()\s]{8,20}$/;
    return re.test(phone) ? '' : 'Enter a valid phone number';
  };

  const validateField = (name, value) => {
    switch (name) {
      case 'fullName':
        return value ? (value.trim().length >= 2 ? '' : 'Name must be at least 2 characters') : 'Full name is required';
      case 'email':
        return validateEmail(value);
      case 'role':
        return value ? '' : 'Please select a role';
      case 'phone':
        return validatePhone(value);
      case 'experience':
        if (value === '' || value === null || value === undefined) return '';
        return Number(value) >= 0 ? '' : 'Experience cannot be negative';
      default:
        return '';
    }
  };

  const validateForm = () => {
    const fields = ['fullName', 'email', 'role', 'phone', 'experience'];
    const newErrors = {};
    fields.forEach((f) => {
      newErrors[f] = validateField(f, formData[f]);
    });
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);
    // mark all required fields as touched so errors render
    setTouched((prev) => ({ ...prev, fullName: true, email: true, role: true, phone: !!formData.phone, experience: !!formData.experience }));
    const hasError = Object.values(newErrors).some((msg) => msg);
    if (hasError) return;
    setFormData({ fullName: "", email: "", phone: "", role: "", experience: "", message: "", resume: null });
    setErrors({});
    setTouched({});
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative pt-24 sm:pt-28 pb-16 sm:pb-20   text-white overflow-hidden"
        style={{
  backgroundImage: "url('/images/career 1.jpg')",
  backgroundSize: "100% 100%",   // pura div fill karega
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: '60vh', // Adjust height as needed
}}
      >
        {/* White blur lights */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-48 sm:w-96 h-48 sm:h-96 bg-white rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-40 sm:w-64 h-40 sm:h-64 bg-white rounded-full blur-2xl"></div>
        </div>

        
        <div className="absolute inset-0 "></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            
           
            <p className="text-base sm:text-lg md:text-xl text-red-100 max-w-3xl sm:max-w-4xl mx-auto leading-relaxed">
              
            </p>
          </div>

          
          
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Current{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">Openings</span>
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto">
              Join a fast-growing construction company focused on quality, safety and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {positions.map((job, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl border border-red-100 bg-white shadow-md hover:shadow-2xl transform-gpu transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute -z-10 inset-0 bg-gradient-to-br from-red-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1 text-red-600">
                      <Building2 className="w-4 h-4" />
                      <span className="text-xs font-semibold tracking-wide">{job.type}</span>
                    </div>
                    <div className="text-xs text-gray-500">{job.location}</div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.tags.map((t, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">{t}</span>
                    ))}
                  </div>
                  <button
                    onClick={() => {
                      setFormData((prev) => ({ ...prev, role: job.title }));
                      const el = document.getElementById('career-apply-form');
                      if (el && el.scrollIntoView) {
                        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                    className="mt-auto inline-flex items-center justify-center rounded-lg bg-red-600 px-4 py-2 text-white text-sm font-semibold shadow hover:bg-red-700 transition-colors"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-white to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Why{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">Work With Us</span>
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto">
              Build iconic projects, grow your career, and be part of a winning team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[{
              icon: CheckCircle, title: 'Safety & Quality First', desc: 'We follow strict safety standards and quality processes on every site.'
            }, {
              icon: Users, title: 'People-First Culture', desc: 'Mentorship, learning, and a supportive environment for growth.'
            }, {
              icon: Award, title: 'Recognized Excellence', desc: 'Award-winning work that sets benchmarks in construction.'
            }, {
              icon: Building2, title: 'Challenging Projects', desc: 'From residential to commercial, work on diverse premium builds.'
            }].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="group p-6 sm:p-8 bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-red-100 hover:border-red-300 transform hover:-translate-y-2">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-red-500 to-red-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-4">{item.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="career-apply-form" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Apply{' '}
                <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">Now</span>
              </h2>
             
              <div className="relative rounded-2xl p-px bg-gradient-to-br from-red-500/30 via-red-300/20 to-transparent">
                <div className="rounded-2xl bg-white p-5 sm:p-6 shadow-lg border border-red-100">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input name="fullName" value={formData.fullName} onChange={handleChange} onBlur={handleBlur} aria-invalid={touched.fullName && !!errors.fullName} type="text" className={`w-full rounded-lg border pl-9 pr-3 py-2 focus:outline-none focus:ring-2 ${touched.fullName && errors.fullName ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-red-500'}`} placeholder="Enter your full name" />
                        </div>
                        {touched.fullName && errors.fullName ? (<p className="mt-1 text-xs text-red-600">{errors.fullName}</p>) : null}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input name="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} aria-invalid={touched.email && !!errors.email} type="email" className={`w-full rounded-lg border pl-9 pr-3 py-2 focus:outline-none focus:ring-2 ${touched.email && errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-red-500'}`} placeholder="your@email.com" />
                        </div>
                        {touched.email && errors.email ? (<p className="mt-1 text-xs text-red-600">{errors.email}</p>) : null}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input name="phone" value={formData.phone} onChange={handleChange} onBlur={handleBlur} aria-invalid={touched.phone && !!errors.phone} type="tel" className={`w-full rounded-lg border pl-9 pr-3 py-2 focus:outline-none focus:ring-2 ${touched.phone && errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-red-500'}`} placeholder="+91-XXXXXXXXXX" />
                        </div>
                        {touched.phone && errors.phone ? (<p className="mt-1 text-xs text-red-600">{errors.phone}</p>) : null}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Role Applying For</label>
                        <div className="relative">
                          <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <select name="role" value={formData.role} onChange={handleChange} onBlur={handleBlur} aria-invalid={touched.role && !!errors.role} className={`w-full rounded-lg border pl-9 pr-3 py-2 bg-white focus:outline-none focus:ring-2 ${touched.role && errors.role ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-red-500'}`}>
                            <option value="">Select a role</option>
                            {positions.map((p, i) => (
                              <option key={i} value={p.title}>{p.title}</option>
                            ))}
                          </select>
                        </div>
                        {touched.role && errors.role ? (<p className="mt-1 text-xs text-red-600">{errors.role}</p>) : null}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Experience (Years)</label>
                        <input name="experience" value={formData.experience} onChange={handleChange} onBlur={handleBlur} aria-invalid={touched.experience && !!errors.experience} type="number" min="0" className={`w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 ${touched.experience && errors.experience ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-red-500'}`} placeholder="e.g., 3" />
                        {touched.experience && errors.experience ? (<p className="mt-1 text-xs text-red-600">{errors.experience}</p>) : null}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Resume (PDF/DOC)</label>
                        <label htmlFor="resume-upload" className="flex items-center justify-between w-full rounded-lg border border-dashed border-gray-300 px-4 py-2 bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors">
                          <span className="text-sm text-gray-600 truncate">{formData.resume ? formData.resume.name : 'Click to upload resume'}</span>
                          <Upload className="w-4 h-4 text-gray-500" />
                        </label>
                        <input id="resume-upload" name="resume" onChange={handleChange} type="file" accept=".pdf,.doc,.docx" className="hidden" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                      <textarea name="message" value={formData.message} onChange={handleChange} rows="4" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Tell us about yourself"></textarea>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-gray-500">By applying, you agree to our processing of your information.</p>
                      <button type="submit" className="inline-flex items-center justify-center rounded-lg bg-red-600 px-6 py-2.5 text-white text-sm font-semibold shadow hover:bg-red-700 transition-colors">
                        Submit Application
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute -inset-6 bg-gradient-to-br from-red-100 to-transparent rounded-3xl -z-10" />
              <div className="h-full w-full rounded-3xl overflow-hidden shadow-xl border border-red-100">
                <img src="/images/project.jpg" alt="Careers at Madhuprabha Construction" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      
      
      <Footer />
    </div>
  );
};

export default BecomPatner;
