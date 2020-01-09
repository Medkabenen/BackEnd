const db = require('../data/dbConfig');
const Users = require('../users/users-model');



describe('users model', function () {
    beforeEach(async () => {
        await db('users').truncate();
    });

    describe('insert()', function () {
        it('should add user to db', async function () {
            await Users.insert({ username: "Sam", password: "pass6" });

            const users = await db('users')
            expect(users).toHaveLength(1);
        })
    })

    describe('find()', function () {
        beforeEach(async () => {
            await db('users').truncate();
        });
        it('should add user to db', async function () {
            await Users.insert({ username: "Mike", password: "pass1" });
            const users = await db('users')
            expect(users).toHaveLength(1);

            let allUsers = await Users.get();
            expect(allUsers).toEqual([{ id: 1, username: "Mike", password: "pass1" }])
        })

        // it('should return array of users', async function () {


        //     let allUsers = await Users.get();
        //     expect(allUsers).toBe('object');
        // })
        it('should have a user named Mike', async function () {

            const expected = ["Mike"]

            let allUsers = await Users.get();
            expect(allUsers).toBe(arrayContaining(expected))
        })
    })

})   