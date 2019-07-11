var threeStar = ['<span class="alliance">3-Axel</span>', '<span class="alliance">3-SwordBoy</span>', '<span class="alliance">3-Harun</span>',
    '<span class="alliance">3-Landlady</span>', '<span class="alliance">3-Rocket</span>', '<span class="horde">3-BigMouth</span>',
    '<span class="horde">3-Madda</span>', '<span class="horde">3-BatKing</span>', '<span class="horde">3-Skud</span>', '<span class="horde">3-Golem</span>',
    '<span class="elves">3-Robin</span>', '<span class="elves">3-FairyCat</span>', '<span class="elves">3-DragonFollower</span>', '<span class="elves">3-BoxingFrog</span>',
    '<span class="elves">3-Popoya</span>', '<span class="undead">3-Yu</span>', '<span class="undead">3-Joker</span>', '<span class="undead">3-Nightwraith</span>',
    '<span class="undead">3-CorvanMessenger</span>', '<span class="undead">3-Giott</span>', '<span class="heaven">3-HeavenGuard</span>', '<span class="hell">3-DarkMage</span>'];

var fourStar = ['<span class="alliance">4-SirConrad</span>', '<span class="alliance">4-LoneHero</span>', '<span class="alliance">4-BlueHat</span>',
    '<span class="alliance">4-Olivia</span>', '<span class="alliance">4-BattleFury</span>', '<span class="alliance">4-Paladin</span>',
    '<span class="alliance">4-BlackBeard</span>', '<span class="alliance">4-Radolf</span>', '<span class="horde">4-OrcWarrior</span>',
    '<span class="horde">4-Murloc</span>', '<span class="horde">4-Khalil</span>', '<span class="horde">4-WitchDoctor</span>', '<span class="horde">4-EagleEyeShaman</span>',
    '<span class="horde">4-Rlyeh</span>', '<span class="horde">4-Ogre</span>', '<span class="horde">4-ShamanAssasin</span>', '<span class="elves">4-MegaW</span>',
    '<span class="elves">4-Treant</span>', '<span class="elves">4-Werewolf</span>', '<span class="elves">4-Shaly</span>', '<span class="elves">4-ForestHealer</span>',
    '<span class="elves">4-MiKun</span>', '<span class="elves">4-Amy</span>', '<span class="elves">4-Rossetti</span>', '<span class="undead">4-Frankenstein</span>',
    '<span class="undead">4-PumpkinSoldier</span>', '<span class="undead">4-ChemicalButcher</span>', '<span class="undead">4-Forren</span>', '<span class="undead">4-Anubis</span>',
    '<span class="undead">4-CrowArcher</span>', '<span class="undead">4-PuppetMaid</span>', '<span class="undead">4-Exdeath</span>', '<span class="heaven">4-GoldenPastor</span>',
    '<span class="heaven">4-Morgenstern</span>', '<span class="heaven">4-HeavenJudge</span>', '<span class="hell">4-Belial</span>', '<span class="hell">4-Aurelle</span>',
    '<span class="hell">4-DarkJudge</span>'];

var fiveStarFodders = ['<b class="alliance">5-SirConrad</b>', '<b class="alliance">5-LoneHero</b>', '<b class="alliance">5-BlueHat</b>', '<b class="alliance">5-Olivia</b>',
    '<b class="alliance">5-BattleFury</b>', '<b class="alliance">5-Paladin</b>', '<b class="alliance">5-BlackBeard</b>', '<b class="alliance">5-Radolf</b>',
    '<b class="alliance">5-KingLionheart</b>', '<b class="alliance b-tier">5-Tesla</b>', '<b class="alliance">5-Samurai</b>',
    '<b class="horde">5-OrcWarrior</b>', '<b class="horde">5-Murloc</b>', '<b class="horde">5-Khalil</b>',
    '<b class="horde">5-WitchDoctor</b>', '<b class="horde">5-EagleEyeShaman</b>', '<b class="horde">5-Rlyeh</b>', '<b class="horde">5-Ogre</b>',
    '<b class="horde">5-ShamanAssasin</b>', '<b class="horde">5-WolfRider</b>', '<b class="horde">5-SwordMaster</b>',
    '<b class="horde b-tier">5-Minotaur</b>', '<b class="horde">5-AbyssLord</b>',
    '<b class="elves">5-MegaW</b>', '<b class="elves">5-Treant</b>', '<b class="elves">5-Werewolf</b>',
    '<b class="elves">5-Shaly</b>', '<b class="elves">5-ForestHealer</b>', '<b class="elves">5-MiKun</b>', '<b class="elves">5-Amy</b>', '<b class="elves">5-Rossetti</b>',
    '<b class="elves">5-Orphee</b>', '<b class="elves b-tier">5-Centaur</b>', '<b class="elves b-tier">5-TigerKing</b>', '<b class="elves">5-DemonFighter</b>',
    '<b class="undead">5-Frankenstein</b>', '<b class="undead">5-PumpkinSoldier</b>',
    '<b class="undead">5-ChemicalButcher</b>', '<b class="undead">5-Forren</b>', '<b class="undead">5-Anubis</b>', '<b class="undead">5-CrowArcher</b>', '<b class="undead">5-PuppetMaid</b>',
    '<b class="undead">5-Exdeath</b>', '<b class="undead b-tier">5-Hester</b>', '<b class="undead">5-Dziewona</b>', '<b class="undead">5-CursedOne</b>',
    '<b class="undead b-tier">5-Gerald</b>',
    '<b class="undead">5-Dettlaff</b>', '<b class="heaven">5-GoldenPastor</b>', '<b class="heaven">5-Morgenstern</b>', '<b class="heaven">5-HeavenJudge</b>',
    '<b class="hell">5-Belial</b>', '<b class="hell">5-Aurelle</b>', '<b class="hell">5-DarkJudge</b>'];

