const parse = (input) => {
  const prPageRegex = /#\d+$/
  const issuePageRegex = /:\d+$/
  const prListPageRegex = /#ls$/
  const issueListPageRegex = /:ls$/

  if (prPageRegex.exec(input)) {
    return input.replace('#', '/pull/')
  }

  if (issuePageRegex.exec(input)) {
    return input.replace(':', '/issue/')
  }

  if (prListPageRegex.exec(input)) {
    return input.replace('#ls', '/pulls')
  }

  if (issueListPageRegex.exec(input)) {
    return input.replace(':ls', '/issues')
  }

  return input
}

module.exports = (input) => {
  const path = parse(input)
  return `https://github.com/${path}`
}
