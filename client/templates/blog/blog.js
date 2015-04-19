Template.blog.events({
  "submit #blogForm": function(e){
    e.preventDefault();
    var title = $('#blogTitle').val();
    var body = $('#blogBody').val();

    Meteor.call('submitPost', title, body);
    Meteor.neo4j.call('createNode',{
      LABEL: 'BASIC',
      TITLE: title,
      CONTENTS: body
    }, function(err, result){
      if(err){
        throw err;
      }

      console.dir(result);
      
      var graphData = Session.get('graphData')
      if(!!graphData){
        // if this is undefined
        graphData = new Array();
      }
      graphData.push(result.n);

      //express by using d3.js
      Session.set('graphData', graphData);
      console.dir(result);
    });
  }
})

Template.blogList.contents = function(){
  return Blogs.find();
}
