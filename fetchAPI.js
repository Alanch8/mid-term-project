function getJsonPosts() {
  fetch("http://jsonplaceholder.typicode.com/posts/?_limit=3")
    .then((response) => response.json())
    .then((res) => {
      let mainGrid = "";
      let data = "";
      res.forEach((post) => {
        data += `<div class="project-card">
                  <div class="project-image">
                    <img src="src/projects-section/${
                      post.id
                    }.jpg" alt="abstract-img-${
          post.id
        }" class="project-card-image">
                  </div>
                  <div class="project-content">
                    <div class="project-text">
                      <div class="project-title">${
                        post.title[0].toUpperCase() + post.title.slice(1)
                      }</div>
                      <div class="project-title project-description">
                        ${post.body[0].toUpperCase() + post.body.slice(1)}
                      }</div>
                      <a href="single-page.html" class="project-link learn-more-link-${
                        post.id
                      }">Learn More</a>
                    </div>
                  </div>
                </div>
              </div>`;
      });
      document.getElementById("project-cards").innerHTML = data;
    });
}

getJsonPosts();

function getJsonSinglePost() {
  fetch("http://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((res) => {
      let data = "";
      data += `<div class="post container">
        <h1 class="post-page-title">${
          res.title[0].toUpperCase() + res.title.slice(1)
        }</h1>
        <div class="post-type-wrapper">
          <div class="post-page-type">${
            res.title[0].toUpperCase() + res.title.slice(1)
          }</div>
          <div class="post-completion">
            <div class="post-completed">Completed on</div>
            <div class="post-date">2/2/22</div>
          </div>
        </div>
        <div class="post-image-wrapper">
          <img
            src="src/projects-section/1.jpg"
            loading="lazy"
            alt="abstract-img-1"
            class="post-page-image"
          /><img
            src="src/projects-section/1.jpg"
            loading="lazy"
            alt="effect"
            class="post-page-image-effect"
          />
        </div>
        <div class="post-detail w-richtext">
          <p>
            ${res.body[0].toUpperCase() + res.body.slice(1)}.
          </p>
        </div>
      </div>`;
      document.getElementById("single-post").innerHTML = data;
    });
}

getJsonSinglePost();
