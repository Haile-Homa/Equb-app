import React from 'react'

const EqubHeader = ({ type, category }) => {

    const title = type
        ? `${type.charAt(0).toUpperCase() + type.slice(1)} Equbs`
        : `${category.charAt(0).toUpperCase() + category.slice(1)} Equbs`;

    return (
        <h2 className="text-xl font-medium text-gray-800 mb-6
                       border-b w-[200px] pb-1 border-slate-400  text-center mx-auto
                       ">
            {title}
        </h2>
    )
}

export default EqubHeader
