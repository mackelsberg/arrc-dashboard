
const points = [
  { lat: 37.8719, lon: -122.2585, institutions: [{ name: 'UC Berkeley', founding: true, funded: [] }] },
  { lat: 32.7757, lon: -117.0719, institutions: [{ name: 'San Diego State University', founding: false, funded: ['Sungjin Lee'] }] },
  { lat: 40.4444, lon: -79.9608, institutions: [{ name: 'University of Pittsburgh', founding: true, funded: [] }] },
  { lat: 38.9076, lon: -77.0723, cluster: 'Washington, D.C.', institutions: [
    { name: 'George Washington University', founding: true, funded: [] },
    { name: 'American University', founding: true, funded: [] },
    { name: 'Georgetown University', founding: false, funded: ['Mark Richardson'] }
  ]},
  { lat: 33.7756, lon: -84.3900, cluster: 'Atlanta, GA', institutions: [
    { name: 'Georgia State University', founding: true, funded: ['Jung Won (Leo) Choi'] },
    { name: 'Georgia Tech', founding: false, funded: ['Jung Won (Leo) Choi'] }
  ]},
  { lat: 33.9480, lon: -83.3773, institutions: [{ name: 'University of Georgia', founding: true, funded: ['L. Jason Anastasopoulos'] }] },
  { lat: 30.2849, lon: -97.7341, institutions: [{ name: 'UT Austin', founding: true, funded: ['Gordon Abner'] }] },
  { lat: 30.6120, lon: -96.3405, institutions: [{ name: 'Texas A&M University', founding: false, funded: ['M. Blake Emidy'] }] },
  { lat: 32.7297, lon: -97.1131, institutions: [{ name: 'UT Arlington', founding: false, funded: ['Evan Mistur'] }] },
  { lat: 33.4242, lon: -111.9281, cluster: 'Arizona State University', institutions: [
    { name: 'Arizona State University (Howell)', founding: true, funded: ['Anthony Howell — Innovation Governance Capacity'] },
    { name: 'Arizona State University (Robinson)', founding: true, funded: ['Scott E. Robinson — Local Emergency Management'] }
  ]},
  { lat: 38.9543, lon: -95.2558, institutions: [{ name: 'University of Kansas', founding: true, funded: ['Zach Mohr'] }] },
  { lat: 40.7420, lon: -74.1724, institutions: [{ name: 'Rutgers-Newark', founding: true, funded: ['Greg Porumbescu'] }] },
  { lat: 42.2780, lon: -83.7382, institutions: [{ name: 'University of Michigan', founding: true, funded: ['Don Moynihan'] }] },
  { lat: 41.5017, lon: -81.6750, institutions: [{ name: 'Cleveland State University', founding: true, funded: [] }] },
  { lat: 40.0067, lon: -83.0305, institutions: [{ name: 'Ohio State / Impact Project', founding: false, funded: ['Abby André'] }] },
  { lat: 42.6862, lon: -73.8242, institutions: [{ name: 'SUNY Albany', founding: true, funded: ['Hongseok Lee'] }] },
  { lat: 28.6024, lon: -81.2001, institutions: [{ name: 'University of Central Florida', founding: false, funded: ['Thomas Bryer'] }] },
  { lat: 35.3075, lon: -80.7331, institutions: [{ name: 'UNC Charlotte', founding: false, funded: ['Jaclyn Piatak'] }] },
  { lat: 41.8708, lon: -87.6505, institutions: [{ name: 'University of Illinois Chicago', founding: false, funded: ['Kate Albrecht'] }] },
  { lat: 30.4133, lon: -91.1800, institutions: [{ name: 'LSU', founding: false, funded: ['Anmol Soni'] }] },
  { lat: 47.6553, lon: -122.3035, institutions: [{ name: 'University of Washington', founding: false, funded: ['Benjamin M. Brunjes'] }] },
  { lat: 56.8094, lon: -132.9569, institutions: [{ name: 'Inside Passage Field Studies', founding: false, funded: ['Erin Steinkruger'] }] }
];

