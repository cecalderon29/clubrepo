// Clubs page script - organized and minimal

// --- DOM references ---
const refs = {
  sidebar: document.querySelector('.sidebar'),
  openBtn: document.getElementById('openSidebar'),
  filterToggle: document.getElementById('toggleFilters'),
  cardGrid: document.getElementById('clubCards'),
  searchInput: document.getElementById('searchInput'),
  tagMenu: document.getElementById('tagMenu'),
  overlay: document.getElementById('clubOverlay'),
  closeOverlayBtn: document.getElementById('closeOverlay'),
  overlayImage: document.getElementById('overlayImage'),
  prevBtn: document.getElementById('prevBtn'),
  nextBtn: document.getElementById('nextBtn'),
  themeToggle: document.getElementById('themeToggle'),
  themeLabel: document.getElementById('themeLabel')
};

// --- State ---
let clubs = [];
let selectedTag = 'all';
let currentImages = [];
let currentIndex = 0;

// --- Utilities ---
const qs = sel => document.querySelector(sel);
const qsa = sel => Array.from(document.querySelectorAll(sel));

// --- Sidebar ---
function toggleSidebar() {
  refs.sidebar.classList.toggle('hide');
}
if (refs.openBtn) {
  refs.openBtn.addEventListener('click', e => { e.stopPropagation(); toggleSidebar(); });
}
document.addEventListener('click', e => {
  if (!refs.sidebar) return;
  if (!refs.sidebar.classList.contains('hide') && !refs.sidebar.contains(e.target) && e.target !== refs.openBtn) {
    refs.sidebar.classList.add('hide');
  }
});
if (refs.sidebar) qsa('.sidebar a').forEach(a => a.addEventListener('click', () => refs.sidebar.classList.add('hide')));

// --- Theme toggle ---
function setTheme(isDark) {
  document.body.classList.toggle('dark-mode', isDark);
  if (refs.themeToggle) refs.themeToggle.checked = isDark;
  if (refs.themeLabel) refs.themeLabel.textContent = isDark ? '🌙 Dark' : '🌞 Light';
  try { localStorage.setItem('darkMode', String(!!isDark)); } catch (e) {}
}
if (refs.themeToggle) {
  try {
    const saved = localStorage.getItem('darkMode');
    if (saved === 'true') setTheme(true);
  } catch (e) {}
  refs.themeToggle.addEventListener('change', () => setTheme(!!refs.themeToggle.checked));
}

// --- Data load ---
async function loadClubs() {
  const res = await fetch('./data.json');
  const data = await res.json();
  clubs = data.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }));
  renderCards(clubs);
}

// --- Render cards ---
function renderCards(list) {
  refs.cardGrid.innerHTML = '';
  list.forEach(club => {
    const card = document.createElement('div');
    card.className = 'club-card';
    const tagSpans = (club.tags || []).map(t => `<span class="tag ${t.toLowerCase().replace(/\s+/g, '-')}">${t}</span>`).join(' ');
    card.innerHTML = `
      <div class="card-header">
        <h2>${club.name}</h2>
        <button class="heart-btn" aria-label="Favorite" aria-pressed="false">
          <i data-lucide="heart" class="heart-icon"></i>
        </button>
      </div>
      <div class="tag-card-row">${tagSpans}</div>
      <p class="description">${club.description || ''}</p>
      <div class="club-footer">
        <span class="club-time">${club.time || ''}</span>
        <span class="club-day">${club.day || ''}</span>
      </div>`;

    // Clicking the card opens the overlay; ensure heart clicks don't bubble up
    card.addEventListener('click', () => openOverlay(club));

    refs.cardGrid.appendChild(card);

    // Render lucide icons for the new DOM nodes and attach heart listener
    try { lucide.createIcons(); } catch (e) {}
    const heartBtn = card.querySelector('.heart-btn');
    if (heartBtn) attachHeartListener(heartBtn);
  });
  updateClubCount(list.length);
}

// Heart button helper: attach to a button element and stop event propagation so card clicks won't fire
function attachHeartListener(button) {
  if (!button) return;
  button.addEventListener('click', function (e) {
    e.stopPropagation(); // prevent the card click handler from opening the overlay
    // toggle visual state
    const isFav = button.classList.toggle('favorited');
    button.setAttribute('aria-pressed', isFav ? 'true' : 'false');
    // find first svg (lucide) inside and set fill/stroke for immediate visual change
    const svg = button.querySelector('svg');
    if (svg) {
      if (isFav) {
        svg.style.fill = 'currentColor';
        svg.style.stroke = 'none';
      } else {
        svg.style.fill = 'none';
        svg.style.stroke = '';
      }
    }
  });
}

// Attach listener to overlay heart button (exists in DOM)
if (refs.overlay) {
  const overlayHeart = refs.overlay.querySelector('.heart-btn');
  if (overlayHeart) attachHeartListener(overlayHeart);
}
function updateClubCount(n) {
  const el = document.getElementById('clubCount');
  if (el) el.textContent = `${n} clubs found`;
}

