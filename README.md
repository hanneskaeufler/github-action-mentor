[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# GitHub Action Mentor

> Level up your programming skills by getting bite-sized tips and tricks in your pull requests.

## Usage

In your workflow file, use mentor e.g. like:

```yml
    - uses: hanneskaeufler/github-action-mentor@v1.0.2
      if: github.event_name == 'pull_request'
      with:
        githubToken: ${{ secrets.GITHUB_TOKEN }}
```
