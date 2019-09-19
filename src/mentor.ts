const GITHUB_ACTIONS_USERNAME = "github-actions"

export default async function mentor(api, event) {
  if (await hasAlreadyCommented(api, event)) {
    return
  }

  await postComment(api, event)
}

async function hasAlreadyCommented(api, event): Promise<Boolean> {
  const comments = await api.issues.listComments(issueParams(event))
  console.log(comments)

  return comments.length > 0 && oneOfCommentsIsByMentor(comments)
}

async function postComment(api, event) {
  await api.issues.createComment({
    ...issueParams(event),
    body: "Dude, a comment (by mentor)",
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
  return comment["user"]["login"] == GITHUB_ACTIONS_USERNAME && /by mentor/.test(comment["body"])
}
