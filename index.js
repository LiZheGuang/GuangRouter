#!/usr/bin/env node
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import inquirer from "inquirer";
import open from "open";
function prompt() {
    return __awaiter(this, void 0, void 0, function* () {
        const answers = yield inquirer.prompt([
            {
                type: "list",
                name: "masterSelect",
                message: "What do you want to do?",
                choices: ["web", "Game"],
            },
        ]);
        const { masterSelect } = answers;
        if (masterSelect === 'web') {
            const webSelectRes = yield inquirer.prompt([
                {
                    type: "list",
                    name: "webSelect",
                    message: "What do you want to do?",
                    choices: ["baidu", "npm", "vpn"],
                },
            ]);
            const { webSelect } = webSelectRes;
            openUrl(masterSelect, webSelect);
        }
    });
}
function openUrl(key, value) {
    const pathWeb = {
        web: {
            baidu: "https://www.baidu.com",
            juejin: 'https://juejin.cn/',
            npm: "https://www.npmjs.com/",
            vpn: "https://m3-dalou.gitbook.io/zodaccess/",
        },
    };
    const keyValue = key;
    open(pathWeb[keyValue][value], {
        app: {
            name: open.apps.chrome,
        },
    });
}
prompt();
