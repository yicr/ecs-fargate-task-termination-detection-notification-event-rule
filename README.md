# AWS ECS Fargate task termination detection notification event rule

This an AWS ECS Fargate task termination detection Event Rule.

## Install

### TypeScript

```shell
npm install @gammarer/aws-ecs-fargate-task-termination-detection-event-rule
# or
yarn add @gammarer/aws-ecs-fargate-task-termination-detection-event-rule
```

### Python

```shell
pip install gammarer.aws-ecs-fargate-task-termination-detection-event-rule
```

### Java

Add the following to pom.xml:

```xml
<dependency>
  <groupId>com.gammarer</groupId>
  <artifactId>aws-ecs-fargate-task-termination-detection-event-rule</artifactId>
</dependency>
```

## Example

```typescript
import { EcsFargateTaskTerminationDetectionEventRule } from '@gammarer/aws-ecs-fargate-task-termination-detection-event-rule';

const clusterArn = 'arn:aws:ecs:us-east-1:123456789012:cluster/example-app-cluster';

const rule = new EcsFargateTaskTerminationDetectionEventRule(stack, 'EcsFargateTaskTerminationDetectionEventRule', {
  ruleName: 'example-event-rule',
  description: 'example event rule.',
  clusterArn,
});

```