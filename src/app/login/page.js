"use client";
import Image from "next/image";
import { useSelector } from "react-redux";

const LoginPage = () => {
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <>
      <section
        className={`flex justify-center items-center  ${
          darkMode ? "dark" : ""
        }`}
      >
        <section class=" w-1/2 md:max-lg:w-full max-sm:w-full">
          <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a
              href="/"
              class="flex items-center mb-6 text-2xl font-semibold text-lightPrimary dark:text-white"
            >
              <div className=" border-4 mr-4 rounded-full w-14 h-14 overflow-hidden flex-shrink-0">
                <Image
                  className="object-cover w-full h-full"
                  src="/robot6.jpg"
                  width={150}
                  height={150}
                  alt={"alt"}
                />
              </div>
              AI EXCHANGE
            </a>
            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Login to your account
                </h1>
                <form class="space-y-4 md:space-y-6">
                  <div>
                    <label
                      for="email"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      id="email"
                      class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      for="password"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      id="password"
                      class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        />
                      </div>
                      <div class="ml-3 text-sm">
                        <label
                          for="remember"
                          class="text-gray-500 dark:text-gray-500"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                    <a
                      href="#"
                      class="text-sm font-medium text-primary-600 hover:underline dark:text-gray-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div className="my-4 text-center text-gray-500">
                    or login with provider
                  </div>
                  <button
                    type="button"
                    // onClick={() => signIn("google", { callbackUrl: "/" })}
                    class=" flex gap-4 justify-center w-full text-black dark:text-white border-2  hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    <Image
                      src={"/google.png"}
                      alt={""}
                      width={24}
                      height={24}
                    />
                    Login with google
                  </button>
                  <button
                    type="submit"
                    class="w-full text-white bg-secondary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Login
                  </button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don’t have an account yet?{" "}
                    <a
                      href="/register"
                      class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Register
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default LoginPage;
