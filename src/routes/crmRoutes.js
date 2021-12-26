const routes = (app) => {
    app.route('/contact')
    .get((req, res) => {
        res.send('GET request to the homepage');
    })
    .post((req, res) => {
        res.send('POST request to the homepage');
    })
    app.route('/contact/:contactId')
    .put((req, res) => {
        res.send('PUT request to the homepage');
    })
    .delete((req, res) => {
        res.send('DELETE request to the homepage');
    })
}
export default routes;