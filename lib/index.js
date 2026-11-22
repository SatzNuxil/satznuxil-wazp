import './Utils/long-safe.js';
import makeWASocket from './Socket/index.js';
import chalk from "chalk";
console.log(chalk.hex("#00c2ff")(`
███████╗ █████╗ ████████╗███████╗███╗   ██╗██╗   ██╗██╗  ██╗██╗██╗     
██╔════╝██╔══██╗╚══██╔══╝╚══███╔╝████╗  ██║██║   ██║╚██╗██╔╝██║██║     
███████╗███████║   ██║     ███╔╝ ██╔██╗ ██║██║   ██║ ╚███╔╝ ██║██║     
╚════██║██╔══██║   ██║    ███╔╝  ██║╚██╗██║██║   ██║ ██╔██╗ ██║██║     
███████║██║  ██║   ██║   ███████╗██║ ╚████║╚██████╔╝██╔╝ ██╗██║███████╗
╚══════╝╚═╝  ╚═╝   ╚═╝   ╚══════╝╚═╝  ╚═══╝ ╚═════╝ ╚═╝  ╚═╝╚═╝╚══════╝

██╗    ██╗ █████╗ ███████╗ █████╗ ██████╗ 
██║    ██║██╔══██╗╚══███╔╝██╔══██╗██╔══██╗
██║ █╗ ██║███████║  ███╔╝ ███████║██████╔╝
██║███╗██║██╔══██║ ███╔╝  ██╔══██║██╔═══╝ 
╚███╔███╔╝██║  ██║███████╗██║  ██║██║     
 ╚══╝╚══╝ ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝     
`));
console.log(chalk.hex("#00c2ff")("SatzNuxil - Thanks use My bails\n"));
console.log(chalk.gray("Stay updated with the latest SatzNuxil & Baileys news:"));
console.log(chalk.cyan("https://t.me/onlySatz1\n"));
export * from '../WAProto/index.js';
export * from './Utils/index.js';
export * from './Types/index.js';
export * from './Defaults/index.js';
export * from './WABinary/index.js';
export * from './WAM/index.js';
export * from './WAUSync/index.js';
export * from './Store/index.js';
export { makeWASocket };
export default makeWASocket;
export * as MB from './MessageBuilder/index.js';
export * from './MessageBuilder/index.js';
