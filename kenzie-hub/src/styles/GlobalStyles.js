import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

/* http://meyerweb.com/eric/tools/css/reset/ 
  v2.0 | 20110126
  License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

:root {
  --Color-primary: #ff577f;
  --Color-secondary: #ff427f;
  --Color-primary-Negative: #59323f;
  --grey-1: #868e96;
  --grey-2: #343b41;
  --grey-3: #212529;
  --grey-4: #121214;
  --grey-0: #f8f9fa;

  --negative: #e83f5b;
  --sucess: #3fe864;

  --font-primary: "Inter", sans-serif;
}

button {
  cursor: pointer;
}

body {
  background-color: var(--grey-4);
}`;
