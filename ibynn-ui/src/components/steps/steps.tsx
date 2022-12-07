import React from 'react'

export default function Steps() {
  return (
    <div className="nc-SectionHowItWork" data-nc-id="SectionHowItWork">
      <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-16 xl:gap-20">
        <div className="relative flex flex-col items-center max-w-xs mx-auto">
          <div
            className="nc-NcImage mb-4 sm:mb-10 max-w-[140px] mx-auto"
            data-nc-id="NcImage">
            <img
              src="/assets/images/HowItWorksIcons/filter.png"
              className="rounded-3xl"
              alt="nc-imgs"
            />
          </div>
          <div className="text-center mt-auto space-y-5">
            <span className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-red-800 bg-red-100">
              Step 1
            </span>
            <h3 className="text-base font-semibold">
              Filter &amp; Discover
            </h3>
            <span className="block text-slate-600 dark:text-slate-400 text-sm leading-6">
              Smart filtering and suggestions make it easy to find
            </span>
          </div>
        </div>
        <div className="relative flex flex-col items-center max-w-xs mx-auto">
          <div
            className="nc-NcImage mb-4 sm:mb-10 max-w-[140px] mx-auto"
            data-nc-id="NcImage"
          >
            <img
              src="/assets/images/HowItWorksIcons/add-to-cart.png"
              className="rounded-3xl"
              alt="nc-imgs"
            />
          </div>
          <div className="text-center mt-auto space-y-5">
            <span className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-indigo-800 bg-indigo-100  relative">
              Step 2
            </span>
            <h3 className="text-base font-semibold">Add to bag</h3>
            <span className="block text-slate-600 dark:text-slate-400 text-sm leading-6">
              Easily select the correct items and add them to the cart
            </span>
          </div>
        </div>
        <div className="relative flex flex-col items-center max-w-xs mx-auto">
          <div
            className="nc-NcImage mb-4 sm:mb-10 max-w-[140px] mx-auto"
            data-nc-id="NcImage"
          >
            <img
              src="/assets/images/HowItWorksIcons/checkmark.png"
              className="rounded-3xl"
              alt="nc-imgs"
            />
          </div>
          <div className="text-center mt-auto space-y-5">
            <span className="nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-yellow-800 bg-yellow-100  relative">
              Step 3
            </span>
            <h3 className="text-base font-semibold">Fast shipping</h3>
            <span className="block text-slate-600 dark:text-slate-400 text-sm leading-6">
              The carrier will confirm and ship quickly to you
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
