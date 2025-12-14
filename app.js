// --- DATABASE ---
const DB = [
    { id: 'subway', title: 'Subway Surfers', cat: 'Runner', img: 'https://gamingonphone.com/wp-content/uploads/2022/06/Subway-Surfers-Characters-Guide-Cover.jpg', banner: 'https://gamingonphone.com/wp-content/uploads/2022/06/Subway-Surfers-Characters-Guide-Cover.jpg', url: 'https://g.igroutka.ru/games/164/Xm2W5MIcPqrF1Y90/12/subway_surfers_easter_edinburgh/', desc: 'The classic endless runner — dash along the tracks, dodge trains and outrun the grumpy inspector in this global reflex hit.', controls: '← move left | → move right | ↑ jump | ↓ slide | Space hoverboard', feat: true, color: 'blue-500', year: 2012, developer: 'Kiloo & SYBO' },
    { id: 'fnf', title: 'Friday Night Funkin\'', cat: 'Rhythm', img: 'https://cdn.aptoide.com/imgs/7/6/9/769f9db715608f22e9174283d0f050e0_fgraphic.jpg', banner: 'https://cdn.aptoide.com/imgs/7/6/9/769f9db715608f22e9174283d0f050e0_fgraphic.jpg', url: 'https://raw.githack.com/genizy/fridayfunk/master/index.html', desc: 'Feel the beat in this indie rhythm game — hit the arrows to the beat and win intense rap battles.', controls: '↑ | ↓ | ← | → (notes) | WASD (alternative) | DFJK (alternative)', feat: true, color: 'purple-500', year: 2020, developer: 'The Funkin’ Crew (ninjamuffin99, PhantomArcade, Kawai Sprite, evilsk8r)' },
    { id: 'krunker', title: 'Krunker.io', cat: 'FPS', img: 'https://imgs.crazygames.com/games/krunker-io/cover-1591336739727.png?metadata=none&quality=100&width=1200&height=630&fit=crop', banner: 'https://imgs.crazygames.com/games/krunker-io/cover-1591336739727.png?metadata=none&quality=100&width=1200&height=630&fit=crop', url: 'https://krunker.io/?game=PARK_0', desc: 'Fast-paced voxel FPS. Move quickly using bunny hops and slide jumps to dominate the arena.', controls: 'WASD move | Mouse look | Left click shoot | Right click aim | Space jump | Shift run | R reload', feat: true, color: 'cyan-500', year: 2018, developer: 'Yendis Entertainment' },
    { id: 'venge', title: 'Venge.io', cat: 'FPS', img: 'https://venge.io/thumbnail.jpg', banner: 'https://venge.io/thumbnail.jpg', url: 'https://venge.io/', desc: 'Tactical multiplayer shooter — pick a hero, control objectives and use card-based abilities.', controls: 'WASD move | Mouse look | Left click shoot | Right click ability/aim | Space jump | Shift run | R reload', feat: false, color: 'red-500', year: 2020, developer: 'OnRush Studio' },
    { id: 'shellshockers', title: 'Shell Shockers', cat: 'FPS', img: 'https://www.shellshock.io/img/previewImage_shellShockers.webp', banner: 'https://www.shellshock.io/img/previewImage_shellShockers.webp', url: 'https://shellshock.io', desc: 'Multiplayer FPS where you play as an armed egg — shoot, dodge and rule the eggverse in frantic matches.', controls: 'WASD move | Mouse look | Left click shoot | R reload | Q grenade | E switch weapon | F melee | Space jump | Shift scope/aim', feat: false, color: 'lime-400', year: 2017, developer: 'Blue Wizard Digital' },
    { id: 'smash', title: 'Smash Karts', cat: 'Arcade', img: 'https://images.squarespace-cdn.com/content/v1/598b1d4ef9a61e39d195e6e1/1674214584671-W7W2V440CZIOTOJXBF3H/maxresdefault.jpg', banner: 'https://images.squarespace-cdn.com/content/v1/598b1d4ef9a61e39d195e6e1/1674214584671-W7W2V440CZIOTOJXBF3H/maxresdefault.jpg', url: 'https://smashkarts.io/', desc: 'Chaotic 3D kart battles — grab surprise boxes, equip wild weapons and wreck opponents in the arena.', controls: 'WASD drive | Arrow keys drive | Space use item', feat: true, color: 'pink-500', year: 2020, developer: 'Tall Team' },
    { id: 'tomb', title: 'Tomb of the Mask', cat: 'Arcade', img: 'https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/store/software/switch/70010000046832/94c118850d331193dc4a6f16f9242daedb1bb79fe6449d03e1c7da3969942ad7', banner: 'https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/store/software/switch/70010000046832/94c118850d331193dc4a6f16f9242daedb1bb79fe6449d03e1c7da3969942ad7', url: 'https://kdata1.com/2023/10/tomb-of-the-mask/', desc: 'Addictive vertical arcade — scale walls, avoid deadly traps and collect coins at breakneck speed.', controls: 'Swipe (mobile) | WASD move (web) | Arrow keys move (web)', feat: false, color: 'orange-500', year: 2016, developer: 'Happymagenta / Playgendary' },
    { id: 'ev', title: 'Ev.io', cat: 'FPS', img: 'https://ev.io/themes/ev/images/ev-io-og-image.png', banner: 'https://ev.io/themes/ev/images/ev-io-og-image.png', url: 'https://ev.io/', desc: 'Futuristic FPS inspired by Halo and Destiny — use jetpacks, double jumps and energy weapons in fast fights.', controls: 'WASD move | Mouse look | Left click shoot | Right click aim | Space jump | Shift sprint | Q teleport | R reload | G grenade | C crouch | 1–8 change weapon', feat: false, color: 'yellow-500', year: 2021, developer: 'Addicting Games / Equipe ev.io' },
    { id: 'minecraft', title: 'Minecraft Web', cat: 'Simulation', img: 'https://image.api.playstation.com/vulcan/ap/rnd/202407/1020/91fe046f742042e3b31e57f7731dbe2226e1fd1e02a36223.jpg?w=1920&thumb=false', banner: 'https://image.api.playstation.com/vulcan/ap/rnd/202407/1020/91fe046f742042e3b31e57f7731dbe2226e1fd1e02a36223.jpg?w=1920&thumb=false', url: 'https://eaglercraft.com/play/?version=1.12.2-wasm', desc: 'Classic survival and building experience in the browser — create, explore and survive.', controls: 'WASD move | Mouse look | Left click break | Right click use/place | Space jump | Shift sneak | Ctrl sprint | E inventory', feat: true, color: 'green-500', year: 2019, developer: 'Mojang' },
    { id: 'fnaf1', title: 'FNAF 1', cat: 'Horror', img: 'https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_FiveNightsAtFreddys_image1600w.jpg', banner: 'https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_FiveNightsAtFreddys_image1600w.jpg', url: 'https://lagged.com/games/fnaf/', desc: 'The original horror classic — survive five nights watching terrifying animatronics with limited power.', controls: 'Mouse look | Mouse click | ESC menu', feat: false, color: 'red-800', year: 2014, developer: 'Scott Cawthon' },
    { id: 'fnaf2', title: 'FNAF 2', cat: 'Horror', img: 'https://image.api.playstation.com/vulcan/img/cfn/11307syzz9EVqI_Th4JUed7lsCaE5s7_VpiP5_U8zSKPRWy4bMPMon9LUEkUZjo-5wWT-AMLNDye41XzwezYREI5WK4JXVMK.png?w=1920&thumb=false', banner: 'https://image.api.playstation.com/vulcan/img/cfn/11307syzz9EVqI_Th4JUed7lsCaE5s7_VpiP5_U8zSKPRWy4bMPMon9LUEkUZjo-5wWT-AMLNDye41XzwezYREI5WK4JXVMK.png?w=1920&thumb=false', url: 'https://run3.io/popgame/fnaf/fnaf2.html', desc: 'No doors to protect you — use a mask and keep the music box wound to survive.', controls: 'Mouse look | Mouse click | Space mask (in some versions)', feat: false, color: 'red-700', year: 2014, developer: 'Scott Cawthon' },
    { id: 'fnaf3', title: 'FNAF 3', cat: 'Horror', img: 'https://image.api.playstation.com/vulcan/img/cfn/11307Xys6bSNoFWX-7VqGlbM2kNBzQR_jA9nGq9jrUg5vpC8DP7FkquNIjqCFgVTkmgYmHYTCXp6RQ_C4wSVSZpqhSYAm3z4.png?w=1920&thumb=false', banner: 'https://image.api.playstation.com/vulcan/img/cfn/11307Xys6bSNoFWX-7VqGlbM2kNBzQR_jA9nGq9jrUg5vpC8DP7FkquNIjqCFgVTkmgYmHYTCXp6RQ_C4wSVSZpqhSYAm3z4.png?w=1920&thumb=false', url: 'https://run3.io/popgame/fnaf/fnaf3.html', desc: 'Thirty years later, one animatronic remains — use audio to lure it away from you.', controls: 'Mouse look | Mouse click | System panels via click', feat: false, color: 'red-600', year: 2015, developer: 'Scott Cawthon' },
    { id: 'fnaf4', title: 'FNAF 4', cat: 'Horror', img: 'https://image.api.playstation.com/vulcan/img/cfn/11307bWt6Efk_dMWiyFIaqI-aw114d9c4W2zKGKM9dFL7IU87vP71JoYIzK1DgbV4lcBSIXuTUzlrA_tAuO9dsyguoU9pnlb.png?w=1920&thumb=false', banner: 'https://image.api.playstation.com/vulcan/img/cfn/11307bWt6Efk_dMWiyFIaqI-aw114d9c4W2zKGKM9dFL7IU87vP71JoYIzK1DgbV4lcBSIXuTUzlrA_tAuO9dsyguoU9pnlb.png?w=1920&thumb=false', url: 'https://run3.io/popgame/fnaf/fnaf4.html', desc: 'Horror follows you home — listen for their breath before you turn on the light.', controls: 'Mouse look | Click doors | Ctrl/Shift/Space (varies by version)', feat: false, color: 'red-500', year: 2015, developer: 'Scott Cawthon' },
    { id: 'fnafsl', title: 'Sister Location', cat: 'Horror', img: 'https://image.api.playstation.com/vulcan/img/cfn/11307C62Vucq_3cIDwmFRuIJ2id6-vETbDxR4hDh0-WzA_kwbmi_oFXK7YzjsoGHL7uwypw8S-WGE-Jyjg_QQyO2kmY2aacP.png?w=1920&thumb=false', banner: 'https://image.api.playstation.com/vulcan/img/cfn/11307C62Vucq_3cIDwmFRuIJ2id6-vETbDxR4hDh0-WzA_kwbmi_oFXK7YzjsoGHL7uwypw8S-WGE-Jyjg_QQyO2kmY2aacP.png?w=1920&thumb=false', url: 'https://run3.io/popgame/fnaf/fnafsl.html', desc: 'Dive into the depths of Circus Baby\'s Pizza World — don\'t hold your breath.', controls: 'Mouse look | Mouse click | Keyboard actions vary by minigame', feat: false, color: 'red-400', year: 2016, developer: 'Scott Cawthon' },

    // Added Baldi's Basics in Education and Learning (Unity embed via srcdoc)
    { id: 'baldi', title: "Baldi's Basics in Education and Learning", cat: 'Horror', img: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1712830/header.jpg', banner: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1712830/header.jpg', url: '<unity-srcdoc-placeholder>', desc: "Explore a strange school — learn rules, explore classrooms and try to survive the peculiar teacher.", controls: 'WASD move | Mouse look | Left click interact | Right click use item | Scroll switch item | Shift run | Space look back | Esc pause', feat: false, color: 'yellow-300', custom_render: 'unity', year: 2018, developer: 'Micah “mystman12” McGonigal (Basically Games)' },

    // Added: Imagine Island (Social / Party)
    { id: 'imagineisland', title: 'Imagine Island', cat: 'Social', type: 'Party', img: 'https://imagineisland.game/wp-content/uploads/2025/10/imagine-island-social-share-1.jpg', banner: 'https://imagineisland.game/wp-content/uploads/2025/10/imagine-island-social-share-1.jpg', url: 'https://play.imagineisland.game/play/index.html', desc: 'Join other players on social islands for events, minigames and parties — socialize, customize and celebrate.', controls: 'WASD move | Arrow keys move | Space jump | Enter chat | F interact | I inventory | M map', feat: false, color: 'pink-500', year: 2024, developer: 'Magic Potion Games' },

    // Added Rumble Rush (Party Royale)
    { id: 'rumblerush', title: 'Rumble Rush', cat: 'FPS', type: 'Party Royale', img: 'https://rumblerush.io/og-image.jpg', banner: 'https://rumblerush.io/og-image.jpg', url: 'https://rumblerush.io', desc: 'A chaotic party royale — fight, survive and have fun in fast, unpredictable arenas.', controls: 'Tap to move | Tap to attack | Tap to jump (mobile)', feat: false, color: 'pink-500', year: 2025, developer: 'PocketHaven' },

    // New: Star Stuff (Puzzle) - embedded via controlled srcdoc iframe with crop to hide bottom area
    { id: 'starstuff', title: 'Star Stuff', cat: 'Puzzle', type: 'Puzzle', img: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1955110/header.jpg?t=1747767646', banner: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1955110/header.jpg?t=1747767646', url: 'https://www.crazygames.com/embed/star-stuff', desc: 'Casual space puzzle — connect stars and solve gravitational challenges.', controls: 'WASD or arrow keys move | Space interact | Tab switch bots | P pause | Shift/Z fast-forward/rewind', feat: false, color: 'indigo-400', custom_render: 'embed', year: 2024, developer: 'Ánimo Games Studio' },

    // Added Escape From Prison Multiplayer (Puzzle / Platformer) - CrazyGames embed with bottom black bar mask
    { id: 'escapeprison', title: 'Escape From Prison Multiplayer', cat: 'Puzzle', type: 'Platformer', img: 'https://imgs.crazygames.com/escape-from-prison-multiplayer_16x9/20250120074825/escape-from-prison-multiplayer_16x9-cover?', banner: 'https://imgs.crazygames.com/escape-from-prison-multiplayer_16x9/20250120074825/escape-from-prison-multiplayer_16x9-cover?', url: 'https://games.crazygames.com/en_US/escape-from-prison-multiplayer/index.html?v=1.346', desc: 'Cooperative platformer escape challenge — work with others (or solo) to flee the prison using precise jumps and teamwork.', controls: 'WASD or Arrow Keys | Move; Space | Jump; Touch Controls | Mobile movement and jump', feat: false, color: 'indigo-400', custom_render: 'embed', year: 2024, developer: 'Dinobros' },

    // New: Toodee and Topdee (Puzzle-Platformer) - uses CrazyGames embed with bottom black bar mask
    { id: 'toodee', title: 'Toodee and Topdee', cat: 'Puzzle', img: 'https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/store/software/switch/70010000049111/2a29428b4833922a7354a5ed529266517af4054b2c68750470bd3f43dd972467', banner: 'https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/store/software/switch/70010000049111/2a29428b4833922a7354a5ed529266517af4054b2c68750470bd3f43dd972467', url: 'https://www.crazygames.com/embed/toodee-and-topdee-demo', desc: 'A charming puzzle-platformer where two characters cooperate to solve levels.', controls: 'Arrow keys move | Z action | X switch character | R restart | Esc menu', feat: false, color: 'indigo-400', custom_render: 'embed', year: 2021, developer: 'dietzribi' },

    // New: Duo (Co-op) - CrazyGames embed with bottom black bar cut (same method as Star Stuff)
    { id: 'duo', title: 'Duo', cat: 'Co-op', type: 'Co-op', img: 'https://imgs.crazygames.com/duo-kjn_16x9/20250530054118/duo-kjn_16x9-cover?metadata=none&quality=60&height=2325', banner: 'https://imgs.crazygames.com/duo-kjn_16x9/20250530054118/duo-kjn_16x9-cover?metadata=none&quality=60&height=2325', url: 'https://www.crazygames.com/embed/duo-kjn', desc: 'Cooperative game: work with a partner to solve puzzles and progress through levels.', controls: 'P1: WASD move | Space jump | B interact | V use item | Tab switch item; P2: Arrow keys move | Right Shift jump', feat: false, color: 'teal-400', custom_render: 'embed', year: 2025, developer: 'Ánimo Games Studio' },

    // New: Stumble Guys (Custom WebGL Scaling)
    { id: 'stumbleguys', title: 'Stumble Guys', cat: 'Party Royale', img: 'https://www.gamerscore.com.br/wp-content/uploads/2023/07/Stumble-Guys.jpg', banner: 'https://www.gamerscore.com.br/wp-content/uploads/2023/07/Stumble-Guys.jpg', url: 'https://www.stumbleguys.com/pt-BR/play', desc: 'A massive multiplayer party-elimination game — race, stumble and fight to reach the finish line!', controls: 'Mobile: tap move | tap jump; PC: WASD move | Space jump', feat: true, color: 'yellow-300', custom_render: 'stumbleguys', year: 2021, developer: 'Kitka Games & Scopely' },

    // New: Piece of Cake - Merge & Bake (Puzzle)
    { id: 'pieceofcake', title: 'Piece of Cake: Merge & Bake', cat: 'Puzzle', img: 'https://imgs.crazygames.com/piece-of-cake-merge-and-bake_16x9/20251202050421/piece-of-cake-merge-and-bake_16x9-cover?metadata=none&quality=100&width=1200&height=630&fit=crop', banner: 'https://imgs.crazygames.com/piece-of-cake-merge-and-bake_16x9/20251202050421/piece-of-cake-merge-and-bake_16x9-cover?metadata=none&quality=100&width=1200&height=630&fit=crop', url: 'https://cdn.mergecakegame.com/html5/cg/index.html', desc: 'A casual, addictive puzzle where you merge pieces to bake cakes and beat levels.', controls: 'Click select | Click drag | Tap select (mobile) | Tap drag', feat: false, color: 'amber-400', year: 2024, developer: 'HG Devs / Happy Games' },

    // Added Cut The Rope Magic (Puzzle)
    { id: 'cuttheropemagic', title: 'Cut The Rope Magic', cat: 'Puzzle', img: 'https://img.gamepix.com/games/cut-the-rope-magic/cover/cut-the-rope-magic.png', banner: 'https://img.gamepix.com/games/cut-the-rope-magic/cover/cut-the-rope-magic.png', url: 'https://play.famobi.com/cut-the-rope-magic/A-MINIJUEGOS', desc: 'Help Om Nom recover magic and solve puzzles by cutting ropes and using special items to feed the candy.', controls: 'Click select | Click drag | Tap select (mobile) | Tap drag', feat: false, color: 'emerald-400', year: 2015, developer: 'ZeptoLab' },

    // Added Vectaria (Simulation)
    { id: 'vectaria', title: 'Vectaria', cat: 'Simulation', type: 'Simulation', img: 'https://vectaria.io/preview-og.webp', banner: 'https://vectaria.io/preview-og.webp', url: 'https://vectaria.io/home', desc: 'Web simulation: explore environments and resources with rich simulation mechanics.', controls: 'Mouse / Touch: Navigate and interact', feat: false, color: 'sky-400', year: '2024/2025', developer: 'Vectaria.io' },
    
    // Added Om Nom: Run (Runner)
    { id: 'omnomrun', title: 'Om Nom: Run', cat: 'Runner', img: 'https://m.media-amazon.com/images/I/91Wkd9nOACL.png', banner: 'https://m.media-amazon.com/images/I/91Wkd9nOACL.png', url: 'https://games.crazygames.com/en_US/om-nom-run/index.html?v=1.346', desc: 'An endless runner starring Om Nom — jump, slide and collect sweets through colorful levels.', controls: 'Arrows / Touch: Move and Jump', feat: false, color: 'lime-400', custom_render: 'embed', year: 2020, developer: 'Koukoi Games / ZeptoLab' },

    // Added Cut the Rope: Experiments (Puzzle)
    { 
        id: 'cuttheropexp', 
        title: 'Cut the Rope: Experiments', 
        cat: 'Puzzle', 
        img: 'https://www-cms.zeptolab.com/uploads/CTR_exp_1280x780x2_0ccfd30d3f.jpg', 
        banner: 'https://www-cms.zeptolab.com/uploads/CTR_exp_1280x780x2_0ccfd30d3f.jpg', 
        desc: 'Cut ropes precisely and solve creative experiments to feed Om Nom in this classic puzzle.', 
        controls: 'Mouse / Touch: Cut ropes and interact', 
        feat: false, 
        color: 'emerald-400',
        custom_render: 'srcdoc',
        year: 2011,
        developer: 'ZeptoLab',
        // srcdoc now includes the same "bottom-cut" overlay used by other embeds (Duo / Star Stuff),
        // so intrusive lower UI elements in the inner embed are masked and the mask captures pointer events.
        srcdoc_html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" />
  <title>Cut The Rope Experiments - Embed</title>
  <style>
    html,body{height:100%;margin:0;background:#000;overflow:hidden;}
    .wrap{position:relative;width:100%;height:100%;overflow:hidden;background:#000;}
    iframe#inner-embed{position:absolute;inset:0;width:100%;height:100%;border:0;margin:0;padding:0;display:block;background:#000;object-fit:cover;}
    .bottom-cut{position:absolute;left:0;right:0;bottom:0;height:var(--nexus-bottom-cut,10vh);background:#000;z-index:9999;pointer-events:auto;}
    @media(min-width:900px){ .bottom-cut{ height:var(--nexus-bottom-cut,8vh); } }
  </style>
  <script>
    try {
      window.addEventListener('contextmenu', function(e){ e.preventDefault(); }, { passive: false });
      window.addEventListener('message', function(){}, { passive: true });
    } catch(e){}
  </script>
</head>
<body>
  <div class="wrap">
    <iframe id="inner-embed"
            src="https://games.crazygames.com/en_US/cut-the-rope-experiments/index.html?v=1.346"
            sandbox="allow-scripts allow-same-origin allow-forms allow-pointer-lock"
            allow="fullscreen; autoplay; gamepad"
            loading="lazy"></iframe>

    <div class="bottom-cut" aria-hidden="true"></div>
  </div>

  <!-- Replacement injector: constantly replace "CrazyGames" and specific "Play on CrazyGames to save your progress"
       inside this document and attempt to inject the same replacer into the inner iframe if same-origin. -->
  <script>
    (function(){
      function replaceTextInNode(node) {
        try {
          if (!node) return;
          // Text node: replace textual content
          if (node.nodeType === Node.TEXT_NODE) {
            var txt = node.nodeValue;
            if (!txt) return;
            var newTxt = txt.replace(/Play on CrazyGames to save your progress/g, 'Play on Nebula Nexus')
                            .replace(/CrazyGames/g, 'Nebula Nexus');
            if (newTxt !== txt) node.nodeValue = newTxt;
            return;
          }
          // Element node: replace common attributes that may contain strings shown in UI
          if (node.nodeType === Node.ELEMENT_NODE) {
            try {
              var attrs = ['alt','title','placeholder','aria-label','value','data-tooltip','data-title'];
              attrs.forEach(function(attr){
                try {
                  if (node.hasAttribute && node.hasAttribute(attr)) {
                    var v = node.getAttribute(attr);
                    if (v && typeof v === 'string') {
                      var nv = v.replace(/Play on CrazyGames to save your progress/g, 'Play on Nebula Nexus')
                                .replace(/CrazyGames/g, 'Nebula Nexus');
                      if (nv !== v) node.setAttribute(attr, nv);
                    }
                  }
                } catch (e){}
              });
            } catch (e){}
          }
        } catch (e){}
      }

      function walkAndReplace(root) {
        try {
          if (!root) return;
          var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);
          var node;
          while (node = walker.nextNode()) {
            replaceTextInNode(node);
          }
        } catch (e){}
      }

      function observeRoot(root) {
        try {
          walkAndReplace(root);
          var mo = new MutationObserver(function(muts){
            muts.forEach(function(m){
              if (m.type === 'characterData' && m.target) {
                replaceTextInNode(m.target);
              } else if (m.addedNodes && m.addedNodes.length) {
                m.addedNodes.forEach(function(n){
                  if (n.nodeType === Node.TEXT_NODE) replaceTextInNode(n);
                  else walkAndReplace(n);
                });
              }
            });
          });
          mo.observe(root, { childList: true, subtree: true, characterData: true });
          return mo;
        } catch (e){ return null; }
      }

      var localMo = observeRoot(document.body);
      var sweepInterval = setInterval(function(){ try { walkAndReplace(document.body); } catch(e){} }, 1200);

      var inner = document.getElementById('inner-embed');
      function tryInnerInject() {
        try {
          if (!inner) return;
          try {
            var win = inner.contentWindow;
            var doc = win && win.document;
            if (doc && doc.body) {
              var s = doc.createElement('script');
              s.type = 'text/javascript';
              s.textContent = '(' + function() {
                function replaceTextInNode(node) {
                  try {
                    if (!node || node.nodeType !== Node.TEXT_NODE) return;
                    var txt = node.nodeValue;
                    if (!txt) return;
                    var newTxt = txt.replace(/Play on CrazyGames to save your progress/g, 'Play on Nebula Nexus')
                                    .replace(/CrazyGames/g, 'Nebula Nexus');
                    if (newTxt !== txt) node.nodeValue = newTxt;
                  } catch (e){}
                }
                function walkAndReplace(root) {
                  try {
                    if (!root) return;
                    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);
                    var node;
                    while (node = walker.nextNode()) {
                      replaceTextInNode(node);
                    }
                  } catch (e){}
                }
                function observeRoot(root) {
                  try {
                    walkAndReplace(root);
                    var mo = new MutationObserver(function(muts){
                      muts.forEach(function(m){
                        if (m.type === 'characterData' && m.target) {
                          replaceTextInNode(m.target);
                        } else if (m.addedNodes && m.addedNodes.length) {
                          m.addedNodes.forEach(function(n){
                            if (n.nodeType === Node.TEXT_NODE) replaceTextInNode(n);
                            else walkAndReplace(n);
                          });
                        }
                      });
                    });
                    mo.observe(root, { childList: true, subtree: true, characterData: true });
                    return mo;
                  } catch (e){ return null; }
                }
                try {
                  observeRoot(document.body);
                  setInterval(function(){ try { walkAndReplace(document.body); } catch(e){} }, 1200);
                } catch (e){}
              } + ')();';
              doc.documentElement.appendChild(s);
              return;
            }
          } catch (e) {}
          try { inner.contentWindow && inner.contentWindow.postMessage && inner.contentWindow.postMessage({ type: 'nexus:replaceCrazyGamesText' }, '*'); } catch(e){}
        } catch (e){}
      }

      if (inner) {
        inner.addEventListener('load', tryInnerInject, { passive: true });
        setTimeout(tryInnerInject, 300);
      }

      window.addEventListener('unload', function(){ try { clearInterval(sweepInterval); if (localMo) localMo.disconnect(); } catch (e){} }, { passive: true });
    })();
  </script>
</body>
</html>` 
    },

    { id: 'bitlife', title: 'BitLife', cat: 'Simulation', img: 'https://goodgamestudios.com/wp-content/uploads/2022/11/BitLife-INT-1920.jpg', banner: 'https://goodgamestudios.com/wp-content/uploads/2022/11/BitLife-INT-1920.jpg', url: 'https://ubg365.github.io/bitlife-life-simulator/play.html', desc: 'Make choices, live a virtual life and experience successes and failures in this addictive text simulator.', controls: 'Mouse: Choices', feat: false, color: 'indigo-500', year: 2018, developer: 'CandyWriter' },

    // Added Brain Test 2: Tricky Stories (Puzzle)
    { id: 'braintest2', title: 'Brain Test 2: Tricky Stories', cat: 'Puzzle', img: 'https://i.ytimg.com/vi/1pRyM2v9uN0/maxresdefault.jpg', banner: 'https://i.ytimg.com/vi/1pRyM2v9uN0/maxresdefault.jpg', url: 'https://23azostore.github.io/s2/brain-test-2-tricky-stories/', desc: 'Clever puzzles and tricky stories — solve creative, surprising riddles to progress.', controls: 'Touch / Mouse: Select and drag', feat: false, color: 'amber-400', year: 2020, developer: 'Unico Studio' },

    // Added Ludo King (Board / Puzzle)
    { id: 'ludoking', title: 'Ludo King', cat: 'Puzzle', type: 'Board', img: 'https://s2-techtudo.glbimg.com/4m6NJj1sWnVJ33uhdd3z-HahpDA=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/M/x/Voj7c4ScCB8fUcWfhigw/ludo-king.jpg', banner: 'https://s2-techtudo.glbimg.com/4m6NJj1sWnVJ33uhdd3z-HahpDA=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/M/x/Voj7c4ScCB8fUcWfhigw/ludo-king.jpg', url: 'https://ludoking.com/play/', desc: 'Web version of the classic Ludo — play quick matches with friends or AI, roll dice and race home.', controls: 'Touch / Mouse: Select piece and roll dice', feat: false, color: 'emerald-500', year: 2016, developer: 'Gametion' },

    // Added Candy Crush Saga (Puzzle)
    { id: 'candycrush', title: 'Candy Crush Saga', cat: 'Puzzle', type: 'Puzzle', img: 'https://files.tecnoblog.net/wp-content/uploads/2021/08/candy-crush-saga-1060x596.jpeg', banner: 'https://files.tecnoblog.net/wp-content/uploads/2021/08/candy-crush-saga-1060x596.jpeg', url: 'https://html5.gamemonetize.co/ushitaltif0ig5by3w54p4cy9sd3yptt/', desc: 'Match candies, complete objectives and progress through addictive levels in this web version of the classic match‑3.', controls: 'Touch / Mouse: Select and match', feat: false, color: 'pink-400', year: 2012, developer: 'King' },

    // Added Among Us (Party)
    { id: 'amongus', title: 'Among Us', cat: 'Party Royale', type: 'Party', img: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/945360/capsule_616x353.jpg?t=1757444903', banner: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/945360/capsule_616x353.jpg?t=1757444903', url: 'https://stgames.top/unity/amongus/', desc: 'Social deduction — complete tasks or find the impostor before it\'s too late.', controls: 'Mouse / Touch: Navigate and Interact | Keyboard: Chat', feat: false, color: 'rose-500', year: 2018, developer: 'Innersloth' },

    // Added: Temple Run 2 (Endless runner)
    { id: 'templerun2', title: 'Temple Run 2', cat: 'Runner', type: 'Endless Runner', img: 'https://cdn.aptoide.com/imgs/7/4/8/748a24b37754e55d3a08829d0056ce68_fgraphic.png', banner: 'https://cdn.aptoide.com/imgs/7/4/8/748a24b37754e55d3a08829d0056ce68_fgraphic.png', url: 'https://games.engineering.com/temple-run-2/index.html', desc: 'Classic endless runner — run, slide and dodge obstacles while collecting coins and upgrades.', controls: 'Touch / Mouse: Move and swipe', feat: false, color: 'amber-500', year: 2013, developer: 'Imangi Studios' },

    // Added: Block Blast (Puzzle)
    { id: 'blockblast', title: 'Block Blast', cat: 'Puzzle', type: 'Puzzle', img: 'https://res.ldrescdn.com/rms/ldplayer/process/img/5cd9e962fc364121b3a781cd928a41b61735491234.png', banner: 'https://res.ldrescdn.com/rms/ldplayer/process/img/5cd9e962fc364121b3a781cd928a41b61735491234.png', url: 'https://playgama.com/export/game/block-blast-master', desc: 'Addictive block-bursting puzzle — match and pop blocks to clear the board and beat challenges.', controls: 'Mouse / Touch: Aim and release', feat: false, color: 'emerald-400', year: '2019–2022', developer: 'Hungry Studio' },

    // Added: Level Devil (user request)
    { id: 'leveldevil', title: 'Level Devil', cat: 'Platformer', img: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3242750/a78a03f1047a590e6b9b0360ec361924d7f98959/capsule_616x353.jpg?t=1754941597', banner: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3242750/a78a03f1047a590e6b9b0360ec361924d7f98959/capsule_616x353.jpg?t=1754941597', url: 'https://gamecollections.me/game/owner/level-devil-2/', desc: 'Navigate deadly platforms and overcome infernal challenges in this level-based platformer.', controls: 'Arrows: Move | Space: Jump', feat: false, color: 'rose-500', year: '2022–2023', developer: 'Unept' },

    // Added: The Last Stand (Flash via Ruffle)
    {
        id: 'thelaststand',
        title: 'The Last Stand',
        cat: 'Strategy',
        type: 'Base Defense',
        img: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1615100/header.jpg?t=1739881042',
        banner: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1615100/header.jpg?t=1739881042',
        url: 'https://www.minijuegosgratis.com/flash1234/no_hotlink/thelaststand.swf',
        desc: 'Defend your base against incoming hordes in this classic last-stand tower-defense style flash game.',
        controls: 'Mouse: Place defenses and interact | Space: fast-forward waves',
        feat: false,
        color: 'amber-500',
        custom_render: 'ruffle',
        // Use srcdoc to inject Ruffle and instantiate the player with the provided SWF
        srcdoc_html: `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" />
    <style>html,body{height:100%;margin:0;background:#000;overflow:hidden;} #game{width:100%;height:100%;display:block;}</style>
    <!-- Load Ruffle with crossorigin and onload init for reliability -->
    <script src="https://unpkg.com/@ruffle-rs/ruffle" crossorigin="anonymous"></script>
  </head>
  <body>
    <div id="game" aria-label="The Last Stand flash player"></div>
    <script>
      (function(){
        function initRuffleOnce(){
          try {
            if (!window.RufflePlayer || !window.RufflePlayer.newest) return false;
            const ruffle = window.RufflePlayer.newest();
            if (!ruffle) return false;
            const player = ruffle.createPlayer();
            const container = document.getElementById('game');
            if (!container) return false;
            // avoid double-init
            if (container.__ruffle_inited) return true;
            container.appendChild(player);
            player.style.width = '100%';
            player.style.height = '100%';
            player.load({ url: 'https://www.minijuegosgratis.com/flash1234/no_hotlink/thelaststand.swf' });
            container.__ruffle_inited = true;
            return true;
          } catch (err) {
            return false;
          }
        }

        // Try immediate init (fast-path)
        if (!initRuffleOnce()) {
          // If Ruffle script didn't expose API yet, poll briefly with bounded retries.
          let attempts = 0;
          const maxAttempts = 20;
          const iv = setInterval(function(){
            attempts++;
            if (initRuffleOnce() || attempts >= maxAttempts) {
              clearInterval(iv);
              if (attempts >= maxAttempts && !document.getElementById('game').__ruffle_inited) {
                try {
                  document.getElementById('game').innerHTML = '<div style="color:#fff;padding:16px;font-family:system-ui,Arial,Helvetica,sans-serif;">Failed to initialize Ruffle. Please try reloading the game.</div>';
                } catch(e){}
              }
            }
          }, 250);
        }

        // As a final safety, expose a message listener so parent can instruct init if needed
        window.addEventListener('message', function(evt){
          try {
            if (evt && evt.data && evt.data.type === 'nexus:init-ruffle') {
              initRuffleOnce();
            }
          } catch(e){}
        }, { passive: true });
      })();
    </script>
  </body>
</html>`
    },
    { id: 'openhouse', title: 'Open House', cat: 'Puzzle', img: 'https://imgs.crazygames.com/open-house_16x9/20250703074341/open-house_16x9-cover?metadata=none&quality=60&height=5331', banner: 'https://imgs.crazygames.com/open-house_16x9/20250703074341/open-house_16x9-cover?metadata=none&quality=60&height=5331', url: 'https://playgama.com/export/game/open-house', desc: 'Open House — a clever puzzle experience where spatial reasoning and planning unlocks rooms and secrets.', controls: 'Mouse / Touch: Interact and solve puzzles', feat: false, color: 'amber-400', year: 2024, developer: 'RED BRIX WALL' },
];

// Make the database harder to inspect directly in devtools: keep an internal frozen copy and replace the global `DB` reference
// with a non-enumerable accessor that returns a read-only Proxy with minimal surface. This reduces accidental scraping
// while keeping the platform functionality intact.
(function hardenDB() {
    try {
        // create a true internal copy and freeze it deeply where possible
        const _internal = JSON.parse(JSON.stringify(DB));
        // shallow freeze items and the array
        _internal.forEach(item => {
            try {
                Object.freeze(item);
            } catch (e) {}
        });
        try { Object.freeze(_internal); } catch (e) {}

        // --- NEW: deepFreeze helper to attempt stronger immutability ---
        function deepFreeze(obj, seen=new WeakSet()) {
            try {
                if (!obj || typeof obj !== 'object' || seen.has(obj)) return obj;
                seen.add(obj);
                Object.getOwnPropertyNames(obj).forEach((name) => {
                    const prop = obj[name];
                    if (prop && typeof prop === 'object') deepFreeze(prop, seen);
                });
                try { Object.freeze(obj); } catch (e) {}
            } catch (e) {}
            return obj;
        }
        try { deepFreeze(_internal); } catch (e) {}

        // --- NEW: lightweight field encoding/decoding convention ---
        // We expect some fields (url, banner, img) may be sensitive; encode them in base64 in the source and decode only when read via proxy.
        // To remain compatible with current DB literals we perform a best-effort detection: if a field looks like a URL we leave it, otherwise if it is already base64-ish we decode it.
        function isLikelyB64(s) {
            if (!s || typeof s !== 'string') return false;
            // short heuristic: mostly base64 chars and length multiple of 4
            return /^[A-Za-z0-9+\/=]+$/.test(s) && (s.length % 4 === 0);
        }
        function tryDecode(field) {
            try {
                if (!field || typeof field !== 'string') return field;
                // if it looks like base64, decode; otherwise return original
                if (isLikelyB64(field) && (field.includes('http') === false || field.startsWith('aHR0'))) {
                    // decode safely
                    try {
                        return atob(field);
                    } catch (e) {
                        return field;
                    }
                }
                return field;
            } catch (e) { return field; }
        }
        function decodedView(item) {
            if (!item || typeof item !== 'object') return item;
            // create a shallow copy to avoid leaking internal reference
            const copy = Object.assign({}, item);
            // decode common sensitive fields if necessary
            ['url','banner','img'].forEach(k => {
                if (k in copy) copy[k] = tryDecode(copy[k]);
            });
            return copy;
        }

        // create a read-only proxy handler that only allows safe reads by index or iteration
        const handler = {
            get(target, prop) {
                // allow usual array behaviors for numeric indices and length
                if (prop === Symbol.iterator) return function* () { for (let i=0;i<target.length;i++) yield decodedView(target[i]); };
                if (prop === 'length') return target.length;
                if (!isNaN(prop)) {
                    // return a decoded shallow copy rather than the raw internal object
                    return decodedView(target[prop]);
                }
                // expose only a tiny safe API surface; block direct enumeration of raw array content
                if (prop === 'find') return function(fn){ const res = Array.prototype.find.call(target, fn); return res ? decodedView(res) : res; };
                if (prop === 'filter') return function(fn){ return Array.prototype.filter.call(target, fn).map(decodedView); };
                if (prop === 'map') return function(fn){ return Array.prototype.map.call(target, fn).map(decodedView); };
                if (prop === 'forEach') return function(fn){ return Array.prototype.forEach.call(target, fn); };
                if (prop === 'slice') return function(){ return Array.prototype.slice.apply(target, arguments).map(decodedView); };
                // other properties intentionally hidden
                return undefined;
            },
            ownKeys() {
                // hide keys to make console listing less useful
                return ['length'];
            },
            getOwnPropertyDescriptor(target, prop) {
                if (prop === 'length') {
                    return { configurable: false, enumerable: false, value: target.length, writable: false };
                }
                return undefined;
            },
            set() { return false; },
            defineProperty() { return false; },
            deleteProperty() { return false; }
        };

        const proxy = new Proxy(_internal, handler);

        // Replace the global DB with a non-enumerable accessor to make it less visible in console enumerations
        try {
            Object.defineProperty(window, 'DB', {
                configurable: false,
                enumerable: false, // hide from plain object enumeration
                get() { return proxy; }
            });
        } catch (e) {
            // fallback: if defineProperty fails (rare), overwrite variable with proxy
            window.DB = proxy;
        }

        // also expose a safe internal getter for code paths that need the actual raw array (internal use only)
        // This remains non-enumerable and named so it's not obvious at a glance.
        Object.defineProperty(window, '__nexus_internal_db', {
            configurable: false,
            enumerable: false,
            value: _internal
        });

        // --- NEW: reduce accidental sensitive output by redacting DB in console methods ---
        (function redactConsoleForDB() {
            try {
                const origLog = console.log;
                const origInfo = console.info;
                const origWarn = console.warn;
                const isObjDB = (v) => {
                    if (!v) return false;
                    if (Array.isArray(v) && v.length > 0 && v[0] && v[0].id) return true;
                    if (v && v.id && v.url) return true;
                    return false;
                };
                function safeArgs(args){
                    try {
                        return Array.from(args).map(a => {
                            try {
                                if (a === window.DB || a === window.__nexus_internal_db) return '[REDACTED:DB]';
                                if (isObjDB(a)) return '[REDACTED:DB_OBJECT]';
                                return a;
                            } catch (e) { return '[REDACTED]'; }
                        });
                    } catch (e) { return ['[REDACTED_CONSOLE_ERROR]']; }
                }
                console.log = function(){ return origLog.apply(console, safeArgs(arguments)); };
                console.info = function(){ return origInfo.apply(console, safeArgs(arguments)); };
                console.warn = function(){ return origWarn.apply(console, safeArgs(arguments)); };
                // do not override console.error to preserve important error visibility
            } catch (e) {}
        })();
    } catch (err) {
        // if anything goes wrong, leave DB as-is to avoid breaking app
        console.warn('hardenDB failed', err);
    }
})();

// --- RESOURCE TRACKER: centralized registry to avoid leaks and duplicated timers/listeners ---
const ResourceTracker = (function(){
    const timeouts = new Set();
    const intervals = new Set();
    const observers = new Set();
    const listeners = new Set(); // {target, type, handler, options}
    const rafs = new Set();

    return {
        setTimeout(fn, ms) {
            const id = setTimeout(() => { timeouts.delete(id); try{ fn(); }catch(e){} }, ms);
            timeouts.add(id);
            return id;
        },
        clearTimeout(id) {
            try { clearTimeout(id); } catch(e){}
            timeouts.delete(id);
        },
        setInterval(fn, ms) {
            const id = setInterval(fn, ms);
            intervals.add(id);
            return id;
        },
        clearInterval(id) {
            try { clearInterval(id); } catch(e){}
            intervals.delete(id);
        },
        requestAnimationFrame(fn) {
            const id = requestAnimationFrame((t) => { rafs.delete(id); try{ fn(t); }catch(e){} });
            rafs.add(id);
            return id;
        },
        cancelAnimationFrame(id) {
            try { cancelAnimationFrame(id); } catch(e){}
            rafs.delete(id);
        },
        observe(mo) {
            try { observers.add(mo); } catch(e){}
            return mo;
        },
        disconnectObserver(mo) {
            try { mo.disconnect(); } catch(e){}
            observers.delete(mo);
        },
        addListener(target, type, handler, options) {
            try {
                target.addEventListener(type, handler, options || false);
                listeners.add({target, type, handler, options});
            } catch(e){}
        },
        removeListener(target, type, handler, options) {
            try { target.removeEventListener(type, handler, options || false); } catch(e){}
            // remove any matching entry
            for (const l of Array.from(listeners)) {
                if (l.target === target && l.type === type && l.handler === handler) listeners.delete(l);
            }
        },
        cleanupAll() {
            // Clear timeouts
            for (const id of Array.from(timeouts)) {
                try { clearTimeout(id); } catch(e){}
                timeouts.delete(id);
            }
            // Clear intervals
            for (const id of Array.from(intervals)) {
                try { clearInterval(id); } catch(e){}
                intervals.delete(id);
            }
            // Cancel rAFs
            for (const id of Array.from(rafs)) {
                try { cancelAnimationFrame(id); } catch(e){}
                rafs.delete(id);
            }
            // Disconnect MutationObservers / IntersectionObservers
            for (const mo of Array.from(observers)) {
                try { mo.disconnect(); } catch(e){}
                observers.delete(mo);
            }
            // Remove event listeners registered via tracker
            for (const l of Array.from(listeners)) {
                try { l.target.removeEventListener(l.type, l.handler, l.options || false); } catch(e){}
                listeners.delete(l);
            }
        }
    };
})();

/* --- Disable right-click (contextmenu) site-wide and best-effort for iframes ---
   Strategy:
   - Block contextmenu on the top-level document in capture phase, stopping propagation and default.
   - Attempt to inject the same handler into any same-origin iframes on load.
   - Observe DOM for dynamically added iframes and apply injection when possible.
   This is defensive / best-effort: cross-origin iframe content cannot be modified from here, but
   same-origin frames will get the handler so right-click is effectively disabled inside them too.
*/
(function disableContextMenus() {
    try {
        function blockCtx(e) {
            try {
                // stopImmediatePropagation to prevent other listeners from re-enabling or showing menus
                if (e && typeof e.stopImmediatePropagation === 'function') e.stopImmediatePropagation();
                if (e && typeof e.stopPropagation === 'function') e.stopPropagation();
                if (e && typeof e.preventDefault === 'function') e.preventDefault();
                return false;
            } catch (err) { /* swallow */ }
        }

        // Capture-phase listener on top-level document for maximum coverage
        document.addEventListener('contextmenu', blockCtx, true);

        // Also block common alternate gestures that may show menu UI (pointerpress with secondary button)
        document.addEventListener('pointerdown', function (ev) {
            try {
                if (ev && ev.button === 2) {
                    ev.stopImmediatePropagation && ev.stopImmediatePropagation();
                    ev.stopPropagation && ev.stopPropagation();
                    ev.preventDefault && ev.preventDefault();
                }
            } catch (err) {}
        }, true);

        // Helper to inject contextmenu blocker into same-origin iframe
        function injectIntoIframe(iframeEl) {
            try {
                if (!iframeEl || !iframeEl.contentWindow) return false;
                const win = iframeEl.contentWindow;
                const doc = win.document;
                if (!doc) return false;
                // avoid re-injecting
                if (iframeEl.__nexus_ctx_injected) return true;
                // attach via the iframe's document in capture phase
                doc.addEventListener('contextmenu', function(e){
                    try {
                        e.stopImmediatePropagation && e.stopImmediatePropagation();
                        e.stopPropagation && e.stopPropagation();
                        e.preventDefault && e.preventDefault();
                    } catch (err) {}
                }, true);
                // also block pointerdown secondary button inside iframe
                doc.addEventListener('pointerdown', function(ev){
                    try {
                        if (ev && ev.button === 2) {
                            ev.stopImmediatePropagation && ev.stopImmediatePropagation();
                            ev.stopPropagation && ev.stopPropagation();
                            ev.preventDefault && ev.preventDefault();
                        }
                    } catch (err) {}
                }, true);
                iframeEl.__nexus_ctx_injected = true;
                return true;
            } catch (err) {
                // cross-origin frames will throw on contentWindow.document access; ignore
                return false;
            }
        }

        // Attempt to inject into existing iframes (best-effort)
        Array.from(document.querySelectorAll('iframe')).forEach(iframe => {
            try {
                if (iframe && iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.readyState === 'complete') {
                    injectIntoIframe(iframe);
                } else {
                    // attach load handler to inject once ready
                    iframe.addEventListener('load', () => injectIntoIframe(iframe), { once: true, passive: true });
                }
            } catch (e) {
                // ignore cross-origin or inaccessible iframes
            }
        });

        // Observe DOM for dynamically added iframes to inject the blocker when possible
        const mo = new MutationObserver(muts => {
            for (const m of muts) {
                if (m.addedNodes && m.addedNodes.length) {
                    m.addedNodes.forEach(node => {
                        try {
                            if (node && node.tagName && node.tagName.toLowerCase() === 'iframe') {
                                const iframe = node;
                                if (iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.readyState === 'complete') {
                                    injectIntoIframe(iframe);
                                } else {
                                    iframe.addEventListener('load', () => injectIntoIframe(iframe), { once: true, passive: true });
                                }
                            } else if (node && node.querySelectorAll) {
                                // also handle iframes nested inside added subtrees
                                Array.from(node.querySelectorAll('iframe')).forEach(ifr => {
                                    if (ifr.contentWindow && ifr.contentWindow.document && ifr.contentWindow.document.readyState === 'complete') {
                                        injectIntoIframe(ifr);
                                    } else {
                                        ifr.addEventListener('load', () => injectIntoIframe(ifr), { once: true, passive: true });
                                    }
                                });
                            }
                        } catch (err) {
                            // ignore
                        }
                    });
                }
            }
        });
        mo.observe(document.documentElement || document.body, { childList: true, subtree: true });

        // Expose a no-op restore function for debugging or if you later want to re-enable context menus
        try {
            Object.defineProperty(window, '__nexus_allow_contextmenus', {
                configurable: true,
                enumerable: false,
                value: function restore() {
                    try {
                        document.removeEventListener('contextmenu', blockCtx, true);
                        document.removeEventListener('pointerdown', blockCtx, true);
                        mo.disconnect();
                    } catch (e) {}
                }
            });
        } catch (e) {}
    } catch (err) {
        // ensure non-fatal
        console.warn('disableContextMenus init failed', err);
    }
})();

/* Safety: ensure applyVolumeToGame exists at global scope before any enhancers run.
   Some enhancers (enhanceVolumeHandling) execute immediately and expect this function to exist.
   Provide a minimal, safe implementation that persists volume and posts a message if possible.
*/
function applyVolumeToGame(v){
    try{
        const vol = Math.max(0, Math.min(100, Number(v) || 0));
        try{ localStorage.setItem('nexus_game_volume', String(vol)); }catch(e){}
        // update icon if helper exists
        try{ if (typeof updateVolumeIcon === 'function') updateVolumeIcon(vol); }catch(e){}
        // best-effort postMessage to iframe
        try{
            if (window.gameFrame && window.gameFrame.contentWindow && typeof window.gameFrame.contentWindow.postMessage === 'function'){
                window.gameFrame.contentWindow.postMessage({ type: 'nexus:setVolume', volume: vol/100 }, '*');
            }
        }catch(e){}
    }catch(e){ console.warn('applyVolumeToGame fallback failed', e); }
}

// ===== Add updateVolumeIcon helper so volume UI updates reliably =====
function updateVolumeIcon(vol){
    try {
        const v = Math.max(0, Math.min(100, Number(vol) || 0));
        const iconEl = document.getElementById('volume-icon');
        if (!iconEl) return;
        // Determine icon state
        if (v === 0) {
            iconEl.className = 'fas fa-volume-mute text-sm sm:text-lg';
        } else if (v > 0 && v <= 30) {
            iconEl.className = 'fas fa-volume-down text-sm sm:text-lg';
        } else {
            iconEl.className = 'fas fa-volume-up text-sm sm:text-lg';
        }
        // Update aria-label for accessibility
        const slider = document.getElementById('volume-slider');
        if (slider) slider.setAttribute('aria-valuenow', String(v));
    } catch (e) {
        // non-fatal
    }
}

 // Categories for rows
const CATEGORIES = [
    { title: 'Trending Now', id: 'trending-container', filter: g => g.feat, color: 'blue-500' },
    { title: 'FPS & Competitive', id: 'fps-container', filter: g => (g.cat === 'FPS' || g.id === 'stumbleguys'), color: 'purple-500' },
    // Modified Arcade row: exclude specific IDs and always include Om Nom Run and Imagine Island
    { title: 'Arcade & Casual', id: 'arcade-container', filter: g => (
            // base categories
            (['Arcade', 'Rhythm', 'Simulation', 'Runner', 'Party Royale'].includes(g.cat)
                // exclude these specific games from this row
                && !['braintest2', 'ludoking', 'candycrush', 'rumblerush', 'stumbleguys', 'cuttheropemagic', 'cuttheropexp'].includes(g.id)
            )
            // always include these two games regardless of category
            || ['omnomrun', 'imagineisland'].includes(g.id)
        ), color: 'cyan-500' },
    { title: 'Horror & Survival', id: 'horror-container', filter: g => g.cat === 'Horror', color: 'red-500' },
    // Updated: Puzzles & Platform row shown after horror — includes both Puzzle and Platformer games (by category or explicit type)
    { title: 'Puzzles & Platform', id: 'puzzle-container', filter: g => (g.cat === 'Puzzle' || g.cat === 'Platformer' || (g.type && g.type === 'Platformer')), color: 'amber-400' }
];

// Add a small mapping from tailwind-like color tokens used in DB/CATEGORIES to hex pairs for gradient generation.
const COLOR_MAP = {
    'blue-500': ['#3b82f6','#7c3aed'],
    'purple-500': ['#7c3aed','#a855f7'],
    'cyan-500': ['#06b6d4','#06b6d4'],
    'red-500': ['#ef4444','#ef4444'],
    'indigo-400': ['#6366f1','#8b5cf6'],
    'amber-400': ['#f59e0b','#f97316'],
    'pink-500': ['#ec4899','#f472b6'],
    'lime-400': ['#a3e635','#84cc16'],
    'emerald-400': ['#34d399','#10b981'],
    'teal-400': ['#38bdf8','#06b6d4'],
    'yellow-300': ['#fcd34d','#f59e0b'],
    'green-500': ['#10b981','#34d399'],
    'pink-400': ['#f472b6','#fb7185'],
    'cyan-400': ['#67e8f9','#06b6d4'],
    'amber-400': ['#f59e0b','#f97316'],
    'indigo-500': ['#6366f1','#4f46e5'],
    'rose-500': ['#fb7185','#f43f5e'],
    'lime-400': ['#a3e635','#84cc16'],
    'sky-400': ['#38bdf8','#60a5fa'],
    'yellow-300': ['#fcd34d','#f59e0b']
    // add more mappings if new tokens are used
};

// --- STATE ---
let myList = [];
let activeGame = null;
let activeGameUsedBottomCut = false; // NEW: flag to detect games that used bottom-cut / srcdoc overlay
let currentUser = null;
let currentTab = 'home';
let searchTimeout = null;
let isModalOpen = false; // State flag to track if modal is logically open
let allowBackdropClose = false; // Safety flag to prevent immediate closing on initial click

// --- GLOBAL LOADER REFERENCE & HELPERS (new) ---
const globalLoader = document.getElementById('global-loader');
const globalLoaderTitle = document.getElementById('global-loader-title');
const globalLoaderSub = document.getElementById('global-loader-sub');
const globalLoaderBar = document.getElementById('global-loader-bar');
const globalLoaderHint = document.getElementById('global-loader-hint');

function showGlobalLoader({ title = 'Loading...', sub = 'Please wait while we prepare the session.', hint = '', progress = 0 } = {}) {
    try {
        if (!globalLoader) return;
        // Lock background scroll and gestures for mobile while loader is visible
        try { document.documentElement.classList.add('no-game-scroll'); } catch (e) {}

        // Update texts
        globalLoaderTitle.textContent = title;
        globalLoaderSub.textContent = sub;
        globalLoaderHint.textContent = hint;

        // Ensure visual structure: inject small helper wrapper for clearer layout (if not already present)
        if (!globalLoader.querySelector('.loader-card')) {
            // nothing to do, card exists in DOM; fallback handled by styles
        }

        // Make loader visible
        globalLoader.classList.remove('hidden');
        globalLoader.style.display = 'flex';
        globalLoader.style.opacity = '1';

        // animate a gentle indeterminate progress if zero
        if (progress === 0) {
            globalLoaderBar.style.width = '36%';
            // gentle step to signify activity on slow connections
            setTimeout(() => { if (globalLoaderBar) globalLoaderBar.style.width = '65%'; }, 700);
        } else {
            updateGlobalLoaderProgress(progress);
        }

        // For accessibility, ensure focus is moved into loader so screen readers announce it
        try {
            const firstFocusable = globalLoader.querySelector('button, [tabindex], a');
            if (firstFocusable) firstFocusable.focus();
        } catch (e) {}
    } catch (e) { console.warn('showGlobalLoader failed', e); }
}

function updateGlobalLoaderProgress(pct, text) {
    try {
        if (!globalLoader) return;
        globalLoaderBar.style.width = `${Math.min(100, Math.max(0, pct))}%`;
        if (text) globalLoaderSub.textContent = text;
    } catch (e) {}
}

function hideGlobalLoader(force = false) {
    try {
        if (!globalLoader) return;
        // finish progress animation visibly
        try { globalLoaderBar.style.width = '100%'; } catch (e) {}

        // short delay so user can perceive completion
        setTimeout(() => {
            // hide and restore background gestures
            globalLoader.classList.add('hidden');
            globalLoader.style.display = 'none';
            try { document.documentElement.classList.remove('no-game-scroll'); } catch (e) {}

            // reset bar gently for next time
            setTimeout(() => { if (globalLoaderBar) globalLoaderBar.style.width = '0%'; }, 160);
        }, 260);
    } catch (e) { console.warn('hideGlobalLoader failed', e); }
}

/* --- In-app confirmation dialog helper (Promise-based) --- */
function showConfirm({ title = 'Confirm', message = 'Are you sure?', okText = 'Confirm', cancelText = 'Cancel' } = {}) {
    return new Promise((resolve) => {
        try {
            const modal = document.getElementById('confirm-modal');
            if (!modal) {
                // fallback to native confirm when modal is missing
                const res = window.confirm(message);
                resolve(res);
                return;
            }
            const titleEl = modal.querySelector('#confirm-title');
            const msgEl = modal.querySelector('#confirm-message');
            const okBtn = modal.querySelector('#confirm-ok');
            const cancelBtn = modal.querySelector('#confirm-cancel');

            titleEl && (titleEl.textContent = title);
            msgEl && (msgEl.textContent = message);
            okBtn && (okBtn.textContent = okText);
            cancelBtn && (cancelBtn.textContent = cancelText);

            function cleanup(immediate = false) {
                // play closing animation then hide
                modal.classList.remove('confirm-show');
                modal.classList.add('confirm-hide');
                modal.setAttribute('aria-hidden', 'true');
                okBtn.removeEventListener('click', onOk);
                cancelBtn.removeEventListener('click', onCancel);
                document.removeEventListener('keydown', onKey);
                if (immediate) {
                    modal.classList.add('hidden');
                    modal.classList.remove('confirm-hide');
                } else {
                    // allow animation to complete
                    setTimeout(() => {
                        modal.classList.add('hidden');
                        modal.classList.remove('confirm-hide');
                    }, 300);
                }
            }

            function onOk(e) {
                e && e.preventDefault();
                cleanup();
                resolve(true);
            }
            function onCancel(e) {
                e && e.preventDefault();
                cleanup();
                resolve(false);
            }
            function onKey(e) {
                if (e.key === 'Escape') {
                    onCancel(e);
                } else if (e.key === 'Enter') {
                    onOk(e);
                }
            }

            okBtn.addEventListener('click', onOk);
            cancelBtn.addEventListener('click', onCancel);
            document.addEventListener('keydown', onKey);

            // show modal with animation
            modal.classList.remove('hidden', 'confirm-hide');
            // force reflow to ensure animation triggers
            void modal.offsetWidth;
            modal.classList.add('confirm-show');
            modal.setAttribute('aria-hidden', 'false');

            // focus safe default
            cancelBtn.focus();
        } catch (err) {
            console.warn('showConfirm error', err);
            const res = window.confirm(message);
            resolve(res);
        }
    });
}

// --- ELEMENTS ---
const loginScreen = document.getElementById('login-screen');
const appContainer = document.getElementById('app-container');
const usernameInput = document.getElementById('username-input');
const loginForm = document.getElementById('login-form');
const loginSubmit = document.getElementById('login-submit');

const userDisplayName = document.getElementById('user-display-name');
const heroSection = document.getElementById('hero-section');
const dynamicRows = document.getElementById('dynamic-rows');
const favoritesGrid = document.getElementById('favorites-grid');
const noFavoritesMsg = document.getElementById('no-favorites-msg');
const homeContent = document.getElementById('home-content');
const favoritesContent = document.getElementById('favorites-content');
const searchResultsContent = document.getElementById('search-results-content');
const searchResultsGrid = document.getElementById('search-results-grid');
const noSearchResultsMsg = document.getElementById('no-search-results-msg');
const searchInput = document.getElementById('search-input');
const searchQueryDisplay = document.getElementById('search-query-display');
const navbar = document.getElementById('navbar');

// add a small DOM reference for navbar count
const navbarFavButtons = document.querySelectorAll('[data-tab="favorites"]');

// Game layer
const gameLayer = document.getElementById('game-layer');
 // CHANGED: allow reassigning gameFrame to replace it cleanly on close to avoid stale/cross-origin inner-iframes causing black screens
let gameFrame = document.getElementById('game-frame');
const gameLoader = document.getElementById('loader');
const playingTitle = document.getElementById('playing-title');
const btnCloseGame = document.getElementById('btn-close-game');
const btnFullscreen = document.getElementById('btn-fullscreen');
const loadingStatus = document.getElementById('loading-status');
const gameFrameWrapper = document.getElementById('game-frame-wrapper'); // ADDED ELEMENT REFERENCE

// Helper: replace the iframe element with a fresh one and rebind the global reference.
// This avoids keeping references to old cross-origin documents which can lead to black screens or media continuing to play.
// It preserves essential attributes and event plumbing used elsewhere.
function resetGameFrame() {
    try {
        // Remove any existing iframe element safely
        const old = document.getElementById('game-frame');
        if (old && old.parentNode) {
            try {
                // remove listeners and stop media where possible before removing
                try { old.src = 'about:blank'; } catch (e){} // stop playback
                try { old.removeAttribute('src'); } catch (e) {}
                try { old.srcdoc = ''; } catch (e) {}
            } catch (e) {}
            old.parentNode.removeChild(old);
        }

        // Create a fresh iframe with the same attributes as the original expected markup
        const fresh = document.createElement('iframe');
        fresh.id = 'game-frame';
        fresh.className = 'w-full h-full border-none z-10';
        // expanded allow list for richer embedded experiences (camera/microphone/gyroscope if the embed requests)
        fresh.setAttribute('allow', 'autoplay; fullscreen; gamepad; gyroscope; microphone; camera; clipboard-read; clipboard-write');
        fresh.setAttribute('allowfullscreen', '');
        // sandbox kept minimal to avoid breaking embeds (matches initial markup)
        fresh.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-pointer-lock allow-forms');

        // ensure it fills the wrapper
        fresh.style.width = '100%';
        fresh.style.height = '100%';
        fresh.style.border = 'none';
        // On mobile, use eager loading to reduce perceived startup latency for game iframes;
        // desktop keeps lazy to avoid extra bandwidth.
        try {
            fresh.loading = (window.innerWidth && window.innerWidth < 640) ? 'eager' : 'lazy';
        } catch (e) {
            fresh.loading = 'lazy';
        }

        // append to wrapper
        if (gameFrameWrapper) {
            gameFrameWrapper.appendChild(fresh);
        } else {
            // fallback: append to body
            document.body.appendChild(fresh);
        }

        // rebind references used across the app
        gameFrame = fresh;
        window.gameFrame = fresh;

        // Re-apply lightweight contextmenu blocking on the outer iframe element itself
        try {
            fresh.addEventListener('contextmenu', function(ev){ try{ ev.preventDefault(); }catch(e){} }, { passive: false });
        } catch (e) {}

        return fresh;
    } catch (err) {
        console.warn('resetGameFrame failed', err);
        return document.getElementById('game-frame');
    }
}

// NEW: hide-toolbar button ref
const btnHideToolbar = document.getElementById('btn-hide-toolbar');
const gameLayerToolbar = document.querySelector('#game-layer > .glass-nav');

// Modal
const detailsModal = document.getElementById('details-modal');
const modalCard = document.getElementById('modal-card');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalCat = document.getElementById('modal-cat');
const modalControls = document.getElementById('modal-controls');
const modalBanner = document.getElementById('modal-banner');
const modalPlayBtn = document.getElementById('modal-play-btn');
const modalListBtn = document.getElementById('modal-list-btn');
const modalClose = document.getElementById('modal-close');
// Added refs for developer and year
const modalDeveloper = document.getElementById('modal-developer');
const modalYear = document.getElementById('modal-year');

// --- INITIALIZATION ---
function loadState() {
    try {
        const storedList = localStorage.getItem('nexus_mylist');
        if (storedList) myList = JSON.parse(storedList) || [];
    } catch {
        myList = [];
    }
}

function saveList() {
    try {
        localStorage.setItem('nexus_mylist', JSON.stringify(myList));
    } catch {
        // ignore quota errors
    }
}

function checkSession() {
    loadState();
    try {
        const savedRaw = localStorage.getItem('nexus_user');
        if (savedRaw) {
            // savedUser may be a JSON string or a simple name; safely parse if possible
            let parsed = null;
            try {
                parsed = JSON.parse(savedRaw);
            } catch (e) {
                parsed = savedRaw;
            }
            // prefer explicit name field if present; otherwise pass the raw string
            const nameToUse = parsed && typeof parsed === 'object' && parsed.name ? parsed.name : (typeof parsed === 'string' ? parsed : String(parsed));
            enterApp(nameToUse);
            return;
        }
    } catch (e) {
        console.warn('checkSession parsing user failed', e);
    }
    // keep login visible
    loginScreen.style.opacity = '1';
    loginScreen.style.pointerEvents = 'auto';
}

function handleLoginSubmit(e) {
    try {
        e && e.preventDefault && e.preventDefault();
        const username = (usernameInput && usernameInput.value || '').trim();
        const password = (document.getElementById('password-input') && document.getElementById('password-input').value) || '';
        const remember = !!document.getElementById('remember-checkbox') && document.getElementById('remember-checkbox').checked;
        const errEl = document.getElementById('login-error');
        if (errEl) { errEl.textContent = ''; errEl.classList.add('hidden'); }

        // Basic client-side validation
        if (!username || username.length < 3) {
            if (errEl) { errEl.textContent = 'Choose a username with at least 3 characters.'; errEl.classList.remove('hidden'); }
            usernameInput && usernameInput.focus();
            return;
        }
        if (!password || password.length < 6) {
            if (errEl) { errEl.textContent = 'Password must be at least 6 characters.'; errEl.classList.remove('hidden'); }
            const pwd = document.getElementById('password-input');
            pwd && pwd.focus();
            return;
        }

        // show a non-blocking loader and simulate asynchronous authentication
        showGlobalLoader({ title: 'Signing in...', sub: 'Verifying credentials...', hint: '', progress: 24 });

        // small UX touch: update avatar preview to match entered name while waiting
        try {
            const initials = username.split(/\s+/).slice(0,2).map(s => s[0]?.toUpperCase() || '').join('').slice(0,2) || username[0]?.toUpperCase() || 'U';
            const avatarEl = document.getElementById('login-avatar-initials');
            if (avatarEl) avatarEl.textContent = initials;
        } catch (e) {}

        // Fake auth call (replace with real endpoint easily)
        setTimeout(() => {
            try {
                // Simple deterministic "failure" simulation for trivial passwords (for realism)
                if (password === 'password' || username.toLowerCase().includes('test') && password.length < 8) {
                    hideGlobalLoader();
                    if (errEl) { errEl.textContent = 'Invalid credentials. Try again.'; errEl.classList.remove('hidden'); }
                    showToast('Sign in failed.', { icon: 'fas fa-exclamation-circle' });
                    return;
                }

                // Build a richer user object to persist
                const userObj = {
                    name: username,
                    initials: (username.split(/\s+/).slice(0,2).map(s => s[0]?.toUpperCase()).join('').slice(0,2)) || username[0]?.toUpperCase(),
                    loggedAt: Date.now(),
                    remember: !!remember
                };

                // persist user according to remember preference
                try {
                    if (remember) localStorage.setItem('nexus_user', JSON.stringify(userObj));
                    else sessionStorage.setItem('nexus_user_temp', JSON.stringify(userObj));
                } catch (e) {}

                // update UI quickly and enter app
                try {
                    updateUserDisplay(userObj);
                } catch (e) {}

                hideGlobalLoader();
                showToast(`Welcome, ${userObj.name}!`);
                enterApp(userObj.name || username);
            } catch (err) {
                hideGlobalLoader();
                console.warn('login simulation failed', err);
                showToast('Unexpected error during sign in.', { icon: 'fas fa-exclamation-triangle' });
            }
        }, 900 + Math.floor(Math.random() * 700)); // small randomized delay for realism
    } catch (err) {
        console.warn('handleLoginSubmit error', err);
    }
}

// helper to update topbar avatar and display name when login succeeds
function updateUserDisplay(user) {
    try {
        const display = document.getElementById('user-display-name');
        const avatar = document.querySelector('#navbar .w-8') || document.querySelector('#navbar .w-9');
        if (display && user && user.name) {
            const shortName = user.name.length > 12 ? user.name.slice(0, 12) + '…' : user.name;
            display.textContent = shortName;
            display.classList.remove('hidden');
            // also update mobile account name element when present
            const mobileName = document.getElementById('user-display-name-mobile');
            if (mobileName) mobileName.textContent = shortName;
        }
        if (avatar && user && user.initials) {
            avatar.textContent = user.initials.slice(0,2);
        }
    } catch (e) {}
}

// --- DEEP LINK / SHARE SYSTEM ---
// Build a stable share URL that works even when hosted locally or outside Websim.
// It uses the current location origin and pathname when available, and includes ?game=<id>.
// If origin isn't available (file://), falls back to pathname only.
function buildShareUrlForGame(id) {
    try {
        // Build from origin + clean pathname so we don't reuse any existing query/hash
        const base = `${window.location.origin}${window.location.pathname}`;
        const url = new URL(base);
        url.searchParams.set('game', id);
        return url.toString();
    } catch (e) {
        // fallback for unusual environments (file:// ou restrito)
        const path = (location && location.pathname) ? location.pathname : '';
        return `${path}?game=${encodeURIComponent(id)}`;
    }
}

async function shareGameLink(id) {
    const game = getGameById(id);
    if (!game) return;

    const shareUrl = buildShareUrlForGame(id);
    const title = `Play ${game.title} on Nexus`;
    const text = `${game.title} — ${game.desc}\n\nOpen in Nexus: ${shareUrl}`;

    if (navigator.share) {
        try {
            await navigator.share({ title, text, url: shareUrl });
            showToast('Share dialog opened.');
            return true;
        } catch (err) {}
    }

    try {
        await navigator.clipboard.writeText(`${title}\n\n${text}`);
        showToast('Nexus link copied to clipboard.');
        return true;
    } catch (err) {
        showToast('Unable to copy. Use the browser share menu.');
        return false;
    }
}

// When page loads, check URL param ?game=ID and open that game's details (deep-link)
function handleDeepLinkOnLoad() {
    try {
        const params = new URLSearchParams(window.location.search);
        const gid = params.get('game');
        if (gid) {
            // Wait until app initial UI is ready
            const attemptOpen = () => {
                // if DB not ready or init not completed, try again shortly
                if (typeof DB === 'undefined' || !document.body) {
                    setTimeout(attemptOpen, 180);
                    return;
                }
                const game = getGameById(gid);
                if (game) {
                    // If user not logged in yet, delay until enterApp runs
                    if (!currentUser) {
                        // open after enterApp runs
                        const onEnter = () => {
                            openDetails(gid);
                            window.removeEventListener('nexus:entered', onEnter);
                        };
                        window.addEventListener('nexus:entered', onEnter);
                    } else {
                        openDetails(gid);
                    }
                }
            };
            attemptOpen();
        }
    } catch (err) {
        // ignore parsing issues
    }
}

// modify enterApp to dispatch event so deep-link waiting can open modal after login
function enterApp(username) {
    currentUser = username;
    const shortName = username.length > 12 ? username.slice(0, 12) + '…' : username;
    userDisplayName.textContent = shortName;

    // NEW: also update mobile display name and navbar avatar initials so mobile shows the signed-in user (not "Guest")
    try {
        const mobileName = document.getElementById('user-display-name-mobile');
        if (mobileName) mobileName.textContent = shortName;

        // update avatar initials in navbar if present
        const avatar = document.querySelector('#navbar .w-8, #navbar .w-9, #navbar .user-avatar-mobile-hide');
        if (avatar) {
            const initials = (username.split(/\s+/).slice(0,2).map(s => s[0]?.toUpperCase() || '').join('').slice(0,2)) || username[0]?.toUpperCase();
            avatar.textContent = initials;
            // ensure avatar is visible on mobile (in case any inline styles previously hid it)
            avatar.style.display = '';
        }
    } catch (e) { /* non-fatal */ }

    loginScreen.style.opacity = '0';
    loginScreen.style.pointerEvents = 'none';

    setTimeout(() => {
        loginScreen.style.display = 'none';
        appContainer.style.opacity = '1';
        appContainer.style.pointerEvents = 'auto';
        initApp();

        // Reveal mobile bottom bar after successful login (was hidden until auth)
        try {
            const mobileBar = document.querySelector('.mobile-bottom-bar');
            if (mobileBar) {
                mobileBar.classList.remove('hidden');
                mobileBar.setAttribute('aria-hidden', 'false');
                // remove any inline display override so CSS rules take effect
                mobileBar.style.removeProperty('display');
            }
        } catch (e) { /* non-fatal */ }

        // notify deep-link that app has entered
        try { window.dispatchEvent(new Event('nexus:entered')); } catch (e) {}
    }, 350);
}

// --- INIT APP (added) ---
function initApp() {
    try {
        // Basic render
        renderAllRows();
        renderHero();

        // Wire interactions
        wireTabs();
        wireSearch();
        wireNavbarScroll();
        wireModal();
        // Wire "View all" buttons added beside row arrows to show the full list for that section
        try { wireRowViewAll(); } catch (e) {}
        wireGameControls();

        // iOS-specific adjustments: allow hiding the in-game toolbar without entering fullscreen and remove the fullscreen button for iOS.
        try {
            if (isIos()) {
                // ensure hide-toolbar control is always visible on iOS so users can hide toolbar while not in fullscreen
                if (btnHideToolbar) btnHideToolbar.classList.remove('hidden');
                // remove the fullscreen button on iOS to prevent broken native fullscreen attempts
                if (btnFullscreen) btnFullscreen.classList.add('hidden');

                // Inject lightweight CSS for the iOS small close button if not already present
                if (!document.getElementById('nexus-ios-close-style')) {
                    const style = document.createElement('style');
                    style.id = 'nexus-ios-close-style';
                    style.textContent = `
                        #nexus-ios-small-close {
                            position: fixed;
                            left: 10px;
                            top: calc(env(safe-area-inset-top, 12px) + 12px);
                            z-index: 13000;
                            width: 44px;
                            height: 44px;
                            border-radius: 10px;
                            background: rgba(0,0,0,0.5);
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            color: #fff;
                            box-shadow: 0 8px 22px rgba(0,0,0,0.5);
                            border: 1px solid rgba(255,255,255,0.06);
                            backdrop-filter: blur(6px);
                            -webkit-backdrop-filter: blur(6px);
                            touch-action: manipulation;
                        }
                        /* hidden by default */
                        #nexus-ios-small-close.hidden { display: none !important; }
                        /* slightly larger hit area on very small phones */
                        @media(max-width:420px){ #nexus-ios-small-close { width:48px;height:48px;left:8px; } }
                    `;
                    document.head.appendChild(style);
                }

                // Create the small close button (if missing) and keep it hidden until toolbar is hidden
                if (!document.getElementById('nexus-ios-small-close')) {
                    const closeBtn = document.createElement('button');
                    closeBtn.id = 'nexus-ios-small-close';
                    closeBtn.className = 'hidden';
                    closeBtn.type = 'button';
                    closeBtn.title = 'Close';
                    closeBtn.innerHTML = '<i class="fas fa-times"></i>';
                    // ensure tap is handled and closes game
                    closeBtn.addEventListener('click', (ev) => {
                        ev.preventDefault();
                        ev.stopPropagation();
                        try { closeGame(); } catch (e) {}
                    }, { passive: false });
                    document.body.appendChild(closeBtn);
                }

                // ensure toolbar is visible initially (do not auto-hide) and small close remains hidden
                try {
                    const smallClose = document.getElementById('nexus-ios-small-close');
                    if (smallClose) smallClose.classList.add('hidden');
                } catch (e) {}
            }
        } catch (e) {
            // non-fatal
        }

        // Start trending auto-refresh with conservative interval
        startTrendingAutoRefresh(12000);

        // Ensure any leftover iOS small-close button is removed (we do not want an "X" present on the left in any circumstance)
        try {
            const iosClose = document.getElementById('nexus-ios-small-close');
            if (iosClose && iosClose.parentNode) iosClose.parentNode.removeChild(iosClose);
        } catch (e) {}

        // Process deep link if present
        handleDeepLinkOnLoad();

        // Ensure favorites state is reflected
        renderFavorites();

        // Improve accessibility: focus main content area if possible
        try { document.getElementById('hero-section')?.focus(); } catch (e) {}

        // Apply stored volume to UI and game right after controls wired
        try {
            const saved = parseInt(localStorage.getItem('nexus_game_volume'), 10);
            const slider = document.getElementById('volume-slider');
            if (!isNaN(saved) && slider) {
                slider.value = Math.min(100, Math.max(0, saved));
                // ensure icon and game are updated to reflect persisted volume
                try { updateVolumeIcon(saved); } catch (e) {}
                try { applyVolumeToGame(saved); } catch (e) {}
            } else if (slider) {
                // no saved value: use slider's current value as initial source of truth
                try { updateVolumeIcon(Number(slider.value)); } catch (e) {}
                try { applyVolumeToGame(Number(slider.value)); } catch (e) {}
            }
        } catch (e) {}

        // Small performance tweak: pause trending when page hidden
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                if (_trendingInterval) clearInterval(_trendingInterval);
            } else {
                startTrendingAutoRefresh(12000);
            }
        }, { passive: true });
    } catch (err) {
        console.error('initApp failed', err);
    }
}

// --- TRENDING AUTO-REFRESH ---
let _trendingInterval = null;
function shuffleArray(arr) {
    // Fisher-Yates shuffle (non-mutating)
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function refreshTrendingRow() {
    const containerId = 'trending-container';
    const container = document.getElementById(containerId);
    if (!container) return;

    // Build a smarter rotating pool:
    // - prioritize featured games but rotate them deterministically so users see variety across visits
    // - occasionally (weighted) inject a non-featured "surprise" pick
    // - ensure we always fill visible slots even on narrow viewports
    const allFeatured = DB.filter(g => g.feat);
    const allNonFeat = DB.filter(g => !g.feat);

    if (allFeatured.length === 0 && allNonFeat.length === 0) return;

    // compute visible count based on container width with reasonable bounds
    const visibleCount = Math.max(4, Math.min(8, Math.floor(container.clientWidth / 220) || 5));

    // Deterministic rotation index derived from time to avoid pure randomness per tick
    const rotateSeed = Math.floor(Date.now() / (1000 * 10)) ; // rotate every 10s
    function rotate(arr, seed) {
        if (!arr || !arr.length) return arr.slice();
        const a = arr.slice();
        const k = Math.abs(seed) % a.length;
        return a.slice(k).concat(a.slice(0, k));
    }

    // create base pool: featured rotated, but if not enough, append highest-quality non-featured picks
    let pool = rotate(allFeatured.length ? allFeatured : allNonFeat, rotateSeed);

    // If pool is too small, append some non-featured, chosen deterministically
    if (pool.length < visibleCount) {
        const filler = rotate(allNonFeat, rotateSeed + 7).slice(0, visibleCount - pool.length);
        pool = pool.concat(filler);
    }

    // Weighted surprise injection: 20% chance to include 1-2 non-feature "discoveries"
    if (Math.random() < 0.20 && allNonFeat.length) {
        const picks = shuffleArray(allNonFeat).slice(0, Math.min(2, allNonFeat.length));
        // interleave picks to keep UI varied
        picks.forEach((p, i) => {
            pool.splice(1 + i * 2, 0, p);
        });
    }

    // select final visible list but keep stable order relative to rotated pool
    const newSelection = pool.filter(Boolean).slice(0, visibleCount);

    // Minimal DOM diffing: update, reorder, insert, remove as necessary
    const existingCards = Array.from(container.querySelectorAll('[data-card-game-id]')).map(n => n.getAttribute('data-card-game-id'));
    const newIds = newSelection.map(g => g.id);

    const shouldRebuild = existingCards.length === 0 || Math.abs(existingCards.length - newIds.length) > 4;

    if (shouldRebuild) {
        // Rebuild with gentle animations
        container.innerHTML = newSelection.map(g => createCard(g, false)).join('');
        container.querySelectorAll('[data-card-game-id]').forEach((el, idx) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(10px)';
            requestAnimationFrame(() => {
                el.style.transition = 'opacity 360ms ease, transform 360ms cubic-bezier(.22,.9,.35,1)';
                el.style.opacity = '1';
                el.style.transform = '';
            });
        });
    } else {
        // Patch in place: move existing, insert missing, remove extras
        newSelection.forEach((g, idx) => {
            const existing = container.querySelector(`[data-card-game-id="${g.id}"]`);
            if (existing) {
                const currentNode = container.children[idx];
                if (currentNode !== existing) {
                    container.insertBefore(existing, currentNode || null);
                }
            } else {
                const wrapper = document.createElement('div');
                wrapper.innerHTML = createCard(g, false);
                const newNode = wrapper.firstElementChild;
                newNode.style.opacity = '0';
                newNode.style.transform = 'translateY(10px)';
                const ref = container.children[idx] || null;
                container.insertBefore(newNode, ref);
                requestAnimationFrame(() => {
                    newNode.style.transition = 'opacity 360ms ease, transform 360ms cubic-bezier(.22,.9,.35,1)';
                    newNode.style.opacity = '1';
                    newNode.style.transform = '';
                });
            }
        });

        // remove leftovers
        existingCards.forEach(id => {
            if (!newIds.includes(id)) {
                const node = container.querySelector(`[data-card-game-id="${id}"]`);
                if (node) {
                    node.style.transition = 'opacity 220ms ease, transform 220ms ease';
                    node.style.opacity = '0';
                    node.style.transform = 'translateY(12px)';
                    setTimeout(() => {
                        if (node.parentNode) node.parentNode.removeChild(node);
                        updateCardFavoriteState(id);
                    }, 260);
                }
            }
        });
    }

    // ensure event handlers are attached
    attachCardEvents();

    // nudge scroll-state update
    requestAnimationFrame(() => container.dispatchEvent(new Event('scroll')));
}

function startTrendingAutoRefresh(intervalMs = 12000) {
    // clear any previous interval
    try {
        if (_trendingInterval) {
            try { ResourceTracker.clearInterval(_trendingInterval); } catch(e){}
            _trendingInterval = null;
        }
    } catch(e){}
    // initial refresh so user sees variation quickly
    refreshTrendingRow();
    // set periodic refresh with modest frequency for performance
    _trendingInterval = ResourceTracker.setInterval(() => {
        try {
            refreshTrendingRow();
            // occasionally also refresh hero to match trending vibe (small 8% chance)
            if (Math.random() < 0.08) renderHero();
        } catch (err) {
            console.warn('Trending refresh failed', err);
        }
    }, intervalMs);
}

// Optional: clear on unload to avoid leaks
window.addEventListener('beforeunload', () => {
    if (_trendingInterval) {
        try { ResourceTracker.clearInterval(_trendingInterval); } catch(e){}
        _trendingInterval = null;
    }
});

// --- TABS ---
function wireTabs() {
    // include both desktop and mobile tab elements
    document.querySelectorAll('.tab-btn, .tab-chip').forEach(btn => {
        // use pointerdown for snappier touch response and to avoid 300ms delays on some devices
        const handler = (ev) => {
            // ensure we only handle primary pointers
            if (ev.isPrimary === false) return;
            ev.preventDefault(); // immediate visual response; click will be synthesized or ignored
            const tab = btn.getAttribute('data-tab');
            // If the tab is already active, do nothing to avoid unnecessary refreshes
            if (tab === currentTab) return;
            switchTab(tab);
        };
        // Register via ResourceTracker so listeners can be removed centrally if needed
        ResourceTracker.addListener(btn, 'pointerdown', handler, { passive: false });
        // also listen for touchend as a fallback on older browsers
        ResourceTracker.addListener(btn, 'touchend', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const tab = btn.getAttribute('data-tab');
            if (tab === currentTab) return;
            switchTab(tab);
        }, { passive: false });
    });

    // Ensure desktop Favorites button also has a reliable click handler (fix: favorites button not responding)
    try {
        const desktopFav = document.getElementById('tab-favorites');
        if (desktopFav && !desktopFav.__nexus_click_bound) {
            desktopFav.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                if (currentTab !== 'favorites') switchTab('favorites');
            }, { passive: true });
            desktopFav.__nexus_click_bound = true;
        }
    } catch (e) {
        console.warn('wireTabs: failed to attach explicit favorites click handler', e);
    }
}

function switchTab(tabName) {
    currentTab = tabName;

    // Reset search view
    searchInput.value = '';
    searchResultsContent.classList.add('hidden');

    // hide all main content panes gracefully with crossfade
    const panes = [homeContent, favoritesContent, searchResultsContent];
    panes.forEach(el => {
        el.classList.remove('animate-fade-in');
        el.classList.add('page-fade');
        el.classList.remove('show');
        // ensure non-active panes are hidden to avoid overlap
        el.classList.add('hidden');
    });

    // small helper to show a pane with animation
    const showPane = (el) => {
        if (!el) return;
        el.classList.remove('hidden');
        // ensure reflow then show
        void el.offsetWidth;
        el.classList.add('show');
        requestAnimationFrame(() => {
            el.classList.add('animate-fade-in');
        });
    };

    if (tabName === 'home') {
        showPane(homeContent);
    } else if (tabName === 'favorites') {
        renderFavorites();
        showPane(favoritesContent);
    } else {
        // fallback: show home
        showPane(homeContent);
    }

    // cleanup page-fade classes after transition so reused animations run correctly
    setTimeout(() => {
        panes.forEach(el => {
            el.classList.remove('page-fade');
        });
    }, 360);

    // update active states on all tab elements sharing same data-tab
    document.querySelectorAll('.tab-btn, .tab-chip').forEach(btn => {
        btn.classList.remove('tab-btn-active');
        const data = btn.getAttribute('data-tab');
        if (data === tabName) {
            btn.classList.add('tab-btn-active');
        }
    });
}

// --- RENDERING ---
function getGameById(id) {
    return DB.find(g => g.id === id);
}

function updateCardFavoriteState(id) {
    // Keep visual state consistent immediately across all card types
    const isFav = myList.includes(id);
    const classicIconClass = isFav ? 'fas fa-check text-green-400' : 'far fa-heart';
    const compactIconClass = isFav ? 'fas fa-check text-green-400' : 'far fa-heart';

    // Update classic row card hearts
    document.querySelectorAll(`[data-card-game-id="${id}"] .card-fav`).forEach(btn => {
        btn.setAttribute('aria-pressed', isFav ? 'true' : 'false');
        const icon = btn.querySelector('i');
        if (icon) {
            // animate heart fill/unfill for immediate feedback
            icon.className = classicIconClass + ' text-xs';
            icon.animate([
                { transform: 'scale(0.88)', opacity: 0.6 },
                { transform: 'scale(1.12)', opacity: 1 },
                { transform: 'scale(1)' }
            ], { duration: 260, easing: 'cubic-bezier(.22,.9,.35,1)' });
        }
    });

    // Update compact hearts used in search/favorites
    document.querySelectorAll(`[data-card-game-id="${id}"] .compact-fav`).forEach(btn => {
        btn.setAttribute('aria-pressed', isFav ? 'true' : 'false');
        const icon = btn.querySelector('i');
        if (icon) {
            icon.className = compactIconClass;
            icon.animate([
                { transform: 'translateY(2px) scale(0.9)', opacity: 0.7 },
                { transform: 'translateY(-2px) scale(1.08)', opacity: 1 },
                { transform: 'translateY(0) scale(1)' }
            ], { duration: 260, easing: 'cubic-bezier(.22,.9,.35,1)' });
        }
        btn.classList.toggle('is-favorited', isFav);
    });

    // Update any hero area state if present
    const heroGameId = heroSection.querySelector('.hero-play')?.getAttribute('data-game-id');
    if (heroGameId === id) {
        const heroIcon = document.getElementById('hero-list-icon');
        const heroText = heroIcon?.nextElementSibling;
        if (heroIcon) heroIcon.className = isFav ? 'fas fa-check text-green-400' : 'far fa-heart';
        if (heroText) heroText.textContent = isFav ? 'Added' : 'Favorites';
    }
}

function renderHero() {
    const featured = DB.filter(g => g.feat);
    if (!featured.length) return;

    const availableGames = featured.filter(g => !myList.includes(g.id));
    const pool = availableGames.length ? availableGames : featured;
    const game = pool[Math.floor(Math.random() * pool.length)];
    if (!game) return;

    heroSection.style.backgroundImage = `url('${game.banner}')`;

    const isFav = myList.includes(game.id);

    heroSection.innerHTML = `
        <div class="absolute inset-0 hero-gradient-side"></div>
        <div class="absolute inset-0 hero-gradient-bottom"></div>

        <div class="relative z-10 w-full p-5 sm:p-8 lg:p-10 mb-3 max-w-3xl animate-fade-in">
            <div class="flex items-center gap-2 mb-3 text-xs">
                <span class="bg-purple-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider shadow-md shadow-purple-600/50">Featured</span>
                <span class="text-purple-300 font-semibold text-[11px] tracking-wider uppercase">${game.cat}</span>
            </div>

            <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight drop-shadow-2xl text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-300">
                ${game.title}
            </h1>

            <p class="text-gray-300 text-xs sm:text-sm lg:text-base mb-5 line-clamp-3 max-w-xl font-light leading-relaxed drop-shadow-md border-l-2 border-purple-500/60 pl-3">
                ${game.desc}
            </p>

            <div class="flex flex-wrap gap-3">
                <button data-game-id="${game.id}"
                        class="hero-play bg-white text-black px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-sm flex items-center gap-2 hover:bg-gray-200 transition transform hover:scale-[1.02] active:scale-[0.97] shadow-[0_0_20px_rgba(255,255,255,0.28)]">
                    <i class="fas fa-play text-xs sm:text-sm"></i> Play
                </button>
                <button data-game-id="${game.id}"
                        class="hero-fav bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm flex items-center gap-2 hover:bg-white/18 transition transform hover:scale-[1.02] active:scale-[0.97]">
                    <i class="${isFav ? 'fas fa-check text-green-400' : 'far fa-heart'}" id="hero-list-icon"></i>
                    <span class="hidden xs:inline">${isFav ? 'Added' : 'Favorites'}</span>
                </button>
            </div>
        </div>
    `;

    heroSection.querySelector('.hero-play')?.addEventListener('click', () => playGame(game.id));
    heroSection.querySelector('.hero-fav')?.addEventListener('click', () => toggleFavorites(game.id, 'hero'));
}

function createCard(game, isGrid = false) {
    const baseClasses = isGrid
        ? 'game-card enter h-36 sm:h-40 rounded-xl overflow-hidden relative cursor-pointer group bg-gray-800/90 border border-gray-800 hover:border-purple-500/60 shadow-lg transition-all flex'
        : 'game-card enter flex-none w-[220px] sm:w-[260px] lg:w-[300px] aspect-video rounded-xl overflow-hidden relative cursor-pointer group bg-gray-800/90 border border-gray-800 hover:border-purple-500/60 shadow-lg';
    
    const imageSize = isGrid ? 'w-5/12 h-full' : 'w-full h-full';
    const contentClasses = isGrid
        ? 'w-7/12 p-3 sm:p-4 flex flex-col justify-between'
        : 'absolute inset-0 p-3 sm:p-4 flex flex-col justify-end translate-y-1 group-hover:translate-y-0 transition-transform duration-300';

    const isFav = myList.includes(game.id);

    // Add data-fav-id attribute to favorite buttons so delegated handlers can read id directly and more reliably
    return `
        <div class="${baseClasses}" data-card-game-id="${game.id}">
            <img src="${game.banner}"
                 class="${imageSize} object-cover transition-transform duration-700 group-hover:scale-110"
                 loading="lazy"
                 onerror="this.onerror=null;this.src='https://placehold.co/600x337/020617/64748b?text=Image+unavailable'">

            ${!isGrid ? '<div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>' : ''}

            <div class="${contentClasses}">
                <div class="space-y-1">
                    <span class="text-[9px] uppercase font-bold tracking-widest text-gray-300 bg-white/10 px-1.5 py-0.5 rounded hidden sm:inline-block">${game.cat}</span>
                    <h3 class="text-white font-semibold text-sm sm:text-base leading-tight mb-1 drop-shadow-md group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all line-clamp-2">
                        ${game.title}
                    </h3>
                </div>

                <div class="flex items-center justify-between mt-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200">
                    <button class="card-play px-2.5 py-1.5 rounded-full bg-white text-black flex items-center gap-1 font-semibold text-[11px] hover:scale-105 transition active:scale-95" type="button">
                        <i class="fas fa-play text-[10px]"></i> Play
                    </button>
                    <button class="card-fav w-7 h-7 rounded-full bg-white/20 text-white backdrop-blur-sm flex items-center justify-center hover:bg-white/35 transition active:scale-90" aria-label="Favorite" data-fav-id="${game.id}" type="button">
                        <i class="${isFav ? 'fas fa-check text-green-400 text-xs' : 'far fa-heart'}"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

// NEW: compact, consistent grid/list card used for Search and Favorites (with enter animation)
function createCompactCard(game) {
    const isFav = myList.includes(game.id);
    // Add data-fav-id so favorites can be toggled directly from the button without walking DOM in some edge cases
    return `
      <div class="compact-card enter" data-card-game-id="${game.id}" role="button" tabindex="0">
        <div class="compact-thumb">
          <img src="${game.banner}"
               loading="lazy"
               onerror="this.onerror=null;this.src='https://placehold.co/400x225/020617/64748b?text=Image+unavailable'">
        </div>
        <div class="compact-body">
          <div class="compact-meta">
            <div class="compact-title">${game.title}</div>
            <div class="compact-cat">${game.cat}</div>
          </div>
          <div class="compact-actions">
            <button class="compact-play" aria-label="Play ${game.title}" type="button"><i class="fas fa-play"></i></button>
            <button class="compact-fav" aria-label="Favorite ${game.title}" data-fav-id="${game.id}" type="button"><i class="${isFav ? 'fas fa-check text-green-400' : 'far fa-heart'}"></i></button>
          </div>
        </div>
      </div>
    `;
}

function createRow(category) {
    const games = DB.filter(category.filter);
    if (!games.length) return '';

    // compute gradient from category.color using COLOR_MAP, fallback to subtle purple gradient
    let start = '#7c3aed', end = '#06b6d4';
    try {
        if (category.color && COLOR_MAP[category.color]) {
            [start, end] = COLOR_MAP[category.color];
        } else if (category.color && typeof category.color === 'string') {
            // fallback: try to interpret hyphenated token and create a slight tint
            start = '#7c3aed';
            end = '#06b6d4';
        }
    } catch (e) {
        start = '#7c3aed'; end = '#06b6d4';
    }

    // Use the category color to create a subtle section background accent (light gradient).
    // Also expose a CSS variable --row-accent-<id> so CSS can reference it when needed.
    const sectionStyle = `--row-accent-${category.id}: linear-gradient(90deg, ${start} 0%, ${end} 100%); background: linear-gradient(180deg, rgba(255,255,255,0.00), rgba(255,255,255,0.00)); padding:12px; border-radius:12px;`;

    return `
        <section class="animate-fade-in row-section" style="${sectionStyle} margin-top:6px; margin-bottom:6px;">
            <div class="flex items-center justify-between mb-3">
                <h2 class="text-base sm:text-lg font-bold text-white tracking-wide border-l-4 pl-3" style="border-left-color: var(--row-accent-${category.id}, rgba(124,58,237,0.6)); background-clip: padding-box;">
                    ${category.title}
                </h2>
                <div class="row-controls mr-1" style="display:flex; gap:8px; align-items:center;">
                    <button type="button" class="row-nav-button" data-target="${category.id}" data-dir="-1" aria-label="Rolar para esquerda" aria-disabled="true">
                        <i class="fas fa-chevron-left"></i>
                    </button>

                    <!-- View All button (opens search/results with all games from this category) -->
                    <button type="button" class="row-view-all row-nav-button" data-cat-id="${category.id}" aria-label="Ver todos os jogos">
                        <i class="fas fa-list"></i>
                    </button>

                    <button type="button" class="row-nav-button" data-target="${category.id}" data-dir="1" aria-label="Rolar para direita" aria-disabled="false">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>
            <div class="flex overflow-x-auto gap-3 sm:gap-4 hide-scroll pb-6" id="${category.id}">
                ${games.map(g => createCard(g, false)).join('')}
            </div>
        </section>
    `;
}

function renderAllRows() {
    dynamicRows.innerHTML = CATEGORIES.map(createRow).join('');
    attachRowEvents();
    attachCardEvents();
    // ensure nav buttons reflect initial scroll positions
    CATEGORIES.forEach(cat => {
        const container = document.getElementById(cat.id);
        if (container) {
            const evt = new Event('scroll');
            container.dispatchEvent(evt);
        }
    });
}

function renderFavorites() {
    // Use the same visual language as home/search by reusing createCard for a consistent experience.
    const favorites = myList.map(id => getGameById(id)).filter(Boolean);

    // Prepare header and controls (unchanged behavior but simplified rendering)
    const existingHeader = favoritesContent.querySelector('.favorites-header');
    const currentView = localStorage.getItem('nexus_fav_view') || 'grid';
    const currentSort = localStorage.getItem('nexus_fav_sort') || 'added';

    const headerHtml = `
        <div class="favorites-header">
            <div class="favorites-title" style="gap:10px; align-items:center;">
                <div style="font-weight:800; font-size:1.05rem; color:#fff;">My Library</div>
                <div style="font-size:12px; color:#9ca3af;">Your saved games for quick access</div>
            </div>
            <div class="favorites-controls">
                <div class="select" id="fav-sort">
                    <i class="fas fa-sort text-xs"></i>
                    <select id="fav-sort-select" style="background: transparent; border:0; color:inherit; outline:none;">
                        <option value="added"${currentSort==='added'?' selected':''}>Recent</option>
                        <option value="alpha"${currentSort==='alpha'?' selected':''}>A–Z</option>
                        <option value="category"${currentSort==='category'?' selected':''}>Category</option>
                    </select>
                </div>
                <button id="clear-favorites-btn" class="fav-remove-btn" title="Remove all">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        </div>
    `;
    if (existingHeader) existingHeader.remove();
    const sectionTitle = favoritesContent.querySelector('.section-title') || favoritesContent.querySelector('h2');
    if (sectionTitle) sectionTitle.insertAdjacentHTML('afterend', headerHtml);
    else favoritesContent.insertAdjacentHTML('afterbegin', headerHtml);

    // Wire header controls
    const sortSelect = document.getElementById('fav-sort-select');
    const clearBtn = document.getElementById('clear-favorites-btn');

    // Simplified view handling: we removed the grid/list toggle UI while preserving stored preference.
    function applyViewMode(mode) {
        localStorage.setItem('nexus_fav_view', mode);
    }
    applyViewMode(currentView); // keep stored preference

    sortSelect.onchange = () => {
        localStorage.setItem('nexus_fav_sort', sortSelect.value);
        renderFavorites(); // re-render with new order
    };

    clearBtn.onclick = async () => {
        if (!favorites.length) return;
        const ok = await showConfirm({
            title: 'Remove all favorites',
            message: 'This will remove all games from your library. Do you want to continue?',
            okText: 'Remove',
            cancelText: 'Cancel'
        });
        if (!ok) return;
        myList = [];
        saveList();
        renderFavorites();
        renderAllRows();
    };

    // Sorting
    let sorted = favorites.slice();
    const sortMode = localStorage.getItem('nexus_fav_sort') || 'added';
    if (sortMode === 'alpha') {
        sorted.sort((a,b) => a.title.localeCompare(b.title));
    } else if (sortMode === 'category') {
        sorted.sort((a,b) => {
            if (a.cat === b.cat) return a.title.localeCompare(b.title);
            return a.cat.localeCompare(b.cat);
        });
    }

    // If empty, show improved placeholder
    favoritesGrid.innerHTML = '';
    if (!sorted.length) {
        favoritesGrid.insertAdjacentHTML('beforeend', `
            <div class="fav-empty col-span-full" style="padding:28px; border-radius:12px;">
                <i class="fas fa-heart-broken" style="font-size:36px;color:rgba(124,58,237,0.95);margin-bottom:12px;"></i>
                <div style="font-weight:700;color:#fff;margin-bottom:6px;">You don't have any favorites yet</div>
                <div style="max-width:560px;color:#9ca3af;font-size:0.95rem;">
                    Tap the heart on any game to save it here. Use the options above to organize your library.
                </div>
            </div>
        `);
        noFavoritesMsg.classList.add('hidden');
        return;
    }

    noFavoritesMsg.classList.add('hidden');

    // Render favorites using compact cards for tidy, predictable layout
    sorted.forEach((game) => {
        favoritesGrid.insertAdjacentHTML('beforeend', createCompactCard(game));
    });

    // Attach card handlers (delegated handlers provide play/fav functionality to avoid duplicate toggles)
    attachCardEvents(true);

    // Provide only click & keyboard access for opening details to preserve accessibility without duplicating favorites logic
    document.querySelectorAll('.compact-card').forEach(card => {
        const id = card.getAttribute('data-card-game-id');
        card.addEventListener('click', (e) => { openDetails(id); });
        card.addEventListener('keydown', (e) => { if (e.key === 'Enter') openDetails(id); });
    });

    // Remove entry class after animation completes to keep DOM clean (for both compact and normal cards)
    requestAnimationFrame(() => {
        document.querySelectorAll('.compact-card.enter, .game-card.enter').forEach(el => {
            el.addEventListener('animationend', function onEnd() {
                el.classList.remove('enter');
                el.removeEventListener('animationend', onEnd);
            });
        });
    });

    // Ensure mobile scroll is comfortable
    try {
        favoritesGrid.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    } catch (e) {}
}

/* Compact card variant used specifically for search results that intentionally omits the favorite button.
   Keeps the same visual language and play button while removing any favorite control so search cards cannot be favorited directly. */
function createCompactCardNoFav(game) {
    return `
      <div class="compact-card enter" data-card-game-id="${game.id}" role="button" tabindex="0">
        <div class="compact-thumb">
          <img src="${game.banner}"
               loading="lazy"
               onerror="this.onerror=null;this.src='https://placehold.co/400x225/020617/64748b?text=Image+unavailable'">
        </div>
        <div class="compact-body">
          <div class="compact-meta">
            <div class="compact-title">${game.title}</div>
            <div class="compact-cat">${game.cat}</div>
          </div>
          <div class="compact-actions">
            <button class="compact-play" aria-label="Play ${game.title}"><i class="fas fa-play"></i></button>
            <!-- favorite button intentionally omitted for search results -->
          </div>
        </div>
      </div>
    `;
}

function renderSearchResults(results) {
    searchResultsGrid.innerHTML = '';

    if (!results.length) {
        noSearchResultsMsg.classList.remove('hidden');
        return;
    }

    noSearchResultsMsg.classList.add('hidden');
    results.forEach(game => {
        // use the no-fav compact card for search results
        searchResultsGrid.insertAdjacentHTML('beforeend', createCompactCardNoFav(game));
    });

    // Attach handlers: play actions and card open handlers only (no favorite actions present in these cards).
    attachCardEvents(true);

    // Keep per-card keyboard & click accessibility for opening details only
    document.querySelectorAll('.compact-card').forEach(card => {
        const id = card.getAttribute('data-card-game-id');
        // clicking the card opens details; play button handled by delegated attachCardEvents
        card.addEventListener('click', (e) => { openDetails(id); });
        card.addEventListener('keydown', (e) => { if (e.key === 'Enter') openDetails(id); });
    });
}

// --- INTERACTIONS ---
function attachRowEvents() {
    document.querySelectorAll('.row-nav-button').forEach(btn => {
        const targetId = btn.getAttribute('data-target');
        const dir = parseInt(btn.getAttribute('data-dir'), 10) || 1;
        const container = document.getElementById(targetId);
        if (!container) return;

        // helper to scroll by a sensible, clamped amount
        const doScroll = () => {
            // use card width heuristics if available to provide predictable scroll steps
            const firstCard = container.querySelector('.game-card');
            let step = Math.round(container.clientWidth * 0.78);
            if (firstCard) {
                const cw = firstCard.getBoundingClientRect().width + 12; // include gap
                // prefer scrolling by a few cards on wider screens, 1 card on narrow
                step = (window.innerWidth <= 640) ? Math.round(cw * 1.05) : Math.round(cw * 3);
            }
            const amount = dir * step;
            container.scrollBy({ left: amount, behavior: 'smooth' });
        };

        // pointerdown for snappy touch response
        btn.addEventListener('pointerdown', (e) => {
            if (e.isPrimary === false) return;
            // allow preventDefault on pointerdown so we can suppress native gestures and ensure the scroll runs immediately
            e.preventDefault();
            doScroll();
        }, { passive: false });

        // click fallback
        btn.addEventListener('click', (e) => {
            // Removed e.preventDefault() since passive: true is used, ensuring click works reliably.
            doScroll();
        }, { passive: true });

        container.style.webkitOverflowScrolling = 'touch';
        container.style.overscrollBehaviorX = 'contain';

        const updateState = () => {
            const maxScrollLeft = container.scrollWidth - container.clientWidth;
            const atStart = container.scrollLeft <= 8;
            const atEnd = container.scrollLeft >= (maxScrollLeft - 8);
            const leftBtn = document.querySelector(`.row-nav-button[data-target="${targetId}"][data-dir="-1"]`);
            const rightBtn = document.querySelector(`.row-nav-button[data-target="${targetId}"][data-dir="1"]`);
            if (leftBtn) leftBtn.setAttribute('aria-disabled', atStart ? 'true' : 'false');
            if (rightBtn) rightBtn.setAttribute('aria-disabled', atEnd ? 'true' : 'false');
        };

        // throttle updates with requestAnimationFrame (already used)
        let raf;
        const onScroll = () => {
            if (raf) cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => {
                updateState();
                raf = null;
            });
        };

        container.addEventListener('scroll', onScroll, { passive: true });

        // debounce resize-driven updates
        let resizeTimer;
        const debouncedUpdate = () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(updateState, 120);
        };
        window.addEventListener('resize', debouncedUpdate, { passive: true });

        setTimeout(updateState, 80);
    });
}

 // --- GLOBAL CLICK DELEGATE FIX FOR CARD FAVORITES (reliable single handler) ---
(function ensureSingleCardFavDelegate() {
    // avoid adding multiple times
    if (window.__nexus_card_fav_delegated) return;
    window.__nexus_card_fav_delegated = true;

    // Single delegated click handler for both .card-fav and .compact-fav to avoid duplicate toggles.
    const handler = (e) => {
        try {
            // first try to read the data-fav-id directly from the clicked element (more reliable)
            let favBtn = e.target && (e.target.closest('.card-fav') || e.target.closest('.compact-fav'));
            if (!favBtn) return;
            // Attempt to read explicit id attribute on the button; fallback to closest card id
            const explicitId = favBtn.getAttribute && favBtn.getAttribute('data-fav-id');
            let id = explicitId || null;
            if (!id) {
                const card = favBtn.closest && favBtn.closest('[data-card-game-id]');
                id = card ? card.getAttribute('data-card-game-id') : null;
            }
            if (!id) return;
            // prevent clicks from bubbling into card open handlers
            e.stopPropagation();
            // prevent default to avoid native gestures interfering on some devices
            if (typeof e.preventDefault === 'function') e.preventDefault();
            toggleFavorites(id, 'row');
            return;
        } catch (err) {
            console.warn('card-fav delegate error', err);
        }
    };

    // Use a single 'click' listener only (pointerdown listeners are also attached elsewhere for compact favs;
    // having both caused duplicate toggles). 'click' is reliable and prevents double-toggle races.
    document.addEventListener('click', handler, { passive: false, capture: true });
})();

/* Delegated card event wiring (robust, idempotent, and includes a pointerdown fallback for compact favs) */
function attachCardEvents(isGrid = false) {
    const delegatedRoots = [
        document.getElementById('dynamic-rows'),
        document.getElementById('search-results-grid'),
        document.getElementById('favorites-grid')
    ];

    // named delegated click handler to open details / handle play & compact-play
    function _cardDelegatedClick(e) {
        try {
            const target = e.target;
            // play (classic or compact)
            const playBtn = target.closest && (target.closest('.card-play') || target.closest('.compact-play'));
            if (playBtn) {
                e.stopPropagation();
                e.preventDefault();
                const card = playBtn.closest('[data-card-game-id]');
                const id = card ? card.getAttribute('data-card-game-id') : null;
                if (id) playGame(id);
                return;
            }

            // compact fav (click path) — keep as a fallback for environments that don't support pointer events
            const compactFav = target.closest && target.closest('.compact-fav');
            if (compactFav) {
                e.stopPropagation();
                e.preventDefault();
                const card = compactFav.closest('[data-card-game-id]');
                const id = card ? card.getAttribute('data-card-game-id') : null;
                if (id) toggleFavorites(id, 'grid');
                return;
            }

            // card body click -> open details (ignore clicks on buttons)
            const cardEl = target.closest && target.closest('[data-card-game-id]');
            if (cardEl && !target.closest('button')) {
                const id = cardEl.getAttribute('data-card-game-id');
                if (id) openDetails(id);
            }
        } catch (err) {
            console.warn('card delegated click error', err);
        }
    }

    // pointerdown delegated handler (more reliable & snappy on touch devices) for compact favs specifically
    function _compactFavPointerHandler(e) {
        try {
            // ensure we only handle primary pointer to avoid multi-touch surprises
            if (e && e.isPrimary === false) return;
            const fav = e.target && e.target.closest && e.target.closest('.compact-fav');
            if (!fav) return;
            e.stopPropagation();
            e.preventDefault();
            const card = fav.closest('[data-card-game-id]');
            const id = card ? card.getAttribute('data-card-game-id') : null;
            if (id) toggleFavorites(id, 'grid');
        } catch (err) {
            console.warn('compact fav pointer handler error', err);
        }
    }

    delegatedRoots.forEach(root => {
        if (!root) return;
        // attach click delegated handler once (idempotent by using stored ref)
        if (!root.__nexus_card_click_bound) {
            root.addEventListener('click', _cardDelegatedClick, true);
            root.__nexus_card_click_bound = true;
        }
        // attach pointerdown compact-fav handler for snappy touch response; bind only once
        if (!root.__nexus_compact_fav_bound) {
            root.addEventListener('pointerdown', _compactFavPointerHandler, { passive: false, capture: true });
            // keep a click fallback too (some old browsers)
            root.addEventListener('click', function(e){
                // click fallback will be handled by _cardDelegatedClick above; nothing else needed here
            }, true);
            root.__nexus_compact_fav_bound = true;
        }
    });
}

function toggleFavorites(id, source = 'row') {
    try {
        const wasFav = myList.includes(id);
        if (wasFav) {
            myList = myList.filter(x => x !== id);
        } else {
            myList.push(id);
        }
        saveList();

        // Immediate UI sync for any visible representations
        updateCardFavoriteState(id);
        updateModalFavButton && updateModalFavButton(id);

        // If user favorited from search or rows, ensure library updates (add to top)
        if (!wasFav && (currentTab === 'favorites' || source === 'grid' || source === 'modal')) {
            // re-render so new item appears
            renderFavorites();
        } else if (!wasFav && currentTab !== 'favorites') {
            // don't re-render whole favorites view, but ensure favorites count and any open favorites grid will reflect change when opened
            // (we still update any favorite placeholders)
            renderFavorites(); // safe quick update since renderFavorites is optimized for empty vs items
        }

        // If the user removed a favorite while viewing the Favorites tab, animate removal smoothly
        if (wasFav && (currentTab === 'favorites' || source === 'grid' || source === 'modal')) {
            // Find existing compact card(s) in favorites grid and animate removal
            const favCards = Array.from(document.querySelectorAll(`#favorites-grid [data-card-game-id="${id}"]`));
            if (favCards.length) {
                favCards.forEach(card => {
                    card.style.transition = 'opacity 260ms ease, transform 260ms cubic-bezier(.22,.9,.35,1), height 260ms ease, margin 260ms ease';
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(12px) scale(0.98)';
                    // shrink height to avoid sudden layout jump
                    const rect = card.getBoundingClientRect();
                    card.style.height = rect.height + 'px';
                    // force reflow then set to zero
                    requestAnimationFrame(() => {
                        card.style.height = '0px';
                        card.style.margin = '0';
                        setTimeout(() => {
                            if (card.parentNode) card.parentNode.removeChild(card);
                            // ensure rows/cards elsewhere are updated to reflect the change
                            updateCardFavoriteState(id);
                        }, 300);
                    });
                });
            } else {
                // fallback: if card not found, just re-render favorites
                renderFavorites();
            }
        }

        // For other cases (favoriting), ensure search results or home also show the new state
        updateCardFavoriteState(id);

    } catch (err) {
        console.warn('toggleFavorites error', err);
    }
}

// --- SEARCH ---
function wireSearch() {
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.trim().toLowerCase();

        if (searchTimeout) clearTimeout(searchTimeout);

        if (query.length < 2) {
            searchResultsContent.classList.add('hidden');

            if (currentTab === 'home') {
                homeContent.classList.remove('hidden');
                requestAnimationFrame(() => homeContent.classList.add('animate-fade-in'));
            }
            if (currentTab === 'favorites') {
                favoritesContent.classList.remove('hidden');
                requestAnimationFrame(() => favoritesContent.classList.add('animate-fade-in'));
            }
            return;
        }

        homeContent.classList.add('hidden');
        favoritesContent.classList.add('hidden');
        searchResultsContent.classList.remove('hidden');
        requestAnimationFrame(() => searchResultsContent.classList.add('animate-fade-in'));
        searchQueryDisplay.textContent = query;

        searchTimeout = setTimeout(() => {
            const results = DB.filter(game =>
                game.title.toLowerCase().includes(query) ||
                game.cat.toLowerCase().includes(query) ||
                game.desc.toLowerCase().includes(query)
            );
            renderSearchResults(results);
        }, 200);
    });
}

