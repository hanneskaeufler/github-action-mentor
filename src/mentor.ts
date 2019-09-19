export default async function mentor(api, event) {
  if (await hasAlreadyCommented(api, event)) {
    return;
  }

  await postComment(api, event);
}

function issueParams(event) {
  return {
    owner: event['repository']['owner']['login'],
    repo: event['repository']['name'],
    issue_number: event['number'],
  }
}

async function hasAlreadyCommented(api, event) {
  const comments = await api.issues.listComments(issueParams(event));

  return comments.length > 0 && oneOfCommentsIsByMentor(comments);
}

function oneOfCommentsIsByMentor(comments) {
  for (let i = 0; i < comments.length; i++) {
    const comment = comments[i];
    console.log(comment);

    if (commentIsByMentor(comment)) {
      return true;
    }
  }
}

function commentIsByMentor(comment) {
  return comment['user']['login'] == 'github-actions' && /by mentor/.test(comment['body']);
}

async function postComment(api, event) {
  await api.issues.createComment({
    ...issueParams(event),
    body: 'Dude, a comment (by mentor)',
  })
}
