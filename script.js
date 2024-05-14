document.addEventListener('DOMContentLoaded', () => {
    const data = {"Eppendorf": {"Centrifuge": {"3200": [{"Maker": "Eppendorf", "Type": "Centrifuge", "Model": "3200", "User Manual": "Available", "Service Manual": NaN, "Technical Data": NaN, "Software": NaN, "Series": "3200"}], "5415": [{"Maker": "Eppendorf", "Type": "Centrifuge", "Model": "5415 D", "User Manual": "Not Available", "Service Manual": NaN, "Technical Data": NaN, "Software": NaN, "Series": "5415"}, {"Maker": "Eppendorf", "Type": "Centrifuge", "Model": "5415 R", "User Manual": "Not Available", "Service Manual": NaN, "Technical Data": NaN, "Software": NaN, "Series": "5415"}], "5417": [{"Maker": "Eppendorf", "Type": "Centrifuge", "Model": "5417 C", "User Manual": "Not Available", "Service Manual": NaN, "Technical Data": NaN, "Software": NaN, "Series": "5417"}, {"Maker": "Eppendorf", "Type": "Centrifuge", "Model": "5417 R", "User Manual": "Not Available", "Service Manual": NaN, "Technical Data": NaN, "Software": NaN, "Series": "5417"}], "5418": [{"Maker": "Eppendorf", "Type": "Centrifuge", "Model": "5418", "User Manual": "Not Available", "Service Manual": "Available", "Technical Data": NaN, "Software": NaN, "Series": "5418"}, {"Maker": "Eppendorf", "Type": "Centrifuge", "Model": "5418 R", "User Manual": "Available", "Service Manual": NaN, "Technical Data": NaN, "Software": NaN, "Series": "5418"}], "5420": [{"Maker": "Eppendorf", "Type": "Centrifuge", "Model": "5420", "User Manual": "Available", "Service Manual": "Available", "Technical Data": NaN, "Software": "Available", "Series": "5420"}], "5424": [{"Maker": "Eppendorf", "Type": "Centrifuge", "Model": "5424", "User Manual": "Not Available", "Service Manual": "Available", "Technical Data": NaN, "Software": NaN, "Series": "5424"}, {"Maker": "Eppendorf", "Type": "Centrifuge", "Model": "5424 R", "User Manual": "Available", "Service Manual": NaN, "Technical Data": "Available", "Software": NaN, "Series": "5424"}], "5425": [{"Maker": "Eppendorf", "Type": "Centrifuge", "Model": "5425", "User Manual": "Available", "Service Manual": "Available", "Technical Data": "Available", "Software": "Available", "Series": "5425"}, {"Maker": "Eppendorf", "Type": "Centrifuge", "Model": "5425 R", "User Manual": "Available", "Service Manual": NaN, "Technical Data": "Available", "Software": NaN, "Series": "5425"}], "5427": [{"Maker": "Eppendorf", "Type": "Centrifuge", "Model": "5427 R", "User Manual": "Not Available", "Service Manual": NaN, "Technical Data": NaN, "Software": NaN, "Series": "5427"}], "5430": [{"Maker": "Eppendorf", "Type": "Centrifuge", "Model": "5430", "User Manual": "Available", "Service Manual": "Available", "Technical Data": "Available", "Software": "Available", "Series": "5430"}, {"Maker": "Eppendorf", "Type": "Centrifuge", "Model": "5430 R", "User Manual": "Not Available", "Service Manual": NaN, "Technical Data": NaN, "Software": NaN, "Series": "5430"}], "5702": [{"Maker": "Eppendorf", "Type": "Centrifuge", "Model": "5702", "User Manual": "Not Available", "Service Manual": "Available", "Technical Data": "Available", "Software": "Available", "Series": "5702"}, {"Maker": "Eppendorf", "Type": "Centrifuge", "Model": "5702 R", "User Manual": "Not Available", "Service Manual": "Available", "Technical Data": "Available", "Software": "Available", "Series": "5702"}, {"Maker": "Eppendorf", "Type": "Centrifuge", "Model": "5702 RH", "User Manual": "Not Available", "Service Manual": "Available", "Technical Data": "Available", "Software": "Available", "Series": "5702"}], "5804": [{"Maker": "Eppendorf", "Type": "Centrifuge", "Model": "5804", "User Manual": "Not Available", "Service Manual": NaN, "Technical Data": NaN, "Software": NaN, "Series": "5804"}, {"Maker": "Eppendorf", "Type": "Centrifuge", "Model": "5804 R", "User Manual": "Not Available", "Service Manual": NaN, "Technical Data": NaN, "Software": NaN, "Series": "5804"}], "5810": [{"Maker": "Eppendorf", "Type": "Centrifuge", "Model": "5810", "User Manual": "Not Available", "Service Manual": "Available", "Technical Data": NaN, "Software": NaN, "Series": "5810"}, {"Maker": "Eppendorf", "Type": "Centrifuge", "Model": "5810 R", "User Manual": "Not Available", "Service Manual": NaN, "Technical Data": NaN, "Software": NaN, "Series": "5810"}, {"Maker": "Eppendorf", "Type": "Centrifuge", "Model": "5810 Ri", "User Manual": "Not Available", "Service Manual": NaN, "Technical Data": NaN, "Software": NaN, "Series": "5810"}], "5910": [{"Maker": "Eppendorf", "Type": "Centrifuge", "Model": "5910 Ri", "User Manual": "Available", "Service Manual": "Available", "Technical Data": NaN, "Software": NaN, "Series": "5910"}, {"Maker": "Eppendorf", "Type": "Centrifuge", "Model": "5910 R", "User Manual": NaN, "Service Manual": NaN, "Technical Data": "Available", "Software": NaN, "Series": "5910"}], "5920": [{"Maker": "Eppendorf", "Type": "Centrifuge", "Model": "5920 R", "User Manual": "Not Available", "Service Manual": NaN, "Technical Data": "Available", "Software": NaN, "Series": "5920"}, {"Maker": "Eppendorf", "Type": "Centrifuge", "Model": "5920 Ri", "User Manual": "Not Available", "Service Manual": NaN, "Technical Data": NaN, "Software": NaN, "Series": "5920"}]}}};
    const companyList = document.getElementById('company-list');
    const typeSection = document.getElementById('type-section');
    const typeList = document.getElementById('type-list');
    const seriesSection = document.getElementById('series-section');
    const seriesList = document.getElementById('series-list');
    const modelSection = document.getElementById('model-section');
    const modelList = document.getElementById('model-list');
    const manualSection = document.getElementById('manual-section');
    const manualOptions = document.getElementById('manual-options');

    // Populate company list
    Object.keys(data).forEach(company => {
        const companyItem = document.createElement('div');
        companyItem.textContent = company;
        companyItem.addEventListener('click', () => {
            typeList.innerHTML = '';
            Object.keys(data[company]).forEach(type => {
                const typeItem = document.createElement('div');
                typeItem.textContent = type;
                typeItem.addEventListener('click', () => {
                    seriesList.innerHTML = '';
                    Object.keys(data[company][type]).forEach(series => {
                        const seriesItem = document.createElement('div');
                        seriesItem.textContent = `Series ${series}`;
                        seriesItem.addEventListener('click', () => {
                            modelList.innerHTML = '';
                            data[company][type][series].forEach(modelData => {
                                const modelItem = document.createElement('div');
                                modelItem.textContent = modelData.Model;
                                modelItem.addEventListener('click', () => {
                                    manualOptions.innerHTML = '';
                                    const manuals = ['User Manual', 'Service Manual', 'Technical Data', 'Software'];
                                    manuals.forEach(manual => {
                                        const manualOption = document.createElement('div');
                                        manualOption.textContent = manual;
                                        if (!modelData[manual] || modelData[manual] === 'Not Available') {
                                            manualOption.classList.add('grayed-out');
                                        }
                                        manualOptions.appendChild(manualOption);
                                    });
                                    manualSection.classList.remove('hidden');
                                });
                                modelList.appendChild(modelItem);
                            });
                            modelSection.classList.remove('hidden');
                        });
                        seriesList.appendChild(seriesItem);
                    });
                    seriesSection.classList.remove('hidden');
                });
                typeList.appendChild(typeItem);
            });
            typeSection.classList.remove('hidden');
        });
        companyList.appendChild(companyItem);
    });
});