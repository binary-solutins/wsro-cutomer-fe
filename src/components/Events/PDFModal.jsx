import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Mail, FileText, ExternalLink } from 'lucide-react';

const PDFModal = ({ onClose, pdfUrl }) => {
  const handlePDFClick = () => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800">Italy Competitions 2025</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Important Notice */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">
                Important Notice:
              </h3>
              <p className="text-yellow-700 mb-4">
                Before registering for the Italy Competitions 2025, kindly contact the WSRO India Team for guidance, concerns, or any queries.
              </p>
              <p className="text-yellow-700">
                📄 Please refer to the official PDF for complete details about the Italy Competitions 2025.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Contact Information:</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-blue-700">
                  <Phone className="w-5 h-5" />
                  <span>📞 +91 81287 28882 | +91 99044 63224</span>
                </div>
                <div className="flex items-center gap-3 text-blue-700">
                  <Mail className="w-5 h-5" />
                  <span>📧 wsroindia@gmail.com</span>
                </div>
              </div>
            </div>

            {/* PDF Preview */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Competition Details</h3>
                <button
                  onClick={handlePDFClick}
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Open PDF</span>
                </button>
              </div>
              
              {/* PDF Preview Image */}
              <div className="relative w-full border border-gray-300 rounded-lg overflow-hidden bg-white">
                <img
                  src="/italy-pdf.png"
                  alt="Italy Competitions 2025 PDF Preview"
                  className="w-full h-auto object-contain"
                />
              </div>
              
              <p className="text-sm text-gray-600 mt-2 text-center">
                Click "Open PDF" to view the full document in a new tab
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-end p-6 border-t border-gray-200">
            <button
              onClick={onClose}
              className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PDFModal; 