import * as core from '@actions/core';
import * as github from '@actions/github';
import * as fs from 'fs';

async function run() {
  const api = new github.GitHub(core.getInput('githubToken', { required: true }));
  const event = process.env['GITHUB_EVENT_PATH'] || '';

  console.log(event);

  const file = fs.readFileSync(event, { encoding: 'UTF-8' });
  console.log(file);

  console.log(api.pulls.get({
    owner: '',
    repo: '',
    pull_number: 1,
  }));
}

run();
