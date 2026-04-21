/**
 * Network institutions: all unique institutions from the ARRC contact list
 * that are not already displayed on the main map.
 *
 * These render as small gray dots when the "Full network" toggle is active.
 * Coordinates sourced from IPEDS institutional data, city headquarters, or research.
 *
 * Non-US institutions are excluded.
 */

const networkInstitutions = [
  // Universities (geocoded via IPEDS)
  { name: 'Albany State University', lat: 32.0737, lon: -82.3277 },
  { name: 'Binghamton University (SUNY)', lat: 42.2055, lon: -75.9232 },
  { name: 'Carnegie Mellon University', lat: 40.4431, lon: -79.9454 },
  { name: 'Clemson University', lat: 34.6857, lon: -82.8387 },
  { name: 'Duke University', lat: 36.0014, lon: -78.9382 },
  { name: 'Florida International University', lat: 25.7617, lon: -80.1938 },
  { name: 'George Mason University', lat: 38.8330, lon: -77.3064 },
  { name: 'Harvard University', lat: 42.3775, lon: -71.1167 },
  { name: 'Indiana University', lat: 39.1682, lon: -86.5244 },
  { name: 'James Madison University', lat: 38.4747, lon: -78.8631 },
  { name: 'Johns Hopkins University', lat: 39.2904, lon: -76.6204 },
  { name: 'Kean University', lat: 40.7065, lon: -74.2428 },
  { name: 'Marquette University', lat: 43.1291, lon: -87.9256 },
  { name: 'Miami University', lat: 39.5084, lon: -84.7328 },
  { name: 'New York University', lat: 40.7282, lon: -73.7949 },
  { name: 'North Carolina State University', lat: 35.7796, lon: -78.6382 },
  { name: 'Northeastern University', lat: 42.3363, lon: -71.0882 },
  { name: 'Northern Illinois University', lat: 41.9079, lon: -88.7739 },
  { name: 'Old Dominion University', lat: 36.8841, lon: -76.3048 },
  { name: 'Oregon State University', lat: 44.5646, lon: -123.2795 },
  { name: 'Pace University Law School', lat: 40.7127, lon: -74.0060 },
  { name: 'Pennsylvania State University', lat: 40.8126, lon: -77.8707 },
  { name: 'Rutgers University', lat: 40.5232, lon: -74.4735 },
  { name: 'Rutgers University - Newark', lat: 40.7395, lon: -74.1743 },
  { name: 'Rutgers University Newark', lat: 40.7395, lon: -74.1743 },
  { name: 'SPAA, Rutgers University', lat: 40.5232, lon: -74.4735 },
  { name: 'SUNY Brockport', lat: 43.2100, lon: -77.9345 },
  { name: 'Syracuse University', lat: 43.0397, lon: -76.1337 },
  { name: 'The Evergreen State College', lat: 47.3736, lon: -122.7036 },
  { name: 'University at Albany', lat: 42.6878, lon: -73.8235 },
  { name: 'University at Albany, SUNY', lat: 42.6878, lon: -73.8235 },
  { name: 'University of Arizona', lat: 32.2314, lon: -110.9486 },
  { name: 'University of California, Riverside', lat: 33.9731, lon: -117.3279 },
  { name: 'University of Colorado, Colorado Springs', lat: 38.8957, lon: -104.8260 },
  { name: 'University of Colorado, Denver', lat: 39.7444, lon: -104.9879 },
  { name: 'University of Connecticut', lat: 41.2652, lon: -72.2326 },
  { name: 'University of Idaho', lat: 46.7296, lon: -117.1791 },
  { name: 'University of Maryland Baltimore County', lat: 39.2545, lon: -76.7145 },
  { name: 'University of Massachusetts Amherst', lat: 42.3934, lon: -72.5301 },
  { name: 'University of Nebraska, Omaha', lat: 41.2522, lon: -95.9385 },
  { name: 'University of New Mexico', lat: 35.0844, lon: -106.6504 },
  { name: 'University of North Carolina at Charlotte', lat: 35.3075, lon: -80.7331 },
  { name: 'University of San Francisco', lat: 37.7892, lon: -122.4580 },
  { name: 'University of Southern California', lat: 34.0224, lon: -118.2851 },
  { name: 'University of Tennessee, Knoxville', lat: 35.9550, lon: -83.9283 },
  { name: 'University of Texas at Austin', lat: 30.2849, lon: -97.7341 },
  { name: 'University of Texas at Dallas', lat: 32.9879, lon: -96.7487 },
  { name: 'University of Texas at El Paso', lat: 31.7683, lon: -106.5032 },
  { name: 'University of Utah', lat: 40.7608, lon: -111.8910 },
  { name: 'University of Vermont', lat: 44.4759, lon: -73.2121 },
  { name: 'University of Virginia', lat: 38.0336, lon: -78.5080 },
  { name: 'University of  Virginia', lat: 38.0336, lon: -78.5080 },
  { name: 'University of Wisconsin', lat: 43.0731, lon: -89.4012 },
  { name: 'Vanderbilt University', lat: 36.1445, lon: -86.8019 },
  { name: 'Virginia Commonwealth University', lat: 37.5429, lon: -77.4309 },
  { name: 'Virginia Tech', lat: 37.2296, lon: -80.4139 },
  { name: 'West Virginia University', lat: 39.6553, lon: -79.9711 },
  { name: 'Baruch College (CUNY)', lat: 40.7349, lon: -73.9868 },
  { name: 'Duke University Sanford School of Public Policy', lat: 36.0014, lon: -78.9382 },

  // Government & policy organizations (city/HQ-based)
  { name: 'GAO', lat: 38.8951, lon: -77.0369 },  // Washington, D.C.
  { name: 'Democracy Forward', lat: 38.8951, lon: -77.0369 },  // Washington, D.C.
  { name: 'Partnership for Public Service', lat: 38.8951, lon: -77.0369 },  // Washington, D.C.
  { name: 'Government Accountability Project', lat: 38.8951, lon: -77.0369 },  // Washington, D.C.
  { name: 'NAPA', lat: 38.8951, lon: -77.0369 },  // Washington, D.C.
  { name: 'Federation of American Scientists', lat: 38.8951, lon: -77.0369 },  // Washington, D.C.
  { name: 'U.S. Department of State', lat: 38.8951, lon: -77.0369 },  // Washington, D.C.
  { name: 'U.S. State Department', lat: 38.8951, lon: -77.0369 },  // Washington, D.C.
  { name: 'Niskanen Center', lat: 38.8951, lon: -77.0369 },  // Washington, D.C.
  { name: 'Data Foundation', lat: 38.8951, lon: -77.0369 },  // Washington, D.C.
  { name: 'Organization of American Historians', lat: 38.8951, lon: -77.0369 },  // Washington, D.C.
  { name: 'Montgomery County Council', lat: 39.1355, lon: -77.1448 },  // Montgomery County, MD
  { name: 'NAPA, University of Baltimore', lat: 39.2904, lon: -76.6204 },  // Baltimore, MD
  { name: 'Barrett and Greene', lat: 40.7128, lon: -74.0060 },  // New York, NY (law firm)
  { name: 'BeyondParity LLC', lat: 38.8951, lon: -77.0369 },  // Washington, D.C.
  { name: 'FedsForward', lat: 38.8951, lon: -77.0369 },  // Washington, D.C.
  { name: 'For 250 More', lat: 38.8951, lon: -77.0369 },  // Washington, D.C.
  { name: 'For 250 More/ Society of Policy Sciencists', lat: 38.8951, lon: -77.0369 },  // Washington, D.C.
  { name: 'Office of Personnel Managemwnt', lat: 38.8951, lon: -77.0369 },  // Washington, D.C. (OPM)
  { name: 'University of Kansas/ Kansas City Indian Center', lat: 39.0997, lon: -94.5786 },  // Kansas City, KS
  { name: 'We the Doers', lat: 38.8951, lon: -77.0369 },  // Washington, D.C.
  { name: 'Nonviolent Initiative for Democracy', lat: 40.7128, lon: -74.0060 },  // New York, NY
  { name: 'UNITE-LA', lat: 34.0522, lon: -118.2437 },  // Los Angeles, CA
  { name: 'The Volcker Alliance', lat: 40.7128, lon: -74.0060 },  // New York, NY
];

// Filter out null coordinates (excluded institutions)
const networkInstitutionsToPlot = networkInstitutions.filter(d => d.lat !== null);

console.log(`Loaded ${networkInstitutionsToPlot.length} network institutions for mapping`);
