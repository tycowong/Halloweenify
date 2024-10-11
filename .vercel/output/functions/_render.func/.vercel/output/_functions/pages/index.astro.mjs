/* empty css                                           */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, a as createAstro, b as renderComponent, e as addAttribute, g as renderSlot } from '../chunks/astro/server_DndpRU1h.mjs';
import 'kleur/colors';
import { a as astroPkg, g as getCollection, $ as $$Heading, b as $$Layout } from '../chunks/_astro_content_BzExRZM_.mjs';
import { inferImageDimensions, transformProps, transformSourceProps } from '@unpic/core';
import { getCanonicalCdnForUrl, transformUrl } from 'unpic';
import { getPixels } from '@unpic/pixels';
import { i as imageConfig } from '../chunks/_astro_assets_Dv0D6hSZ.mjs';
import { env } from 'node:process';
import 'clsx';
import { constructCloudinaryUrl, transformationPlugins, getVideoPlayerOptions, getUploadWidgetOptions } from '@cloudinary-util/url-loader';
import { createHash } from 'node:crypto';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const specialBackgrounds = ["blurhash", "dominantColor", "lqip"];
function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}
async function getBackground(props) {
  if (props.background === "none") {
    return;
  }
  if (!specialBackgrounds.includes(props.background ?? "")) {
    return props.background;
  }
  let aspectRatio = props.aspectRatio;
  if (!aspectRatio) {
    if (props.width && props.height) {
      aspectRatio = props.height / props.width;
    } else {
      aspectRatio = 1;
    }
  }
  const cdn = getCanonicalCdnForUrl(props.src, props.cdn);
  if (!cdn) {
    return;
  }
  const bgImgProps = {
    ...props,
    url: props.src,
    width: 12,
    height: 12 * aspectRatio,
    cdn: cdn.cdn
  };
  if (!cdn) {
    return;
  }
  if (props.background === "lqip") {
    const lowUrl2 = transformUrl(bgImgProps)?.toString();
    if (!lowUrl2) {
      return;
    }
    if (!isValidUrl(lowUrl2)) {
      return;
    }
    const response = await fetch(lowUrl2, {
      headers: {
        Accept: "image/webp,*/*"
      }
    });
    const contentType = response.headers.get("Content-Type");
    const blob = await response.blob();
    const buffer = Buffer.from(await blob.arrayBuffer());
    return "data:" + contentType + ";base64," + buffer.toString("base64");
  }
  const lowUrl = transformUrl({
    ...bgImgProps,
    width: 100,
    height: 100 * aspectRatio
  })?.toString();
  if (!lowUrl) {
    return;
  }
  if (!isValidUrl(lowUrl)) {
    return;
  }
  const pixels = await getPixels(lowUrl);
  if (!pixels) {
    return;
  }
  const data = Uint8ClampedArray.from(pixels.data);
  const { blurhashToDataUri, rgbColorToCssString, getDominantColor } = await import('@unpic/placeholder');
  if (props.background === "blurhash") {
    const { encode } = await import('blurhash');
    const blurhash = encode(data, pixels.width, pixels.height, 4, 3);
    return blurhashToDataUri(blurhash);
  }
  if (props.background === "dominantColor") {
    return rgbColorToCssString(getDominantColor(data));
  }
}

function getDefaultService() {
  if (env.NETLIFY || env.NETLIFY_LOCAL) {
    return "netlify";
  }
  if (env.VERCEL || env.NOW_BUILDER) {
    return "vercel";
  }
  return "astro";
}

function getDefaultImageCdn(config) {
  if (config?.fallbackService === "squoosh" || config?.fallbackService === "sharp") {
    return "astro";
  }
  return config.fallbackService ?? getDefaultService();
}

