import React from 'react';
import { Scale, Shield, Truck, CreditCard, RefreshCw, AlertCircle } from 'lucide-react';
import Navbar from '../../components/Navbar';
import FooterSection from '../../components/Footer/FooterSection';

const TermsSection = ({ icon: Icon, title, children }) => (
    
  <div className="bg-white rounded-xl shadow-lg p-8 mb-8 transform transition-all duration-300 hover:shadow-xl">
    <div className="flex items-center gap-3 mb-6">
      <div className="p-3 bg-[#456990] bg-opacity-10 rounded-lg">
        <Icon className="w-6 h-6 text-[#456990]" />
      </div>
      <h2 className="text-2xl font-bold text-[#456990]">{title}</h2>
    </div>
    <div className="prose prose-lg max-w-none text-gray-600">
      {children}
    </div>
  </div>
);

const Terms = () => {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block p-4 bg-[#456990] bg-opacity-10 rounded-full mb-6">
            <Scale className="w-12 h-12 text-[#456990]" />
          </div>
          <h1 className="text-5xl font-bold text-[#456990] mb-4">Terms & Conditions</h1>
          <p className="text-xl text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        {/* Information Section */}
        <TermsSection icon={Shield} title="Information">
          <p>
            These Terms of Service apply to your use of the WSRO India website (https://wsro.in/) and any linked services.
          </p>
          <p className="mt-4">
            You agree to adhere by these Terms of Service and to comply with all relevant laws and regulations by visiting https://wsro.in/. 
            If you do not agree to these Terms of Service, you are not permitted to use or access this website or any of WSRO India's other services.
          </p>
          <div className="mt-6 p-4 bg-[#F45B69] bg-opacity-10 rounded-lg">
            <p className="text-[#F45B69] font-medium">
              WSRO India reserves the right to review and amend any of these Terms of Service at our sole discretion. 
              Any changes will take effect immediately from the date of publication.
            </p>
          </div>
        </TermsSection>

        {/* Limitation of Use */}
        <TermsSection icon={AlertCircle} title="Limitation of Use">
          <p className="font-medium mb-4">
            By using this website, you warrant on behalf of yourself, your users, and other parties you represent that you will not:
          </p>
          <ul className="space-y-3 list-none pl-0">
            {[
              "Modify, copy, prepare derivative works of, decompile any information contained in the website",
              "Transfer the materials to another person or 'mirror' the materials on any other server",
              "Remove any copyright or other proprietary notations on this website",
              "Use this website or its connected services to send or publish harassing content",
              "Use this website for the purpose of sending unsolicited advertisements or spam",
              "Infringe on any applicable laws or regulations",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <span className="inline-block w-6 h-6 bg-[#456990] text-white rounded-full flex-shrink-0 flex items-center justify-center text-sm">
                  {index + 1}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </TermsSection>

        {/* Delivery & Payment */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <TermsSection icon={Truck} title="Delivery">
            <div className="space-y-4">
              <p>
                The delivery fee charged will vary depending on the product category and delivery location.
              </p>
              <p>
                Same day delivery is available for Selected Products and Selected Locations only.
              </p>
              <p>
                Goods will be delivered all over the world. Estimated delivery Period varies by location.
              </p>
            </div>
          </TermsSection>

          <TermsSection icon={CreditCard} title="Payment">
            <div className="space-y-4">
              <p>
                We accept payments via Razorpay payments gateway.
              </p>
              <p>
                At the time of payment, you will be directed to the secure payment gateway.
              </p>
              <div className="p-3 bg-red-50 rounded-lg text-red-600 mt-4">
                <p className="font-medium">Note: Cash On Delivery (COD) is not available.</p>
              </div>
            </div>
          </TermsSection>
        </div>

        {/* Exchange & Refund */}
        <TermsSection icon={RefreshCw} title="Exchange & Refund Policy">
          <div className="space-y-6">
            <p>
              Though we strive to give you a great customer experience each time you shop with us, 
              if you are unsatisfied with your purchase, you could exchange the item according to the following conditions.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-xl space-y-4">
              <h3 className="text-xl font-semibold text-[#F45B69]">Exchange Process</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#F45B69] rounded-full"></div>
                  <span>Call our customer care number if you're not satisfied with your purchase</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#F45B69] rounded-full"></div>
                  <span>Electrical items cannot be exchanged if the seal box is opened</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#F45B69] rounded-full"></div>
                  <span>All exchanges are subject to pre-examination by our technical staff</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#456990] bg-opacity-5 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-[#456990] mb-4">Warranty Information</h3>
              <p>
                Any item covered under warranty will have details disclosed on the product's description page. 
                We maintain absolute discretion in accepting or refusing any item under Exchange or Return and Refund Policy.
              </p>
            </div>
          </div>
        </TermsSection>
      </div>
    </div>
    <FooterSection />
    </>
  );
};

export default Terms;