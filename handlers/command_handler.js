const fs = require("fs");
const ascii = require("ascii-table");
// Create a new Ascii table
let table = new ascii(`Commands`);
table.setHeading("Command", "Load status");

module.exports = (client) => {
    fs.readdirSync("./commands/").forEach((dir) => {
        const command_files = fs.readdirSync(`./commands/${dir}`).filter(e => e.endsWith(".js"));
        for (let file of command_files) {
            let command = require(`../commands/${dir}/${file}`);
            if (command.name) {
                client.commands.set(command.name, command);
                table.addRow(file, `✅`);
            } else {
                table.addRow(file, `❌`);
                continue;
            }
        }
    });
    console.log(table.toString());
}