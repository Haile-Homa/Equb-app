import React, { useState } from 'react';

const SettingsDelete = ({ icon: Icon, title, color = 'red' }) => {

  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    // TODO: Add actual deletion logic here
    console.log('Account deleted');
    setShowModal(false);
  };

  return (
    <>
      {/* Delete Button */}
      <button
        onClick={() => setShowModal(true)}

        className={`w-full flex items-center justify-between p-4 rounded-xl transition 
                    hover:bg-${color}-50 active:bg-${color}-100 text-left`}
      >

        <div className="flex items-center gap-3">

          <div className={`p-2 rounded-lg bg-${color}-100 text-${color}-600`}>
            <Icon size={20} />
          </div>

          <div>
            <h3 className="font-medium text-gray-800">{title}</h3>
          </div>

        </div>

      </button>




      {/* Modal */}
      {showModal && (

        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black bg-opacity-40">

          <div className="bg-white w-full sm:w-1/2 rounded-t-2xl sm:rounded-2xl p-10 transform 
                           transition-transform duration-300 ease-out sm:translate-y-0">
                          

            <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>

            <p className="text-gray-500 mb-6">
              Are you sure you want to delete your account? This action cannot be undone.
            </p>

            <div className="flex gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="flex-1 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
              >
                Delete
              </button>

            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default SettingsDelete;



