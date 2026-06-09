/* =========================================================
   THE FRIDAYS WAY ACADEMY — COURSE ENGINE
   - COURSE data (7 modules × N videos × 2 questions each)
   - Rendering: hero card + playlist + knowledge check
   - State: current module, current video, completion tracking
   - Wired by main inline script via window.FWA.*
   ========================================================= */

window.FWA = window.FWA || {};

/* ========== COURSE DATA ========== */
const COURSE = [
  // ── MODULE 1 ────────────────────────────────────────────
  {
    id: 'm1',
    title: 'Intro: The Fridays Mission',
    headline: 'STAY IN ORBIT — FOCUS ON THE MISSION',
    description: "The Fridays Mission is about staying in orbit — focusing on the bigger purpose, not the small 'messable' details that pull you off course.",
    icon: '💊',
    minutes: 3,
    xp: 200,
    videos: [
      {
        title: 'Staying in Orbit',
        file: 'videos/m1-1-mission.mp4',
        questions: [
          {
            q: "According to The Fridays Mission, what should we focus on each day?",
            a: ["Speed and ticket times", "Staying in orbit — the mission, not the small 'messable' details", "Always upselling premium drinks", "Memorizing the menu"],
            correct: 1
          },
          {
            q: "What does 'staying in orbit' mean for our service?",
            a: ["Doing only what you're told", "Keeping the bigger purpose front-of-mind so small distractions don't pull you off course", "Standing near the host stand", "Working only with one team"],
            correct: 1
          }
        ]
      }
    ]
  },

  // ── MODULE 2 ────────────────────────────────────────────
  {
    id: 'm2',
    title: 'The 3 Rings of Service',
    headline: 'THE BLUEPRINT — PLAYING IN THE PLUS',
    description: "At Fridays, Zero is survival. The 3 Rings of Service is how we move from transactions to WOW moments that create loyal regulars — every interaction, every time.",
    icon: '⭐',
    minutes: 8,
    xp: 350,
    showSteps: true,
    resources: [
      { title: 'W/W Success Profile', sub: 'Server standards blueprint · PDF', file: 'resources/ww-success-profile.pdf' },
      { title: 'W/W Quick Observation Checklist', sub: 'Manager shift assessment · PDF', file: 'resources/ww-quick-observation.pdf' }
    ],
    videos: [
      {
        title: 'Service is Theater — The 5 Steps',
        file: 'videos/m2-1-theater.mp4',
        questions: [
          {
            q: "The 5 Steps of a Warm Greeting begin with what?",
            a: ["Smile at 5 feet", "Eye contact and Warm Greeting at 10 feet", "Offer assistance", "Introduce yourself"],
            correct: 1
          },
          {
            q: "Why do we think of service as 'Theater'?",
            a: ["Because guests pay for tickets", "Every interaction is a chance to perform care the guest sees and remembers", "To remind us to be loud", "To match other restaurants"],
            correct: 1
          },
          {
            q: "Per the W/W Success Profile, a Server should greet Guests within how long?",
            a: ["10 seconds", "30 seconds", "60 seconds", "Whenever they get a chance"],
            correct: 1
          },
          {
            q: "Which rule does a W/W follow at each stage of service?",
            a: ["The 2-Bites / 2-Minutes Rule", "The 5-Second Rule", "First-in, first-out", "The 10-Foot Rule only"],
            correct: 0
          }
        ]
      },
      {
        title: 'Zero vs Plus — The Baseline',
        file: 'videos/m2-2-zero-plus-a.mp4',
        questions: [
          {
            q: "What is 'Zero' service at Fridays?",
            a: ["The baseline — clean tables, food on time, survival", "Free meals", "Service charged at no cost", "A new-hire pay grade"],
            correct: 0
          },
          {
            q: "What turns Zero into Plus?",
            a: ["Doing the same things faster", "Anticipating a guest's needs before they ask", "Charging more", "Skipping the steps"],
            correct: 1
          }
        ]
      },
      {
        title: 'Zero vs Plus — The WOW',
        file: 'videos/m2-3-zero-plus-b.mp4',
        questions: [
          {
            q: "Why is anticipation so powerful?",
            a: ["It saves the kitchen time", "It builds loyalty by making guests feel seen and cared for", "It impresses inspectors", "It lets staff close earlier"],
            correct: 1
          },
          {
            q: "What does 'Plus' feel like to a guest?",
            a: ["A rushed transaction", "Care and clarity — almost like magic", "Being ignored", "Being upsold"],
            correct: 1
          }
        ]
      }
    ]
  },

  // ── MODULE 3 ────────────────────────────────────────────
  {
    id: 'm3',
    title: 'The Art of Active Listening',
    headline: 'LISTENING IS INTENTIONAL',
    description: 'Hearing is automatic. Listening is intentional. This module trains the small physical and verbal habits that make guests feel truly heard.',
    icon: '👂',
    minutes: 6,
    xp: 400,
    videos: [
      {
        title: 'Hearing vs Listening',
        file: 'videos/m3-1-hear-vs-listen.mp4',
        questions: [
          {
            q: "What's the difference between hearing and listening?",
            a: ["They are the same thing", "Hearing is automatic; listening is intentional", "Listening is louder", "Listening requires equipment"],
            correct: 1
          },
          {
            q: "Why does the difference matter for service?",
            a: ["So you can talk more", "To avoid mistakes that come from missing what the guest actually said", "So you can hear the kitchen", "To pass training"],
            correct: 1
          }
        ]
      },
      {
        title: 'The Paper Experiment',
        file: 'videos/m3-2-paper.mp4',
        questions: [
          {
            q: "What does the 'Paper Experiment' show?",
            a: ["How origami works", "How small misinterpretations create 'snowflakes' of different outcomes without active listening", "That paper is expensive", "How to fold napkins"],
            correct: 1
          },
          {
            q: "The Paper Experiment reminds us that…",
            a: ["Everyone hears the same thing the same way", "Without active listening, each person hears their own version", "Repetition is rude", "We should write everything down"],
            correct: 1
          }
        ]
      },
      {
        title: 'Face the Guest at 90° — Part 1',
        file: 'videos/m3-3-90deg-a.mp4',
        questions: [
          {
            q: "To show full attention, your body should be…",
            a: ["Behind the guest", "Squared off at a 90° angle, facing the guest", "Walking away", "Sideways"],
            correct: 1
          },
          {
            q: "Why does posture matter as much as words?",
            a: ["It's part of dress code", "The guest reads your body language to know they have your focus", "It looks busy", "It speeds you up"],
            correct: 1
          }
        ]
      },
      {
        title: 'Face the Guest at 90° — Part 2',
        file: 'videos/m3-4-90deg-b.mp4',
        questions: [
          {
            q: "Facing the guest at 90° communicates that…",
            a: ["You're in a hurry", "They have your undivided attention", "You don't speak their language", "You want to leave"],
            correct: 1
          },
          {
            q: "Which is the WRONG signal?",
            a: ["Eye contact and a 90° turn", "Continuing to walk past while answering", "Squaring shoulders to the table", "Lowering to their level"],
            correct: 1
          }
        ]
      },
      {
        title: '60-Second Listening Challenge',
        file: 'videos/m3-5-60sec.mp4',
        questions: [
          {
            q: "The 60-Second Listening Challenge has three parts. What are they?",
            a: ["Ask, repeat, confirm", "Run, jump, smile", "Greet, sell, leave", "Read, write, recite"],
            correct: 0
          },
          {
            q: "Why repeat back what you heard?",
            a: ["To fill silence", "To check accuracy and show the guest they were heard", "To stall", "Because policy says so"],
            correct: 1
          }
        ]
      }
    ]
  },

  // ── MODULE 4 ────────────────────────────────────────────
  {
    id: 'm4',
    title: 'Non-Verbal Cues & Presence',
    headline: 'WHAT YOU DO SPEAKS LOUDER',
    description: 'Guests judge service by behavior more than words. Eye contact, posture, and gestures tell the real story.',
    icon: '👁️',
    minutes: 5,
    xp: 300,
    videos: [
      {
        title: 'Behavior Speaks Louder',
        file: 'videos/m4-1-nonverbal.mp4',
        questions: [
          {
            q: "Guests primarily judge service by…",
            a: ["What you say", "What you do — eye contact, posture, gestures", "Background music", "Menu prices"],
            correct: 1
          },
          {
            q: "Which is a NON-verbal cue?",
            a: ["The greeting words", "Open posture and warm eye contact", "The check", "The kitchen ticket"],
            correct: 1
          }
        ]
      },
      {
        title: 'The 3-Second Challenge',
        file: 'videos/m4-2-3sec.mp4',
        questions: [
          {
            q: "In the 3-Second Challenge you pause for three seconds to…",
            a: ["Tie your apron", "Smile and make eye contact so the guest knows they matter", "Recover your breath", "Refill your tray"],
            correct: 1
          },
          {
            q: "Why three seconds?",
            a: ["It's the longest acceptable wait", "It's just enough to create a deliberate, human connection", "It's a fire-safety rule", "It's the menu order time"],
            correct: 1
          }
        ]
      }
    ]
  },

  // ── MODULE 5 ────────────────────────────────────────────
  {
    id: 'm5',
    title: 'The VIP Family Experience',
    headline: 'KIDS ARE THE REAL VIPS',
    description: 'Families notice everything. From the first 10 seconds to the dining moment, treat the kids as the real VIPs and the parents will relax.',
    icon: '👶',
    minutes: 7,
    xp: 450,
    videos: [
      {
        title: 'The First 10 Seconds',
        file: 'videos/m5-1-welcome.mp4',
        questions: [
          {
            q: "With a VIP family, the first 10 seconds should focus on…",
            a: ["The credit card", "Getting on the child's level and treating them as the VIP", "The wine list", "The check"],
            correct: 1
          },
          {
            q: "What signals to a child that they matter?",
            a: ["Skipping past them", "Lowering to their eye level and acknowledging them by name", "Asking the parents only", "Standing across the room"],
            correct: 1
          }
        ]
      },
      {
        title: 'Engagement at the Table',
        file: 'videos/m5-2-engagement.mp4',
        questions: [
          {
            q: "What's the best way to prevent a bored child from creating table pressure?",
            a: ["Wait until they cry", "Offer kids' menus and activities immediately", "Ignore them", "Move the table"],
            correct: 1
          },
          {
            q: "Engagement at the table is about…",
            a: ["Selling more", "Giving the child something to do so the family relaxes", "Cleaning faster", "Doing card tricks"],
            correct: 1
          }
        ]
      },
      {
        title: 'The Dining Moment',
        file: 'videos/m5-3-dining.mp4',
        questions: [
          {
            q: "When food arrives, you should…",
            a: ["Serve adults first", "Prioritize the kids' meals and serve them directly to the child", "Drop everything on one side of the table", "Wait for parents to ask"],
            correct: 1
          },
          {
            q: "Serving the child first signals that…",
            a: ["We're behind on adults", "We see the whole family — kids included — as VIPs", "Kids tip", "It's faster"],
            correct: 1
          }
        ]
      }
    ]
  },

  // ── MODULE 6 ────────────────────────────────────────────
  {
    id: 'm6',
    title: 'The Fond Farewell',
    headline: 'CREATE THE NEXT VISIT',
    description: "The last 10 seconds are everything. The signature 'See you next Friday!' farewell creates the next visit before the guest leaves.",
    icon: '👋',
    minutes: 4,
    xp: 250,
    videos: [
      {
        title: 'See You Next Friday',
        file: 'videos/m6-1-farewell.mp4',
        questions: [
          {
            q: "What's the signature Fridays farewell?",
            a: ['"Have a great one."', '"See you next Friday!"', '"Buh-bye."', '"Thanks for paying."'],
            correct: 1
          },
          {
            q: "The Fond Farewell creates…",
            a: ["A reason to leave a tip", "The next visit before the guest leaves", "The bill", "A complaint chance"],
            correct: 1
          }
        ]
      }
    ]
  },

  // ── MODULE 7 ────────────────────────────────────────────
  {
    id: 'm7',
    title: 'Leading the Movement',
    headline: 'THE FIRST FOLLOWER',
    description: "How does a movement start? Not with the leader — with the first follower who turns a 'lone nut' into a leader and a crowd into a movement.",
    icon: '🚀',
    minutes: 5,
    xp: 500,
    videoPending: true,
    videos: [
      {
        title: 'The First Follower (Video Coming Soon)',
        file: null,
        questions: [
          {
            q: "The 'First Follower' lesson teaches us…",
            a: ["How to be a manager", "That the first person who joins a leader turns a lone nut into a movement", "To follow everyone", "Always be second"],
            correct: 1
          },
          {
            q: "Why is the first follower critical?",
            a: ["They count tips", "They give others permission to join, transforming a crowd into a movement", "They open the doors", "They write the script"],
            correct: 1
          }
        ]
      }
    ]
  },

  // ── MODULE 8 ────────────────────────────────────
  {
    id: 'm8',
    title: 'Show Them Your H.E.A.R.T.',
    headline: 'SHOW THEM YOUR H.E.A.R.T.',
    description: "Great teams. Stronger connections. Unforgettable experiences. HEART is our six-part promise to every guest and every teammate — Heard, Entertained, Acknowledged, Respected, Trusted, Remembered.",
    icon: '❤️',
    minutes: 5,
    xp: 400,
    showHeart: true,
    videoPending: true,
    resources: [
      { title: 'M4W1 · The Four Human Needs Behind the Business Needs', sub: 'MAOS huddle guide · PDF', file: 'resources/four-human-needs-m4w1.pdf' }
    ],
    videos: [
      {
        title: 'Show Them Your HEART (Video Coming Soon)',
        file: null,
        questions: [
          {
            q: "In H.E.A.R.T., what does the 'H' stand for?",
            a: ["Hurried", "Heard — listen with genuine attention", "Helpful", "Honest"],
            correct: 1
          },
          {
            q: "Why do we show HEART to guests and teammates?",
            a: ["To upsell premium items", "To create a Friday that stays with them long after they leave", "To finish shifts faster", "Because the rota says so"],
            correct: 1
          },
          {
            q: "The M4W1 huddle says hospitality is a business of what?",
            a: ["Speed", "The heart — our loyalty lies in the heart of the guest", "Margins", "Volume"],
            correct: 1
          },
          {
            q: "What are the four basic human needs guests want, per the huddle?",
            a: ["Fed, seated, billed, thanked", "Heard, Acknowledged, Remembered, Respected", "Fast, cheap, easy, quiet", "Greeted, served, upsold, farewelled"],
            correct: 1
          },
          {
            q: "According to the huddle, what is the baseline for meeting a guest's human needs?",
            a: ["Empathy — you must engage your own heart first", "Speed of service", "Discounts", "A perfect script"],
            correct: 0
          }
        ]
      }
    ]
  }
];