const PURPLE = getComputedStyle(document.documentElement).getPropertyValue('--arrc-purple').trim() || '#534AB7';
const ORANGE = getComputedStyle(document.documentElement).getPropertyValue('--arrc-orange').trim() || '#D85A30';
const LAND   = getComputedStyle(document.documentElement).getPropertyValue('--arrc-paper-2').trim() || '#EDE9DC';
const STROKE = getComputedStyle(document.documentElement).getPropertyValue('--arrc-ink-300').trim() || '#B4B2A9';
const PAPER  = getComputedStyle(document.documentElement).getPropertyValue('--arrc-paper').trim() || '#F5F2E9';
const NETWORK_COLOR = '#ccc';

const width = 860, height = 500;
const mapContainer = d3.select('#map');
const svg = mapContainer.append('svg')
  .attr('viewBox', `0 0 ${width} ${height}`)
  .attr('width', '100%').style('display', 'block');

const projection = d3.geoAlbersUsa().scale(1040).translate([width/2, height/2]);
const path = d3.geoPath(projection);
const tooltip = document.getElementById('tooltip');

let showNetwork = false;
let zoomLevel = 1;

function getDotType(inst) {
  const f = inst.founding, p = inst.funded.length > 0;
  if (f && p) return 'both';
  if (f) return 'founding';
  return 'funded';
}
function getClusterType(institutions) {
  const f = institutions.some(i => i.founding);
  const p = institutions.some(i => i.funded.length > 0);
  if (f && p) return 'both';
  if (f) return 'founding';
  return 'funded';
}

