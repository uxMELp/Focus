document.querySelectorAll(".item").forEach(item => {
    const originalText = item.textContent;

    item.addEventListener("mouseover", () => {
        item.textContent = "Ver";
    });

    item.addEventListener("mouseout", () => {
        item.textContent = originalText;
    });
});
