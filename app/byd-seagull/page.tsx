import Gallery from "@/components/byd-seagull/Gallery";
import Specifications from "@/components/byd-seagull/Specifications";

const BydSeagull = () => {
  return (
    <div data-header-color="blue" className="mb-10 flex flex-col gap-20">
      <section className="bg-primary md:pt-30 py-20 font-family-cera-stencil text-3xl sm:text-6xl flex justify-center items-center text-white font-bold">
        <h1>BYD SEAGULL</h1>
      </section>
      <section className="">
        <Gallery />
      </section>
      <section>
        <Specifications />
      </section>
    </div>
  );
};

export default BydSeagull;
