import { Reveal } from "../components/FxLayer";

const QUOTES = [
  ["Bookings come in before anybody has to call. The site does the talking, so the tour starts the moment they arrive.", "Michael Lee", "Owner, Earth Family Farms"],
  ["We needed ordering that works in a Friday queue without asking anyone to download an app. Live in a week.", "Misir Ramberran", "Owner, Trini-Yaad"],
];

export default function Testimonials() {
  return (
    <section className="rule pad py-16 md:py-24">
      <div className="wrap">
        <p className="label label-amber">Owners, in their words</p>
        <h2 className="display h2 mt-3">What happened after launch.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-8">
          {QUOTES.map(([q, name, role], i) => (
            <Reveal key={name} delay={i * 70}>
              <figure className="rule flex h-full flex-col justify-between pt-5">
                <blockquote className="text-base leading-relaxed md:text-lg">&ldquo;{q}&rdquo;</blockquote>
                <figcaption className="label mt-6 border-t border-line pt-4">
                  <span className="amber">{name}</span> / {role}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
