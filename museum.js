const PEOPLE=[{"id": "rachel", "name": "Rachel Virginia Zahner", "dates": "1983–Living", "wing": "Living Family", "relation": "Center generation", "parents": ["gary-p-zahner", "brenda"], "spouse": "bradley", "children": ["brody", "vance"]}, {"id": "bradley", "name": "Bradley Todd Blackwell", "dates": "1975–Living", "wing": "Living Family", "relation": "Spouse", "spouse": "rachel", "children": ["brody", "vance"], "parents": ["john-smith-blackwell", "carol-barrett"]}, {"id": "brody", "name": "Brody Paul Blackwell", "dates": "2002–Living", "wing": "Living Family", "relation": "Child", "parents": ["rachel", "bradley"]}, {"id": "vance", "name": "Vance Cully Blackwell", "dates": "2005–Living", "wing": "Living Family", "relation": "Child", "parents": ["rachel", "bradley"]}, {"id": "gary-p-zahner", "name": "Gary Paul Zahner", "dates": "1953–Living", "wing": "Zahner", "relation": "Father of Rachel", "parents": ["robert-zahner", "fern-walker"], "spouse": "brenda"}, {"id": "robert-zahner", "name": "Robert Donald Zahner", "dates": "1930–1989", "wing": "Zahner", "relation": "Grandfather", "parents": ["theodore-zahner", "hattie-pieper"], "spouse": "fern-walker"}, {"id": "fern-walker", "name": "Fern Elizabeth Walker", "dates": "1930–2011", "wing": "Zahner", "relation": "Grandmother", "parents": ["rue-walker", "verda-butler"], "spouse": "robert-zahner"}, {"id": "theodore-zahner", "name": "Theodore Zahner", "dates": "1889–1955", "wing": "Zahner", "relation": "Great-grandfather", "spouse": "hattie-pieper"}, {"id": "hattie-pieper", "name": "Hattie Pieper", "dates": "1889–1969", "wing": "Zahner", "relation": "Great-grandmother", "spouse": "theodore-zahner"}, {"id": "rue-walker", "name": "Rue Walker", "dates": "1904–1988", "wing": "Zahner", "relation": "Great-grandfather", "spouse": "verda-butler"}, {"id": "verda-butler", "name": "Verda Elizabeth Butler", "dates": "1907–1985", "wing": "Zahner", "relation": "Great-grandmother", "spouse": "rue-walker"}, {"id": "brenda", "name": "Brenda Joyce Downing", "dates": "1955–Living", "wing": "Downing", "relation": "Mother of Rachel", "parents": ["claude-downing", "hazel-huey"], "spouse": "gary-p-zahner"}, {"id": "claude-downing", "name": "Claude Thomas Downing", "dates": "1931–1999", "wing": "Downing", "relation": "Grandfather", "parents": ["wa-downing", "lena-grady"], "spouse": "hazel-huey"}, {"id": "hazel-huey", "name": "Hazel Virginia Huey", "dates": "1930–2015", "wing": "Downing", "relation": "Grandmother", "parents": ["aubry-huey", "lola-griffin"], "spouse": "claude-downing"}, {"id": "wa-downing", "name": "W. A. Downing", "dates": "Died 1975", "wing": "Downing", "relation": "Great-grandfather", "spouse": "lena-grady"}, {"id": "lena-grady", "name": "Lena May Grady", "dates": "1904–Deceased", "wing": "Downing", "relation": "Great-grandmother", "spouse": "wa-downing"}, {"id": "aubry-huey", "name": "Aubry Albert Huey", "dates": "1902–1986", "wing": "Downing", "relation": "Great-grandfather", "spouse": "lola-griffin"}, {"id": "lola-griffin", "name": "Lola Mai Griffin", "dates": "1907–1935", "wing": "Downing", "relation": "Great-grandmother", "spouse": "aubry-huey"}, {"id": "barbara-downing", "name": "Barbara Downing", "dates": "Living", "wing": "Downing", "relation": "Child of Claude and Hazel"}, {"id": "janice-downing", "name": "Janice Downing", "dates": "Living", "wing": "Downing", "relation": "Child of Claude and Hazel"}, {"id": "patricia-downing", "name": "Patricia Downing", "dates": "Deceased", "wing": "Downing", "relation": "Child of Claude and Hazel"}, {"id": "randell-downing", "name": "Randell Downing", "dates": "Living", "wing": "Downing", "relation": "Child of Claude and Hazel"}, {"id": "tom-downing", "name": "Tom Downing", "dates": "Living", "wing": "Downing", "relation": "Child of Claude and Hazel"}, {"id": "melba-downing", "name": "Melba Jean Downing", "dates": "1952–2019", "wing": "Downing", "relation": "Child of Claude and Hazel"}, {"id": "buddy-downing", "name": "Buddy Joe Downing", "dates": "1953–1983", "wing": "Downing", "relation": "Child of Claude and Hazel"}, {"id": "kathryn-downing", "name": "Kathryn Sue Downing", "dates": "1955–1995", "wing": "Downing", "relation": "Child of Claude and Hazel"}, {"id": "gary-downing", "name": "Gary Downing", "dates": "1962–Living", "wing": "Downing", "relation": "Child of Claude and Hazel"}, {"id": "john-s-blackwell", "name": "John S. Blackwell Sr.", "dates": "1914–1999", "wing": "Blackwell", "relation": "Blackwell ancestor", "parents": ["thomas-blackwell", "eula-dabney"], "spouse": "bertha-blackwell"}, {"id": "bertha-blackwell", "name": "Bertha Delean Blackwell", "dates": "1913–1975", "wing": "Blackwell", "relation": "Blackwell ancestor", "parents": ["jerrett-norris", "rosa-auterson"], "spouse": "john-s-blackwell"}, {"id": "thomas-blackwell", "name": "Thomas Emory Blackwell", "dates": "1870–1962", "wing": "Blackwell", "relation": "Earlier Blackwell ancestor", "spouse": "eula-dabney"}, {"id": "eula-dabney", "name": "Eula Francis Dabney", "dates": "1876–1953", "wing": "Blackwell", "relation": "Earlier Blackwell ancestor", "spouse": "thomas-blackwell"}, {"id": "jerrett-norris", "name": "Jerrett Luther Norris", "dates": "1887–1956", "wing": "Blackwell", "relation": "Blackwell-connected ancestor", "spouse": "rosa-auterson"}, {"id": "rosa-auterson", "name": "Rosa Mae Auterson", "dates": "1890–1968", "wing": "Blackwell", "relation": "Blackwell-connected ancestor", "spouse": "jerrett-norris"}, {"id": "carol-barrett", "name": "Carol Dean Barrett", "dates": "1947–Living", "wing": "Barrett", "relation": "Ancestor of Bradley", "parents": ["billy-barrett", "maude-welch"], "spouse": "john-smith-blackwell"}, {"id": "john-smith-blackwell", "name": "John Smith Blackwell Jr.", "dates": "1946–Deceased", "wing": "Blackwell", "relation": "Ancestor of Bradley", "parents": ["john-s-blackwell", "bertha-blackwell"], "spouse": "carol-barrett"}, {"id": "billy-barrett", "name": "Billy Barrett", "dates": "1917–2009", "wing": "Barrett", "relation": "Barrett ancestor", "parents": ["william-barrett", "cora-mcneil"], "spouse": "maude-welch"}, {"id": "maude-welch", "name": "Maude Pauline Welch", "dates": "1917–2009", "wing": "Barrett", "relation": "Barrett ancestor", "parents": ["john-welch", "maud-cooley"], "spouse": "billy-barrett"}, {"id": "william-barrett", "name": "William Iscca Barrett", "dates": "1879–1930", "wing": "Barrett", "relation": "Earlier Barrett ancestor", "spouse": "cora-mcneil"}, {"id": "cora-mcneil", "name": "Cora Jasper McNeil", "dates": "1881–1976", "wing": "Barrett", "relation": "Earlier Barrett ancestor", "spouse": "william-barrett"}, {"id": "john-welch", "name": "John William Welch", "dates": "1895–1984", "wing": "Barrett", "relation": "Earlier Welch ancestor", "spouse": "maud-cooley"}, {"id": "maud-cooley", "name": "Maud Cooley", "dates": "1895–1981", "wing": "Barrett", "relation": "Earlier Welch ancestor", "spouse": "john-welch"}];

