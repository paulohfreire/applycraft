import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const testDirectory = path.dirname(fileURLToPath(import.meta.url));
const repositoryRoot = path.resolve(testDirectory, '..', '..');
const websiteRoot = path.join(repositoryRoot, 'website');

test('mantém os caminhos da Vercel relativos à raiz website', async () => {
  const configPath = path.join(websiteRoot, 'vercel.json');
  const config = JSON.parse(await readFile(configPath, 'utf8'));

  assert.equal(config.installCommand, 'pnpm install --frozen-lockfile');
  assert.equal(config.buildCommand, 'pnpm build');
  assert.equal(config.outputDirectory, 'dist/applycraft-website/browser');

  for (const value of [config.installCommand, config.buildCommand, config.outputDirectory]) {
    assert.doesNotMatch(value, /(^|\s)website[\\/]/);
  }
});
