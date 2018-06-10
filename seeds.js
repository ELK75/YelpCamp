
var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");
var User = require("./models/user");

var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nulla nulla, vehicula quis lectus et, pretium feugiat nunc. Maecenas dignissim nisi a eros eleifend blandit. Proin quis mauris eleifend, vehicula urna et, pulvinar orci. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam a augue justo. Morbi auctor, dui at faucibus pharetra, ipsum diam mattis neque, nec tempor dui justo ac eros. Aenean id purus et nibh ultrices bibendum. Duis sit amet iaculis metus. Proin fringilla feugiat odio, sit amet convallis justo faucibus sit amet. Aliquam erat volutpat.";

var data = [
    {
        name: "Clouds Rest", 
        image: "https://images.unsplash.com/photo-1465800872432-a98681fc5828?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8f3874f8c325f769c5b726960ca3f598&auto=format&fit=crop&w=896&q=80",
        description: lorem
    },
    {
        name: "Sunny Sun", 
        image: "https://images.unsplash.com/photo-1489415407184-52cc78d31ad6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=052300e30cfb0bf3f4c284a770047bc2&auto=format&fit=crop&w=934&q=80",
        description: lorem
    },
    {
        name: "Camp Camp", 
        image: "https://images.unsplash.com/photo-1466220549276-aef9ce186540?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=31792cc398fe58a684fd8f30b2a5b360&auto=format&fit=crop&w=1050&q=80",
        description: lorem
    }
];


function seedDB() {
    Campground.remove({}, function(err) {
        if(err) {
            console.log(err);
        }
        console.log("Removed Campgrounds");

        // data.forEach(function(seed) {
        //     Campground.create(seed, function(err, campground) {
        //         if (err) {
        //             console.log(err);
        //         } else {
        //             console.log("added campground");
        //             // Comment.create({
        //             //     text: "This place is great but I wish there was internet",
        //             //     author: "Homer"
        //             // }, function(err, comment) {
        //             //     if (err) {
        //             //         console.log(err);
        //             //     } else {
        //             //         campground.comments.push(comment);
        //             //         campground.save();
        //             //         console.log("Created Comment");
        //             //     }
        //             // });

        //             // User.create({username: "nut", password: "password"}, function(err, user) {
        //             //     campground.author = user;
        //             //     campground.save();
        //             // });
        //         }
        //     });
        // });
    });
}

module.exports = seedDB;