import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DtKuIxuQ.mjs';
import 'es-module-lexer';
import { d as decodeKey } from './chunks/astro/server_DndpRU1h.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/tycow/OneDrive/Documentos/Development/Halloweenify/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@4.15.12_rollup@4.24.0_sass@1.79.5_typescript@5.6.3/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const n=document.getElementById(\"transformedImage\"),c=n.getAttribute(\"src\"),a=document.getElementById(\"download\");n.addEventListener(\"load\",()=>{const t=document.getElementById(\"waiting\");t.style.display=\"none\"});a.addEventListener(\"click\",async()=>{try{const o=await(await fetch(c)).blob(),d=URL.createObjectURL(o),e=document.createElement(\"a\");e.href=d,e.download=\"Your_scary_image\",document.body.appendChild(e),e.click(),document.body.removeChild(e)}catch{}});\n"}],"styles":[{"type":"external","src":"/_astro/halloween-photo.1f278PmA.css"},{"type":"inline","content":"img[data-astro-cid-sy3tdxsp]{padding-right:12px}.whole[data-astro-cid-sy3tdxsp]{height:-moz-fit-content;height:fit-content}.whole[data-astro-cid-sy3tdxsp] div[data-astro-cid-sy3tdxsp]{display:flex;align-items:center;justify-content:center;align-self:center}.whole[data-astro-cid-sy3tdxsp] div[data-astro-cid-sy3tdxsp]:nth-child(1){display:inline-flex}.whole[data-astro-cid-sy3tdxsp] div[data-astro-cid-sy3tdxsp]:nth-child(2){align-items:center;justify-content:center}.loading[data-astro-cid-sy3tdxsp] span[data-astro-cid-sy3tdxsp]{width:35px;height:35px;margin:0 5px;border-radius:50%;display:inline-block;animation-name:dots;animation-duration:2s;animation-iteration-count:infinite;animation-timing-function:ease-in-out}.loading[data-astro-cid-sy3tdxsp] span[data-astro-cid-sy3tdxsp]:nth-child(2){animation-delay:.2s}.loading[data-astro-cid-sy3tdxsp] span[data-astro-cid-sy3tdxsp]:nth-child(3){animation-delay:.4s}.loading[data-astro-cid-sy3tdxsp] span[data-astro-cid-sy3tdxsp]:nth-child(4){animation-delay:.6s}@keyframes dots{50%{opacity:0;transform:scale(.7) translateY(10px)}}\n"}],"routeData":{"route":"/halloween-photo","isIndex":false,"type":"page","pattern":"^\\/halloween-photo\\/?$","segments":[[{"content":"halloween-photo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/halloween-photo.astro","pathname":"/halloween-photo","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Dwfjn8X5.js"}],"styles":[{"type":"external","src":"/_astro/halloween-photo.1f278PmA.css"},{"type":"inline","content":".astro-a[data-astro-cid-j7pv25f6]{position:absolute;top:-32px;left:50%;transform:translate(-50%);width:220px;height:auto;z-index:-1}.text-gradient[data-astro-cid-j7pv25f6]{background-image:var(--accent-gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-size:400%;background-position:0%}.instructions[data-astro-cid-j7pv25f6]{margin-bottom:2rem;border:1px solid rgba(var(--accent-light),25%);background:linear-gradient(rgba(var(--accent-dark),66%),rgba(var(--accent-dark),33%));padding:1.5rem;border-radius:8px}.instructions[data-astro-cid-j7pv25f6] code[data-astro-cid-j7pv25f6]{font-size:.8em;font-weight:700;background:rgba(var(--accent-light),12%);color:rgb(var(--accent-light));border-radius:4px;padding:.3em .4em}.instructions[data-astro-cid-j7pv25f6] strong[data-astro-cid-j7pv25f6]{color:rgb(var(--accent-light))}.open-sans-button[data-astro-cid-j7pv25f6]{font-family:Open Sans,sans-serif;font-optical-sizing:auto;font-weight:<weight>;font-style:normal;font-variation-settings:\"wdth\" 100}.link-card-grid[data-astro-cid-j7pv25f6]{display:grid;grid-template-columns:repeat(auto-fit,minmax(24ch,1fr));gap:2rem;padding:0}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/tycow/OneDrive/Documentos/Development/Halloweenify/src/pages/halloween-photo.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/tycow/OneDrive/Documentos/Development/Halloweenify/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/halloween-photo@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/.pnpm/astro@4.15.12_rollup@4.24.0_sass@1.79.5_typescript@5.6.3/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/halloween-photo@_@astro":"pages/halloween-photo.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","C:/Users/tycow/OneDrive/Documentos/Development/Halloweenify/node_modules/.pnpm/astro@4.15.12_rollup@4.24.0_sass@1.79.5_typescript@5.6.3/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","C:/Users/tycow/OneDrive/Documentos/Development/Halloweenify/src/content/props/clown.md?astroContentCollectionEntry=true":"chunks/clown_CpO0_gK7.mjs","C:/Users/tycow/OneDrive/Documentos/Development/Halloweenify/src/content/props/hannibal.md?astroContentCollectionEntry=true":"chunks/hannibal_BoVCfh3H.mjs","C:/Users/tycow/OneDrive/Documentos/Development/Halloweenify/src/content/props/pumpkin-head.md?astroContentCollectionEntry=true":"chunks/pumpkin-head_By9OWvYV.mjs","C:/Users/tycow/OneDrive/Documentos/Development/Halloweenify/src/content/props/rocky-horror.md?astroContentCollectionEntry=true":"chunks/rocky-horror_C2v8G9L8.mjs","C:/Users/tycow/OneDrive/Documentos/Development/Halloweenify/src/content/props/clown.md?astroPropagatedAssets":"chunks/clown_DlFMKitF.mjs","C:/Users/tycow/OneDrive/Documentos/Development/Halloweenify/src/content/props/hannibal.md?astroPropagatedAssets":"chunks/hannibal_daCxxWNu.mjs","C:/Users/tycow/OneDrive/Documentos/Development/Halloweenify/src/content/props/pumpkin-head.md?astroPropagatedAssets":"chunks/pumpkin-head_CEG15_FP.mjs","C:/Users/tycow/OneDrive/Documentos/Development/Halloweenify/src/content/props/rocky-horror.md?astroPropagatedAssets":"chunks/rocky-horror_KTD9QKYq.mjs","\u0000astro:asset-imports":"chunks/_astro_asset-imports_D9aVaOQr.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BcEe_9wP.mjs","C:/Users/tycow/OneDrive/Documentos/Development/Halloweenify/src/content/props/clown.md":"chunks/clown_OaDKRMOr.mjs","C:/Users/tycow/OneDrive/Documentos/Development/Halloweenify/src/content/props/hannibal.md":"chunks/hannibal_CsmP1N08.mjs","C:/Users/tycow/OneDrive/Documentos/Development/Halloweenify/src/content/props/pumpkin-head.md":"chunks/pumpkin-head_scwnnzs0.mjs","C:/Users/tycow/OneDrive/Documentos/Development/Halloweenify/src/content/props/rocky-horror.md":"chunks/rocky-horror_D7eYVx5J.mjs","\u0000@astrojs-manifest":"manifest_8RDrcwTP.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.Cui96XFO.js","/astro/hoisted.js?q=1":"_astro/hoisted.Dwfjn8X5.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/halloween-photo.1f278PmA.css","/apple-touch-icon.png","/favicon-48x48.png","/favicon.ico","/favicon.svg","/site.webmanifest","/web-app-manifest-192x192.png","/web-app-manifest-512x512.png","/_astro/hoisted.Dwfjn8X5.js"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"jlMREh/0GwZSUDXiFGRmnf6ClsowcgE7zr0RVsbrA2E=","experimentalEnvGetSecretEnabled":false});

export { manifest };
