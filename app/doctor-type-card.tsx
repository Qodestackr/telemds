import { Bone, Brain, Eye, Pipette, Stethoscope } from "lucide-react";
import Link from "next/link";
// import ToothIcon from '../public/icons/tooth-icon-vector.jpg'

export const doctorTypes = [
    {
        name: 'General Practitioner',
        icon: <Stethoscope />
    },
    {
        name: 'Ophthalmology',
        icon: <div className="flex justify-center items-center gap-1"><Pipette /> <Eye /></div>
    },
    {
        name: 'Orthopedics',
        icon: <Bone />
    },
    {
        name: 'Cardiology',
        icon: <Brain />
    },
    {
        name: 'Anesthesiology',
        icon: ''
    },
    {
        name: 'Audiology',
        icon: ''
    },
    {
        name: 'Cardiothoracic Surgery',
        icon: ''
    },
    {
        name: 'Dentist',
        icon: 'Dentist'
    },
    {
        name: 'Dermatology',
        icon: ''
    },
    {
        name: 'Electrophysiology',
        icon: ''
    },
    {
        name: 'Emergency Medicine',
        icon: ''
    },
    // {
    //     name: 'Endocrinology',
    //     icon: ''
    // },

    // {
    //     name: 'ENT',
    //     icon: ''
    // },
    // {
    //     name: 'Family Medicine',
    //     icon: ''
    // },
    // {
    //     name: 'Gastroenterology',
    //     icon: ''
    // },
    {
        name: 'General Surgery',
        icon: ''
    },
    {
        name: 'Genetics',
        icon: ''
    },
    {
        name: 'Gynecology',
        icon: ''
    },
    // {
    //     name: 'Haemato Oncology',
    //     icon: ''
    // },
    // {
    //     name: 'Internal Medicine',
    //     icon: ''
    // },
    // {
    //     name: 'Microbiology',
    //     icon: ''
    // },
    // {
    //     name: 'Nephrology',
    //     icon: ''
    // },
    // {
    //     name: 'Neurology',
    //     icon: ''
    // },
    // {
    //     name: 'Neurosurgery',
    //     icon: ''
    // },
    // {
    //     name: 'Nuclear Medicine',
    //     icon: ''
    // },
    // {
    //     name: 'Obstetrics and Gynecology',
    //     icon: ''
    // },
    // {
    //     name: 'Oncology',
    //     icon: 'Oncology'
    // },

    // {
    //     name: 'Oral and Maxillofacial Surgery',
    //     icon: ''
    // },

    // {
    //     name: 'Pediatrics',
    //     icon: 'Pediatrics'
    // },
    // {
    //     name: 'Physiotherapy',
    //     icon: ''
    // },
    // {
    //     name: 'Plastic Surgery',
    //     icon: ''
    // },
    // {
    //     name: 'Psychiatry',
    //     icon: ''
    // },
    {
        name: 'Pulmonology',
        icon: ''
    },
    {
        name: 'Radiology',
        icon: ''
    },
    // {
    //     name: 'Reproductive Medicine',
    //     icon: ''
    // },
    // {
    //     name: 'Rheumatology',
    //     icon: ''
    // },
    {
        name: 'Stroke Unit',
        icon: ''
    },
    {
        name: 'Vascular Surgery',
        icon: ''
    },
    // {
    //     name: 'Urology',
    //     icon: ''
    // },
    // {
    //     name: 'Uro Oncology',
    //     icon: ''
    // },

];

export default function CardDoctorType() {
    return (
        <div className="flex flex-wrap justify-center items-center">
            {doctorTypes.map((type, index) => (
                <Link href={'/'} key={type?.name}>
                    <div key={index} className="flex flex-col items-center justify-center m-4 w-38 h-30 rounded overflow-hidden shadow-lg bg-white">
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 text-slate-800">{type.name}</div>
                            <span>{type?.icon}</span>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}