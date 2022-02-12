$(() => {
    $('#tabs > .tabs-container').dxTabs({
        dataSource: tabs,
        selectedIndex: 0,
        onItemClick(e) {
            // put the page text to page name element
            $('#page-name').text(tabs[e.itemData.id].text);
        },
    }).dxTabs('instance');
});
