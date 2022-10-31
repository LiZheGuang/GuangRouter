import inquirer from "inquirer";
import open from "open";
async function prompt() {
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "masterSelect",
      message: "What do you want to do?",
      choices: ["web", "Game"],
    },
  ]);
  const { masterSelect } = answers;
  if(masterSelect === 'web'){
    const webSelectRes = await inquirer.prompt([
      {
        type: "list",
        name: "webSelect",
        message: "What do you want to do?",
        choices: ["baidu", "npm", "vpn"],
      },
    ]);
    const { webSelect } = webSelectRes
    openUrl(masterSelect,webSelect)
  }
}
function openUrl(key: string,value:string) {
  interface PATHWEBFACE  {
    [web:string] :{
      [key:string]:string
    }
  }
  const pathWeb :PATHWEBFACE = {
    web: {
      baidu: "https://www.baidu.com",
      juejin:'https://juejin.cn/',
      npm: "https://www.npmjs.com/",
      vpn: "https://m3-dalou.gitbook.io/zodaccess/",
    },
  };
  const keyValue = key 
  
  open(pathWeb[keyValue][value] as any, {
    app: {
      name: open.apps.chrome,
    },
  });
}
prompt();