const $$Astro$5 = createAstro();
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Image;
  const { placeholder, ...props } = Astro2.props;
  let imgProps;
  if (typeof props.src === "object") {
    imgProps = {
      ...props,
      src: props.src.src,
      ...inferImageDimensions(props, props.src)
    };
  } else {
    imgProps = {
      ...props
    };
  }
  const config = imageConfig.service?.config;
  imgProps.layout ||= config?.layout;
  imgProps.background ||= placeholder ?? config?.placeholder;
  if (!imgProps.cdn) {
    imgProps.cdn = getDefaultImageCdn(config);
  }
  imgProps.background = await getBackground(imgProps);
  return renderTemplate`${maybeRenderHead()}<img${spreadAttributes(transformProps(imgProps))}>`;
}, "C:/Users/tycow/OneDrive/Documentos/Development/Halloweenify/node_modules/.pnpm/@unpic+astro@0.0.46_astro@4.15.12_rollup@4.24.0_sass@1.79.5_typescript@5.6.3_/node_modules/@unpic/astro/src/Image.astro", void 0);

const $$Astro$4 = createAstro();
const $$Source = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Source;
  const props = Astro2.props;
  let sourceProps;
  if (typeof props.src === "object") {
    sourceProps = {
      ...props,
      src: props.src.src,
      ...inferImageDimensions(props, props.src)
    };
  } else {
    sourceProps = props;
  }
  const config = imageConfig.service?.config;
  sourceProps.layout ||= config?.layout;
  if (!sourceProps.cdn) {
    sourceProps.cdn = getDefaultImageCdn(config);
  }
  return renderTemplate`${maybeRenderHead()}<source${spreadAttributes(transformSourceProps(sourceProps))}>`;
}, "C:/Users/tycow/OneDrive/Documentos/Development/Halloweenify/node_modules/.pnpm/@unpic+astro@0.0.46_astro@4.15.12_rollup@4.24.0_sass@1.79.5_typescript@5.6.3_/node_modules/@unpic/astro/src/Source.astro", void 0);

const name = "astro-cloudinary";
const version = "1.1.0";
const type = "module";
const license = "MIT";
const module = "./index.ts";
const keywords = [
	"cloudinary",
	"astro",
	"astro-loader"
];
const exports = {
	".": {
		"import": "./index.ts"
	},
	"./helpers": {
		types: "./dist/helpers/index.d.ts",
		"import": "./dist/helpers/index.js"
	},
	"./loaders": {
		types: "./dist/loaders/index.d.ts",
		"import": "./dist/loaders/index.js"
	},
	"./package.json": "./package.json"
};
const files = [
	"dist",
	"helpers",
	"loaders",
	"src",
	"index.ts"
];
const dependencies = {
	"@cloudinary-util/types": "1.5.7",
	"@cloudinary-util/url-loader": "5.10.2",
	"@cloudinary-util/util": "^3.3.2",
	"@cloudinary/url-gen": "^1.20.0",
	"@unpic/astro": "^0.0.46",
	"@unpic/core": "^0.0.49",
	tsup: "^8.2.4",
	unpic: "^3.18.0"
};
const peerDependencies = {
	astro: "^3.2.0 || ^4.0.0"
};
const devDependencies = {
	astro: "^4.15.6"
};
const scripts = {
	dev: "tsup --watch",
	build: "tsup"
};
const pkg = {
	name: name,
	version: version,
	type: type,
	license: license,
	module: module,
	keywords: keywords,
	exports: exports,
	files: files,
	dependencies: dependencies,
	peerDependencies: peerDependencies,
	devDependencies: devDependencies,
	scripts: scripts
};

const ASTRO_CLOUDINARY_ANALYTICS_PRODUCT_ID = "B";
const ASTRO_CLOUDINARY_ANALYTICS_ID = "G";
const ASTRO_VERSION = normalizeVersion(astroPkg.version);
const ASTRO_CLOUDINARY_VERSION = normalizeVersion(pkg.version);
function normalizeVersion(version) {
  let normalized = version;
  if (normalized.includes("-")) {
    normalized = normalized.split("-")[0];
  }
  return normalized;
}

