// ==UserScript==
// @name         Warframe Auto apply promocode
// @namespace    http://tampermonkey.net/
// @version      2024-07-02
// @description  Warframe Auto apply promocode
// @author       https://github.com/risky2k1
// @match        https://www.warframe.com/promocode
// @icon         https://www.google.com/s2/favicons?sz=64&domain=warframe.com
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    //You can go to Google or any source that contain Promo codes to parse here
    const codes = [
        'Codoma', 'WealWest', 'ThePanda', 'xBocchanVTx', 'PyrrhicSerenity', 'Akari', 'Carchara', 'Light_Micke', 'Nononom12',
        'Tortoise', 'MjikThize', 'Ozku', 'Twila', 'BlueberryCat', 'Destrohido', 'Im7heClown', 'CanOfCraigf', 'Np161', '6ixGatsu',
        'LadyNovita', 'FerreusDemon', 'ItsJustToe', 'Buff00n', 'SEARYN', 'Spandy', 'Scallion', 'MrRoadBlock', 'InfernoTheFirelord',
        'FR4G-TP', 'Fated2Perish', 'LILLEXI', 'Bluyayogamer', 'Eterion', 'Crowdi', 'BlazingCobalt', 'CONFUSEDWARFRAME',
        'SPACEWAIFU', 'PAPATLION', 'MEDUSACAPTURES', 'FINLAENA', 'ArgonSix', 'MrWarframeGuy', 'SilentMashiko', 'Zxpfer',
        'Zarionis', 'YourLuckyClover', 'xxVampixx', 'Xenogelion', 'Woxli', 'WideScreenJohn', 'WarframeWiki', 'WarframeRunway',
        'WarframeCommunityDiscord', 'Wanderbots', 'VVhiteAngel', 'VoltTheHero', 'Voli', 'VoidFissureBR', 'Vernoc', 'VashCowaii',
        'Varlinator', 'Vamppire', 'VAMP6X6X6X', 'UnrealYuki', 'Triburos', 'TrashFrame', 'ToxickToe', 'TotalN3wb', 'TioRamon',
        'TioMario', 'TinBears', 'TheKengineer', 'TheGamio', 'TennoForever', 'TeaWrex', 'TBGKaru', 'TaticalPotato', 'Tanchan',
        'Tanandra', 'StudioCyen', 'Strippin', 'Sn0wRC', 'Smoodie', 'SkillUp', 'SillFix', 'Shul', 'Sherpa', 'ShenZhao', 'Sharlazard',
        'SerdarSari', 'ScarletMoon', 'SarahTsang', 'Sapmatic', 'RustyFin', 'RoyalPrat', 'Ritens', 'Rippz0r', 'ReyGanso',
        'Relentlesszen', 'RebelDustyPinky', 'RainbowWaffles', 'Rahetalius', 'RagingTerror', 'QTCC2', 'QTCC', 'Pyrah', 'Purkinje',
        'ProfessorBroman', 'PrimedAverage', 'Pride2022', 'PostiTV', 'PocketNinja', 'PlagueDirector', 'Pandaah', 'PammyJammy',
        'OrpheusDeluxe', 'OriginalWickedFun', 'OOSIJ', 'OddieOwl', 'NoSympathyy', 'NineYear22', 'MrSteelWar', 'Mogamu', 'MissFwuffy',
        'MikeTheBard', 'MichelPostma', 'MHBlacky', 'McMonkeys', 'McGamerCZ', 'Makarimorph', 'MadFury', 'Macho', 'LynxAria', 'LiliLexi',
        'LeyzarGamingViews', 'LeoDoodling', 'LadyTheLaddy', 'L1feWater', 'Kretduy', 'Kr1ptonPlayer', 'Kiwad', 'Kirarahime',
        'KingGothaLion', 'KavatsSchroedinger', 'K1llerBarbie', 'JustRLC', 'Joriale', 'JoeyZero', 'JessiThrower', 'JamieVoiceOver',
        'IWoply', 'InfoDiversao', 'Ikedo', 'IISlip', 'Iflynn', 'Hydroxate', 'HotShomStories', 'Homiinvocado', 'HappinesDark',
        'H3DSH0T', 'GrindHardSquad', 'Golden', 'GlamShatterSkull', 'Gingy', 'GermanCommunityDiscord', 'Gara', 'Frozenballz',
        'FrostyNovaPrime', 'FromThe70s', 'FloofyDwagon', 'FeelLikeAPlayer', 'FashionFrameIsEndGame', 'FacelessBeanie', 'ExtraCredits',
        'EmpryeanCap', 'Emojv', 'Elnoraeleo', 'EliceGameplay', 'ElGrineerExiliado', 'ElDanker', 'Eduiy16', 'DNexus', 'DkDiamantes',
        'DjTechLive', 'Disfusional', 'DimitriV2', 'DillyFrame', 'DeuceTheGamer', 'Depths', 'DeepBlueBeard', 'Deejayknight',
        'DebbySheen', 'DayJobo', 'DatLoon', 'DasterCreations', 'DanielTheDemon', 'Cpt_Kim', 'CopyKavat', 'Conquera2022', 'CohhCarnage',
        'Cleonaturin', 'Chelestra', 'Char', 'ChacyTay', 'CGsKnackie', 'CephalonSquared', 'Casardis', 'CaleyEmerald', 'Bwana',
        'BurnBxx', 'Brozime', 'BrotherDaz', 'Bricky', 'BrazilCommunityDiscord', 'BigJimID', 'Aznitrous', 'Avelna', 'AshiSogiTenno',
        'AnnoyingKillah', 'AnjetCat', 'AngryUnicorn', 'Amprov', 'AlexanderDario', 'AlainLove', 'AGayGuyPlays', 'AeonKnight86',
        'AdmiralBahroo'
    ];
    let currentIndex = localStorage.getItem('promoCodeIndex');
    if (currentIndex === null) {
        currentIndex = 0;
    } else {
        currentIndex = parseInt(currentIndex, 10);
    }

    function applyPromoCode() {
        if (currentIndex >= codes.length) {
            alert('All code are submitted!.');
            return;
        }

        let code = codes[currentIndex];
        console.log('Submitting promo code:', code);

        const promoInput = document.getElementById('promocode_input');
        const submitButton = document.getElementById('btnSubmit');

        if (promoInput && submitButton) {
            promoInput.value = code;
            submitButton.click();
            currentIndex++;
            localStorage.setItem('promoCodeIndex', currentIndex);
        } else {
            console.log('Submitted success!.');
            window.location.href = 'https://www.warframe.com/promocode';
        }
    }

    window.addEventListener('load', function () {
        applyPromoCode();
    });
})();
