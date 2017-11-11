var friends = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {

        var bestMatch =  {
            name: "",
            img: "",
            friendDiff: 1000
        };

        var newFriend = req.body;
        var userScores = newFriend.scores;
        var totalDiff = 0;

        for (var i = 0; i < friends.length; i++) {
            console.log(friends[i]);
            totalDiff = 0;

            for (var j = 0; j < friends[i].scores[j]; j++) {

                totalDiff += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

                if (totalDiff <= bestMatch.friendDiff) {

                    bestMatch.name = friends[i].name;
                    bestMatch.img = friends[i].img;
                    bestMatch.friendDiff = totalDiff;
                }
            }
        }

        friends.push(newFriend);
        res.json(bestMatch);
    });
};






