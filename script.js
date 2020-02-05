"use strict";

const fullHeightEl = document.querySelector(".full-height");
fullHeightEl.scrollHeight;

fullHeightEl.innerHTML = `100 vh height: ${fullHeightEl.scrollHeight}<br />document height: ${window.innerHeight}`;