// --- NAVBAR SCROLL ---
function wireNavbarScroll() {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 30) {
            navbar.classList.add('shadow-lg');
            navbar.style.background = 'rgba(2, 6, 23, 0.98)';
        } else {
            navbar.classList.remove('shadow-lg');
            navbar.style.background = 'rgba(2, 6, 23, 0.92)';
        }
    }, { passive: true });
}

// --- GAME PLAYER ---
function wireGameControls() {
    // Improved close flow: play a quick exit animation and then perform full cleanup.
    btnCloseGame.addEventListener('click', (e) => {
        try {
            e && e.preventDefault && e.preventDefault();
            // quick visual: fade+scale the iframe/wrapper to signal exit
            try {
                if (gameFrame) {
                    gameFrame.style.transition = 'transform 260ms cubic-bezier(.22,.9,.35,1), opacity 220ms ease';
                    gameFrame.style.transformOrigin = 'center center';
                    gameFrame.style.transform = 'scale(0.98)';
                    gameFrame.style.opacity = '0.0';
                }
                if (gameFrameWrapper) {
                    gameFrameWrapper.style.transition = 'filter 260ms ease, opacity 220ms ease';
                    gameFrameWrapper.style.opacity = '0.0';
                    gameFrameWrapper.style.filter = 'blur(6px)';
                }
                // also add the game-exit class to the layer to trigger the existing CSS animation
                gameLayer.classList.remove('game-enter');
                gameLayer.classList.add('game-exit');
            } catch (err) { /* swallow visual errors */ }

            // call closeGame after the small animation delay so user perceives it
            setTimeout(() => {
                try { 
                    closeGame(); 
                    // If this session used the "bottom-cut" black bar overlay, reload the page to guarantee a clean state.
                    // Slight delay ensures close animations / cleanup run before reload.
                    if (activeGameUsedBottomCut) {
                        setTimeout(() => {
                            try { location.reload(); } catch (e) { /* ignore */ }
                        }, 420);
                    }
                } catch (err) { console.warn('closeGame failed after animation', err); }
            }, 260);
        } catch (err) {
            console.warn('btnCloseGame handler error', err);
            try { 
                closeGame();
                if (activeGameUsedBottomCut) {
                    setTimeout(() => { try { location.reload(); } catch (e) {} }, 420);
                }
            } catch (e) {}
        }
    });
    btnFullscreen.addEventListener('click', toggleFullscreen);

    // NEW: toggle hide-toolbar when clicked
    if (btnHideToolbar && gameLayerToolbar) {
        btnHideToolbar.addEventListener('click', (e) => {
            e.preventDefault();

            // toggle hidden state for toolbar
            const isHidden = gameLayerToolbar.classList.toggle('hidden');

            // reflect state visually on button (icon swap)
            btnHideToolbar.innerHTML = isHidden
                ? '<i class="fas fa-eye text-sm sm:text-lg"></i>'
                : '<i class="fas fa-eye-slash text-sm sm:text-lg"></i>';

            // aria state
            if (isHidden) gameLayerToolbar.setAttribute('aria-hidden', 'true');
            else gameLayerToolbar.removeAttribute('aria-hidden');

            // Expand/restore iframe to occupy toolbar area when toolbar hidden
            try {
                // compute toolbar height robustly (including safe-area)
                const rect = gameLayerToolbar.getBoundingClientRect ? gameLayerToolbar.getBoundingClientRect() : null;
                const toolbarH = (rect && rect.height) ? Math.round(rect.height) : 64;

                // store original inline styles to restore later (only once)
                if (!gameFrame.dataset._nexus_orig_style) {
                    gameFrame.dataset._nexus_orig_style = JSON.stringify({
                        position: gameFrame.style.position || '',
                        top: gameFrame.style.top || '',
                        height: gameFrame.style.height || '',
                        width: gameFrame.style.width || '',
                        transform: gameFrame.style.transform || ''
                    });
                }

                if (isHidden) {
                    // Make the iframe absolutely positioned inside wrapper and expand it to cover toolbar area,
                    // using CSS variables so it respects --vh and --nexus-bottom-cut.
                    gameFrame.style.position = 'absolute';
                    gameFrame.style.left = '0';
                    gameFrame.style.width = '100%';
                    // ensure wrapper allows overflow so absolute positioning works
                    gameFrameWrapper.style.overflow = 'visible';
                    // ensure top is 0 and height expands by the toolbar height (using px fallback)
                    gameFrame.style.top = `0`;
                    // use calc with CSS var so it adapts to iOS viewport fixes
                    gameFrame.style.height = `calc(var(--vh, 1vh) * 100 + ${toolbarH}px)`;
                    gameFrame.style.pointerEvents = 'auto';
                    gameFrame.dataset.nexusToolbarHidden = '1';
                } else {
                    // restore original inline styles (if present)
                    try {
                        const orig = JSON.parse(gameFrame.dataset._nexus_orig_style || '{}');
                        gameFrame.style.position = orig.position || '';
                        gameFrame.style.top = orig.top || '';
                        gameFrame.style.height = orig.height || '';
                        gameFrame.style.width = orig.width || '';
                        gameFrame.style.transform = orig.transform || '';
                        // remove any leftover properties if empty
                        if (!gameFrame.style.top) gameFrame.style.removeProperty('top');
                        if (!gameFrame.style.height) gameFrame.style.removeProperty('height');
                    } catch (err) {
                        // fallback to clearing styles
                        gameFrame.style.position = '';
                        gameFrame.style.top = '';
                        gameFrame.style.height = '';
                        gameFrame.style.width = '';
                        gameFrame.style.transform = '';
                    }
                    try { gameFrameWrapper.style.overflow = ''; } catch (e) {}
                    delete gameFrame.dataset.nexusToolbarHidden;
                }
            } catch (err) {
                console.warn('toolbar hide/show iframe adjust failed', err);
            }

            // small mobile reveal button handling: show a compact reveal control when toolbar hidden
            try {
                const revealId = 'nexus-mobile-reveal-toolbar';
                let reveal = document.getElementById(revealId);
                if (isHidden) {
                    if (!reveal) {
                        reveal = document.createElement('button');
                        reveal.id = revealId;
                        reveal.type = 'button';
                        reveal.title = 'Show toolbar';
                        reveal.innerHTML = '<i class="fas fa-ellipsis-v"></i>';
                        reveal.style.position = 'fixed';
                        reveal.style.zIndex = '13001';
                        reveal.style.right = '10px';
                        reveal.style.top = '12px';
                        reveal.style.width = '44px';
                        reveal.style.height = '44px';
                        reveal.style.borderRadius = '10px';
                        reveal.style.background = 'rgba(0,0,0,0.5)';
                        reveal.style.color = '#fff';
                        reveal.style.border = '1px solid rgba(255,255,255,0.06)';
                        reveal.style.display = 'flex';
                        reveal.style.alignItems = 'center';
                        reveal.style.justifyContent = 'center';
                        reveal.style.backdropFilter = 'blur(6px)';
                        reveal.addEventListener('click', (ev) => {
                            ev.preventDefault();
                            ev.stopPropagation();
                            try {
                                gameLayerToolbar.classList.remove('hidden');
                                gameLayerToolbar.removeAttribute('aria-hidden');
                                btnHideToolbar.innerHTML = '<i class="fas fa-eye-slash text-sm sm:text-lg"></i>';
                                // restore iframe original inline values
                                try {
                                    const orig = JSON.parse(gameFrame.dataset._nexus_orig_style || '{}');
                                    gameFrame.style.position = orig.position || '';
                                    gameFrame.style.top = orig.top || '';
                                    gameFrame.style.height = orig.height || '';
                                    gameFrame.style.width = orig.width || '';
                                    gameFrame.style.transform = orig.transform || '';
                                    if (!gameFrame.style.top) gameFrame.style.removeProperty('top');
                                    if (!gameFrame.style.height) gameFrame.style.removeProperty('height');
                                    gameFrameWrapper.style.overflow = '';
                                    delete gameFrame.dataset.nexusToolbarHidden;
                                } catch (ee) {}
                                reveal.classList.add('hidden');
                                reveal.style.display = 'none';
                            } catch (err) {}
                        }, { passive: false });
                        document.body.appendChild(reveal);
                    } else {
                        reveal.classList.remove('hidden');
                        reveal.style.display = 'flex';
                    }
                } else {
                    if (reveal) {
                        try { reveal.classList.add('hidden'); reveal.style.display = 'none'; } catch (e) {}
                    }
                }
            } catch (e) {
                console.warn('mobile reveal toolbar handling failed', e);
            }
        });
    }

    // Ensure iframe is inert until user intentionally plays (helps avoid some mobile crashes)
    // and stop any background loading if present.
    gameFrame.src = 'about:blank';

    // --- Volume control wiring ---
    // Ensure a safe default implementation exists so enhancement wrappers can replace it without throwing.
    // This avoids ReferenceError when enhanceVolumeHandling runs before a replacement is applied.
    function applyVolumeToGame(v) {
        try {
            const vol = Math.max(0, Math.min(100, Number(v) || 0));
            try { localStorage.setItem('nexus_game_volume', String(vol)); } catch (e) {}
            try { if (typeof updateVolumeIcon === 'function') updateVolumeIcon(vol); } catch (e) {}
            // Best-effort: post a message to iframe (non-blocking)
            try {
                if (window.gameFrame && window.gameFrame.contentWindow) {
                    window.gameFrame.contentWindow.postMessage?.({ type: 'nexus:setVolume', volume: vol / 100 }, '*');
                }
            } catch (e) {}
        } catch (err) {
            // swallow to avoid breaking UI
            console.warn('applyVolumeToGame fallback failed', err);
        }
    }

    // --- Volume toast & throttled volume updates (improvements) ---
    (function enhanceVolumeHandling() {
        // guard to prevent duplicate registration if this block runs twice
        if (window.__nexus_volume_handler_installed) return;
        window.__nexus_volume_handler_installed = true;
        // single persistent volume toast instance (updates in-place)
        let volumeToastEl = null;
        let volumeToastTimer = null;

        function showVolumeToast(value) {
            try {
                const container = document.getElementById('toast-container');
                if (!container) return;
                // create once
                if (!volumeToastEl) {
                    volumeToastEl = document.createElement('div');
                    volumeToastEl.className = 'toast';
                    volumeToastEl.innerHTML = `<i class="fas fa-volume-up"></i><span id="volume-toast-text"></span>`;
                    container.appendChild(volumeToastEl);
                    // force reflow then show
                    void volumeToastEl.offsetWidth;
                    volumeToastEl.classList.add('toast-show');
                }
                const txt = volumeToastEl.querySelector('#volume-toast-text');
                if (txt) txt.textContent = ` Volume: ${Math.round(value)}%`;
                // refresh auto-hide timer
                clearTimeout(volumeToastTimer);
                volumeToastTimer = setTimeout(() => {
                    if (volumeToastEl && volumeToastEl.parentNode) {
                        volumeToastEl.classList.remove('toast-show');
                        setTimeout(() => {
                            try { if (volumeToastEl && volumeToastEl.parentNode) container.removeChild(volumeToastEl); } catch (e) {}
                            volumeToastEl = null;
                        }, 220);
                    }
                }, 1100);
            } catch (e) {
                console.warn('showVolumeToast failed', e);
            }
        }

        // small debounce helper (leading=false)
        function debounce(fn, wait) {
            let t = null;
            return function(...args) {
                clearTimeout(t);
                t = setTimeout(() => fn.apply(this, args), wait);
            };
        }

        // throttlePostMessage: ensure at most one postMessage per animation frame with latest value
        let pendingVol = null;
        let posted = false;
        function throttlePostMessage(payload) {
            pendingVol = payload;
            if (posted) return;
            posted = true;
            requestAnimationFrame(() => {
                try {
                    if (gameFrame && gameFrame.contentWindow) {
                        gameFrame.contentWindow.postMessage({ type: 'nexus:setVolume', volume: pendingVol / 100 }, '*');
                    }
                } catch (e) {}
                pendingVol = null;
                posted = false;
            });
        }

        // Replace applyVolumeToGame with a safer, throttled implementation
        const originalApplyVolumeToGame = applyVolumeToGame;
        applyVolumeToGame = function(v) {
            try {
                const vol = Math.max(0, Math.min(100, Number(v) || 0));
                // persist quickly (no spam)
                try { localStorage.setItem('nexus_game_volume', String(vol)); } catch (e) {}
                // update icon
                updateVolumeIcon(vol);

                // show a single updatable toast instead of many stacked ones
                showVolumeToast(vol);

                // PostMessage to iframe at most once per animation frame
                throttlePostMessage(vol);

                // If same-origin, set audio/video elements directly
                try {
                    const win = gameFrame && gameFrame.contentWindow;
                    const doc = win && win.document;
                    if (doc) {
                        const mediaEls = Array.from(doc.querySelectorAll('audio, video'));
                        mediaEls.forEach(m => {
                            try { m.volume = Math.max(0, Math.min(1, vol / 100)); } catch (e) {}
                            try { m.muted = vol === 0; } catch (e) {}
                        });
                    }
                } catch (e) {
                    // cross-origin likely; ignore
                }
            } catch (err) {
                // fallback to original (best-effort)
                try { originalApplyVolumeToGame(v); } catch (e) {}
            }
        };

        // Debounced slider input handler to reduce event flood and avoid many internal updates/toasts
        const volSlider = document.getElementById('volume-slider');
        if (volSlider) {
            const debouncedHandler = debounce((val) => {
                try { applyVolumeToGame(Number(val)); } catch (e) {}
            }, 120); // 120ms debounce for snappy UX but limited event spam

            volSlider.removeEventListener && volSlider.removeEventListener('input', () => {});
            volSlider.addEventListener('input', (e) => {
                const val = Number(e.target.value);
                // update icon immediately for snappy feedback
                updateVolumeIcon(val);
                // schedule actual work via debounce (toast + postMessage + media update)
                debouncedHandler(val);
            }, { passive: true });
        }

        // Improve volume toggle (mute/unmute) to reuse the same single toast and properly persist
        const volToggle = document.getElementById('btn-volume-toggle');
        if (volToggle) {
            volToggle.removeEventListener && volToggle.removeEventListener('click', () => {});
            volToggle.addEventListener('click', (e) => {
                e.preventDefault();
                const slider = document.getElementById('volume-slider');
                if (!slider) return;
                const current = Number(slider.value);
                if (current === 0) {
                    // restore to saved or default (choose 60 as comfortable)
                    let restore = 60;
                    try {
                        const v = parseInt(localStorage.getItem('nexus_game_volume'), 10);
                        if (!isNaN(v) && v > 0) restore = Math.max(30, Math.min(100, v));
                    } catch (e) {}
                    slider.value = restore;
                    updateVolumeIcon(restore);
                    applyVolumeToGame(restore);
                } else {
                    slider.value = 0;
                    updateVolumeIcon(0);
                    applyVolumeToGame(0);
                }
            }, { passive: true });
        }
    })();

    // --- Ensure Back button works on touch devices (mobile) ---
    // Some mobile browsers may not synthesize click events if overlays or passive listeners exist.
    // Add pointer/touch handlers to guarantee a responsive close action.
    const touchCloseHandler = (e) => {
        // Only handle primary pointers (avoid multi-touch interference)
        if (e.pointerType && e.pointerType !== 'touch' && e.pointerType !== 'pen') return;
        e.preventDefault && e.preventDefault();
        e.stopPropagation && e.stopPropagation();
        closeGame();
    };

    // pointerdown is snappy on touch devices; add passive:false to allow preventDefault
    btnCloseGame.addEventListener('pointerdown', touchCloseHandler, { passive: false });

    // also listen for touchend as a fallback on older browsers
    btnCloseGame.addEventListener('touchend', (e) => {
        e.preventDefault();
        e.stopPropagation();
        closeGame();
    }, { passive: false });
}