d3.json(window.__resources.usAtlas).then(us => {
  // Toggle handler (must be inside promise so networkLayer exists)
  const legend = document.querySelector('.map-legend');
  document.querySelectorAll('.map-toggle button').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.map-toggle button').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      showNetwork = this.dataset.view === 'network';
      legend.classList.toggle('showing-network', showNetwork);
      updateNetworkLayer();
    });
  });
  const statesGroup = svg.append('g').attr('class', 'states-layer');
  const networkLayer = svg.append('g').attr('class', 'network-layer');
  const mainLayer = svg.append('g').attr('class', 'main-layer');

  statesGroup.selectAll('path')
    .data(topojson.feature(us, us.objects.states).features)
    .join('path').attr('d', path)
    .attr('fill', LAND).attr('stroke', STROKE).attr('stroke-width', 0.5);

  function updateNetworkLayer() {
    if (showNetwork && typeof networkInstitutionsToPlot !== 'undefined') {
      const networkData = networkInstitutionsToPlot
        .filter(d => projection([d.lon, d.lat]) !== null);

      const networkDots = networkLayer.selectAll('circle').data(networkData, d => d.name);

      networkDots.exit().remove();

      networkDots.enter().append('circle')
        .attr('cx', d => projection([d.lon, d.lat])[0])
        .attr('cy', d => projection([d.lon, d.lat])[1])
        .attr('r', 4)
        .attr('fill', '#999')
        .attr('opacity', 0.9)
        .attr('stroke', PAPER)
        .attr('stroke-width', 0.5)
        .style('cursor', 'pointer')
        .on('mouseenter', function(event, d) {
          tooltip.innerHTML = '<strong>' + d.name + '</strong>';
          tooltip.style.opacity = '1';
        })
        .on('mousemove', function(event) {
          const off = 14, tw = tooltip.offsetWidth, th = tooltip.offsetHeight;
          let x = event.clientX + off, y = event.clientY + off;
          if (x + tw > window.innerWidth - 10) x = event.clientX - tw - off;
          if (y + th > window.innerHeight - 10) y = event.clientY - th - off;
          tooltip.style.left = x + 'px';
          tooltip.style.top = y + 'px';
        })
        .on('mouseleave', function() { tooltip.style.opacity = '0'; });
    } else {
      networkLayer.selectAll('circle').remove();
    }
  }

  const groups = mainLayer.selectAll('g')
    .data(points.filter(d => projection([d.lon, d.lat]) !== null))
    .join('g')
    .attr('transform', d => {
      const p = projection([d.lon, d.lat]); return p ? `translate(${p[0]},${p[1]})` : null;
    })
    .style('cursor', 'pointer');

  groups.each(function(d){
    const g = d3.select(this);
    const isCluster = d.institutions.length > 1;
    if (isCluster) {
      const type = getClusterType(d.institutions);
      const r = 12;
      if (type === 'both') {
        g.append('path').attr('d', `M-${r},0 A${r},${r} 0 0,1 ${r},0 Z`).attr('fill', PURPLE);
        g.append('path').attr('d', `M-${r},0 A${r},${r} 0 0,0 ${r},0 Z`).attr('fill', ORANGE);
        g.append('circle').attr('r', r).attr('fill', 'none').attr('stroke', PAPER).attr('stroke-width', 1.5);
      } else {
        g.append('circle').attr('r', r).attr('fill', type === 'founding' ? PURPLE : ORANGE).attr('stroke', PAPER).attr('stroke-width', 1.5);
      }
      const textEl = g.append('text').attr('text-anchor','middle').attr('dominant-baseline','central')
        .attr('fill','#fff').attr('font-size','11px').attr('font-weight','600')
        .attr('pointer-events','none').text(d.institutions.length);
      textEl.attr('class', 'cluster-label');
    } else {
      const inst = d.institutions[0];
      const type = getDotType(inst);
      const r = 6.5;
      if (type === 'both') {
        g.append('path').attr('d', `M-${r},0 A${r},${r} 0 0,1 ${r},0 Z`).attr('fill', PURPLE);
        g.append('path').attr('d', `M-${r},0 A${r},${r} 0 0,0 ${r},0 Z`).attr('fill', ORANGE);
        g.append('circle').attr('r', r).attr('fill', 'none').attr('stroke', PAPER).attr('stroke-width', 1);
      } else {
        g.append('circle').attr('r', r).attr('fill', type === 'founding' ? PURPLE : ORANGE).attr('stroke', PAPER).attr('stroke-width', 1);
      }
    }
  });

  groups.on('mouseenter', function(event, d){
    let html = '';
    if (d.cluster) {
      html = '<strong>' + d.cluster + '</strong><br>';
      html += d.institutions.map(i => {
        const roles = [];
        if (i.founding) roles.push('founding member');
        if (i.funded.length > 0) roles.push('funded: ' + i.funded.join(', '));
        return '· ' + i.name.replace(/ \(.+?\)/, '') + ' <span style="color:#6B6A63">— ' + roles.join('; ') + '</span>';
      }).join('<br>');
    } else {
      const inst = d.institutions[0];
      const roles = [];
      if (inst.founding) roles.push('Founding member');
      if (inst.funded.length > 0) roles.push('Funded: ' + inst.funded.join(', '));
      html = '<strong>' + inst.name + '</strong><br>' + roles.join('<br>');
    }
    tooltip.innerHTML = html;
    tooltip.style.opacity = '1';
  })
  .on('mousemove', function(event){
    const off = 14, tw = tooltip.offsetWidth, th = tooltip.offsetHeight;
    let x = event.clientX + off, y = event.clientY + off;
    if (x + tw > window.innerWidth - 10) x = event.clientX - tw - off;
    if (y + th > window.innerHeight - 10) y = event.clientY - th - off;
    tooltip.style.left = x + 'px';
    tooltip.style.top = y + 'px';
  })
  .on('mouseleave', function(){ tooltip.style.opacity = '0'; });

  // Zoom handler: zoom all layers
  const zoom = d3.zoom()
    .scaleExtent([1, 4])
    .on('zoom', function(event) {
      zoomLevel = event.transform.k;
      statesGroup.attr('transform', event.transform);
      mainLayer.attr('transform', event.transform);
      networkLayer.attr('transform', event.transform);

      // Scale cluster labels proportionally with zoom so they stay proportional
      mainLayer.selectAll('.cluster-label')
        .attr('transform', `scale(${1 + (zoomLevel - 1) * 0.1})`);
    });

  svg.call(zoom);

  // Zoom buttons
  document.querySelector('.zoom-in').addEventListener('click', () => {
    svg.transition().duration(300).call(zoom.scaleBy, 1.5);
  });

  document.querySelector('.zoom-out').addEventListener('click', () => {
    svg.transition().duration(300).call(zoom.scaleBy, 1/1.5);
  });

  document.querySelector('.zoom-reset').addEventListener('click', () => {
    svg.transition().duration(300).call(zoom.transform, d3.zoomIdentity);
    zoomLevel = 1;
  });

  // Initialize network layer empty
  updateNetworkLayer();
});
