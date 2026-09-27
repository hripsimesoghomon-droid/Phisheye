try {
  var th = localStorage.getItem("phisheye-theme");
  if (th === "dark" || th === "light") {
    document.documentElement.setAttribute("data-theme", th);
  }
} catch (e) {}

(function () {
  /* ---------- ICONS ---------- */
  function svg(p, size, sw) {
    return '<svg width="' + (size || 24) + '" height="' + (size || 24) +
      '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="' +
      (sw || 2) + '" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      p + '</svg>';
  }

  var P = {
    shieldEye:
      '<path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6l8-3z"/>' +
      '<path d="M7.5 12s1.8-3 4.5-3 4.5 3 4.5 3-1.8 3-4.5 3-4.5-3-4.5-3z"/>' +
      '<circle cx="12" cy="12" r="1.1"/>',

    shield:
      '<path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6l8-3z"/>',

    shieldBang:
      '<path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6l8-3z"/>' +
      '<path d="M12 8v5"/><path d="M12 16v.01"/>',

    check: '<path d="M6 12.5l4 4L18 8"/>',
    pause: '<path d="M9 6v12M15 6v12"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
    tri: '<path d="M12 4l9 16H3L12 4z"/><path d="M12 10v4"/><path d="M12 17.5v.01"/>',
    oct: '<path d="M8.5 3h7L21 8.5v7L15.5 21h-7L3 15.5v-7L8.5 3z"/><path d="M9.5 9.5l5 5M14.5 9.5l-5 5"/>',
    okCircle: '<circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.5 2.5L16 9.5"/>',
    msg: '<path d="M4 5h16v11H9l-5 4V5z"/>',
    qr: '<rect x="4" y="4" width="6" height="6"/><rect x="14" y="4" width="6" height="6"/><rect x="4" y="14" width="6" height="6"/><path d="M14 14h2v2h-2zM18 18h2v2h-2zM14 18h2M18 14h2"/>',
    phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z"/>',
    link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
    lock: '<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
    home: '<path d="M4 11l8-7 8 7v9h-5v-6H9v6H4v-9z"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    back: '<path d="M15 5l-7 7 7 7"/>',
    upload: '<path d="M12 16V4M7 9l5-5 5 5"/><path d="M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3"/>',
    file: '<path d="M14 3H6v18h12V7l-4-4z"/><path d="M14 3v4h4"/>',
    up: '<path d="M12 19V5M6 11l6-6 6 6"/>',
    moon: '<path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    star: '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3z"/>',
    x: '<path d="M7 7l10 10M17 7L7 17"/>',
    chat: '<path d="M3 5h13v9H8l-5 4V5z"/><circle cx="18" cy="16" r="4"/><path d="M16.5 16l1 1 2-2"/>'
  };

  /* ---------- DATA ---------- */

  var LEVEL = {
    safe: "Safe",
    suspicious: "Suspicious",
    high: "High Risk"
  };

  var SAMPLES = {
    high: {
      chip: "Bank text",
      type: "Text message",
      level: "high",
      connected: true,
      input:
        "NORTHBANK: Unusual sign-in detected. Your account will be locked in 2 hours. Verify now: northbank-secure.co/login",
      title: "This is a fake bank message",
      reasons: [
        "The link is not Northbank’s real website.",
        "The fake website was made 3 days ago.",
        "It tries to rush you: “locked in 2 hours.”"
      ],
      advice: [
        "Don’t tap the link. Don’t reply.",
        "Worried? Call Northbank using the number on the back of your card."
      ],
      details: [
        ["Website age", "3 days"],
        ["Scam lists", "Listed on 2 of 5"],
        ["Pretends to be", "northbank.com"]
      ]
    },

    suspicious: {
      chip: "Parcel text",
      type: "Text message",
      level: "suspicious",
      connected: false,
      input:
        "Your parcel is on hold. Pay a $1.99 redelivery fee within 24h: parcel-track-help.net",
      title: "Be careful. This may be a delivery scam.",
      reasons: [
        "Real delivery companies rarely ask for small fees by text.",
        "The website is new and not from a known company."
      ],
      advice: [
        "Don’t pay through this link.",
        "Check your parcel on the delivery company’s official app."
      ],
      details: [
        ["Website age", "2 months"],
        ["Scam lists", "Not listed"],
        ["Asks for payment", "Yes, $1.99"]
      ]
    },

    safe: {
      chip: "Link from a friend",
      type: "Link",
      level: "safe",
      connected: false,
      input: "https://en.wikipedia.org/wiki/Phishing",
      title: "This link looks safe",
      reasons: [
        "Wikipedia is a well-known website.",
        "It doesn’t ask for passwords, codes or money."
      ],
      advice: [
        "You can open it.",
        "Never type a password on a page you reached from a message."
      ],
      details: [
        ["Website age", "20+ years"],
        ["Scam lists", "Not listed"],
        ["Certificate", "Valid"]
      ]
    },

    phone: {
      type: "Phone number",
      level: "high",
      connected: true,
      input: "+1 (213) 555-0147",
      title: "This number is used by scammers",
      reasons: [
        "Other people reported this number for pretending to be a bank.",
        "It is linked to a fake bank text you received."
      ],
      advice: [
        "Don’t answer or call back.",
        "Never give a code or password on the phone."
      ],
      details: [
        ["Reports", "Reported as a scam"],
        ["Pretends to be", "Northbank"],
        ["Linked to", "northbank-secure.co"]
      ]
    },

    qr: {
      type: "QR code",
      level: "high",
      connected: false,
      input: "QR sticker on parking meter → pay-parking-now.co/pay",
      title: "This QR code opens a fake payment page",
      reasons: [
        "It is not the city’s parking website.",
        "It asks for your card number straight away."
      ],
      advice: [
        "Don’t enter your card details.",
        "Pay with the official parking app or at the meter."
      ],
      details: [
        ["Website age", "9 days"],
        ["Scam lists", "Listed on 1 of 5"],
        ["Asks for", "Card number"]
      ]
    }
  };

  var TYPES = [
    {
      id: "message",
      label: "Message",
      field: "Paste the message, link or phone number",
      ph: "For example: “NORTHBANK: Your account will be locked in 2 hours. Verify now: northbank-secure.co/login”",
      ex: "high"
    },
    {
      id: "link",
      label: "Link",
      field: "Paste the link here",
      ph: "For example: parcel-track-help.net",
      ex: "suspicious"
    },
    {
      id: "phone",
      label: "Phone",
      field: "Type the phone number",
      ph: "For example: +1 (213) 555-0147",
      ex: "phone"
    }
  ];

  var SEED = [
    {
      label: "Call from +1 (213) 555-0147",
      sub: "Phone call",
      when: "Yesterday, 6:40 PM",
      level: "suspicious",
      explain:
        "We couldn’t confirm who this caller was. Real companies rarely call from an unfamiliar number to ask about your account."
    },
    {
      label: "weather.gov",
      sub: "Link",
      when: "Monday",
      level: "safe",
      explain:
        "A well-known U.S. government website. It doesn’t ask for passwords, codes or money."
    },
    {
      label: "“You won a $500 gift card”",
      sub: "Email",
      when: "Sep 20",
      level: "high",
      explain:
        "It offers a surprise prize and pushes you to act fast — a common trick scammers use to get your details."
    }
  ];

  var TOGGLES = [
    {
      id: "bubble",
      label: "Show the PhishEye button in other apps",
      sub: "The small icon next to messages. High-risk warnings always show."
    },
    {
      id: "warnLinks",
      label: "Warn before opening risky links",
      sub: "For suspicious (orange) links."
    },
    {
      id: "openAnyway",
      label: "Allow “Open anyway” on blocked websites",
      sub: "Off is safest."
    },
    {
      id: "notify",
      label: "Text my trusted contact about high-risk scams",
      sub: "They get a short alert, never the message itself."
    }
  ];

  /* ---------- STATE ---------- */

  var STORE = "phisheye-web-v1";

  function load() {
    try {
      var v = localStorage.getItem(STORE);
      return v ? JSON.parse(v) : null;
    } catch (e) {
      return null;
    }
  }

  var saved = load() || {};

  var S = {
    route: "home",
    type: "message",
    input: "",
    sampleKey: null,
    attachment: null,
    dropError: "",
    result: null,
    scanStep: 0,
    showDetails: false,
    sharedHelp: false,

    history: saved.history || SEED.slice(),

    hasAlert:
      saved.hasAlert !== undefined
        ? saved.hasAlert
        : true,

    protection: saved.protection || "on",

    admin:
      saved.admin || {
        bubble: true,
        warnLinks: true,
        openAnyway: false,
        notify: true
      },

    retention: saved.retention || 30,
    onboarded: !!saved.onboarded,
    plan: saved.plan || "free",

    adminUnlocked: false,
    pin: "",
    pinError: false,

    draft: "Here is the code: 482913",
    scamDeleted: false,
    sheet: null,
    popup: false,
    ob: 0
  };

  function save() {
    try {
      localStorage.setItem(
        STORE,
        JSON.stringify({
          history: S.history,
          hasAlert: S.hasAlert,
          protection: S.protection,
          admin: S.admin,
          retention: S.retention,
          onboarded: S.onboarded,
          plan: S.plan
        })
      );
    } catch (e) {}
  }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }[c];
    });
  }

  function $(id) {
    return document.getElementById(id);
  }

  var timers = [];
  var toastT = null;

  function clearTimers() {
    timers.forEach(clearTimeout);
    timers = [];
  }

  function toast(msg) {
    var t = $("toast");
    t.textContent = msg;

    if (toastT) clearTimeout(toastT);

    toastT = setTimeout(function () {
      t.textContent = "";
    }, 3000);
  }

  /* ---------- ANALYSIS ---------- */

  function analyze(txt, type) {
    var t = txt.toLowerCase();

    var link =
      /(https?:\/\/|www\.)/.test(t) ||
      /\b[a-z0-9-]+\.(com|net|org|co|info|xyz|app|io|link|top)\b/.test(t);

    var pressure = [
      "urgent",
      "locked",
      "suspend",
      "within 24",
      "immediately",
      "act now",
      "final notice",
      "expire"
    ].some(function (w) {
      return t.indexOf(w) >= 0;
    });

    var asks = [
      "otp",
      "code",
      "password",
      "pin",
      "card",
      "pay",
      "fee",
      "gift",
      "verify",
      "login",
      "sign in"
    ].some(function (w) {
      return t.indexOf(w) >= 0;
    });

    var reasons = [];

    if (pressure) {
      reasons.push("It tries to rush you or scare you.");
    }

    if (asks) {
      reasons.push("It asks for money, a password or a code.");
    }

    if (link) {
      reasons.push("It has a link we don’t trust.");
    }

    var score =
      (pressure ? 1 : 0) +
      (asks ? 1 : 0) +
      (link ? 1 : 0);

    var level =
      score >= 2
        ? "high"
        : score === 1
        ? "suspicious"
        : "safe";

    if (!reasons.length) {
      reasons = [
        "We didn’t find signs of a scam.",
        "It doesn’t ask for money, passwords or codes."
      ];
    }

    var titles = {
      high: "This looks like a scam",
      suspicious: "Be careful with this",
      safe: "This looks safe"
    };

    var advice = {
      high: [
        "Don’t tap a link or reply.",
        "Verify the sender using an official channel."
      ],
      suspicious: [
        "Pause before interacting with it.",
        "Check the sender through an official source."
      ],
      safe: [
        "You can continue, but stay alert.",
        "Never share passwords or codes from an unexpected message."
      ]
    };

    return {
      type:
        type === "phone"
          ? "Phone number"
          : type === "link"
          ? "Link"
          : "Text message",

      level: level,
      connected: score >= 2,
      input: txt,
      title: titles[level],
      reasons: reasons,
      advice: advice[level],
      details: [
        ["Risk indicators", String(score)],
        ["Link detected", link ? "Yes" : "No"],
        ["Urgency detected", pressure ? "Yes" : "No"]
      ]
    };
  }

  /* ---------- SCAN FLOW ---------- */

  function runScan(r, label) {
    clearTimers();

    S.scanStep = 0;
    S.route = "checking";

    if (location.hash !== "#/checking") {
      history.pushState(null, "", "#/checking");
    }

    render(true);

    [1, 2, 3].forEach(function (i) {
      timers.push(
        setTimeout(function () {
          if (S.route !== "checking") return;

          if (i < 3) {
            S.scanStep = i;
            render(false);
            return;
          }

          var short =
            label.length > 60
              ? label.slice(0, 60) + "…"
              : label;

          S.history.unshift({
            label: short,
            sub: r.type,
            when: "Just now",
            level: r.level,
            explain: (r.reasons || []).join(" ")
          });

          if (r.connected) {
            S.hasAlert = true;
          }

          S.result = r;
          save();

          history.replaceState(null, "", "#/result");

          S.route = "result";
          S.showDetails = false;

          render(true);
        }, i * 800)
      );
    });
  }

  /* ---------- FILE HANDLING ---------- */

  function takeFile(file) {
    S.dropError = "";

    if (!file) return;

    if (file.size > 10 * 1024 * 1024) {
      S.dropError =
        "That file is bigger than 10 MB. Try a smaller screenshot.";
      render(false);
      return;
    }

    var name = file.name || "Screenshot";

    var isImg = /^image\//.test(file.type);
    var isText =
      /^text\//.test(file.type) ||
      /\.(txt|eml)$/i.test(name);

    var isPdf =
      file.type === "application/pdf" ||
      /\.pdf$/i.test(name);

    if (!isImg && !isText && !isPdf) {
      S.dropError =
        "We can’t read that kind of file. Use a photo, PDF, or saved email.";
      render(false);
      return;
    }

    if (S.attachment && S.attachment.url) {
      URL.revokeObjectURL(S.attachment.url);
    }

    S.attachment = {
      name: name,
      kind: isImg
        ? "image"
        : isText
        ? "text"
        : "pdf",
      meta:
        (isImg
          ? "Photo"
          : isText
          ? "Text file"
          : "PDF") +
        ", " +
        fmtSize(file.size),
      url: isImg
        ? URL.createObjectURL(file)
        : null
    };

    if (isText) {
      var rd = new FileReader();

      rd.onload = function () {
        S.input = String(rd.result).slice(0, 4000);
        S.sampleKey = null;

        render(false);

        toast("We added the text from your file.");
      };

      rd.readAsText(file);
    }

    render(false);
  }

  function fmtSize(bytes) {
    if (!bytes) return "0 B";

    var units = ["B", "KB", "MB", "GB"];
    var i = Math.floor(
      Math.log(bytes) / Math.log(1024)
    );

    return (
      (bytes / Math.pow(1024, i)).toFixed(
        i ? 1 : 0
      ) +
      " " +
      units[i]
    );
  }

  /* ---------- FILE INPUT ---------- */

  $("file").addEventListener("change", function (e) {
    takeFile(e.target.files[0]);
    e.target.value = "";
  });

  var dragDepth = 0;

  document.addEventListener("dragenter", function (e) {
    var d =
      e.target.closest &&
      e.target.closest("#drop");

    if (!d) return;

    e.preventDefault();

    dragDepth++;

    d.classList.add("is-over");
  });

  document.addEventListener("dragover", function (e) {
    var d =
      e.target.closest &&
      e.target.closest("#drop");

    e.preventDefault();

    if (d) {
      e.dataTransfer.dropEffect = "copy";
    } else {
      e.dataTransfer.dropEffect = "none";
    }
  });

  document.addEventListener("dragleave", function (e) {
    var d =
      e.target.closest &&
      e.target.closest("#drop");

    if (!d) return;

    dragDepth = Math.max(
      0,
      dragDepth - 1
    );

    if (!dragDepth) {
      d.classList.remove("is-over");
    }
  });

  document.addEventListener("drop", function (e) {
    e.preventDefault();

    dragDepth = 0;

    var d =
      e.target.closest &&
      e.target.closest("#drop");

    if (!d) return;

    d.classList.remove("is-over");

    var f =
      e.dataTransfer.files &&
      e.dataTransfer.files[0];

    if (f) {
      takeFile(f);
    }
  });

  /* ---------- INPUT EVENTS ---------- */

  document.addEventListener("input", function (e) {
    if (e.target.id === "pe-input") {
      S.input = e.target.value;
      S.sampleKey = null;

      var ch =
        document.querySelectorAll(".chip");

      ch.forEach(function (c) {
        c.setAttribute(
          "aria-pressed",
          "false"
        );
      });
    }

    if (e.target.id === "pe-draft") {
      S.draft = e.target.value;

      if ($("draft-badge")) {
        $("draft-badge").innerHTML =
          draftBadge();
      }
    }
  });

  /* ---------- KEYBOARD ---------- */

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      if (S.sheet) {
        S.sheet = null;
        renderOverlay();
      } else if (S.popup) {
        S.popup = false;
        renderOverlay();
      }
    }

    if (
      e.key === "Enter" &&
      e.target.id === "pe-draft"
    ) {
      e.preventDefault();
      act.send();
    }

    if (
      S.route === "admin" &&
      !S.adminUnlocked &&
      /^[0-9]$/.test(e.key) &&
      !$("overlay").innerHTML
    ) {
      act.key(null, e.key);
    }

    if (
      S.route === "admin" &&
      !S.adminUnlocked &&
      e.key === "Backspace"
    ) {
      act.key(null, "del");
    }
  });

  /* ---------- ACTIONS ---------- */

  var act = {
    nav: function (el) {
      go(el.dataset.to);
    },

    startType: function () {
      S.type = "message";
      S.input = "";
      S.sampleKey = null;
      S.attachment = null;
      S.dropError = "";

      go("check");
    },

    tab: function (el) {
      S.type = el.dataset.type;
      S.sampleKey = null;

      render(false);

      var b = document.querySelector(
        '.seg [data-type="' +
          S.type +
          '"]'
      );

      if (b) b.focus();
    },

    example: function (el) {
      var k = el.dataset.key;

      S.input = SAMPLES[k].input;
      S.sampleKey = k;

      render(false);

      var b = document.querySelector(
        '.chip[data-key="' +
          k +
          '"]'
      );

      if (b) b.focus();
    },

    chooseFile: function () {
      $("file").click();
    },

    removeAttach: function () {
      if (
        S.attachment &&
        S.attachment.url
      ) {
        URL.revokeObjectURL(
          S.attachment.url
        );
      }

      S.attachment = null;

      render(false);

      var b = document.querySelector(
        '[data-act="chooseFile"]'
      );

      if (b) b.focus();
    },

    check: function () {
      var txt = S.input.trim();
      var r;

      if (
        S.attachment &&
        S.attachment.kind !== "text" &&
        S.plan !== "premium"
      ) {
        S.sheet = "needPremium";
        renderOverlay();
        return;
      }

      if (
        !txt &&
        S.attachment &&
        S.attachment.kind !== "text"
      ) {
        r = Object.assign(
          {},
          SAMPLES.high,
          {
            input:
              "Screenshot: " +
              S.attachment.name,
            type: "Screenshot"
          }
        );

        runScan(
          r,
          S.attachment.name
        );

        return;
      }

      if (!txt) {
        var t =
          TYPES.filter(function (x) {
            return x.id === S.type;
          })[0] || TYPES[0];

        r = SAMPLES[t.ex];
        txt = r.input;
      } else {
        r = S.sampleKey
          ? SAMPLES[S.sampleKey]
          : analyze(txt, S.type);
      }

      runScan(r, txt);
    },

    simulateScan: function () {
      runScan(
        SAMPLES.qr,
        "pay-parking-now.co/pay"
      );
    },

    report: function () {
      toast(
        "Blocked and reported. Well done!"
      );
    },

    callFamily: function () {
      toast(
        "Calling your trusted contact… (demo)"
      );
    },

    toggleDetails: function () {
      S.showDetails = !S.showDetails;

      render(false);

      var b = document.querySelector(
        '[data-act="toggleDetails"]'
      );

      if (b) b.focus();
    },

    toggleShared: function () {
      S.sharedHelp = !S.sharedHelp;

      render(false);

      var b = document.querySelector(
        '[data-act="toggleShared"]'
      );

      if (b) b.focus();
    },

    key: function (el, k) {
      k = k || el.dataset.k;

      if (k === "del") {
        S.pin = S.pin.slice(0, -1);
        S.pinError = false;
      } else {
        var next = S.pin + k;

        if (next.length < 4) {
          S.pin = next;
          S.pinError = false;
        } else if (next === "1234") {
          S.pin = "";
          S.pinError = false;
          S.adminUnlocked = true;

          render(true);
          return;
        } else {
          S.pin = "";
          S.pinError = true;
        }
      }

      render(false);

      if (el) {
        var b = document.querySelector(
          '.keypad [data-k="' +
            k +
            '"]'
        );

        if (b) b.focus();
      }
    },

    lock: function () {
      S.adminUnlocked = false;
      toast("Admin settings locked.");
      go("home");
    },

    prot: function (el) {
      S.protection = el.dataset.v;

      save();

      render(false);

      var b = document.querySelector(
        '[data-act="prot"][data-v="' +
          S.protection +
          '"]'
      );

      if (b) b.focus();
    },

    toggle: function (el) {
      var id = el.dataset.id;

      S.admin[id] =
        !(S.admin[id] === true);

      save();
      render(false);

      var b = document.querySelector(
        '[data-act="toggle"][data-id="' +
          id +
          '"]'
      );

      if (b) b.focus();
    },

    retention: function (el) {
      S.retention =
        Number(el.dataset.d);

      save();
      render(false);

      var b = document.querySelector(
        '[data-act="retention"][data-d="' +
          S.retention +
          '"]'
      );

      if (b) b.focus();
    },

    deleteAll: function () {
      S.history = [];
      S.hasAlert = false;

      save();
      render(false);

      toast("History deleted.");
    },

    demoToast: function (el) {
      toast(el.dataset.msg);
    },

    openLink: function () {
      S.popup = true;
      S.sheet = null;

      renderOverlay();
    },

    openScam: function () {
      S.sheet = "scam";
      renderOverlay();
    },

    openDraft: function () {
      S.sheet = draftRisky()
        ? "draftRisky"
        : "draftSafe";

      renderOverlay();
    },

    send: function () {
      if (!S.draft.trim()) return;

      if (
        draftRisky() &&
        S.protection === "on"
      ) {
        S.sheet = "draftRisky";
        renderOverlay();
        return;
      }

      S.draft = "";

      render(false);

      toast("Message sent (demo).");
    },

    sheetPrimary: function () {
      var sh = S.sheet;

      S.sheet = null;

      if (sh === "needPremium") {
        go("plans");
      } else if (sh === "upgrade") {
        S.plan = "premium";
        save();

        render(false);

        toast(
          "Premium is on. Full protection is active."
        );
      } else if (sh === "scam") {
        S.scamDeleted = true;

        render(false);

        toast("Deleted and blocked.");
      } else if (sh === "draftRisky") {
        S.draft = "";

        render(false);

        var i = $("pe-draft");

        if (i) i.focus();
      } else {
        renderOverlay();
      }
    },

    seeWhy: function () {
      S.result = SAMPLES.high;
      go("result");
    },

    closeSheet: function () {
      S.sheet = null;
      renderOverlay();
    },

    closeSheetBg: function (el, k, e) {
      if (e.target === el) {
        S.sheet = null;
        renderOverlay();
      }
    },

    closePopup: function () {
      S.popup = false;
      renderOverlay();
    },

    openAnyway: function () {
      S.popup = false;
      renderOverlay();

      toast(
        "Opening the website (demo)."
      );
    },

    obNext: function () {
      if (S.ob < 2) {
        S.ob++;
        renderOverlay();
      } else {
        S.onboarded = true;
        save();

        renderOverlay();

        var h =
          $("view").querySelector(
            "[data-focus]"
          );

        if (h) h.focus();
      }
    },

    theme: function () {
      var d = !isDark();

      document.documentElement.setAttribute(
        "data-theme",
        d ? "dark" : "light"
      );

      try {
        localStorage.setItem(
          "phisheye-theme",
          d ? "dark" : "light"
        );
      } catch (e) {}

      render(false);

      var b =
        document.querySelector(
          ".theme-icon"
        );

      if (
        window.matchMedia(
          "(min-width: 881px)"
        ).matches
      ) {
        b = document.querySelector(
          "#side-theme .switch"
        );
      }

      if (b) b.focus();
    },

    upgrade: function () {
      S.sheet = "upgrade";
      renderOverlay();
    },

    setFree: function () {
      S.plan = "free";

      save();
      render(false);

      toast(
        "You’re now on the Free plan."
      );
    },

    obSkip: function () {
      S.onboarded = true;

      save();
      renderOverlay();
    }
  };

  /* ---------- GLOBAL CLICK HANDLER ---------- */

  document.addEventListener("click", function (e) {
    var el =
      e.target.closest &&
      e.target.closest("[data-act]");

    if (!el) return;

    var fn = act[el.dataset.act];

    if (fn) {
      fn(el, null, e);
    }
  });

  /* ---------- NAVIGATION ---------- */

  window.addEventListener(
    "hashchange",
    navigate
  );

  navigate();
})();