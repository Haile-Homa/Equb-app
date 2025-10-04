import React from 'react'

const EqubHeader = ({ name, category, type, status }) => {
    return (
        <>
            <h1 className="text-lg font-medium text-gray-800 border-b w-[200px] pb-1 border-slate-400 text-left">
                {name}
            </h1>
            <p className="text-gray-600">
                {category} | {type} |{" "}
                <span className={`font-semibold ${status === 'active' ? 'text-green-600' : 'text-yellow-600'}`}>
                    {status.toUpperCase()}
                </span>
            </p>
        </>
    )
}

export default EqubHeader