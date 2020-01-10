const db = require('../data/dbConfig');

const Note = require('../note/note_model');

describe('note model', function () {
    beforeEach(async () => {
        await db('note').truncate();
    });

    describe('insert()', function () {
        it('should add note to db', async function () {
            await Note.add({ title: "Hello", note: "lets get more", strain_id: 1 });

            const note = await db('note')
            expect(note).toHaveLength(1);
        })
    })
})