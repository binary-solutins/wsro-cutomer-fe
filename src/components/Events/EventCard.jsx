import React from 'react';
import { motion } from 'framer-motion';
import { format, isPast } from 'date-fns';
import { Calendar, MapPin, Users, Trophy, ChevronRight, IndianRupee, Lock } from 'lucide-react';

const EventCard = ({ event, onLearnMore }) => {
  // Return null or a loading state if event is undefined
  if (!event) {
    return null;
  }

  const formattedDate = format(new Date(event.date), 'MMM dd, yyyy');
  const formattedFees = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2
  }).format(event.fees);

  // Check if registration deadline has passed
  const isRegistrationClosed = isPast(new Date(event.registration_deadline));
  const randomImageId = Math.floor(Math.random() * 12) + 1;
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
    >
      <div className="relative h-50 overflow-hidden group">
        <img 
          src={`/comp-${randomImageId}.png`}
          alt={event.name}
          className="w-full h-[300px] object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Level Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
          <Trophy className="w-4 h-4 text-[#485db5]" />
          <span className="text-sm font-medium text-gray-800">{event.level}</span>
        </div>

        {/* Date Badge */}
        <div className="absolute top-4 right-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
          <Calendar className="w-4 h-4 text-[#485db5]" />
          <span className="text-sm font-medium text-gray-800">{formattedDate}</span>
        </div>
      </div>

      <div className="p-6 space-y-6">
        <div>
        <div className="relative group w-fit">
  <h3 className="text-md font-bold text-gray-800 mb-3 cursor-pointer">
    {event.name.length > 20 ? `${event.name.substring(0, 20)}...` : event.name}
  </h3>
  <div className="absolute bottom-full left-[100px] -translate-x-1/2 mb-2 w-max max-w-xs bg-gray-900 text-white text-xs rounded-lg px-3 py-1 
      opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
    {event.name}
  </div>
</div>

          <div className="space-y-3">
            {/* Venue */}
            <div className="flex items-center gap-3 text-gray-600">
              <MapPin className="w-5 h-5 text-[#485db5]" />
              <span className="text-sm">{event.venue}</span>
            </div>

            {/* Registration Fee */}
            <div className="flex items-center gap-3 text-gray-600">
              <IndianRupee className="w-5 h-5 text-[#485db5]" />
              <span className="text-sm">{formattedFees}</span>
            </div>

            {/* Team Limit */}
            <div className="flex items-center gap-3 text-gray-600">
              <Users className="w-5 h-5 text-[#485db5]" />
              <span className="text-sm">Maximum {event.maximum_teams} teams</span>
            </div>
          </div>
        </div>

        {isRegistrationClosed ? (
          <div className="w-full bg-red-500 text-white py-3 px-6 rounded-xl
            font-semibold flex items-center justify-center gap-2 cursor-not-allowed">
            <Lock className="w-5 h-5" />
            <span>Registration Closed</span>
          </div>
        ) : (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-[#485db5] to-[#6478d3] text-white py-3 px-6 rounded-xl
              font-semibold shadow-lg shadow-[#485db5]/20 hover:shadow-xl hover:shadow-[#485db5]/30
              transition-all duration-300 flex items-center justify-center gap-2 group"
            onClick={() => onLearnMore(event)}
          >
            <span>Register</span>
            <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export default EventCard;