/* ========== STATE ========== */
const STATE = {
  moduleIdx: 1,    // start on Module 2 (0-indexed)
  videoIdx: 0,
  qIdx: 0,
  selected: null,  // selected option index for current question
  answered: false, // current question answered?
  completedModules: new Set([0]),     // Module 1 (Intro) pre-completed for demo realism
  completedVideos: new Set(['0-0']),  // Module 1 video pre-completed too
  correctAnswers: new Set(['0-0-0', '0-0-1']) // both questions on m1v1 marked correct
};

function vKey(m, v) { return `${m}-${v}`; }
function qKey(m, v, q) { return `${m}-${v}-${q}`; }

/* ========== RENDER: HERO ========== */
function renderHero() {
  const mod = COURSE[STATE.moduleIdx];
  const vid = mod.videos[STATE.videoIdx];

  // Module pill
  document.getElementById('modulePill').textContent = `📘 Module ${STATE.moduleIdx + 1}`;

  // Video title
  document.getElementById('videoTitle').textContent = vid.title.toUpperCase();

  // Video position
  const vp = document.getElementById('videoPos');
  if (mod.videos.length > 1) {
    vp.textContent = `Video ${STATE.videoIdx + 1} of ${mod.videos.length}`;
    vp.style.display = '';
  } else {
    vp.style.display = 'none';
  }

  // Video player
  const player = document.getElementById('vidPlayer');
  const placeholder = document.getElementById('videoPlaceholder');
  if (vid.file) {
    player.src = vid.file;
    player.style.display = 'block';
    if (placeholder) placeholder.style.display = 'none';
  } else {
    player.removeAttribute('src');
    player.load();
    player.style.display = 'none';
    if (placeholder) placeholder.style.display = 'flex';
  }

  // Hero body
  document.getElementById('heroHeadline').textContent = mod.headline;
  document.getElementById('heroDesc').textContent = mod.description;
  document.getElementById('heroXp').textContent = '+' + mod.xp;

  // Steps container (only show for module 2)
  const stepsContainer = document.getElementById('stepsContainer');
  if (stepsContainer) stepsContainer.style.display = mod.showSteps ? '' : 'none';

  // Rings card visibility (only show for Module 2)
  const ringsCard = document.querySelector('.rings-card');
  if (ringsCard) ringsCard.style.display = mod.showSteps ? '' : 'none';

  // H.E.A.R.T. card visibility (only show for the HEART module)
  const heartCard = document.getElementById('heartCard');
  if (heartCard) heartCard.style.display = mod.showHeart ? '' : 'none';

  // Module resources (downloadable PDFs)
  renderResources(mod);

  // Render playlist
  renderPlaylist();
}