function getCloudinaryConfig(config) {
  const cloudName = config?.cloud?.cloudName ?? "dog0bhmts";
  if (!cloudName) {
    throw new Error("A Cloudinary Cloud name is required, please make sure PUBLIC_CLOUDINARY_CLOUD_NAME is set and configured in your environment.");
  }
  const apiKey = config?.cloud?.apiKey ?? undefined                                         ;
  const secureDistribution = config?.url?.secureDistribution ?? undefined                                                     ;
  const privateCdn = config?.url?.privateCdn ?? undefined                                             ;
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

function generateImageLoader(props, config) {
  const imageProps = { ...props };
  imageProps.width = typeof imageProps.width === "string" ? Number.parseInt(imageProps.width) : imageProps.width;
  imageProps.height = typeof imageProps.height === "string" ? Number.parseInt(imageProps.height) : imageProps.height;
  return function loader(loaderOptions) {
    const options = {
      ...imageProps,
      src: loaderOptions.url,
      width: loaderOptions.width,
      height: loaderOptions.height
    };
    if (typeof loaderOptions?.width === "number" && typeof options.width === "number" && loaderOptions.width !== options.width) {
      const multiplier = loaderOptions.width / options.width;
      options.width = loaderOptions.width;
      if (typeof options.height === "number") {
        options.height = Math.floor(options.height * multiplier);
      }
    } else if (typeof loaderOptions?.width === "number" && typeof options?.width !== "number") {
      options.width = loaderOptions?.width;
    }
    return getCldImageUrl(options, config);
  };
}

const $$Astro$3 = createAstro();
const $$CldImage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$CldImage;
  const { config, class: className, ...props } = Astro2.props;
  const CLOUDINARY_PROPS = [
    "assetType",
    "deliveryType",
    "dpr",
    "format",
    "quality",
    "strictTransformations"
    // Excluded props that are managed by the component
    // 'height',
    // 'src',
    // 'width'
  ];
  transformationPlugins.forEach(({ props: props2 }) => {
    Object.keys(props2).forEach((prop) => {
      if (CLOUDINARY_PROPS.includes(prop)) {
        throw new Error(`Option ${prop} already exists!`);
      }
      CLOUDINARY_PROPS.push(prop);
    });
  });
  const cldOptions = {
    height: props.height,
    src: props.src,
    width: props.width
  };
  CLOUDINARY_PROPS.forEach((key) => {
    const prop = props[key];
    if (prop) {
      cldOptions[key] = prop;
    }
  });
  const transformer = generateImageLoader(cldOptions, config);
  const src = transformer({
    url: props.src,
    width: props.width,
    height: props.height
  });
  const imageProps = {
    cdn: "cloudinary",
    height: props.height,
    src,
    width: props.width,
    transformer
  };
  Object.entries(props).filter(([key]) => typeof key === "string" && !CLOUDINARY_PROPS.includes(key)).forEach(([key, value]) => imageProps[key] = value);
  let imageClassName = "astro-cloudinary-cldimage";
  if (className) {
    imageClassName = `${imageClassName} ${className}`;
  }
  return renderTemplate`${renderComponent($$result, "Image", $$Image, { "class": imageClassName, ...imageProps })} `;
}, "C:/Users/tycow/OneDrive/Documentos/Development/Halloweenify/node_modules/.pnpm/astro-cloudinary@1.1.0_astro@4.15.12_rollup@4.24.0_sass@1.79.5_typescript@5.6.3__jiti@1.21.6__efpvsoxau7qa7il7r32slsrqtq/node_modules/astro-cloudinary/src/components/CldImage.astro", void 0);

