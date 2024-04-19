// functionality for showing/hiding the comments section

const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

commentWrapper.setAttribute('aria-hidden', 'true');


function updateAriaExpanded() {
  const isVisible = commentWrapper.style.display !== 'none';
  showHideBtn.setAttribute('aria-expanded', isVisible);
}

showHideBtn.onclick = function() {
  let showHideText = showHideBtn.textContent;
  if (showHideText === 'Show comments') {
    showHideBtn.textContent = 'Hide comments';
    commentWrapper.style.display = 'block';
  } else {
    showHideBtn.textContent = 'Show comments';
    commentWrapper.style.display = 'none';
  }
  
  updateAriaExpanded();
};



const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

form.onsubmit = function(e) {
  e.preventDefault();
  submitComment();
};

function submitComment() {
  const listItem = document.createElement('li');
  const namePara = document.createElement('p');
  const commentPara = document.createElement('p');
  const nameValue = nameField.value;
  const commentValue = commentField.value;

  namePara.textContent = nameValue;
  commentPara.textContent = commentValue;

  list.appendChild(listItem);
  listItem.appendChild(namePara);
  listItem.appendChild(commentPara);

  nameField.value = '';
  commentField.value = '';
}


const formInputs = document.querySelectorAll('.comment-form input');
formInputs.forEach(input => {
  input.setAttribute('aria-label', input.placeholder);
});
showHideBtn.setAttribute('aria-label', 'Toggle comments');


