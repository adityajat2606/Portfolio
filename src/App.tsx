import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Github, Linkedin, Mail, Phone, ChevronDown, ExternalLink, Briefcase, GraduationCap, Award, Code, User, ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dark to-dark-lighter text-gray-100">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center relative px-4 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-primary/10 rounded-full"
              style={{
                width: Math.random() * 300 + 50,
                height: Math.random() * 300 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center relative z-10"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-primary/50 shadow-lg shadow-primary/20"
          >
          <img
              src="/21BCE11275.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
            
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent"
            >
              Aditya
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-r from-secondary via-pink-500 to-primary bg-clip-text text-transparent"
            >
              Choudhary
            </motion.span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-400 mb-8"
          >
            <span className="text-primary">Computer Science</span> Engineer
          </motion.p>
          <div className="flex gap-4 justify-center mb-12">
            <SocialLink href="https://github.com/adityajat2606" icon={<Github />} label="GitHub" />
            <SocialLink href="https://www.linkedin.com/in/aditya-choudhary-57a986229/" icon={<Linkedin />} label="LinkedIn" />
            <SocialLink href="mailto:adityajat2606@gmail.com" icon={<Mail />} label="Email" />
            <SocialLink href="tel:8003366240" icon={<Phone />} label="Phone" />
          </div>
        </motion.div>
        <Link to="about" smooth={true} className="absolute bottom-8 cursor-pointer">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-primary hover:text-secondary transition-colors"
          >
            <ChevronDown size={32} />
          </motion.div>
        </Link>
      </section>

      {/* About Section */}
      <Section id="about" title="About Me" icon={<User />}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-square rounded-2xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800"
                alt="Coding"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="absolute -bottom-4 -right-4 bg-dark-lighter p-4 rounded-lg shadow-xl"
            >
              <p className="text-primary font-bold text-xl">8.60</p>
              <p className="text-sm text-gray-400">CGPA</p>
            </motion.div>
          </div>
          <div className="space-y-4">
            <p className="text-gray-300 leading-relaxed">
              I'm a passionate Computer Science Engineering student at Vellore Institute of Technology, Bhopal. With a strong academic record and hands-on experience in various tech domains, I'm constantly pushing the boundaries of what's possible in software development.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <Stat label="Projects Completed" value="10+" />
              <Stat label="Technologies" value="15+" />
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" title="Experience" icon={<Briefcase />}>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary" />
          <ExperienceCard
            title="Coding Studio"
            role="Entrepreneurship"
            date="March 2022 - September 2022"
            points={[
              "Worked as a marketing member with the position of Entrepreneur, increasing brand awareness by 25%",
              "Generated 30+ new referrals through targeted marketing strategies"
            ]}
            image="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400"
          />
          <ExperienceCard
            title="Chegg"
            role="Remote Tutor"
            date="April 2022 - May 2024"
            points={[
              "Resolved 300+ Chemistry queries on Chegg Remote, achieving a 95% student comprehension rate",
              "Managed 300+ student inquiries with prompt, professional responses"
            ]}
            image="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400"
          />
          <ExperienceCard
            title="Pawzzitive Welfare Foundation"
            role="Business Development Intern"
            date="November 2024 - January 2025"
            points={[
              "Contributed to animal welfare initiatives and community outreach",
              "Assisted in organizing awareness campaigns and fundraising events",
              "Collaborated with volunteers for execution of welfare programs"
            ]}
            image="https://raw.githubusercontent.com/adityajat2606/Portfolio/main/public/download.jpg"
          />
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Projects" icon={<Code />}>
        <div className="grid md:grid-cols-2 gap-6">
          <ProjectCard
            title="Resource-Tracker"
            tech="AWS, Linux, Python"
            description="Automated AWS resource monitoring system"
            points={[
              "Engineered automated script for AWS resource monitoring",
              "Optimized data collection and analysis processes"
            ]}
            image="https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400"
            github="https://github.com/adityajat2606/Resource-Tracker"
          />
          <ProjectCard
            title="Home Security With Facial Recognition"
            tech="Android Studio, Flutter, Dart"
            description="AI-powered home security system"
            points={[
              "Developed security system with 85% unauthorized access reduction",
              "Implemented real-time notifications via Firebase FCM"
            ]}
            image="https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=400"
            github="https://github.com/adityajat2606/StarSecure"
          />
          <ProjectCard
            title="Drug De-Addiction System"
            tech="ReactJs, MongoDB"
            description="Full-stack rehabilitation platform"
            points={[
              "Built scalable platform with interactive resources",
              "Increased resource accessibility by 30%"
            ]}
            image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400"
            github="https://github.com/adityajat2606/Drug-De-Addiction-System"
          />
          <ProjectCard
            title="Virtual Mouse"
            tech={["Gesture Recognition", "Voice Assistant"]}
            description="Gesture-based system for mouse control and voice commands."
            points={[
              "Cursor movement & click operations",
              "Drag & drop functionality",
              "Volume & brightness control",
              "Voice-activated commands",
              "Integrated PyAudio & pywin32"
            ]}
            image="https://raw.githubusercontent.com/adityajat2606/Portfolio/main/public/mouse.jpg"
            github="https://github.com/adityajat2606/Virtual-Mouse"
          />

        </div>
      </Section>

      {/* Education Section */}
      <Section id="education" title="Education" icon={<GraduationCap />}>
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-dark-lighter rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800"
                alt="University"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold text-primary mb-2">Vellore Institute of Technology</h3>
              <p className="text-xl text-gray-300 mb-1">B.Tech in Computer Science and Engineering</p>
              <p className="text-gray-400 mb-4">Bhopal, India | Expected May 2025</p>
              <div className="inline-block bg-primary/20 px-4 py-2 rounded-full">
                <p className="text-primary font-semibold">CGPA: 8.60</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-dark-lighter rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <img
                src="https://raw.githubusercontent.com/adityajat2606/Portfolio/main/public/high%20school.jpg"
                alt="High School"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold text-primary mb-2">Krishna Vidhya Mandir Sr. Sec. School</h3>
              <p className="text-xl text-gray-300 mb-1">Higher Secondary Education (12th)</p>
              <p className="text-gray-400 mb-4">Alwar, India | Completed 2021</p>
              <div className="inline-block bg-primary/20 px-4 py-2 rounded-full">
                <p className="text-primary font-semibold">Percentage: 92.20%</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Achievements Section */}
      <Section id="achievements" title="Achievements" icon={<Award />}>
        <div className="grid md:grid-cols-2 gap-6">
          <AchievementCard
            title="CodeKaze Achievement"
            description="Secured All India Rank 222 in Coding Studio (March 22)"
            icon={<Code className="w-8 h-8" />}
          />
          <AchievementCard
            title="Google Learn To Earn"
            description="Enhanced SEO and analytics expertise, achieving 20% improvement in website conversion rates"
            icon={<ExternalLink className="w-8 h-8" />}
          />
          <AchievementCard
            title="NPTEL Cloud Computing"
            description="Scored 71% in Elite Certificate from IIT Kharagpur"
            icon={<Award className="w-8 h-8" />}
          />
          <AchievementCard
            title="Salesforce AI Associate Certified"
            description="Validated AI knowledge & responsible AI practices with Salesforce"
            icon={<Brain className="w-8 h-8" />} 
          />
        </div>
      </Section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <div className="bg-dark-lighter rounded-2xl p-8 md:p-12 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <ContactCard
                icon={<Mail className="w-6 h-6" />}
                title="Email"
                value="adityajat2606@gmail.com"
                href="mailto:adityajat2606@gmail.com"
              />
              <ContactCard
                icon={<Phone className="w-6 h-6" />}
                title="Phone"
                value="8003366240"
                href="tel:8003366240"
              />
              <ContactCard
                icon={<Linkedin className="w-6 h-6" />}
                title="LinkedIn"
                value="Connect with me"
                href="https://www.linkedin.com/in/aditya-choudhary-57a986229/"
              />
              <ContactCard
                icon={<Github className="w-6 h-6" />}
                title="GitHub"
                value="View my work"
                href="https://github.com/adityajat2606"
              />
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

const Section = ({ id, title, icon, children }) => (
  <section id={id} className="py-20 px-4">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-3 mb-12"
      >
        <span className="text-primary">{icon}</span>
        <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
      </motion.div>
      {children}
    </div>
  </section>
);

const SocialLink = ({ href, icon, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="group relative bg-dark-lighter p-4 rounded-full hover:bg-primary/20 transition-colors"
  >
    <span className="text-primary group-hover:text-secondary transition-colors">
      {icon}
    </span>
    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-sm whitespace-nowrap">
      {label}
    </span>
  </motion.a>
);

const ExperienceCard = ({ title, role, date, points, image }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="relative pl-16 pb-12"
  >
    <div className="absolute left-0 top-0 w-16 h-16 rounded-full overflow-hidden border-4 border-dark bg-dark-lighter">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="bg-dark-lighter p-6 rounded-lg">
      <h3 className="text-xl font-semibold text-primary">{title}</h3>
      <p className="text-gray-400 mb-4">{role} | {date}</p>
      <ul className="space-y-2">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-2 text-gray-300">
            <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const ProjectCard = ({ title, tech, description, points, image }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className="group bg-dark-lighter rounded-xl overflow-hidden"
  >
    <div className="relative h-48 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-lighter to-transparent" />
    </div>
    <div className="p-6">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-semibold text-primary group-hover:text-secondary transition-colors">
          {title}
        </h3>
        <span className="text-sm text-gray-400 bg-dark/50 px-2 py-1 rounded">
          {tech}
        </span>
      </div>
      <p className="text-gray-300 mb-4">{description}</p>
      <ul className="space-y-2">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-2 text-gray-300">
            <ArrowRight className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const AchievementCard = ({ title, description, icon }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className="bg-dark-lighter p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-colors"
  >
    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
      <span className="text-primary">{icon}</span>
    </div>
    <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </motion.div>
);

const ContactCard = ({ icon, title, value, href }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.02 }}
    className="block p-6 bg-dark/50 rounded-xl hover:bg-dark/70 transition-colors"
  >
    <div className="flex items-center gap-4">
      <div className="bg-primary/10 p-3 rounded-full">
        <span className="text-primary">{icon}</span>
      </div>
      <div>
        <h3 className="text-sm text-gray-400">{title}</h3>
        <p className="text-gray-200">{value}</p>
      </div>
    </div>
  </motion.a>
);

const Stat = ({ label, value }) => (
  <div className="bg-dark/50 p-4 rounded-lg text-center">
    <p className="text-2xl font-bold text-primary">{value}</p>
    <p className="text-sm text-gray-400">{label}</p>
  </div>
);

export default App;