const PERSON_FACTS={
  rachel:{birth:"March 26, 1983",place:"Oklahoma City, Oklahoma",bio:"Rachel Virginia Zahner was born on March 26, 1983, in Oklahoma City, Oklahoma, to Gary Paul Zahner and Brenda Joyce Downing. She later built a family with Bradley Todd Blackwell, and together they have two sons, Brody and Vance."},
  bradley:{birth:"May 26, 1975",place:"Missouri",bio:"Bradley Todd Blackwell was born on May 26, 1975, to John Smith Blackwell Jr. and Carol Dean Barrett. He later built a family with Rachel Virginia Zahner. They have two sons, Brody and Vance, and Bradley has one brother and one sister."},
  brody:{birth:"July 23, 2002",place:"Springfield, Greene County, Missouri",bio:"Brody Paul Blackwell was born on July 23, 2002, in Springfield, Missouri, to Rachel Virginia Zahner and Bradley Todd Blackwell. He is the older of their two sons."},
  vance:{birth:"April 27, 2005",place:"Branson, Taney County, Missouri",bio:"Vance Cully Blackwell was born on April 27, 2005, in Branson, Missouri, to Rachel Virginia Zahner and Bradley Todd Blackwell. He joined his older brother, Brody, making the household a family of four."},
  brenda:{birth:"December 17, 1955",place:"Illinois",bio:"Brenda Joyce Downing was born on December 17, 1955, in Illinois, to Claude Thomas Downing and Hazel Virginia Huey. She later had one daughter, Rachel Virginia Zahner, with Gary Paul Zahner. Brenda grew up among four brothers and five sisters."}
};
PEOPLE.forEach(p=>Object.assign(p,PERSON_FACTS[p.id]||{}));
const BYID=Object.fromEntries(PEOPLE.map(p=>[p.id,p]));
const nav=document.getElementById("nav"),rooms=[...document.querySelectorAll(".room")],navBtns=[...document.querySelectorAll(".nav")];
let previous="entrance";
function showRoom(id){const active=rooms.find(r=>r.classList.contains("active"));if(active&&id!=="person")previous=active.id;rooms.forEach(r=>r.classList.toggle("active",r.id===id));navBtns.forEach(b=>b.classList.toggle("active",b.dataset.room===id));nav.classList.remove("open");window.scrollTo({top:0,behavior:"smooth"})}
navBtns.forEach(b=>b.onclick=()=>showRoom(b.dataset.room));document.querySelectorAll(".go").forEach(b=>b.onclick=()=>showRoom(b.dataset.go));document.getElementById("menuBtn").onclick=()=>nav.classList.toggle("open");document.getElementById("homeBtn").onclick=()=>showRoom("entrance");

