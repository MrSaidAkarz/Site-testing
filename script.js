document.addEventListener("DOMContentLoaded", () => {
    const data = {
        "Eppendorf": {
            "Centrifuge": {
                "5702": [
                    {"Model": "5702", "User Manual": "Available", "Service Manual": "Available", "Technical Data": "Not Available", "Software": "Available"},
                    {"Model": "5702 R", "User Manual": "Available", "Service Manual": "Not Available", "Technical Data": "Available", "Software": "Not Available"},
                    {"Model": "5702 RH", "User Manual": "Not Available", "Service Manual": "Available", "Technical Data": "Available", "Software": "Available"}
                ]
            }
        }
    };

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
    console.log("Companies:", companies);
    populateList(companyList, companies, "Select a Type", company => {
        console.log("Selected Company:", company);
        return Object.keys(data[company]).map(type => ({
            text: type,
            onClick: () => {
                console.log("Selected Type:", type);
                const series = Object.keys(data[company][type]);
                console.log("Series:", series);
                flipCard("Select a Series", series.map(seriesItem => ({
                    text: seriesItem,
                    onClick: () => {
                        console.log("Selected Series:", seriesItem);
                        const models = data[company][type][seriesItem].map(modelData => ({
                            text: modelData.Model,
                            onClick: () => {
                                console.log("Selected Model:", modelData.Model);
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
