var wheelItems = [],
    wheelChances = [];

var arrayShuffle = function(array) {
    for ( var i = 0, length = array.length, swap = 0, temp = ''; i < length; i++ ) {
        swap        = Math.floor(Math.random() * (i + 1));
        temp        = array[swap];
        array[swap] = array[i];
        array[i]    = temp;
    }
    return array;
};

var percentageChance = function(values, chances) {
    for ( var i = 0, pool = []; i < chances.length; i++ ) {
        for ( var i2 = 0; i2 < chances[i]; i2++ ) {
            pool.push(i);
        }
    }
    return values[arrayShuffle(pool)['0']];
};

var reset = function(wheelTrigger) {
    var wheelBoxes = wheelTrigger.parent().parent().find('.row > div'),
        wheel = wheelTrigger.parent().parent().parent(),
        gainWrapper = wheel.find('.gains .counter');

    wheelBoxes.each(function() {
        $(this).removeClass('disabled selected');
    });

    wheel.find('.total-spins .spins .counter').html('0');
    wheel.find('.total-spins .tokens .counter').html('0');

    gainWrapper.html('0');
}

$(document).on('click', '.reset', function() {
    reset($(this));
});

$(document).on('click', '.switch', function() {
    $('.wheel-wrapper > div').removeClass('active');
    $('.wheel-wrapper .'+$(this).attr('data-target')).addClass('active')
});

$(document).on('click', '.trigger', function() {
    wheelItems = [];
    wheelChances = [];
    var counter = 0,
        wheelBoxes = $(this).parent().parent().find('.row > div'),
        gainWrapper,
        wheel = $(this).parent().parent().parent();

    wheelBoxes.removeClass('selected');
    $('.results .jumbotron').append('<br />');

    wheelBoxes.each(function() {
        if (!$(this).hasClass('disabled')) {
            wheelItems[counter] = $(this).attr('data-code');
            wheelChances[counter] = $(this).attr('data-chance');
            counter++;
        }
    });

    for (i = 0; i <= 9; i++) {
        item = percentageChance(wheelItems, wheelChances);
        gainWrapper = $('.gains .'+item+' .counter');
        console.log($('.wheel-items .'+item).attr('data-amount'));

        if (item === 'main-hero' || item === 'equip-3' || item === 'equip-2' || item === 'shard' || item === 'adv-main-hero' || item === 'adv-shard') {
            $(this).parent().parent().find('.'+item).addClass('disabled');
        }

        $('.wheel-items .'+item).addClass('selected');
        gainWrapper.html(parseInt(gainWrapper.html()) + parseInt($('.wheel-items .'+item).attr('data-amount')));
        $('.results .jumbotron').append($('.'+item).html()+' / ');
    }

    if (wheel.hasClass('normal-wheel')) {
        $('.normal-wheel .total-spins .spins .counter').html(parseInt($('.normal-wheel .total-spins .spins .counter').html()) + parseInt(10));
        $('.normal-wheel .total-spins .tokens .counter').html(parseInt($('.normal-wheel .total-spins .tokens .counter').html()) + parseInt(8));
    } else {
        $('.adv-wheel .total-spins .spins .counter').html(parseInt($('.adv-wheel .total-spins .spins .counter').html()) + parseInt(10));
        $('.adv-wheel .total-spins .tokens .counter').html(parseInt($('.adv-wheel .total-spins .tokens .counter').html()) + parseInt(10));
    }

});

