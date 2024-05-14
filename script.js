document.addEventListener("DOMContentLoaded", () => {
    const data = JSON.parse("<<INSERT JSON STRINGIFIED DATA HERE>>");
    const companyList = document.getElementById("company-list");
    const typeSection = document.getElementById("type-section");
    const typeList = document.getElementById("type-list");
    const seriesSection = document.getElementById("series-section");
    const seriesList = document.getElementById("series-list");
    const modelSection = document.getElementById("model-section");
    const modelList = document.getElementById("model-list");
    const manualSection = document.getElementById("manual-section");
    const manualOptions = document.getElementById("manual-options");

    function resetSections() {
        typeSection.classList.add("hidden");
        typeList.innerHTML = "";
        seriesSection.classList.add("hidden");
        seriesList.innerHTML = "";
        modelSection.classList.add("hidden");
        modelList.innerHTML = "";
        manualSection.classList.add("hidden");
        manualOptions.innerHTML = "";
    }

    // Populate company list
    Object.keys(data).forEach(company => {
        const companyItem = document.createElement("div");
        companyItem.className = "list-item";
        companyItem.textContent = company;
        companyItem.addEventListener("click", () => {
            resetSections();
            Object.keys(data[company]).forEach(type => {
                const typeItem = document.createElement("div");
                typeItem.className = "list-item";
                typeItem.textContent = type;
                typeItem.addEventListener("click", () => {
                    resetSections();
                    seriesSection.classList.remove("hidden");
                    Object.keys(data[company][type]).forEach(series => {
                        const seriesItem = document.createElement("div");
                        seriesItem.className = "list-item";
                        seriesItem.textContent = series;
                        seriesItem.addEventListener("click", () => {
                            resetSections();
                            modelSection.classList.remove("hidden");
                            data[company][type][series].forEach(modelData => {
                                const modelItem = document.createElement("div");
                                modelItem.className = "list-item";
                                modelItem.textContent = modelData.Model;
                                modelItem.addEventListener("click", () => {
                                    manualOptions.innerHTML = "";
                                    const manuals = ["User Manual", "Service Manual", "Technical Data", "Software"];
                                    manuals.forEach(manual => {
                                        const manualOption = document.createElement("div");
                                        manualOption.className = "list-item";
                                        manualOption.textContent = manual;
                                        if (!modelData[manual] || modelData[manual] === "Not Available") {
                                            manualOption.classList.add("grayed-out");
                                        }
                                        manualOptions.appendChild(manualOption);
                                    });
                                    manualSection.classList.remove("hidden");
                                });
                                modelList.appendChild(modelItem);
                            });
                        });
                        seriesList.appendChild(seriesItem);
                    });
                });
                typeList.appendChild(typeItem);
            });
            typeSection.classList.remove("hidden");
        });
        companyList.appendChild(companyItem);
    });
});