// --- Fullscreen helper (added) ---
/* goFullscreen: tries standard fullscreen APIs then falls back to a visual forced-fullscreen for iOS */
async function goFullscreen(elem) {
    try {
        if (!elem) elem = gameLayer || document.documentElement;
        // ensure we apply any scale vars before requesting
        try {
            const currentScale = getComputedStyle(gameLayer).getPropertyValue('--stumble-scale') || '1.8';
            elem.style.setProperty('--stumble-scale', currentScale.trim());
        } catch (e) {}

        if (elem.requestFullscreen) {
            try {
                await elem.requestFullscreen();
                return;
            } catch (e) {
                // continue to fallback
            }
        }
        // webkit prefixed (older iOS) will usually fail for cross-origin content; attempt if available
        if (elem.webkitRequestFullscreen) {
            try { elem.webkitRequestFullscreen(); return; } catch (e) {}
        }
    } catch (err) {
        console.warn('goFullscreen attempt failed', err);
    }

    // Fallback visual fullscreen for environments that block native fullscreen (esp. iOS Safari)
    document.documentElement.classList.add('forced-fullscreen');
}

/* toggleFullscreen kept for backwards compatibility; prefer goFullscreen for fallback handling */
function toggleFullscreen() {
    try {
        // Defensive check: if browser doesn't support any fullscreen API we use the visual fallback but guard restoration.
        const supportsNative = !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.msFullscreenEnabled);
        // If not currently fullscreen, attempt to enter
        if (!document.fullscreenElement && !document.documentElement.classList.contains('forced-fullscreen')) {
            if (supportsNative) {
                // try native fullscreen but guard against failures so we don't break scrolling
                goFullscreen(gameLayer).catch((err) => {
                    console.warn('Native fullscreen attempt failed, falling back to visual fullscreen', err);
                    // Ensure no permanent scroll lock: remove any no-game-scroll residual and apply visual fallback
                    try { document.documentElement.classList.remove('no-game-scroll'); } catch (e) {}
                    document.documentElement.classList.add('forced-fullscreen');
                });
            } else {
                // Use visual fallback only for environments without native support (PWAs, some WebViews, iOS)
                document.documentElement.classList.add('forced-fullscreen');
            }
        } else {
            // Exit both visual and native fullscreen safely
            if (document.documentElement.classList.contains('forced-fullscreen')) {
                document.documentElement.classList.remove('forced-fullscreen');
            }
            // Try native exit if active, but do not assume it will succeed; always ensure scroll restoration
            try {
                if (document.exitFullscreen) {
                    document.exitFullscreen().catch((err) => {
                        console.warn('exitFullscreen failed', err);
                    }).finally(() => {
                        // always restore scroll to avoid permanent lock
                        try { document.documentElement.classList.remove('no-game-scroll'); } catch (e) {}
                        try { document.documentElement.style.overflow = ''; document.body && (document.body.style.overflow = ''); } catch (e) {}
                    });
                } else if (document.webkitExitFullscreen) {
                    try { document.webkitExitFullscreen(); } catch (e) {}
                    try { document.documentElement.classList.remove('no-game-scroll'); } catch (e) {}
                } else {
                    // No native exit available: ensure visual flags cleaned up
                    try { document.documentElement.classList.remove('no-game-scroll'); } catch (e) {}
                }
            } catch (err) {
                console.warn('toggleFullscreen cleanup failed', err);
                try { document.documentElement.classList.remove('no-game-scroll'); } catch (e) {}
            }
        }
    } catch (err) {
        console.warn('toggleFullscreen failed', err);
        // ensure we never leave the page unscrollable
        try { document.documentElement.classList.remove('no-game-scroll'); document.documentElement.style.overflow = ''; if (document.body) document.body.style.overflow = ''; } catch (e) {}
    }
}

