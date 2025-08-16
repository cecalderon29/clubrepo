
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
        <div class="tag-card-row">${tagSpans}</div>
        <p class="description">${club.description}</p>
        <div class="club-footer">
          <span class=time">${club.time} </span>
          <span class="club-day">${club.day}</span>
        </div>
      `;

      cardGrid.appendChild(card);
    });

    // Generate tag buttons
    const tagButtons = clubsToRender.reduce((acc, club) => {
      club.tags.forEach(tag => {
        if (!acc.includes(tag)) {
          acc.push(tag);
        }
      });
      return acc;
    }, []);

    const tagSortHtml = tagButtons.map(tag => {
      return `<button class="tag" data-tag="${tag}">${tag}</button>`;
    }).join('');

    document.querySelector('.tag-row').innerHTML = tagSortHtml;
  }

// Event listener for tag buttons
document.querySelectorAll('.tag').forEach(tag => {
  tag.addEventListener('click', () => {
    // Get the tag name from the button
    const tagName = tag.textContent;
    // Filter the clubs by the selected tag
    const filteredClubs = clubs.filter(club => club.tags.includes(tagName));
    // Render the filtered clubs
    renderCards(filteredClubs);
    // Add .active class to clicked tag
    tag.classList.add('active');
    // Remove .active class from other tags
    document.querySelectorAll('.tag').forEach(otherTag => {
      if (otherTag !== tag) {
        otherTag.classList.remove('active');
      }
    });
    // Add color to the clicked tag
    tag.style.borderColor = getTagColor(tagName);
    tag.style.color = getTagColor(tagName);
  });
});

// Function to get the color of a tag
function getTagColor(tagName) {
  const tagColors = {
    'Community Service': 'var(--tag-color-community-service)',
    'Debate': 'var(--tag-color-debate)',
    'Arts': 'var(--tag-color-arts)',
    'Academic': 'var(--tag-color-academic)',
    'Games': 'var(--tag-color-games)',
    'Leadership': 'var(--tag-color-leadership)',
    'Social': 'var(--tag-color-social)',
    'Music': 'var(--tag-color-music)',
  };
  return tagColors[tagName];
}

// Event listener for clear all button
document.querySelector('.clear-all').addEventListener('click', () => {
  // Remove .active class from all tags
  document.querySelectorAll('.tag').forEach(tag => {
    tag.classList.remove('active');
  });
  // Clear selected tags
  selectedTag = 'all';
  renderCards(clubs);
});
});