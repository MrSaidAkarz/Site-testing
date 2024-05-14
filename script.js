document.addEventListener("DOMContentLoaded", () => {
    const data = JSON.parse("<<INSERT JSON STRINGIFIED DATA HERE>>");
    const companyList = document.getElementById("company-list");
    const selectionSection = document.getElementById("selection-section");
    const nextPrompt = document.getElementById("next-prompt");
    const nextList = document.getElementById("next-list");

    function resetView() {
        selectionSection.classList.remove("flip");
        nextList.innerHTML = "";
    }

    function flipCard(prompt, items) {
        nextPrompt.textContent = prompt;
        nextList.innerHTML = "";
        items.forEach(item => {
            const itemDiv = document.createElement("div");
            itemDiv.className = "list-item";
            itemDiv.textContent = item.text;
            itemDiv.addEventListener("click", item.onClick);
            nextList.appendChild(itemDiv);
        });
        setTimeout(() => {
            selectionSection.classList.add("flip");
        }, 100);
    }

    function populateList(list, items, nextPrompt, nextItemsGetter) {
        list.innerHTML = "";
        items.forEach(item => {
            const itemDiv = document.createElement("div");
            itemDiv.className = "list-item";
            itemDiv.textContent = item;
            itemDiv.addEventListener("click", () => {
                const nextItems = nextItemsGetter(item);
                flipCard(nextPrompt, nextItems);
            });
            list.appendChild(itemDiv);
        });
    }

    const companies = Object.keys(data);
    populateList(companyList, companies, "Select a Type", company => {
        return Object.keys(data[company]).map(type => ({
            text: type,
            onClick: () => {
                const types = Object.keys(data[company][type]);
                flipCard("Select a Series", types.map(series => ({
                    text: series,
                    onClick: () => {
                        const models = data[company][type][series].map(modelData => ({
                            text: modelData.Model,
                            onClick: () => {
                                const manuals = ["User Manual", "Service Manual", "Technical Data", "Software"].map(manual => ({
                                    text: manual,
                                    onClick: () => {}
                                }));
                                flipCard("Available Manuals", manuals);
                            }
                        }));
                        flipCard("Select a Model", models);
                    }
                })));
            }
        }));
    });
});
