import React, { useState } from 'react';
import Explorer from './Explorer';

function App() {
  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [js, setjs] = useState('')

  const srcDoc=`
  <html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>
  </html>
  `
  return (
    <div className="App">
      <div class="code-editor">
        <Explorer
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml} />
        <Explorer
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss} />
        <Explorer
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setjs} />
      </div>
      <div class="live-view">
        <iframe srcDoc={srcDoc} title="output" sandbox="allow-scripts" width="100%" height="100%" />
      </div>
    </div>
  );
}

export default App;
