import React, { useState } from 'react';

const Contact = () => {
    const [text, setText] = useState('');
    const [problem, setProblem] = useState('')
    const onChangeText = e => {
        setText(e.target.value)
    }
    const addedProblem = () => {
        setProblem(text)

    }
    console.log(problem.length)
    return (
        <div>
            <div>
                <div className='text-3xl lg:w-2/4 mx-auto mt-12'>
                    <h1>Hi What's your Problem.</h1>
                    <h1>How can i halp you.</h1>
                    <div className='mt-12'>
                        <textarea onChange={onChangeText} className='border-2' placeholder='text your problem' name="" id="" cols="30" rows="5"></textarea>
                        <div>
                            <button className='border-2 border-blue-400 text-white font-semibold rounded-xl bg-blue-300 py-2 px-6 hover:text-black hover:bg-white' onClick={addedProblem}>Submit</button>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='text-xl w-2/4 mx-auto mt-12'>{problem}</p>
                </div>
            </div>
            <h2 className='mt-56 text-center text-4xl text-gray-400'>And our contact number: (01861557343)</h2>
        </div>
    );
};

export default Contact;