/* NEW: robust fullscreen error/fallback handling to ensure scroll is always restored
   and pseudo-fullscreen fallbacks don't leave the page locked. */
(function ensureFullscreenErrorHandling(){
    try {
        function restoreScrollSafely() {
            try {
                // remove any forced visual fullscreen markers
                document.documentElement.classList.remove('forced-fullscreen');
                // ensure scroll-lock class removed and inline styles cleared
                document.documentElement.classList.remove('no-game-scroll');
                try { document.documentElement.style.overflow = ''; } catch (e) {}
                try { document.documentElement.style.touchAction = ''; } catch (e) {}
                try { if (document.body) { document.body.style.overflow = ''; document.body.style.touchAction = ''; } } catch (e) {}
                // also reveal mobile bottom bar if it was hidden
                try {
                    const mobileBar = document.querySelector('.mobile-bottom-bar');
                    if (mobileBar) mobileBar.style.removeProperty('display');
                } catch (e) {}
            } catch (e) {
                console.warn('restoreScrollSafely failed', e);
            }
        }

        // When fullscreen change occurs, double-check scroll state and adapt mask var
        document.addEventListener('fullscreenchange', () => {
            try {
                const isFS = !!document.fullscreenElement;
                if (isFS) {
                    document.documentElement.style.setProperty('--nexus-bottom-cut', '5vh');
                    if (gameLayer) gameLayer.style.setProperty('--nexus-bottom-cut', '5vh');
                } else {
                    document.documentElement.style.setProperty('--nexus-bottom-cut', '9vh');
                    if (gameLayer) gameLayer.style.setProperty('--nexus-bottom-cut', '9vh');
                }

                // If leaving fullscreen, restore scroll only when NOT actively playing a game.
                // Keep no-game-scroll applied while a game session is active to avoid re-enabling background scrolling.
                if (!isFS) {
                    try {
                        if (!activeGame) {
                            restoreScrollSafely();
                        } else {
                            // When a game is active, ensure we keep the page locked and do not restore scroll.
                            // Also avoid forcibly revealing the toolbar or other UI that would interfere with gameplay.
                            // No-op here intentionally.
                        }
                    } catch (innerErr) {
                        console.warn('fullscreenchange inner handler error', innerErr);
                        // conservative fallback: do not restore scroll to avoid accidental unlock during active session
                    }
                }
            } catch (e) {
                console.warn('fullscreenchange handler error', e);
                // conservative fallback: do not restore scroll here to avoid enabling page scroll while a game is active
            }
        }, { passive: true });

        // Handle fullscreen errors (native or webkit) — make sure nothing remains locked
        document.addEventListener('fullscreenerror', (e) => {
            console.warn('fullscreenerror detected', e);
            restoreScrollSafely();
            // visual fallback to forced-fullscreen if desired but ensure scroll restoration wasn't lost
            document.documentElement.classList.add('forced-fullscreen');
            // remove forced-fullscreen shortly after to avoid persistent lock in buggy WebViews
            setTimeout(() => document.documentElement.classList.remove('forced-fullscreen'), 1200);
        });

        // webkit prefix fallback for older iOS/Android webviews
        document.addEventListener('webkitfullscreenerror', (e) => {
            console.warn('webkitfullscreenerror detected', e);
            restoreScrollSafely();
            document.documentElement.classList.add('forced-fullscreen');
            setTimeout(() => document.documentElement.classList.remove('forced-fullscreen'), 1200);
        });
    } catch (e) {
        console.warn('ensureFullscreenErrorHandling failed', e);
    }
})();

