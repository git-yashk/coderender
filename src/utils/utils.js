export function previewInNewTab({ html, css, js }) {
    const newWindow = window.open();
    newWindow.document.write(`
        <html>
            <head>
                <style>${css}</style>
            </head>
            <body>
                ${html}
                <script>${js}</script>
            </body>
        </html>
    `);
}