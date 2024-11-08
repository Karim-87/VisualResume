// Select all h2 headings in the right-section of the resume
const sections = document.querySelectorAll(".section h2");

// Function to toggle visibility of the corresponding content
function toggleSectionContent(event: Event): void {
    const heading = event.target as HTMLElement;
    const content = heading.nextElementSibling as HTMLElement;

    if (content) {
        // Toggle the content's visibility
        content.style.display = content.style.display === "none" ? "block" : "none";
    }
}

// Attach click event listener to each h2 heading
sections.forEach((heading) => {
    heading.addEventListener("click", toggleSectionContent);
});
