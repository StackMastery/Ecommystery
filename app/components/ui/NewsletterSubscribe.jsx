import { ArrowRight } from "lucide-react";

const NewsletterSubscribe = ({ className = "" }) => {
  return (
    <>
      <form className={`flex items-center ${className}`}>
        <div className="w-full bg-white rounded-full my-5">
          <input
            placeholder="Ex: info@yourmail.com"
            className=" outline-0 py-[10px] rounded-full px-5 placeholder:text-[#2C2731] placeholder:text-sm text-sm placeholder:font-medium text-[#2C2731]"
          />
        </div>
        <button className="rounded-full bg-[#2C2731] p-2 -ml-10 scale-90 z-40 cursor-pointer">
          <ArrowRight size={20} />
        </button>
      </form>
    </>
  );
};

export default NewsletterSubscribe;