/* ========== RENDER: RESOURCES (downloadable PDFs) ========== */
function renderResources(mod) {
  const card = document.getElementById('resourcesCard');
  const list = document.getElementById('resList');
  if (!card || !list) return;
  const res = mod.resources || [];
  if (!res.length) {
    card.style.display = 'none';
    list.innerHTML = '';
    return;
  }
  card.style.display = '';
  list.innerHTML = res.map(r => `
    <a class="res-item" href="${r.file}" target="_blank" rel="noopener" download>
      <div class="res-ic">📄</div>
      <div class="res-info">
        <div class="res-title">${r.title}</div>
        <div class="res-sub">${r.sub || 'PDF'}</div>
      </div>
      <span class="res-dl">Download</span>
    </a>
  `).join('');
}

/* ========== RENDER: PLAYLIST ========== */
function renderPlaylist() {
  const mod = COURSE[STATE.moduleIdx];
  const wrap = document.getElementById('videoPlaylist');
  if (!wrap) return;

  if (mod.videos.length < 2) {
    wrap.innerHTML = '';
    wrap.style.display = 'none';
    return;
  }

  wrap.style.display = '';
  wrap.innerHTML = mod.videos.map((v, idx) => {
    const watched = STATE.completedVideos.has(vKey(STATE.moduleIdx, idx));
    const isCur = idx === STATE.videoIdx;
    const dotClass = watched ? 'watched' : (isCur ? 'current' : '');
    return `
      <button class="vplay-chip ${isCur ? 'active' : ''} ${watched ? 'done' : ''}" data-vidx="${idx}">
        <span class="vplay-num ${dotClass}">${watched ? '✓' : (idx + 1)}</span>
        <span class="vplay-title">${v.title}</span>
      </button>
    `;
  }).join('');

  wrap.querySelectorAll('.vplay-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      STATE.videoIdx = +btn.dataset.vidx;
      STATE.qIdx = 0;
      STATE.selected = null;
      STATE.answered = false;
      renderHero();
      renderQuiz();
    });
  });
}

