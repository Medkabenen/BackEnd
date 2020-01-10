const db = require('../data/dbConfig');

const Strain = require('../strain/strain-model');

describe('strain model', function () {
    beforeEach(async () => {
        await db('strain').truncate();
    });

    describe('insert()', function () {
        it('should add strain to db', async function () {
            await Strain.add({ strain_name: "Sam", strain_type: "sativa", strain_description: "sour", user_id: 4 });

            const strain = await db('strain')
            expect(strain).toHaveLength(1);
        })
    })

})