var fiveStar = ['<b class="alliance">5-SirConrad</b>', '<b class="alliance">5-LoneHero</b>', '<b class="alliance">5-BlueHat</b>', '<b class="alliance">5-Olivia</b>',
    '<b class="alliance">5-BattleFury</b>', '<b class="alliance">5-Paladin</b>', '<b class="alliance">5-BlackBeard</b>', '<b class="alliance">5-Radolf</b>',
    '<b class="alliance">5-KingLionheart</b>', '<b class="alliance b-tier">5-Tesla</b>', '<b class="alliance">5-Samurai</b>', '<b class="alliance a-tier">5-Mulan</b>',
    '<b class="alliance a-tier">5-SawMachine</b>', '<b class="alliance a-tier">5-Ultima</b>', '<b class="alliance a-tier">5-Vivienne</b>', '<b class="alliance a-tier">5-Martin</b>',
    '<b class="alliance epic">5-Valkyrie</b>', '<b class="horde">5-OrcWarrior</b>', '<b class="horde">5-Murloc</b>', '<b class="horde">5-Khalil</b>',
    '<b class="horde">5-WitchDoctor</b>', '<b class="horde">5-EagleEyeShaman</b>', '<b class="horde">5-Rlyeh</b>', '<b class="horde">5-Ogre</b>',
    '<b class="horde">5-ShamanAssasin</b>', '<b class="horde">5-WolfRider</b>', '<b class="horde">5-SwordMaster</b>', '<b class="horde a-tier">5-Scarlet</b>',
    '<b class="horde b-tier">5-Minotaur</b>', '<b class="horde">5-AbyssLord</b>', '<b class="horde a-tier">5-Medusa</b>', '<b class="horde a-tier">5-BloodTooth</b>',
    '<b class="horde a-tier">5-Lexar</b>', '<b class="horde epic">5-Phoenix</b>', '<b class="elves">5-MegaW</b>', '<b class="elves">5-Treant</b>', '<b class="elves">5-Werewolf</b>',
    '<b class="elves">5-Shaly</b>', '<b class="elves">5-ForestHealer</b>', '<b class="elves">5-MiKun</b>', '<b class="elves">5-Amy</b>', '<b class="elves">5-Rossetti</b>',
    '<b class="elves">5-Orphee</b>', '<b class="elves a-tier">5-Vegvisir</b>', '<b class="elves b-tier">5-Centaur</b>', '<b class="elves b-tier">5-TigerKing</b>', '<b class="elves">5-DemonFighter</b>',
    '<b class="elves a-tier">5-Grand</b>', '<b class="elves a-tier">5-Luna</b>', '<b class="elves epic">5-Drow</b>', '<b class="undead">5-Frankenstein</b>', '<b class="undead">5-PumpkinSoldier</b>',
    '<b class="undead">5-ChemicalButcher</b>', '<b class="undead">5-Forren</b>', '<b class="undead">5-Anubis</b>', '<b class="undead">5-CrowArcher</b>', '<b class="undead">5-PuppetMaid</b>',
    '<b class="undead">5-Exdeath</b>', '<b class="undead">5-Hester</b>', '<b class="undead">5-Dziewona</b>', '<b class="undead a-tier">5-Wolnir</b>', '<b class="undead">5-CursedOne</b>',
    '<b class="undead b-tier">5-Gerald</b>', '<b class="undead a-tier">5-Reaper</b>', '<b class="undead a-tier">5-Aden</b>', '<b class="undead a-tier">5-Ripper</b>', '<b class="undead epic">5-ShuddeMell</b>',
    '<b class="undead">5-Dettlaff</b>', '<b class="heaven">5-GoldenPastor</b>', '<b class="heaven">5-Morgenstern</b>', '<b class="heaven">5-HeavenJudge</b>', '<b class="heaven epic">5-Verthandi</b>',
    '<b class="heaven epic">5-NamelessKing</b>', '<b class="heaven epic">5-Mars</b>', '<b class="heaven epic">5-Lindberg</b>', '<b class="heaven epic">5-Skuld</b>', '<b class="hell">5-Belial</b>',
    '<b class="hell">5-Aurelle</b>', '<b class="hell">5-DarkJudge</b>', '<b class="hell epic">5-Freya</b>', '<b class="hell epic">5-MonkeyKing</b>', '<b class="hell epic">5-Chessia</b>',
    '<b class="hell epic">5-Xexanoth</b>'];

