import Image from "next/image";

const Slide1 = () => {
  return (
    <section className="flex justify-between items-center h-[700px] ">
      <div className="flex flex-col justify-center items-center w-1/2">
        <div>
          <Image
            src="/doc4.jpg"
            width={400}
            height={400}
            alt="Picture of the author"
          />
        </div>
        <div className="text-center mt-10">
          <h1 className="mb-5 text-2xl">MOHAMED OMRAN</h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adi pisi cing elit, sed do
            eiusmod tempor exercitationemut labore Love life’s sweetest.
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-1/2">
        <div className="text-center">
          <h1 className="mb-5 text-2xl">MOHAMED OMRAN</h1>
          <p className="text-xl mb-10">
            Lorem ipsum dolor sit amet, consectetur adi pisi cing elit, sed do
            eiusmod tempor exercitationemut labore Love life’s sweetest.
          </p>
        </div>
        <div>
          <Image
            src="/doc3.jpg"
            width={400}
            height={400}
            alt="Picture of the author"
          />
        </div>
      </div>
    </section>
  );
};

export default Slide1;
