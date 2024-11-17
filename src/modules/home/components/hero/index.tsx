import { Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative">
      <video src={'/videos/hero.mp4'} autoPlay muted loop playsInline className="absolute inset-0 object-cover w-full h-full" />
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
      <div className="absolute bottom-0 left-0 p-1 text-xs text-ui-fg-subtle z-10 bg-black/40 backdrop-blur-sm text-white rounded">
        <p className="flex gap-2">Video Credit: <a href="https://x.com/mitch_7w">@mitch_7w</a> 
          <a href="https://x.com/radshaan">@radshaan</a> 
          <a href="https://x.com/var_epsilon">@var_epsilon</a> 
          <a href="https://x.com/levelsio">@levelsio</a>
        </p>
      </div>
    </div>
  )
}

export default Hero
