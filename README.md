# Pavers React Developer Applicaton Form V1.0

**Live Version:** [https://tender-noether-a94d5c.netlify.app/](https://tender-noether-a94d5c.netlify.app/)

This is my first attempt, optimistically codenamed "Let's just get the damn thing to work, shall we?"

## Still To Do

- [] Tidy up scss file
- [] Add router and route to success/error page on form submission
- [] Write up full notes
- [] Maybe do some extra validation on inputs, eg. regex for alphanumeric only

  - ~~Thought process behind scss/modules/styled components~~
  - ~~Why I'm not using Redux~~
  - Areas for improvement

- [] Embed ContactForm component into a page

## Design Decisions

### CSS vs SCSS vs CSS Modules vs Styled Components

Given the size of the project and the fact that it's just a stand-alone app, I opted to go for SCSS rather than any of the other options, mostly just for the ability to nest selectors as I feel it keeps things pretty clean.

If the project was any larger, or had the potential to grow larger over time, I would probably have gone with CSS Modules to keep everything more contained and reusable (and because at this point in time I haven't used Styled Components enough to be entirely comfortable with them. It's on the list, though.)

### Why no Redux?

My plan when starting this project was just to get a working version using standard React state and then to incorporate Redux as I learned it. However, after looking into this, I found a number of people, including [one of the authors of Redux](https://github.com/reduxjs/redux/issues/1287#issuecomment-175351978) and [the authors of redux-form](https://github.com/redux-form/redux-form/#user-content-%EF%B8%8F-attention-%EF%B8%8F) advising against putting form state in Redux.

As the authors of redux-form put it, "The only good reason, in the author's view, to use Redux Form in your application is if you need really tight coupling of your form data with Redux, specifically if you need to subscribe to it and modify it from parts of your application far from your form component, e.g. on another route."

Making what I think is the fairly safe assumption that these people know quite a bit more than I do about this, I have chosen not to use Redux in this project.

(Honestly, this is not just an excuse to get out of learning Redux - it's next on the list)