/* NEW: handle fullscreenchange to show/hide the hide-toolbar button and restore toolbar when exiting fullscreen,
   and adjust the bottom-cut height variable so the injected embed's mask adapts in and out of fullscreen. */
document.addEventListener('fullscreenchange', () => {
    const isFS = !!document.fullscreenElement;

    // Adjust the bottom-cut size for embeds that use the injected .bottom-cut element inside srcdoc.
    try {
        if (isFS) {
            // when fullscreen, reduce the masked area so the game UI fits better
            document.documentElement.style.setProperty('--nexus-bottom-cut', '5vh');
            if (gameLayer) gameLayer.style.setProperty('--nexus-bottom-cut', '5vh');
        } else {
            // restore default mask height when not fullscreen
            document.documentElement.style.setProperty('--nexus-bottom-cut', '9vh');
            if (gameLayer) gameLayer.style.setProperty('--nexus-bottom-cut', '9vh');
        }
    } catch (e) { /* non-fatal */ }

    // Show the hide-toolbar control only when in fullscreen; but don't force toolbar reveal when exiting fullscreen if a game is active.
    if (btnHideToolbar) {
        if (isFS) {
            btnHideToolbar.classList.remove('hidden');
            // ensure icon default state is "eye-slash"
            btnHideToolbar.innerHTML = '<i class="fas fa-eye-slash text-sm sm:text-lg"></i>';
        } else {
            // If no active game, reveal toolbar and hide the control; if a game is active, keep current toolbar state so gameplay isn't disrupted.
            if (!activeGame) {
                try {
                    if (gameLayerToolbar && gameLayerToolbar.classList.contains('hidden')) {
                        gameLayerToolbar.classList.remove('hidden');
                        gameLayerToolbar.removeAttribute('aria-hidden');
                    }
                    btnHideToolbar.classList.add('hidden');
                } catch (e) {
                    // ignore UI restore errors
                }
            } else {
                // keep btnHideToolbar visible during active session to allow hiding/showing toolbar on iOS without fullscreen
                btnHideToolbar.classList.remove('hidden');
            }
        }
    }
});

// --- Simple iframe "ad blocker" & external navigation guard ---
// A lightweight protection: remove popups via sandbox attribute (done in HTML) and
// poll the iframe (when same-origin) for navigations to known ad hosts; if detected, close the game.
const _AD_HOSTS = [
    'ads.google.com', 'doubleclick.net', 'adservice.google.com', 'adserver', 'adnetwork', 'ads.', '.ad.'
];
let _iframeWatchTimer = null;

// NEW: extension key isolation helper references
let __nexus_extension_key_isolation = false;
let __nexus_extension_key_handler = null;

// Slightly increase iframe-watch interval to reduce timer pressure on low-end devices
function startIframeWatch(allowedOrigin) {
    stopIframeWatch();
    _iframeWatchTimer = setInterval(() => {
        try {
            const win = gameFrame.contentWindow;
            if (!win) return;
            const href = win.location.href || '';
            const low = href.toLowerCase();
            for (const ad of _AD_HOSTS) {
                if (low.includes(ad)) {
                    console.warn('Blocked iframe navigation to ad host:', href);
                    closeGame();
                    return;
                }
            }
            try {
                const host = win.location.host || '';
                if (allowedOrigin && host && !allowedOrigin.includes(host) && !host.includes(location.host)) {
                    console.warn('Iframe navigated to an external host, closing for safety:', host);
                    closeGame();
                    return;
                }
            } catch (e) {
                // ignore
            }
        } catch (err) {
            // no-op
        }
    }, 1200); // 1.2s poll
}

function stopIframeWatch() {
    if (_iframeWatchTimer) {
        clearInterval(_iframeWatchTimer);
        _iframeWatchTimer = null;
    }
}

