import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { track } from "../lib/track";

const BANNER = [
  "==============================================",
  "  IRIE OS v2.7  --  studio terminal",
  "  Kingston, Jamaica  --  iriewebstudios.com",
  "==============================================",
];

const BOOT = [
  "irie-os bios v2.7 booting ...",
  "mounting /kingston ................. OK",
  "loading type systems ............... OK",
  "calibrating gold ................... OK",
  "scanning for templates ............. NONE FOUND",
  "",
  "access granted. type 'help' to begin.",
];

const HELP = [
  "AVAILABLE COMMANDS",
  "  help ............. this menu",
  "  work ............. selected projects, live links",
  "  services ......... what we build + the price list",
  "  price ............ shortcut to the numbers",
  "  slots ............ current availability",
  "  book ............. how to reach the studio",
  "  whatsapp ......... the fastest way to reach us",
  "  nelson ........... who answers first",
  "  ryder ............ who builds it",
  "  go <page> ........ go work | services | studio | contact | home",
  "  whoami ........... identify yourself",
  "  sudo hire-us ..... escalate privileges",
  "  hack ............. do not",
  "  matrix ........... follow the white rabbit",
  "  clear ............ wipe the screen",
  "  exit ............. close terminal",
  "",
  "  (some commands are not listed. explore.)",
];

const WORK = [
  "01  Earth Family Farms ...... earth-family-farms.vercel.app",
  "    100 acres of Saint Ann forestry, carried to the world.",
  "",
  "02  Trini-Yaad ............... trini-yaad.vercel.app",
  "    Street food ordering in two taps. No app install.",
  "",
  "03  Irie Web Studios Core .... iriewebstudios.com",
  "    The proving ground for everything we ship.",
  "",
  "full case studies: type 'go work'",
];

const SERVICES = [
  "LAUNCH      $285 .... one page, shipped in days, live fast",
  "MOMENTUM    $985 .... multi-page, SEO, the full conversion build",
  "FLAGSHIP  $2,165 .... 3D, motion systems, the site competitors copy",
  "",
  "CARE PLANS  from $50/mo ... hosting, updates, monitoring",
  "SECURITY    from $240/mo ... hardening, audits, wallet forensics",
  "",
  "fixed fee. written scope. collected before work starts.",
];

const CHARS = "??????????????????0123456789ABCDEF<>/*";

