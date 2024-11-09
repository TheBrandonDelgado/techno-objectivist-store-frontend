import { Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative">
      <video src={'https://video.twimg.com/ext_tw_video/1846477146602029056/pu/vid/avc1/1280x720/u8777CpwcF3GBhSA.mp4?tag=12'} autoPlay muted loop className="absolute inset-0 object-cover w-full h-full" />
      <div className="absolute inset-0 bg-black/40 z-[5]" /> {/* Dark overlay */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-3xl leading-10 text-ui-fg-base font-normal text-stone-100 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] mb-6"
          >
            Wear the Future You Believe In
          </Heading>
          <Heading
            level="h2"
            className="text-3xl leading-10 text-ui-fg-subtle font-normal text-stone-200 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]"
          >
            Clothing for the driven, the daring, <br />and the builders of tomorrow
          </Heading>
        </span>
      </div>
    </div>
  )
}

export default Hero