// NEW: Isolate keyboard input from extensions while a game is active.
// We add a capture-phase keydown listener that prevents other page-level handlers
// from intercepting gameplay keys (WASD, arrows, space, shift) when the game is active.
// The handler is intentionally conservative: it only blocks propagation for keys likely used by games,
// and it preserves modified-key combos (Ctrl/Alt/Meta) so browser shortcuts remain functional.
function enableExtensionKeyIsolation() {
    if (__nexus_extension_key_isolation) return;
    __nexus_extension_key_isolation = true;

    __nexus_extension_key_handler = function (e) {
        try {
            // If modal or input is focused, don't interfere
            const target = e.target;
            const tag = target && target.tagName ? target.tagName.toLowerCase() : '';
            const isEditable = tag === 'input' || tag === 'textarea' || target.isContentEditable;

            if (isEditable) return; // allow typing in inputs

            // If any modifier is pressed, don't attempt to block — respect user/browser shortcuts
            if (e.ctrlKey || e.metaKey || e.altKey) return;

            // Normalize key for matching
            const key = (e.key || '').toLowerCase();

            // gameplay keys set (expandable)
            const gameplayKeys = new Set(['w','a','s','d','arrowup','arrowdown','arrowleft','arrowright',' ','space','shift','enter','escape','tab']);

            // If it's a gameplay key, stop other listeners from getting it.
            // We intentionally DON'T call preventDefault for most keys to avoid breaking focus/native behavior.
            if (gameplayKeys.has(key)) {
                // stop other handlers (including some extension listeners) from seeing this event
                // use stopImmediatePropagation in capture phase to be as aggressive as reasonably possible
                try { e.stopImmediatePropagation(); } catch (err) {}
                try { e.stopPropagation(); } catch (err) {}
                // Do not prevent default for arrow keys/space so native behavior (scrolling etc.) remains available if needed.
                // However, if the iframe is focused, default events typically route to it; we leave that intact.
            } else {
                // For non-game keys we leave everything as-is to avoid unexpected side-effects.
            }
        } catch (err) {
            // swallow any errors to avoid interfering with page
            console.warn('extension key isolation handler error', err);
        }
    };

    // Use capture-phase listener for maximum chance to intercept other page listeners or extension bindings
    window.addEventListener('keydown', __nexus_extension_key_handler, true);
    window.addEventListener('keyup', __nexus_extension_key_handler, true);
}

function disableExtensionKeyIsolation() {
    if (!__nexus_extension_key_isolation) return;
    __nexus_extension_key_isolation = false;
    try {
        window.removeEventListener('keydown', __nexus_extension_key_handler, true);
        window.removeEventListener('keyup', __nexus_extension_key_handler, true);
    } catch (e) {}
    __nexus_extension_key_handler = null;
}

// --- Safe iframe setter (prevents undefined error and adds basic safety/timeouts) ---
function setGameFrameSrcSafe(url, timeout = 9000) {
    try {
        try { gameFrame.src = 'about:blank'; } catch (e) {}
        gameFrame.dataset.intendedSrc = url;

        let settled = false;
        const clear = () => {
            settled = true;
            if (loadTimer) clearTimeout(loadTimer);
        };

        const onLoadOrError = () => {
            clear();
            try { gameFrame.removeEventListener('load', onLoadOrError); } catch (e) {}
            try { gameFrame.removeEventListener('error', onLoadOrError); } catch (e) {}
        };

        gameFrame.addEventListener('load', onLoadOrError, { once: true });
        gameFrame.addEventListener('error', onLoadOrError, { once: true });

        // progress nudges: small updates to global loader while waiting
        updateGlobalLoaderProgress(28, 'Establishing connection...');
        setTimeout(() => { updateGlobalLoaderProgress(48, 'Loading initial resources...'); }, 700);

        const loadTimer = setTimeout(() => {
            if (!settled) {
                settled = true;
                try { gameFrame.removeEventListener('load', onLoadOrError); } catch (e) {}
                try { gameFrame.removeEventListener('error', onLoadOrError); } catch (e) {}
                console.warn('Timeout while loading game, hiding loader to avoid lockup.');
                // hide enhanced loader after warning
                hideGlobalLoader();
            }
        }, timeout);

        // --- IMPORTANT: actually set the iframe src so navigation happens ---
        try {
            // prefer assigning srcdoc when caller provided srcdoc via dataset (handled elsewhere)
            // set the src only after listeners and timer are attached to reduce race conditions
            gameFrame.src = url;
        } catch (e) {
            try { gameFrame.setAttribute('src', url); } catch (ee) { console.warn('Failed to set iframe src', ee); }
        }

    } catch (err) {
        console.warn('setGameFrameSrcSafe unexpected error', err);
        try { gameFrame.src = url; } catch {}
    }
}

function playGame(id) {
    const game = getGameById(id);
    if (!game) return;

    // If running on a mobile-sized viewport, block certain incompatible games with a modal message.
    try {
        const isMobileDevice = (window.innerWidth && window.innerWidth < 640) || isIos();
        // Full list of games explicitly blocked on mobile per requirement
        const mobileBlockedIds = new Set([
            'fnf', // Friday Night Funkin'
            'shellshockers',
            'tomb',
            'baldi',
            'starstuff',
            'escapeprison',
            'toodee',
            'duo',
            'stumbleguys',
            'omnomrun',
            'cuttheropexp',
            'thelaststand'
        ]);
        const usesRuffle = (game.custom_render && game.custom_render === 'ruffle') || (game.id && game.id === 'thelaststand');
        const usesBottomCut = (game.custom_render && (game.custom_render === 'embed' || game.custom_render === 'srcdoc')) || false;

        // If user is on mobile and the game is in the incompatible list or uses Ruffle / some srcdoc embeds, block play and show a clear modal
        if (isMobileDevice && (usesRuffle || mobileBlockedIds.has(game.id) || game.custom_render === 'stumbleguys' || (usesBottomCut && ['cuttheropexp','starstuff','duo','escapeprison','toodee','omnomrun'].includes(game.id)))) {
            // show blocking modal and abort launching the iframe
            showMobileIncompatModal(game);
            return;
        }
    } catch (e) {
        console.warn('mobile incompatibility check failed', e);
    }

    // NEW: always create/ensure a fresh iframe before configuring/loading a game
    try { resetGameFrame(); } catch (e) { console.warn('resetGameFrame pre-play failed', e); }

    activeGame = game;
    activeGameUsedBottomCut = false; // reset flag each launch

    // Save previous scroll/touch inline styles so we can reliably restore later (works across iOS/Android/PWA/WebView)
    try {
        const docEl = document.documentElement;
        // store only if not already stored
        if (!docEl.dataset.nexusPrevOverflow) {
            docEl.dataset.nexusPrevOverflow = docEl.style.overflow || '';
            docEl.dataset.nexusPrevTouch = docEl.style.touchAction || '';
        }
        if (!document.body.dataset || !document.body.dataset.nexusPrevOverflow) {
            document.body.dataset && (document.body.dataset.nexusPrevOverflow = document.body.style.overflow || '');
            document.body.dataset && (document.body.dataset.nexusPrevTouch = document.body.style.touchAction || '');
        }
    } catch (e) {}

    // Apply a robust "no-scroll" state using both class and inline styles to cover PWAs and WebViews.
    try {
        document.documentElement.classList.add('no-game-scroll');
        // Inline style changes are applied to both documentElement and body which improves cross-platform restoration.
        document.documentElement.style.overflow = 'hidden';
        document.documentElement.style.touchAction = 'none';
        if (document.body) {
            document.body.style.overflow = 'hidden';
            document.body.style.touchAction = 'none';
        }

        // Additionally, disable interaction and scroll on main app panes so they don't react during a game.
        try {
            const panes = [document.getElementById('home-content'), document.getElementById('favorites-content'), document.getElementById('search-results-content')];
            panes.forEach(p => {
                if (!p) return;
                // hide scrollbars and prevent pointer events while game is active
                p.style.overflow = 'hidden';
                p.style.pointerEvents = 'none';
                p.style.touchAction = 'none';
                // keep height to avoid visual jumps
                p.style.height = '100%';
            });
        } catch (e) {}

        // Also hide mobile bottom bar explicitly as an extra safeguard for some environments
        const mobileBar = document.querySelector('.mobile-bottom-bar');
        if (mobileBar) mobileBar.style.display = 'none';
    } catch (e) {}

    playingTitle.textContent = game.title;

    // NEW: enable keyboard isolation to reduce interference from extensions
    try { enableExtensionKeyIsolation(); } catch (e) { console.warn('enableExtensionKeyIsolation failed', e); }

    // Show enhanced global loader for a better user experience
    showGlobalLoader({
        title: `Starting ${game.title}`,
        sub: 'Connecting to server and loading resources...',
        hint: 'If it is slow, check your connection.',
        progress: 0
    });

    // Check for custom rendering mode
    const isStumbleGuys = game.custom_render === 'stumbleguys';

    // Mark games that use an injected bottom-cut or srcdoc-based overlay so we can special-case reload on exit.
    // This is a best-effort marker since many embed cases are cross-origin and cannot be inspected later.
    try {
        if (game.custom_render === 'embed' || game.custom_render === 'srcdoc' || game.id === 'cuttheropexp' || game.id === 'pieceofcake' || game.id === 'starstuff' || game.id === 'duo' || game.custom_render === 'unity') {
            activeGameUsedBottomCut = true;
        }
    } catch (e) {}

    // Reset iframe styling for standard mode
    gameFrame.className = 'w-full h-full border-none z-10';
    gameFrameWrapper.classList.add('flex', 'items-center', 'justify-center');

    // Mobile-specific fix: apply a gentle negative zoom + left shift for BitLife to counter right-side cropping
    // Only apply on narrow viewports (mobile) to avoid impacting desktop layout.
    try {
        if (game.id === 'bitlife' && window.innerWidth && window.innerWidth < 640) {
            // use transform origin left so scale pulls content toward the left, then translate left a bit
            gameFrame.style.transformOrigin = 'left center';
            gameFrame.style.transform = 'scale(0.92) translateX(-8%)';
            // make iframe slightly larger to avoid letterboxing/cropping artifacts
            gameFrame.style.width = '110%';
            gameFrame.style.height = '110%';
            // ensure it stays above overlays
            gameFrame.style.zIndex = '30';
            // mark dataset for cleanup awareness
            try { gameFrame.dataset.nexusBitlifeTransform = '1'; } catch (e) {}
        } else {
            // ensure defaults removed if not bitlife
            try {
                if (gameFrame && gameFrame.dataset && gameFrame.dataset.nexusBitlifeTransform) {
                    delete gameFrame.dataset.nexusBitlifeTransform;
                }
            } catch (e) {}
        }
    } catch (e) {
        // non-fatal; continue normal flow
        console.warn('bitlife mobile transform application failed', e);
    }
    
    if (isStumbleGuys) {
        // Apply custom rendering styles
        gameFrame.classList.add('custom-render-stumbleguys-frame');
        gameFrame.classList.remove('w-full', 'h-full');
        
        // Adjust wrapper display to allow absolute positioning of iframe
        gameFrameWrapper.classList.add('custom-render-stumbleguys-wrapper');
        gameFrameWrapper.classList.remove('flex', 'items-center', 'justify-center');

        // Ensure a CSS variable is set on the game layer so fullscreen maintains the same zoom
        try {
            gameLayer.style.setProperty('--stumble-scale', '1.8');
        } catch (e) {}
    }

    // ensure any lingering exit class removed
    gameLayer.classList.remove('hidden', 'game-exit');
    gameLayer.classList.add('flex', 'game-enter');

    // Ensure hide-toolbar and reveal controls are properly reset/visible when starting a game.
    try {
        // Make sure hide-toolbar button exists and is visible on iOS and other platforms.
        if (btnHideToolbar) {
            btnHideToolbar.classList.remove('hidden');
            btnHideToolbar.style.transition = 'opacity 260ms ease, transform 220ms cubic-bezier(.2,1,0.22,1)';
            btnHideToolbar.style.opacity = '1';
        }

        // Remove any lingering reveal button from previous sessions to avoid duplicate UI.
        const revealExisting = document.getElementById('nexus-mobile-reveal-toolbar');
        if (revealExisting && revealExisting.parentNode) {
            try { revealExisting.parentNode.removeChild(revealExisting); } catch (e) {}
        }
        // Create a persistent but hidden mobile reveal button so the three-dot control is always present
        // and will reliably appear when the toolbar is hidden; this prevents disappearance when opening a new game.
        try {
            if (!document.getElementById('nexus-mobile-reveal-toolbar')) {
                const reveal = document.createElement('button');
                reveal.id = 'nexus-mobile-reveal-toolbar';
                reveal.type = 'button';
                reveal.title = 'Show toolbar';
                reveal.innerHTML = '<i class="fas fa-ellipsis-v"></i>';
                // Position/styling minimal and hidden by default; click will reveal toolbar when needed
                reveal.style.position = 'fixed';
                reveal.style.zIndex = '13001';
                reveal.style.right = '10px';
                reveal.style.top = '12px';
                reveal.style.width = '44px';
                reveal.style.height = '44px';
                reveal.style.borderRadius = '10px';
                reveal.style.background = 'rgba(0,0,0,0.5)';
                reveal.style.color = '#fff';
                reveal.style.border = '1px solid rgba(255,255,255,0.06)';
                reveal.style.display = 'none'; // hidden initially
                reveal.style.alignItems = 'center';
                reveal.style.justifyContent = 'center';
                reveal.style.backdropFilter = 'blur(6px)';
                reveal.addEventListener('click', (ev) => {
                    ev.preventDefault();
                    ev.stopPropagation();
                    try {
                        if (gameLayerToolbar) {
                            gameLayerToolbar.classList.remove('hidden');
                            gameLayerToolbar.removeAttribute('aria-hidden');
                        }
                        if (btnHideToolbar) {
                            btnHideToolbar.innerHTML = '<i class="fas fa-eye-slash text-sm sm:text-lg"></i>';
                        }
                        reveal.style.display = 'none';
                    } catch (err) {}
                }, { passive: false });
                document.body.appendChild(reveal);
            }
        } catch (e) {}

        // Ensure iOS small close is hidden until user explicitly hides toolbar.
        const smallClose = document.getElementById('nexus-ios-small-close');
        if (smallClose) smallClose.classList.add('hidden');
    } catch (e) { console.warn('playGame toolbar init failed', e); }

    // show loader and status
    gameLoader.style.display = 'block';
    gameLoader.style.opacity = '1';
    gameLoader.style.zIndex = '60';
    if (loadingStatus) {
        loadingStatus.textContent = 'Starting streaming session...';
        loadingStatus.style.opacity = '1';
    }
    try { gameFrame.style.visibility = 'hidden'; } catch(e){}

    // Prevent right-click on the outer iframe element itself (best-effort; inner iframe also blocked when same-origin or via injected srcdoc)
    try {
        gameFrame.addEventListener('contextmenu', function(ev){
            try { ev.preventDefault(); } catch(e){}
        }, { passive: false });
    } catch (err) {}

    // use safe loader function to reduce mobile crash cases
    // Special-case: Unity-based embeds (like Baldi) are loaded via srcdoc to preserve the provided Module HTML.
    // If the DB entry uses custom_render === 'unity' we inject the supplied HTML snippet into the iframe srcdoc.
    // Special-case: Piece of Cake — inject exact overlay + inner iframe markup per request
    if (game.id === 'pieceofcake') {
        try {
            const pieceHtml = `<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
    <style>html,body{height:100%;margin:0;background:#000;overflow:hidden;} .wrap{position:relative;width:100%;height:100%;}</style>
  </head>
  <body>
    <div class="wrap">
      <div style="
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 65px; /* exact height of MS Store bar */
        background: #000; /* can be changed to transparent */
        z-index: 9999;
        pointer-events: none;
      "></div>

      <iframe 
        src="https://cdn.mergecakegame.com/html5/hg/index.html"
        style="
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: none;
        "
        allow="fullscreen; autoplay; gamepad *"
        loading="lazy"
      ></iframe>
    </div>
    <script>
      // minimal postMessage listener stub to remain compatible with host handlers
      try { window.addEventListener('message', function(){}, { passive: true }); } catch (e) {}
    </script>
  </body>
</html>`;
            try {
                gameFrame.removeAttribute && gameFrame.removeAttribute('src');
                gameFrame.srcdoc = pieceHtml;
            } catch (e) {
                try {
                    const w = gameFrame.contentWindow;
                    const d = w && w.document;
                    if (d) { d.open(); d.write(pieceHtml); d.close(); }
                } catch (ee) {
                    setGameFrameSrcSafe('https://cdn.mergecakegame.com/html5/hg/index.html');
                }
            }

            // Apply special layout for pieceofcake:
            // - wrap the frame wrapper and add a class so CSS forces a 16:9 look
            gameFrame.classList.add('custom-render-pieceofcake-frame');
            if (gameFrameWrapper) gameFrameWrapper.classList.add('custom-render-pieceofcake-wrapper');

            // If running on iOS, apply a minimal toolbar mode and forced visual fullscreen so
            // the iframe keeps PC-like proportion and the heavy UI is hidden.
            try {
                if (isIos()) {
                    // add a root-level marker so CSS hides heavy navbars
                    document.documentElement.classList.add('ios-minimal-toolbar');
                    // apply visual fullscreen to maximize usable area on iOS Safari
                    document.documentElement.classList.add('forced-fullscreen');
                    // keep a tiny in-game toolbar visible (handled by CSS). Hide the standard toolbar programmatically too.
                    try {
                        if (gameLayerToolbar) gameLayerToolbar.classList.add('hidden');
                    } catch (e) {}
                    // reduce bottom cut mask so more vertical space is available
                    try { document.documentElement.style.setProperty('--nexus-bottom-cut', '6vh'); } catch (e) {}

                    // Ensure the hide-toolbar button is present and visible for Piece of Cake (fix bug where it was hidden)
                    try {
                        if (btnHideToolbar) {
                            btnHideToolbar.classList.remove('hidden');
                            btnHideToolbar.style.opacity = '1';
                            btnHideToolbar.innerHTML = '<i class="fas fa-eye-slash text-sm sm:text-lg"></i>';
                        }
                        // Also ensure the mobile reveal button is not accidentally removed so users can toggle back
                        const reveal = document.getElementById('nexus-mobile-reveal-toolbar');
                        if (reveal) reveal.style.display = 'none';
                    } catch (e) {}
                } else {
                    // ensure normal desktop/mobile behavior for non-iOS devices
                    document.documentElement.classList.remove('ios-minimal-toolbar');
                }
            } catch (e) {}
        } catch (err) {
            console.warn('Failed to load Piece of Cake srcdoc for game', err);
            setGameFrameSrcSafe('https://cdn.mergecakegame.com/html5/hg/index.html');
        }
    } else if (game.custom_render === 'unity' || game.id === 'baldi') {
        try {
            // The following HTML is intentionally inlined exactly as provided to match the user's module.
            // Keep it minimal and self-contained; external Unity assets/scripts referenced by the HTML will still load from their hosts.
            const baldiHtml = `<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Baldi's Basics</title>
    <link rel="icon" type="image/png" href="/favicon.ico" />
    <script type="text/javascript" src="/js/main.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Nailington/3kh0-assets@aeb371b7e88542fd5e61eeed9e967a446d84fe1b/baldis-basics/TemplateData/style.css" />
    <script src="https://cdn.jsdelivr.net/gh/Nailington/3kh0-assets@aeb371b7e88542fd5e61eeed9e967a446d84fe1b/baldis-basics/TemplateData/UnityProgress.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/Nailington/3kh0-assets@aeb371b7e88542fd5e61eeed9e967a446d84fe1b/baldis-basics/baldi.js"></script>
    <script>
      var gameInstance = UnityLoader.instantiate("gameContainer", "https://rawcdn.githack.com/Nailington/3kh0-assets/aeb371b7e88542fd5e61eeed9e967a446d84fe1b/baldis-basics/baldi.json", {
        onProgress: UnityProgress,
        Module: {
          onRuntimeInitialized: function () {
            UnityProgress(gameInstance, "complete");
          },
        },
      });
    </script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  </head>
  <body style="margin: 0;">
    <div class="webgl-content">
      <div id="unityContainer" style="width: 100%; height: 100%; padding: 0; margin: 0; border: 0; position: relative; background: rgb(35, 31, 32);">
        <div id="gameContainer" style="width: 960px; height: 600px; margin: auto;"></div>
      </div>
      <script src="https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js"></script>
    </div>
  </body>
</html>`;
            try {
                gameFrame.removeAttribute && gameFrame.removeAttribute('src');
                gameFrame.srcdoc = baldiHtml;
            } catch (e) {
                try {
                    const w = gameFrame.contentWindow;
                    const d = w && w.document;
                    if (d) { d.open(); d.write(baldiHtml); d.close(); }
                } catch (ee) {
                    setGameFrameSrcSafe(game.url);
                }
            }
        } catch (err) {
            console.warn('Failed to load unity srcdoc for game', err);
            setGameFrameSrcSafe(game.url);
        }
    } else if (game.custom_render === 'embed') {
        // For simple embed cases (like CrazyGames), inject an iframe via srcdoc and crop the bottom area using CSS overflow/transform.
        try {
            // create a small embedded page that fills iframe while hiding bottom 12% to "cut" lower UI
            // Use the actual game.url so each embed loads its intended target (avoid hardcoded FNF)
            const embedHtml = `<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
    <style>
      html,body{height:100%;margin:0;background:#000;overflow:hidden;}
      .wrap{position:relative;width:100%;height:100%;overflow:hidden;background:#000;}
      /* Make inner iframe cover the container cleanly and preserve aspect/scale via object-fit */
      #inner-embed{
        position:absolute;
        inset:0;
        width:100%;
        height:100%;
        border:0;
        margin:0;
        padding:0;
        display:block;
        -webkit-transform:none;
        transform:none;
        object-fit:cover; /* helps keep embedded content centered and prevents off-canvas layout */
        pointer-events:auto;
        background: #000;
      }

      /* bottom mask to hide intrusive UI at the bottom of some embeds; keep pointer-events on the mask
         but avoid pushing the iframe layout (mask overlays the iframe via z-index) */
      .bottom-cut{
        position:absolute;
        left:0;
        right:0;
        bottom:0;
        height:var(--nexus-bottom-cut,14vh);
        background:#000;
        z-index:9999;
        pointer-events:auto;
      }

      /* small responsive tweak: reduce mask on larger screens where it's not needed */
      @media(min-width:900px){
        .bottom-cut{ height:var(--nexus-bottom-cut,10vh); }
      }
    </style>
    <script>
      try {
        window.addEventListener('contextmenu', function(e){ e.preventDefault(); }, { passive: false });
        window.addEventListener('message', function(evt){
          // keep listener minimal for compatibility
        });
      } catch (e){}
    </script>
  </head>
  <body>
    <div class="wrap">
      <!-- Inner iframe uses the game's URL dynamically and has id="inner-embed" for focus/postMessage handling -->
      <iframe 
        id="inner-embed"
        src="${game.url}"
        allow="fullscreen; autoplay; gamepad *"
        loading="lazy"
      ></iframe>
      <div class="bottom-cut" aria-hidden="true"></div>
    </div>

    <!-- Replacement injector: constantly replace "CrazyGames" and specific "Play on CrazyGames to save your progress" inside this document
         and attempt to propagate into a same-origin inner iframe; runs continuously via MutationObserver and interval as fallback. -->
    <script>
      (function(){
        function replaceTextInNode(node) {
          try {
            if (!node) return;
            // Replace text nodes
            if (node.nodeType === Node.TEXT_NODE) {
              var txt = node.nodeValue;
              if (!txt) return;
              var newTxt = txt.replace(/Play on CrazyGames to save your progress/g, 'Play on Nebula Nexus')
                              .replace(/CrazyGames/g, 'Nebula Nexus');
              if (newTxt !== txt) node.nodeValue = newTxt;
              return;
            }
            // For elements, update common textual attributes so buttons/inputs/labels are covered
            if (node.nodeType === Node.ELEMENT_NODE) {
              try {
                var attrs = ['alt','title','placeholder','aria-label','value','data-tooltip','data-title'];
                attrs.forEach(function(attr){
                  try {
                    if (node.hasAttribute && node.hasAttribute(attr)) {
                      var v = node.getAttribute(attr);
                      if (v && typeof v === 'string') {
                        var nv = v.replace(/Play on CrazyGames to save your progress/g, 'Play on Nebula Nexus')
                                  .replace(/CrazyGames/g, 'Nebula Nexus');
                        if (nv !== v) node.setAttribute(attr, nv);
                      }
                    }
                  } catch (e){}
                });
              } catch (e){}
            }
          } catch (e){}
        }

        function walkAndReplace(root) {
          try {
            if (!root) return;
            var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);
            var node;
            while (node = walker.nextNode()) {
              replaceTextInNode(node);
            }
          } catch (e){}
        }

        function observeRoot(root) {
          try {
            walkAndReplace(root);
            var mo = new MutationObserver(function(muts){
              muts.forEach(function(m){
                if (m.type === 'characterData' && m.target) {
                  replaceTextInNode(m.target);
                } else if (m.addedNodes && m.addedNodes.length) {
                  m.addedNodes.forEach(function(n){
                    if (n.nodeType === Node.TEXT_NODE) replaceTextInNode(n);
                    else walkAndReplace(n);
                  });
                }
              });
            });
            mo.observe(root, { childList: true, subtree: true, characterData: true });
            return mo;
          } catch (e){ return null; }
        }

        // Run on this document
        var localMo = observeRoot(document.body);
        // as a fallback, run a periodic sweep (covers dynamic frameworks that manipulate DOM rapidly)
        var sweepInterval = setInterval(function(){ try { walkAndReplace(document.body); } catch(e){} }, 1200);

        // Attempt to reach inner iframe if same-origin; if not same-origin, still postMessage as a hint.
        var inner = document.getElementById('inner-embed');
        function tryInnerInject() {
          try {
            if (!inner) return;
            // If same-origin, directly access and install observer there
            try {
              var win = inner.contentWindow;
              var doc = win && win.document;
              if (doc && doc.body) {
                // install replacer inside inner frame
                try {
                  // create script that does same replacement logic inside the inner frame
                  var s = doc.createElement('script');
                  s.type = 'text/javascript';
                  s.textContent = '(' + function() {
                    function replaceTextInNode(node) {
                      try {
                        if (!node || node.nodeType !== Node.TEXT_NODE) return;
                        var txt = node.nodeValue;
                        if (!txt) return;
                        var newTxt = txt.replace(/Play on CrazyGames to save your progress/g, 'Play on Nebula Nexus')
                                        .replace(/CrazyGames/g, 'Nebula Nexus');
                        if (newTxt !== txt) node.nodeValue = newTxt;
                      } catch (e){}
                    }
                    function walkAndReplace(root) {
                      try {
                        if (!root) return;
                        var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);
                        var node;
                        while (node = walker.nextNode()) {
                          replaceTextInNode(node);
                        }
                      } catch (e){}
                    }
                    function observeRoot(root) {
                      try {
                        walkAndReplace(root);
                        var mo = new MutationObserver(function(muts){
                          muts.forEach(function(m){
                            if (m.type === 'characterData' && m.target) {
                              replaceTextInNode(m.target);
                            } else if (m.addedNodes && m.addedNodes.length) {
                              m.addedNodes.forEach(function(n){
                                if (n.nodeType === Node.TEXT_NODE) replaceTextInNode(n);
                                else walkAndReplace(n);
                              });
                            }
                          });
                        });
                        mo.observe(root, { childList: true, subtree: true, characterData: true });
                        return mo;
                      } catch (e){ return null; }
                    }
                    try {
                      observeRoot(document.body);
                      setInterval(function(){ try { walkAndReplace(document.body); } catch(e){} }, 1200);
                    } catch (e){}
                  } + ')();';
                  doc.documentElement.appendChild(s);
                  return; // injected successfully
                } catch (e) {
                  // if injection into inner doc fails, fall back to postMessage hint
                }
              }
            } catch (e) {
              // cross-origin; cannot access doc
            }
            // PostMessage hint to inner frame asking it to perform replacement if it listens
            try {
              inner.contentWindow && inner.contentWindow.postMessage && inner.contentWindow.postMessage({ type: 'nexus:replaceCrazyGamesText' }, '*');
            } catch (e){}
          } catch (e){}
        }

        // Try injecting when inner loads
        if (inner) {
          inner.addEventListener('load', tryInnerInject, { passive: true });
          // attempt immediately in case it is already same-origin and loaded
          setTimeout(tryInnerInject, 300);
        }

        // Clean-up when this document unloads
        window.addEventListener('unload', function(){
          try { clearInterval(sweepInterval); if (localMo) localMo.disconnect(); } catch (e){}
        }, { passive: true });
      })();
    </script>
  </body>
</html>`;
            try {
                gameFrame.removeAttribute && gameFrame.removeAttribute('src');
                gameFrame.srcdoc = embedHtml;
            } catch (e) {
                try {
                    const w = gameFrame.contentWindow;
                    const d = w && w.document;
                    if (d) { d.open(); d.write(embedHtml); d.close(); }
                } catch (ee) {
                    setGameFrameSrcSafe(game.url);
                }
            }
        } catch (err) {
            console.warn('Failed to load embed srcdoc for game', err);
            setGameFrameSrcSafe(game.url);
        }
    } else if (game.custom_render === 'srcdoc' && game.srcdoc_html) {
        // Handle generic srcdoc injection
        try {
            gameFrame.removeAttribute && gameFrame.removeAttribute('src');
            // Set the provided HTML content directly
            gameFrame.srcdoc = game.srcdoc_html;
        } catch (e) {
            console.warn('Failed to set srcdoc_html for game', game.id, e);
            // Fallback: If srcdoc fails (rare), try setting a blank src
            try { setGameFrameSrcSafe('about:blank'); } catch (ee) {}
        }
    } else {
        setGameFrameSrcSafe(game.url);
    }

    // Start watching iframe for ad/navigation behavior.
    try {
        const tmp = new URL(game.url);
        startIframeWatch([tmp.host]);
    } catch {
        startIframeWatch(null);
    }

    // Optional: clear on unload to avoid leaks
    window.addEventListener('beforeunload', () => {
        stopIframeWatch();
    });

    // Ensure previous onload cleared
    gameFrame.onload = () => {
        // reveal iframe and hide loader when iframe reports loaded
        try {
            gameFrame.style.visibility = 'visible';
        } catch (e) {}

        gameLoader.style.display = 'none';
        gameLoader.style.opacity = '0';
        if (loadingStatus) {
             // removed the "Conectado. Carregando recursos do jogo..." message per request
             loadingStatus.textContent = '';
             loadingStatus.style.opacity = '0';
             setTimeout(() => { loadingStatus.style.opacity = '0'; }, 3000);
        }
        // update global loader progress to near completion then hide
        updateGlobalLoaderProgress(92, 'Loading game assets...');
        setTimeout(() => { hideGlobalLoader(); }, 420);

        try {
            try {
                if (gameFrame.contentWindow && typeof gameFrame.contentWindow.open === 'function') {
                    gameFrame.contentWindow.open = function() { console.warn('Blocked iframe window.open'); return null; };
                }
            } catch (e) {}
            gameFrame.contentWindow?.focus();
        } catch {
            // ignore cross-origin
        }
    };

    // Safety timeout: if iframe doesn't load within 10s, hide loader to avoid blocking UI
    const loadTimeout = setTimeout(() => {
        if (gameLoader.style.display !== 'none') {
            gameLoader.style.display = 'none';
            gameLoader.style.opacity = '0';
            if (loadingStatus) {
                 loadingStatus.textContent = 'Loading timeout. Please try again.';
                 loadingStatus.style.opacity = '1';
                 setTimeout(() => { loadingStatus.style.opacity = '0'; }, 3000);
            }
            console.warn('Loading timeout, loader hidden to prevent lockup.');
            try { gameFrame.style.visibility = 'visible'; } catch (e) {}
            // hide global enhanced loader as well to keep UI responsive
            hideGlobalLoader();
        }
    }, 10000);

    // clear the timeout once load completes
    gameFrame.addEventListener('load', () => clearTimeout(loadTimeout), { once: true });

    try {
        setupFNFTouchMappingIfNeeded(game);
    } catch (err) {
        console.warn('FNF touch mapping setup failed', err);
    }
}