export default function Terminal() {
  const [open, setOpen] = useState(false);
  const [booted, setBooted] = useState(false);
  const [busy, setBusy] = useState(false);
  const [lines, setLines] = useState([]);
  const [value, setValue] = useState("");
  const [history, setHistory] = useState([]);
  const [hIdx, setHIdx] = useState(-1);
  const bodyRef = useRef(null);
  const inputRef = useRef(null);
  const alive = useRef(true);
  const navigate = useNavigate();

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const push = (t, cls) => setLines((L) => [...L, { t, cls }]);
  const pushMany = async (arr, delay, cls) => {
    for (const l of arr) {
      if (!alive.current) return;
      push(l, cls);
      if (delay) await sleep(delay);
    }
  };

  useEffect(() => () => { alive.current = false; }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.code === "Backquote") {
        if (open && e.target === inputRef.current) return;
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (open && !booted) {
      setBooted(true);
      setBusy(true);
      (async () => {
        await pushMany(BANNER, 55);
        await pushMany(BOOT, 110);
        setBusy(false);
        inputRef.current?.focus();
      })();
    }
  }, [open, booted]);

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [lines, open]);

  const run = async (raw) => {
    const t = raw.trim();
    push("> " + t, "cmd");
    if (!t) return;
    setHistory((H) => [t, ...H].slice(0, 40));
    setHIdx(-1);
    const [cmd, ...args] = t.toLowerCase().split(/\s+/);
    setBusy(true);
    switch (cmd) {
      case "help":
        await pushMany(HELP, 24);
        break;
      case "work":
        await pushMany(WORK, 40);
        break;
      case "services":
      case "pricing":
        await pushMany(SERVICES, 40);
        break;
      case "price":
      case "quote":
        await pushMany([
          "LAUNCH $285 / MOMENTUM $985 / FLAGSHIP $2,165",
          "care from $50/mo. security from $240/mo.",
          "fixed fee. written scope. no surprises.",
          "",
          "want the real quote? 'sudo hire-us'",
        ], 70, "gold");
        break;
      case "whatsapp":
        await pushMany([
          "fastest channel, always answered:",
          "",
          "  https://wa.me/18764354047",
          "",
          "tell us about your business. get a fixed quote same day.",
        ], 90, "gold");
        break;
      case "nelson":
        await pushMany([
          "NELSON -- first replies, briefs, scheduling.",
          "the first voice you hear. the reason nothing slips.",
          "",
          "response time: under 2 hours.",
          "try him: type 'whatsapp'",
        ], 90);
        break;
      case "ryder":
        await pushMany([
          "RYDER -- engineer. 70% of the company. 100% of the code.",
          "react. vite. tailwind. canvas. zero templates.",
          "every pixel hand-built. every site from scratch.",
          "",
          "security + web3 wallet forensics: his specialty.",
        ], 90);
        break;
      case "slots":
        if (args[0] === "book") {
          await pushMany([
            "reserving slot ...",
            "slot reserved -- pending payment.",
            "50% deposit locks it. routing you to /contact ...",
          ], 130, "gold");
          await sleep(500);
          setOpen(false);
          navigate("/contact");
        } else {
          await pushMany([
            "when they are gone, they are gone.",
            "",
            "to reserve one: 'slots book 1'",
          ], 140);
        }
        break;
      case "book":
      case "contact":
        await pushMany([
          "iriewebstudios@iriewebstudios.com",
          "+1 876 520 6119  /  +1 876 435 4047",
          "",
          "fastest: type 'whatsapp'",
          "or escalate: 'sudo hire-us'",
        ], 90);
        break;
      case "uptime":
        await pushMany([
          "studio uptime ........ 6 years",
          "downtime ............. 0",
          "excuses .............. 0",
          "templates used ....... 0",
        ], 90, "gold");
        break;
      case "ls":
        await pushMany([
          "work/   services/   slots/   secrets/",
        ], 60);
        break;
      case "cd":
        if (args[0] === "secrets" || args[0] === "secrets/") {
          await pushMany([
            "nice try. root access required.",
            "(hint: an old game controller sequence works here.)",
          ], 110, "gold");
        } else {
          push("cd: no such directory: " + (args[0] || "~"), "err");
        }
        break;
      case "cat":
        if (args[0] === "motto.txt") {
          await pushMany([
            "every pixel hand-built. zero templates.",
            "fixed fee. written scope. work starts when it is paid.",
            "two slots. no exceptions.",
          ], 90, "gold");
        } else {
          push("cat: " + (args[0] || "?") + ": no such file", "err");
        }
        break;
      case "whoami":
        push("visitor@iriewebstudios -- clearance: GUEST. escalate with 'sudo hire-us'.");
        break;
      case "go": {
        const map = { work: "/work", services: "/services", studio: "/studio", contact: "/contact", home: "/" };
        const dest = map[args[0]];
        if (dest) {
          push("navigating to " + dest + " ...", "gold");
          await sleep(450);
          setOpen(false);
          navigate(dest);
        } else {
          push("usage: go work | services | studio | contact | home", "err");
        }
        break;
      }
      case "sudo":
        if (args[0] === "hire-us" || args[0] === "hire") {
          await pushMany([
            "requesting root access ........",
            "checking budget ............... OK",
            "checking seriousness .......... OK",
            "clearance upgraded: CLIENT",
            "",
            "fastest next step: https://wa.me/18764354047",
            "routing you to /contact ...",
          ], 130, "gold");
          await sleep(500);
          setOpen(false);
          navigate("/contact");
        } else {
          push("usage: sudo hire-us", "err");
        }
        break;
      case "hack":
        await pushMany([
          "initializing breach protocol ...",
          "bypassing firewall  [················] 66%",
          "injecting payloads ............",
          "",
          "just kidding. we build websites. try 'work'.",
        ], 170, "green");
        break;
      case "matrix": {
        push("entering the construct ...", "green");
        const end = Date.now() + 3200;
        const iv = setInterval(() => {
          if (Date.now() > end || !alive.current) {
            clearInterval(iv);
            push("wake up. the site needs you. type 'book'.", "green");
            return;
          }
          let s = "";
          for (let i = 0; i < 56; i++) s += CHARS[Math.floor(Math.random() * CHARS.length)];
          push(s, "green");
        }, 60);
        break;
      }
      case "konami":
        await pushMany([
          "KONAMI CODE ACCEPTED.",
          "granting root access to irie-os ...",
          "",
          "the site just changed. look around.",
        ], 90, "gold");
        document.documentElement.classList.add("root-mode");
        break;
      case "clear":
        setLines([]);
        break;
      case "exit":
      case "close":
      case "quit":
        setOpen(false);
        break;
      default:
        push("command not found: " + cmd + " -- try 'help'", "err");
    }
    setBusy(false);
  };

  const onEnter = (e) => {
    if (e.key === "Enter" && !busy) {
      run(value);
      setValue("");
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      const i = Math.min(hIdx + 1, history.length - 1);
      if (history[i] !== undefined) { setHIdx(i); setValue(history[i]); }
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const i = Math.max(hIdx - 1, -1);
      setHIdx(i);
      setValue(i === -1 ? "" : history[i]);
    }
  };

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-5 left-5 z-[90] hidden items-center gap-2 border border-line bg-ink/80 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-mute backdrop-blur transition-colors hover:border-gold/60 hover:text-gold md:flex"
        aria-label="Open terminal"
      >
        &gt;_ terminal
        <kbd className="border border-line px-1 text-[9px]">~</kbd>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center md:p-10">
      <div className="absolute inset-0 bg-ink/70 backdrop-blur-sm" onClick={() => setOpen(false)} />
      <div className="relative flex h-full w-full max-w-4xl flex-col overflow-hidden border border-gold/30 bg-[#050504] shadow-[0_0_80px_rgba(200,169,106,0.12)] md:h-[80vh]">
        <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold">irie-os -- /kingston</span>
          <div className="flex items-center gap-3">
            <span className="hidden font-mono text-[9px] text-mute md:inline">~ toggle &middot; esc close</span>
            <button onClick={() => setOpen(false)} className="font-mono text-[11px] text-mute hover:text-gold">[x]</button>
          </div>
        </div>
        <div ref={bodyRef} className="relative flex-1 overflow-y-auto px-4 py-3 font-mono text-[12px] leading-[1.55]">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.05]"
            style={{ background: "repeating-linear-gradient(0deg, transparent 0 2px, rgba(255,255,255,0.6) 2px 3px)" }}
          />
          {lines.map((l, i) => (
            <div
              key={i}
              className={
                l.cls === "cmd" ? "whitespace-pre-wrap text-bone"
                : l.cls === "green" ? "whitespace-pre text-[#7fd77f]"
                : l.cls === "err" ? "text-[#e06c5a]"
                : l.cls === "gold" ? "text-gold"
                : "whitespace-pre-wrap text-[#9a958a]"
              }
            >
              {l.t || "\u00A0"}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 border-t border-line px-4 py-3">
          <span className="font-mono text-[12px] text-gold">visitor@irie:~$</span>
          <input
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={onEnter}
            className="w-full bg-transparent font-mono text-[16px] text-bone outline-none md:text-[13px]"
            style={{ caretColor: "#c8a96a" }}
            spellCheck={false}
            autoComplete="off"
            placeholder={busy ? "..." : "type help"}
          />
        </div>
      </div>
    </div>
  );
}
