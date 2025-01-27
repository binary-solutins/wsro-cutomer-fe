import React, { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, CheckCircle, Cog } from 'lucide-react';

const SuccessMessage = ({ onClose }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="text-center p-4 md:p-8 relative overflow-hidden"
  >
    {/* Background Animation */}
    <div className="absolute inset-0 -z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20" />
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      </motion.div>
    </div>

    {/* Success Icon Animation */}
    <div className="relative mb-8 h-32 md:h-40">
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ 
          type: "spring",
          damping: 10,
          stiffness: 100,
          duration: 0.8
        }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="relative">
          {/* Outer Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-dashed border-primary/30"
          />
          {/* Inner Ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute inset-4 rounded-full border-4 border-dotted border-secondary/30"
          />
          {/* Robot Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="absolute inset-8 flex items-center justify-center"
          >
            <Bot className="w-full h-full text-primary" />
          </motion.div>
        </div>
      </motion.div>
      
      {/* Success Checkmark */}
      <motion.div
        initial={{ scale: 0, x: 20 }}
        animate={{ scale: 1, x: 0 }}
        transition={{ delay: 0.5, type: "spring" }}
        className="absolute top-0 right-1/4 md:right-1/3"
      >
        <div className="bg-green-500 rounded-full p-2">
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
      </motion.div>
    </div>

    {/* Content */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="max-w-md mx-auto"
    >
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-2xl md:text-3xl font-bold text-gray-800 mb-4"
      >
        Welcome to the Future!
      </motion.h3>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-gray-600 mb-8"
      >
        Your journey into robotics excellence begins now! Check your email for the next steps in your competition adventure.
      </motion.p>

      {/* Next Steps Cards */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
      >
        {[
          { icon: "📧", text: "Check your email for confirmation details" },
          { icon: "🤖", text: "Join Our Instagram community" },
          { icon: "📋", text: "Review competition guidelines & schedule" }
        ].map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + index * 0.1 }}
            className="bg-white/50 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-gray-100"
          >
            <div className="text-2xl mb-2">{step.icon}</div>
            <p className="text-sm text-gray-600">{step.text}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          onClick={onClose}
          className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300 font-semibold flex items-center justify-center gap-2 group"
        >
          <span>Start Your Journey</span>
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="inline-block"
          >
            →
          </motion.span>
        </motion.button>
      </div>
    </motion.div>
  </motion.div>
);

const LoadingOverlay = () => (
  <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] flex items-center justify-center">
    <div className="text-center">
      <div className="relative">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-24 h-24 text-primary"
        >
          <Cog className="w-full h-full" />
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-secondary"
        >
          <Cog className="w-full h-full" />
        </motion.div>
      </div>
      <motion.h3 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-6 text-xl font-bold text-white"
      >
        Processing Registration
      </motion.h3>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-2 text-gray-300"
      >
        Please wait while we secure your spot...
      </motion.p>
    </div>
  </div>
);