/* ========== RENDER: QUIZ ========== */
function renderQuiz() {
  const mod = COURSE[STATE.moduleIdx];
  const vid = mod.videos[STATE.videoIdx];
  const question = vid.questions[STATE.qIdx];

  document.getElementById('quizMeta').textContent =
    `Question ${STATE.qIdx + 1} of ${vid.questions.length} · Video ${STATE.videoIdx + 1} of ${mod.videos.length} · Module ${STATE.moduleIdx + 1}`;
  document.getElementById('quizQuestion').textContent = question.q;

  const letters = ['A', 'B', 'C', 'D'];
  const optsEl = document.getElementById('options');
  optsEl.innerHTML = question.a.map((opt, i) => `
    <div class="option" data-i="${i}">
      <div class="option-letter">${letters[i]}</div>
      <div>${opt}</div>
    </div>
  `).join('');
  optsEl.querySelectorAll('.option').forEach(el => {
    el.addEventListener('click', () => {
      if (STATE.answered) return;
      optsEl.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
      el.classList.add('selected');
      STATE.selected = +el.dataset.i;
    });
  });

  STATE.selected = null;
  STATE.answered = false;
  setSubmitState('SUBMIT ANSWER →');
}

/* ========== SUBMIT BUTTON HELPER ========== */
function setSubmitState(label, disabled = false) {
  const btn = document.getElementById('submitBtn');
  btn.textContent = label;
  btn.disabled = disabled;
  btn.style.display = '';
  document.getElementById('completeControls')?.classList.remove('show');
}

