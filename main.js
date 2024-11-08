// Select all h2 headings in the right-section of the resume
var sections = document.querySelectorAll(".section h2");
// Function to toggle visibility of the corresponding content
function toggleSectionContent(event) {
    var heading = event.target;
    var content = heading.nextElementSibling;
    if (content) {
        // Toggle the content's visibility
        content.style.display = content.style.display === "none" ? "block" : "none";
    }
}
// Attach click event listener to each h2 heading
sections.forEach(function (heading) {
    heading.addEventListener("click", toggleSectionContent);
});
