//Create a function to open the new tab
function newTab(info,tab)
{
  const { menuItemId } = info

  if (menuItemId === 'anyName'){
    chrome.tabs.create({
      url: "https://www.google.com/search?q=" + info.selectionText.trim()
    })}};

//Create context menu options.

chrome.contextMenus.create({
  title: "Google: '%s' ",
  id: "anyName",
  contexts: ["selection"]
});


//This tells the context menu what function to run when the option is selected

chrome.contextMenus.onClicked.addListener(newTab);