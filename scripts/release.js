// @ts-check

const fs = require("fs")
const path = require("path")
const spawnSync = require("child_process").spawnSync
const chalk = require("chalk").default
const awaitPreviousBuilds = require("./await-previous-builds")

function sh(command, canFail = false) {
  console.log("$ " + command)
  const task = spawnSync(command, { shell: true, stdio: "inherit" })
  if (!canFail && task.status != 0) {
    console.log(String(task.stdout))
    console.error(chalk.red(String(task.stderr)))
    throw new Error("[!] " + command)
  }
}

function publishPodspec(podspec) {
  const podspecFilename = path.basename(podspec)
  const podspecDir = path.dirname(path.resolve(podspec))
  const packagePath = path.join(podspecDir, "package.json")

  const name = path.basename(podspec, ".podspec")
  const version = JSON.parse(fs.readFileSync(packagePath).toString()).version

  const specRepo = path.join(process.env.HOME, ".cocoapods/repos/artsy")
  const relativeSpecPath = path.join(name, version, name + ".podspec.json")
  const specPath = path.join(specRepo, relativeSpecPath)

  if (!fs.existsSync(specPath)) {
    console.log("=> Pushing " + name + " podspec to spec-repo.")
    sh("mkdir -p " + path.dirname(specPath))
    sh("cd " + podspecDir + ' && INCLUDE_METADATA="true" pod ipc spec ' + podspecFilename + " > " + specPath)
    sh(
      "cd " +
        specRepo +
        " && git pull " +
        " && git add " +
        relativeSpecPath +
        ' && git commit -m "' +
        name +
        " " +
        version +
        '" && git push'
    )
  }
}

async function main() {
  await awaitPreviousBuilds()

  console.log(chalk.green("=> Validating your tools."))
  sh("bundle --version")
  sh("npm --version")

  console.log(chalk.green("=> Updating changelog."))
  sh("yarn run auto changelog --very-verbose")

  console.log(chalk.green("=> Creating release bundle."))
  sh("npm run relay")
  sh("npm run bundle")
  sh("cd Example && bundle exec pod install")
  sh('git add . && git commit -m "[Pod] Update release artefacts. [skip ci]"', true)

  console.log(chalk.green("=> Creating version bump commit and tag."))
  sh(`npm version $(npx auto version) --message '%s [skip ci]'`)

  sh("git push --set-upstream origin $(git rev-parse --abbrev-ref HEAD)")
  sh("git push --tags")

  sh("yarn run auto release --very-verbose")

  console.log(chalk.green("=> Pushing Podspec"))
  publishPodspec("Emission.podspec")

  console.log(chalk.green("=> Updating Metaphysics and eigen"))
  sh("npm run update-metaphysics-and-eigen")
}

main().catch(e => {
  console.error(e)
  process.exit(1)
})
