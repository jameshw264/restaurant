const load_tab_3 = () => {
    const container = document.getElementById('content');
    const tabs_section = document.createElement('div');
    const tabs_container = document.createElement('div');
    const tabs = document.createElement('ul');
    const tab_1 = document.createElement('li');
    const tab_2 = document.createElement('li');
    const tab_3 = document.createElement('li');
    const tabs_content = document.createElement('div');
    tabs_section.classList.add('tabs-section');
    tabs_container.classList.add('tabs-container');
    tabs.classList.add('tabs');
    tab_1.classList.add('tab-1', 'tab-item')
    tab_2.classList.add('tab-2','tab-item');
    tab_3.classList.add('tab-3', 'tab-item', 'tab-active');
    tabs_content.classList.add('tabs-content');
    tab_1.textContent = 'Tab 1';
    tab_2.textContent = 'Tab 2';
    tab_3.textContent = 'Tab 3';
    tabs_content.textContent = 'This is the textContent of tab 3';
    tabs.appendChild(tab_1);
    tabs.appendChild(tab_2);
    tabs.appendChild(tab_3);
    tabs_container.appendChild(tabs);
    tabs_section.appendChild(tabs_container);
    tabs_section.appendChild(tabs_content);
    container.appendChild(tabs_section);
}

export default load_tab_3;