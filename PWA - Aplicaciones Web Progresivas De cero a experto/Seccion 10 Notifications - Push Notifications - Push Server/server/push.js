const fs = require('fs');

const urlSafeBase64 = require('urlsafe-base64');
const vapid = require('./vapid.json');

const webpush = require('web-push');

webpush.setGCMAPIKey('<Your GCM API Key Here>');
webpush.setVapidDetails(
    'mailto:ander.cadaval@gmail.com',
    vapid.publicKey,
    vapid.privateKey
);

let suscripciones = require('./subs-db.json');

module.exports.getKey = () => {
    return urlSafeBase64.decode(vapid.publicKey);
};

module.exports.addSubscription = subscription => {
    console.log('addSubscription');
    suscripciones.push(subscription);

    fs.writeFileSync(`${ __dirname }/subs-db.json`, JSON.stringify(suscripciones));
    console.log(suscripciones);
};

module.exports.sendPush = (post) => {
    console.log('Mandando PUSHES');
    const notificacionesEnviadas = [];

    suscripciones.forEach((suscripcion, i) => {
        const pushProm = webpush.sendNotification(suscripcion, JSON.stringify(post))
            .then(console.log('Notificacion enviada'))
            .catch(err => {
                console.error('Notificacion falló');

                //GONE, ya no existe
                if (err.statusCode === 410) {
                    suscripciones[i].borrar = true;
                }
            });

        notificacionesEnviadas.push(pushProm);
    });

    Promise.all(notificacionesEnviadas).then(() => {
        suscripciones = suscripciones.filter(subs => !subs.borrar);

        fs.writeFileSync(`${ __dirname }/subs-db.json`, JSON.stringify(suscripciones));
    });
};