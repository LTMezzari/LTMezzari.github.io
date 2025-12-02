const reposToShow = [
    "calendar-adapter-view",
    "kotlin-easy-debugger",
    "kotlin-network"
];

for (project of reposToShow) {
    fetch(`https://api.github.com/repos/LTMezzari/${project}`)
        .then(res => res.json())
        .then(repo => {
            const container = document.getElementById("project-cards");
            const card = `
                    <div class="github-card">
                        <a href="repo.html_url" target="_blank" style="text-decoration: none;">

          <!-- Title -->
          <div class="github-title">
            <i class="material-icons tiny" style="color:#8b949e;">library_books</i>
            ${repo.name}
            <span class="github-badge">${repo.visibility}</span>
          </div>

          <!-- Description -->
          <p class="github-desc">
            ${repo.description || "No description available."}
          </p>

          <!-- Footer: language + stars -->
          <div class="github-footer">
            <span>
              <span class="lang-dot lang-kotlin"></span>
              ${repo.language}
            </span>

            <span>
              <i class="material-icons tiny" style="font-size: 1rem; vertical-align:middle;">star_border</i>
              3
            </span>
          </div>
</a>`;
            container.insertAdjacentHTML("beforeend", card);
        });
}