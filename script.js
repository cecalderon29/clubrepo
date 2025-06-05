document.addEventListener("DOMContentLoaded", function () {
    const cardGrid = document.getElementById("clubCards");
  
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
  });
  