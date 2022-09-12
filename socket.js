

const DocumenteSchema = require('./document');
const defaultValeu = "";

module.exports = async function WebDocs(socket) {

    socket.on('get-document', async documentId => {

        //Join group to emit changes values
        socket.join(documentId);

        //Check if document existe
        const document = await findOrCreateDocument(documentId);

        socket.emit('load-document', document.data);

        socket.on('send-changes', (delta) => {
            socket.broadcast.to(documentId).emit('receive-changes', delta);
        });

        socket.on('save-changes', async data => {
            await DocumenteSchema.findByIdAndUpdate(documentId, { data });
        });

    });
}





async function findOrCreateDocument(documentId) {
    if (documentId == null) return;
    //Verify this document existe in database
    const documentExiste = await DocumenteSchema.findById(documentId)
    //Verificar documentos existentes;
    if (documentExiste) return documentExiste;
    //Criando new documento;
    const newDocument = await DocumenteSchema.create({ _id: documentId, data: defaultValeu });
    return newDocument;

}


