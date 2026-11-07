# Portable conversion format two

Extract into a new checkout of original commit f97b18759178bd22cbd88062edcff6c308652342. Retain upstream licensing/attribution. No source archive, hosted session, model credentials or database is included. Node 22 is required. Core and verifier are plain JavaScript without TypeScript; the separately identified source adapter carries TypeScript only for integration. Tool versions, raw/distribution sizes, dependency graphs, notices and checksums are under intentional/tools/.

From the checkout root:

    node intentional/tools/intentional.cjs validate .
    node intentional/tools/intentional.cjs simulate . ENTRY ARGUMENTS_JSON
    node intentional/tools/intentional.cjs emit . NEW_EMISSION_DIRECTORY
    node intentional/tools/intentional.cjs generate .
    node intentional/tools/intentional.cjs verify . --archive ../original-source.tar.gz --image sha256:RUNNER_IMAGE_ID --network intentional-local-install --proxy http://registry-proxy:3128 --output ../new-comparison.json

Core validate/simulate/emit work without typescript-source.cjs or node_modules. Generate requires the optional trusted source adapter and refreshes a sealed prepared implementation record. It preserves signatures/hooks and refuses unexpected source changes. Verification consumes that record without loading the adapter. It requires the full Git checkout to contain the pinned original commit, validates the exact changed-file allowlist, and includes all those changed files in the candidate. Unknown intentional/ files, changed expectations, stale output and tampering are refused.

For an explicitly narrower prepared-component comparison, use verify-prepared with the same directory/options. It checks the sealed selected files and full original/candidate repository execution in containers, but does not evaluate unrelated working-tree changes. Its report states that scope; it does not establish full-checkout or clean-checkout reproduction.

Reuse the archive with SHA-256 f9219bafeca7d917e201c6ec2b04e8bb1596e24d4eda40ae9760113f45336705 and its recorded provenance sidecar. Local Docker requires the configured immutable runner image, internal registry-only install network and proxy. Builds/tests run without network in separate disposable containers. No LLM or fresh npm install is required by these exported tools. See portable.json for the source URL, independent corpus hashes, seeds, build commands and exclusions.

The language/program/projection/provenance/scenario/recovery files are canonical; bundle.json and generated code are derived. New scenarios require a reviewed export; independent baseline expectations are not rewritten. Scenario agreement is not formal equivalence.

Format one is never silently replaced. Export into a new directory with migrate:portable, or explicitly accept migration in the workbench; old packages and Git checkpoints remain available. Local generation changes checkout files. Pushing them to a workbench-managed branch requires reviewed synchronization. No merging, publishing, deployment or infrastructure provisioning is performed.
