![Photo by Rajarshi Bhadra on Unsplash](https://user-images.githubusercontent.com/2342458/204275668-5633905a-ef6f-41dd-a712-90ce1cf357b1.png)
# Kinsta - Hello World - Deno

An example of how to deploy a **Deno** application build on Kinsta.

---
Kinsta is a developer-centric cloud host / PaaS. We’re striving to make it easier for you to share your web projects with your users. Focus on coding and building, and we’ll take care of deployment and provide fast, scalable hosting. + 24/7 expert-only support.

- [Start your free trial](https://kinsta.com/signup/?product_type=app-db)
- [Application Hosting](https://kinsta.com/application-hosting)
- [Database Hosting](https://kinsta.com/database-hosting)

## Dependency Management

During the deployment process, Kinsta will automatically install dependencies defined in your `package.json` file.

## Web Server Setup

### Port

Kinsta automatically sets the `PORT` environment variable. You should **not** define it yourself and you should **not** hard-code it into the application.

### Start Command

When deploying an application Kinsta will automatically create a web process with `npm start` as the entry point. Make sure to use this command to run your server.

## Deployment Lifecycle

Whenever a deployment is initiated (through creating an application or re-deploying due to an incoming commit) the `npm build` command is run, followed by the `npm start` command.

## What is Deno
**Deno** is a JavaScript, TypeScript, and WebAssembly runtime with secure defaults and a great developer experience.

### Key Features
- **TypeScript out of the box:** First-class support for TypeScript – no need to spend hours configuring things that break as soon as you update a dependency.
- **Great all-in-one tooling:** Built-in linter, code formatter, ability to build a self-contained executable, test runner, IDE integration, and more.

More info on the [Deno.land](https://deno.land/) website.
