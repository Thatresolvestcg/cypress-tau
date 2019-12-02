# cypress-tau
cypress test automation university examples

npm install is enough to get going but may need to npm install cypress

run cypress client with: 
npx cypress open

run cypress headliess with:
npx cypress run
-- this will also record videos to look back on later if you need them.

run a specific test
npx cypress run --spec {specific test}
for example npx cypress run --spec cypress/integration/todomvc-actions.spec.js


use it.only to run only specific tests, this may break the test suite if we don't use beforeEach correctly in our collection.


