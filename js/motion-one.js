"use strict";

import { stagger, timeline } from "https://cdn.skypack.dev/motion";

const sequence = [
  //
  [".animate", { opacity: [0, 1], y: [10, 0] }, { duration: 0.6, delay: stagger(0.15) }],
  ["#about-container", { opacity: [0, 1], y: [10, 0] }, { duration: 0.6 }],
];

const options = { delay: 0.5 };

timeline(sequence, options);
