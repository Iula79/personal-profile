export default function() {
  let projects = [{
    type: 'projects',
    id: 1,
    attributes: {
      title: 'Residenza Carducci',
      description: 'bla bla',
      technologies: 'AngularJS',
      link: "http://www.residenzacarducci.com",
      image: '/assets/images/residenza_carducci.png'
    }
  }, {
    type: 'projects',
    id: 2,
    attributes: {
      title: 'Swapoween',
      description: 'bla bla',
      technologies: 'Ruby on Rails',
      link: 'http://dry-anchorage-8673.herokuapp.com',
      image: '/assets/images/swapoween.png'
    }
  }, {
    type: 'projects',
    id: 3,
    attributes: {
      title: 'Connect Four',
      description: 'bla bla',
      technologies: 'JQuery',
      link: "http://buyer-bird-84202.bitballoon.com",
      bedrooms: 3,
      image: '/assets/images/connect_four.png'
    }
  }, {
    type: 'projects',
    id: 4,
    attributes: {
      title: 'Todo App',
      description: 'bla bla',
      technologies: 'MEANstack',
      link: "http://www.giulialake.com",
      bedrooms: 3,
      image: '/assets/images/todo.png'
    }
  }];
  this.get('/projects', function(db, request) {
    if (request.queryParams.technologies !== undefined) {
      let filteredProjects = projects.filter(function(i) {
        return i.attributes.technologies.toLowerCase().indexOf(request.queryParams.technologies.toLowerCase()) !== -1;
      });
      return {
        data: filteredProjects
      };
    } else {
      return {
        data: projects
      };
    }

  });
  this.get('/projects/:id', function(db, request) {
    let id = parseInt(request.params.id);
    return {
      data: projects.findBy('id', id)
    };
  });
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */
  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Route shorthand cheatsheet
  */
  /*
    GET shorthands

    // Collections
    this.get('/contacts');
    this.get('/contacts', 'users');
    this.get('/contacts', ['contacts', 'addresses']);

    // Single objects
    this.get('/contacts/:id');
    this.get('/contacts/:id', 'user');
    this.get('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    POST shorthands

    this.post('/contacts');
    this.post('/contacts', 'user'); // specify the type of resource to be created
  */

  /*
    PUT shorthands

    this.put('/contacts/:id');
    this.put('/contacts/:id', 'user'); // specify the type of resource to be updated
  */

  /*
    DELETE shorthands

    this.del('/contacts/:id');
    this.del('/contacts/:id', 'user'); // specify the type of resource to be deleted

    // Single object + related resources. Make sure parent resource is first.
    this.del('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    Function fallback. Manipulate data in the db via

      - db.{collection}
      - db.{collection}.find(id)
      - db.{collection}.where(query)
      - db.{collection}.update(target, attrs)
      - db.{collection}.remove(target)

    // Example: return a single object with related models
    this.get('/contacts/:id', function(db, request) {
      var contactId = +request.params.id;

      return {
        contact: db.contacts.find(contactId),
        addresses: db.addresses.where({contact_id: contactId})
      };
    });

  */
}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
