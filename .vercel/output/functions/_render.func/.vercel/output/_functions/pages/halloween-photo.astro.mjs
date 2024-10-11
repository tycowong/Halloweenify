/* empty css                                           */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, a as createAstro, b as renderComponent, e as addAttribute } from '../chunks/astro/server_DndpRU1h.mjs';
import 'kleur/colors';
import { a as astroPkg, g as getCollection, $ as $$Heading, b as $$Layout } from '../chunks/_astro_content_BzExRZM_.mjs';
import { constructCloudinaryUrl } from '@cloudinary-util/url-loader';
import 'clsx';
/* empty css                                           */
export { renderers } from '../renderers.mjs';

// src/constants/analytics.ts

// package.json
var package_default = {
  name: "astro-cloudinary",
  version: "1.1.0",
  type: "module",
  license: "MIT",
  module: "./index.ts",
  keywords: [
    "cloudinary",
    "astro",
    "astro-loader"
  ],
  exports: {
    ".": {
      import: "./index.ts"
    },
    "./helpers": {
      types: "./dist/helpers/index.d.ts",
      import: "./dist/helpers/index.js"
    },
    "./loaders": {
      types: "./dist/loaders/index.d.ts",
      import: "./dist/loaders/index.js"
    },
    "./package.json": "./package.json"
  },
  files: [
    "dist",
    "helpers",
    "loaders",
    "src",
    "index.ts"
  ],
  scripts: {
    dev: "tsup --watch",
    build: "tsup",
    prepublishOnly: "cp ../README.md . && cp ../LICENSE . && pnpm build",
    postpublish: "rm ./README.md && rm ./LICENSE"
  },
  dependencies: {
    "@cloudinary-util/types": "1.5.7",
    "@cloudinary-util/url-loader": "5.10.2",
    "@cloudinary-util/util": "^3.3.2",
    "@cloudinary/url-gen": "^1.20.0",
    "@unpic/astro": "^0.0.46",
    "@unpic/core": "^0.0.49",
    tsup: "^8.2.4",
    unpic: "^3.18.0"
  },
  peerDependencies: {
    astro: "^3.2.0 || ^4.0.0"
  },
  devDependencies: {
    astro: "^4.15.6"
  }
};

// src/constants/analytics.ts
var ASTRO_CLOUDINARY_ANALYTICS_PRODUCT_ID = "B";
var ASTRO_CLOUDINARY_ANALYTICS_ID = "G";
var ASTRO_VERSION = normalizeVersion(astroPkg.version);
var ASTRO_CLOUDINARY_VERSION = normalizeVersion(package_default.version);
function normalizeVersion(version) {
  let normalized = version;
  if (normalized.includes("-")) {
    normalized = normalized.split("-")[0];
  }
  return normalized;
}

function getCloudinaryConfig(config) {
  const cloudName = "dog0bhmts";
  const apiKey = undefined                                         ;
  const secureDistribution = undefined                                                     ;
  const privateCdn = undefined                                             ;
  return Object.assign({
    cloud: {
      ...config?.cloud,
      apiKey,
      cloudName
    },
    url: {
      ...config?.url,
      secureDistribution,
      privateCdn
    }
  }, config);
}
function getCloudinaryAnalytics(analytics) {
  return Object.assign({
    product: ASTRO_CLOUDINARY_ANALYTICS_PRODUCT_ID,
    sdkCode: ASTRO_CLOUDINARY_ANALYTICS_ID,
    sdkSemver: ASTRO_CLOUDINARY_VERSION,
    techVersion: ASTRO_VERSION,
    feature: ""
  }, analytics);
}
function getCldImageUrl(options, config, analytics) {
  return constructCloudinaryUrl({
    options,
    config: getCloudinaryConfig(config),
    analytics: getCloudinaryAnalytics(analytics)
  });
}

