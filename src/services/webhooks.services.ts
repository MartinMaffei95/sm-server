const whatsappResponse = (query: any) => {
  const qObject: any = query;
  let hChallenge: string = '';
  let isToken: boolean = false;
  for (const [key, value] of Object.entries(qObject)) {
    console.log(`${key.trim()}: ${value}`);
    if (key.trim() === 'hub.challenge') {
      hChallenge = value as string;
    }
    if (key.trim() === 'hub.verify_token' && value === process.env.META_TOKEN) {
      isToken = true;
    }
  }

  if (hChallenge.length > 0 && isToken) {
    return hChallenge;
  } else throw new Error('TOKEN_ERRROR');
};

export { whatsappResponse };
