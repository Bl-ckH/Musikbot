'use strict';const _0x3e591c=_0x2406;(function(_0x457c7e,_0x402ced){const _0xb08098=_0x2406,_0x53a7f1=_0x457c7e();while(!![]){try{const _0x340c45=-parseInt(_0xb08098(0x1e5))/0x1+-parseInt(_0xb08098(0x213))/0x2+-parseInt(_0xb08098(0x1c4))/0x3+parseInt(_0xb08098(0x1f9))/0x4+-parseInt(_0xb08098(0x1d2))/0x5+-parseInt(_0xb08098(0x1e2))/0x6*(parseInt(_0xb08098(0x203))/0x7)+parseInt(_0xb08098(0x1b9))/0x8;if(_0x340c45===_0x402ced)break;else _0x53a7f1['push'](_0x53a7f1['shift']());}catch(_0x515fe1){_0x53a7f1['push'](_0x53a7f1['shift']());}}}(_0x5296,0x537e2));const fs=require('fs'),dotenv=require(_0x3e591c(0x201)),{Client,GatewayIntentBits,Partials,Collection}=require(_0x3e591c(0x20d)),{Player}=require('discord-player'),express=require(_0x3e591c(0x1f1));require(_0x3e591c(0x1e7))(console,{'format':':date(yyyy/mm/dd\x20HH:MM:ss)'});const embed=require(__dirname+_0x3e591c(0x1cb));dotenv[_0x3e591c(0x1c9)]();const ENV=process[_0x3e591c(0x1ce)];function _0x2406(_0x5b1f2f,_0x3d93f2){const _0x529655=_0x5296();return _0x2406=function(_0x240630,_0x344d98){_0x240630=_0x240630-0x1b6;let _0x4833c8=_0x529655[_0x240630];return _0x4833c8;},_0x2406(_0x5b1f2f,_0x3d93f2);}let client=new Client({'intents':[GatewayIntentBits[_0x3e591c(0x1d3)],GatewayIntentBits[_0x3e591c(0x1b7)],GatewayIntentBits['GuildMessages'],GatewayIntentBits['MessageContent'],GatewayIntentBits[_0x3e591c(0x1db)]],'partials':[Partials['Channel']],'disableMentions':_0x3e591c(0x20e)});function _0x5296(){const _0x2a8e57=['listen','Embed_play','set','defaultVolume','GuildMembers','Added','15741088CrleOp','MAX_VOLUME','+--------------------------------+','thumbnail','title','->\x20Ereignisse\x20laden\x20......','DISPLAY_VOICE_STATE','|\x20Befehl\x20','Music\x20Disc','/commands/','duration','2013867IIAonN','commands','toLowerCase','ONE','error','config','laden\x20......','/embeds/embeds','Playing','/events/','env','emptyChannel','get','player','1510865bzeQGT','Guilds','->\x20Befehle\x20laden\x20......','resolve','displayVoiceState','Off','true','login','.js','GuildVoiceStates','PREFIX','Ich\x20habe\x20Probleme\x20mit\x20der\x20Verbindung\x20=>\x20','Server\x20startet\x20<Port:\x20','white','audioonly','url','630FeMjDg','then','isPlaying','219827lgFuoU','maxVolume','console-stamp','metadata','playing','log','port','grey','autoLeaveCooldown','--\x20Laden\x20von\x20Ereignissen\x20beendet\x20--','repeatMode','send','express','BOT_NAME','PORT','All','AUTO_LEAVE_COOLDOWN','channel','AUTO_LEAVE','cache','389892aTtSxL','events','name','autoLeave','endsWith','volume','message','\x1b[2m','dotenv','200\x20ok.','371PaFOXG','prefix','split','highestaudio','undefined','green','playerError','node','PLAYING','DEFAULT_VOLUME','discord.js','everyone','padEnd','playerStart','***\x20Alles\x20erfolgreich\x20geladen\x20***','+---------------------------+','1048538HLrWqw'];_0x5296=function(){return _0x2a8e57;};return _0x5296();}client[_0x3e591c(0x1c9)]={'name':_0x3e591c(0x1c1),'prefix':'-','playing':'+help\x20|\x20music','defaultVolume':0x32,'maxVolume':0x64,'autoLeave':!![],'autoLeaveCooldown':0x1388,'displayVoiceState':!![],'port':0x8235},client[_0x3e591c(0x1c5)]=new Collection(),client['player']=new Player(client,{'ytdlOptions':{'filter':_0x3e591c(0x1e0),'quality':_0x3e591c(0x206),'highWaterMark':0x1<<0x1b}});const player=client[_0x3e591c(0x1d1)],color={'white':'\x1b[0m','grey':_0x3e591c(0x200),'green':'\x1b[32m'},setEnvironment=()=>{return new Promise((_0x488475,_0x341cfe)=>{const _0x48985a=_0x2406;client[_0x48985a(0x1c9)]['name']=typeof ENV[_0x48985a(0x1f2)]===_0x48985a(0x207)?client[_0x48985a(0x1c9)][_0x48985a(0x1fb)]:ENV[_0x48985a(0x1f2)],client[_0x48985a(0x1c9)][_0x48985a(0x204)]=typeof ENV[_0x48985a(0x1dc)]===_0x48985a(0x207)?client[_0x48985a(0x1c9)][_0x48985a(0x204)]:ENV[_0x48985a(0x1dc)],client['config'][_0x48985a(0x1e9)]=typeof ENV[_0x48985a(0x20b)]==='undefined'?client[_0x48985a(0x1c9)][_0x48985a(0x1e9)]:ENV[_0x48985a(0x20b)],client[_0x48985a(0x1c9)]['defaultVolume']=typeof ENV[_0x48985a(0x20c)]===_0x48985a(0x207)?client['config'][_0x48985a(0x1b6)]:Number(ENV['DEFAULT_VOLUME']),client['config'][_0x48985a(0x1e6)]=typeof ENV['MAX_VOLUME']==='undefined'?client[_0x48985a(0x1c9)][_0x48985a(0x1e6)]:Number(ENV[_0x48985a(0x1ba)]),client[_0x48985a(0x1c9)][_0x48985a(0x1fc)]=typeof ENV['AUTO_LEAVE']===_0x48985a(0x207)?client[_0x48985a(0x1c9)][_0x48985a(0x1fc)]:String(ENV[_0x48985a(0x1f7)])===_0x48985a(0x1d8)?!![]:![],client[_0x48985a(0x1c9)][_0x48985a(0x1ed)]=typeof ENV[_0x48985a(0x1f5)]==='undefined'?client['config'][_0x48985a(0x1ed)]:Number(ENV[_0x48985a(0x1f5)]),client[_0x48985a(0x1c9)][_0x48985a(0x1d6)]=typeof ENV[_0x48985a(0x1bf)]===_0x48985a(0x207)?client[_0x48985a(0x1c9)][_0x48985a(0x1d6)]:String(ENV[_0x48985a(0x1bf)])===_0x48985a(0x1d8)?!![]:![],client[_0x48985a(0x1c9)]['port']=typeof ENV[_0x48985a(0x1f3)]===_0x48985a(0x207)?client[_0x48985a(0x1c9)][_0x48985a(0x1eb)]:Number(ENV[_0x48985a(0x1f3)]),_0x488475();});},loadFramework=()=>{const _0x17c44e=_0x3e591c;return console[_0x17c44e(0x1ea)](_0x17c44e(0x1ca)),new Promise((_0x5c0ec8,_0x1589b8)=>{const _0x293352=_0x17c44e,_0x231b12=express(),_0x4fdb42=client[_0x293352(0x1c9)][_0x293352(0x1eb)]||0x8235;_0x231b12[_0x293352(0x1d0)]('/',function(_0x284552,_0xbee253){const _0x5a3635=_0x293352;_0xbee253[_0x5a3635(0x1f0)](_0x5a3635(0x202));}),_0x231b12[_0x293352(0x214)](_0x4fdb42,function(){const _0x42153a=_0x293352;console[_0x42153a(0x1ea)](_0x42153a(0x1de)+_0x4fdb42),_0x5c0ec8();});});},loadEvents=()=>{const _0x2834d5=_0x3e591c;return console['log'](_0x2834d5(0x1be)),new Promise((_0x413a82,_0x291576)=>{const _0x1d11b2=_0x2834d5,_0x11e880=fs['readdirSync'](__dirname+_0x1d11b2(0x1cd))['filter'](_0x302ffb=>_0x302ffb[_0x1d11b2(0x1fd)](_0x1d11b2(0x1da)));console[_0x1d11b2(0x1ea)](_0x1d11b2(0x1bb));for(const _0x21b980 of _0x11e880){try{const _0x5d3003=require(__dirname+_0x1d11b2(0x1cd)+_0x21b980);console[_0x1d11b2(0x1ea)]('|\x20event\x20'+_0x21b980[_0x1d11b2(0x205)]('.')[0x0][_0x1d11b2(0x20f)](0x11,'\x20')+'\x20|'),client['on'](_0x21b980[_0x1d11b2(0x205)]('.')[0x0],_0x5d3003['bind'](null,client)),delete require['cache'][require[_0x1d11b2(0x1d5)](__dirname+'/events/'+_0x21b980)];}catch(_0x2d7269){_0x291576(_0x2d7269);}};console[_0x1d11b2(0x1ea)]('+--------------------------------+'),console['log'](color['grey']+_0x1d11b2(0x1ee)+color[_0x1d11b2(0x1df)]),_0x413a82();});},loadCommands=()=>{const _0x242225=_0x3e591c;return console[_0x242225(0x1ea)](_0x242225(0x1d4)),new Promise((_0x45c079,_0x2198ec)=>{const _0x59b94a=_0x242225,_0x125765=fs['readdirSync'](__dirname+_0x59b94a(0x1c2))['filter'](_0x5ed38e=>_0x5ed38e[_0x59b94a(0x1fd)]('.js'));console[_0x59b94a(0x1ea)](_0x59b94a(0x212));for(const _0x43a606 of _0x125765){try{const _0x2fe6d2=require(__dirname+_0x59b94a(0x1c2)+_0x43a606);console[_0x59b94a(0x1ea)](_0x59b94a(0x1c0)+_0x2fe6d2[_0x59b94a(0x1fb)]['toLowerCase']()[_0x59b94a(0x20f)](0xa,'\x20')+'\x20|'),client[_0x59b94a(0x1c5)][_0x59b94a(0x216)](_0x2fe6d2[_0x59b94a(0x1fb)][_0x59b94a(0x1c6)](),_0x2fe6d2),delete require[_0x59b94a(0x1f8)][require[_0x59b94a(0x1d5)](__dirname+_0x59b94a(0x1c2)+_0x43a606)];}catch(_0x1b5259){_0x2198ec(_0x1b5259);}};console['log'](_0x59b94a(0x212)),console[_0x59b94a(0x1ea)](color[_0x59b94a(0x1ec)]+'--\x20Laden\x20das\x20befehles\x20beendet\x20--'+color[_0x59b94a(0x1df)]),_0x45c079();});};Promise[_0x3e591c(0x1d5)]()[_0x3e591c(0x1e3)](()=>setEnvironment())[_0x3e591c(0x1e3)](()=>loadFramework())['then'](()=>loadEvents())[_0x3e591c(0x1e3)](()=>loadCommands())['then'](()=>{const _0x18a811=_0x3e591c;console[_0x18a811(0x1ea)](color[_0x18a811(0x208)]+_0x18a811(0x211)+color['white']),client[_0x18a811(0x1d9)](ENV['TOKEN']);});const settings=(_0x1300b4,_0x51ec6e)=>'**Volume**:\x20`'+_0x1300b4[_0x3e591c(0x20a)][_0x3e591c(0x1fe)]+'%`\x20|\x20**Loop**:\x20`'+(_0x1300b4[_0x3e591c(0x1ef)]?_0x1300b4[_0x3e591c(0x1ef)]===0x2?_0x3e591c(0x1f4):_0x3e591c(0x1c7):_0x3e591c(0x1d7))+'`';player['events']['on'](_0x3e591c(0x210),(_0x460b11,_0x393764)=>{const _0x537b6e=_0x3e591c;if(_0x460b11[_0x537b6e(0x1ef)]!==0x0)return;_0x460b11[_0x537b6e(0x1e8)]['channel'][_0x537b6e(0x1f0)]({'embeds':[embed[_0x537b6e(0x215)](_0x537b6e(0x1cc),_0x393764[_0x537b6e(0x1bd)],_0x393764[_0x537b6e(0x1e1)],_0x393764[_0x537b6e(0x1c3)],_0x393764[_0x537b6e(0x1bc)],settings(_0x460b11))]});}),player[_0x3e591c(0x1fa)]['on']('audioTrackAdd',(_0x31e13c,_0x5ecc7e)=>{const _0x415d56=_0x3e591c;if(_0x31e13c[_0x415d56(0x1e4)]())_0x31e13c[_0x415d56(0x1e8)][_0x415d56(0x1f6)][_0x415d56(0x1f0)]({'embeds':[embed[_0x415d56(0x215)](_0x415d56(0x1b8),_0x5ecc7e[_0x415d56(0x1bd)],_0x5ecc7e[_0x415d56(0x1e1)],_0x5ecc7e[_0x415d56(0x1c3)],_0x5ecc7e['thumbnail'],settings(_0x31e13c))]});}),player['events']['on'](_0x3e591c(0x209),(_0x4f7e8d,_0x5e8340)=>{const _0x42366c=_0x3e591c;console['log'](_0x42366c(0x1dd)+_0x5e8340[_0x42366c(0x1ff)]);}),player['events']['on'](_0x3e591c(0x1c8),(_0x1a65fe,_0x2cea05)=>{const _0x5dc872=_0x3e591c;console['log']('Es\x20gab\x20ein\x20Problem\x20mit\x20der\x20Song-Warteschlange\x20=>\x20'+_0x2cea05[_0x5dc872(0x1ff)]);}),player[_0x3e591c(0x1fa)]['on'](_0x3e591c(0x1cf),_0x3b34bd=>{const _0x2d7fd1=_0x3e591c;if(!client[_0x2d7fd1(0x1c9)][_0x2d7fd1(0x1fc)])_0x3b34bd[_0x2d7fd1(0x20a)]['stop']();});