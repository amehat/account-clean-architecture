import { Given, When, Then } from '@cucumber/cucumber';
import * as assert from 'node:assert';

import UtilisateurAuthentifie from 'domain/utilisateur/utilisateur-authentifie.value-object';

const userList = [];

Given('un utilisateur authentifié :', async (dataTable) => {
    for (let i = 1; i < dataTable.rawTable.length; i += 1) {
        userList.push(UtilisateurAuthentifie.create({ identifiant: dataTable.rawTable[i][0] }));
        const userRow = i - 1;
        assert.equal(userList[userRow].props.identifiant, dataTable.rawTable[i][0]);
    }
});

When(`l'utilisateur demande la liste des comptes bancaires`, async () => {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('il obtient la liste des comptes bancaires :', async (dataTable) => {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});