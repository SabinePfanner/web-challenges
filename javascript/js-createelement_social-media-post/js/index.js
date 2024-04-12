console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const newPost = document.createElement("article");
document.body.append(newPost);
newPost.classList.add("post");
const newPostText = document.createElement("p");
newPost.append(newPostText);
newPostText.classList.add("post__content");
newPostText.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
const newPostFooter = document.createElement("Footer");
newPost.append(newPostFooter);
newPostFooter.classList.add("post__footer");
const username = document.createElement("span");
newPostFooter.append(username);
username.classList.add("post__username");
username.textContent = "@username";
const like = document.createElement("button");
newPostFooter.append(like);
like.classList.add("post__button");
like.textContent ="♥ Like";
like.type="button";
like.addEventListener("click", handleLikeButtonClick);
