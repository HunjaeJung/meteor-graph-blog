// Client에서 사용할 수 있는 neo4j 매소드를 정의
Meteor.neo4j.methods({
  'getAllNodes': function(){
    var query = [
      'MATCH (n:METEOR)',
      'RETURN n'
    ].join(' ');

    return query;
  },
  'getAllEdges': function(){
    var query = [
      'MATCH (a:METEOR)-[r:Weight]->(b:METEOR)',
      'RETURN r'
    ].join(' ');

    return query;
  },
  'createNode': function(){
    // 'METEOR' is just name of label.
    var query = [
      'CREATE (n:METEOR {title:{TITLE}, body:{CONTENTS}})',
      'RETURN n'
    ].join(' ');

    return query;
  },
  'createEdge': function(){
    
  }
});

// CREATE (a1:METEOR {title: "Getting started", body: "Make graph blog"})
// CREATE (a2:METEOR {title: "Getting started", body: "Make graph blog"})
// CREATE (a3:METEOR {title: "Getting started", body: "Make graph blog"})
// CREATE (a4:METEOR {title: "Getting started", body: "Make graph blog"})
// CREATE (a5:METEOR {title: "Getting started", body: "Make graph blog"})
// CREATE (a5:METEOR {title: "Getting started", body: "Make graph blog"})
// CREATE (a5:METEOR {title: "Getting started", body: "Make graph blog"})
// CREATE (a1)-[r1:Weight]->(a2)
// CREATE (a1)-[r2:Weight]->(a3)
// CREATE (a1)-[r3:Weight]->(a4)
// CREATE (a2)-[r4:Weight]->(a3)
// CREATE (a3)-[r5:Weight]->(a4)
// CREATE (a3)-[r6:Weight]->(a5)
// CREATE (a3)-[r7:Weight]->(a2)
// CREATE (a3)-[r8:Weight]->(a1)
// CREATE (a4)-[r9:Weight]->(a1)
// CREATE (a5)-[r10:Weight]->(a4)
