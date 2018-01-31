# Today@Brown, Personalized

![Main view of the app](https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/000/579/875/datas/gallery.jpg)

Project for YHack 2017 by [David Hong](https://github.com/Oasiris), [Ken Cole](https://github.com/Naching), [Griffin Beels](https://github.com/griffinbeels), and Nate Goodman. See our hackathon-submitted DevPost [here](https://devpost.com/software/today-at-brown-node)!

Fast, responsive app for Brown University morning mail. Filter campus events by category and add them to your calendar in 1 click. Built in Node.js 8, Express, and Pug. Unfortunately, we ran out of time before we could implement the calendar functionality of this website, but we may add it in the near future!

## Origin

Brown University has traditionally sent out emails every morning containing detailed information about campus events, but recently it completely overhauled its system and made it cumbersome and unintuitive to use. All of a sudden, Brown students weren't reading the daily mail about Brown's most important campus events anymore. And that is a tragedy!

We wanted to remedy that experience and bring a clean, compact, and fully informative organization of Brown's events, every day, to Brown students on a single lightweight web page.

## Priorities

Our biggest priority was designing a space in which the news delivered by Brown's Today@Brown system would be communicated in a clean, no-hassle interface. Our two greatest ideas were as follows:

1. Each student should be able to choose what types of events they want to appear on their feed. No more tech students having their dashboard flooded with architecture and literary arts events! Students would receive quick access to the events they'd be most likely to attend.
2. Students would be able to add any on-campus event to their Google Calendar in one or two clicks. (We didn't end up finishing this feature.)

Our project is full-stack and hosted in Node.js. Try it out!

# Setup

If you've set up projects in Node before, this will be very familiar to you!

## Installation
Install Git and the latest version of Node 8.x.

## Running

In your command line/terminal, clone the repository. Navigate to the cloned repository and run the command:

```
npm install
```

Then, to run the server, enter:

```
node app.js
```

A console message that says `Now listening on *:3000` should pop up.

In any web browser, navigate to localhost:3000 to view the page.
