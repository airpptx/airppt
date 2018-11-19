### Project Overview

Wouldn't it be great if we could use a slideshow canvas as WSIWYG editor to rapidly design and ship UIs or start coding?

Airppt was built from the ground up to utilize the design elements of PPT presentations and reuse them anywhere. It is built with modularity, extensibility and flexibility in mind whilst abstracting a lot of the complexity. It's **not** a direct PPTX -> HTML converter; more like PPTX -> JSON -> HTML instead.

I'd also love for you to contribute. New to open source? I'm happy to walkthrough how to close your first issue. Pick a [time](https://goo.gl/forms/7NjFEYayLOuYdr2q1) that works best for you.

# Airppt CLI

Utilize the Airppt CLI to work with Powerpoint files anywhere and not touch a line of code. Just pass in your filepath and the slide number, by default, and 'output' directory will be created.

I still need to configure it as an npm package for CLI work.

## Usage

Point to the powerpoint, and say the slide number. Watch the magic unravel in the output folder.

```
git clone <this repo>
npm run build
cd js
node main.js -i "/Users/raviteja_lingineni/Documents/Projects/airppt-all/samples/apps.pptx" -s 7
```