function closeGame() {
    try {


        // restore mobile bottom bar when leaving game
        try {
            const mobileBar = document.querySelector('.mobile-bottom-bar');
            if (mobileBar) {
                // remove inline display override so CSS controls visibility again
                mobileBar.style.removeProperty('display');
            }
        } catch (e) {}

        // disable keyboard isolation when leaving a game
        try { disableExtensionKeyIsolation(); } catch (e) { console.warn('disableExtensionKeyIsolation failed', e); }
        // stop watching iframe
        stopIframeWatch();
        // Remove the class that indicates a game is active
        try { document.documentElement.classList.remove('no-game-scroll'); } catch (e) {}

        // Restore interaction/scroll on main app panes that were locked during play
        try {
            const panes = [document.getElementById('home-content'), document.getElementById('favorites-content'), document.getElementById('search-results-content')];
            panes.forEach(p => {
                if (!p) return;
                p.style.overflow = '';
                p.style.pointerEvents = '';
                p.style.touchAction = '';
                p.style.height = '';
            });
        } catch (e) {}

        // Restore previous inline overflow/touchAction values saved when playGame ran.
        try {
            const docEl = document.documentElement;
            // restore documentElement inline styles
            if (docEl && docEl.dataset) {
                if (typeof docEl.dataset.nexusPrevOverflow !== 'undefined') {
                    docEl.style.overflow = docEl.dataset.nexusPrevOverflow || '';
                    delete docEl.dataset.nexusPrevOverflow;
                } else {
                    docEl.style.overflow = '';
                }
                if (typeof docEl.dataset.nexusPrevTouch !== 'undefined') {
                    docEl.style.touchAction = docEl.dataset.nexusPrevTouch || '';
                    delete docEl.dataset.nexusPrevTouch;
                } else {
                    docEl.style.touchAction = '';
                }
            } else {
                // fallback: clear to default
                document.documentElement.style.overflow = '';
                document.documentElement.style.touchAction = '';
            }

            // restore body inline styles
            if (document.body && document.body.dataset) {
                if (typeof document.body.dataset.nexusPrevOverflow !== 'undefined') {
                    document.body.style.overflow = document.body.dataset.nexusPrevOverflow || '';
                    delete document.body.dataset.nexusPrevOverflow;
                } else {
                    document.body.style.overflow = '';
                }
                if (typeof document.body.dataset.nexusPrevTouch !== 'undefined') {
                    document.body.style.touchAction = document.body.dataset.nexusPrevTouch || '';
                    delete document.body.dataset.nexusPrevTouch;
                } else {
                    document.body.style.touchAction = '';
                }
            } else if (document.body) {
                document.body.style.overflow = '';
                document.body.style.touchAction = '';
            }
        } catch (e) {
            // best-effort restore, avoid permanent lock
            try { document.documentElement.style.overflow = ''; document.documentElement.style.touchAction = ''; } catch (ee) {}
            try { if (document.body) { document.body.style.overflow = ''; document.body.style.touchAction = ''; } } catch (ee) {}
        }

        // Ensure any toolbar-related controls (reveal button, hide toolbar button, ios small close) are removed/hidden on exit.
        try {
            // Hide and remove the reveal toolbar button if it exists
            const reveal = document.getElementById('nexus-mobile-reveal-toolbar');
            if (reveal) {
                reveal.style.transition = 'opacity 220ms ease, transform 180ms cubic-bezier(.2,1,0.22,1)';
                reveal.style.opacity = '0';
                reveal.style.transform = 'translateY(6px) scale(0.98)';
                setTimeout(() => {
                    try { if (reveal && reveal.parentNode) reveal.parentNode.removeChild(reveal); } catch (e) {}
                }, 260);
            }

            // Hide the hide-toolbar button visually and mark hidden so it won't appear unexpectedly
            if (btnHideToolbar) {
                btnHideToolbar.style.transition = 'opacity 220ms ease, transform 180ms cubic-bezier(.2,1,0.22,1)';
                btnHideToolbar.style.opacity = '0';
                btnHideToolbar.style.transform = 'translateY(6px) scale(0.98)';
                // actually hide after the transition so layout resets
                setTimeout(() => {
                    try { btnHideToolbar.classList.add('hidden'); btnHideToolbar.style.opacity = ''; btnHideToolbar.style.transform = ''; } catch (e) {}
                }, 260);
            }

            // Also remove the small iOS close if present (created by initApp), hide with transition first
            const smallClose = document.getElementById('nexus-ios-small-close');
            if (smallClose) {
                smallClose.style.transition = 'opacity 200ms ease, transform 160ms ease';
                smallClose.style.opacity = '0';
                smallClose.style.transform = 'translateX(-8px) scale(0.98)';
                setTimeout(() => {
                    try { if (smallClose && smallClose.parentNode) smallClose.parentNode.removeChild(smallClose); } catch (e) {}
                }, 220);
            }
        } catch (e) {
            console.warn('closeGame toolbar cleanup failed', e);
        }

        // Attempt to gently stop audio/video inside the iframe (best-effort for same-origin; postMessage for cross-origin)
        try {
            // Try same-origin direct pause
            try {
                const win = gameFrame && gameFrame.contentWindow;
                if (win && win.document) {
                    const mediaEls = Array.from(win.document.querySelectorAll('audio, video'));
                    mediaEls.forEach(m => {
                        try { m.pause(); m.currentTime && (m.currentTime = 0); } catch (e) {}
                    });
                }
            } catch (e) {
                // cross-origin likely; fallback to postMessage hint
                try {
                    if (gameFrame && gameFrame.contentWindow && typeof gameFrame.contentWindow.postMessage === 'function') {
                        gameFrame.contentWindow.postMessage({ type: 'nexus:stopAllAudio' }, '*');
                    }
                } catch (ee) {}
            }

            // extra best-effort: if the iframe uses an inner embed (srcdoc -> inner iframe like in embedHtml), 
            // try to reach inside via contentWindow to stop or unload that inner iframe (same-origin only).
            try {
                const win = gameFrame && gameFrame.contentWindow;
                if (win && win.document) {
                    const inner = win.document.querySelector('iframe, webview');
                    if (inner) {
                        try { inner.src = 'about:blank'; } catch (e) {}
                        try { inner.remove(); } catch (e) {}
                    }
                    // also attempt to clear any nodes that may keep loading (images, scripts)
                    try {
                        const wrappers = win.document.querySelectorAll('iframe, webview, embed, object');
                        wrappers.forEach(w => {
                            try { w.src = 'about:blank'; } catch (ee){};
                            try { w.remove(); } catch (ee){}
                        });
                    } catch (ee) {}
                } else {
                    // If cross-origin, still send a second gentle message asking inner embeds to mute/stop (some embeds honor it)
                    try {
                        gameFrame.contentWindow.postMessage({ type: 'nexus:stopAllAudio' }, '*');
                    } catch (e) {}
                }
            } catch (e) {
                // ignore cross-origin/access errors
            }
        } catch (e) {}

        // Hide game frame immediately for smoother transition out, preventing visual flash
        try { gameFrame.style.opacity = '0'; } catch (e) {}

        // play exit animation first to give a smooth closing transition
        gameLayer.classList.remove('game-enter');
        gameLayer.classList.add('game-exit');

        // Define cleanup function to handle state reset and unmount
        const cleanup = () => {
            // Ensure cleanup runs only once
            if (gameLayer.classList.contains('hidden')) return;

            try {
                // final aggressive stop: set to about:blank and remove src/srcdoc to ensure browsers stop any playing media
                try { gameFrame.src = 'about:blank'; } catch (e) {}
                try { gameFrame.removeAttribute('src'); } catch (e) {}
                try { gameFrame.srcdoc = ''; } catch (e) {}
                try { delete gameFrame.dataset.intendedSrc; } catch (e) {}
                try { gameFrame.style.opacity = '1'; } catch (e) {}
            } catch (err) {
                // ignore
            }

            // Reset custom rendering styles. DO NOT call resetGameFrame() here, as this runs asynchronously
            // after the game layer hides and can interfere with the next playGame() call (race condition).
            try {
                // remove custom classes
                gameFrame.classList.remove('custom-render-stumbleguys-frame', 'custom-render-pieceofcake-frame');
                gameFrame.classList.add('w-full', 'h-full');

                // Remove any BitLife mobile transform/override if applied
                try {
                    if (gameFrame && gameFrame.dataset && gameFrame.dataset.nexusBitlifeTransform) {
                        gameFrame.style.transform = '';
                        gameFrame.style.transformOrigin = '';
                        gameFrame.style.width = '';
                        gameFrame.style.height = '';
                        gameFrame.style.zIndex = '';
                        delete gameFrame.dataset.nexusBitlifeTransform;
                    }
                } catch (e) {
                    // ignore cleanup errors
                }
            } catch (e) {}
            try {
                // attempt to clear inner embeds if same-origin
                try {
                    const win = gameFrame && gameFrame.contentWindow;
                    if (win && win.document) {
                        const inner = win.document.querySelectorAll('iframe, webview, embed, object');
                        inner.forEach(n => { try { n.src = 'about:blank'; } catch (e){}; try { n.remove(); } catch (e){}; });
                    }
                } catch (e) {}
            } catch (e) {}

            try {
                gameFrameWrapper.classList.remove('custom-render-stumbleguys-wrapper', 'custom-render-pieceofcake-wrapper');
                gameFrameWrapper.classList.add('flex', 'items-center', 'justify-center');
                // Ensure iOS minimal toolbar class is cleared when exiting
                document.documentElement.classList.remove('ios-minimal-toolbar');
            } catch (e) {}

            // remove any fnf overlay if present
            removeFNFTouchOverlay();

            // hide game layer and clear classes
            gameLayer.classList.add('hidden');
            gameLayer.classList.remove('flex', 'game-enter', 'game-exit');

            // Remove listeners if they haven't fired yet
            try { gameLayer.removeEventListener('animationend', onExit); } catch (e) {}

            // exit fullscreen if still active
            if (document.fullscreenElement) {
                document.exitFullscreen().catch(() => {});
            }

            // CENTRAL CLEANUP: free any tracked resources (timers, observers, registered listeners)
            try { ResourceTracker.cleanupAll(); } catch (e) {}

            // Final iframe cleanup: ensure the current frame is completely inert and has no active handlers/sources.
            // Note: The frame is physically replaced on the next call to playGame().
            try {
                if (gameFrame) {
                    try { gameFrame.onload = null; } catch (e) {}
                    try { gameFrame.onerror = null; } catch (e) {}
                    // ensure the iframe is inert until next play to avoid background loads
                    try { gameFrame.src = 'about:blank'; } catch (e) {}
                }
            } catch (e) {
                // ignore any cleanup errors
            }

            // --- NEW: ensure UI visual state fully restored to avoid leftover gray overlays ---
            try {
                // restore wrapper visual styles that may have been altered during close animation
                if (gameFrameWrapper) {
                    gameFrameWrapper.style.opacity = '';
                    gameFrameWrapper.style.filter = '';
                }
                // hide in-layer loader & status
                if (gameLoader) {
                    gameLoader.style.display = 'none';
                    gameLoader.style.opacity = '0';
                }
                if (loadingStatus) {
                    loadingStatus.textContent = '';
                    loadingStatus.style.opacity = '0';
                }
                // hide global loader if any left
                try { hideGlobalLoader(); } catch (e) {}
                // ensure any forced visual fullscreen is removed so CSS masks don't persist
                document.documentElement.classList.remove('forced-fullscreen');
                // restore scroll lock as a final guard
                document.documentElement.classList.remove('no-game-scroll');
                try { document.documentElement.style.overflow = ''; if (document.body) { document.body.style.overflow = ''; document.body.style.touchAction = ''; } } catch (e) {}
            } catch (e) {
                // non-fatal
            }

            // Replace the iframe with a fresh one shortly after cleanup to avoid leaving stale/cross-origin iframe nodes
            // This delayed reset avoids race conditions with animations and ensures the next playGame() gets a clean iframe.
            try {
                setTimeout(() => {
                    try { resetGameFrame(); } catch (e) {}
                }, 120);
            } catch (e) {}

        };

        // Event listener for animation end
        const onExit = (e) => {
            // Ensure we only execute on the intended animation (gameExit)
            if (e && e.animationName && e.animationName !== 'gameExit') return;
            cleanup();
        };

        // Attach listener and setup a fallback timeout (slightly longer than CSS animation)
        try { gameLayer.addEventListener('animationend', onExit); } catch (e) {}
        setTimeout(cleanup, 420);

    } catch (err) {
        // fallback immediate close on error
        try {
            try { gameFrame.src = 'about:blank'; } catch (e) {}
            try { gameFrame.removeAttribute('src'); } catch (e) {}
            try { gameFrame.srcdoc = ''; } catch (e) {}
        } catch (e) {}
        stopIframeWatch();

        // remove overlay as well
        removeFNFTouchOverlay();

        gameLayer.classList.add('hidden');
        gameLayer.classList.remove('flex', 'game-enter', 'game-exit');

        // ensure overflow restored in error path as well
        try {
            document.documentElement.style.overflow = '';
            if (document.body) {
                document.body.style.overflow = '';
                document.body.style.touchAction = '';
            }
        } catch (e) {}

        if (document.fullscreenElement) {
            document.exitFullscreen().catch(() => {});
        }

        // Ensure tracked resources cleared on error path too
        try { ResourceTracker.cleanupAll(); } catch (e) {}

        // If error path and special-case game was active, still attempt reload
        try {
            if (activeGame && (activeGame.id === 'duo' || activeGame.id === 'starstuff')) {
                setTimeout(() => { location.reload(); }, 120);
            }
        } catch (e) {}
    }
}

// --- FNF touch mapping helpers ---
// FNF touch mapping disabled: keep no-op functions to avoid breaking calls elsewhere.
function setupFNFTouchMappingIfNeeded(game) {
    // Intentionally disabled to allow direct clicks and keyboard events to reach the iframe.
    return;
}

function removeFNFTouchOverlay() {
    // no-op since overlay is disabled
    return;
}

/* --- Generic iframe element remover: robustly attempts to remove specific elements inside
   an iframe document using:
    - immediate try (when same-origin)
    - load event
    - MutationObserver on the iframe document
   It's safe (wrapped in try/catch) and non-destructive (only removes matched nodes).
   The registry below maps game ids to an array of matcher functions so you can add more rules later.
*/
(function iframeElementCleanerModule() {
    // registry: map gameId => [matcherFn(document) => NodeList/Element(s) to remove]
    const CLEAN_REGISTRY = {
        // For CrazyGames embeds that may inject an anchor+button linking to the CrazyGames page.
        // Matcher should return an array-like of nodes to remove (or empty if none).
        'starstuff': [matchCrazyGamesPlayButton],
        'duo': [matchCrazyGamesPlayButton],
        // Add other game ids here later, e.g. 'othergame': [otherMatcher]
    };

    // matcher implementation: looks for <a href*="crazygames.com" ...><button class="css-vuljoq"...>...</button></a>
    function matchCrazyGamesPlayButton(doc) {
        try {
            if (!doc || !doc.querySelectorAll) return [];
            // look for anchor containing crazygames link and a button with class pattern
            const anchors = Array.from(doc.querySelectorAll('a[href*="crazygames.com"]'));
            const toRemove = [];
            anchors.forEach(a => {
                const btn = a.querySelector('button.css-vuljoq') || Array.from(a.querySelectorAll('button')).find(b => /Play on CrazyGames/i.test(b.textContent || ''));
                if (btn) toRemove.push(a);
            });
            return toRemove;
        } catch (e) { return []; }
    }

    // Core worker that tries to remove matches from an accessible document
    function tryRemoveInDocument(doc, matchers) {
        try {
            if (!doc) return false;
            let removedAny = false;
            matchers.forEach(matcher => {
                try {
                    const nodes = matcher(doc) || [];
                    Array.from(nodes).forEach(n => {
                        try {
                            // remove node but keep context: only remove if still attached
                            if (n && n.parentNode) {
                                n.parentNode.removeChild(n);
                                removedAny = true;
                            }
                        } catch (e) {}
                    });
                } catch (e) {}
            });
            return removedAny;
        } catch (e) {
            return false;
        }
    }

    // Public: observe an iframe and attempt to remove matching nodes when they appear.
    // frameEl: iframe DOM element (outer iframe element)
    // matchers: array of matcher functions to run against frameEl.contentDocument
    // options: {timeoutMs} optional timeout to stop observing after some time
    function observeAndRemoveInIframe(frameEl, matchers = [], options = {}) {
        try {
            if (!frameEl || !matchers || !matchers.length) return;
            const timeoutMs = (typeof options.timeoutMs === 'number') ? options.timeoutMs : 10000;

            // helper to attempt immediate removal if same-origin
            const attemptImmediate = () => {
                try {
                    const doc = frameEl.contentDocument || (frameEl.contentWindow && frameEl.contentWindow.document);
                    if (doc) {
                        const removed = tryRemoveInDocument(doc, matchers);
                        if (removed) return true;
                    }
                } catch (e) {
                    // cross-origin or inaccessible
                }
                return false;
            };

            if (attemptImmediate()) return; // already removed

            // Try hooking load event (fires when iframe final document is ready)
            const onLoad = () => {
                try {
                    // small deferred attempt to allow scripts in iframe to finish DOM changes
                    setTimeout(() => {
                        try {
                            const doc = frameEl.contentDocument || (frameEl.contentWindow && frameEl.contentWindow.document);
                            if (doc) {
                                tryRemoveInDocument(doc, matchers);
                            }
                        } catch (e) {}
                    }, 160);
                } catch (e) {}
            };
            frameEl.addEventListener('load', onLoad, { once: true, passive: true });

            // If same-origin becomes available, attach a MutationObserver to the iframe document to remove nodes as they appear
            // We also observe the iframe element itself for srcdoc changes (some code paths inject srcdoc).
            let moDoc = null;
            let moEl = null;
            const tryAttachDocObserver = () => {
                try {
                    const doc = frameEl.contentDocument || (frameEl.contentWindow && frameEl.contentWindow.document);
                    if (!doc || moDoc) return;
                    // Run an initial removal attempt
                    tryRemoveInDocument(doc, matchers);

                    // Observe body (or documentElement) for added nodes
                    const root = doc.body || doc.documentElement;
                    if (!root) return;
                    moDoc = new doc.defaultView.MutationObserver((mutations) => {
                        try {
                            for (const m of mutations) {
                                if (m.addedNodes && m.addedNodes.length) {
                                    // quick attempt each mutation batch
                                    tryRemoveInDocument(doc, matchers);
                                }
                            }
                        } catch (e) {}
                    });
                    moDoc.observe(root, { childList: true, subtree: true });
                } catch (e) {
                    // cross-origin or other error; leave fallback
                }
            };

            // Observe the iframe element for changes that may make it same-origin (e.g., srcdoc set)
            moEl = new MutationObserver((mutations) => {
                try {
                    for (const m of mutations) {
                        if (m.type === 'attributes' && (m.attributeName === 'srcdoc' || m.attributeName === 'src' || m.attributeName === 'data-intended-src')) {
                            tryAttachDocObserver();
                        }
                        if (m.addedNodes && m.addedNodes.length) {
                            tryAttachDocObserver();
                        }
                    }
                } catch (e) {}
            });
            moEl.observe(frameEl, { attributes: true, attributeFilter: ['srcdoc','src','data-intended-src'], childList: false, subtree: false });

            // Try to attach now in case the frame is same-origin later
            tryAttachDocObserver();

            // Stop observers after timeout to avoid leaks
            const stopAll = () => {
                try { frameEl.removeEventListener('load', onLoad); } catch (e) {}
                try { if (moDoc) moDoc.disconnect(); } catch (e) {}
                try { if (moEl) moEl.disconnect(); } catch (e) {}
            };
            const t = setTimeout(() => {
                stopAll();
            }, timeoutMs);

            // return a cleanup handle
            return {
                stop: () => {
                    clearTimeout(t);
                    stopAll();
                }
            };
        } catch (e) {
            return null;
        }
    }

    // Lightweight helper used by playGame: given a game id, attach cleaners if a registry entry exists
    function attachCleanerForGameId(gameId, frameEl) {
        try {
            const matchers = CLEAN_REGISTRY[gameId];
            if (!matchers || !matchers.length) return;
            // call observer; returns handle if needed
            observeAndRemoveInIframe(frameEl, matchers, { timeoutMs: 15000 });
        } catch (e) {}
    }

    // expose to global scope for calls from playGame or debug
    try {
        window.__nexus_iframeCleaner = {
            observeAndRemoveInIframe,
            attachCleanerForGameId,
            _matchCrazyGamesPlayButton: matchCrazyGamesPlayButton // exported for testing if needed
        };
    } catch (e) {}
})();

/* --- Row "View All" wiring (shows search/results filtered by row) --- */
function wireRowViewAll() {
    try {
        // Delegated handler: single listener avoids duplicate attachments when rows re-render
        document.addEventListener('click', function (e) {
            try {
                const btn = e.target && e.target.closest && e.target.closest('.row-view-all');
                if (!btn) return;
                e.preventDefault();
                e.stopPropagation();
                const catId = btn.getAttribute('data-cat-id');
                if (!catId) return;

                // Find the matching CATEGORIES entry
                const cat = CATEGORIES.find(c => c.id === catId);
                // Build the filtered list using the same filter function
                const games = Array.from(DB.filter ? DB.filter(cat.filter) : []);
                const title = cat ? cat.title : 'Results';

                // Show the search results pane with these games
                try {
                    homeContent.classList.add('hidden');
                    favoritesContent.classList.add('hidden');
                    searchResultsContent.classList.remove('hidden');
                    void searchResultsContent.offsetWidth;
                    searchResultsContent.classList.add('animate-fade-in');
                    searchQueryDisplay.textContent = title;
                    renderSearchResults(games);
                    // mark currentTab so other UI remains consistent
                    currentTab = 'search';
                    // update tab button active states
                    document.querySelectorAll('.tab-btn, .tab-chip').forEach(b => {
                        b.classList.remove('tab-btn-active');
                    });
                } catch (err) {
                    console.warn('wireRowViewAll display failed', err);
                }
            } catch (err) {
                // swallow errors to avoid interrupting clicks
                console.warn('row-view-all handler error', err);
            }
        }, { passive: false });
    } catch (e) {
        console.warn('wireRowViewAll init failed', e);
    }
}

// --- MODAL ---
function wireModal() {
    detailsModal.addEventListener('click', e => {
        if (e.target === detailsModal && allowBackdropClose) closeDetails();
    });
    modalClose.addEventListener('click', closeDetails);

    // ensure modal backdrop shows smoothly
    // no-op here but keep for future hooks
}

