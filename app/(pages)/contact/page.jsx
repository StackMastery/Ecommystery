import { fetchSEOBySlug } from "@/controllers/frontend/seo.controller";
import ContactPageClient from "./client";

export async function generateMetadata() {
  const seo = await fetchSEOBySlug("contact");
  return seo;
}

const ContactPage = () => {
  return (
    <>
      <ContactPageClient />
    </>
  );
};

export default ContactPage;
