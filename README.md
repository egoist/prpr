# PrPr

**Pr**eload and **Pr**edict the future data. **WIP**

## So what is it?

Why should we always load remote data only when users make some actions? You can preload the data users may need when they enter a new page once the document is ready or some links are hovered. Then you replace the content with the data you fetched asynchronously.

But this is still **not** enough.

Because we use Single Page Applications a lot nowadays. SPA has its own router system, you can't just simply replace the content with new data(html), that's too stupid.

Luckily we have **State** store in your view layers if you use some framework like React and Vue, we can just change the way replace html to just add state in views, that's very cool.

Again, this is not related to your data flow, nothing in common with those Flux things. Only thing It does and does well is preloading and predicting the future data.

## License

MIT.
