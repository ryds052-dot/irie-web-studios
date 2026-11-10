import Seo from "../components/Seo";
import About from "../sections/About";

export default function Studio() {
  return (
    <>
      <Seo
        title="The Studio - Irie Web Studios"
        description="Two engineers in Kingston, Jamaica. Ryder Lee and Nelson Denny build web architecture, WebGL and conversion funnels without agency theatre."
      />
      <div className="pt-24"><About /></div>
    </>
  );
}
