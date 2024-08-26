import React, { useState } from 'react';  // Import useState hook
import bgPattern from '../assets/assets/images/background-pattern-desktop.svg';
import iconStar from '../assets/assets/images/icon-star.svg';
import iconImg from '../assets/assets/images/icon-plus.svg';

const Accordion = () => {  
    const faqs = [
        {
            id: 1,
            ques: "What is Frontend Mentor, and how will it help me?",
            iconImg: iconImg,
            ans: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
        },
        {
            id: 2,
            ques: "Is Frontend Mentor free?",
            iconImg: iconImg,
            ans: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
        },
        {
            id: 3,
            ques: "Can I use Frontend Mentor projects in my portfolio?",
            iconImg: iconImg,
            ans: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
        },
        {
            id: 4,
            ques: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
            iconImg: iconImg,
            ans: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
        }
    ];

    const [selected, setSelected] = useState([]);
    const [multiSelect, setMultiSelect] = useState(false);

    const toggle = (id) => {
        if (multiSelect) {
            if (selected.includes(id)) {
                setSelected(selected.filter(selectedId => selectedId !== id));
            } else {
                setSelected([...selected, id]);
            }
        } else {
            setSelected(selected.includes(id) ? [] : [id]);
        }
    };

    return (
        <div>
            <div className='w-full min-h-64 bg-cover bg-no-repeat font-custom' style={{ backgroundImage: `url(${bgPattern})` }}></div>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] md:w-[40%] min-h-[60%] bg-white rounded-lg'>
                <div className='w-full h-28 flex items-center justify-between pl-6'>
                    <div className='flex items-center gap-4 '>
                        <img src={iconStar} alt="Star Icon" />
                        <h2 className='text-6xl font-bold text-[#301534]'>FAQS</h2>
                    </div>
                    <div className='pr-0 md:pr-3'> 
                        <button onClick={() => setMultiSelect(!multiSelect)} className='md:bg-[#301534] hidden md:flex text-black md:p-4 rounded-xl uppercase md:text-white text-sm'>
                            {multiSelect ? "Disable Multiselection" : "Enable Multiselection"}
                        </button>
                    </div>
                </div>
                <div>
                    {faqs.map(item => (
                        <div key={item.id} className='p-8'>
                            <div className='flex items-center justify-between w-full py-3'>  
                                <h2 className='text-xl font-bold text-[#301534]'>{item.ques}</h2>
                                <img onClick={() => toggle(item.id)} src={item.iconImg} alt="Toggle Icon" className="cursor-pointer" />
                            </div>
                            <p className={`${selected.includes(item.id) ? 'block' : 'hidden'} text-[#301534] pt-5 pb-6`}>{item.ans}</p>
                            <hr />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Accordion;
