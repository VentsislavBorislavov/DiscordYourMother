module.exports.shouldReply = function(content, args) {
    if (typeof args === 'string') {
        return content.toLowerCase().includes(args);
    }

    for (const idx in args) {
        if (content.toLowerCase().includes(args[idx]))
            return true;
    }

    return false
}