const RegistrationModal = ({ event, onClose }) => {
  const [teamName, setTeamName] = useState('');
  const [leaderName, setLeaderName] = useState('');
  const [leaderEmail, setLeaderEmail] = useState('');
  const [leaderAge, setLeaderAge] = useState();
  const [leaderSchool, setLeaderSchool] = useState('');
  const [leaderTotalStudents, setLeaderTotalStudents] = useState();
  const [leaderAddress, setLeaderAddress] = useState('');
  const [leaderCity, setLeaderCity] = useState('');
  const [leaderState, setLeaderState] = useState('');
  const [leaderZipcode, setLeaderZipcode] = useState('');
  const [leaderPhone, setLeaderPhone] = useState('');
  const [coachName, setCoachName] = useState('');
  const [coachOrganization, setCoachOrganization] = useState('');
  const [coachPhone, setCoachPhone] = useState('');
  const [coachEmail, setCoachEmail] = useState('');
  const [emailCheckError, setEmailCheckError] = useState('');
  const [existingEmails, setExistingEmails] = useState([]);
  const [paymentInProgress, setPaymentInProgress] = useState(false);
  const [paymentError, setPaymentError] = useState('');
  const [paymentTimeout, setPaymentTimeout] = useState(null);
  const [razorpayInstance, setRazorpayInstance] = useState(null);
  const [members, setMembers] = useState([]);

  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState({
    status: 'idle', 
    paymentId: null,
    error: null
  });
  const tshirtSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const cleanupPayment = useCallback(() => {
    if (paymentTimeout) {
      clearTimeout(paymentTimeout);
      setPaymentTimeout(null);
    }
    if (razorpayInstance) {
      razorpayInstance.close();
      setRazorpayInstance(null);
    }
    setIsProcessing(false);
    setPaymentInProgress(false);
  }, [paymentTimeout, razorpayInstance]);

  useEffect(() => {
    return () => {
      cleanupPayment();
    };
  }, [cleanupPayment]);

  const addMember = () => {
    if (members.length < 4) {
      setMembers([...members, { name: '', email: '', age: '', phone: '', tshirtSize: '' }]);
    }
  };

  const removeMember = (index) => {
    setMembers(members.filter((_, i) => i !== index));
  };

  const updateMember = (index, field, value) => {
    const newMembers = [...members];
    newMembers[index][field] = value;
    setMembers(newMembers);
  };

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const checkEmails = async () => {
    const allEmails = [
      leaderEmail,
      coachEmail,
      ...members.map(member => member.email)
    ].filter(Boolean);
  
    try {
      const response = await fetch('https://wsro-backend.onrender.com/api/auth/check-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          emails: allEmails,
          competition_id: event.id,
          team_name: teamName  // Add this line
        }),
      });
      const data = await response.json();

      if (data.existingEmails && data.existingEmails.length > 0) {
        const uniqueEmails = [...new Set(data.existingEmails)];
        setEmailCheckError('The following email addresses are already registered for this competition: ' + uniqueEmails.join(', '));
        setExistingEmails(uniqueEmails);
        return false;
      }

      setEmailCheckError('');
      setExistingEmails([]);
      return true;
    } catch (error) {
      console.error('Email check error:', error);
      setEmailCheckError('Failed to verify email addresses. Please try again.');
      return false;
    }
  };

  const handleRegistration = useCallback(async (paymentId) => {
    try {
      const registrationData = {
        competition_id: event.id,
        event_id: event.event_id,
        team_name: teamName,
        leader_name: leaderName,
        leader_email: leaderEmail,
        leader_age: leaderAge,
        leader_school: leaderSchool,
        leader_total_students: leaderTotalStudents,
        leader_address: leaderAddress,
        leader_city: leaderCity,
        leader_state: leaderState,
        leader_zipcode: leaderZipcode,
        leader_phone: leaderPhone,
        coach_mentor_name: coachName,
        coach_mentor_organization: coachOrganization,
        coach_mentor_phone: coachPhone,
        coach_mentor_email: coachEmail,
        member_names: members.map(m => m.name),
        member_ages: members.map(m => m.age),
        member_emails: members.map(m => m.email),
        member_phones: members.map(m => m.phone),
        member_tshirt_sizes: members.map(m => m.tshirtSize),
        payment_id: paymentId
      };

      const registerResponse = await fetch('https://wsro-backend.onrender.com/api/competitions/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationData),
      });

      if (!registerResponse.ok) {
        const errorData = await registerResponse.json();
        throw new Error(errorData.message || 'Registration failed');
      }

      await registerResponse.json();
      setIsSuccess(true);
      return true;
    }  catch (error) {
      console.error('Registration error:', error);
      setPaymentStatus({
        status: 'error',
        paymentId,
        error: `Registration failed: ${error.message}. Payment ID: ${paymentId}`
      });
      return false;
    } finally {
      setIsProcessing(false);
      setPaymentInProgress(false);
    }
  }, [event.id, event.event_id, teamName, leaderName, leaderEmail]);
