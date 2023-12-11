import React from 'react'

const Education = () => {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 row-gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
            </p>
            <div className="mb-3">
              <a
                href="/"
                aria-label="Article"
                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                <p className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-4xl xl:text-5xl text-violet-700">
                  Education
                </p>
              </a>
            </div>
            <p className="mb-4 text-base text-gray-700 md:text-lg">
              "Education is not preparation for life; it is life itself." - John Dewey
            </p>
          </div>
          <div className="flex flex-col space-y-8 lg:col-span-3">
            <div>
              <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                10 January 2024
              </p>
              <div className="mb-3">
                <a
                  href="/"
                  aria-label="Article"
                  className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  <p className="font-sans text-gray-700 text-xl font-extrabold leading-none tracking-tight lg:text-2xl">
                    Bachelor of Engineering in <span className='text-blue-600'>Computer Science and Engineering</span>
                  </p>
                </a>
              </div>
              <p className="mb-4 text-base text-gray-700 md:text-lg">
                I have completed my Bachelor in Computer Science and Engineering. Got CGPA 3.45 from Pabna University of Science and Technology. I had a great learning journy there.
              </p>

            </div>
            <div>
              <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                10 March 2016
              </p>
              <div className="mb-3">
                <a
                  href="/"
                  aria-label="Article"
                  className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  <p className="font-sans text-gray-700 text-xl font-extrabold leading-none tracking-tight lg:text-2xl">
                    Higher Secondary Certificate in <span className='text-blue-600'>Science</span>
                  </p>
                </a>
              </div>
              <p className="mb-4 text-base text-gray-700 md:text-lg">
                I completed my Higher Secondary Certificate (HSC) in the Science stream at Rajshahi Government City College and achieved a GPA of 5.00 in the HSC examinations.
              </p>
            </div>
            <div>
              <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                10 February 2014
              </p>
              <div className="mb-3">
                <a
                  href="/"
                  aria-label="Article"
                  className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  <p className="font-sans text-gray-700 text-xl font-extrabold leading-none tracking-tight lg:text-2xl">
                    Secondary School Certificate in <span className='text-blue-600'>Science</span>
                  </p>
                </a>
              </div>
              <p className="mb-4 text-base text-gray-700 md:text-lg">
                I completed my Secondary School Certificate (SSC) in the Science stream from Rajshahi Educational Board Model School and College, obtaining a GPA of 5.00 in the SSC examinations.
              </p>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Education