## About

This is a simple example of a http graphql server with Typescript and apollo. 

| Category  | Pro | Cons |
| ------------- | ------------- | ------------- |
| Language<br />(TypeScript)  | - [Widely Excepted](https://trends.google.com/trends/explore?geo=US&q=%2Fm%2F02p97,%2Fm%2F07sbkfb,%2Fm%2F05z1_,%2Fm%2F03yb8hb) in dev community <br />- [Type Safe](https://en.wikipedia.org/wiki/Type_safety) <br />- [npm](https://www.npmjs.com/) (350,000+ packages) <br /> - Instant hot reload on save   |  - Async coding nuances for new JS learners  |
| Pure<br />(1 Prerequisite)  | - Only prerequisite is Node/NPM <br /> - Dev on any major OS (OSX, *nix, Windows, etc.) <br /> - No addition configuration for new devs <br /> - Good software principles of demarkation points for apps <br /> - Quick, repeatable dev patters <br /> - Enforce clean code with auto linters | - Restricted to Node  |

List of other cool features thrown in:
- [Auto code formatting](https://prettier.io/docs/en/)
- [Git Coventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#summary)
    - automatic changelog and versioning with easy filtering/finding
- [Tests, Setup and Hooks Autorun](https://www.npmjs.com/package/husky)
    - TODO finish setting up auto install and possibly swap NVM to prerequisites
- [CI tools that will report to git automatically](https://circleci.com/)
- [GraphQLI out of the box for free](https://www.apollographql.com/docs/apollo-server/#:~:text=Apollo%20Server%20provides%3A,you%20to%20ship%20features%20faster)
- Use an IDE of your choice, recommended [Visual Studio Code](https://code.visualstudio.com/) or [IntelliJ](https://www.jetbrains.com/idea/) for prettier and file watcher autoformat plugins among others
    
## Prerequisites
- [Node v10+/NPM v6+](https://nodejs.org/en/)

## Learning Curve
### Things you need to know
- :white_check_mark: JavaScript <br />

### Things you dont need to know
- :x:  *nix <br />
- :x: A specific integrated development environment or work environment (any works)  <br />

### Other requested changes
- Remove verbs from graphQL external interface
    - ie. `getOrder` should be `order` since it is already in a query and can be reused

## Included

The following development dependencies are included:

- [typescript](https://github.com/Microsoft/TypeScript)
- [graphql-codegen](https://github.com/dotansimha/graphql-code-generator)
- [prettier](https://github.com/prettier/prettier)
- [commitlint](https://github.com/marionebl/commitlint)
- [tslint](https://github.com/palantir/tslint)
- [husky](https://github.com/typicode/husky)
- [editorconfig](https://editorconfig.org/)

## Adding new (type safe) resolvers

Because we want to have type safe resolvers, it's the easiest to create new resolvers in order described below.

#### Type definitions

When adding new resolvers you should start with adding the `typeDefs` in your (new) `resolver.ts` file like following:

```ts
export const typeDefs = grapql`
  type Example {
    id: Int!
  }

  type Query {
    example(id: Int!): Example!
  }
`;
```

#### Generating types

The next step is updating the generated types like following:

```bash
$ npm run generate:types
```

#### Provider

After this you could create your update your (new) `provider.ts` file like following:

```ts
import { QueryExampleArgs } from './generated/graphql';

export class ExampleAPI extends RestDataSource {
  // ... constructor

  public async getExample(args: QueryExampleArgs) {
    // ... use typed args to return result
  }
}
```

**NOTE:** When adding a new provider you'll have to update the **context** in the `index.ts` file.

#### Resolvers

Finally you could create your typed resolvers in the `resolvers.ts` file like following:

```ts
import { IResolvers } from './generated/grapql';

export const resolvers: IResolvers = {
  Query: {
    example: (_, args, ctx) => ctx.dataSources.ExampleAPI.getExample(args)
  }
};
```
