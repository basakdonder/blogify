import Image from "next/image";
import MainIllustration from "@/public/images/illustration-1.svg";
import Button from "@/components/Button";

export default function MainSection1() {
  return (
    <div className="px-5 flex flex-col items-center justify-center lg:my-10 lg:flex-row lg:px-0">
      <div className="my-10 lg:mr-10 lg:my-0">
        <h1 className="font-raleway text-4xl text-veryDarkBlue my-5 font-bold">
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className="my-5">
          Fylo stores your most important files in one secure location. Access
          them wherever you need, share and collaborate with friends, family,
          and co-workers.
        </p>
        <div>
          <form className="flex space-x-5">
            <input
              className="border border-lightGray px-5 py-2 rounded"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email..."
            />
            <Button label="Get Started" bgColor="brightBlue" />
          </form>
        </div>
      </div>
      <Image src={MainIllustration} alt="Main Illustration" width={600} />
    </div>
  );
}
