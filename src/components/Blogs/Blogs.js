import React from 'react';

const Blogs = () => {
    return (
        <div className='w-3/4 mx-auto mt-16'>
            <h1 className='text-4xl'>what is purpose of context api</h1>
            <p className='text-xl'>সাধারণত এক Component থেকে অন্ন Component data পাঠানোর জন্য props এর মাধ্যমে করতে হয়। অনেক সময় কয়েকটা component এর পরে data এর দরকার পরে তখন prop- driling করে মানে প্রত্তেক টা component এ data কে props হিসেবে pass করে করে জেতে হয়।  আর এই props-drilingপ্রপ্স-দ্রিলিং কে খুবই সহজ করে এই Context Api এইটা যেখানে data অইখানে create করে  যেখানে এটা দরকার সেখানে এটা use করলে খুব সহজে data টা পেয়ে যাবে খুব সহজে এক component থেকে অন্ন component  এ data পাঠাতে পারি ও তা ব্যবহার করে UI দেখাতে পারি|
            </p>
            
        </div>
    );
};

export default Blogs;