function bindRoomTargets(){document.querySelectorAll("[data-room-target]").forEach(b=>b.onclick=()=>showRoom(b.dataset.roomTarget));} bindRoomTargets();
document.getElementById("backBtn").onclick=()=>showRoom(previous);
function personCard(p){return `<button class="person-card open-person" data-id="${p.id}"><span class="badge">${p.wing}</span><h3>${p.name}</h3><p class="dates">${p.dates}</p><small>${p.relation||""}</small></button>`}
function bindPeople(){document.querySelectorAll(".open-person").forEach(b=>b.onclick=()=>openPerson(b.dataset.id))}
document.getElementById("livingGrid").innerHTML=PEOPLE.filter(p=>p.wing==="Living Family").map(personCard).join("");bindPeople();
const wings=["Zahner","Downing","Blackwell","Barrett"];document.getElementById("wingCards").innerHTML=wings.map(w=>`<button class="card open-wing" data-wing="${w}"><h3>${w} Wing</h3><p>${PEOPLE.filter(p=>p.wing===w).length} lives remembered</p></button>`).join("");
function openWing(w){document.getElementById("wingDetail").innerHTML=`<h3 class="section-title">${w} Family Room</h3><div class="people">${PEOPLE.filter(p=>p.wing===w).map(personCard).join("")}</div>`;showRoom("wings");bindPeople()}
document.querySelectorAll(".open-wing").forEach(b=>b.onclick=()=>openWing(b.dataset.wing));
function nm(id){return BYID[id]?.name||id}
function openPerson(id){
  if(id==="thomas-blackwell"){showRoom("thomas-room");return;}
  const p=BYID[id]; if(!p)return;
  const rel=[];
  if(p.spouse)rel.push(`<div class="relation-card"><strong>Spouse</strong><p>${nm(p.spouse)}</p></div>`);
  if(p.parents)rel.push(`<div class="relation-card"><strong>Parents</strong><p>${p.parents.map(nm).join(" and ")}</p></div>`);
  if(p.children)rel.push(`<div class="relation-card"><strong>Children</strong><p>${p.children.map(nm).join(", ")}</p></div>`);
  const intro=p.bio||`${p.name} is part of the ${p.wing} family story. This exhibit will grow as photographs, records, memories, and places are connected.`;
  const birthPanel=p.birth?`<div class="life-event"><div class="event-icon">✦</div><div><p class="eyebrow">Birth</p><h3>${p.birth}</h3><p>${p.place||"Place awaiting confirmation"}</p></div></div>`:"";
  document.getElementById("personView").innerHTML=`<div class="person-head"><div class="portrait">Portrait<br>awaiting the family collection</div><div><p class="eyebrow">${p.wing} Family Tree</p><h2>${p.name}</h2><p class="lead">${p.dates}</p><span class="badge">${p.relation||"Family member"}</span></div></div><div class="museum-biography"><h3>Life Story</h3><p>${intro}</p></div>${birthPanel}<h3 class="section-title">Family Connections</h3><div class="relations">${rel.length?rel.join(""):"<div class='relation-card'>This branch of the family story is still being uncovered.</div>"}</div><h3 class="section-title">Exhibit Cases</h3><div class="cards"><div class="card"><h3>Photographs</h3><p>Images will appear here and in the family gallery.</p></div><div class="card"><h3>Documents</h3><p>Records will appear here and in the archive.</p></div><div class="card"><h3>Places & Maps</h3><p>Life events will become mapped museum panels.</p></div><div class="card"><h3>Stories</h3><p>Firsthand memories and family traditions will enrich the biography.</p></div></div>`;
  showRoom("person");
}
const year=p=>{const m=p.dates.match(/\d{4}/);return m?+m[0]:9999};document.getElementById("timelineGrid").innerHTML=[...PEOPLE].sort((a,b)=>year(a)-year(b)).map(personCard).join("");bindPeople();
const overlay=document.getElementById("searchOverlay"),input=document.getElementById("searchInput"),results=document.getElementById("results");document.getElementById("searchBtn").onclick=()=>{overlay.classList.add("open");input.focus();results.innerHTML="<p>Type a name, surname, date, or wing.</p>"};document.getElementById("closeSearch").onclick=()=>overlay.classList.remove("open");overlay.onclick=e=>{if(e.target===overlay)overlay.classList.remove("open")};input.oninput=e=>{const q=e.target.value.trim().toLowerCase();if(!q){results.innerHTML="<p>Type a name, surname, date, or wing.</p>";return}const matches=PEOPLE.filter(p=>JSON.stringify(p).toLowerCase().includes(q));results.innerHTML=matches.length?matches.map(p=>`<button class="result search-person" data-id="${p.id}"><strong>${p.name}</strong><span>${p.dates}</span></button>`).join(""):"<p>No matching exhibit found.</p>";document.querySelectorAll(".search-person").forEach(b=>b.onclick=()=>{overlay.classList.remove("open");openPerson(b.dataset.id)})};

