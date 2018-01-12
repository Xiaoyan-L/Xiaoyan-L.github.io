var Project = function(data) {
  this.title = data.title;
  this.catagory = data.catagory;
  this.type = data.type;
  this.timeline = data.timeline;
  this.link = data.link;
  this.image = data.image;
  this.bulletin = data.bulletin;
};

var ProjectModel = function(projData) {
  this.projectList = ko.observableArray([]);
  ko.utils.arrayForEach(projData, project => {
    this.projectList.push(new Project(project));
  })
}

var projectmodel = new ProjectModel(projects || []);
ko.applyBindings(projectmodel);