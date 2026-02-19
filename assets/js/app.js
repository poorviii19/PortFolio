fetch("data/projects.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("projectContainer");

    data.forEach(p => {
      container.innerHTML += `
        <div class="col-md-4 mb-4">
          <div class="project-card">
            <img src="${p.image}" class="img-fluid mb-3 rounded">
            <h5>${p.title}</h5>
            <p>${p.description}</p>
            <a href="${p.demo}" class="btn btn-primary btn-sm">Live</a>
            <a href="${p.github}" class="btn btn-outline-light btn-sm">Code</a>
          </div>
        </div>
      `;
    });
  });