const $$Astro$2 = createAstro();
const $$CldVideoPlayer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CldVideoPlayer;
  const PLAYER_VERSION = "2.1.0";
  const props = Astro2.props;
  const { class: className, config, height, id, width } = props;
  const cloudinaryConfig = getCloudinaryConfig(config);
  const playerOptions = getVideoPlayerOptions(props, cloudinaryConfig);
  const { publicId } = playerOptions;
  if (typeof publicId === "undefined") {
    throw new Error("[CldVideoPlayer] Public ID or Cloudinary URL required - please specify a src prop.");
  }
  let playerId = id || `player-${publicId.replace("/", "-")}`;
  const playerHash = createHash("shake256", { outputLength: 4 }).update(JSON.stringify(playerOptions)).digest("hex");
  let playerClassName = "astro-cloudinary-cldvideoplayer cld-video-player cld-fluid";
  if (className) {
    playerClassName = `${playerClassName} ${className}`;
  }
  return renderTemplate`<link${addAttribute(`https://unpkg.com/cloudinary-video-player@${PLAYER_VERSION}/dist/cld-video-player.min.css`, "href")} rel="stylesheet">${maybeRenderHead()}<div${addAttribute(playerId, "id")}${addAttribute({ width: "100%", aspectRatio: `${width} / ${height}` }, "style")}> <video${addAttribute(`${playerId}-${playerHash}`, "id")}${addAttribute(playerClassName, "class")}${addAttribute(width, "width")}${addAttribute(height, "height")}${addAttribute(JSON.stringify(playerOptions), "data-cldvideoplayer-options")}${addAttribute(playerId, "data-cldvideoplayer-id")}></video> </div> `;
}, "C:/Users/tycow/OneDrive/Documentos/Development/Halloweenify/node_modules/.pnpm/astro-cloudinary@1.1.0_astro@4.15.12_rollup@4.24.0_sass@1.79.5_typescript@5.6.3__jiti@1.21.6__efpvsoxau7qa7il7r32slsrqtq/node_modules/astro-cloudinary/src/components/CldVideoPlayer.astro", void 0);

