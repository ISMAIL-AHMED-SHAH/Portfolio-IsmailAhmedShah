import React from 'react';
import { FaEnvelope, FaMap, FaPhone, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { contactData } from '@/Data/Data';

const contactItems = [
  { icon: <FaPhone />, label: 'Phone', value: contactData.phone },
  { icon: <FaWhatsapp />, label: 'WhatsApp', value: contactData.whatsapp },
  { icon: <FaEnvelope />, label: 'Email Address', value: contactData.email },
  { icon: <FaLinkedin />, label: 'LinkedIn', value: contactData.linkedin },
  { icon: <FaMap />, label: 'Address', value: contactData.address },
];

const ContactInfoItem = ({ icon, label, value }: { icon: JSX.Element, label: string, value: string }) => (
  <div className='flex items-center space-x-8 mt-8'>
    <div className='w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center flex-col'>
      {React.cloneElement(icon, { className: "w-4 h-4 md:w-7 md:h-7 text-white", 'aria-label': label })}
    </div>
    <div>
      <h1 className='text-lg sm:text-xl text-white font-bold'>{label}</h1>
      <h1 className='text-base sm:text-lg text-white text-opacity-70'>{value}</h1>
    </div>
  </div>
);

const ContactInfo = () => {
  return (
    <div>
      {contactItems.map((item, index) => (
        <ContactInfoItem key={index} icon={item.icon} label={item.label} value={item.value} />
      ))}
    </div>
  );
}

export default ContactInfo;
