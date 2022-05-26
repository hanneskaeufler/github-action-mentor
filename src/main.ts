import * as core from "@actions/core"
import * as github from "@actions/github"
import * as fs from "fs"
import { default as mentor } from "./mentor"

async function run() {
  const api = github.getOctokit(core.getInput("githubToken", { required: true }))

  const event = JSON.parse(
    fs.readFileSync(process.env["GITHUB_EVENT_PATH"] || "", {
      encoding: "utf-8",
    })
  )

  await mentor(api, event)
}

run()
