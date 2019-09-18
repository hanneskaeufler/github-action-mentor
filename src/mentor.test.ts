import { default as mentor } from './mentor'

describe('#mentor', () => {
  it('posts a comment to the github pr', async () => {
    const api = { issues: { createComment: jest.fn() } };
    const event = { number: 1337, repository: { name: 'repo', owner: { login: 'owner'} } };

    mentor(api, event);

    expect(api.issues.createComment).toHaveBeenCalledWith({
      owner: 'owner',
      repo: 'repo',
      issue_number: 1337,
      body: expect.stringContaining("mentor"),
    });
  });

  it('comments with a mentor tip', async () => {
  });

  it('errors when the github webhook payload is not found', async () => {
  });

  it('only comments with tips for the given tags', async () => {
  });
});
