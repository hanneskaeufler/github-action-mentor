export default function mentor(api, event) {
  api.issues.createComment({
    owner: event['repository']['owner']['login'],
    repo: event['repository']['name'],
    issue_number: event['number'],
    body: 'Dude, a comment (mentor)',
  })
}
