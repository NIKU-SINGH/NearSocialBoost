import VideoThumb from "@/public/images/hero-image.png";
// import ModalVideo from '@/components/modal-video'
import { Grid, Button } from "@geist-ui/core";

export default function Hero() {
  return (
    <section
      className="relative h-screen"
      style={{
        // background: "linear-gradient(rgb(17, 24, 39), rgb(75, 85, 99))",
        // background: "linear-gradient(to left bottom, rgb(254, 249, 195), rgb(5, 150, 105), rgb(124, 58, 237))",
      }}
    >
      {/* Navabr content */}
      {/* <div className="bg-red-400 w-full p-4 items-left flex">
        
      </div> */}

      {/* Illustration behind hero content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1"
        aria-hidden="true"
      >
        <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1
              className="text-8xl p-4 md:text-9xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              Make your website{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                wonderful
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-xl text-gray-300 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Our landing page template works on all devices, so you only have
                to set it up once, and get beautiful results forever.
              </p>
              <div
                className=" flex flex-wrap max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div>
                  {/* <a
                    className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0 p-4 rounded-full"
                    href="#0"
                  >
                    Start free trial
                  </a> */}
                  <Grid.Container gap={4}>
                    <Grid className="space-x-4">
                      <Button auto type="secondary" scale={1.25} >
                        Success Light
                      </Button>
                      <Button auto type="abort"  scale={1.25} >proportion</Button>
                    </Grid>
                  </Grid.Container>
                </div>
                {/* <div>
                  <a
                    className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4 p-4 rounded-full"
                    href="#0"
                  >
                    Learn more
                  </a>
                </div> */}
              </div>
            </div>
          </div>

          {/* Hero image */}
          {/* <ModalVideo
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080} /> */}
        </div>
      </div>
    </section>
  );
}
