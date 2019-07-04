const formatRepoUrl = require('./formatter.js')

const input = 'leonampd/myRepo'
const expectedGhBaseUrl = 'https://github.com'

describe('Can parse user input', () => {
  it('can format input (owner/repo) to github repo url', () => {
    const url = formatRepoUrl(input)
    expect(url).toBe(`${expectedGhBaseUrl}/leonampd/myRepo`)
  })

  it('can format PR input to github pull request\'s url', () => {
    const prUrl = formatRepoUrl(`${input}#123`)
    expect(prUrl).toBe(`${expectedGhBaseUrl}/leonampd/myRepo/pull/123`)
  })

  it('can format issue input to github issue\'s url', () => {
    const prUrl = formatRepoUrl(`${input}:123`)
    expect(prUrl).toBe(`${expectedGhBaseUrl}/leonampd/myRepo/issue/123`)
  })

  it('can format PR input to github pull requests list page', () => {
    const prUrl = formatRepoUrl(`${input}#ls`)
    expect(prUrl).toBe(`${expectedGhBaseUrl}/leonampd/myRepo/pulls`)
  })

  it('can format issue input to github issue\'s url', () => {
    const prUrl = formatRepoUrl(`${input}:ls`)
    expect(prUrl).toBe(`${expectedGhBaseUrl}/leonampd/myRepo/issues`)
  })
})
