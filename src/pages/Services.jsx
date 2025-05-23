import React from 'react'

function Services() {
  return (
    <>
      <section
        className="h-[70vh]
             bg-[url('https://images.unsplash.com/photo-1583421660936-fc5ce0762df1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover relative text-white flex items-center justify-center"
      >
        {/* overlay if you want to darken the image */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="relative py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">

          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">
            We invest in the world’s potential
          </h1>
          <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 xl:px-48">
            Here at Flowbite we focus on markets where technology, innovation, and
            capital can unlock long-term value and drive economic growth.
          </p>
        </div>
      </section>

      <section className="py-24 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-manrope text-4xl font-bold text-gray-900 text-center mb-16">
            Our Services We Provide
          </h2>
          <div className="flex justify-center  gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
            <div className="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl">
              <div className="flex items-center">
                <img
                  src="https://pagedone.io/asset/uploads/1696244317.png"
                  alt="blogs tailwind section"
                  className="rounded-t-2xl w-full object-cover"
                />
              </div>
              <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
                <span className="text-indigo-600 font-medium mb-3 block">
                  Jan 01, 2023
                </span>
                <h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">
                  Clever ways to invest in product to organize your portfolio
                </h4>
                <p className="text-gray-500 leading-6 mb-10">
                  Discover smart investment strategies to streamline and organize your
                  portfolio..
                </p>
                <a
                  href="javascript:;"
                  className="cursor-pointer text-lg text-indigo-600 font-semibold"
                >
                  Read more..
                </a>
              </div>
            </div>
            <div className="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl">
              <div className="flex items-center">
                <img
                  src="https://pagedone.io/asset/uploads/1696244340.png"
                  alt="blogs tailwind section"
                  className="rounded-t-2xl w-full object-cover"
                />
              </div>
              <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
                <span className="text-indigo-600 font-medium mb-3 block">
                  Feb 01, 2023
                </span>
                <h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">
                  How to grow your profit through systematic investment with us
                </h4>
                <p className="text-gray-500 leading-6 mb-10">
                  Unlock the power of systematic investment with us and watch your
                  profits soar. Our..
                </p>
                <a
                  href="javascript:;"
                  className="cursor-pointer text-lg text-indigo-600 font-semibold"
                >
                  Read more..
                </a>
              </div>
            </div>
            <div className="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl">
              <div className="flex items-center">
                <img
                  src="https://pagedone.io/asset/uploads/1696244356.png"
                  alt="blogs tailwind section"
                  className="rounded-t-2xl w-full object-cover"
                />
              </div>
              <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
                <span className="text-indigo-600 font-medium mb-3 block">
                  Mar 01, 20233
                </span>
                <h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">
                  How to analyze every holdings of your portfolio
                </h4>
                <p className="text-gray-500 leading-6 mb-10">
                  Our comprehensive guide will equip you with the tools and insights
                  needed to..
                </p>
                <a
                  href="javascript:;"
                  className="cursor-pointer text-lg text-indigo-600 font-semibold"
                >
                  Read more..
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Services