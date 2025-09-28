import React from 'react'

const EqubHeader = ({ type, category }) => {

    const title = type
        ? `${type.charAt(0).toUpperCase() + type.slice(1)} Equbs`
        : `${category.charAt(0).toUpperCase() + category.slice(1)} Equbs`;

    return (
        <h2 className="text-xl font-bold text-gray-800 mb-6 border-b-4 w-[200px] pb-1 mx-auto text-center border-gray-200">
            {title}
        </h2>
    )
}

export default EqubHeader
