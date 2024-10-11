import { c as createComponent, r as renderTemplate, e as addAttribute, f as renderHead, g as renderSlot, a as createAstro, m as maybeRenderHead, s as spreadAttributes, h as renderUniqueStylesheet, i as renderScriptElement, j as createHeadAndContent, b as renderComponent, u as unescapeHTML } from './astro/server_DndpRU1h.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                   */
import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import { r as removeBase, i as isRemotePath, V as VALID_INPUT_FORMATS, A as AstroError, U as UnknownContentCollectionError, p as prependForwardSlash } from './astro/assets-service_Ctm8IuxM.mjs';
import * as devalue from 'devalue';

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/png" href="/favicon-48x48.png" sizes="48x48"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="shortcut icon" href="/favicon.ico"><link rel="apple-touch-icon" sizes="180x180" href="/public/apple-touch-icon.png"><link rel="manifest" href="/site.webmanifest"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Creepster&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Denk+One&display=swap" rel="stylesheet"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/tycow/OneDrive/Documentos/Development/Halloweenify/src/layouts/Layout.astro", void 0);

const name = "astro";
const version = "4.15.12";
const description = "Astro is a modern site builder with web best practices, performance, and DX front-of-mind.";
const type = "module";
const author = "withastro";
const license = "MIT";
const repository = {
	type: "git",
	url: "https://github.com/withastro/astro.git",
	directory: "packages/astro"
};
const bugs = "https://github.com/withastro/astro/issues";
const homepage = "https://astro.build";
const types = "./index.d.ts";
const typesVersions = {
	"*": {
		app: [
			"./dist/core/app/index"
		],
		"app/*": [
			"./dist/core/app/*"
		],
		middleware: [
			"./dist/virtual-modules/middleware.d.ts"
		]
	}
};
const exports = {
	".": {
		types: "./index.d.ts",
		"default": "./dist/core/index.js"
	},
	"./env": "./env.d.ts",
	"./env/runtime": "./dist/env/runtime.js",
	"./env/setup": "./dist/env/setup.js",
	"./types": "./types.d.ts",
	"./client": "./client.d.ts",
	"./astro-jsx": "./astro-jsx.d.ts",
	"./tsconfigs/*.json": "./tsconfigs/*",
	"./tsconfigs/*": "./tsconfigs/*.json",
	"./jsx/*": "./dist/jsx/*",
	"./jsx-runtime": {
		types: "./jsx-runtime.d.ts",
		"default": "./dist/jsx-runtime/index.js"
	},
	"./compiler-runtime": "./dist/runtime/compiler/index.js",
	"./runtime/*": "./dist/runtime/*",
	"./config": {
		types: "./config.d.ts",
		"default": "./config.mjs"
	},
	"./container": {
		types: "./dist/container/index.d.ts",
		"default": "./dist/container/index.js"
	},
	"./app": "./dist/core/app/index.js",
	"./app/node": "./dist/core/app/node.js",
	"./client/*": "./dist/runtime/client/*",
	"./components": "./components/index.ts",
	"./components/*": "./components/*",
	"./toolbar": "./dist/toolbar/index.js",
	"./actions/runtime/*": "./dist/actions/runtime/*",
	"./assets": "./dist/assets/index.js",
	"./assets/utils": "./dist/assets/utils/index.js",
	"./assets/utils/inferRemoteSize.js": "./dist/assets/utils/remoteProbe.js",
	"./assets/endpoint/*": "./dist/assets/endpoint/*.js",
	"./assets/services/sharp": "./dist/assets/services/sharp.js",
	"./assets/services/squoosh": "./dist/assets/services/squoosh.js",
	"./assets/services/noop": "./dist/assets/services/noop.js",
	"./loaders": "./dist/content/loaders/index.js",
	"./content/runtime": "./dist/content/runtime.js",
	"./content/runtime-assets": "./dist/content/runtime-assets.js",
	"./debug": "./components/Debug.astro",
	"./package.json": "./package.json",
	"./zod": {
		types: "./zod.d.ts",
		"default": "./zod.mjs"
	},
	"./errors": "./dist/core/errors/userError.js",
	"./middleware": {
		types: "./dist/core/middleware/index.d.ts",
		"default": "./dist/core/middleware/index.js"
	},
	"./virtual-modules/*": "./dist/virtual-modules/*"
};
const bin = {
	astro: "astro.js"
};
const files = [
	"components",
	"tsconfigs",
	"dist",
	"types",
	"astro.js",
	"index.d.ts",
	"config.d.ts",
	"config.mjs",
	"zod.d.ts",
	"zod.mjs",
	"env.d.ts",
	"client.d.ts",
	"jsx-runtime.d.ts",
	"templates",
	"astro-jsx.d.ts",
	"types.d.ts",
	"README.md",
	"vendor"
];
const dependencies = {
	"@astrojs/compiler": "^2.10.3",
	"@babel/core": "^7.25.7",
	"@babel/plugin-transform-react-jsx": "^7.25.7",
	"@babel/types": "^7.25.7",
	"@oslojs/encoding": "^1.1.0",
	"@rollup/pluginutils": "^5.1.2",
	"@types/babel__core": "^7.20.5",
	"@types/cookie": "^0.6.0",
	acorn: "^8.12.1",
	"aria-query": "^5.3.2",
	"axobject-query": "^4.1.0",
	boxen: "8.0.1",
	"ci-info": "^4.0.0",
	clsx: "^2.1.1",
	"common-ancestor-path": "^1.0.1",
	cookie: "^0.7.2",
	cssesc: "^3.0.0",
	debug: "^4.3.7",
	"deterministic-object-hash": "^2.0.2",
	devalue: "^5.1.1",
	diff: "^5.2.0",
	dlv: "^1.1.3",
	dset: "^3.1.4",
	"es-module-lexer": "^1.5.4",
	esbuild: "^0.21.5",
	"estree-walker": "^3.0.3",
	"fast-glob": "^3.3.2",
	fastq: "^1.17.1",
	flattie: "^1.1.1",
	"github-slugger": "^2.0.0",
	"gray-matter": "^4.0.3",
	"html-escaper": "^3.0.3",
	"http-cache-semantics": "^4.1.1",
	"js-yaml": "^4.1.0",
	kleur: "^4.1.5",
	"magic-string": "^0.30.11",
	magicast: "^0.3.5",
	micromatch: "^4.0.8",
	mrmime: "^2.0.0",
	neotraverse: "^0.6.18",
	ora: "^8.1.0",
	"p-limit": "^6.1.0",
	"p-queue": "^8.0.1",
	"preferred-pm": "^4.0.0",
	prompts: "^2.4.2",
	rehype: "^13.0.2",
	semver: "^7.6.3",
	shiki: "^1.22.0",
	"string-width": "^7.2.0",
	tinyexec: "^0.3.0",
	tsconfck: "^3.1.3",
	"unist-util-visit": "^5.0.0",
	vfile: "^6.0.3",
	vite: "^5.4.8",
	vitefu: "^1.0.2",
	"which-pm": "^3.0.0",
	"xxhash-wasm": "^1.0.2",
	"yargs-parser": "^21.1.1",
	zod: "^3.23.8",
	"zod-to-json-schema": "^3.23.3",
	"zod-to-ts": "^1.2.0",
	"@astrojs/internal-helpers": "0.4.1",
	"@astrojs/markdown-remark": "5.2.0",
	"@astrojs/telemetry": "3.1.0"
};
const optionalDependencies = {
	sharp: "^0.33.3"
};
const devDependencies = {
	"@astrojs/check": "^0.9.4",
	"@playwright/test": "^1.47.2",
	"@types/aria-query": "^5.0.4",
	"@types/common-ancestor-path": "^1.0.2",
	"@types/cssesc": "^3.0.2",
	"@types/debug": "^4.1.12",
	"@types/diff": "^5.2.2",
	"@types/dlv": "^1.1.4",
	"@types/hast": "^3.0.4",
	"@types/html-escaper": "^3.0.2",
	"@types/http-cache-semantics": "^4.0.4",
	"@types/js-yaml": "^4.0.9",
	"@types/micromatch": "^4.0.9",
	"@types/prompts": "^2.4.9",
	"@types/semver": "^7.5.8",
	"@types/yargs-parser": "^21.0.3",
	cheerio: "1.0.0",
	eol: "^0.10.0",
	execa: "^8.0.1",
	"expect-type": "^1.0.0",
	"mdast-util-mdx": "^3.0.0",
	"mdast-util-mdx-jsx": "^3.1.3",
	memfs: "^4.12.0",
	"node-mocks-http": "^1.16.1",
	"parse-srcset": "^1.0.2",
	"rehype-autolink-headings": "^7.1.0",
	"rehype-slug": "^6.0.0",
	"rehype-toc": "^3.0.2",
	"remark-code-titles": "^0.1.2",
	rollup: "^4.24.0",
	sass: "^1.79.4",
	undici: "^6.19.8",
	unified: "^11.0.5",
	"astro-scripts": "0.0.14"
};
const engines = {
	node: "^18.17.1 || ^20.3.0 || >=21.0.0",
	npm: ">=9.6.5",
	pnpm: ">=7.1.0"
};
const publishConfig = {
	provenance: true
};
const scripts = {
	prebuild: "astro-scripts prebuild --to-string \"src/runtime/server/astro-island.ts\" \"src/runtime/client/{idle,load,media,only,visible}.ts\"",
	build: "pnpm run prebuild && astro-scripts build \"src/**/*.{ts,js}\" --copy-wasm && tsc",
	"build:ci": "pnpm run prebuild && astro-scripts build \"src/**/*.{ts,js}\" --copy-wasm",
	dev: "astro-scripts dev --copy-wasm --prebuild \"src/runtime/server/astro-island.ts\" --prebuild \"src/runtime/client/{idle,load,media,only,visible}.ts\" \"src/**/*.{ts,js}\"",
	test: "pnpm run test:node && pnpm run test:types",
	"test:match": "pnpm run test:node --match",
	"test:e2e": "pnpm test:e2e:chrome && pnpm test:e2e:firefox",
	"test:e2e:match": "playwright test -g",
	"test:e2e:chrome": "playwright test",
	"test:e2e:firefox": "playwright test --config playwright.firefox.config.js",
	"test:types": "tsc --project tsconfig.tests.json",
	"test:node": "astro-scripts test \"test/**/*.test.js\""
};
const astroPkg = {
	name: name,
	version: version,
	description: description,
	type: type,
	author: author,
	license: license,
	repository: repository,
	bugs: bugs,
	homepage: homepage,
	types: types,
	typesVersions: typesVersions,
	exports: exports,
	bin: bin,
	files: files,
	dependencies: dependencies,
	optionalDependencies: optionalDependencies,
	devDependencies: devDependencies,
	engines: engines,
	publishConfig: publishConfig,
	scripts: scripts
};

