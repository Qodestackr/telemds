import React from 'react'
import Image from 'next/image';

const CreateHospitalPage = ({ hospital }: any) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative h-64 w-full">
          <Image
            src={hospital.imageUrl}
            alt={hospital.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{hospital.name}</div>
          <p className="text-gray-700 text-base">{hospital.location}</p>
          <p className="text-gray-700 text-base">{hospital.details}</p>
        </div>
      </div>
    </div>
  );
};

export default CreateHospitalPage;