const $$Astro$1 = createAstro();
const $$CldUploadWidget = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CldUploadWidget;
  const { class: className, config, id, options, signatureEndpoint, uploadPreset } = Astro2.props;
  const cloudinaryConfig = getCloudinaryConfig(config);
  const uploadOptions = getUploadWidgetOptions({
    uploadPreset: uploadPreset || undefined                                               ,
    ...options
  }, cloudinaryConfig);
  let playerClassName = "astro-cloudinary-clduploadwidget";
  if (typeof className === "string") {
    playerClassName = `${playerClassName} ${className}`;
  }
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(id, "id")}${addAttribute(playerClassName, "class")}${addAttribute(JSON.stringify(uploadOptions), "data-clduploadwidgetupload-options")}${addAttribute(signatureEndpoint, "data-clduploadwidgetupload-signatureendpoint")}> ${renderSlot($$result, $$slots["default"])} </span> `;
}, "C:/Users/tycow/OneDrive/Documentos/Development/Halloweenify/node_modules/.pnpm/astro-cloudinary@1.1.0_astro@4.15.12_rollup@4.24.0_sass@1.79.5_typescript@5.6.3__jiti@1.21.6__efpvsoxau7qa7il7r32slsrqtq/node_modules/astro-cloudinary/src/components/CldUploadWidget.astro", void 0);

const $$Astro = createAstro();
const $$Arrow = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Arrow;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${spreadAttributes(Astro2.props)}><path d="m18.707 12.707-3 3a1 1 0 0 1-1.414-1.414L15.586 13H6a1 1 0 0 1 0-2h9.586l-1.293-1.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414z" style="fill:#f97c4b" data-name="Right"></path></svg>`;
}, "C:/Users/tycow/OneDrive/Documentos/Development/Halloweenify/src/icons/Arrow.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const PROPS = await getCollection("props");
  const mainSelection = "rocky-horror";
  const mainUrl = "https://res.cloudinary.com/dog0bhmts/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max/v1728618697/frank-e1567896887283_m2utgn.webp";
  const mainAlt = "image of Frank n Furtur";
  const mainName = "Rocky Horror";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Halloweenify", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex felx-row justify-center w-screen" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Heading", $$Heading, { "class": "text-6xl sm:text-8xl animate-fadeDrop mb-4", "data-astro-cid-j7pv25f6": true })} <section class="felx flex-col justify-center align-middle text-center w-screen" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "CldUploadWidget", $$CldUploadWidget, { "id": "upload-widget", "uploadPreset": "unsigned-images", "options": {
    sources: ["local", "camera"],
    multiple: false
  }, "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` <button data-astro-cid-j7pv25f6> <div class="px-4 py-2 rounded-xl bg-orange-500 text-2xl font-semibold" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Change you face aparence here!</h2> </div> </button> ` })} <div class="flex gap-10 m-6 justify-center flex-wrap sm:flex-auto p-0 mt-11" data-astro-cid-j7pv25f6> <div class="flex flex-col gap-3 justify-center" data-astro-cid-j7pv25f6> <input${addAttribute(mainSelection, "id")} type="radio"${addAttribute(mainSelection, "value")} name="prompts" class="hidden peer" required checked data-astro-cid-j7pv25f6> <label${addAttribute(mainSelection, "for")} class="size-32 md:size-36 rounded-full flex flex-col justify-center align-middle gap-6 peer-checked:border-orange-600 peer-checked:border-4 peer-checked:hover:border-7" data-astro-cid-j7pv25f6> <img class="rounded-full hover:scale-95 cursor-pointer ease-in-out transition duration-150"${addAttribute(mainAlt, "alt")}${addAttribute(mainUrl, "src")} data-astro-cid-j7pv25f6> </label> <h2 data-astro-cid-j7pv25f6>${mainName}</h2> </div> ${PROPS.map((aiProp) => {
    const { slug, data } = aiProp;
    const { name, imgUrl, alt, prompt } = data;
    if (slug === "rocky-horror") {
      return;
    }
    return renderTemplate`<div class="flex flex-col gap-3 justify-center" data-astro-cid-j7pv25f6> <input${addAttribute(slug, "id")} type="radio"${addAttribute(slug, "value")} name="prompts" class="hidden peer" data-astro-cid-j7pv25f6> <label${addAttribute(slug, "for")} class="size-32 md:size-36 rounded-full flex flex-col justify-center align-middle gap-6 peer-checked:border-orange-600 peer-checked:border-4 peer-checked:hover:border-7" data-astro-cid-j7pv25f6> <img class="rounded-full hover:scale-95 cursor-pointer ease-in-out transition duration-150"${addAttribute(alt, "alt")}${addAttribute(imgUrl, "src")} data-astro-cid-j7pv25f6> </label> <h2 data-astro-cid-j7pv25f6>${name}</h2> </div>`;
  })} </div> <div class="flex flex-row gap-8 justify-center items-center t-14 items mt-20 mb-5" data-astro-cid-j7pv25f6> <img class="size-48 sm:size-72 md:size-80 -rotate-12" src="https://res.cloudinary.com/dog0bhmts/image/upload/v1728596167/asvufhi8c7l4hsko7yiw.jpg" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Arrow", $$Arrow, { "class": "size-24 -translate-y-10", "data-astro-cid-j7pv25f6": true })} <img class="size-48 sm:size-72 md:size-80 rotate-12" src="https://res.cloudinary.com/dog0bhmts/image/upload/e_gen_replace:from_face;to_Rocky%20Horror%20picture%20show%20makeup/e_blur:20/e_brightness:-10/e_contrast:-50/e_fill_light:20:30/e_saturation:30/e_sharpen:-100/e_vibrance:-30/f_auto/q_auto/v1/asvufhi8c7l4hsko7yiw?_a=BBGABlXg0" data-astro-cid-j7pv25f6> </div> </section> </main>   ` })}`;
}, "C:/Users/tycow/OneDrive/Documentos/Development/Halloweenify/src/pages/index.astro", void 0);

const $$file = "C:/Users/tycow/OneDrive/Documentos/Development/Halloweenify/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
