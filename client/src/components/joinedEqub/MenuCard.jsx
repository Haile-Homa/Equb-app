import React from 'react'

const MenuCard = ({ title, Icon, onClick }) => {

    return (
        <button
            onClick={onClick}
            className="flex flex-col items-center justify-center p-6 border border-slate-500 rounded-xl "
        >
            <Icon className="w-8 h-8 text-blue-500 group-hover:text-blue-200 mb-3" />
            <span className="font-medium text-gray-800">{title}</span>
        </button>
    );
}

export default MenuCard