const FAMILY_MAPS = {
  Blackwell: [
    ["Rachel Virginia Zahner","1983–Living","Center generation"],
    ["Bradley Todd Blackwell","1975–Living","Spouse"],
    ["John Smith Blackwell Jr.","1946–Deceased","Father of Bradley"],
    ["John S. Blackwell Sr.","1914–1999","Grandfather"],
    ["Thomas Emory Blackwell","1870–1962","Earlier Blackwell ancestor"]
  ],
  Zahner: [
    ["Rachel Virginia Zahner","1983–Living","Center generation"],
    ["Gary Paul Zahner","1953–Living","Father"],
    ["Robert Donald Zahner","1930–1989","Grandfather"],
    ["Theodore Zahner","1889–1955","Great-grandfather"]
  ],
  Downing: [
    ["Rachel Virginia Zahner","1983–Living","Center generation"],
    ["Brenda Joyce Downing","1955–Living","Mother"],
    ["Claude Thomas Downing","1931–1999","Grandfather"],
    ["W. A. Downing","Died 1975","Earlier Downing ancestor"]
  ],
  Barrett: [
    ["Bradley Todd Blackwell","1975–Living","Center connection"],
    ["Carol Dean Barrett","1947–Living","Mother of Bradley"],
    ["Billy Barrett","1917–2009","Grandfather"],
    ["William Iscca Barrett","1879–1930","Earlier Barrett ancestor"]
  ]
};

