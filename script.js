document.addEventListener("DOMContentLoaded", async function () {
  const cardGrid = document.getElementById("clubCards");
  const searchInput = document.getElementById("searchInput");
  const tagMenu = document.getElementById("tagMenu");
  const filterToggle = document.getElementById("filterToggle");
  let clubs = [];
  let selectedTag = "all";
    await fetch("./data.json")
        .then(response => response.json())
        .then(data => {
        clubs = data;
  
        clubs.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));

        // Render initial cards
        renderCards(clubs);
        });
  function renderCards(clubsToRender) {
  cardGrid.innerHTML = ""; // Clear existing cards

  clubsToRender.forEach(club => {
    const card = document.createElement("div");
    card.classList.add("club-card");

    // Convert tags into styled <span> elements
    const tagSpans = club.tags
      .map(tag => `<span class="tag ${tag.toLowerCase().replace(/\s+/g, '-')}">${tag}</span>`)
      .join(" ");

    card.innerHTML = `
      <h2>${club.name}</h2>
      <div class="tag-row">${tagSpans}</div>
      <p class="description">${club.description}</p>
      <div class="club-footer">
        <span class=time">${club.time} </span>
        <span class="club-day">${club.day}</span>
      </div>
    `;

    cardGrid.appendChild(card);
  });
}


  // Search logic
    searchInput.addEventListener("input", function () {
    const query = searchInput.value.toLowerCase();
    const filtered = clubs.filter(club =>
        club.name.toLowerCase().split(" ").some(word => word.startsWith(query))
    );
    renderCards(filtered);
  });

  // Toggle dropdown visibility

  });

