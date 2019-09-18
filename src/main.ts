import * as core from '@actions/core';
import * as github from '@actions/github';

async function run() {
  const api = new github.GitHub(core.getInput('githubToken', { required: true }));
  const event = process.env['GITHUB_EVENT_PATH'];

  console.log(event);
  console.log(api.pulls.get());
}

run();
