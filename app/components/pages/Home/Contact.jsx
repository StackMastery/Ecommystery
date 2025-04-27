"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "../../ui/Input";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <section className="section">
        <motion.div
          initial={{ y: 100, opacity: 0, filter: "blur(10px)" }}
          whileInView={{ y: 0, opacity: 100, filter: "blur(0px)" }}
          transition={{
            type: "tween",
            duration: 0.8,
            stiffness: 300,
            damping: 20,
          }}
          className="max-w-[1440px] w-full flex-col px-5 gap-10 flex lg:flex-row pt-20 pb-40"
        >
          <div className="w-full overflow-hidden lg:w-6/12 bg-gradient-to-b from-[#121212] to-[#222222] p-10 md:p-20 rounded-4xl">
            <h2 className="bg-gradient-to-r text-5xl pr-1 font-semibold w-fit from-pB via-pM to-pY bg-clip-text text-transparent">
              Get in <span className="font-serif italic font-light">Touch</span>
            </h2>
            <p className="pt-5 text-xl">
              Fill in our quote request form <br className="sm:block hidden" />{" "}
              or Contact us
            </p>
            <ul className="pt-10 space-y-8">
              <li>
                <h2 className="text-xl font-medium text-white">Address</h2>
                <p className="text-neutral-300 text-[18px]">
                  {" "}
                  No. 607, Building 1, Brilliant
                  <br className="sm:block hidden" /> International, Shangdi 10th
                  Street
                </p>
              </li>
              <li>
                <h2 className="text-xl font-medium text-white">Address</h2>
                <p className="text-neutral-300 text-[18px]">
                  {" "}
                  Email info@wppop.com
                </p>
              </li>
              <li>
                <h2 className="text-xl font-medium text-white">WhatsApp</h2>
                <p className="text-neutral-300 text-[18px]"> +86-15910608039</p>
              </li>
            </ul>
            <div className="w-full flex justify-end">
              <svg
                width="375"
                height="229"
                className="-mb-20 translate-x-20 "
                viewBox="0 0 375 229"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  opacity="0.1"
                  cx="299.5"
                  cy="188.136"
                  r="186.5"
                  stroke="white"
                  strokeWidth="2"
                />
                <circle
                  opacity="0.1"
                  cx="187.5"
                  cy="221.136"
                  r="186.5"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
          <form className="w-full lg:w-7/12 space-y-10">
            <Input placeholder="Ex: John Kerry" label={"Your Name"} />
            <Input placeholder="Ex: info@yourmail.com" label={"Your Email"} />
            <div className="space-y-3 -mb-3 flex flex-col">
              <label className="font-light text-xl">Service You Need</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Ex: Business Setup" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="500-1000">$500-$1000</SelectItem>
                  <SelectItem value="1000-2000">$1000-$2000</SelectItem>
                  <SelectItem value="3000-4000">$3000-$4000</SelectItem>
                  <SelectItem value="5000-10000">$5000-$10000</SelectItem>
                  <SelectItem value="more">More</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-3 pt-8 -mb-5 flex flex-col">
              <label className="font-light text-xl">Project Budget</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Ex: $1k-2k" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="500-1000">$500-$1000</SelectItem>
                  <SelectItem value="1000-2000">$1000-$2000</SelectItem>
                  <SelectItem value="3000-4000">$3000-$4000</SelectItem>
                  <SelectItem value="5000-10000">$5000-$10000</SelectItem>
                  <SelectItem value="more">More</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="pt-8">
              <Input
                rows="5"
                placeholder="Write your inquiry details here and send us."
                inputType="textarea"
                label={"Project Details"}
              />
            </div>
            <Button className={`mt-5 w-full !h-14 text-xl font-medium`}>
              REQUEST QUOTE
              <ArrowUpRight
                size={20}
                strokeWidth={1.5}
                className=" group-hover:translate-x-2 group-hover:rotate-45  transition-all "
              />
            </Button>
          </form>
        </motion.div>
      </section>
    </>
  );
};

export default Contact;