const handlePaymentSuccess = useCallback(async (response) => {
    if (paymentTimeout) {
      clearTimeout(paymentTimeout);
      setPaymentTimeout(null);
    }

    setPaymentStatus({
      status: 'processing',
      paymentId: response.razorpay_payment_id,
      error: null
    });

    try {
      let retries = 3;
      let success = false;
      
      while (retries > 0 && !success) {
        try {
          success = await handleRegistration(response.razorpay_payment_id);
          if (success) break;
        } catch (error) {
          console.error(`Registration attempt failed. Retries left: ${retries - 1}`, error);
          retries--;
          if (retries === 0) throw error;
          await new Promise(resolve => setTimeout(resolve, 2000));
        }
      }

      if (success) {
        setPaymentStatus({
          status: 'success',
          paymentId: response.razorpay_payment_id,
          error: null
        });
        setIsSuccess(true);
       
      }
    } catch (error) {
      console.error('Final registration error:', error);
      setPaymentStatus({
        status: 'error',
        paymentId: response.razorpay_payment_id,
        error: `Registration failed after payment. Please contact support with Payment ID: ${response.razorpay_payment_id}`
      });
    } finally {
      cleanupPayment();
    }
  }, [handleRegistration, paymentTimeout, cleanupPayment]);

  const handlePaymentFailure = useCallback((response) => {
    cleanupPayment();
    setPaymentStatus({
      status: 'error',
      paymentId: response.error?.metadata?.payment_id,
      error: `Payment failed: ${response.error?.description || 'Unknown error'}`
    });
  }, [cleanupPayment]);

  const initializeRazorpay = useCallback(async () => {
    try {
      const res = await loadRazorpay();
  
      if (!res) {
        throw new Error("Razorpay SDK failed to load");
      }
  
      // Create order via backend
      const orderResponse = await fetch("https://wsro-backend.onrender.com/razorpay/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: event.fees,
          currency: "INR",
          receipt: `team_${teamName}_${Date.now()}`,
          notes: {
            team_name: teamName,
            event_name: event.name,
            event_id: event.id,
          },
        }),
      });
  
      if (!orderResponse.ok) {
        throw new Error("Failed to create Razorpay order");
      }
  
      const orderData = await orderResponse.json();
  
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        order_id: orderData.order.id, 
        amount: orderData.order.amount,
        currency: orderData.order.currency,
        name: "WSRO Robotics",
        description: `Registration for ${event.name}`,
        handler: async function(response) {
          try {
           
            const verifyResponse = await fetch("https://wsro-backend.onrender.com/razorpay/verify-payment", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature
              }),
            });
  
            if (!verifyResponse.ok) {
              const errorData = await verifyResponse.json();
              throw new Error(errorData.message || "Payment verification failed");
            }
  
            const verifyData = await verifyResponse.json();
            if (verifyData.success) {
              await handlePaymentSuccess(response);
            } else {
              throw new Error("Payment verification failed");
            }
          } catch (error) {
            console.error("Payment verification error:", error);
            handlePaymentFailure({
              error: {
                description: error.message,
                metadata: { payment_id: response.razorpay_payment_id }
              }
            });
          }
        },
        modal: {
          ondismiss: () => {
            cleanupPayment();
          },
          escape: false,
          animation: true,
          backdropClose: false,
        },
        prefill: {
          name: leaderName,
          email: leaderEmail,
          contact: leaderPhone,
        },
        theme: {
          color: "#2563eb",
        },
        retry: {
          enabled: true,
          max_count: 3,
        },
      };
  
      const paymentObject = new window.Razorpay(options);
      setRazorpayInstance(paymentObject);
  
      const timeout = setTimeout(() => {
        cleanupPayment();
        setPaymentStatus({
          status: "error",
          paymentId: null,
          error: "Payment timed out. Please try again.",
        });
      }, 5 * 60 * 1000);
  
      setPaymentTimeout(timeout);
      paymentObject.open();
      setPaymentInProgress(true);
    } catch (error) {
      console.error("Razorpay initialization error:", error);
      cleanupPayment();
      setPaymentStatus({
        status: "error",
        paymentId: null,
        error: "Failed to initialize payment. Please try again.",
      });
    }
  }, [
    event,
    leaderName,
    leaderEmail,
    leaderPhone,
    teamName,
    handlePaymentSuccess,
    handlePaymentFailure,
    cleanupPayment,
  ]);
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setEmailCheckError('');
    setPaymentStatus({ status: 'idle', paymentId: null, error: null });

    try {
      const emailsValid = await checkEmails();
      
      if (!emailsValid) {
        setIsProcessing(false);
        return;
      }

      const razorpay = await initializeRazorpay();
      razorpay.open();
      setPaymentInProgress(true);
    } catch (error) {
      console.error('Payment initialization error:', error);
      setPaymentStatus({
        status: 'error',
        paymentId: null,
        error: 'Failed to initialize payment. Please try again.'
      });
      cleanupPayment();
    }
  };

  return (
    <AnimatePresence>
      {isProcessing && <LoadingOverlay />}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
        >
          <div className="p-6">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Register for {event.name}</h2>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full"
                disabled={paymentInProgress}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {isSuccess ? (
              <SuccessMessage onClose={onClose} />
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {emailCheckError && (
                  <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
                    {emailCheckError}
                  </div>
                )}
                
                {/* {paymentStatus.status === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
                    <p>{paymentStatus.error}</p>
                    {paymentStatus.paymentId && (
                      <p className="mt-2 text-sm">Payment ID: {paymentStatus.paymentId}</p>
                    )}
                  </div>
                )} */}

                {paymentStatus.status === 'processing' && (
                <LoadingOverlay />
                )}

                {/* Team Information */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Team Information</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="col-span-1">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Team Name
                      </label>
                      <input
                        type="text"
                        value={teamName}
                        onChange={(e) => setTeamName(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Leader Information */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">Team Captain Information</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                       Captain Name
                      </label>
                      <input
                        type="text"
                        value={leaderName}
                        onChange={(e) => setLeaderName(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Captain Email
                      </label>
                      <input
                        type="email"
                        value={leaderEmail}
                        onChange={(e) => setLeaderEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Captain Age
                      </label>
                      <input
                        type="number"
                        value={leaderAge}
                        onChange={(e) => setLeaderAge(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Captain Phone/Mobile Number
                      </label>
                      <input
                        type="tel"
                        value={leaderPhone}
                        onChange={(e) => setLeaderPhone(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                      Captain School /Institute/ University / Organization
                      </label>
                      <input
                        type="text"
                        value={leaderSchool}
                        onChange={(e) => setLeaderSchool(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Total Number of Students
                      </label>
                      <input
                        type="number"
                        value={leaderTotalStudents}
                        onChange={(e) => setLeaderTotalStudents(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      />
                    </div>
                    <div className="col-span-1">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                      Captain Full Address
                      </label>
                      <input
                        type="text"
                        value={leaderAddress}
                        onChange={(e) => setLeaderAddress(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        City
                      </label>
                      <input
                        type="text"
                        value={leaderCity}
                        onChange={(e) => setLeaderCity(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        State
                      </label>
                      <input
                        type="text"
                        value={leaderState}
                        onChange={(e) => setLeaderState(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Zipcode
                      </label>
                      <input
                        type="text"
                        value={leaderZipcode}
                        onChange={(e) => setLeaderZipcode(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Coach Information */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">Coach/Mentor Information</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Coach/Mentor Name
                      </label>
                      <input
                        type="text"
                        value={coachName}
                        onChange={(e) => setCoachName(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                      Coach/Mentor Organization
                      </label>
                      <input
                        type="text"
                        value={coachOrganization}
                        onChange={(e) => setCoachOrganization(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                      Coach/Mentor Phone/Mobile Number
                      </label>
                      <input
                        type="tel"
                        value={coachPhone}
                        onChange={(e) => setCoachPhone(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                      Coach/Mentor Email Address
                      </label>
                      <input
                        type="email"
                        value={coachEmail}
                        onChange={(e) => setCoachEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Team Members */}
                <div className="space-y-4">
  <h3 className="text-lg font-semibold">Team Members</h3>

  <div className="space-y-6">
    {members.map((member, index) => (
      <div key={index}>
        <div className="bg-gray-50 p-6 rounded-lg space-y-4">
          <div className="flex justify-between items-center">
            <h4 className="font-medium">Member {index + 1}</h4>
            {index > 0 && (
              <button
                type="button"
                onClick={() => removeMember(index)}
                className="text-red-500 hover:text-red-600"
              >
                Remove
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                value={member.name}
                onChange={(e) => updateMember(index, 'name', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={member.email}
                onChange={(e) => updateMember(index, 'email', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Age
              </label>
              <input
                type="number"
                value={member.age}
                onChange={(e) => updateMember(index, 'age', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mobile Number
              </label>
              <input
                type="tel"
                value={member.phone}
                onChange={(e) => updateMember(index, 'phone', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                T-Shirt Size
              </label>
              <select
                value={member.tshirtSize}
                onChange={(e) => updateMember(index, 'tshirtSize', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              >
                <option value="">Select Size</option>
                {tshirtSizes.map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        
        {/* Add Member button after each member form except when max members reached */}
        {index === members.length - 1 && members.length < 4 && (
          <div className="mt-4 flex justify-center">
            <button
              type="button"
              onClick={addMember}
              className="inline-flex items-center px-4 py-2 text-primary hover:text-secondary"
            >
              <span className="mr-2">+</span> Add Another Member
            </button>
          </div>
        )}
      </div>
    ))}

    {/* Show Add Member button if no members yet */}
    {members.length === 0 && (
      <div className="flex justify-center">
        <button
          type="button"
          onClick={addMember}
          className="inline-flex items-center px-4 py-2 text-primary hover:text-secondary"
        >
          <span className="mr-2">+</span> Add Member
        </button>
      </div>
    )}
  </div>
</div>

                <button
                  type="submit"
                  disabled={isProcessing || paymentInProgress}
                  className="w-full bg-primary text-white py-3 rounded-lg hover:bg-secondary transition-colors duration-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isProcessing || paymentInProgress ? 'Processing...' : 'Submit Registration'}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default RegistrationModal;