function showMobileIncompatModal(game) {
    try {
        const modal = document.getElementById('mobile-unsupported-modal');
        const card = document.getElementById('mobile-unsupported-card');
        if (!modal || !card) {
            // fallback: alert if modal not present
            alert(`${game.title} is not supported on mobile. Please open on desktop.`);
            return;
        }

        const title = document.getElementById('mobile-unsupported-title');
        const desc = document.getElementById('mobile-unsupported-desc');
        const okBtn = document.getElementById('mobile-unsupported-ok');
        const shareBtn = document.getElementById('mobile-unsupported-share');

        title.textContent = `${game.title} — Not supported on mobile`;
        desc.textContent = 'This game is not compatible with mobile devices due to its embedded player or layout. Please open this game on a desktop or laptop for the full experience.';

        // Mark modal visible and trap background interactions
        modal.setAttribute('aria-hidden', 'false');
        // make body inert-ish so underlying cards can't receive pointer events
        document.documentElement.classList.add('nexus-modal-open');

        // animate in
        card.classList.remove('modal-hide');
        // force reflow
        void card.offsetWidth;
        card.classList.add('modal-show');
        // ensure modal shows (CSS ties display to aria-hidden)
        modal.style.display = 'flex';

        // Clean up any previous listeners to avoid duplicates
        okBtn.replaceWith(okBtn.cloneNode(true));
        shareBtn.replaceWith(shareBtn.cloneNode(true));
        const freshOk = document.getElementById('mobile-unsupported-ok');
        const freshShare = document.getElementById('mobile-unsupported-share');

        // Close handler
        const closeHandler = (ev) => {
            try {
                ev && ev.preventDefault && ev.preventDefault();
            } catch (e) {}
            // animate out
            try {
                card.classList.remove('modal-show');
                card.classList.add('modal-hide');
                modal.setAttribute('aria-hidden', 'true');
                setTimeout(() => {
                    try { modal.style.display = 'none'; } catch (e) {}
                    document.documentElement.classList.remove('nexus-modal-open');
                }, 320);
            } catch (e) {}
        };

        // Share handler (uses navigator.share when available otherwise copies link)
        freshShare.addEventListener('click', async (e) => {
            try {
                e.preventDefault();
                e.stopPropagation();
                const url = buildShareUrlForGame(game.id);
                if (navigator.share) {
                    await navigator.share({ title: game.title, text: game.desc, url });
                    showToast('Share dialog opened.');
                } else {
                    await navigator.clipboard.writeText(url);
                    showToast('Link copied to clipboard.');
                }
            } catch (err) {
                showToast('Unable to share link.');
            }
        }, { passive: false });

        // OK closes modal
        freshOk.addEventListener('click', (e) => {
            try { e.preventDefault(); e.stopPropagation(); } catch (err) {}
            closeHandler(e);
        }, { passive: false });

        // Ensure keyboard accessibility: Escape closes modal, trap tab focus inside
        const focusable = Array.from(card.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(Boolean);
        let lastFocused = document.activeElement;
        if (focusable.length) focusable[0].focus();

        function onKey(e) {
            if (e.key === 'Escape') {
                e.preventDefault();
                closeHandler(e);
            } else if (e.key === 'Tab') {
                // simple focus trap
                if (focusable.length === 0) return;
                const first = focusable[0];
                const last = focusable[focusable.length - 1];
                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        }

        window.addEventListener('keydown', onKey, { passive: false });

        // remove key listener when modal closes (cleanup via close handler)
        const cleanupOnClose = () => {
            window.removeEventListener('keydown', onKey);
        };

        // wrap closeHandler to run cleanup
        const proxiedClose = (ev) => {
            cleanupOnClose();
            closeHandler(ev);
            try { lastFocused && lastFocused.focus(); } catch (e) {}
        };

        // ensure OK uses proxiedClose so cleanup runs
        freshOk.removeEventListener && freshOk.addEventListener('click', proxiedClose, { passive: false });

        // Prevent clicks on backdrop from closing (modal is intentionally blocking)
        modal.querySelector('.absolute')?.addEventListener('click', (e) => {
            e.stopPropagation();
            // do not close on backdrop click
        }, { passive: true });

    } catch (e) {
        console.warn('showMobileIncompatModal failed', e);
        alert('This game is not supported on mobile devices.');
    }
}

function openDetails(id) {
    const game = getGameById(id);
    if (!game) return;

    isModalOpen = true; // Set state
    allowBackdropClose = false; // Prevent immediate backdrop close

    activeGame = game;

    modalTitle.textContent = game.title;
    modalDesc.textContent = game.desc;
    // prefer explicit game.type for display if available, otherwise fall back to category
    modalCat.textContent = game.type || game.cat;
    modalControls.textContent = game.controls || 'Default keyboard & mouse.';
    modalBanner.src = game.banner;

    // Populate developer and year (safe fallbacks)
    try {
        modalDeveloper.textContent = game.developer || (game.dev || 'Unknown');
    } catch (e) {
        modalDeveloper.textContent = 'Unknown';
    }
    try {
        modalYear.textContent = game.year ? String(game.year) : (game.release ? String(game.release) : '—');
    } catch (e) {
        modalYear.textContent = '—';
    }

    modalPlayBtn.onclick = () => {
        closeDetails();
        playGame(game.id);
    };

    updateModalFavButton(game.id);
    updateModalShareButton(game.id); // ensure share button targets current game

    // prepare and show modal with enter animation
    detailsModal.classList.remove('hidden');
    detailsModal.classList.add('flex');
    // add backdrop show class so the backdrop fades in smoothly
    detailsModal.classList.remove('modal-backdrop-closing');
    detailsModal.classList.add('modal-backdrop-show');

    const isMobile = window.innerWidth < 640;

    // Reset all exit/setup classes/styles before entry
    modalCard.classList.remove('modal-exit', 'modal-enter', 'translate-y-full', 'opacity-0');
    modalCard.style.transform = '';
    modalCard.style.opacity = '';
    
    // Ensure the initial off-screen/invisible state is set before force reflow
    if (isMobile) {
        // Mobile start state: off-screen and invisible
        modalCard.classList.add('translate-y-full', 'opacity-0'); 
    } else {
        // Desktop start state: invisible but centrally located (relying on global CSS positioning)
        modalCard.classList.add('opacity-0');
    }

    void modalCard.offsetWidth; // Force reflow to register initial state for smooth transition/animation

    // Trigger entry transition/animation
    if (isMobile) {
        // Mobile: Trigger smooth transition up and fade in by removing the initial classes
        modalCard.classList.remove('translate-y-full', 'opacity-0');
    } else {
        // Desktop: Use CSS animation for drop-in effect AND remove opacity-0 immediately before starting animation
        modalCard.classList.remove('opacity-0'); // FIX: Ensure opacity is lifted for desktop
        modalCard.classList.add('modal-enter');
    }

    // Only animation/transition cleanup needed (removes modal-enter class and inline styles set by keyframes on some browsers)
    if (!isMobile) {
        const onEnterAnim = function _onEnterAnim(e) {
            if (e.animationName === 'modalEnter') {
                modalCard.classList.remove('modal-enter');
                modalCard.style.transform = '';
                modalCard.style.opacity = '';
                modalCard.removeEventListener('animationend', onEnterAnim);
            }
        };
        modalCard.addEventListener('animationend', onEnterAnim);
    }

    // Fallback timer (in case transition/animation events fail to fire)
    setTimeout(() => {
        allowBackdropClose = true;
    }, 400);
}

function updateModalFavButton(id) {
    const isAdded = myList.includes(id);
    modalListBtn.innerHTML = isAdded
        ? '<i class="fas fa-check text-green-400"></i> Added'
        : '<i class="fas fa-heart"></i> Add to favorites';

    modalListBtn.onclick = () => toggleFavorites(id, 'modal');
}

function updateModalShareButton(id) {
    const btn = document.getElementById('modal-share-btn');
    if (!btn) return;
    btn.onclick = async () => {
        await shareGameLink(id);
    };
}

function closeDetails() {
    // Prevent re-entry while closing
    if (!isModalOpen) return;
    isModalOpen = false;
    allowBackdropClose = false;

    // Play exit transition/animation then hide modal
    modalCard.classList.remove('modal-enter');
    
    const isMobile = window.innerWidth < 640;

    // Define cleanup function to handle state reset and unmount
    const cleanup = () => {
        // Ensure cleanup runs only once
        if (detailsModal.classList.contains('hidden')) {
            modalCard.removeEventListener('animationend', onExit);
            modalCard.removeEventListener('transitionend', onExit);
            return;
        }

        // start backdrop fade-out for a smooth exit
        detailsModal.classList.remove('modal-backdrop-show');
        detailsModal.classList.add('modal-backdrop-closing');

        // after backdrop fade completes hide fully (kept in cleanup to ensure modalities don't remain)
        detailsModal.classList.add('hidden');
        detailsModal.classList.remove('flex');
        modalCard.classList.remove('modal-exit', 'translate-y-full', 'opacity-0');
        
        // Ensure inline styles are cleared for next open
        modalCard.style.transform = '';
        modalCard.style.opacity = '';

        modalCard.removeEventListener('animationend', onExit);
        modalCard.removeEventListener('transitionend', onExit);
    };

    // --- Transition/Animation Exit logic ---
    if (isMobile) {
        // Mobile: Trigger transition out: slide down and fade out
        modalCard.classList.add('translate-y-full', 'opacity-0');
    } else {
        // Desktop: Use CSS animation for smooth exit
        modalCard.classList.add('modal-exit');
    }
    // --- End Exit logic ---

    // Ensure cleanup runs after animation/transition completes
    const onExit = (e) => {
        // Check if the event is the end of the expected exit mechanism (animation or transform transition)
        const isAnimExit = !isMobile && e && e.animationName === 'modalExit';
        // For mobile, any transition on the primary element (transform or opacity) signals completion
        const isTransExit = isMobile && e && (e.propertyName === 'transform' || e.propertyName === 'opacity');

        if (!isAnimExit && !isTransExit) return;
        
        cleanup();
    };

    // Attach listeners for both transition (mobile) and animation (desktop)
    modalCard.addEventListener('animationend', onExit);
    modalCard.addEventListener('transitionend', onExit);
    
    // Fallback timer (in case transition/animation events fail to fire)
    setTimeout(cleanup, 350);
}

// --- EVENTS BINDING ---
loginForm.addEventListener('submit', handleLoginSubmit);
loginSubmit.addEventListener('click', handleLoginSubmit);

// --- PROFILE AVATAR LOGOUT (click to sign out) ---
(function wireLogoutOnAvatar() {
    try {
        // target avatar variants, mobile account button, and display name elements (desktop + mobile)
        const profileEls = Array.from(document.querySelectorAll('#navbar .w-8, #navbar .w-9, #mobile-account-btn, #navbar .user-avatar-mobile-hide, #user-display-name, #user-display-name-mobile'));

        if (!profileEls || profileEls.length === 0) return;

        // Confirmed logout flow
        async function handleLogoutClick(e) {
            try {
                e && e.preventDefault && e.preventDefault();
                const ok = await showConfirm({
                    title: 'Sign out',
                    message: 'Do you want to sign out of your account?',
                    okText: 'Sign out',
                    cancelText: 'Cancel'
                });
                if (!ok) return;

                // Clear persisted user session and favorites and restore initial state
                try { localStorage.removeItem('nexus_user'); } catch (e) {}
                try { sessionStorage.removeItem('nexus_user_temp'); } catch (e) {}
                try { localStorage.removeItem('nexus_mylist'); } catch (e) {}
                myList = [];
                currentUser = null;

                showToast('Signed out.', { icon: 'fas fa-sign-out-alt' });

                // Return to login screen (simple, reliable reset)
                // Hide app and show login again; preserve nice transition
                try {
                    appContainer.style.opacity = '0';
                    appContainer.style.pointerEvents = 'none';
                } catch (e) {}
                setTimeout(() => {
                    try {
                        loginScreen.style.display = '';
                        loginScreen.style.opacity = '1';
                        loginScreen.style.pointerEvents = 'auto';
                        // reset login inputs for a clean state
                        usernameInput.value = '';
                        const pwd = document.getElementById('password-input');
                        if (pwd) pwd.value = '';
                        // update top UI
                        userDisplayName.textContent = 'Guest';
                        // also update mobile display name
                        const mobileName = document.getElementById('user-display-name-mobile');
                        if (mobileName) mobileName.textContent = 'Guest';
                    } catch (e) {}
                }, 260);

                // Also reload as a robust fallback to clear any in-memory state in complex sessions
                setTimeout(() => { try { location.reload(); } catch (e) {} }, 700);
            } catch (err) {
                console.warn('logout click failed', err);
            }
        }

        // Attach handlers to all matching profile elements (pointerdown for snappy touch, click fallback)
        profileEls.forEach((el) => {
            try {
                // Avoid duplicate binding
                if (el.__nexus_logout_bound) return;
                el.addEventListener('pointerdown', handleLogoutClick, { passive: false });
                el.addEventListener('click', handleLogoutClick, { passive: true });
                el.__nexus_logout_bound = true;
            } catch (e) {
                try { el.addEventListener('click', handleLogoutClick, { passive: true }); } catch (ee) {}
            }
        });
    } catch (e) {
        console.warn('wireLogoutOnAvatar failed', e);
    }
})();

/* --- iOS 100vh fix (sets --vh) and iOS guidance UI wiring --- */
function setViewportHeightVar(){
    // keeps a CSS var representing 1vh to work around iOS Safari UI chrome resizing
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
}
window.addEventListener('resize', setViewportHeightVar);
window.addEventListener('orientationchange', setViewportHeightVar);
setViewportHeightVar();

 // Detect iOS used elsewhere in the app
function isIos() {
    return /iP(ad|hone|od)/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
}

/* --- PWA: service worker registration --- */
if ('serviceWorker' in navigator) {
    // register after load to avoid blocking critical startup
    window.addEventListener('load', () => {
        // Use a relative path for the service worker file so registration works when the site is served from a subpath or non-root origin.
        // Avoid forcing scope here to let the browser infer the correct scope relative to the sw location.
        navigator.serviceWorker.register('sw.js')
            .then(reg => {
                console.info('ServiceWorker registered:', reg.scope || 'relative-scope');
            })
            .catch(err => {
                console.warn('ServiceWorker registration failed:', err);
            });
        // still run session check
        checkSession();
    });
} else {
    // fallback if SW not supported
    window.addEventListener('load', checkSession);
}

// Volume fix: ensure slider change applies immediately and reliably to the game iframe
(function ensureVolumeWiring(){
    try {
        const slider = document.getElementById('volume-slider');
        const toggle = document.getElementById('btn-volume-toggle');

        if (!slider) return;

        // ensure icon matches initial value
        try {
            const initial = Number(localStorage.getItem('nexus_game_volume'));
            if (!isNaN(initial) && initial >= 0) {
                slider.value = initial;
                try { updateVolumeIcon(initial); } catch (e) {}
            } else {
                try { updateVolumeIcon(Number(slider.value)); } catch (e) {}
            }
        } catch (e) { try { updateVolumeIcon(Number(slider.value)); } catch (ee) {} }

        // Input handler: immediate icon update and optimistic apply so volume reacts quickly
        slider.addEventListener('input', (e) => {
            try {
                const v = Number(e.target.value);
                updateVolumeIcon(v);
                // optimistic immediate postMessage so volume reacts quickly
                try { applyVolumeToGame(v); } catch (err) {}
            } catch (err) {}
        }, { passive: true });

        // also bind change event to guarantee final value persisted/applied when user finishes sliding
        slider.addEventListener('change', (e) => {
            try {
                const v = Number(e.target.value);
                try { applyVolumeToGame(v); } catch (err) {}
            } catch (err) {}
        }, { passive: true });

        // Toggle ensures mute/unmute behavior is consistent even if other handlers exist
        if (toggle) {
            toggle.addEventListener('click', (e) => {
                try {
                    e.preventDefault();
                    const cur = Number(slider.value || 0);
                    if (cur === 0) {
                        const stored = parseInt(localStorage.getItem('nexus_game_volume'), 10);
                        const restore = (!isNaN(stored) && stored > 0) ? Math.max(30, Math.min(100, stored)) : 60;
                        slider.value = restore;
                        updateVolumeIcon(restore);
                        applyVolumeToGame(restore);
                    } else {
                        slider.value = 0;
                        updateVolumeIcon(0);
                        applyVolumeToGame(0);
                    }
                } catch (err) {}
            }, { passive: false });
        }
    } catch (e) {
        console.warn('ensureVolumeWiring failed', e);
    }
})();

// --- Toast helper (non-bloqueante, independente de ambiente) ---
let toastTimeoutId = null;
function showToast(message, { icon = 'fas fa-check-circle' } = {}) {
    try {
        const container = document.getElementById('toast-container');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `
            <i class="${icon}"></i>
            <span>${message}</span>
        `;

        container.appendChild(toast);

        // force reflow then animate
        void toast.offsetWidth;
        toast.classList.add('toast-show');

        clearTimeout(toastTimeoutId);
        toastTimeoutId = setTimeout(() => {
            toast.classList.remove('toast-show');
            setTimeout(() => {
                if (toast.parentNode === container) {
                    container.removeChild(toast);
                }
            }, 220);
        }, 2600);
    } catch (e) {
        console.warn('showToast failed', e);
    }
}

// Prevent double-tap-to-zoom and pinch/gesture zoom on mobile
(function preventMobileZoomGlitches() {
    let lastTouchTime = 0;
    document.addEventListener('touchend', (e) => {
        const now = Date.now();
        if (now - lastTouchTime <= 300) {
            // quick double tap — prevent zoom by canceling the second event
            e.preventDefault();
        }
        lastTouchTime = now;
    }, { passive: false });

    // Prevent iOS gesturestart (pinch) which can enable pinch-zoom
    document.addEventListener('gesturestart', (e) => {
        e.preventDefault();
    }, { passive: false });

    // Also block explicit right-button mousedown events to stop visual feedback on some devices
    window.addEventListener('mousedown', (e) => {
        if (e.button === 2) {
            e.preventDefault();
            e.stopPropagation();
        }
    }, { passive: false });

    // Prevent developer tools inspection via common keyboard shortcuts (extend existing blocks)
    (function extendKeyboardBlockers() {
        // already have contextmenu/mouse blocking above; extend keyboard handling
        window.addEventListener('keydown', (e) => {
            // block F12, Ctrl+Shift+I/J/K, Ctrl+U, Ctrl+Shift+S etc.
            if (
                e.key === 'F12' ||
                (e.ctrlKey && e.shiftKey && /[IJC]/i.test(e.key)) ||
                (e.ctrlKey && e.key.toLowerCase() === 'u') ||
                (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'k') ||
                (e.metaKey && e.altKey && e.key === 'I') // mac combos
            ) {
                e.preventDefault();
                e.stopPropagation();
            }
        }, { passive: false });
    })();

    // Block pinch/zoom via Ctrl+wheel (desktop + some mobile browsers with keyboards)
    window.addEventListener('wheel', function (e) {
        try {
            if (e.ctrlKey) {
                e.preventDefault();
                e.stopPropagation();
            }
        } catch (err) {}
    }, { passive: false });

    // Ensure mobile bottom tabs (compact tab-chip buttons) reliably switch tabs on touch/pointer devices.
    // Some devices synthesize click differently; bind pointerdown/touchend explicitly to mobile tab controls.
    (function wireMobileBottomTabs() {
        try {
            function bindTabButton(selector) {
                const el = document.querySelector(selector);
                if (!el) return;
                // prevent duplicate bindings
                if (el.__nexus_mobile_tab_bound) return;
                const handler = (ev) => {
                    try {
                        if (ev && ev.isPrimary === false) return;
                        ev.preventDefault && ev.preventDefault();
                        ev.stopPropagation && ev.stopPropagation();
                        const tab = el.getAttribute('data-tab');
                        if (tab) switchTab(tab);
                    } catch (err) {}
                };
                el.addEventListener('pointerdown', handler, { passive: false });
                el.addEventListener('touchend', handler, { passive: false });
                // click fallback
                el.addEventListener('click', handler, { passive: true });
                el.__nexus_mobile_tab_bound = true;
            }
            // selectors for mobile tabs (existing markup)
            bindTabButton('#mobile-tab-home');
            bindTabButton('#mobile-tab-favorites');
        } catch (e) {
            console.warn('wireMobileBottomTabs failed', e);
        }
    })();

 // --- DevTools detection (disabled) ---
    (function devtoolsReliableDetectNoop() {
        // Devtools auto-unload/protection disabled to avoid interrupting gameplay and iframe loading.
        // Provide a lightweight no-op restore for compatibility with any code that may call it.
        try {
            window.__nexus_restore_iframe = function() {
                // intentionally no-op; kept for compatibility
                console.debug('nexus: devtools detector is disabled');
            };
        } catch (e) {
            // swallow errors to ensure app stability
        }
    })();

// --- RUNTIME ANTI-TAMPER / INTEGRITY PROBES (added) ---
    (function runtimeAntiTamper() {
        // Anti-tamper checks disabled by configuration to prevent defensive overlay or session suspension.
        // Provide simple compatibility stubs.
        window.__nexus_integrity_ok = true;
    })();
})();

// --- Volume toast & throttled volume updates (improvements) ---
(function enhanceVolumeHandling() {
    // guard to prevent duplicate registration if this block runs twice
    if (window.__nexus_volume_handler_installed) return;
    window.__nexus_volume_handler_installed = true;
    // single persistent volume toast instance (updates in-place)
    let volumeToastEl = null;
    let volumeToastTimer = null;

    function showVolumeToast(value) {
        try {
            const container = document.getElementById('toast-container');
            if (!container) return;
            // create once
            if (!volumeToastEl) {
                volumeToastEl = document.createElement('div');
                volumeToastEl.className = 'toast';
                volumeToastEl.innerHTML = `<i class="fas fa-volume-up"></i><span id="volume-toast-text"></span>`;
                container.appendChild(volumeToastEl);
                // force reflow then show
                void volumeToastEl.offsetWidth;
                volumeToastEl.classList.add('toast-show');
            }
            const txt = volumeToastEl.querySelector('#volume-toast-text');
            if (txt) txt.textContent = ` Volume: ${Math.round(value)}%`;
            // refresh auto-hide timer
            clearTimeout(volumeToastTimer);
            volumeToastTimer = setTimeout(() => {
                if (volumeToastEl && volumeToastEl.parentNode) {
                    volumeToastEl.classList.remove('toast-show');
                    setTimeout(() => {
                        try { if (volumeToastEl && volumeToastEl.parentNode) container.removeChild(volumeToastEl); } catch (e) {}
                        volumeToastEl = null;
                    }, 220);
                }
            }, 1100);
        } catch (e) {
            console.warn('showVolumeToast failed', e);
        }
    }

    // small debounce helper (leading=false)
    function debounce(fn, wait) {
        let t = null;
        return function(...args) {
            clearTimeout(t);
            t = setTimeout(() => fn.apply(this, args), wait);
        };
    }

    // throttlePostMessage: ensure at most one postMessage per animation frame with latest value
    let pendingVol = null;
    let posted = false;
    function throttlePostMessage(payload) {
        pendingVol = payload;
        if (posted) return;
        posted = true;
        requestAnimationFrame(() => {
            try {
                if (gameFrame && gameFrame.contentWindow) {
                    gameFrame.contentWindow.postMessage({ type: 'nexus:setVolume', volume: pendingVol / 100 }, '*');
                }
            } catch (e) {}
            pendingVol = null;
            posted = false;
        });
    }

    // Replace applyVolumeToGame with a safer, throttled implementation
    const originalApplyVolumeToGame = applyVolumeToGame;
    applyVolumeToGame = function(v) {
        try {
            const vol = Math.max(0, Math.min(100, Number(v) || 0));
            // persist quickly (no spam)
            try { localStorage.setItem('nexus_game_volume', String(vol)); } catch (e) {}
            // update icon
            updateVolumeIcon(vol);

            // show a single updatable toast instead of many stacked ones
            showVolumeToast(vol);

            // PostMessage to iframe at most once per animation frame
            throttlePostMessage(vol);

            // If same-origin, set audio/video elements directly
            try {
                const win = gameFrame && gameFrame.contentWindow;
                const doc = win && win.document;
                if (doc) {
                    const mediaEls = Array.from(doc.querySelectorAll('audio, video'));
                    mediaEls.forEach(m => {
                        try { m.volume = Math.max(0, Math.min(1, vol / 100)); } catch (e) {}
                        try { m.muted = vol === 0; } catch (e) {}
                    });
                }
            } catch (e) {
                // cross-origin likely; ignore
            }
        } catch (err) {
            // fallback to original (best-effort)
            try { originalApplyVolumeToGame(v); } catch (e) {}
        }
    };

    // Debounced slider input handler to reduce event flood and avoid many internal updates/toasts
    const volSlider = document.getElementById('volume-slider');
    if (volSlider) {
        const debouncedHandler = debounce((val) => {
            try { applyVolumeToGame(Number(val)); } catch (e) {}
        }, 120); // 120ms debounce for snappy UX but limited event spam

        volSlider.removeEventListener && volSlider.removeEventListener('input', () => {});
        volSlider.addEventListener('input', (e) => {
            const val = Number(e.target.value);
            // update icon immediately for snappy feedback
            updateVolumeIcon(val);
            // schedule actual work via debounce (toast + postMessage + media update)
            debouncedHandler(val);
        }, { passive: true });
    }

    // Improve volume toggle (mute/unmute) to reuse the same single toast and properly persist
    const volToggle = document.getElementById('btn-volume-toggle');
    if (volToggle) {
        volToggle.removeEventListener && volToggle.removeEventListener('click', () => {});
        volToggle.addEventListener('click', (e) => {
            e.preventDefault();
            const slider = document.getElementById('volume-slider');
            if (!slider) return;
            const current = Number(slider.value);
            if (current === 0) {
                // restore to saved or default (choose 60 as comfortable)
                let restore = 60;
                try {
                    const v = parseInt(localStorage.getItem('nexus_game_volume'), 10);
                    if (!isNaN(v) && v > 0) restore = Math.max(30, Math.min(100, v));
                } catch (e) {}
                slider.value = restore;
                updateVolumeIcon(restore);
                applyVolumeToGame(restore);
            } else {
                slider.value = 0;
                updateVolumeIcon(0);
                applyVolumeToGame(0);
            }
        }, { passive: true });
    }
})();

// --- SCROLL GUARD: continuously enforce no-page-scroll while a game is active ---
// This protects against injected elements or styles that re-enable scrolling during a session.
let _scrollGuardInterval = null;
let _scrollGuardObserver = null;

function startScrollGuard() {
    try {
        // Immediate enforcement
        document.documentElement.classList.add('no-game-scroll');
        document.documentElement.style.overflow = 'hidden';
        if (document.body) {
            document.body.style.overflow = 'hidden';
            document.body.style.touchAction = 'none';
        }
        // Periodic guard to catch new mutations or style changes that might re-enable scroll
        if (_scrollGuardInterval) clearInterval(_scrollGuardInterval);
        _scrollGuardInterval = setInterval(() => {
            try {
                // If no active game, stop guard
                if (!activeGame) return stopScrollGuard();

                // Force inline overflow hidden to override injected rules
                const docEl = document.documentElement;
                if (getComputedStyle(docEl).overflow !== 'hidden') docEl.style.overflow = 'hidden';
                if (document.body && getComputedStyle(document.body).overflow !== 'hidden') document.body.style.overflow = 'hidden';

                // If any element pushes page to scroll (height > viewport), try to clamp it
                if (document.documentElement.scrollHeight > (window.innerHeight + 4)) {
                    // try to find elements with large bottom margins or absolute positioned bottoms and hide overflow on them
                    Array.from(document.querySelectorAll('body > *')).forEach(el => {
                        try {
                            const cs = getComputedStyle(el);
                            if (cs.position === 'fixed' || cs.position === 'absolute' || cs.overflow === 'auto' || cs.overflowY === 'auto') {
                                el.style.overflow = 'hidden';
                                el.style.maxHeight = '100vh';
                            }
                        } catch (e){}
                    });
                    // also nudge scroll back to top-left to avoid accidental page scroll
                    try { window.scrollTo({ top: 0, left: 0, behavior: 'auto' }); } catch (e) {}
                }
            } catch (e) {
                // swallow to avoid interrupting gameplay
            }
        }, 800);

        // MutationObserver: watch for attribute/style changes that might re-enable scroll
        try {
            if (_scrollGuardObserver) _scrollGuardObserver.disconnect();
            _scrollGuardObserver = new MutationObserver((mutations) => {
                try {
                    if (!activeGame) return;
                    let needFix = false;
                    for (const m of mutations) {
                        if (m.type === 'attributes') {
                            const target = m.target;
                            if (target === document.documentElement || target === document.body) {
                                needFix = true;
                                break;
                            }
                            // if any node gets appended with inline height/overflow that could produce scroll, mark for fix
                            const cs = getComputedStyle(m.target);
                            if (cs && (cs.overflow === 'auto' || cs.overflowY === 'auto' || parseInt(cs.height) > window.innerHeight)) {
                                needFix = true;
                                break;
                            }
                        } else if (m.addedNodes && m.addedNodes.length) {
                            needFix = true;
                            break;
                        }
                    }
                    if (needFix) {
                        // reapply inline clamp quickly
                        try {
                            document.documentElement.style.overflow = 'hidden';
                            if (document.body) document.body.style.overflow = 'hidden';
                            window.scrollTo(0,0);
                        } catch (e){}
                    }
                } catch (e){}
            });
            _scrollGuardObserver.observe(document.documentElement || document.body, { attributes: true, childList: true, subtree: true, attributeFilter: ['style', 'class'] });
        } catch (e) {
            // If observer fails, interval-only guard is still helpful
        }
    } catch (e) {
        console.warn('startScrollGuard failed', e);
    }
}

function stopScrollGuard() {
    try {
        if (_scrollGuardInterval) {
            clearInterval(_scrollGuardInterval);
            _scrollGuardInterval = null;
        }
        if (_scrollGuardObserver) {
            try { _scrollGuardObserver.disconnect(); } catch (e) {}
            _scrollGuardObserver = null;
        }
        // restore only if no other active game session
        if (!activeGame) {
            try { document.documentElement.classList.remove('no-game-scroll'); } catch (e) {}
            try { document.documentElement.style.overflow = ''; } catch (e) {}
            if (document.body) {
                try { document.body.style.overflow = ''; } catch (e) {}
                try { document.body.style.touchAction = ''; } catch (e) {}
            }
            // reveal mobile bar if appropriate
            try {
                const mobileBar = document.querySelector('.mobile-bottom-bar');
                if (mobileBar) mobileBar.style.removeProperty('display');
            } catch (e) {}
            // remove any mobile reveal button left behind
            try {
                const reveal = document.getElementById('nexus-mobile-reveal-toolbar');
                if (reveal && reveal.parentNode) reveal.parentNode.removeChild(reveal);
            } catch (e) {}
        }
    } catch (e) {
        console.warn('stopScrollGuard failed', e);
    }
}