// --- Overlay / Gallery ---
function showImage(i) {
  if (!refs.overlayImage || !currentImages.length) return;
  currentIndex = ((i % currentImages.length) + currentImages.length) % currentImages.length;
  refs.overlayImage.src = currentImages[currentIndex];
}
function openOverlay(club) {
  refs.overlay.classList.remove('hide');
  document.getElementById('overlayTitle').textContent = club.name;
  document.getElementById('tags').innerHTML = (club.tags || []).map(t => `<span class="tag ${t.toLowerCase().replace(/\s+/g,'-')}">${t}</span>`).join(' ');
  currentImages = club.images || [];
  currentIndex = 0;
  if (currentImages.length) { refs.overlayImage.src = currentImages[0]; refs.overlayImage.style.display = 'block'; } else { refs.overlayImage.style.display = 'none'; }
  document.getElementById('overlayDescription').textContent = club.description || '';
  document.getElementById('overlayTime').textContent = club.time || 'Not specified';
  document.getElementById('overlayDay').textContent = club.day || 'Not specified';
  document.getElementById('overlayRoom').textContent = club.room || 'Not specified';
  document.getElementById('overlayReq').textContent = club.requirements || 'Open to all students';
  document.getElementById('overlayDues').textContent = club.dues || 'None';
  document.getElementById('overlaySponsor').textContent = club.sponsors || 'Not specified';
  document.getElementById('overlayEmail').textContent = club.emails || 'Not specified';
  const socialEl = document.getElementById('overlaySocial');
  socialEl.innerHTML = (club.social || []).map(link => {
    let platform = 'website';
    if (link.url.includes('instagram.com')) platform = 'instagram';
    else if (link.url.includes('facebook.com')) platform = 'facebook';
    else if (link.url.includes('twitter.com') || link.url.includes('x.com')) platform = 'twitter';
    else if (link.url.includes('remind.com')) platform = 'remind';
    return `<a href="${link.url}" target="_blank" class="social-pill ${platform}"><i data-lucide="${platform==='remind'?'bell':platform}"></i><span>${link.label}</span></a>`;
  }).join('');
  lucide.createIcons();
}

if (refs.prevBtn) refs.prevBtn.addEventListener('click', () => showImage(currentIndex - 1));
if (refs.nextBtn) refs.nextBtn.addEventListener('click', () => showImage(currentIndex + 1));
if (refs.closeOverlayBtn) refs.closeOverlayBtn.addEventListener('click', () => refs.overlay.classList.add('hide'));
if (refs.overlay) refs.overlay.addEventListener('click', e => { if (e.target === refs.overlay) refs.overlay.classList.add('hide'); });

// --- Filters / Tags ---
function renderTagMenu(tags) {
  refs.tagMenu.innerHTML = '';
  const allBtn = document.createElement('button');
  allBtn.className = 'tag-filter active'; allBtn.dataset.tag = 'all'; allBtn.textContent = 'All';
  refs.tagMenu.appendChild(allBtn);
  tags.sort((a,b) => a.name.localeCompare(b.name)).forEach(tag => {
    const btn = document.createElement('button');
    btn.className = 'tag-filter'; btn.dataset.tag = tag.name.toLowerCase().replace(/\s+/g,'-'); btn.textContent = tag.name;
    refs.tagMenu.appendChild(btn);
  });
  qsa('.tag-filter').forEach(btn => btn.addEventListener('click', () => {
    qsa('.tag-filter').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedTag = btn.dataset.tag;
    const filtered = selectedTag === 'all' ? clubs : clubs.filter(c => (c.tags||[]).some(t => t.toLowerCase().replace(/\s+/g,'-') === selectedTag));
    renderCards(filtered);
  }));
}

if (refs.filterToggle) {
  refs.filterToggle.addEventListener('click', () => {
    refs.tagMenu.classList.toggle('show');
    refs.filterToggle.textContent = refs.tagMenu.classList.contains('show') ? 'Hide Filters ⬆' : 'Show Filters ⬇';
  });
}

// --- Search ---
if (refs.searchInput) {
  refs.searchInput.addEventListener('input', () => {
    const q = refs.searchInput.value.trim().toLowerCase();
    const filtered = clubs.filter(c => c.name.toLowerCase().split(' ').some(w => w.startsWith(q)));
    const finalFiltered = selectedTag === 'all' ? filtered : filtered.filter(c => (c.tags||[]).some(t => t.toLowerCase().replace(/\s+/g,'-') === selectedTag));
    renderCards(finalFiltered);
  });
}

// --- Init ---
(async function init(){
  await loadClubs();
  try {
    const res = await fetch('tags.json');
    const tags = await res.json();
    renderTagMenu(tags);
  } catch (e) {}
})();