var upChest = ['<b class="alliance a-tier up-chest">5-Vivienne</b>', '<b class="elves a-tier up-chest">5-Luna</b>', '<b class="alliance a-tier up-chest">5-SawMachine</b>', '<b class="alliance b-tier up-chest">5-Ultima</b>',
    '<b class="undead a-tier up-chest">5-Reaper</b>', '<b class="alliance a-tier up-chest">5-Mulan</b>', '<b class="undead epic up-chest">5-ShuddeMell</b>', '<b class="elves a-tier up-chest">5-Vegvisir</b>',
    '<b class="hell epic up-chest">5-Freya</b>', '<b class="undead a-tier up-chest">5-Ripper</b>', '<b class="alliance a-tier up-chest">5-Martin</b>', '<b class="horde a-tier up-chest">5-Scarlet</b>',
    '<b class="elves a-tier up-chest">5-Grand</b>', '<b class="undead a-tier up-chest">5-Aden</b>', '<b class="horde a-tier up-chest">5-Lexar</b>', '<b class="undead a-tier up-chest">5-Wolnir</b>',
    '<b class="horde a-tier up-chest">5-Medusa</b>'];

var threeStarChance;
var fourStarChance;
var fiveStarChance;

var getRandomHero = function(array) {
    var hero = array[Math.floor(Math.random() * array.length)];
    var calc = Math.random() * 10;

    if (getDataListSelectedOption('upChest', 'upList') !== null && hero.includes('5-')) {
        if (calc <= 0.2) {
            hero = upChest[parseInt(getDataListSelectedOption('upChest', 'upList'))];
        } else if (calc <= 8.4) {
            hero = arrayShuffle(fiveStarFodders[Math.floor(Math.random() * fiveStarFodders.length)]);
        } else if (calc <= 9.4) {
            hero = arrayShuffle(fourStar[Math.floor(Math.random() * fourStar.length)]);
        } else {
            hero = arrayShuffle(threeStar[Math.floor(Math.random() * threeStar.length)]);
        }
    }

    if (hero.includes("epic")) {
        calc = (getDataListSelectedOption('upChest', 'upList') !== null) ? Math.random() * 2 : Math.random() * 10;
        if (calc > 1) {
            hero = arrayShuffle(fiveStarFodders[Math.floor(Math.random() * fiveStarFodders.length)]);
        } else {
            console.log(hero);
        }
    }

    if (hero.includes("a-tier")) {
        calc = (getDataListSelectedOption('upChest', 'upList') !== null) ? Math.random() * 5 : Math.random() * 10;
        if (calc > 3) {
            hero = arrayShuffle(fiveStarFodders[Math.floor(Math.random() * fiveStarFodders.length)]);
        }
    }

    if (hero.includes("b-tier")) {
        calc = (getDataListSelectedOption('upChest', 'upList') !== null) ? Math.random() * 7 : Math.random() * 10;
        if (calc > 5) {
            hero = arrayShuffle(fiveStarFodders[Math.floor(Math.random() * fiveStarFodders.length)]);
        }
    }

    return hero;
}

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

var getDataListSelectedOption = function(txt_input, data_list_options) {
    var shownVal = document.getElementById(txt_input).value;
    var value2send = document.querySelector("#" + data_list_options + " option[value='" + shownVal + "']");
    if (value2send !== null) {
        value2send = value2send.dataset.value;
    }

    return value2send;
}

