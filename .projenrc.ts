import { awscdk, javascript } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'yicr',
  authorAddress: 'yicr@users.noreply.github.com',
  cdkVersion: '2.62.2',
  defaultReleaseBranch: 'main',
  name: '@yicr/ecs-fargate-task-termination-detection-event-rule',
  description: 'This an AWS ECS Fargate task termination detection Event Rule.',
  keywords: ['aws', 'cdk', 'aws-cdk', 'event', 'rule', 'ecs', 'fargate'],
  projenrcTs: true,
  repositoryUrl: 'https://github.com/yicr/ecs-fargate-task-termination-detection-event-rule.git',
  npmAccess: javascript.NpmAccess.PUBLIC,
  // deps: [],                /* Runtime dependencies of this module. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
    },
  },
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['yicr'],
  },
});
project.synth();