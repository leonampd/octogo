import formatRepoUrl from './formatter'

chrome.omnibox.onInputEntered.addListener((input) => {
  const ghUrl = formatRepoUrl(input)
  chrome.tabs.update({ url: ghUrl })
})