const $$Astro$1 = createAstro();
const $$PumpkinIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PumpkinIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} fill="#000000" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"> <g> <g> <path d="M367.978,372.196c-6.521-6.521-17.086-6.522-23.608,0l-21.587,21.586l-21.587-21.587c-6.521-6.521-17.087-6.521-23.609,0
			L256,393.783l-21.587-21.587c-6.521-6.521-17.087-6.521-23.609,0l-21.586,21.587l-21.587-21.587
			c-6.521-6.521-17.087-6.521-23.609,0c-6.521,6.521-6.521,17.087,0,23.609l33.391,33.391c6.521,6.521,17.087,6.521,23.609,0
			l21.587-21.586l21.587,21.587c6.521,6.521,17.087,6.521,23.609,0l21.586-21.587l21.587,21.587
			c3.261,3.261,7.533,4.892,11.804,4.892s8.544-1.631,11.804-4.892l33.391-33.391C374.499,389.284,374.499,378.717,367.978,372.196z
			"></path> </g> </g> <g> <g> <path d="M311.652,111.304c-14.815,0-29.207,1.723-43.089,4.815c7.336-46.935,43.903-82.728,93.176-82.728
			c9.22,0,16.696-7.475,16.696-16.696S370.96,0,361.739,0C294.45,0,243.557,49.811,235.114,114.539
			c-11.3-2.028-22.88-3.234-34.766-3.234C89.699,111.304,0,201.002,0,311.652C0,422.301,89.699,512,200.348,512
			c19.332,0,37.965-2.888,55.652-7.998c17.687,5.11,36.32,7.998,55.652,7.998C422.301,512,512,422.301,512,311.652
			C512,201.002,422.301,111.304,311.652,111.304z M311.652,478.609c-15.413,0-31.022-2.249-46.386-6.685L256,469.239l-9.266,2.685
			c-15.365,4.435-30.973,6.685-46.386,6.685c-92.06,0-166.957-74.891-166.957-166.957s74.897-166.956,166.957-166.956
			c15.413,0,31.022,2.249,46.386,6.685l9.266,2.685l9.266-2.685c15.364-4.435,30.973-6.685,46.386-6.685
			c92.06,0,166.957,74.891,166.957,166.956S403.712,478.609,311.652,478.609z"></path> </g> </g> <g> <g> <path d="M200.651,268.199l-89.043-33.391c-8.608-3.239-18.255,1.131-21.495,9.771c-3.239,8.631,1.136,18.251,9.766,21.49
			l89.043,33.391c1.936,0.728,3.913,1.065,5.865,1.065c6.755,0,13.119-4.13,15.63-10.837
			C213.655,281.058,209.28,271.438,200.651,268.199z"></path> </g> </g> <g> <g> <path d="M421.894,244.579c-3.238-8.641-12.885-13.01-21.494-9.771l-89.043,33.391c-8.631,3.239-13.006,12.859-9.766,21.49
			c2.511,6.706,8.875,10.837,15.63,10.837c1.951,0,3.929-0.337,5.864-1.065l89.043-33.391
			C420.758,262.83,425.134,253.21,421.894,244.579z"></path> </g> </g> </svg>`;
}, "C:/Users/tycow/OneDrive/Documentos/Development/Halloweenify/src/icons/PumpkinIcon.astro", void 0);

const $$JumpingPumpkins = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="whole" data-astro-cid-sy3tdxsp> <div data-astro-cid-sy3tdxsp> <div class="loading" data-astro-cid-sy3tdxsp> <span data-astro-cid-sy3tdxsp> ${renderComponent($$result, "PumpkinIcon", $$PumpkinIcon, { "class": "size-10 fill-orange-400", "data-astro-cid-sy3tdxsp": true })} </span> <span data-astro-cid-sy3tdxsp> ${renderComponent($$result, "PumpkinIcon", $$PumpkinIcon, { "class": "size-10 fill-orange-400", "data-astro-cid-sy3tdxsp": true })}</span> <span data-astro-cid-sy3tdxsp> ${renderComponent($$result, "PumpkinIcon", $$PumpkinIcon, { "class": "size-10 fill-orange-400", "data-astro-cid-sy3tdxsp": true })}</span> <span data-astro-cid-sy3tdxsp> ${renderComponent($$result, "PumpkinIcon", $$PumpkinIcon, { "class": "size-10 fill-orange-400", "data-astro-cid-sy3tdxsp": true })}</span> </div> </div> </div> `;
}, "C:/Users/tycow/OneDrive/Documentos/Development/Halloweenify/src/components/JumpingPumpkins.astro", void 0);

const $$Astro = createAstro();
const $$HalloweenPhoto = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HalloweenPhoto;
  const { searchParams } = Astro2.url;
  const id = searchParams.get("id");
  const sel = searchParams.get("sel");
  const PROPS = await getCollection("props");
  var aiProp = "";
  var aiReplace = "";
  PROPS.map((prop) => {
    const { slug, data } = prop;
    const { name, imgUrl, alt, prompt, replace } = data;
    if (sel === slug) {
      aiProp = prompt;
      aiReplace = replace;
    }
  });
  const url = getCldImageUrl({
    src: id,
    replace: [`${aiReplace}`, `${aiProp}`],
    saturation: "30",
    contrast: "-50",
    brightness: "-10",
    blur: "20",
    sharpen: "-100",
    vibrance: "-30",
    fillLight: "20:30"
  });
  while (!url) {
    console.log("atest");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Your Photoween" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Heading", $$Heading, { "class": "text-6xl sm:text-8xl" })} <section class="flex flex-col justify-center gap-5"> <div id="waiting" class="flex justify-center items-center md:w-full md:h-96"> <div class="flex flex-col gap-5 justify-center items-center"> <h2>Processing</h2> ${renderComponent($$result2, "JumpingPumpkins", $$JumpingPumpkins, {})} </div> </div> <img id="transformedImage"${addAttribute(url, "src")} alt=""> <button id="download" class="hidden"> Downlaod </button> </section> </main> ` })} `;
}, "C:/Users/tycow/OneDrive/Documentos/Development/Halloweenify/src/pages/halloween-photo.astro", void 0);

const $$file = "C:/Users/tycow/OneDrive/Documentos/Development/Halloweenify/src/pages/halloween-photo.astro";
const $$url = "/halloween-photo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$HalloweenPhoto,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