/**
 * Key Pull logic
 */

$('.key').click(function() {
    var hero = '';

    // Assigns a random hero for each chance
    threeStarChance = getRandomHero(arrayShuffle(threeStar));
    fourStarChance = getRandomHero(arrayShuffle(fourStar));
    fiveStarChance = getRandomHero(arrayShuffle(fiveStar));
    upChance = upChest[parseInt($('#upChest').attr('data-value'))];

    // Resets .result div to be empty after every pull
    $('.result').html('');

    if ($(this).hasClass('key-10')) { // If pulling 10 keys

        if (getDataListSelectedOption('upChest', 'upList') !== null && !$('.up-chest-wrapper').length) {
            $('.hero-gained').append('<h4>Up Chest Hero:</h4><div class="up-chest-wrapper"></div>')
        }

        for ( var i = 0; i < 9; i++ ) {
            threeStarChance = getRandomHero(arrayShuffle(threeStar));
            fourStarChance = getRandomHero(arrayShuffle(fourStar));
            fiveStarChance = getRandomHero(arrayShuffle(fiveStar));
            upChance = upChest[parseInt($('#upChest').attr('data-value'))];

            if ($(this).hasClass('event')) {
                hero = percentageChance([threeStarChance, fourStarChance, fiveStarChance], [84, 12, 4]);
            } else {
                hero = percentageChance([threeStarChance, fourStarChance, fiveStarChance], [86, 12, 2]);
            }

            $('.result').append(hero.replace('5-', '').replace('4-', '').replace('3-', '')+' / ');
            $('.logs .logs-scrollable').append(hero.replace('5-', '').replace('4-', '').replace('3-', '')+' / ');

            if (hero.includes("up-chest")) {
                $('.hero-gained .up-chest-wrapper').append(hero.replace('5-', '')+' / ');
            } else if (hero.includes("a-tier") || hero.includes("b-tier")) {
                $('.hero-gained .heroes').append(hero.replace('5-', '')+' / ');
            } else if (hero.includes("epic")) {
                $('.hero-gained .happy').append(hero.replace('5-', '')+' / ');
            }

            // Check result for each star hero
            if (hero.includes('5-')) {
                $('.data .five .counter').text(parseInt($('.data .five .counter').text())+1);
            } else if (hero.includes("4-")) {
                $('.data .four .counter').text(parseInt($('.data .four .counter').text())+1);
            } else if (hero.includes("3-")) {
                $('.data .three .counter').text(parseInt($('.data .three .counter').text())+1);
            }

            if (hero.toLowerCase().includes($('.target').val().toLowerCase()) && $('.target').val() !== '') {
                alert('you got '+$('.target').val())
            }
        }

        // Calculates total keys
        $('.key-used b').text(parseInt($('.key-used b').text())+10);
        $('.logs .logs-scrollable').append('<br /><br />');

    } else { // If pulling one key

        if ($(this).hasClass('event')) {
            hero = percentageChance([threeStarChance, fourStarChance, fiveStarChance], [84, 12, 4]);
        } else {
            hero = percentageChance([threeStarChance, fourStarChance, fiveStarChance], [86, 12, 2]);
        }

        $('.result').html(hero.replace('5-', '').replace('4-', '').replace('3-', '')+' / ');
        $('.logs .logs-scrollable').append(hero.replace('5-', '').replace('4-', '').replace('3-', '')+' / ');

        if (hero.includes("a-tier") || hero.includes("b-tier")) {
            $('.hero-gained .heroes').append(hero.replace('5-', '')+' / ');
        } else if (hero.includes("epic")) {
            $('.hero-gained .happy').append(hero.replace('5-', '')+' / ');
        } else if (hero.includes("up-chest")) {
            $('.hero-gained .up-chest-wrapper').append(hero.replace('5-', '')+' / ');
        }

        if (hero.includes('5-')) {
            $('.data .five .counter').text(parseInt($('.data .five .counter').text())+1);
        } else if (hero.includes("4-")) {
            $('.data .four .counter').text(parseInt($('.data .four .counter').text())+1);
        } else if (hero.includes("3-")) {
            $('.data .three .counter').text(parseInt($('.data .three .counter').text())+1);
        }

        $('.key-used b').text(parseInt($('.key-used b').text())+1);
        $('.logs .logs-scrollable').append('<br /><br />');
    }
});

$('.logs h5').click(function() {
    $(this).parent().find('.logs-scrollable').toggleClass('hide');
});