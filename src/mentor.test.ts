import { default as mentor } from "./mentor"

const mockApi = () => {
  return {
    issues: {
      createComment: jest.fn(),
      listComments: jest.fn(),
    },
  }
}

const sampleEvent = {
  number: 1337,
  repository: { name: "repo", owner: { login: "owner" } },
}

describe("#mentor", () => {
  it("posts a comment to the github pr", async () => {
    const api = mockApi()
    api.issues.listComments.mockResolvedValueOnce({ data: [] })

    await mentor(api, sampleEvent)

    expect(api.issues.createComment).toHaveBeenCalledWith({
      owner: "owner",
      repo: "repo",
      issue_number: 1337,
      body: expect.stringContaining('<p data-source="mentor">'),
    })
  })

  it("doesnt comment a second time if there is already a mentor comment", async () => {
    const api = mockApi()
    api.issues.listComments.mockResolvedValueOnce({
      data: [{ body: '<p data-source="mentor">Hi there</p>' }],
    })

    await mentor(api, sampleEvent)

    expect(api.issues.createComment).not.toHaveBeenCalled()
  })

  it("posts if none of the comments are by mentor", async () => {
    const api = mockApi()
    api.issues.listComments.mockResolvedValueOnce({
      data: [{ body: "whatever" }],
    })

    await mentor(api, sampleEvent)

    expect(api.issues.createComment).toHaveBeenCalled()
  })

  it("errors when the github webhook payload is not found", async () => {})

  it("only comments with tips for the given tags", async () => {})
})
