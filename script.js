document.addEventListener("DOMContentLoaded", async function () {
  const toggleBtn = document.getElementById("toggleFilters");
  const cardGrid = document.getElementById("clubCards");
  const searchInput = document.getElementById("searchInput");
  const tagMenu = document.getElementById("tagMenu");
  let clubs = [];
  let selectedTag = "all";

  // Load clubs
  await fetch("./data.json")
    .then(response => response.json())
    .then(data => {
      clubs = data;
      clubs.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
      renderCards(clubs);
    });
    
  // Load tags
  async function loadTags() {
    const res = await fetch("tags.json");
    const clubTags = await res.json();
    clubTags.sort((a, b) => a.name.localeCompare(b.name));
    renderTagMenu(clubTags);
  }

 
    toggleBtn.addEventListener("click", () => {
    // Toggle "show" class
    tagMenu.classList.toggle("show");

    if (tagMenu.classList.contains("show")) {
      toggleBtn.textContent = "Hide Filters ⬆";
    } else {
      toggleBtn.textContent = "Show Filters ⬇";
    }
  });
  
  function renderCards(clubsToRender) {
    cardGrid.innerHTML = "";

    clubsToRender.forEach(club => {
      const card = document.createElement("div");
      card.classList.add("club-card");

      const tagSpans = club.tags
        .map(tag => `<span class="tag ${tag.toLowerCase().replace(/\s+/g, '-')}">${tag}</span>`)
        .join(" ");

      card.innerHTML = `
        <h2>${club.name}</h2>
        <div class="tag-card-row">${tagSpans}</div>
        <p class="description">${club.description}</p>
        <div class="club-footer">
          <span class="club-time">${club.time || ""}</span>
          <span class="club-day">${club.day || ""}</span>
        </div>
      `;

      cardGrid.appendChild(card);
    });

      updateClubCount(clubsToRender.length);
  }
  
  function updateClubCount(count) {
    const clubCountElement = document.getElementById("clubCount");
    clubCountElement.textContent = `${count} clubs found`;
  }
  function renderTagMenu(tags) {
    tagMenu.innerHTML = "";

    // "All" button
    const allBtn = document.createElement("button");
    allBtn.classList.add("tag-filter", "active");
    allBtn.dataset.tag = "all";
    allBtn.textContent = "All";
    tagMenu.appendChild(allBtn);

    // Tag buttons
    tags.forEach(tag => {
      const btn = document.createElement("button");
      btn.classList.add("tag-filter");
      btn.dataset.tag = tag.name.toLowerCase().replace(/\s+/g, '-');
      btn.textContent = tag.name;
      tagMenu.appendChild(btn);
    });

    // Add event listeners for tag filters
    document.querySelectorAll(".tag-filter").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".tag-filter").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        selectedTag = btn.dataset.tag;

        const filtered = selectedTag === "all"
          ? clubs
          : clubs.filter(club => club.tags.some(t => t.toLowerCase().replace(/\s+/g, '-') === selectedTag));

        renderCards(filtered);
      });
    });
  }

  // Search logic
  searchInput.addEventListener("input", function () {
    const query = searchInput.value.toLowerCase();
    const filtered = clubs.filter(club =>
      club.name.toLowerCase().split(" ").some(word => word.startsWith(query))
    );

    // Apply tag filter *on top of search*
    const finalFiltered = selectedTag === "all"
      ? filtered
      : filtered.filter(club => club.tags.some(t => t.toLowerCase().replace(/\s+/g, '-') === selectedTag));

    renderCards(finalFiltered);
  });

  loadTags();
});
