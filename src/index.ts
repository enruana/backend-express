import express, { Request, Response } from "express";
import DopplerSDK from '@dopplerhq/node-sdk';

interface Env {
  PORT: string;
}

const initEnvironment = async () : Promise<Env>  => {
  const doppler = new DopplerSDK({ accessToken: 'TU_TOKEN_AQUI' });
  const PORT = await doppler.secrets.get('backend-express', 'dev', 'PORT')
  return {
    PORT: PORT.value?.raw as string
  }
}

const initApp = async (env: Env) => {
  const app = express();


  app.get("/", (request: Request, response: Response) => { 
    console.log('get request received');
    response.status(200).send("Hello World");
    console.log('get request responded');
  });
  
   
  app.listen(env.PORT, async () => { 
    console.log("Running at PORT ", env.PORT);
  });
}


const main = async () => {
  const env = await initEnvironment();
  await initApp(env);
}

main();


