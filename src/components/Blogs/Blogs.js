import React from 'react';

const Blogs = () => {
    return (
        <div className='w-3/4 mx-auto mt-16'>
            <h1 className='text-4xl'>what is purpose of context api?</h1>
            <p className='text-xl'>সাধারণত এক Component থেকে অন্ন Component data পাঠানোর জন্য props এর মাধ্যমে করতে হয়। অনেক সময় কয়েকটা component এর পরে data এর দরকার পরে তখন prop- driling করে মানে প্রত্তেক টা component এ data কে props হিসেবে pass করে করে জেতে হয়।  আর এই props-driling  কে খুবই সহজ করে এই Context Api এইটা যেখানে data অইখানে create করে  যেখানে এটা দরকার সেখানে এটা use করলে খুব সহজে data টা পেয়ে যাবে খুব সহজে এক component থেকে অন্ন component  এ data পাঠাতে পারি ও তা ব্যবহার করে UI দেখাতে পারি|
            </p>
            
            <h1 className='text-4xl mt-6'>What is semantic tag?</h1>
            <p className='text-xl'>semantic tag হল যে সকল tag পড়ার পর বুঝা যায় যে এটা কি রকম হতে পারে বা কি কাজ হতে পারে যেমন (footer, header, article, section, main, details, nav, time)etc. এইগুলা পরলে বুঝা যায় কি রকম হতে পারে।এগুলোর একটা মিনিং আছে যা খুব সহজেই বোঝা যায়| আর যে সকল ট্যাগ পরার পর খুব সহজেই বুঝা যায় কি রকম হতে পারে সেই সকল tag কেই semantic tag বলে|
            </p>

        </div>
    );
};

export default Blogs;