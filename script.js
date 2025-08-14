document.addEventListener("DOMContentLoaded", function () {
  const cardGrid = document.getElementById("clubCards");
  const searchInput = document.getElementById("searchInput");
  const tagMenu = document.getElementById("tagMenu");
  const filterToggle = document.getElementById("filterToggle");
  let selectedTag = "all";


  function renderCards(clubs) {
      cardGrid.innerHTML = ""; // Clear existing cards
  
      clubs.forEach(club => {
      const card = document.createElement("div");
      card.classList.add("club-card");
  
      // Convert tags into styled <span> elements
      const tagSpans = club.tags
          .map(tag => `<span class="tag ${tag.toLowerCase()}">${tag}</span>`)
          .join(" ");
  
      card.innerHTML = `
          <h2>${club.title}</h2>
      ${tagSpans} 
          <p>${club.description}</p>
          
      `;
  
      cardGrid.appendChild(card);
      });
  }

  // Initial render
  renderCards(clubs);

  // Search logic
    searchInput.addEventListener("input", function () {
    const query = searchInput.value.toLowerCase();
    const filtered = clubs.filter(club =>
        club.title.toLowerCase().split(" ").some(word => word.startsWith(query))
    );
    renderCards(filtered);
  });

  // Toggle dropdown visibility

    filterToggle.addEventListener("click", () => {
    tagMenu.classList.toggle("hidden");
    });

  // Handle tag selection
  tagMenu.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      selectedTag = e.target.dataset.tag;
      updateFilter();
      tagMenu.classList.add("hidden");
      filterToggle.textContent = `🎯 ${selectedTag}`;
    }
  });

});