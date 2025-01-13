import Image, {StaticImageData} from 'next/image'

interface Sponsor {
  name: string
  logo: StaticImageData | string
}

const sponsors: Sponsor[] = [
  { name: "Transistor", logo: "https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-400.svg" },
  { name: "Reform", logo: "https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-400.svg" },
  { name: "Tuple", logo: "https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-400.svg" },
  { name: "SavvyCal", logo: "https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-400.svg" },
  { name: "Statamic", logo: "https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-400.svg" },
]

interface SponsorsProps {
  title?: string
}

const Sponsors = ({ title = "Our Sponsors" }: SponsorsProps) => {
  return (
      <section className="py-12 sm:py-24 mb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl mb-8">
            {title}
          </h2>
          <p className="text-center text-lg font-semibold leading-8 text-gray-300 mb-10">
            Trusted by the world&#39;s most innovative teams
          </p>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            {sponsors.map((sponsor, index) => (
                <Image
                    key={sponsor.name}
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={158}
                    height={48}
                    className={`col-span-2 max-h-12 w-full object-contain ${
                        index === 3 ? 'sm:col-start-2 lg:col-span-1' :
                            index === 4 ? 'col-start-2 sm:col-start-auto lg:col-span-1' :
                                'lg:col-span-1'
                    }`}
                />
            ))}
          </div>
        </div>
      </section>
  )
}


export default Sponsors;
