const whatsappResponse = (query: any) => {
  const qObject: any = query;

  Object.keys(qObject).map((k) => {
    const newObj = (qObject[k.toString().trim()] = qObject[k]);
    delete qObject[k];
    return newObj;
  });

  if (qObject['hub.verify_token'] === process.env.META_TOKEN) {
    return qObject['hub.challenge'];
  } else throw new Error('TOKEN_ERRROR');
};

export { whatsappResponse };
