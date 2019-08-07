<template>
  <div class="about">
    <div class="container py-5">
    <div class="jumbotron">
      <h1>Bootstrap 4 Styleguide</h1>
      <p class="lead">This is a style guide showcasing Bootstrap 4 and common HTML elements, which are displayed all on a single page. <br>It is a modified version of the <a href="https://getbootstrap.com/docs/3.3/examples/theme/">Bootstrap 3 Theme</a> example.</p>
    </div>

    <h2 class="pt-3 pb-1">Headings &amp; Body Text</h2>

    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
    <p>Lorem ipsum Nostrud Duis minim Ut id incididunt deserunt
      consequat id irure <a href="#">nostrud voluptate</a> aliquip
      Ut eu aliqua eu sed anim aute laborum est officia consectetur
       irure aliquip ex veniam laboris cillum Duis occaecat fugiat
        adipisicing ex in dolore ullamco ad ullamco velit nisi irure
         ad tempor minim fugiat fugiat aute Excepteur in id culpa
         id velit proident commodo enim cillum Ut quis dolor cillum
          enim ullamco est in eu laboris Ut Excepteur nisi aliquip
          occaecat deserunt incididunt eiusmod aute Excepteur Excepteur
           non ut ut fugiat nostrud laboris dolore Excepteur id qui
           eiusmod esse mollit fugiat eiusmod dolore quis quis aliquip
           reprehenderit sint commodo dolore proident officia Duis
           eiusmod esse cupidatat id consequat aliqua Excepteur dolore
           tempor consequat laboris dolore sit aliqua eu sed dolore
           laboris ad tempor et in incididunt dolore dolor irure anim
           adipisicing cillum dolor in laborum laboris veniam voluptate
           Ut irure ad dolor irure in ex sint dolor deserunt ut
           adipisicing est pariatur Excepteur dolore ullamco pariatur in
           non Excepteur mollit consequat laborum ullamco reprehenderit
           ea id ut anim ex consectetur occaecat.</p>

    <h2 class="pt-3 pb-1">Buttons</h2>

    <p>
      <button type="button" class="btn btn-primary btn-lg">Primary</button>
      <button type="button" class="btn btn-secondary btn-lg">Secondary</button>
      <button type="button" class="btn btn-success btn-lg">Success</button>
      <button type="button" class="btn btn-danger btn-lg">Danger</button>
      <button type="button" class="btn btn-warning btn-lg">Warning</button>
      <button type="button" class="btn btn-info btn-lg">Info</button>
      <button type="button" class="btn btn-light btn-lg">Light</button>
      <button type="button" class="btn btn-dark btn-lg">Dark</button>
    </p>
    <p>
      <button type="button" class="btn btn-primary">Primary</button>
      <button type="button" class="btn btn-secondary">Secondary</button>
      <button type="button" class="btn btn-success">Success</button>
      <button type="button" class="btn btn-danger">Danger</button>
      <button type="button" class="btn btn-warning">Warning</button>
      <button type="button" class="btn btn-info">Info</button>
      <button type="button" class="btn btn-light">Light</button>
      <button type="button" class="btn btn-dark">Dark</button>
    </p>
    <p>
      <button type="button" class="btn btn-primary btn-sm">Primary</button>
      <button type="button" class="btn btn-secondary btn-sm">Secondary</button>
      <button type="button" class="btn btn-success btn-sm">Success</button>
      <button type="button" class="btn btn-danger btn-sm">Danger</button>
      <button type="button" class="btn btn-warning btn-sm">Warning</button>
      <button type="button" class="btn btn-info btn-sm">Info</button>
      <button type="button" class="btn btn-light btn-sm">Light</button>
      <button type="button" class="btn btn-dark btn-sm">Dark</button>
    </p>
    <p>
      <button type="button" class="btn btn-outline-primary">Primary</button>
      <button type="button" class="btn btn-outline-secondary">Secondary</button>
      <button type="button" class="btn btn-outline-success">Success</button>
      <button type="button" class="btn btn-outline-danger">Danger</button>
      <button type="button" class="btn btn-outline-warning">Warning</button>
      <button type="button" class="btn btn-outline-info">Info</button>
      <button type="button" class="btn btn-outline-light">Light</button>
      <button type="button" class="btn btn-outline-dark">Dark</button>
    </p>

    <h2 class="pt-3 pb-1">Tables</h2>

    <div class="row">
      <div class="col-md">
        <table class="table">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-md">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="row">
      <div class="col-md">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowspan="2">1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>@TwBootstrap</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-md">
       <table class="table table-sm">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <h2 class="pt-3 pb-1">Thumbnails</h2>

  <img src="https://via.placeholder.com/200" class="img-thumbnail" alt="A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera">

  <h2 class="pt-3 pb-1">Badges</h2>

  <p>
    <a href="#">Inbox <span class="badge badge-secondary">42</span></a>
  </p>

  <ul class="nav nav-pills">
    <li class="nav-item">
      <a class="nav-link active" href="#">Active</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link <span class="badge badge-secondary">42</span></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#">Disabled</a>
    </li>
  </ul>

  <h2 class="pt-3 pb-1">Dropdown</h2>

  <!-- Large button groups (default and split) -->
  <div class="btn-group">
    <button
      class="btn btn-secondary btn-lg dropdown-toggle"
      type="button"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false">
      Large button
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div>
  <div class="btn-group">
    <button class="btn btn-secondary btn-lg" type="button">
      Large split button
    </button>
    <button
      type="button"
      class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false">
      <span class="sr-only">Toggle Dropdown</span>
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div>

  <!-- Small button groups (default and split) -->
  <div class="btn-group">
    <button
      class="btn btn-secondary btn-sm dropdown-toggle"
      type="button"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false">
      Small button
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div>
  <div class="btn-group">
    <button class="btn btn-secondary btn-sm" type="button">
      Small split button
    </button>
    <button
      type="button"
      class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false">
      <span class="sr-only">Toggle Dropdown</span>
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div>

  <h2 class="pt-3 pb-1">Navs</h2>

  <ul class="nav nav-tabs mb-3">
    <li class="nav-item">
      <a class="nav-link active" href="#">Active</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#">Disabled</a>
    </li>
  </ul>

  <ul class="nav nav-pills">
    <li class="nav-item">
      <a class="nav-link active" href="#">Active</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#">Disabled</a>
    </li>
  </ul>

  <h2 class="pt-3 pb-1">Navbars</h2>

  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbar-light"
      aria-controls="navbar-light"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbar-light">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Navbar</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbar-dark"
      aria-controls="navbar-dark"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbar-dark">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>

  <h2 class="pt-3 pb-1">Alerts</h2>

  <div class="alert alert-success" role="alert">
    <strong>Well done!</strong> You successfully read this important alert message.
  </div>
  <div class="alert alert-info" role="alert">
    <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
  </div>
  <div class="alert alert-warning" role="alert">
    <strong>Warning!</strong> Best check yo self, you're not looking too good.
  </div>
  <div class="alert alert-danger" role="alert">
    <strong>Oh snap!</strong> Change a few things up and try submitting again.
  </div>

  <h2 class="pt-3 pb-1">Progress bars</h2>

  <div class="progress mb-3">
    <div
      class="progress-bar"
      role="progressbar"
      aria-valuenow="60"
      aria-valuemin="0"
      aria-valuemax="100"
      style="width: 60%;">
      <span class="sr-only">60% Complete</span>
    </div>
  </div>
  <div class="progress mb-3">
    <div
      class="progress-bar bg-success"
      role="progressbar"
      style="width: 25%"
      aria-valuenow="25"
      aria-valuemin="0"
      aria-valuemax="100"></div>
  </div>
  <div class="progress mb-3">
    <div
      class="progress-bar bg-info"
      role="progressbar"
      style="width: 50%"
      aria-valuenow="50"
      aria-valuemin="0"
      aria-valuemax="100"></div>
  </div>
  <div class="progress mb-3">
    <div
      class="progress-bar bg-warning"
      role="progressbar"
      style="width: 75%"
      aria-valuenow="75"
      aria-valuemin="0"
      aria-valuemax="100"></div>
  </div>
  <div class="progress mb-3">
    <div
      class="progress-bar bg-danger"
      role="progressbar"
      style="width: 100%"
      aria-valuenow="100"
      aria-valuemin="0"
      aria-valuemax="100"></div>
  </div>
  <div class="progress mb-3">
    <div
      class="progress-bar"
      role="progressbar"
      style="width: 25%;"
      aria-valuenow="25"
      aria-valuemin="0"
      aria-valuemax="100">25%</div>
  </div>
  <div class="progress mb-3">
    <div
      class="progress-bar"
      role="progressbar"
      style="width: 15%"
      aria-valuenow="15"
      aria-valuemin="0"
      aria-valuemax="100"></div>
    <div
      class="progress-bar bg-success p"
      role="progressbar"
      style="width: 30%"
      aria-valuenow="30"
      aria-valuemin="0"
      aria-valuemax="100"></div>
    <div
      class="progress-bar bg-info progress-bar-striped progress-bar-animated"
      role="progressbar"
      style="width: 20%"
      aria-valuenow="20"
      aria-valuemin="0"
      aria-valuemax="100"></div>
  </div>

  <h2 class="pt-3 pb-1">List groups</h2>

  <div class="row">
    <div class="col-md">
      <ul class="list-group mb-3">
        <li class="list-group-item active">Cras justo odio</li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Morbi leo risus</li>
        <li class="list-group-item">Porta ac consectetur ac</li>
        <li class="list-group-item">Vestibulum at eros</li>
      </ul>
      <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Cras justo odio
          <span class="badge badge-secondary badge-pill">141</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Dapibus ac facilisis in
          <span class="badge badge-secondary badge-pill">2</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Morbi leo risus
          <span class="badge badge-secondary badge-pill">1</span>
        </li>
      </ul>
    </div><!-- /.col-md -->
    <div class="col-md">
      <ul class="list-group">
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item list-group-item-primary">This is a primary list group item</li>
        <li class="list-group-item list-group-item-secondary">
          This is a secondary list group item
        </li>
        <li class="list-group-item list-group-item-success">
          This is a success list group item
        </li>
        <li class="list-group-item list-group-item-danger">This is a danger list group item</li>
        <li class="list-group-item list-group-item-warning">This is a warning list group item</li>
        <li class="list-group-item list-group-item-info">This is a info list group item</li>
        <li class="list-group-item list-group-item-light">This is a light list group item</li>
        <li class="list-group-item list-group-item-dark">This is a dark list group item</li>
      </ul>
    </div><!-- /.col-md -->
    <div class="col-md">
      <div class="list-group">
        <a href="#"
          class="list-group-item
          list-group-item-action
          flex-column
          align-items-start
          active">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">List group item heading</h5>
            <small>3 days ago</small>
          </div>
          <p class="mb-1">Donec id elit non mi porta gravida at
             eget metus. Maecenas sed diam eget risus varius blandit.</p>
          <small>Donec id elit non mi porta.</small>
        </a>
        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">List group item heading</h5>
            <small class="text-muted">3 days ago</small>
          </div>
          <p class="mb-1">Donec id elit non mi porta gravida at
             eget metus. Maecenas sed diam eget risus varius blandit.</p>
          <small class="text-muted">Donec id elit non mi porta.</small>
        </a>
        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">List group item heading</h5>
            <small class="text-muted">3 days ago</small>
          </div>
          <p class="mb-1">Donec id elit non mi porta gravida at
             eget metus. Maecenas sed diam eget risus varius blandit.</p>
          <small class="text-muted">Donec id elit non mi porta.</small>
        </a>
      </div>
    </div><!-- /.col-md -->
  </div>

  <h2 class="pt-3 pb-1">Cards
    <small class="text-muted">Replacing panels, wells and thumbnails</small>
  </h2>

  <div class="row">
    <div class="col-sm">
      <div class="card text-white bg-primary mb-3" style="max-width: 20rem;">
        <div class="card-header">Header</div>
        <div class="card-body">
          <h4 class="card-title">Primary card title</h4>
          <p class="card-text">Some quick example text to build
            on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
    <div class="col-sm">
      <div class="card text-white bg-secondary mb-3" style="max-width: 20rem;">
        <div class="card-header">Header</div>
        <div class="card-body">
          <h4 class="card-title">Secondary card title</h4>
          <p class="card-text">Some quick example text to build
             on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
    <div class="col-sm">
      <div class="card text-white bg-success mb-3" style="max-width: 20rem;">
        <div class="card-header">Header</div>
        <div class="card-body">
          <h4 class="card-title">Success card title</h4>
          <p class="card-text">Some quick example text to build
             on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
    <div class="col-sm">
      <div class="card text-white bg-danger mb-3" style="max-width: 20rem;">
        <div class="card-header">Header</div>
        <div class="card-body">
          <h4 class="card-title">Danger card title</h4>
          <p class="card-text">Some quick example text to build
            on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-sm">
      <div class="card text-white bg-warning mb-3" style="max-width: 20rem;">
        <div class="card-header">Header</div>
        <div class="card-body">
          <h4 class="card-title">Warning card title</h4>
          <p class="card-text">Some quick example text to build
             on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
    <div class="col-sm">
      <div class="card text-white bg-info mb-3" style="max-width: 20rem;">
        <div class="card-header">Header</div>
        <div class="card-body">
          <h4 class="card-title">Info card title</h4>
          <p class="card-text">Some quick example text to build
            on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
    <div class="col-sm">
      <div class="card bg-light text-dark mb-3" style="max-width: 20rem;">
        <div class="card-header">Header</div>
        <div class="card-body">
          <h4 class="card-title">Light card title</h4>
          <p class="card-text">Some quick example text to
            build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
    <div class="col-sm">

      <div class="card text-white bg-dark mb-3" style="max-width: 20rem;">
        <div class="card-header">Header</div>
        <div class="card-body">
          <h4 class="card-title">Dark card title</h4>
          <p class="card-text">
            Some quick example text to build on the
            card title and make up the bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  </div>

  </div>
</div>
</template>
