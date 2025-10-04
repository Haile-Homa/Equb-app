import React from 'react'

const StatsCard = ({ icon, value, label, bg, text = "" }) => {
  return (
    <div className={`p-3 sm:p-4 ${bg} border border-slate-400 rounded-xl`}>
      {icon}
      <p className={`text-lg sm:text-xl font-bold ${text}`}>{value}</p>
      <p className="text-gray-600 text-xs sm:text-sm">{label}</p>
    </div>
  )
}

export default StatsCard










