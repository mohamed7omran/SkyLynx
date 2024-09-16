import React from "react";

const Quote = () => {
  return (
    <section className="bg-[url('/doc.jpg')] bg-cover bg-center bg-fixed h-screen w-full flex justify-center items-center text-white">
      <div className="bg-black/30 w-full h-full flex flex-col justify-center items-center p-6 relative">
        <h1 className="text-6xl md:max-lg:text-4xl font-bold text-center mb-4 quote">
          &ldquo;Meeting the challenges of an ever-changing healthcare
          environment&rdquo;
        </h1>
        <p className="text-xl text-center">— Dr. Jonathan Gobi</p>
      </div>
    </section>
  );
};

export default Quote;
