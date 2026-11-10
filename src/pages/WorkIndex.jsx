import Seo from "../components/Seo";
import Works from "../sections/Works";

export default function WorkIndex() {
  return (
    <>
      <Seo
        title="Selected Work - Irie Web Studios"
        description="Three builds, three outcomes. Booking funnels, ordering engines and WebGL systems engineered in Kingston, Jamaica."
      />
      <div className="pt-24"><Works /></div>
    </>
  );
}
