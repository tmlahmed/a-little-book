/* =========================================================
   A LITTLE BOOK ABOUT YOU

   ✦ EVERYTHING YOU NEED TO PERSONALISE IS IN `CONFIG` BELOW ✦

   - Replace anything in [SQUARE BRACKETS] with your own words.
   - Photos go in  assets/photos/   (missing photos show a placeholder)
   - Music goes in assets/music/    (missing audio still "plays" silently)
   - Add or remove items from any list; the page adapts.
   ========================================================= */



const CONFIG = {
  herName: "LOVE",
  yourName: "TAMAL",
  birthday: "October 5",
  age: 24,

  /* Soft music behind the whole book. Starts on load where the browser
     allows it, otherwise on her first tap. Pauses for playlist songs.
     Set file to "" to turn it off. volume: 0 – 1. */
  backgroundMusic: {
    file: "assets/music/background.mp3",
    volume: 0.18,
  },

  intro: {
    line: "The girl who somehow became my favorite person.",
    text: "It started with an Instagram story about Prison Break. A reply, a conversation, and then somehow, years later, I was picking you up from Mirpur DOHS and taking you to North End. I remember thinking you were gorgeous, but what stayed with me even more was the way you talked and the way you saw things.",
    photos: [
      { src: "assets/photos/bristy_intro_1.jpg", alt: "A picture of Bristy" },
      { src: "assets/photos/bristy_intro_2.jpg", alt: "A memory of us" },
      { src: "assets/photos/bristy_intro_3.jpg", alt: "One of my favorite pictures of you" },
    ],
  },

  things: [
    {
      icon:"books",
      name:"Books",
      first:"You can disappear into a book and completely forget the world around you.",
      then:"Maybe that's why I ended up filling your shelves with Murakami, Camus, Sylvia Plath and all the other worlds I thought you'd like."
    },
    {
      icon:"music",
      name:"Music",
      first:"Music is never just music with you. It comes with stories, explanations, favorite parts, and a lot of things I apparently need to know.",
      then:"Especially when we're in an Uber and you've already decided what we're listening to."
    },
    {
      icon:"heart",
      name:"BTS",
      first:"You don't just like BTS. You have an entire encyclopedia of BTS information stored somewhere in your head.",
      then:"Jungkook, Taehyung, every tiny detail, and a very strong belief that I need to understand exactly how cool they are."
    },
    {
      icon:"sparkle",
      name:"Taylor Swift",
      first:"Then there's your Taylor Swift side, where one song can somehow become a whole conversation.",
      then:"And somehow evermore feels like it belongs in your world. Quiet, thoughtful, and full of things that take a little time to understand."
    },
    {
      icon:"moon",
      name:"The little details",
      first:"You notice things other people might not even think about.",
      then:"Even grocery shopping becomes a mission. Two or three of everything, and every single one has to look perfect. You do the same thing with books. No bent corners. No marks. The best-looking copy or nothing."
    },
    {
      icon:"us",
      name:"Us",
      first:"Somewhere between the books, music, coffee, food, and all your very specific preferences, there became an us.",
      then:"And honestly, I like that version of my life quite a lot."
    },
  ],

  eras: [
    {
      title:"The Soft Era",
      description:"The side of you that I notice in the quiet moments. The one that makes ordinary things feel a little different.",
      memory:"Maybe it's the way you hold my hand, or the way a simple car ride can become one of my favorite parts of the day."
    },
    {
      title:"The BTS Era",
      description:"Seven people I've somehow learned far too much about because you love them that much.",
      memory:"I love watching you explain your favorite things, especially when Jungkook or Taehyung is involved. You get completely into it."
    },
    {
      title:"The Bookworm Era",
      description:"Murakami, Camus, Sylvia Plath, Bookworm Bookshop, and the search for the perfect copy.",
      memory:"You can spend an unreasonable amount of time checking a book from every possible angle just to make sure there isn't a tiny problem with it. Somehow, that's very you."
    },
    {
      title:"The Overthinking Era",
      description:"You don't always see things the way everyone else does. You have your own perspective, and I love that about you.",
      memory:"You make me stop and look at things differently sometimes. Even things I thought were completely normal."
    },
    {
      title:"The Serious Era",
      description:"You can be very serious, especially when you're dealing with me acting like I'm sixteen.",
      memory:"I don't know why being around you brings out that side of me. But I think I like being a little ridiculous around someone who knows me this well."
    },
    {
      title:"The Us Era",
      description:"The one I hope keeps getting longer.",
      memory:"More books to read, more places to go, more food to try, more completely ordinary days together."
    },
  ],

  songs: [
    {
      label:"A BTS song that reminds me of you",
      title:"Lights",
      artist:"BTS",
      why:"Because it carries a feeling that makes me think of you. And because, at this point, it would be strange for a playlist about you not to have BTS somewhere in it.",
      file:"assets/music/lights.mp3",
      art:"assets/photos/lights.jpg",
      link:"",
      length:"4:52",
    },
    {
      label:"A Taylor Swift song that reminds me of you",
      title:"Call It What You Want",
      artist:"Taylor Swift",
      why:"Some songs become associated with people without you really deciding it. This became one of those songs for me.",
      file:"assets/music/call-it-what-you-want.mp3",
      art:"assets/photos/ts.jpg",
      link:"",
      length:"3:26",
    },
    { 
      label:"A song that reminds me of us", 
      title:"My Universe", artist:"Coldplay & BTS", 
      why:"I've always loved Coldplay, and somehow this became the perfect song for you. Because if I'm being honest, you really are my universe.",
      file:"assets/music/my-universe.mp3", 
      art:"assets/photos/my-universe.jpg", 
      link:"",
      length:"3:48", },
    {
      label:"A secret song",
      title:"I Don't Want to Miss a Thing",
      artist:"Aerosmith",
      why:"This was already one of my favorite songs. Then I started associating it with you, and now I can't really hear it without thinking of you.",
      file:"assets/music/aerosmith.mp3",
      art:"assets/photos/aerosmith.jpeg",
      link:"",
      length:"4:53",
      secret:true,
    },
  ],

  memories: [
    {
      photo:"assets/photos/memory-01.jpg",
      label:"North End",
      note:"Our first coffee together. I remember sitting there and realizing how much I liked listening to you talk."
    },
    {
      photo:"assets/photos/memory-02.jpg",
      label:"Us",
      note:"One of those ordinary moments that doesn't need a big story. I'm just happy that I get to hold your hand."
    },
    {
      photo:"assets/photos/memory-03.jpg",
      label:"Faridpur",
      note:"The road to your hometown, sharing AirPods and listening to the same music. I think I could happily do that kind of nothing with you for a very long time."
    },
    {
      photo:"assets/photos/memory-04.jpg",
      label:"Your cooking era",
      note:"You made dal and khichuri for me, even though you don't usually cook. I liked it so much that it still makes the list of things I remember."
    },
    {
      photo:"assets/photos/memory-05.jpg",
      label:"Our car rides",
      note:"Every Uber ride somehow becomes your personal music session. BTS, Taylor Swift, and occasionally a detailed explanation of why I absolutely need to understand what I'm listening to."
    },
    {
      photo:"assets/photos/memory-06.jpg",
      label:"The little things",
      note:"Maybe these are the memories I end up keeping the longest. Not the big occasions, just the small pieces of time that became ours."
    },
  ],

  personalMessages: [
    "I love the way you talk.",
    "I love how excited you get about the things you love, especially BTS and Taylor Swift.",
    "I love that you have a perspective on things that most of us would simply accept as normal.",
    "I love how particular you are about the things you care about. Even when you're choosing a book or picking something at Unimart, you notice every little detail.",
    "I love your little worlds: books, music, North End, Pan-Asian food, lilies, and all the things that make you unmistakably you.",
    "I feel most at home with you when we're together.",
    "I don't tell you this enough, but I love you more every day.",
  ],

  secret: {
    message:"I still remember the first time you put your head on my shoulder. You probably don't remember it the same way I do, but I kept that moment. And there are other little things I never tell you about too. Like how, whenever we're in a car together, I sometimes just notice the smell of your hair and quietly take it in. You probably have no idea how many tiny moments of you I keep.",
    photo:"",
    signoff:"Some things are better kept between us.",
  },

  finalMessage:"Another year of you. And another year I get to be beside you. I want more books to read together, more ordinary days, more food to try, more places to go, and finally that day trip I've been planning for far too long. I want to be beside you through the easy parts and the difficult ones, keeping you close through all of it. I want us to get through the hard days, enjoy the small ones, and slowly build a life together. Nothing perfect. Just ours. Happy birthday, Bristy. I love you more every day."
};




