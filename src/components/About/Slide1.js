import Image from "next/image";
import { useSelector } from "react-redux";

const Slide1 = () => {
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <section className="flex justify-between items-center h-[700px] md:max-lg:px-5 max-sm:px-3 ">
      <div className="flex flex-col justify-center items-center w-1/2 md:max-lg:mr-4 max-sm:mr-3">
        <div>
          <Image
            src="/doc4.jpg"
            width={400}
            height={400}
            alt="Picture of the author"
          />
        </div>
        <div className="text-center mt-10 max-sm:mt-5">
          <h1 className="mb-5 text-2xl max-sm:text-xl dark:text-primary">
            MOHAMED OMRAN
          </h1>
          <p className="text-xl max-sm:text-lg dark:text-primary max-sm:leading-tight">
            Lorem ipsum dolor sit amet, consectetur adi pisi cing elit, sed do
            eiusmod tempor exercitationemut labore Love life’s sweetest.
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-1/2">
        <div className="text-center">
          <h1 className="mb-5 text-2xl max-sm:text-xl dark:text-primary">
            MOHAMED OMRAN
          </h1>
          <p className="text-xl max-sm:text-lg mb-10 max-sm:mb-5 dark:text-primary max-sm:leading-tight">
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
