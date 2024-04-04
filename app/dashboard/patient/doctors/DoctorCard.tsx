import Image from 'next/image';

const DoctorCard = ({ doctor }: any) => {
    return (
        <div className="w-60 rounded overflow-hidden shadow-lg bg-white">
            <div className="relative h-40">
                <Image
                    src={doctor.picture}
                    alt={doctor.name}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center top"
                    className="rounded-t"
                />
            </div>
            <div className="px-6 py-4">
                <div className="font-light text-xl mb-2">{doctor.name}</div>
                <p className="text-gray-700 text-base">{doctor.specialty}</p>
                <p className="text-gray-700 text-base">Charge rate: {doctor.chargeRate} KES</p>
            </div>
        </div>
    );
};

export const OrthopedicDoctorCard = () => {
    const orthopedicDoctor = {
        picture: '/doc/doc9.jpg',
        name: 'Dr. Eunice Njeri',
        specialty: 'General Practitioner',
        chargeRate: '2,000',
    };

    return <DoctorCard doctor={orthopedicDoctor} />;
};
