import React from 'react';

const NotFound = () => {
    return (
        <div className='flex justify-center mt-12'>
            <div>
            <h1 className='text-6xl font-bold'>Page Not Found</h1>
            <h3 className='text-gray-400 mt-12 text-3xl'>We couldn't find what you were looking for.</h3>
            <p className='mt-8'>Please search the valid url. This url is not valid.</p>
            </div>
            <div>
                <img src="https://thumbs.dreamstime.com/b/error-page-layout-vector-design-website-page-creative-concept-page-you-requested-could-not-be-found-oops-error-page-error-page-125901178.jpg" alt="" />
            </div>
        </div>
    );
};

export default NotFound;