### Project Overview

Wouldn't it be great if we could use a slideshow canvas as WSIWYG editor to rapidly design and ship UIs or start coding?

Airppt was built from the ground up to utilize the design elements of PPT presentations and reuse them anywhere. It is built with modularity, extensibility and flexibility in mind whilst abstracting a lot of the complexity. It's **not** a direct PPTX -> HTML converter; more like PPTX -> JSON -> HTML instead.

I'd also love for you to contribute. New to open source? I'm happy to walkthrough how to close your first issue. Pick a [time](http://www.calendly.com/heyraviteja) that works best for you.

# Airppt CLI

Utilize the Airppt CLI to work with Powerpoint files anywhere and not touch a line of code. Just pass in your filepath and the slide number, by default, an 'output' directory will be created.

## Usage

```
npm install -g airppt
airppt -i ./sample.pptx --slide 1 -o ./mypage
```

Open an issue if something doesn't work. Not all Powerpoint Elements are supported, but keep checking the [list](https://airpptx.github.io/docs.html#limitations) for updates.
