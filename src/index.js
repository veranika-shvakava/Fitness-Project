import { getContent } from "./actions";

document.body.innerHTML = `
    <main>
       <div class="header" id="header"></div>
       <div id="content">
       </div> 
    </main>
`;

window.addEventListener('load', getContent);

window.addEventListener('hashchange', getContent);