function showFamilyMap(family){
  const rows = FAMILY_MAPS[family] || [];
  const chain = rows.map((r,i) => `
    ${i ? '<span class="family-connector" aria-hidden="true"></span>' : ''}
    <button class="family-node ${i===0?'current':''}" data-map-person="${r[0]}">
      <h4>${r[0]}</h4>
      <p>${r[1]}</p>
      <p>${r[2]}</p>
    </button>
  `).join("");

  document.getElementById("familyMapDisplay").innerHTML = `
    <div class="family-map-heading">
      <div>
        <p class="eyebrow">${family} Family Map</p>
        <h3>${family} family — living and deceased together</h3>
      </div>
      
    </div>
    <div class="family-map-chain">${chain}</div>
    <div class="map-note">This tree shows the people currently connected to this family line. Select any person to enter their museum exhibit.</div>
  `;


  document.querySelectorAll("[data-map-person]").forEach(btn => {
    btn.onclick = () => {
      const person = PEOPLE.find(p => p.name === btn.dataset.mapPerson);
      if(person) openPerson(person.id);
    };
  });

  document.getElementById("familyMapDisplay").scrollIntoView({behavior:"smooth",block:"start"});
}

document.querySelectorAll("[data-family-map]").forEach(btn => {
  btn.onclick = () => showFamilyMap(btn.dataset.familyMap);
});

(function(){
  const realPeople=(typeof PEOPLE!=='undefined'&&Array.isArray(PEOPLE))?PEOPLE.length:document.querySelectorAll('[data-map-person]').length;
  const embeddedImages=document.querySelectorAll('img').length;
  const sourceMentions=(document.body.innerText.match(/source/gi)||[]).length;
  const gaps=(document.body.innerText.match(/awaiting|unknown|gap|research opportunity/gi)||[]).length;
  const set=(id,n)=>{const e=document.getElementById(id);if(e)e.textContent=n};
  set('peopleCount',realPeople);set('photoCount',embeddedImages);set('sourceCount',sourceMentions);set('gapCount',gaps);
  document.querySelectorAll('[data-family-timeline]').forEach(btn=>btn.addEventListener('click',()=>{
    showRoom('timeline');
    const heading=document.querySelector('#timeline h2'); if(heading)heading.textContent=btn.dataset.familyTimeline+' Family Timeline';
  }));
  const form=document.getElementById('discoveryForm'),thanks=document.getElementById('discoveryThanks');
  if(form)form.addEventListener('submit',e=>{e.preventDefault();const saved={kind:new FormData(form).get('kind'),confidence:new FormData(form).get('confidence'),text:document.getElementById('discoveryText').value,person:document.getElementById('discoveryPerson').value,date:new Date().toISOString()};const old=JSON.parse(localStorage.getItem('museumDiscoveries')||'[]');old.push(saved);localStorage.setItem('museumDiscoveries',JSON.stringify(old));form.hidden=true;thanks.hidden=false;});
  const another=document.getElementById('addAnother'); if(another)another.addEventListener('click',()=>{form.reset();form.hidden=false;thanks.hidden=true;});
})();