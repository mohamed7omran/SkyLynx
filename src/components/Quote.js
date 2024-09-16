import React from "react";

const Quote = () => {
  return (
    <section className="bg-[url('/doc.jpg')] bg-cover bg-center bg-fixed h-screen max-sm:h-[600px] w-full flex justify-center items-center text-white">
      <div className="bg-black/30 w-full h-full flex flex-col justify-center items-center p-6 max-sm:p-2 relative">
        <h1 className="text-6xl md:max-lg:text-4xl max-sm:text-2xl font-bold text-center mb-4 quote">
          &ldquo;Meeting the challenges of an ever-changing healthcare
          environment&rdquo;
        </h1>
        <p className="text-xl text-center">— Dr. Jonathan Gobi</p>
      </div>
    </section>
  );
};

export default Quote;
