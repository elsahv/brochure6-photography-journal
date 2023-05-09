import Image from "next/image";
import content from "./data";

const Services = () => {
  return (
    <div id="services" className="main_grid">
      <section className="left-sq pt-[150px] bg-parchment text-onyx">
        <div className="mb-[50px]">
          <p className="text-lg pl-1 py-5">
            So why should you bother with a website when social media is
            available? What can a website do for your business? A website
            provides a platform for small businesses to showcase their products
            or services to a wider audience.
          </p>
          <p className="text-lg py-5">
            Its like frozen meals. Yes you can buy your meal frozen. But you can
            also cook for yourself and it will taste better in the end (mostly)
          </p>
        </div>
      </section>

      <section className="right-sq">
        <div className="py-5">
          <h2 className="font-bold text-lg text-center underline">
            Services Offered:
          </h2>
          <div className="grid 2xl:grid-cols-3 gap-2 md:grid-cols-2 sm:grid-cols-1 px-5 mt-5 ">
            {content.map((item, index) => (
              <div key={index} className="rounded-lg bg-onyx">
                <h3 className="text-center font-bold text-onyx pt-3">
                  {item.title}
                </h3>
                <div className="flex justify-center py-2">
                  <Image
                    src={item.image}
                    alt=""
                    id="border"
                    className="rounded-2xl w-16 p-3 bg-parchment border border-onyx"
                  />
                </div>
                <p className="px-2 pt-1 pb-3 text-md text-center text-munsell">
                  {item.paragraph1}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;