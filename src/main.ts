import * as core from '@actions/core';
import * as github from '@actions/github';
import * as fs from 'fs';

async function run() {
  const api = new github.GitHub(core.getInput('githubToken', { required: true }));

  const event = JSON.parse(
    fs.readFileSync(
      process.env['GITHUB_EVENT_PATH'] || '',
      { encoding: 'UTF-8' }
    )
  );

  api.pulls.get({
    owner: event['repository']['owner']['login'],
    repo: event['repository']['name'],
    pull_number: event['number'],
  })
  .then((pull) => {
    console.log(pull);
  })
  .catch((err) => {
    console.log('did not find pull ' + err);
  });
}

run();
