var User        = require('../models/user');
var Category    = require('../models/categories');
var Department  = require('../models/department');
var Product     = require('../models/product');
var Variant     = require('../models/variant');
var mongoose    = require('mongoose');
//mongoose.connect('mongodb://localhost/shoppingApp');
//mongoose.connect('mongodb://localhost/myShoppingApp3', { useNewUrlParser: true, useCreateIndex: true, });
mongoose.connect('mongodb://originvlcopy:admin123@ds251197.mlab.com:51197/assignment5');


var categories =
[
    new Category({
        categoryName        : 'Male Toys'
    }),
    new Category({
        categoryName        : 'Female Toys'
    })

]

for (let i = 0; i < categories.length; i++){
    categories[i].save(function(e, r) {
        if (i === categories.length - 1){
            exit();
        }
    });
}

var departments =
[
    new Department({
        departmentName      : "Andy's Toys",
        categories          : 'Male Toys,Female Toys'

    }),
    new Department({
        departmentName      : 'Others',
        categories          : 'Male Toys,Female Toys'
    })
]

for (let i = 0; i < departments.length; i++){
    departments[i].save(function(e, r) {
        if (i === departments.length - 1){
            exit();
        }
    });
}

var products =
[
    new Product({
        _id: "5bedf31cc14d7822b39d9d43",
        imagePath: 'https://vignette.wikia.nocookie.net/disney/images/a/ab/Woody_4.png/revision/latest?cb=20160602005758',
        title: 'Sheriff Woody',
        description: "Woody is a cowboy doll (although the preferred term is action figure). As the toys' leader, and despite his fears to the contrary, he's always been Andy's favorite—no matter what new playthings enter the picture.",
        price: 35.95,
        quantity: 10,
        department: "Andy's Toys",
        category: 'Male Toys',
    }),
    new Product({
        _id: "5bedf3b9c14d7822b39d9d45",
        imagePath: 'https://vignette.wikia.nocookie.net/disney/images/b/b1/Buzz_Lightyear_KHIII.png/revision/latest?cb=20180706115620',
        title: 'Buzz Lightyear',
        description: "While Buzz Lightyear's sole mission used to be defeating the evil Emperor Zurg, what he now cares about most is keeping Andy's toy family together.",
        price: 35.95,
        quantity: 10,
        department: "Andy's Toys",
        category: 'Male Toys',
    }),
    new Product({
        _id: "5bedf448c14d7822b39d9d47",
        imagePath: 'https://vignette.wikia.nocookie.net/disney/images/7/71/Rex_1.png/revision/latest?cb=20180225020540',
        title: 'Rex the Tyrannosaurus',
        description: 'Rex may look like the most fearsome dinosaur in the toy box, but this green Tyrannosaurus is one of the most lovable toys of the bunch.',
        price: 25.99,
        quantity: 10,
        department: "Andy's Toys",
        category: 'Male Toys',
    }),
    new Product({
        _id: "5bedf55bc14d7822b39d9d4b",
        imagePath: 'https://vignette.wikia.nocookie.net/disney/images/1/1c/Mr._Potato_Head_Render.png/revision/latest?cb=20180622233305',
        title: 'Mr.Potato Head',
        description: "A potato-shaped toy, his patented design allows him to separate his detachable parts from his body by removing them from the holes on his body. He also has a compartment on his lower back to store extra appendages.",
        price: 25.99,
        quantity: 4,
        department: "Andy's Toys",
        category: 'Male Toys',
    }),
    new Product({
        _id: "5bedf5eec14d7822b39d9d4e",
        imagePath: 'https://vignette.wikia.nocookie.net/disney/images/1/1c/Disney_INFINITY_-_Jessie.png/revision/latest?cb=20130303171220',
        title: 'Jessie the Cowgirl',
        description: "Jessie is a rough-and-tumble cowgirl doll with a passion for yodeling. Since abandoned by her original owner, she's sensitive to being left behind; however, she's also an incredibly optimistic member of Andy's toy gang",
        price: 35.95,
        quantity: 4,
        department: "Andy's Toys",
        category: 'Female Toys',
    }),
    new Product({
        _id: "5bedf6b5c14d7822b39d9d51",
        imagePath: 'https://vignette.wikia.nocookie.net/pixar/images/5/58/Bo_Peep.PNG/revision/latest?cb=20141203232720',
        title: 'Bo Peep',
        description: 'A sheperdess and love interest of Woody',
        price: 25.99,
        quantity: 4,
        department: "Andy's Toys",
        category: 'Female Toys',
    }),
    new Product({
        _id: "5bedf720c14d7822b39d9d52",
        imagePath: 'https://vignette.wikia.nocookie.net/disney/images/4/42/Bullseye_5.png/revision/latest?cb=20160531203127',
        title: 'Bullseye',
        description: "Woody's trusted horse. Despite the fact that he is a horse, he can remind you of a puppy by the way he acts at times.",
        price: 25.99,
        quantity: 4,
        department: "Andy's Toys",
        category: 'Male Toys',
    }),
    new Product({
        _id: "5bedf7ecc14d7822b39d9d55",
        imagePath: 'https://vignette.wikia.nocookie.net/disney/images/3/35/Hamm_1.png/revision/latest?cb=20180121171316',
        title: 'Hamm',
        description: 'A wisecracking piggy bank.',
        price: 25.99,
        quantity: 4,
        department: "Andy's Toys",
        category: 'Male Toys',
    }),
    new Product({
        _id: "5bedf720c14d7822b39d9d57",
        imagePath: 'https://vignette.wikia.nocookie.net/disney/images/6/6f/Mrs._Potato_Head.png/revision/latest?cb=20160602011420',
        title: 'Mrs. Potato Head',
        description: ' A potato-shaped toy, her patented design allows her to separate her detachable parts from her body by removing them from the holes on her body. She also has a compartment on her lower back to store extra appendages',
        price: 25.99,
        quantity: 8,
        department: "Andy's Toys",
        category: 'Female Toys',
    }),

    new Product({
        _id: "5bedf720c14d7822b39d9d58",
        imagePath: 'https://vignette.wikia.nocookie.net/cartoons/images/9/92/Trixie.png/revision/latest?cb=20160410004311',
        title: 'Trixie',
        description: 'A blue plastic Triceratops, part of the same toy line as Rex.',
        price: 25.99,
        quantity: 8,
        department: 'Others',
        category: 'Female Toys',
    }),
    new Product({
        _id: "5bedf720c14d7822b39d9d59",
        imagePath: 'https://vignette.wikia.nocookie.net/heroes-and-villians/images/5/58/20171028_193650.png/revision/latest?cb=20171029002143',
        title: 'Lots-o',
        description: 'A large, pink strawberry-scented teddy bear who used to rule Sunnyside Daycare like a prison.',
        price: 25.99,
        quantity: 8,
        department: 'Others',
        category: 'Male Toys',
    }),
    new Product({
        _id: "5bedf720c14d7822b39d9d12",
        imagePath: 'https://vignette.wikia.nocookie.net/villains/images/e/ef/Empreror_Zurg.png/revision/latest?cb=20180928220305',
        title: 'Emperor Zurg',
        description: 'The sworn enemy of the Galactic Alliance and the archenemy of Buzz Lightyear.',
        price: 45.99,
        quantity: 8,
        department: 'Others',
        category: 'Male Toys',
    })

];

for (let i = 0; i < products.length; i++){
    products[i].save(function(e, r) {
        if (i === products.length - 1){
            exit();
        }
    });
}


var newUser = new User({
    username    : 'admin@admin.com',
    password    : 'admin',
    fullname    : 'Johnavan Thomas',
    admin       : true
});
User.createUser(newUser, function(err, user){
    if(err) throw err;
    console.log(user);
});

function exit() {
    mongoose.disconnect();
}
