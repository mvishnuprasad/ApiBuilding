import { addNewContact,
getContact,
getContactwithID
} from '../controllers/crmControllers';
const routes = (app) => {
    app.route('/contact')
    .get((req, res,next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`);
        console.log(`Request type: ${req.method}`);
        next();
    }, getContact)

    .post(addNewContact);
    app.route('/contact/:contactId')
    .get(getContactwithID)
    .put(() => {
        res.send('PUT request to the homepage ');
    })
    .delete((req, res) => {
        res.send('DELETE request to the homepage');
    })
}
export default routes;