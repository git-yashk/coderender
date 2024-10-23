import JSZip from "jszip";
import { saveAs } from 'file-saver';

export function previewInNewTab({ html, css, js }) {
    const newWindow = window.open();

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    const style = document.createElement('style');
    style.textContent = css;
    doc.head.appendChild(style);

    const script = document.createElement('script');
    script.textContent = js;
    doc.body.appendChild(script);

    const modifiedHtml = doc.documentElement.outerHTML;

    newWindow.document.write(modifiedHtml);
    newWindow.document.close();
}

export function downloadProject({ html, css, js }) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'style.css';
    doc.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'script.js';
    doc.body.appendChild(script);

    const modifiedHtml = doc.documentElement.outerHTML;

    const zipFile = new JSZip();
    zipFile.file("index.html", modifiedHtml);
    zipFile.file("style.css", css);
    zipFile.file("script.js", js);
    zipFile.generateAsync({ type: "blob" }).then(function (content) {
        saveAs(content, "src.zip");
    });
}