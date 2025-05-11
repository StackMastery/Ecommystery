"use client";

import { useEffect, useState } from "react";
import { PortableText } from "next-sanity";
import { componentsSanity } from "../component";
import { Hash } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import { FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const BlogConent = ({ blog }) => {
  const blogUrl = window.location.href;
  const [allContentHeads, setallContentHeads] = useState();

  useEffect(() => {
    const elements = document.querySelectorAll(".contentHeading");
    const heads = Array.from(elements).map((el) => ({
      headName: el.getAttribute("head-name"),
      id: el.id,
    }));
    setallContentHeads(heads);
  }, [blog.content]);

  return (
    <section className="section">
      <div className="max-w-[1440px] w-full flex justify-center absolute mt-4m20">
        <motion.span
          initial={{ scale: 0.3, translateY: -300, opacity: 0 }}
          animate={{ scale: 1, translateY: -80, opacity: 1 }}
          className="bg-[#161577]/70 w-[1000px] h-[1000px]  blur-[200px] flex"
        />
      </div>
      <div className="max-w-[1240px] flex-col md:flex-row w-full flex justify-between gap-10 px-5 pb-40 relative z-[99999]">
        <div className="w-full md:w-4/12 space-y-8">
          {allContentHeads?.length > 0 && (
            <div>
              <h3 className="text-2xl sm:text-3xl">Table of Contents</h3>
              <ul className="pt-8 space-y-3">
                {allContentHeads.map((head, index) => {
                  return (
                    <>
                      <Link
                        href={`#${head.id}`}
                        className="flex gap-2 items-center text-sm md:text-[18px] cursor-pointer group hover:underline"
                      >
                        <span className="group-hover:opacity-0 transition-all">
                          {index + 1}.{" "}
                        </span>
                        <span className=" absolute -ml-1 opacity-0 group-hover:opacity-100 transition-all">
                          <Hash size={20} />
                        </span>
                        {head.headName.trim()}
                      </Link>
                    </>
                  );
                })}
              </ul>
            </div>
          )}
          <div>
            <h3 className="text-2xl sm:text-3xl">Share</h3>
            <div className="flex flex-wrap gap-5 pt-5">
              <LinkedinShareButton url={blogUrl}>
                <FaLinkedin
                  className="text-white/50 hover:text-white transition-all"
                  size={25}
                />
              </LinkedinShareButton>
              <TwitterShareButton url={blogUrl}>
                <FaXTwitter
                  className="text-white/50 hover:text-white transition-all"
                  size={25}
                />
              </TwitterShareButton>
              <FacebookShareButton url={blogUrl}>
                <FaFacebook
                  className="text-white/50 hover:text-white transition-all"
                  size={25}
                />
              </FacebookShareButton>
            </div>
          </div>
        </div>
        <div className="w-full md:w-8/12">
          <PortableText components={componentsSanity} value={blog.content} />
        </div>
      </div>
    </section>
  );
};

export default BlogConent;