/* ========== SUBMIT FLOW ========== */
function handleSubmit() {
  if (STATE.answered) {
    advance();
    return;
  }
  if (STATE.selected === null) {
    window.FWA.toast({ icon: '👆', title: 'Pick one!', msg: 'Select an answer before submitting', variant: '' });
    return;
  }
  const mod = COURSE[STATE.moduleIdx];
  const vid = mod.videos[STATE.videoIdx];
  const question = vid.questions[STATE.qIdx];
  const opts = document.getElementById('options').querySelectorAll('.option');
  opts.forEach(o => o.classList.add('disabled'));

  const isCorrect = STATE.selected === question.correct;
  const correctEl = opts[question.correct];

  if (isCorrect) {
    opts[STATE.selected].classList.remove('selected');
    opts[STATE.selected].classList.add('correct');
    bumpXp(50);
    window.FWA.toast({ icon: '✅', title: 'Correct! +50 XP', msg: 'Strong answer', variant: 'correct' });
    STATE.correctAnswers.add(qKey(STATE.moduleIdx, STATE.videoIdx, STATE.qIdx));
  } else {
    opts[STATE.selected].classList.remove('selected');
    opts[STATE.selected].classList.add('wrong');
    correctEl.classList.add('correct');
    window.FWA.toast({ icon: '💡', title: 'Not quite!', msg: 'The highlighted answer is the correct one', variant: 'wrong' });
  }
  STATE.answered = true;

  // Decide next-button text
  const isLastQ = STATE.qIdx === vid.questions.length - 1;
  const isLastV = STATE.videoIdx === mod.videos.length - 1;
  const isLastM = STATE.moduleIdx === COURSE.length - 1;
  let label = 'Next Question →';
  if (isLastQ && !isLastV) label = 'Next Video →';
  if (isLastQ && isLastV && !isLastM) label = 'Complete Module ✓';
  if (isLastQ && isLastV && isLastM) label = 'Finish Training 🎓';
  setSubmitState(label);
}

