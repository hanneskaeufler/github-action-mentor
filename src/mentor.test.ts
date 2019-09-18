import { default as mentor } from './mentor'

const mockApi = () => {
  return {
    issues: {
      createComment: jest.fn(),
      listComments: jest.fn()
    }
  };
}

const sampleEvent = { number: 1337, repository: { name: 'repo', owner: { login: 'owner'} } };

describe('#mentor', () => {
  it('posts a comment to the github pr', async () => {
    const api = mockApi();
    api.issues.listComments.mockReturnValueOnce([]);

    await mentor(api, sampleEvent);

    expect(api.issues.createComment).toHaveBeenCalledWith({
      owner: 'owner',
      repo: 'repo',
      issue_number: 1337,
      body: expect.stringContaining("by mentor"),
    });
  });

  it('doesnt comment a second time if there is already a mentor comment', async () => {
    const api = mockApi();
    api.issues.listComments.mockReturnValueOnce([{ body: 'by mentor', user: { login: 'github-action' } }]);

    await mentor(api, sampleEvent);

    expect(api.issues.createComment).not.toHaveBeenCalled();
  });

  it('posts if none of the comment is by mentor', async () => {
    const api = mockApi();
    api.issues.listComments.mockReturnValueOnce([{ body: 'whatever', user: { login: 'someone' } }]);

    await mentor(api, sampleEvent);

    expect(api.issues.createComment).toHaveBeenCalled();
  });

  it('comments with a mentor tip', async () => {
  });

  it('errors when the github webhook payload is not found', async () => {
  });

  it('only comments with tips for the given tags', async () => {
  });
});
