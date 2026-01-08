import { Lightbulb, Shield, Award } from 'lucide-react';
import Image from 'next/image';

export default function DigitizingLandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 flex flex-col justify-center">
              <h1 className="text-5xl lg:text-5xl font-bold text-gray-900 leading-tight text-center lg:text-left">
                Precision Digitizing for Unmatched Visuals
              </h1>
              <p className="text-gray-600 text-xl lg:text-lg text-center lg:text-left">
                Artdigitizing transforms your designs into flawless embroidery files, crisp vector art, and captivating custom creations.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-md transition-colors duration-200">
                Get Started Today
              </button>
            </div>

            {/* Right Image */}
            <div className="relative">
              <Image
              width={50}
              height={50}
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=600&fit=crop"
                alt="Professional working at desk"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="relative">
              <Image
              width={50}
              height={50}
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=600&fit=crop"
                alt="Modern office workspace"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>

            {/* Right Content */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Our Story: Crafting Digital Excellence
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Founded in 2010, Artdigitizing emerged from a passion for bringing designs to life with precision and creativity. What began with a commitment to mastering the art of embroidery digitizing, evolved into a service that perfectly captured the client&apos;s vision. Over the years, we expanded our expertise, embracing raster-to-vector conversions, and bespoke design services to become a comprehensive hub for digital artistry. Today, we stand on continuous innovation, unwavering quality, and a deep dedication to our client&apos;s success.
              </p>
              <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-md font-semibold">
                Founded in 2010
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Mission: Empowering Creativity with Precision
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At Artdigitizing, our mission is to empower businesses and individuals by providing exceptional digital art services that transform concepts into tangible, high-quality assets. We are committed to precision, innovation, and client satisfaction, ensuring every project reflects the highest standards of craftsmanship.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 place-items-center">
            {/* Innovation */}
            <div className="bg-gray-50 px-6 py-8 w-full max-w-sm rounded-xl text-center space-y-4">
              <div className="flex justify-center">
                <div className="bg-white p-4 rounded-full">
                  <Lightbulb className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                Continuously embracing new technologies and creative approaches to deliver cutting-edge solutions.
              </p>
            </div>

            {/* Integrity */}
            <div className="bg-gray-50 px-6 py-8 w-full max-w-sm rounded-xl text-center space-y-4">
              <div className="flex justify-center">
                <div className="bg-white p-4 rounded-full">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Integrity</h3>
              <p className="text-gray-600 leading-relaxed">
                Operating with transparency, honesty, and a strong commitment to ethical practices and honest dealings.
              </p>
            </div>

            {/* Excellence */}
            <div className="bg-gray-50 px-6 py-8 w-full max-w-sm rounded-xl text-center space-y-4">
              <div className="flex justify-center">
                <div className="bg-white p-4 rounded-full">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                Striving for perfection in every detail, ensuring the highest quality in all our projects and services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-16">
            Our Services: Digital Art Solutions
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Embroidery Digitizing */}
            <div className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-50 p-4 rounded-full">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Embroidery Digitizing</h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Transform your designs into high-quality embroidery files with precision and detail, tailored for all fabric types.
              </p>
              <button className="text-blue-600 font-semibold text-sm hover:text-blue-700">
                Learn More
              </button>
            </div>

            {/* Raster to Vector */}
            <div className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-50 p-4 rounded-full">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Raster to Vector</h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Convert any low-resolution image into a crisp, scalable vector format, perfect for printing and branding.
              </p>
              <button className="text-blue-600 font-semibold text-sm hover:text-blue-700">
                Learn More
              </button>
            </div>

            {/* Custom Design */}
            <div className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-50 p-4 rounded-full">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Design</h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Bring your unique ideas to life with bespoke design solutions tailored to your brand and creative requirements.
              </p>
              <button className="text-blue-600 font-semibold text-sm hover:text-blue-700">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-16">
            Meet Our Dedicated Team
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {/* Eleanor Vance */}
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden">
                  <Image
                  width={50}
                  height={50}
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop"
                    alt="Eleanor Vance"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Eleanor Vance</h3>
              <p className="text-blue-600 text-sm font-medium">Founder & Lead Digitizer</p>
            </div>

            {/* Marsus Thorne */}
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden">
                  <Image
                  width={50}
                  height={50}
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
                    alt="Marsus Thorne"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Marsus Thorne</h3>
              <p className="text-blue-600 text-sm font-medium">Head of Vector Art</p>
            </div>

            {/* Sophie Chen */}
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden">
                  <Image
                  width={50}
                  height={50}
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop"
                    alt="Sophie Chen"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Sophie Chen</h3>
              <p className="text-blue-600 text-sm font-medium">Creative Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-14">
            Our Journey Through the Years
          </h2>

          <div className="divide-y divide-gray-200">
            {/* 2010 */}
            <div className="flex gap-6 py-6">
              <div className="w-20 text-right flex-shrink-0">
                <span className="text-blue-600 font-semibold">2010</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Artdigitizing founded with a vision to revolutionize embroidery digitizing services.
              </p>
            </div>

            {/* 2014 */}
            <div className="flex gap-6 py-6">
              <div className="w-20 text-right flex-shrink-0">
                <span className="text-blue-600 font-semibold">2014</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Expanded service offerings to include high-quality raster to vector conversions.
              </p>
            </div>

            {/* 2018 */}
            <div className="flex gap-6 py-6">
              <div className="w-20 text-right flex-shrink-0">
                <span className="text-blue-600 font-semibold">2018</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Launched custom design services, empowering clients with bespoke creative solutions.
              </p>
            </div>

            {/* 2022 */}
            <div className="flex gap-6 py-6">
              <div className="w-20 text-right flex-shrink-0">
                <span className="text-blue-600 font-semibold">2022</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Implemented advanced AI-powered tools to enhance precision and turnaround times across all services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-16">
            What Our Clients Say About Us
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="text-blue-600 text-5xl font-serif mb-4">&ldquo;</div>
              <p className="text-gray-600 italic mb-6 leading-relaxed">
                Artdigitizing consistently delivers outstanding quality. Their embroidery files are always perfect, and their team is incredibly responsive. They&apos;ve become an indispensable partner for our business.
              </p>
              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-bold text-gray-900">Sarah Jenkins</h4>
                <p className="text-sm text-gray-500">CEO, Stellar Threads</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="text-blue-600 text-5xl font-serif mb-4">&ldquo;</div>
              <p className="text-gray-600 italic mb-6 leading-relaxed">
                The vector conversion service is top-notch. We&apos;ve sent them challenging, intricate logos, and they always return flawless, print-ready files. Highly recommend for any project!
              </p>
              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-bold text-gray-900">David Rodriguez</h4>
                <p className="text-sm text-gray-500">Marketing Director, Urban Canvas</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="text-blue-600 text-5xl font-serif mb-4">&ldquo;</div>
              <p className="text-gray-600 italic mb-6 leading-relaxed">
                Our custom design project with Artdigitizing exceeded all expectations. They understood our vision perfectly and brought it to life with creativity and professionalism. An absolute pleasure to work with!
              </p>
              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-bold text-gray-900">Emily White</h4>
                <p className="text-sm text-gray-500">Owner, Bespoke Crafts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Bring Your Designs to Life?
          </h2>
          <p className="text-blue-100 text-lg mb-4 leading-relaxed">
            Get a personalized quote for your embroidery digitizing, vector art, or custom design project today.
          </p>
          <p className="text-blue-100 text-lg mb-8 leading-relaxed">
            Experience the Artdigitizing difference with unmatched quality and service.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-md transition-colors duration-200 text-lg">
            Request Your Free Quote
          </button>
        </div>
      </section>
    </div>
  );
}