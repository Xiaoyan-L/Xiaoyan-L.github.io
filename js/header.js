var BasicInfo = function (info) {
  this.name = info.name;
  this.title = info.title;
  this.email = info.email;
  this.location = info.location;
  this.photo = info.photo;
  this.linkedin = info.linkedin;
  this.github = info.github;
  this.statement = info.statement;
  this.skill = info.skill;
  
  this.showFrame = function(target) {
    document.getElementById('iframe').src = target + ".html";
  };
};

var basicinfomodel = new BasicInfo(basicInfo || []);
ko.applyBindings(basicinfomodel, document.getElementById('basicInfo'));