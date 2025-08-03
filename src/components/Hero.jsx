import Button from "./Button";
import macbook from "../assets/macbook.jpg";
import iphone from "../assets/iphone.jpg";

export default function Hero() {
  return (
    <div>
      <section className="relative py-5">
        <div className="flex justify-center">
          <div className="relative w-full max-w-7xl h-[70vh] sm:h-[80vh] md:h-[90vh] lg:h-[100vh]">
            <img
              src={macbook}
              alt="MacBook Air M4"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 flex flex-col justify-start px-6 sm:px-8 md:px-12 text-black mt-8 sm:mt-10">
              <h1 className="font-bold leading-tight text-[clamp(2rem,6vw,4.5rem)]">
                MacBook Air
              </h1>
              <p className="mt-2 font-medium text-[clamp(1rem,4vw,1.75rem)]">
                Sky blue colour.
              </p>
              <p className="text-[clamp(.875rem,3vw,1rem)] mt-1">
                Sky-high performance with M4.
              </p>
              <div className="mt-6 flex justify-center flex-wrap gap-3">
                <Button
                  variant="primary"
                  iconRight
                  className="text-sm sm:text-base px-4 py-2"
                >
                  Learn more
                </Button>
                <Button
                  variant="outline"
                  className="text-sm sm:text-base px-4 py-2"
                >
                  Buy
                </Button>
              </div>
            </div>

            <div className="absolute mb-10 bottom-6 left-1/2 transform -translate-x-1/2">
              <p className="text-center text-sm sm:text-base font-semibold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                Built for Apple Intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-5">
        <div className="flex justify-center">
          <div className="relative w-full max-w-7xl h-[70vh] sm:h-[80vh] md:h-[90vh] lg:h-[100vh]">
            <img
              src={iphone}
              alt="Iphone 16"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 flex flex-col justify-start px-6 sm:px-8 md:px-12 text-black mt-8 sm:mt-10">
              <h1 className="font-bold leading-tight text-[clamp(2rem,6vw,4.5rem)]">
                iPhone 16
              </h1>
              <p className="mt-2 font-normal text-[clamp(1rem,4vw,1.75rem)]">
                Meet the iPhone 16 Family
              </p>
              <div className="mt-6 flex justify-center flex-wrap gap-3">
                <Button
                  variant="primary"
                  iconRight
                  className="text-sm sm:text-base px-4 py-2"
                >
                  Learn more
                </Button>
                <Button
                  variant="outline"
                  className="text-sm sm:text-base px-4 py-2"
                >
                  Buy
                </Button>
              </div>
              <div className="absolute mb-10 top-40 left-1/2 transform -translate-x-1/2 md:top-55 sm:top-48 lg:top-60">
                <p className="text-center text-sm sm:text-base font-semibold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                  Built for Apple Intelligence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
