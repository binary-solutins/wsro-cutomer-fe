import React from 'react';
import { format } from 'date-fns';
import {
  X,
  Calendar,
  MapPin,
  Target,
  Clock,
  Users,
  Wallet,
  FileText,
  Download,
  Archive,
  Lock
} from 'lucide-react';
import EventDetail from './EventDetails';
import EventButton from './EventButton';

const EventDetailsModal = ({ event, onClose, onRegister }) => {
  if (!event) return null;

  const formattedDate = format(new Date(event.date), 'MMMM dd, yyyy');
  const formattedDeadline = format(new Date(event.registration_deadline), 'MMMM dd, yyyy');

  const eventDetails = [
    { icon: <Calendar className="w-5 h-5" />, text: formattedDate },
    { icon: <MapPin className="w-5 h-5" />, text: event.venue },
    { icon: <Target className="w-5 h-5" />, text: event.level },
    { icon: <Users className="w-5 h-5" />, text: `Minimum Team Size: ${event.minimum_teams}` },
    { icon: <Users className="w-5 h-5" />, text: `Maximum Team Size: ${event.maximum_teams}` },
    { icon: <Wallet className="w-5 h-5" />, text: `Fees: ₹${event.fees}` }
  ];

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all">
        <div className="relative">
          {/* Header with gradient background */}
          <div className="bg-primary p-6 rounded-t-2xl">
            <div className="flex justify-between items-start">
              <h2 className="text-2xl font-bold text-white">{event.name}</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>

          <div className="p-6 space-y-6">
            {/* Event Details Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {eventDetails.map((detail, index) => (
                <EventDetail
                  key={index}
                  icon={detail.icon}
                  text={detail.text}
                />
              ))}
            </div>

            {/* Rules Section */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <div className="flex items-center gap-2 mb-3">
                <FileText className="w-5 h-5 text-indigo-600" />
                <h3 className="font-semibold text-gray-900">Information</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{event.rules}</p>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-wrap gap-4">
              {event.pdf_url && (
                <EventButton
                  href={event.pdf_url}
                  icon={<Download className="w-5 h-5" />}
                  text="Download Rules PDF"
                  className="bg-red-500 hover:bg-red-600"
                />
              )}
              {event.zip_url && (
                <EventButton
                  href={event.zip_url}
                  icon={<Archive className="w-5 h-5" />}
                  text="Download Resources"
                  className="bg-blue-500 hover:bg-blue-600"
                />
              )}
            </div>

            {/* Register Button */}
            {event.is_active == 0 ? (
              <div className="w-full bg-red-500 text-white py-4 rounded-xl flex items-center justify-center gap-2 font-semibold shadow-lg cursor-not-allowed">
                <Lock className="w-5 h-5" />
                <span>Registration Locked</span>
              </div>
            ) : (
              <button
                onClick={() => onRegister(event)}
                className="w-full bg-primary text-white py-4 rounded-xl hover:bg-secondary transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Register Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsModal;