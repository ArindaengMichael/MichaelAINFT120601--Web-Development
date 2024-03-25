console.log("Script is running...");
// The DOM is the document Object Model and represents the HTML document as a JavaScript Object that we can then modify
// the DOMContentLoaded event will fire once the HTML DOM is 'loaded' i.e. at the beginning of our program
document.addEventListener("DOMContentLoaded", () => {
  new Blog();
  console.dir(document.body);
});

class BlogPost {
  constructor(title, content) {
    this.title = title;
    this.content = content;
  }
  render() {
    return `
            <div class="post">
                <h2>${this.title}</h2>
                <p>${this.content}</p>
            </div>
        `;
  }
}
// The Blog Class is responsible for initializing our blog, adding new posts (i.e. via new instances of the blogpost, and rendering the data to the html)
class Blog {
  constructor() {
    // this.posts will store all of our blog posts. We will later loop through this property to display the blog posts
    this.posts = [];
    this.initialize();
  }
  addPost(title, content) {
    // Create a new post
    const newPost = new BlogPost(title, content);
    this.posts.push(newPost);
    this.render();
  }
  render() {
    // We want to take all the existing posts in this.posts, and we want to inject the HTML snippets from our javascript into our original HTML document
    const blogPostContainer = document.getElementById("blog-posts");
    blogPostContainer.innerHTML = "";
    this.posts.forEach(function (post, index) {
      blogPostContainer.innerHTML += post.render();
    });
  }

  initialize() {
    // We want to add a 'click' event listener to our button
    const addButton = document.getElementById("addPostBtn");
    addButton.addEventListener("click", () => {
      // When the button is clicked, we want to take the text from the input and create a blog post out of it
      const title = document.getElementById("titleInput").value;
      const content = document.getElementById("contentInput").value;
      //   console.log(title, content);
      if (title && content) {
        // if ("" && "") -> FALSE
        this.addPost(title, content);
        document.getElementById("titleInput").value = ""; // To clear out the form after submission
        document.getElementById("contentInput").value = "";
      }
    });
  }
}
