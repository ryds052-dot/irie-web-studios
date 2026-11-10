import Seo from "../components/Seo";
import Contact from "../sections/Contact";

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Contact - Irie Web Studios"
        description="Tell us what you are building. Kingston, Jamaica. Replies within one business day."
      />
      <div className="pt-16"><Contact /></div>
    </>
  );
}
