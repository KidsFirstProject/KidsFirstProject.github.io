# Kids First Project Website

This is the website for the Kids First Project non-profit organization

## Contributing

Pull requests are welcomed, and must be reviewed by the owner before being merged.

### Tech Stack

#### Frameworks

* React (Create React App)

#### Component Library

* React Bootstrap

### Required

`node` - `14.16.0+`
`npm` - `6.14.11` (NPM 7+ has issues installing babel from CRA, so we're forced to use this version)

### Getting Started

Install the project

```bash
npm install
```

Run the dev build locally

```bash
npm start
```

Run tests

```bash
npm test
```

### Code Quality

```bash
npm run lint:fix
npm run pretty
```

### Deployment

```bash
npm deploy
```

## Design Decisions

### Bootstrap

I originally wrote this website in college, when I was first starting out with learning about web technologies. The original site was my first project using purely HTML, CSS and the Bootstrap CSS framework. At the time I picked Bootstrap since it was beginner friendly and appealed to my aesthetic. Since then in order to maintain the same look and feel of the site, I've continued using Bootstrap as the sole component library.

### React

I have more experience with React than other frameworks like Vue or Angular. I wanted to move away from the old HTML/CSS files to something else before a fairly large feature request, so I decided to stick with a framework I had experience with instead of learning something new.

### Redesign

The original setup for the website was extremely barebones and fairly poorly written due to it being my first foray into web. Each page had its own file that included everything (head, body, navbar, etc) which made it an absolute nightmare to update. Each year I'd have to update 50+ files to switch the copyright date at the bottom since I didn't have any Javascript outside of what Bootstrap used. Each time I updated the navbar, I'd have to change 50+ pages. And each blog post required me to shift posts through each page (since each page was a separate file).

Updates were fairly infrequent though, so I put up with it for a while, but eventually I got asked to make a fairly large update to the site (adding multiple sections), and I decided to sit down and rewrite everything to simplify as much as I could.

### Content Storage

I looked through a lot of CMS options so that I could simplify how I query for content, move the responsbility of creating content entries away from myself, and to remove the need for deployments. There's a lot of solid options out there, however given the current rate of updates and my budget of approximately nothing, I figured the best option would be to just create something myself.

As a result I'm storing all the entries in the code itself. I tried to keep it as similar to a headless CMS setup as possible, so that in the future I can easily swap if needed.