/* =========================================================
   That's it — you don't need to change anything below.
   ========================================================= */

(function () {
  "use strict";

  const doc = document.documentElement;
  doc.classList.add("js");

  const $ = (id) => document.getElementById(id);
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const STAR = '<svg class="star" aria-hidden="true"><use href="#star"/></svg>';

  const ICONS = {
    books: '<path d="M4.500 4h4v16h-4zM8.500 6h4v14h-4zM14.300 7.300l3.700-1 3.300 12.700-3.700 1z"/>',
    music: '<path d="M4 15v-3a8 8 0 0116 0v3"/><rect x="3" y="14" width="4" height="6.500" rx="1.500"/><rect x="17" y="14" width="4" height="6.500" rx="1.500"/>',
    heart: '<path d="M12 20s-7.500-4.500-7.500-10.200a4.100 4.100 0 017.500-2.300 4.100 4.100 0 017.500 2.300C19.500 15.500 12 20 12 20z"/>',
    sparkle: '<path d="M10.500 3c.5 5 2.500 7 7.500 7.500-5 .5-7 2.500-7.500 7.500-.5-5-2.500-7-7.500-7.500 5-.5 7-2.500 7.500-7.500z"/><path d="M19 16v4.500M16.750 18.250h4.500"/>',
    moon: '<path d="M19.500 14.500A8 8 0 019.500 4.500a8 8 0 1010 10z"/><path d="M17 4v3M15.500 5.500h3"/>',
    us: '<circle cx="9" cy="12" r="5.500"/><circle cx="15" cy="12" r="5.500"/>',
  };

  /* ---------- tiny helpers ---------- */
  function el(tag, cls, text) {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text != null) node.textContent = text;
    return node;
  }

  function roman(n) {
    return ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"][n - 1] || String(n);
  }

  /* A photo that degrades into an elegant placeholder if the file is missing. */
  function photo(src, alt) {
    const box = el("div", "photo");
    const ph = el("div", "photo__ph");
    ph.innerHTML = STAR;
    ph.append(el("b", "", "[Add photo here]"), el("small", "", src));
    box.append(ph);
    if (src) addImage(box, src, alt, () => box.classList.add("has-img"));
    return box;
  }

  function addImage(parent, src, alt, onLoad) {
    const img = new Image();
    img.loading = "lazy";
    img.decoding = "async";
    img.alt = alt || "";
    img.onload = () => onLoad && onLoad(img);
    img.onerror = () => img.remove();
    img.src = src;
    parent.append(img);
  }

  /* ---------- names, dates ---------- */
  document.querySelectorAll("[data-bind]").forEach((node) => {
    const value = CONFIG[node.dataset.bind];
    if (value != null) node.textContent = value;
  });

  /* ---------- Chapter I ---------- */
  $("introLine").textContent = CONFIG.intro.line;
  $("introText").textContent = CONFIG.intro.text;
  CONFIG.intro.photos.forEach((p) => {
    const frame = el("div", "frame reveal unroll");
    frame.append(photo(p.src, p.alt));
    $("introPhotos").append(frame);
  });

  /* ---------- Chapter II ---------- */
  CONFIG.things.forEach((thing, i) => {
    const btn = el("button", "thing reveal");
    btn.type = "button";
    btn.style.setProperty("--d", (i % 2) * 0.12 + "s");
    const icon = el("span", "thing__icon");
    icon.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true">' + (ICONS[thing.icon] || ICONS.sparkle) + "</svg>";
    const mark = el("span", "thing__mark");
    mark.innerHTML = STAR;
    btn.append(el("span", "thing__no", "No. " + (i + 1)), icon, el("span", "thing__name", thing.name), mark);
    btn.addEventListener("click", () => {
      btn.classList.add("is-read");
      openNote({ kicker: thing.name, first: thing.first, then: thing.then });
    });
    $("things").append(btn);
  });

  /* ---------- Chapter III ---------- */
  const eras = $("eras");
  const dots = $("eraDots");
  CONFIG.eras.forEach((era, i) => {
    const card = el("button", "era");
    card.type = "button";
    card.setAttribute("aria-pressed", "false");

    const no = () => {
      const row = el("span", "era__no");
      row.append(el("span", "", "Era"), el("span", "", roman(i + 1)));
      return row;
    };

    const front = el("span", "era__face era__front");
    const art = el("span", "era__art");
    if (era.photo) addImage(art, era.photo, era.title);
    front.append(no(), art, el("span", "era__title", era.title), el("span", "era__hint", "tap to turn over"));

    const back = el("span", "era__face era__back");
    back.append(no(), el("span", "era__back-title", era.title), el("span", "era__desc", era.description));
    if (era.memory) back.append(el("span", "era__memory", era.memory));

    const inner = el("span", "era__inner");
    inner.append(front, back);
    card.append(inner);
    card.addEventListener("click", () => {
      const flipped = card.classList.toggle("is-flipped");
      card.setAttribute("aria-pressed", String(flipped));
    });
    eras.append(card);
    dots.append(el("span", i === 0 ? "on" : ""));
  });

  let eraTick = false;
  eras.addEventListener("scroll", () => {
    if (eraTick) return;
    eraTick = true;
    requestAnimationFrame(() => {
      eraTick = false;
      const cards = eras.children;
      if (cards.length < 2) return;
      const step = cards[1].offsetLeft - cards[0].offsetLeft;
      const current = Math.round(eras.scrollLeft / step);
      [...dots.children].forEach((d, i) => d.classList.toggle("on", i === current));
    });
  }, { passive: true });

  /* ---------- Background music ----------
     One persistent audio element for the whole book. It never plays at the
     same time as a playlist song: the player calls hold() before it starts
     a song and release() when a song finishes. */
  const Music = (function initBackgroundMusic() {
    const cfg = CONFIG.backgroundMusic || {};
    const btn = $("bgmBtn");
    const off = { start() {}, hold() {}, paused() {}, release() {} };
    if (!cfg.file) return off;

    const volume = Math.min(1, Math.max(0, cfg.volume == null ? 0.18 : cfg.volume));
    const bgm = new Audio(cfg.file);
    bgm.loop = true;
    bgm.preload = "auto";
    bgm.volume = volume;

    let userMuted = false;  // she tapped the control to silence it
    let held = false;       // the playlist has the floor
    let songPlaying = false;
    let broken = false;     // file missing or unplayable

    // `audible` is only true once the browser reports real playback,
    // so the indicator never claims music that isn't there.
    let audible = false;

    function draw() {
      btn.classList.toggle("is-on", audible && !bgm.paused);
      btn.classList.toggle("is-muted", userMuted);
      btn.setAttribute("aria-pressed", String(userMuted));
      btn.setAttribute("aria-label", (bgm.paused ? "Play" : "Mute") + " background music");
    }

    // Must be called synchronously from a tap/click handler on iOS:
    // no timers, promises or animation callbacks between the tap and play().
    function start() {
      if (broken || userMuted || held || !bgm.paused) return;
      bgm.muted = false;
      bgm.volume = volume; // iOS ignores this and uses the phone's own volume
      const attempt = bgm.play();
      if (!attempt || !attempt.then) return;
      attempt.then(() => {
        audible = !bgm.paused;
        draw();
      }).catch((err) => {
        audible = false;
        draw();
        if (err && err.name === "AbortError") return; // paused again before it began
        console.error("Background music failed to start:", err);
        // Autoplay blocked: wait quietly for her next tap or key press.
        if (err && err.name === "NotAllowedError") waitForGesture();
      });
    }

    let waiting = false;
    function waitForGesture() {
      if (waiting) return;
      waiting = true;
      const events = ["touchend", "click", "keydown"];
      const go = () => {
        waiting = false;
        events.forEach((name) => document.removeEventListener(name, go, true));
        start();
      };
      events.forEach((name) => document.addEventListener(name, go, true));
    }

    bgm.addEventListener("playing", () => { audible = true; draw(); });
    bgm.addEventListener("pause", () => { audible = false; draw(); });
    bgm.addEventListener("error", () => { broken = true; audible = false; btn.hidden = true; });

    btn.hidden = false;
    btn.addEventListener("click", () => {
      if (!bgm.paused) { userMuted = true; bgm.pause(); }
      else if (songPlaying) userMuted = !userMuted;   // only a preference while a song plays
      else { userMuted = false; held = false; start(); }
      draw();
    });

    // Don't keep playing behind a locked phone or another tab.
    let wasPlaying = false;
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) { wasPlaying = !bgm.paused; bgm.pause(); }
      else if (wasPlaying) start();
    });

    draw();
    start(); // best-effort autoplay on load

    return {
      start,
      hold() { held = true; songPlaying = true; bgm.pause(); },
      paused() { songPlaying = false; },               // song paused: stay quiet
      release() { held = false; songPlaying = false; start(); },
    };
  })();

  /* ---------- Chapter IV — the player ---------- */
  (function initPlayer() {
    const songs = CONFIG.songs;
    if (!songs.length) return;

    const player = $("player");
    const seek = $("seek");
    const sleeve = $("playerSleeve");
    const list = $("tracks");
    /* The chapter's atmosphere follows the current song's artwork: two muted
       colours are read from the image (once per image, then cached) and
       cross-faded in as soft glows over the chapter's own background. */
    const palettes = new Map();   // art src -> Promise<[colour, colour] | null>
    const layers = [0, 1].map(() => {
      const layer = el("div", "ambience");
      layer.setAttribute("aria-hidden", "true");
      $("ch4").prepend(layer);
      return layer;
    });
    let frontLayer = 0, shownArt = null;

    function toHsl(r, g, b) {
      r /= 255; g /= 255; b /= 255;
      const max = Math.max(r, g, b), min = Math.min(r, g, b), l = (max + min) / 2, d = max - min;
      if (!d) return [0, 0, l];
      const sat = d / (l > 0.5 ? 2 - max - min : max + min);
      const h = max === r ? ((g - b) / d + (g < b ? 6 : 0)) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
      return [h / 6, sat, l];
    }

    // Keep whatever the artwork gives us dusky and soft, so cream text stays readable.
    function mute([r, g, b]) {
      const [h, sat, l] = toHsl(r, g, b);
      const s2 = Math.min(sat, 0.45), l2 = Math.min(0.36, Math.max(0.24, l));
      return "hsla(" + Math.round(h * 360) + "," + Math.round(s2 * 100) + "%," + Math.round(l2 * 100) + "%,.5)";
    }

    function readPalette(src) {
      if (!palettes.has(src)) {
        palettes.set(src, new Promise((resolve) => {
          const img = new Image();
          img.decoding = "async";
          img.onerror = () => resolve(null);
          img.onload = () => {
            try {
              const size = 24;
              const canvas = document.createElement("canvas");
              canvas.width = canvas.height = size;
              const ctx = canvas.getContext("2d", { willReadFrequently: true });
              ctx.drawImage(img, 0, 0, size, size);
              const px = ctx.getImageData(0, 0, size, size).data;

              // Group pixels into 12 hue families, favouring the colourful ones.
              const bins = Array.from({ length: 12 }, (_, i) => ({ i, w: 0, r: 0, g: 0, b: 0 }));
              const all = { w: 0, r: 0, g: 0, b: 0 };
              for (let i = 0; i < px.length; i += 4) {
                const r = px[i], g = px[i + 1], b = px[i + 2];
                const [h, sat] = toHsl(r, g, b);
                const w = sat + 0.05;
                [bins[Math.min(11, Math.floor(h * 12))], all].forEach((bin) => {
                  bin.w += w; bin.r += r * w; bin.g += g * w; bin.b += b * w;
                });
              }
              const avg = (bin) => [bin.r / bin.w, bin.g / bin.w, bin.b / bin.w];
              bins.sort((a, b) => b.w - a.w);
              const first = bins[0];
              const far = (bin) => Math.min(Math.abs(bin.i - first.i), 12 - Math.abs(bin.i - first.i)) >= 2;
              const second = bins.find((bin) => far(bin) && bin.w > first.w * 0.15) || all;
              resolve([mute(avg(first)), mute(avg(second))]);
            } catch (e) {
              resolve(null); // e.g. opened straight from disk: the canvas can't be read
            }
          };
          img.src = src;
        }));
      }
      return palettes.get(src);
    }

    function setAmbience(src) {
      if (src === shownArt) return;
      shownArt = src;
      const fadeOut = () => layers.forEach((layer) => layer.classList.remove("on"));
      if (!src) return fadeOut();
      readPalette(src).then((colours) => {
        if (shownArt !== src) return;          // she has already moved on to another song
        if (!colours) return fadeOut();        // no artwork: just the chapter's own colour
        const next = layers[1 - frontLayer];
        next.style.setProperty("--album-1", colours[0]);
        next.style.setProperty("--album-2", colours[1]);
        next.classList.add("on");
        layers[frontLayer].classList.remove("on");
        frontLayer = 1 - frontLayer;
      });
    }

    const SLEEVES = [["#5B4B73", "#1C1820"], ["#C8A96B", "#6E2638"], ["#6E2638", "#1C1820"], ["#1C1820", "#5B4B73"]];

    // Playlist songs are only ever started by a tap. No autoplay, no preloading.
    const audio = new Audio();
    audio.preload = "none";

    let index = 0, playing = false, silent = true, time = 0, duration = 0, timer = null;
    const revealed = new Set();

    const parseLength = (s) => {
      const m = /^(\d+):(\d{2})$/.exec(s || "");
      return m ? +m[1] * 60 + +m[2] : 180;
    };
    const fmt = (s) => Math.floor(s / 60) + ":" + String(Math.floor(s % 60)).padStart(2, "0");

    songs.forEach((song, i) => {
      const li = el("li");
      const btn = el("button", "track");
      btn.type = "button";
      const text = el("span");
      text.append(el("span", "track__label", song.label), el("span", "track__title"));
      btn.append(el("span", "track__n", String(i + 1)), text, el("span", "track__len", song.length || ""));
      btn.addEventListener("click", () => select(i, true));
      li.append(btn);
      list.append(li);
    });

    function drawTime() {
      seek.max = Math.max(1, Math.round(duration));
      seek.value = Math.round(time);
      seek.style.setProperty("--p", (duration ? (time / duration) * 100 : 0) + "%");
      $("timeNow").textContent = fmt(time);
      $("timeEnd").textContent = fmt(duration);
    }

    function draw() {
      const song = songs[index];
      $("trackTitle").textContent = song.title;
      $("trackArtist").textContent = song.artist;
      $("trackWhy").textContent = song.why || "";

      const link = $("trackLink");
      link.hidden = !song.link;
      if (song.link) link.href = song.link;

      const [a, b] = SLEEVES[index % SLEEVES.length];
      sleeve.style.setProperty("--a", a);
      sleeve.style.setProperty("--b", b);
      sleeve.querySelectorAll("img").forEach((img) => img.remove());
      if (song.art) addImage(sleeve, song.art, "Cover art for " + song.title);
      setAmbience(song.art);

      [...list.children].forEach((li, i) => {
        const btn = li.firstChild;
        const hidden = songs[i].secret && !revealed.has(i);
        btn.querySelector(".track__title").textContent = hidden ? "· · · tap to find out" : songs[i].title;
        if (i === index) btn.setAttribute("aria-current", "true");
        else btn.removeAttribute("aria-current");
      });
      drawTime();
    }

    function setPlaying(on) {
      playing = on;
      player.classList.toggle("is-playing", on);
      $("playBtn").setAttribute("aria-label", on ? "Pause" : "Play");
    }

    // With no audio file, the player keeps time on its own so the UI still works.
    function startSilent() {
      silent = true;
      clearInterval(timer);
      timer = setInterval(() => {
        time += 0.5;
        if (time >= duration) return finished();
        drawTime();
      }, 500);
      setPlaying(true);
    }

    function play() {
      Music.hold(); // the song is the only thing playing
      if (silent) return startSilent();
      const wanted = index;
      audio.play().then(() => setPlaying(true)).catch((err) => {
        if (err && err.name === "AbortError") return;
        if (wanted === index) startSilent(); // file missing or unplayable
      });
    }

    function pause() {
      clearInterval(timer);
      audio.pause();
      setPlaying(false);
      Music.paused();
    }

    // A song ran to its end: hand the room back to the background music.
    function finished() {
      pause();
      time = 0;
      drawTime();
      Music.release();
    }

    function select(i, andPlay) {
      pause();
      index = (i + songs.length) % songs.length;
      const song = songs[index];
      revealed.add(index);
      time = 0;
      duration = parseLength(song.length);
      silent = !song.file;
      if (song.file) audio.src = song.file;
      draw();
      if (andPlay) play();
    }

    audio.addEventListener("timeupdate", () => {
      if (silent) return;
      time = audio.currentTime;
      if (isFinite(audio.duration)) duration = audio.duration;
      drawTime();
    });
    audio.addEventListener("ended", finished);

    $("playBtn").addEventListener("click", () => (playing ? pause() : play()));
    $("prevBtn").addEventListener("click", () => select(index - 1, playing));
    $("nextBtn").addEventListener("click", () => select(index + 1, playing));
    $("muteBtn").addEventListener("click", (e) => {
      audio.muted = !audio.muted;
      e.currentTarget.setAttribute("aria-pressed", String(audio.muted));
      e.currentTarget.setAttribute("aria-label", audio.muted ? "Unmute" : "Mute");
    });
    seek.addEventListener("input", () => {
      time = +seek.value;
      if (!silent) { try { audio.currentTime = time; } catch (e) { /* not loaded yet */ } }
      drawTime();
    });

    // First track is shown but not started; a secret first track stays hidden.
    duration = parseLength(songs[0].length);
    silent = !songs[0].file;
    if (songs[0].file) audio.src = songs[0].file;
    if (!songs[0].secret) revealed.add(0);
    draw();
  })();

  /* ---------- Chapter V ---------- */
  CONFIG.memories.forEach((m, i) => {
    const wrap = el("article", "memory reveal");
    const fig = el("figure", "polaroid");
    fig.append(photo(m.photo, m.label), el("figcaption", "", m.label));
    wrap.append(fig, el("p", "memory__note", m.note));
    $("memories").append(wrap);
  });

  /* ---------- Chapter VI ---------- */
  CONFIG.personalMessages.forEach((text) => $("lines").append(el("p", "line", text)));

  /* ---------- Last page ---------- */
  $("finalMessage").textContent = CONFIG.finalMessage;

  /* ---------- The note (used for keepsakes and the secret) ---------- */
  const note = $("note");
  let typing = null;

  function typewrite(node, text, done) {
    clearInterval(typing);
    if (reduceMotion) { node.textContent = text; return done && done(); }
    node.textContent = "";
    let i = 0;
    typing = setInterval(() => {
      node.textContent = text.slice(0, ++i);
      if (i >= text.length) { clearInterval(typing); done && done(); }
    }, 42);
  }

  function openNote({ kicker, first, then, sign, photoSrc, secret, typed }) {
    note.classList.toggle("note--secret", !!secret);
    $("noteKicker").textContent = kicker || "";
    $("noteThen").textContent = then || "";
    $("noteSign").textContent = sign || "";

    const slot = $("notePhoto");
    slot.textContent = "";
    slot.hidden = !photoSrc;
    if (photoSrc) slot.append(photo(photoSrc, "A secret photo"));

    // the follow-up waits until the first line has landed
    note.style.setProperty("--wait", (typed && !reduceMotion ? first.length * 0.042 + 0.5 : 1.1) + "s");
    if (typed) typewrite($("noteFirst"), first);
    else { clearInterval(typing); $("noteFirst").textContent = first || ""; }

    if (typeof note.showModal === "function") { if (!note.open) note.showModal(); }
    else note.setAttribute("open", "");
  }

  function closeNote() {
    clearInterval(typing);
    if (typeof note.close === "function") note.close();
    else note.removeAttribute("open");
  }
  $("noteClose").addEventListener("click", closeNote);
  note.addEventListener("click", (e) => { if (e.target === note) closeNote(); }); // tap outside

  /* ---------- The secret star ---------- */
  $("secretStar").addEventListener("click", (e) => {
    e.currentTarget.classList.add("is-found");
    openNote({
      kicker: "✦ a secret page",
      first: "You found something I didn't tell you about.",
      then: CONFIG.secret.message,
      sign: CONFIG.secret.signoff,
      photoSrc: CONFIG.secret.photo,
      secret: true,
      typed: true,
    });
  });

  /* ---------- Opening the book ---------- */
  const story = $("story");
  $("openBook").addEventListener("click", () => {
    // First thing in the tap itself, so iPhone/iPad Safari accepts it.
    Music.start();

    story.hidden = false;
    doc.classList.add("is-open");
    setTimeout(() => {
      $("ch1").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    }, reduceMotion ? 0 : 650);
  });

  /* ---------- Turning the last page ---------- */
  $("turnPage").addEventListener("click", (e) => {
    const page = $("final");
    e.currentTarget.classList.add("is-turned");
    e.currentTarget.setAttribute("aria-hidden", "true");
    e.currentTarget.tabIndex = -1;
    page.hidden = false;
    requestAnimationFrame(() => {
      page.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
      page.querySelector(".final").classList.add("in");
      $("final-title").focus({ preventScroll: true });
    });
  });

  /* ---------- Scroll reveals ---------- */
  const reveals = document.querySelectorAll(".reveal");
  const lines = document.querySelectorAll(".line");

  if ("IntersectionObserver" in window) {
    const revealer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("in");
        revealer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    reveals.forEach((node) => revealer.observe(node));

    // Chapter VI: one sentence in focus at a time (the middle band of the screen)
    const focuser = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("seen");
        entry.target.classList.toggle("focus", entry.isIntersecting);
      });
    }, { rootMargin: "-46% 0px -46% 0px" });
    lines.forEach((node) => focuser.observe(node));
  } else {
    reveals.forEach((node) => node.classList.add("in"));
    lines.forEach((node) => node.classList.add("seen", "focus"));
  }

  /* ---------- Reading progress ---------- */
  const bar = $("progressBar");
  let scrollTick = false;
  window.addEventListener("scroll", () => {
    if (scrollTick) return;
    scrollTick = true;
    requestAnimationFrame(() => {
      scrollTick = false;
      const max = doc.scrollHeight - window.innerHeight;
      bar.style.transform = "scaleX(" + (max > 0 ? Math.min(1, window.scrollY / max) : 0) + ")";
    });
  }, { passive: true });
})();
