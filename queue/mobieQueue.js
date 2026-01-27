const Queue = [];

exports.addToQueue = (movie) => {
  Queue.push(movie);
};

setInterval(async () => {
  if (Queue.length) {
    const movie = Queue.shift();
    await Movie.create(movie);
  }
}, 5000);
