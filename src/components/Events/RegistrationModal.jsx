import React, { useCallback, useState } from 'react';
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
  const [teamName, setTeamName] = useState('Future Innovators');
  const [leaderName, setLeaderName] = useState('John Doe');
  const [leaderEmail, setLeaderEmail] = useState('john.doe@example.com');
  const [leaderAge, setLeaderAge] = useState(17);
  const [leaderSchool, setLeaderSchool] = useState('Springfield High');
  const [leaderTotalStudents, setLeaderTotalStudents] = useState(10);
  const [leaderAddress, setLeaderAddress] = useState('123 Main St');
  const [leaderCity, setLeaderCity] = useState('Springfield');
  const [leaderState, setLeaderState] = useState('IL');
  const [leaderZipcode, setLeaderZipcode] = useState('62701');
  const [leaderPhone, setLeaderPhone] = useState('555-1234');
  const [coachName, setCoachName] = useState('Jane Smith');
  const [coachOrganization, setCoachOrganization] = useState('Tech Mentors');
  const [coachPhone, setCoachPhone] = useState('555-5678');
  const [coachEmail, setCoachEmail] = useState('jane.smith@techmentors.com');
  const [emailCheckError, setEmailCheckError] = useState('');
  const [existingEmails, setExistingEmails] = useState([]);
  const [paymentInProgress, setPaymentInProgress] = useState(false);
  const [paymentError, setPaymentError] = useState('');

  const [members, setMembers] = useState([
    { name: 'Alice', email: 'alice@example.com', age: 16, phone: '555-2345', tshirtSize: 'M' },
    { name: 'Bob', email: 'bob@example.com', age: 17, phone: '555-3456', tshirtSize: 'L' },
    { name: 'Charlie', email: 'charlie@example.com', age: 16, phone: '555-4567', tshirtSize: 'S' }
  ]);

  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState({
    status: 'idle', // idle, processing, success, error
    paymentId: null,
    error: null
  });
  const tshirtSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

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
      const response = await fetch('https://node-test-fu37.onrender.com/api/auth/check-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          emails: allEmails,
          competition_id: event.id
        }),
      });

      const data = await response.json();

      if (data.exists) {
        setEmailCheckError('One or more email addresses are already registered for this competition: ' + data.emails.join(', '));
        setExistingEmails(data.emails);
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

      const registerResponse = await fetch('https://node-test-fu37.onrender.com/api/competitions/register', {
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
    setPaymentStatus({
      status: 'processing',
      paymentId: response.razorpay_payment_id,
      error: null
    });

    try {
      const success = await handleRegistration(response.razorpay_payment_id);
      if (success) {
        setPaymentStatus({
          status: 'success',
          paymentId: response.razorpay_payment_id,
          error: null
        });
      }
    } catch (error) {
      setPaymentStatus({
        status: 'error',
        paymentId: response.razorpay_payment_id,
        error: `Registration failed after payment. Please contact support with Payment ID: ${response.razorpay_payment_id}`
      });
    }
  }, [handleRegistration]);

  const handlePaymentFailure = useCallback((response) => {
    setPaymentStatus({
      status: 'error',
      paymentId: response.error?.metadata?.payment_id,
      error: `Payment failed: ${response.error?.description || 'Unknown error'}`
    });
    setIsProcessing(false);
    setPaymentInProgress(false);
  }, []);

  const initializeRazorpay = useCallback(async () => {
    try {
      const res = await loadRazorpay();
      
      if (!res) {
        throw new Error('Razorpay SDK failed to load');
      }

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: Math.round(event.fees * 100),
        currency: "INR",
        name: "WSRO Robotics",
        description: `Registration for ${event.name}`,
        handler: handlePaymentSuccess,
        modal: {
          ondismiss: () => {
            setIsProcessing(false);
            setPaymentInProgress(false);
          }
        },
        prefill: {
          name: leaderName,
          email: leaderEmail,
          contact: leaderPhone
        },
        theme: {
          color: "#2563eb",
        },
        retry: {
          enabled: true,
          max_count: 3
        },
        notes: {
          team_name: teamName,
          event_name: event.name
        }
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.on('payment.failed', handlePaymentFailure);
      return paymentObject;
    } catch (error) {
      console.error('Razorpay initialization error:', error);
      throw error;
    }
  }, [event, leaderName, leaderEmail, leaderPhone, teamName, handlePaymentSuccess, handlePaymentFailure]);

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
    } catch (error) {
      console.error('Payment initialization error:', error);
      setPaymentStatus({
        status: 'error',
        paymentId: null,
        error: 'Failed to initialize payment. Please try again.'
      });
      setIsProcessing(false);
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
          className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
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
                
                {paymentStatus.status === 'error' && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
            <p>{paymentStatus.error}</p>
            {paymentStatus.paymentId && (
              <p className="mt-2 text-sm">Payment ID: {paymentStatus.paymentId}</p>
            )}
          </div>
        )}

        {paymentStatus.status === 'processing' && (
          <div className="bg-blue-50 border border-blue-200 text-blue-600 px-4 py-3 rounded-lg">
            Processing payment and registration...
          </div>
        )}

                {/* Team Information */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Team Information</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
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
                  <h3 className="text-lg font-semibold mb-4">Team Leader Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Name
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
                        Email
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
                        Age
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
                        Phone
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
                        School
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
                        Total Students
                      </label>
                      <input
                        type="number"
                        value={leaderTotalStudents}
                        onChange={(e) => setLeaderTotalStudents(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Address
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
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Name
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
                        Organization
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
                        Phone
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
                        Email
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
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Team Members</h3>
                    <button
                      type="button"
                      onClick={addMember}
                      disabled={members.length >= 4}
                      className="text-primary hover:text-secondary disabled:text-gray-400"
                    >
                      + Add Member
                    </button>
                  </div>

                  {members.map((member, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-lg space-y-4">
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
                      <div className="grid md:grid-cols-2 gap-4">
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
                            Phone
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
                  ))}
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