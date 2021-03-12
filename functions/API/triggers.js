const { db } = require('../util/admin');

exports.getAllTriggers = (request, response) => {
    db
        .collection('triggers')
        .where('username', '==', request.user.username)
        .orderBy('createdAt', 'desc')
        .get()
        .then((data) => {
            let triggers = [];
            data.forEach((doc) => {
                triggers.push({
                    triggerId: doc.id,
                    triggerAt: doc.data().triggerAt,
                    title: doc.data().title,
                    body: doc.data().body,
                    createdAt: doc.data().createdAt,
                });
            });
            return response.json(triggers);
        })
        .catch((err) => {
            console.error(err);
            return response.status(500).json({ error: err.code });
        });
};

exports.postOneTrigger = (request, response) => {
    if (request.body.body.trim() === '') {
        return response.status(400).json({ body: 'Must not be empty' });
    }

    if (request.body.title.trim() === '') {
        return response.status(400).json({ title: 'Must not be empty' });
    }

    if (request.body.triggerAt.trim() === '') {
        return response.status(400).json({ triggerAt: 'Trigger time can not be empty' });
    }

    const newTriggerItem = {
        title: request.body.title,
        body: request.body.body,
        username: request.user.username,
        triggerAt: request.body.triggerAt,
        createdAt: new Date().toISOString()
    }
    db
        .collection('triggers')
        .add(newTriggerItem)
        .then((doc) => {
            const responseTriggerItem = newTriggerItem;
            responseTriggerItem.id = doc.id;
            return response.json(responseTriggerItem);
        })
        .catch((err) => {
            response.status(500).json({ error: 'Something went wrong' });
            console.error(err);
        });
};

exports.deleteTrigger = (request, response) => {
    const document = db.doc(`/triggers/${request.params.triggerId}`);
    document
        .get()
        .then((doc) => {
            if (!doc.exists) {
                return response.status(404).json({ error: 'Trigger not found??' })
            }

            if (doc.data().username !== request.user.username) {
                return response.status(403).json({ error: "UnAuthorized" })
            }
            return document.delete();
        })
        .then(() => {
            response.json({ message: 'Trigger successfully deleted' });
        })
        .catch((err) => {
            console.error(err);
            return response.status(500).json({ error: err.code });
        });
};


exports.editTrigger = (request, response) => {
    if (request.body.triggerId || request.body.createdAt) {
        response.status(403).json({ message: 'Not allowed to edit' });
    }
    let document = db.collection('triggers').doc(`${request.params.triggerId}`);
    document.update(request.body)
        .then(() => {
            response.json({ message: 'Updated successfully' });
        })
        .catch((err) => {
            console.error(err);
            return response.status(500).json({
                error: err.code
            });
        });
};