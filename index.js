// index.js
const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  try {
    const branch = core.getInput('branch');
    const folder = core.getInput('folder');

    core.info(`Pretending to deploy folder "${folder}" to branch "${branch}"...`);
    // In real usage, you'd run deploy logic here
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
