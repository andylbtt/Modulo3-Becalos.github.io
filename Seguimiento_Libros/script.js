document.getElementById("comment-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const commentInput = document.getElementById("comment-input");
    const commentText = commentInput.value.trim();
    if (commentText === "") return;
    
    const commentSection = document.getElementById("comments-section");
    const commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");
    
    const now = new Date();
    const timestamp = now.toLocaleString();
    
    commentDiv.innerHTML = `<p>${commentText}</p><small>${timestamp}</small>`;
    
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";
    deleteButton.onclick = function() {
        commentDiv.remove();
    };
    
    commentDiv.appendChild(deleteButton);
    commentSection.appendChild(commentDiv);
    
    commentInput.value = "";
});