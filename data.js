var $app = document.querySelectorAll('.app');
var getRandom = function () {
    var opts = [60, 80, 100, 120, 160, 300];
    var random = Math.floor(Math.random() * opts.length);
    return opts[random]
}
var getImageUrl = function (n) {
    return `https://fakeimg.pl/${getRandom()}x${getRandom()}?text=${n}`;
}

var render = function (node) {
    var html = [];
    for (var i = 0; i < 12; i++) {
        html.push(`<div class="item"><img src="${getImageUrl(i)}" alt=""></div>`)
    }

    node.insertAdjacentHTML('beforeend', html.join(''));
}

$app.forEach(render);