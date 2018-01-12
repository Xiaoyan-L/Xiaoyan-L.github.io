/**
 * Home page models
 * Author: Xiaoyan Liao
 * Date: 2018-01-12
 */

/**
 * A Experience information
 * @param {*} data 
 */
var Experience = function(data) {
  this.company = data.company;
  this.position = data.position;
  this.timeline = data.timeline;
  this.location = data.location;
  this.bulletin = data.bulletin;
  
  this.title = ko.pureComputed(function() {
    return this.company + " - " + this.position;
  }, this);
};

/**
 * create experience model
 * @param {*} expData 
 */
var expModel = function(expData) {
  this.experiences = ko.observableArray([]);
  ko.utils.arrayForEach(expData, exp => {
    this.experiences.push(new Experience(exp));
  });
}

var expmodel = new expModel(expsData || []);

ko.applyBindings(expmodel, document.getElementById('workExperience'));