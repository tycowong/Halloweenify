import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DndpRU1h.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"name":"Hannibal Mask","imgUrl":"https://static.toiimg.com/thumb/msid-67521581,imgsize-531640,width-400,resizemode-4/67521581.jpg","alt":"Hannibal Lector Lcoked in a chair","prompt":"Hannibal Lecters mask","replace":"Face"};
				const file = "C:/Users/tycow/OneDrive/Documentos/Development/Halloweenify/src/content/props/hannibal.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
