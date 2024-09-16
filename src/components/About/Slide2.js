import Image from "next/image";

const Slide2 = () => {
  return (
    <section className="flex justify-between items-center h-[700px] md:max-lg:px-5">
      <div className="flex flex-col justify-center items-center w-1/2 md:max-lg:mr-4">
        <div className="text-center">
          <h1 className="mb-5 text-2xl dark:text-primary">MOHAMED OMRAN</h1>
          <p className="text-xl mb-10 dark:text-primary">
            Lorem ipsum dolor sit amet, consectetur adi pisi cing elit, sed do
            eiusmod tempor exercitationemut labore Love life’s sweetest.
          </p>
        </div>
        <div>
          <Image
            src="/doc9.jpg"
            width={400}
            height={400}
            alt="Picture of the author"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-1/2">
        <div>
          <Image
            src="/doc5.jpg"
            width={400}
            height={400}
            alt="Picture of the author"
          />
        </div>
        <div className="text-center mt-10">
          <h1 className="mb-5 text-2xl dark:text-primary">MOHAMED OMRAN</h1>
          <p className="text-xl dark:text-primary">
            Lorem ipsum dolor sit amet, consectetur adi pisi cing elit, sed do
            eiusmod tempor exercitationemut labore Love life’s sweetest.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Slide2;
