import React from "react";
export default function Home() {
  return (
    <section
  className="relative bg-[url(https://images8.alphacoders.com/112/1126960.jpg)] bg-cover bg-center bg-no-repeat"
>
  <div
    className="absolute inset-0 bg-white/50  from-white/50 to-white/50 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right ">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
      Find Summer Vibe

        <strong className="block font-extrabold text-red-500"> This Year. </strong>
      </h1>

      <p className="mt-4 max-w-lg sm:text-xl/relaxed">
      Embrace the season in style with our curated collection of trendy and practical bags designed to elevate your summer wardrobe
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="#"
          className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Get Started
        </a>

        <a
          href="#"
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
   
  );
}