function advance() {
  const mod = COURSE[STATE.moduleIdx];
  const vid = mod.videos[STATE.videoIdx];

  // Q advance
  if (STATE.qIdx < vid.questions.length - 1) {
    STATE.qIdx++;
    renderQuiz();
    return;
  }

  // Mark this video done
  STATE.completedVideos.add(vKey(STATE.moduleIdx, STATE.videoIdx));

  // Video advance
  if (STATE.videoIdx < mod.videos.length - 1) {
    STATE.videoIdx++;
    STATE.qIdx = 0;
    renderHero();
    renderQuiz();
    // Scroll to top so user sees the new video
    document.querySelector('.main').scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  // Module complete!
  STATE.completedModules.add(STATE.moduleIdx);
  markModuleSidebarDone(STATE.moduleIdx);
  refreshSidebarProgress();

  // Last module check
  if (STATE.moduleIdx >= COURSE.length - 1) {
    // All done — show certificate CTA
    document.getElementById('submitBtn').style.display = 'none';
    document.getElementById('completeControls').classList.add('show');
      document.getElementById('finalCertBtn').classList.add('show');
    document.getElementById('skipDemoLink').style.display = 'none';
    document.getElementById('completeProgress').innerHTML = '🎉 <strong>All 8 modules complete!</strong> Your certificate is ready.';
    window.FWA.toast({ icon: '🎉', title: 'All modules complete!', msg: 'Claim your certificate below', variant: 'correct' });
    return;
  }

  // Advance to next module
  STATE.moduleIdx++;
  STATE.videoIdx = 0;
  STATE.qIdx = 0;
  activateModuleSidebar(STATE.moduleIdx);
  renderHero();
  renderQuiz();
  document.querySelector('.main').scrollTo({ top: 0, behavior: 'smooth' });
  window.FWA.toast({
    icon: '🚀',
    title: `Module ${STATE.moduleIdx + 1} unlocked`,
    msg: COURSE[STATE.moduleIdx].title,
    variant: 'correct'
  });
}

/* ========== SIDEBAR HELPERS ========== */
function markModuleSidebarDone(idx) {
  const m = document.querySelectorAll('.sidebar .module')[idx];
  if (!m) return;
  m.classList.remove('active');
  const dot = m.querySelector('.status-dot');
  dot.className = 'status-dot status-done';
  dot.textContent = '✓';
  const meta = m.querySelector('.module-meta');
  if (meta) meta.textContent = meta.textContent.split('·')[0].trim() + ' · Completed';
}

function activateModuleSidebar(idx) {
  const all = document.querySelectorAll('.sidebar .module');
  all.forEach(m => m.classList.remove('active'));
  const m = all[idx];
  if (!m) return;
  m.classList.add('active');
  const dot = m.querySelector('.status-dot');
  dot.className = 'status-dot status-active';
  dot.textContent = '●';
  const meta = m.querySelector('.module-meta');
  if (meta) meta.textContent = meta.textContent.split('·')[0].trim() + ' · In Progress';
}

function refreshSidebarProgress() {
  const fill = document.getElementById('progressFill');
  const ratio = STATE.completedModules.size / COURSE.length;
  if (fill) fill.style.width = (ratio * 100).toFixed(1) + '%';
  const right = document.querySelector('.progress-row .right');
  if (right) right.textContent = `${STATE.completedModules.size} / ${COURSE.length} Modules`;
}

/* ========== SIDEBAR MODULE CLICK ========== */
function bindSidebarClicks() {
  document.querySelectorAll('.sidebar .module').forEach((m, idx) => {
    m.addEventListener('click', () => {
      // Open review mode: every module is freely accessible.
      STATE.moduleIdx = idx;
      STATE.videoIdx = 0;
      STATE.qIdx = 0;
      activateModuleSidebar(idx);
      renderHero();
      renderQuiz();
      document.querySelector('.main').scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}

/* ========== XP BUMP ========== */
function bumpXp(amount) {
  const el = document.getElementById('xp-amount');
  if (!el) return;
  const cur = parseInt(el.textContent.replace(/[^\d]/g, ''), 10) || 0;
  const next = cur + amount;
  el.textContent = next.toLocaleString('en-US');
  // Bump animation
  el.style.transition = 'transform 0.25s';
  el.style.transform = 'scale(1.18)';
  setTimeout(() => el.style.transform = '', 250);
}

/* ========== FAST-FORWARD ========== */
function fastForwardAll() {
  // Mark every remaining video + module complete
  for (let m = 0; m < COURSE.length; m++) {
    for (let v = 0; v < COURSE[m].videos.length; v++) {
      STATE.completedVideos.add(vKey(m, v));
      for (let q = 0; q < COURSE[m].videos[v].questions.length; q++) {
        STATE.correctAnswers.add(qKey(m, v, q));
      }
    }
    STATE.completedModules.add(m);
    markModuleSidebarDone(m);
  }
  refreshSidebarProgress();
  // Show cert CTA
  document.getElementById('submitBtn').style.display = 'none';
  document.getElementById('completeControls').classList.add('show');
  document.getElementById('finalCertBtn').classList.add('show');
  document.getElementById('skipDemoLink').style.display = 'none';
  document.getElementById('completeProgress').innerHTML = '🎉 <strong>All 8 modules complete!</strong> Your certificate is ready.';
}

/* ========== INIT ========== */
function init() {
  // Pre-render initial state
  activateModuleSidebar(STATE.moduleIdx);
  // Mark Module 1 as completed (was pre-completed)
  markModuleSidebarDone(0);
  refreshSidebarProgress();
  renderHero();
  renderQuiz();
  bindSidebarClicks();
  unlockAllSidebar();

  // Submit button click → handled by inline main script too? No — replace
  document.getElementById('submitBtn').addEventListener('click', handleSubmit);
}

/* ========== UNLOCK ALL (open review mode) ========== */
function unlockAllSidebar() {
  document.querySelectorAll('.sidebar .module').forEach((m) => {
    const dot = m.querySelector('.status-dot');
    const meta = m.querySelector('.module-meta');
    if (dot && dot.classList.contains('status-locked')) {
      dot.classList.remove('status-locked');
      dot.classList.add('status-available');
      dot.textContent = '○';
    }
    if (meta && /Locked/.test(meta.textContent)) {
      meta.textContent = meta.textContent.replace('Locked', 'Available');
    }
  });
}

window.FWA.init = init;
window.FWA.fastForwardAll = fastForwardAll;
window.FWA.state = STATE;
window.FWA.course = COURSE;
