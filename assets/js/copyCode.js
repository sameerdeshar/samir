document.addEventListener("DOMContentLoaded", function() {
    const codeBlocks = document.querySelectorAll("pre code");

    codeBlocks.forEach(codeBlock => {
        // Create copy button
        const copyButton = document.createElement("button");
        copyButton.className = "copy-button";
        copyButton.textContent = "Copy";

        // Add copy button to each code block
        codeBlock.parentElement.appendChild(copyButton);

        copyButton.addEventListener("click", () => {
            // Copy the code block to the clipboard
            const text = codeBlock.innerText;
            navigator.clipboard.writeText(text).then(() => {
                copyButton.textContent = "Copied!";
                setTimeout(() => {
                    copyButton.textContent = "Copy";
                }, 2000);
            });
        });
    });
});
