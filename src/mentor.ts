const GITHUB_ACTIONS_USERNAME = "github-actions[bot]"
const MENTOR_COMMENT_IDENTIFICATION = /by mentor/

export default async function mentor(api, event) {
  if (await hasAlreadyCommented(api, event)) {
    return
  }

  await postComment(api, event)
}

async function hasAlreadyCommented(api, event): Promise<Boolean> {
  const response = await api.issues.listComments(issueParams(event))

  return response.data.length > 0 && oneOfCommentsIsByMentor(response.data)
}

async function postComment(api, event) {
  await api.issues.createComment({
    ...issueParams(event),
    body: '<p data-source="mentor">Dude, a comment</p>',
  })
}

function issueParams(event) {
  return {
    owner: event["repository"]["owner"]["login"],
    repo: event["repository"]["name"],
    issue_number: event["number"],
  }
}

function oneOfCommentsIsByMentor(comments): Boolean {
  for (let i = 0; i < comments.length; i++) {
    const comment = comments[i]

    if (commentIsByMentor(comment)) {
      return true
    }
  }

  return false
}

function commentIsByMentor(comment): Boolean {
  return (
    comment["user"]["login"] == GITHUB_ACTIONS_USERNAME &&
    MENTOR_COMMENT_IDENTIFICATION.test(comment["body"])
  )
}
