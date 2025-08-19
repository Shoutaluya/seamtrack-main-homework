import React from "react";
import Button from "./Button";
import graduationCap from "../assets/graduation-cap.png";
import communicationIcon from "../assets/healthicons_communication.png";
import walletIcon from "../assets/solar_wallet-bold.png";
import picture1 from "../../pictures folder/picture1.jpg";
import howItWorksGirl from "../../pictures folder/how it works girl.jpg.jpg";
import forStudentsParents from "../../pictures folder/for students and for parents mum.jpg";
import forTeachers from "../../pictures folder/for teachers and tutors.jpg";
import getStartedBoy from "../../pictures folder/get started boy.jpg";

const HomeworkBuddies = () => {
  const howItWorksSteps = [
    {
      step: "1",
      title: "Submit Your Question",
      description: "Upload your homework question with any relevant materials or instructions.",
      icon: graduationCap,
    },
    {
      step: "2",
      title: "Get Expert Help",
      description: "Our qualified tutors provide step-by-step solutions and explanations.",
      icon: communicationIcon,
    },
    {
      step: "3",
      title: "Learn & Improve",
      description: "Understand the concepts and improve your academic performance.",
      icon: graduationCap,
    },
  ];

  const whyFeatures = [
    {
      title: "Verified Tutors",
      description: "All our tutors are verified professionals with proven academic credentials.",
      icon: graduationCap,
      bg: "bg-module-blue",
    },
    {
      title: "Fast Response",
      description: "Get help within minutes, not hours. Quick solutions when you need them.",
      icon: communicationIcon,
      bg: "bg-module-yellow",
    },
    {
      title: "Secure Payment",
      description: "Protected transactions with encrypted payment processing and money-back guarantee.",
      icon: walletIcon,
      bg: "bg-module-red",
    },
    {
      title: "Safe Platform",
      description: "Secure environment with privacy protection and monitored interactions.",
      icon: communicationIcon,
      bg: "bg-module-finance",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Column - Text Content */}
            <div className="text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-text-black leading-tight mb-6">
                Get Help. Give Help. <br />
                Learn Better.
              </h1>
              <p className="text-lg md:text-xl text-text-black/70 mb-8">
                Homework Buddies connects students with expert tutors for fast, reliable academic support — anytime, anywhere.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="w-full sm:w-auto px-4 sm:px-8 py-3 text-sm sm:text-base">
                  Submit a Homework Task
                </Button>
                <Button variant="outline" className="w-full sm:w-auto px-4 sm:px-8 py-3 text-sm sm:text-base">
                  Become a Homework Buddy
                </Button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative h-64 md:h-96 lg:h-full rounded-xl overflow-hidden shadow-lg">
              <img
                src={picture1}
                alt="Students learning together"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-black mb-4">
              How It Works
            </h2>
            <p className="text-lg text-text-black/70 max-w-2xl mx-auto">
              Getting help in 3 simple steps - safe, fast and fair
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl order-last lg:order-first">
              <img
                src={howItWorksGirl}
                alt="Student getting help with homework"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Right side - Steps */}
            <div className="space-y-8 order-first lg:order-last">
              {howItWorksSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-text-nav text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-grow pt-2">
                    <h3 className="text-2xl font-bold text-text-black mb-3">
                      {step.title}
                    </h3>
                    <p className="text-lg text-text-black/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Homework Buddies Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-black mb-6">
              Why Choose Homework Buddies?
            </h2>
            <p className="text-xl text-text-black/70 max-w-3xl mx-auto leading-relaxed">
              Safe, fast, and fair - the three pillars of our academic support platform
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyFeatures.map((feature, index) => (
              <div key={index} className={`${feature.bg} rounded-2xl p-8 min-h-[250px] flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-md">
                    <img src={feature.icon} alt={feature.title} className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-black mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-base text-text-black/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Students and Parents Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-10 rounded-2xl shadow-xl border-2 border-text-nav/10">
              <h2 className="text-4xl md:text-5xl font-bold text-text-black mb-6">
                For Students & Parents
              </h2>
              <p className="text-xl text-text-black/80 mb-8 leading-relaxed">
                Empower your learning journey with personalized academic support
              </p>
              <ul className="space-y-4 text-text-black/80 mb-8">
                <li className="flex items-start">
                  <span className="text-text-nav text-2xl mr-4 mt-1">•</span>
                  <span className="text-lg">One-on-one tutoring sessions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-text-nav text-2xl mr-4 mt-1">•</span>
                  <span className="text-lg">Step-by-step problem solving</span>
                </li>
                <li className="flex items-start">
                  <span className="text-text-nav text-2xl mr-4 mt-1">•</span>
                  <span className="text-lg">Progress tracking and reports</span>
                </li>
                <li className="flex items-start">
                  <span className="text-text-nav text-2xl mr-4 mt-1">•</span>
                  <span className="text-lg">Safe and secure platform</span>
                </li>
              </ul>
              <Button className="w-full sm:w-auto px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg">
                Get Started as Student
              </Button>
            </div>

            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl">
              <img
                src={forStudentsParents}
                alt="Students and parents learning together"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* For Teachers Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl order-last lg:order-first">
              <img
                src={forTeachers}
                alt="Teacher helping students"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-xl border-2 border-text-nav/10 order-first lg:order-last">
              <h2 className="text-4xl md:text-5xl font-bold text-text-black mb-6">
                For Teachers
              </h2>
              <p className="text-xl text-text-black/80 mb-8 leading-relaxed">
                Share your expertise and earn extra income by helping students succeed
              </p>
              <ul className="space-y-4 text-text-black/80 mb-8">
                <li className="flex items-start">
                  <span className="text-text-nav text-2xl mr-4 mt-1">•</span>
                  <span className="text-lg">Flexible scheduling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-text-nav text-2xl mr-4 mt-1">•</span>
                  <span className="text-lg">Competitive compensation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-text-nav text-2xl mr-4 mt-1">•</span>
                  <span className="text-lg">Choose your subjects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-text-nav text-2xl mr-4 mt-1">•</span>
                  <span className="text-lg">Make a real impact</span>
                </li>
              </ul>
              <Button className="w-full sm:w-auto px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg">
                Become a Homework Buddy
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Get Started Section */}
      <section className="py-20 px-4 sm:px-8 lg:px-12 bg-gradient-to-r from-hero-start to-hero-end">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-text-black mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-text-black/80 mb-10 leading-relaxed">
                Join thousands of students and tutors who are already part of the Homework Buddies community
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button className="w-full sm:w-auto px-4 sm:px-10 py-3 sm:py-4 text-sm sm:text-lg">
                  Submit Your First Task
                </Button>
                <Button variant="outline" className="w-full sm:w-auto px-4 sm:px-10 py-3 sm:py-4 text-sm sm:text-lg">
                  Apply to be a Tutor
                </Button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl">
              <img
                src={getStartedBoy}
                alt="Student ready to get started"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeworkBuddies;
