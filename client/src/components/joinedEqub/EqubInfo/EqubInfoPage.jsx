import React from 'react';
import { useParams } from 'react-router-dom';
import { infoDummyData } from '../../../db/data';
import EqubDetails from './EqubDetails';
import EqubSection from './EqubSection';
import NotFound from './NotFound';

const EqubInfoPage = () => {
    const { equbId } = useParams();
    const equbInfo = infoDummyData.find(info => info.equbId === equbId);

    if (!equbInfo) return <NotFound />;

    return (
        <div className="px-2 md:p-6 max-w-4xl mx-auto space-y-6 mt-6">
            <h1 className="text-xl font-medium text-gray-800 mb-10 border-b w-[200px] md:w-[300px] pb-1 border-slate-400 text-left">
                {equbInfo.name}
            </h1>

            <p className="text-gray-600">{equbInfo.description}</p>

            <EqubDetails equbInfo={equbInfo} />

            <EqubSection title="Rules" content={equbInfo.rules} />
            <EqubSection title="Benefits" content={equbInfo.benefits} isList />
            <EqubSection title="Penalties" content={equbInfo.penalties} />
        </div>
    );
};

export default EqubInfoPage;



















