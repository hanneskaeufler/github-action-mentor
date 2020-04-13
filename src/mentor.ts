import AllTips from "./all_tips"
import RandomTip from "./random_tip"

const MENTOR_COMMENT_IDENTIFICATION = /Posted by.+Mentor/
const SIGNATURE =
  '<p align="right">👩🏾‍🏫 Posted by <a href="https://github.com/hanneskaeufler/github-action-mentor">Mentor</a></p>'

export default async function mentor(api, event) {
  if (await hasAlreadyCommented(api, event)) {
    return
  }

  await postRandomTipComment(api, event)
}

async function hasAlreadyCommented(api, event): Promise<Boolean> {
  const response = await api.issues.listComments(issueParams(event))

  return response.data.length > 0 && oneOfCommentsIsByMentor(response.data)
}

async function postRandomTipComment(api, event) {
  await api.issues.createComment({
    ...issueParams(event),
    body: `${RandomTip(AllTips(), []).toMarkdown()}
    ${SIGNATURE}`,
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
  return MENTOR_COMMENT_IDENTIFICATION.test(comment["body"])
}
