const random = require('random');

module.exports.randomChoice = function(args) {
    const randomIdx = random.int(0, args.length - 1);
    return args[randomIdx];
}
