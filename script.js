const modal = document.getElementById("contactModal");
const contactBtn = document.getElementById("contactBtn");
const closeBtn = document.getElementsByClassName("close-btn")[0];

contactBtn.addEventListener("click", function(event) {
    event.preventDefault(); 
    modal.style.display = "block"; 
});

closeBtn.addEventListener("click", function() {
    modal.style.display = "none"; 
});

window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none"; 
    }
});
