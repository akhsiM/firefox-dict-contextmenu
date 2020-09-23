browser.contextMenus.create({
    id: "onelook-lookup",
    title: "Onelook Lookup",

    contexts: ["selection"]
});

browser.contextMenus.onClicked.addListener(async function (info, tab){
    if (info.menuItemId == "onelook-lookup") {
        if(info.selectionText) {
            browser.tabs.create({
                'active': false,
                'index': tab.index+1,
                'url': `https://onelook.com/?w=${info.selectionText}`

            });
        }
    }
})