let currentUser = null;
let currentEmail = null;
let currentSubject = null;
let currentSys = null;
let currentRPTab = 'info';
let quizState = null;
let studiedLocal = new Set();

const layers = { skeleton: true, muscle: false, ligament: false, dental: false };

// ===== AUTH =====
function switchAuthTab(tab, btn) {
  document.querySelectorAll('.ltab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('login-form').style.display = tab === 'login' ? '' : 'none';
  document.getElementById('register-form').style.display = tab === 'register' ? '' : 'none';
}

function doLogin() {
  const u = document.getElementById('li-user').value.trim().toLowerCase();
  const p = document.getElementById('li-pass').value;
  const users = getUsers();
  if (users[u] && users[u].pass === p) {
    setSession(u); currentEmail = u; currentUser = users[u];
    launchApp();
  } else alert('Email sau parolă incorectă.');
}

function doRegister() {
  const name = document.getElementById('rg-name').value.trim();
  const email = document.getElementById('rg-email').value.trim().toLowerCase();
  const year = document.getElementById('rg-year').value;
  const pass = document.getElementById('rg-pass').value;
  if (!name || !email || !pass) { alert('Completați toate câmpurile.'); return; }
  if (pass.length < 6) { alert('Parola trebuie să aibă minim 6 caractere.'); return; }
  const users = getUsers();
  if (users[email]) { alert('Email deja înregistrat.'); return; }
  users[email] = { name, year, pass, studied: [], notes: {}, quizScores: [], streak: 0, badges: [] };
  saveUsers(users);
  setSession(email); currentEmail = email; currentUser = users[email];
  launchApp();
}

function demoLogin() {
  document.getElementById('li-user').value = 'student@demo.ro';
  document.getElementById('li-pass').value = 'student123';
  doLogin();
}

function doLogout() {
  clearSession(); currentUser = null; currentEmail = null;
  document.getElementById('app').classList.remove('visible');
  document.getElementById('login-screen').style.display = 'flex';
}

function launchApp() {
  document.getElementById('login-screen').style.display = 'none';
  document.getElementById('app').classList.add('visible');
  const initials = currentUser.name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
  document.getElementById('ua-initials').textContent = initials;
  document.getElementById('ua-name').textContent = currentUser.name.split(' ')[0];
  studiedLocal = new Set(currentUser.studied || []);
  buildBranches();
  buildSVG('anterior');
  updateGlobalProgress();
}

function saveCurrentUser() {
  const users = getUsers(); users[currentEmail] = currentUser; saveUsers(users);
}

window.addEventListener('DOMContentLoaded', () => {
  const sess = getSession();
  if (sess) {
    const users = getUsers();
    if (users[sess]) { currentEmail = sess; currentUser = users[sess]; launchApp(); }
  }
});

// ===== LAYERS =====
function toggleLayer(name, btn) {
  layers[name] = !layers[name];
  btn.classList.toggle('on', layers[name]);
  const legMap = { muscle: 'leg-m', ligament: 'leg-l', dental: 'leg-d' };
  if (legMap[name]) document.getElementById(legMap[name]).classList.toggle('layer-off', !layers[name]);
  buildSVG(currentView);
}

function setView(v, btn) {
  document.querySelectorAll('.vc-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const labels = { anterior: 'VEDERE ANTERIOARĂ', lateral: 'VEDERE LATERALĂ', posterior: 'VEDERE POSTERIOARĂ' };
  document.getElementById('view-label').textContent = labels[v];
  buildSVG(v);
}

// ===== BRANCHES =====
function buildBranches() {
  const scroll = document.getElementById('branch-scroll');
  scroll.innerHTML = '';
  branches.forEach(b => {
    const done = b.subs.filter(s => studiedLocal.has(s.name)).length;
    const div = document.createElement('div'); div.className = 'branch';
    div.innerHTML = `<div class="bh" onclick="toggleBranch(this)">
      <span class="bh-icon">${b.icon}</span><span class="bh-name">${b.name}</span>
      ${b.count ? `<span class="bh-count">${b.count}</span>` : ''}
      <span style="font-size:9px;color:var(--accent2);font-family:'DM Mono',monospace;margin-left:auto;margin-right:4px">${done}/${b.subs.length}</span>
      <span class="bh-chev">▶</span>
    </div>
    <div class="bb">${b.subs.map(s => `
      <div class="si ${studiedLocal.has(s.name) ? 'done' : ''}" onclick="loadSubject('${s.name.replace(/'/g, "\\'")}',this)">
        <div class="si-dot" style="background:${b.color}"></div>
        <span class="si-name">${s.name}</span>
        <span class="si-lv">${s.lv}</span>
        <span class="si-check">✓</span>
      </div>`).join('')}
    </div>`;
    scroll.appendChild(div);
  });
}

function toggleBranch(el) {
  const was = el.classList.contains('open');
  document.querySelectorAll('.bh').forEach(h => h.classList.remove('open'));
  if (!was) el.classList.add('open');
}

function loadSubject(name, el) {
  document.querySelectorAll('.si').forEach(s => s.classList.remove('active'));
  if (el) el.classList.add('active');
  currentSubject = name;
  const data = anatomyDB[name];
  if (!data) return;
  currentSys = data.sys;
  if (currentRPTab === 'info') renderInfo(name, data);
  else if (currentRPTab === 'quiz') startQuiz(data.sys);
  if (!studiedLocal.has(name)) {
    studiedLocal.add(name);
    currentUser.studied = [...studiedLocal];
    saveCurrentUser();
    updateGlobalProgress();
    buildBranches();
    if (el) el.closest('.si').classList.add('done');
  }
}

function renderInfo(name, data) {
  const notes = currentUser.notes[name] || '';
  document.getElementById('rp-content').innerHTML = `
    <div class="rp-title">${name}</div>
    <div class="rp-sys">${data.sys === 'skeleton' ? '// osteologie' : data.sys === 'muscle' ? '// miologie' : data.sys === 'ligament' ? '// artrologie' : '// stomatologie'}</div>
    <div class="section-label">Definiție</div><div class="def-text">${data.def}</div>
    <div class="section-label">Concepte cheie</div><ul class="key-list">${data.keys.map(k => `<li>${k}</li>`).join('')}</ul>
    <div class="memo-box">💡 ${data.memo}</div>
    <div class="section-label">Notițele mele</div>
    <textarea class="note-ta" id="note-ta" placeholder="Scrie notițele tale...">${notes}</textarea>
    <button class="action-btn primary" onclick="saveNote('${name.replace(/'/g, "\\'")}')">💾 Salvează notițe</button>
    <button class="action-btn" onclick="switchRPTab('quiz',document.querySelector('.rp-tab:nth-child(2)'));startQuiz('${data.sys}')">🎯 Quiz pentru acest subiect</button>
  `;
}

function saveNote(name) {
  const ta = document.getElementById('note-ta');
  if (!ta) return;
  currentUser.notes[name] = ta.value;
  saveCurrentUser();
  ta.style.borderColor = 'var(--accent2)';
  setTimeout(() => ta.style.borderColor = '', 1200);
}

// ===== QUIZ =====
function startQuiz(sys) {
  const pool = quizDB[sys] || quizDB.skeleton;
  const shuffled = [...pool].sort(() => Math.random() - 0.5).slice(0, 5);
  quizState = { qs: shuffled, idx: 0, score: 0, answered: false };
  renderQuiz();
}

function renderQuiz() {
  const rp = document.getElementById('rp-content');
  if (!quizState || !quizState.qs.length) {
    rp.innerHTML = `<div style="text-align:center;padding:2rem;color:var(--text2)">Alegeți un subiect pentru quiz.</div>`;
    return;
  }
  if (quizState.idx >= quizState.qs.length) {
    const pct = Math.round((quizState.score / quizState.qs.length) * 100);
    const emoji = pct >= 80 ? '🏆' : pct >= 60 ? '👍' : '📖';
    currentUser.quizScores.push({ pct, sys: currentSys, date: new Date().toLocaleDateString('ro') });
    saveCurrentUser();
    rp.innerHTML = `<div class="quiz-score-card"><div style="font-size:40px">${emoji}</div>
      <div class="score-big">${quizState.score}/${quizState.qs.length}</div><div class="score-label">${pct}%</div>
      <button class="action-btn primary" onclick="startQuiz('${currentSys}')">↻ Quiz nou</button>
      <button class="action-btn" onclick="switchRPTab('progress',document.querySelector('.rp-tab:nth-child(3)'))">📊 Progres</button></div>`;
    return;
  }
  const q = quizState.qs[quizState.idx];
  rp.innerHTML = `<div class="quiz-meta"><span>${quizState.idx+1}/${quizState.qs.length}</span><span>Scor: ${quizState.score}</span></div>
    <div class="quiz-prog-bar"><div class="quiz-prog-fill" style="width:${(quizState.idx/quizState.qs.length)*100}%"></div></div>
    <div class="quiz-q">${q.q}</div><div class="quiz-opts">${q.opts.map((o,i)=>`<button class="quiz-opt" onclick="answerQuiz(${i})">${o}</button>`).join('')}</div>
    <div id="quiz-exp"></div>`;
}

function answerQuiz(idx) {
  if (quizState.answered) return;
  quizState.answered = true;
  const q = quizState.qs[quizState.idx];
  document.querySelectorAll('.quiz-opt').forEach((o, i) => {
    o.disabled = true;
    if (i === q.a) o.classList.add('correct');
    else if (i === idx) o.classList.add('wrong');
  });
  if (idx === q.a) quizState.score++;
  document.getElementById('quiz-exp').innerHTML = `<div class="quiz-explanation">💡 ${q.exp}<br>
    <button class="action-btn" onclick="nextQuiz()">${quizState.idx+1 < quizState.qs.length ? 'Următoarea →' : 'Rezultat →'}</button></div>`;
}

function nextQuiz() { quizState.idx++; quizState.answered = false; renderQuiz(); }

// ===== PROGRESS =====
function renderProgress() {
  const total = Object.keys(anatomyDB).length, done = studiedLocal.size, pct = Math.round((done/total)*100);
  const branchProgs = branches.map(b => ({ ...b, d: b.subs.filter(s => studiedLocal.has(s.name)).length }));
  document.getElementById('rp-content').innerHTML = `
    <div class="streak-card"><div class="streak-num">${currentUser.streak||0}</div><div class="streak-info">zile consecutiv<br>${currentUser.year}</div></div>
    <div class="section-label">Progres ${done}/${total} (${pct}%)</div>
    ${branchProgs.map(b => `<div class="prog-branch"><span>${b.icon}</span><span class="pb-name">${b.name}</span>
      <div class="pb-bar"><div class="pb-fill" style="width:${b.subs.length?Math.round((b.d/b.subs.length)*100):0}%;background:${b.color}"></div></div>
      <span class="pb-pct">${b.subs.length?Math.round((b.d/b.subs.length)*100):0}%</span></div>`).join('')}
    <div class="section-label">Quiz-uri recente</div>
    ${currentUser.quizScores.slice(-5).reverse().map(s => `<div style="display:flex;justify-content:space-between;font-size:11px;padding:4px 0">
      <span>${s.sys}</span><span style="color:${s.pct>=70?'var(--accent2)':'var(--accent3)'}">${s.pct}%</span><span>${s.date}</span></div>`).join('')}
  `;
}

function updateGlobalProgress() {
  const pct = Math.round((studiedLocal.size / Object.keys(anatomyDB).length) * 100);
  document.getElementById('gp-fill').style.width = pct + '%';
  document.getElementById('gp-label').textContent = pct + '%';
}

// ===== TABS =====
function switchRPTab(tab, btn) {
  currentRPTab = tab;
  document.querySelectorAll('.rp-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  if (tab === 'info' && currentSubject) renderInfo(currentSubject, anatomyDB[currentSubject]);
  else if (tab === 'quiz' && currentSys) startQuiz(currentSys);
  else if (tab === 'progress') renderProgress();
  else document.getElementById('rp-content').innerHTML = `<div style="text-align:center;padding:3rem;color:var(--text3)">Selectați o structură.</div>`;
}

// ===== SEARCH =====
function searchAll(q) {
  if (!q) { document.querySelectorAll('.si').forEach(s => s.style.display = ''); return; }
  const lq = q.toLowerCase();
  document.querySelectorAll('.si').forEach(s => {
    const match = s.querySelector('.si-name').textContent.toLowerCase().includes(lq);
    s.style.display = match ? '' : 'none';
    if (match) s.closest('.bb')?.previousElementSibling.classList.add('open');
  });
}