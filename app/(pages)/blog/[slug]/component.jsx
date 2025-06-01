import { toHtmlId } from "@/lib/utils";
import { urlFor } from "@/sanity/lib/sanityImage";
import Image from "next/image";
import CodeBlock from "../_components/codeBlock";
import ProcessGroup from "../_components/blocks/ProcessGroup";
import ServiceData from "../_components/blocks/ServiceData";
import Faqs from "../_components/blocks/Faqs";

export const componentsSanity = {
  block: {
    normal: ({ children }) => (
      <p className="text-base my-4 text-current/70">{children}</p>
    ),
    h2: ({ children }) => {
      return (
        <h2
          head-name={children[0]}
          id={toHtmlId(children[0])}
          className="text-2xl contentHeading w-fit font-bold mt-8 mb-4 scroll-m-40"
        >
          {children}
        </h2>
      );
    },
    ch1: ({ children }) => {
      const text = Array.isArray(children)
        ? children.map((child) => child?.text || child).join("")
        : children.toString();
      return (
        <div id={toHtmlId(text)} className="text-2xl font-bold mt-8 mb-4"></div>
      );
    },

    h3: ({ children }) => {
      return (
        <h3
          head-name={children[0]}
          id={toHtmlId(children[0])}
          className="text-xl contentHeading scroll-m-40 font-semibold mt-6 mb-3"
        >
          {children}{" "}
        </h3>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc ml-6 space-y-1">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal ml-6 space-y-1 ">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="text-[15px]">{children}</li>,
    number: ({ children }) => <li className="text-[15px]">{children}</li>,
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold px-2 bg-white/10 rounded-md">
        {children}
      </strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => (
      <Link
        href={value?.href || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline hover:text-blue-800"
      >
        {children}
      </Link>
    ),
  },
  types: {
    image: ({ value }) => {
      return (
        <Image
          width={600}
          height={600}
          className="w-full my-5"
          src={urlFor(value).width(800).url()}
          alt={value.alt || "Blog image"}
        />
      );
    },
    code: ({ value }) => (
      <pre className="bg-zinc-900 text-white p-4 rounded-md overflow-x-auto">
        <code>{value.code}</code>
      </pre>
    ),
    file: ({ value }) => (
      <Link
        href={value.asset?.url || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="block my-4 text-purple-600 underline"
      >
        📎 Download File
      </Link>
    ),
    videoEmbed: ({ value }) => (
      <div className="aspect-video my-6">
        <iframe
          src={value.url}
          title="Embedded Video"
          className="w-full h-full rounded-md"
          allowFullScreen
        ></iframe>
      </div>
    ),
    horizontalRule: () => <hr className="my-8 border-t border-white/10" />,
    lineGap: () => <br />,

    code: ({ value }) => {
      return (
        <>
          <CodeBlock value={value} />
        </>
      );
    },
    processGroup: ({ value }) => {
      return <ProcessGroup value={value} />;
    },

    serviceData: ({ value }) => {
      return <ServiceData data={value} />;
    },
    faqs: ({ value }) => {
      return <Faqs faqs={value} />;
    },
  },
};
