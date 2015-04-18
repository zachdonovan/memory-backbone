# Memory
A memory game implementation!

# How To Install

```
git clone git@github.com:zachdonovan/memory-backbone.git
cd memory-backbone
npm install
```

run tests with `npm test`.

after making modifications, recompile with `npm run-script compile`.


# Architecture

The core architecture of the application consists of five models,
one collection, one view, and a little bit of glue.

### The Models
- *game.js* - the core game loop and key boundary condition data.
- *guess.js* - a repeated-use encapsulation of the core guessing logic.
- *card.js* - a very simple model for
tracking the state of individual tiles.
- *player.js* - another simple model, for tracking
characteristics of the player between individual rounds.
- *settings.js* - a single place to store details about the setup for the game.

### The Collection
- *cardCollection.js* - this collection keeps track of all of the tiles
on the screen, for large scale manipulation (such as a restart).

### The View
- *cardView.js* - the individual tile - takes advantage of Backbone's component
shorthands (tagName, className) to construct the buttons without requiring a
template.
- *gameView.js* - a stub view, currently just containing the restart button.

### Glue
- *cardFactory.js* - this is a simple generator function that consumes a
settings object and returns the set of cards to begin play.
- *app.js* - initialize all of the desired game objects, create views for
all the cards, and render on document ready.
- _Backbone.trigger_ - throughout the application, you'll notice the use
of Backbone as an application-wide event bus. This is fine for small apps,
but for larger ones a module-level event bus might be best (e.g.,
`GuessBus = _.extend({}, Backbone.Events)`.


# Feature Ideas
1. Time Attack
2. Punishment Mode (swap cards on incorrect guess)
3. Different Backs
4. Theming
5. Parameterized Cards
6. Localstorage
7. Color Wheel colorization

# TODO
1. More Tests
2. More Documentation
3. Styles ;)
