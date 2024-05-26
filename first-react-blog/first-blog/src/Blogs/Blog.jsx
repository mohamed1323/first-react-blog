import React from 'react'

function Blog() {
  return (
    <section class="py-10 bg-white sm:py-16 lg:py-24">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">WELCOME TO MY  BLOG</h2>
            <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">MY NAME IS MOHAMED ABDUKADIR AND THERE'S MY BLOG  .</p>
        </div>

        <div class="grid max-w-md grid-cols-1 mx-auto mt-12 lg:max-w-full lg:mt-16 lg:grid-cols-3 gap-x-16 gap-y-12">
            <div>
                <a href="#" title="" class="block aspect-w-4 aspect-h-3">
                    <img class="object-cover w-full h-full" src="tech.JPG" alt="" />
                </a>
                <span class="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-rose-500 bg-rose-100 mt-9"> Tech DEVELOPER </span>
                <p class="mt-6 text-xl font-semibold">
                    <a href="#" title="" class="text-black"> How to become a teach  developer ? </a>
                </p>
                <p class="mt-4 text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                <div class="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
                <span class="block text-sm font-bold tracking-widest text-gray-500 uppercase"> mohamed abdukadir . June 12, 2024 </span>
            </div>

            <div>
                <a href="#" title="" class="block aspect-w-4 aspect-h-3">
                    <img class="object-cover w-full h-full" src="traders.JPG" alt="" />
                </a>
                <span class="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-sky-500 bg-sky-100 mt-9"> TRADER </span>
                <p class="mt-6 text-xl font-semibold">
                    <a href="#" title="" class="text-black"> 6 Product launching Traders you want to use on next campaign. </a>
                </p>
                <p class="mt-4 text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                <div class="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
                <span class="block text-sm font-bold tracking-widest text-gray-500 uppercase"> mohamed abdukadir. June 12, 2022 </span>
            </div>

            <div>
                <a href="#" title="" class="block aspect-w-4 aspect-h-3">
                    <img class="object-cover w-full h-full" src="ENTREPRENEUSHIP.JPG" alt="" />
                </a>
                <span class="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-sky-500 bg-sky-100 mt-9"> entrepreneuship </span>
                <p class="mt-6 text-xl font-semibold">
                    <a href="#" title="" class="text-black"> Learn from the best: 7 email marketing ideas you can use  as entrepreneu</a>
                </p>
                <p class="mt-4 text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                <div class="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
                <span class="block text-sm font-bold tracking-widest text-gray-500 uppercase"> mohamed abdukadir . June 12, 2025 </span>
            </div>
        </div>
    </div>
</section>

  )
}

export default Blog
