const commando = require('discord.js-commando');
const bot = new commando.Client();

bot.registry.registerGroup('random', 'Random');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");


bot.login('MjY2NjcxNjI5MDY3NzQ3MzM4.C1uU5A.xDxrIw-JKKNXN1xUbpi_4nDqFIo');