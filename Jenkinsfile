@Library("devops-pipeline-library") _

if (env.RELEASE == 'true') {
  releasePipeline{}
  nodeArtifactPipeline {}
} else {
    nodeArtifactPipeline {}
}