const $$Astro = createAstro();
const $$Heading = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Heading;
  return renderTemplate`${maybeRenderHead()}<div class="mt-5"> <h1${spreadAttributes(Astro2.props)}>Halloweenify</h1> </div>`;
}, "C:/Users/tycow/OneDrive/Documentos/Development/Halloweenify/src/components/Heading.astro", void 0);

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1);
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class DataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_BcEe_9wP.mjs');
      if (data.default instanceof Map) {
        return DataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return DataStore.fromMap(map);
    } catch {
    }
    return new DataStore();
  }
  static async fromMap(data) {
    const store = new DataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = DataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "PUBLIC_CLOUDINARY_CLOUD_NAME": "dog0bhmts", "SITE": undefined, "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./_astro_asset-imports_D9aVaOQr.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        const entry = {
          ...rawEntry,
          data,
          collection
        };
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { Path: process.env.Path })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/props/clown.md": () => import('./clown_CpO0_gK7.mjs'),"/src/content/props/hannibal.md": () => import('./hannibal_BoVCfh3H.mjs'),"/src/content/props/pumpkin-head.md": () => import('./pumpkin-head_By9OWvYV.mjs'),"/src/content/props/rocky-horror.md": () => import('./rocky-horror_C2v8G9L8.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"props":{"type":"content","entries":{"clown":"/src/content/props/clown.md","hannibal":"/src/content/props/hannibal.md","pumpkin-head":"/src/content/props/pumpkin-head.md","rocky-horror":"/src/content/props/rocky-horror.md"}}};

new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/props/clown.md": () => import('./clown_DlFMKitF.mjs'),"/src/content/props/hannibal.md": () => import('./hannibal_daCxxWNu.mjs'),"/src/content/props/pumpkin-head.md": () => import('./pumpkin-head_CEG15_FP.mjs'),"/src/content/props/rocky-horror.md": () => import('./rocky-horror_KTD9QKYq.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

export { $$Heading as $, astroPkg as a, $$Layout as b, getCollection as g };
