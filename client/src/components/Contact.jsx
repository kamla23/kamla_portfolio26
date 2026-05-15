import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
import API from '../utils/api'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await API.post('/contact', formData); 
      if (response.data.success) {
        alert("Message sent successfully!");
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (err) {
      console.error(err);
      alert("Error: Message nahi bheja ja saka.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">Get In Touch</h2>
          <div className="h-[2px] flex-grow bg-gradient-to-r from-blue-500 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Left Side: Info & Map */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Let's Talk!</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                I am currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-6">
              {/* Email Item */}
              <div className="flex items-center gap-4 group">
                <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <FaEnvelope size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest">Email Me</p>
                  <p className="text-lg font-medium">kamlabai23@navgurukul.org</p>
                </div>
              </div>

              {/* Location Item */}
              <div className="flex items-center gap-4 group">
                <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <FaMapMarkerAlt size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest">Location</p>
                  <p className="text-lg font-medium text-white">Jashpur Nagar, Chhattisgarh, India</p>
                </div>
              </div>

              {/* Map View */}
              <div className="w-full h-64 rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group mt-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14732.614833211517!2d84.12644265!3d22.61073845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3989437299a4e32d%3A0xc39e557256561e1f!2sJashpur%20Nagar%2C%20Chhattisgarh%20496331!5e0!3m2!1sen!2sin!4v1715263000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(90%)' }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Jashpur Map"
                  className="opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                ></iframe>
                <a 
                  href="https://maps.app.goo.gl/YourExactLink" 
                  target="_blank" 
                  rel="noreferrer"
                  className="absolute inset-0 z-10"
                ></a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 pt-6">
              <a href="https://linkedin.com/in/yourprofile" target="_blank" className="p-4 bg-white/5 border border-white/10 rounded-full hover:text-blue-500 hover:bg-white/10 transition-all"><FaLinkedin size={20}/></a>
              <a href="https://github.com/yourusername" target="_blank" className="p-4 bg-white/5 border border-white/10 rounded-full hover:text-white hover:bg-white/10 transition-all"><FaGithub size={20}/></a>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 shadow-2xl h-fit">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" name="name" placeholder="Your Name" required
                  className="bg-[#0b1120] border border-white/10 rounded-lg p-3 outline-none focus:border-blue-500 transition-all text-white"
                  value={formData.name} onChange={handleChange}
                />
                <input 
                  type="email" name="email" placeholder="Your Email" required
                  className="bg-[#0b1120] border border-white/10 rounded-lg p-3 outline-none focus:border-blue-500 transition-all text-white"
                  value={formData.email} onChange={handleChange}
                />
              </div>
              <input 
                type="text" name="subject" placeholder="Subject" required
                className="w-full bg-[#0b1120] border border-white/10 rounded-lg p-3 outline-none focus:border-blue-500 transition-all text-white"
                value={formData.subject} onChange={handleChange}
              />
              <textarea 
                name="message" rows="5" placeholder="Your Message" required
                className="w-full bg-[#0b1120] border border-white/10 rounded-lg p-3 outline-none focus:border-blue-500 transition-all resize-none text-white"
                value={formData.message} onChange={handleChange}
              ></textarea>
              
              <button 
                type="submit" disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-all shadow-lg shadow-blue-500/20 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"} <FaPaperPlane />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;