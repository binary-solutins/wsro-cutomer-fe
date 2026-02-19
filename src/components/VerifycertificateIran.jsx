import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import FooterSection from './Footer/FooterSection';
import { Search, Check, AlertCircle, AlertTriangle, Shield, Award, Loader } from 'lucide-react';

function CertificateVerification() {
  const [certificateId, setCertificateId] = useState('');
  const [certificateData, setCertificateData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState(null);

  const handleInputChange = (e) => {
    setCertificateId(e.target.value);
  };

  const handleVerify = async () => {
    if (!certificateId.trim()) {
      setError('Please enter a certificate ID');
      return;
    }

    setLoading(true);
    setError(null);
    setCertificateData(null);
    setVerificationStatus('verifying');

    try {
      const response = await axios.post(
        'https://wsroapi.softarotechnolabs.com/api/competitions/get-iran',
        { certificate_u_id: certificateId }
      );

      if (response.data && response.data.data) {
        setTimeout(() => {
          setCertificateData(response.data.data);
          setVerificationStatus('verified');
          setLoading(false);
        }, 1000);
      } else {
        setTimeout(() => {
          setError('Certificate not found. Please check the ID and try again.');
          setVerificationStatus('failed');
          setLoading(false);
        }, 1000);
      }
    } catch (err) {
      setTimeout(() => {
        setError('Verification failed. Your Certifiate is not Verified !');
        setVerificationStatus('failed');
        setLoading(false);
      }, 1000);
      console.error(err);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleVerify();
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-sky-100 flex flex-col items-center pb-16 px-4 pt-[200px]">
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold">Certificate Verification</h1>
                <p className="mt-2 opacity-80">Verify the authenticity of your certificate</p>
              </div>
              <Shield className="w-12 h-12 opacity-90" />
            </div>
          </div>

          <div className="p-8">
            <div className="mb-8">
              <label htmlFor="certificate-id" className="block text-sm font-medium text-gray-700 mb-2">
                Certificate ID
              </label>
              <div className="flex shadow-sm rounded-md">
                <input
                  id="certificate-id"
                  type="text"
                  placeholder="Enter your certificate ID (e.g., WSRO-2023-1234)"
                  value={certificateId}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                  className="flex-1 p-4 border-2 border-r-0 border-gray-300 rounded-l-md focus:ring-blue-500 focus:border-blue-500 focus:outline-none text-lg"
                />
                <button
                  onClick={handleVerify}
                  disabled={loading}
                  className="px-6 bg-blue-600 text-white font-medium rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                >
                  {loading ? (
                    <div className="flex items-center">
                      <Loader className="w-5 h-5 mr-2 animate-spin" />
                      <span>Verifying...</span>
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Search className="w-5 h-5 mr-2" />
                      <span>Verify</span>
                    </div>
                  )}
                </button>
              </div>
            </div>

            {verificationStatus === 'verifying' && (
              <div className="w-full max-w-md mx-auto p-6 bg-blue-50 rounded-lg animate-pulse">
                <div className="flex items-center justify-center mb-4">
                  <Loader className="h-8 w-8 text-blue-600 animate-spin" />
                </div>
                <p className="text-center text-blue-800 font-medium">Verifying certificate...</p>
              </div>
            )}

            {error && (
              <div className="w-full max-w-md mx-auto p-6 bg-red-50 rounded-lg border border-red-100">
                <div className="flex items-center justify-center mb-4">
                  <AlertTriangle className="h-8 w-8 text-red-500" />
                </div>
                <p className="text-center text-red-800 font-medium">{error}</p>
              </div>
            )}

            {certificateData && (
              <div className="fadeIn bg-gradient-to-b from-white to-blue-50 border-2 border-blue-100 rounded-xl p-6 mt-4 shadow-sm">
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-green-100 rounded-full p-3">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-center text-blue-800 mb-2">Certificate Verified</h2>
                <p className="text-center text-gray-500 mb-6">This certificate is authentic and registered in our system</p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="flex flex-col">
                    <div className="mb-4">
                      <h3 className="text-sm font-semibold text-gray-500">FULL NAME</h3>
                      <p className="text-lg font-medium">{certificateData.full_name}</p>
                    </div>
                    <div className="mb-4">
                      <h3 className="text-sm font-semibold text-gray-500">SCHOOL/INSTITUTE</h3>
                      <p className="text-lg font-medium">{certificateData.school_institute}</p>
                    </div>
                    <div className="mb-4">
                      <h3 className="text-sm font-semibold text-gray-500">GRADE/RANK</h3>
                      <div className="flex items-center">
                        <Award className="w-5 h-5 mr-2 text-yellow-500" />
                        <p className="text-lg font-bold text-blue-800">{certificateData.grade_or_winning_rank || 'N/A'}</p>
                      </div>
                    </div>
                    {/* <div className="mb-4">
                      <h3 className="text-sm font-semibold text-gray-500">DATE OF BIRTH</h3>
                      <p className="text-lg font-medium">{certificateData.dob}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500">AGE</h3>
                      <p className="text-lg font-medium">{certificateData.age}</p>
                    </div> */}
                  </div>

                  <div className="flex flex-col">
                    <div className="mb-4">
                      <h3 className="text-sm font-semibold text-gray-500">COURSE/COMPETITION</h3>
                      <p className="text-lg font-medium">{certificateData.course_name_competition_category}</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-gray-500">CERTIFICATE ID</h3>
                      <p className="text-lg font-medium font-mono">{certificateData.certificate_u_id}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 text-center text-gray-600 max-w-lg">
          <h3 className="font-semibold mb-2">Need Help?</h3>
          <p className="text-sm">
            If you cannot find your certificate or have any questions, please contact our support team at <a href="mailto:support@wsro.in" className="text-blue-600 hover:underline">support@wsro.in</a>
          </p>
        </div>
      </div>
      <FooterSection />

      <style jsx>{`
        .fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}

export default CertificateVerification;