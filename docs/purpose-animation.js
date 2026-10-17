(() => {
  const root = document.querySelector(".overview-animation");
  if (!root) return;

  const slides = [...root.querySelectorAll(".overview-slide")];
  const dots = [...root.querySelectorAll(".overview-dot")];
  const audio = [...root.querySelectorAll("audio")];
  const title = root.querySelector("#overview-title");
  const caption = root.querySelector("#overview-caption");
  const toggle = root.querySelector("#overview-toggle");
  const previous = root.querySelector("#overview-prev");
  const next = root.querySelector("#overview-next");
  const time = root.querySelector("#overview-time");
  let active = 0;
  let playing = false;

  const scenes = [
    ["Why we use drones", "Bay of Plenty Regional Council uses drones to create an accurate and repeatable aerial record of engineering work. The value is not simply the flight. It is the consistent evidence the flight provides for design, construction decisions, quantities, inspections, project communication, and flood response."],
    ["Plan the whole occupied area", "Before the first flight, the team plans the full project area. That means more than drawing around the stopbank earthworks. The capture must include the establishment area, vehicle movements, haul routes, laydown areas, and enough surrounding ground to produce reliable information at the edges. The route must stay within authorised airspace and land access."],
    ["Install permanent project control", "During the pre-construction walkover, the team installs permanent ground control plates. These points sit within the authorised contract area, but outside current and future earthworks, plant tracking, haul routes, and laydown areas. They are surveyed, photographed, labelled, and protected so the same control can be recovered throughout the project."],
    ["Capture the baseline", "The first flight creates the pre-construction baseline. It records the original ground and the wider area affected by the works. Once the coverage and quality have been checked, the flight route is saved. This baseline gives the project a consistent starting point for every later comparison."],
    ["Repeat at meaningful milestones", "As construction progresses, the team repeats the same safe route at meaningful milestones. A flight after stripping records the exposed formation. Later flights capture important activities and new surfaces. Repeating the route improves consistency, while any necessary change to coverage is recorded deliberately rather than made by accident."],
    ["Coordinate with the site", "Every visit is coordinated with the site manager or project contact. The drone team completes the required induction, sign-in, and health and safety process, confirms plant movements and exclusion areas, and makes sure people on site know when photography, video, or LiDAR capture will occur. This is both a safety control and normal professional courtesy."],
    ["Measure independent checkpoints", "At key stages, the team also places temporary independent checkpoints on surfaces that matter. Examples include the top of a newly built stopbank, the bottom of a trench, or the top of a new culvert. Each checkpoint is measured independently with an RTK GNSS rover. It is not used to adjust the model; it is used later to test the finished result."],
    ["Survey before surfaces disappear", "Before topsoil covers the completed earthworks, another flight records the bare constructed surface. This is often the best opportunity to capture the geometry used for quantities, as-built records, and future investigation. The route must cover the full work area, the control, and an adequate margin beyond it."],
    ["Complete the final as-built flight", "After topsoil and final works are complete, the team flies the checked route again for the final as-built record. Together, the baseline and milestone surveys show what changed, when it changed, and what was present before features became hidden or inaccessible."],
    ["Process, check and retain the evidence", "After every flight, the source data is protected and processed through the appropriate workflow. Ground control may be used to align the survey, while independent checkpoints test accuracy. The quality report, checkpoint results, source media, accepted surfaces, and project metadata are retained together so the result can be understood and defended later."],
    ["One capture supports many decisions", "This same drone programme supports much more than earthwork measurement. It provides photography and video for meetings and stakeholder updates, clear records of construction activity, terrain and inspection products for engineering, and rapid evidence during floods, including debris lines and coastal change. The aim is simple: capture the right information, at the right time, and make it useful to the people making decisions."]
  ];

  function stopAll() {
    audio.forEach((track) => {
      track.pause();
      track.currentTime = 0;
    });
  }

  function show(index, shouldPlay = playing) {
    stopAll();
    active = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle("is-active", i === active));
    dots.forEach((dot, i) => dot.classList.toggle("is-active", i === active));
    title.textContent = scenes[active][0];
    caption.textContent = scenes[active][1];
    time.textContent = `${active + 1} / ${slides.length}`;
    if (shouldPlay) {
      playing = true;
      root.classList.add("is-playing");
      toggle.textContent = "Pause overview";
      audio[active].play().catch(() => {
        playing = false;
        root.classList.remove("is-playing");
        toggle.textContent = "Play overview";
      });
    } else {
      playing = false;
      root.classList.remove("is-playing");
      toggle.textContent = active === 0 ? "Play overview" : "Resume overview";
    }
  }

  toggle.addEventListener("click", () => {
    if (playing) {
      audio[active].pause();
      playing = false;
      root.classList.remove("is-playing");
      toggle.textContent = "Resume overview";
    } else {
      playing = true;
      root.classList.add("is-playing");
      toggle.textContent = "Pause overview";
      audio[active].play();
    }
  });

  previous.addEventListener("click", () => show(active - 1));
  next.addEventListener("click", () => show(active + 1));
  dots.forEach((dot, i) => dot.addEventListener("click", () => show(i)));
  audio.forEach((track, i) => track.addEventListener("ended", () => {
    if (i < audio.length - 1) show(i + 1, true);
    else show(0, false);
  }));
})();
