/* FIT3179 DV2 - Vega-Lite charts. This code was AI-assisted and should be reviewed before submission. */
const ROOT = new URL('../', document.currentScript.src);
const specs = [1,2,3,4,5,6,7,8,9,10,11,12];
const formatId = n => `vis${String(n).padStart(2,'0')}`;
function showError(target, err) {
  const node = document.getElementById(target);
  const e = document.createElement('div'); e.className='error';
  e.innerHTML = `This chart could not be loaded.<small>Start the supplied web server or view on GitHub Pages. Ensure that you have an internet connection for the Vega libraries and state boundary map.</small>`;
  node.replaceChildren(e);
  console.error('Vega chart issue for', target, err);
}
async function embedOne(n) {
  const element=formatId(n);
  try {
    if (typeof vegaEmbed !== 'function') throw new Error('Vega-Embed CDN unavailable');
    // resolve all relative URLs with the file path, not the browser page location
    const res=await fetch(new URL(`charts/${String(n).padStart(2,'0')}.json`,ROOT));
    if(!res.ok) throw new Error(`Could not load chart JSON ${n}: ${res.status}`);
    const spec=await res.json();
    // VegaLoader resolves local data URLs relative to the page path when source is served via GitHub Pages.
    await vegaEmbed(`#${element}`, spec, {
      actions:false,
      renderer:'svg',
      tooltip:{theme:'dark'},
      defaultStyle:false,
      config:{},
      downloadFileName:`supermarket-chart-${String(n).padStart(2,'0')}`
    });
  } catch(error) {showError(element,error)}
}
window.addEventListener('load', () => { specs.forEach(embedOne); });
