import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DndpRU1h.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"name":"Pumpkin","imgUrl":"https://res.cloudinary.com/dog0bhmts/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max/v1728622888/j9rt3zrnw55a1_nanepu.jpg","alt":"image of Dwight in a pumpkin head","prompt":"Dights pumpkin head","replace":"Head"};
				const file = "C:/Users/tycow/OneDrive/Documentos/Development/Halloweenify/src/content/props/pumpkin-head.md";
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
