const core = require('@actions/core');
const exec = require('@actions/exec');

async function run() {
  try {
    // Clone the repository and check out the gh-pages branch
    await exec.exec('git', ['clone', '--single-branch', '--branch', 'gh-pages', '--depth', '1', 'https://github.com/username/repo.git', './repo']);
    await exec.exec('cd', ['./repo']);

    // Remove old build files
    await exec.exec('rm', ['-rf', './*']);

    // Copy new build files
    await exec.exec('cp', ['-r', '../build/*', './']);

    // Commit and push the new files to gh-pages branch
    await exec.exec('git', ['config', '--global', 'user.name', 'GitHub Actions']);
    await exec.exec('git', ['config', '--global', 'user.email', 'actions@github.com']);
    await exec.exec('git', ['add', '.']);
    await exec.exec('git', ['commit', '-m', 'Deploy React app to GitHub Pages']);
    await exec.exec('git', ['push', 'origin', 'gh-pages']);

    core.setOutput('status', 'success');
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
