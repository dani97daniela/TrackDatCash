const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require("passport");
const cors = require('cors');
const path = require("path");
const dotenv = require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const keys = require("./config/keys");
const shortid = require('shortid');
//const passport = require("passport");

// Load input validation
const validateRegisterInput = require("./validation/register");
const validateLoginInput = require("./validation/login");

const app = express();

const expenseRoutes = express.Router();

let Expense = require('./models/expense');
let User = require('./models/user');

// Bodyparser middleware
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "client", "build")))

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
	.connect(
		db,
		{ useNewUrlParser: true }
		)
		.then(() => console.log("MongoDB successfully connected"))
		.catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// -----ROUTES----- 
// Route to return ALL expenses in the database for a specific user.
expenseRoutes.route("/getAllExpenses").post(function(req, res) {
  const usersId = req.body.id.toString();
  Expense.find({userId: usersId}, function(err, expenses) {
	if (err) {
		console.log(err);
	} else {
		res.json(expenses);
	}
  });
});

// Route to return all expenses for a specific category
expenseRoutes.post("/category", (req, res, next) => {
  const usersId = req.body.id.toString();
  const category = req.body.newCategory;
  const year = req.body.newYear;
  Expense.find({userId: usersId, category: category, year: year}, function(err, expenses) {
	console.log(expenses);
	if (err) {
		console.log(err);
	} else {
		res.json(expenses);
	}
  });
});

// Route to return all expenses for a specific month
expenseRoutes.route("/month").post(function(req, res) {
  const usersId = req.body.id.toString();
  const month = req.body.newMonth;
  const year = req.body.newYear;
  Expense.find({userId: usersId, month: month, year: year}, function(err, expenses) {
	console.log(expenses);
	if (err) {
		console.log(err);
	} else {
		res.json(expenses);
	}
  });
});

// Mounting route for group code page
expenseRoutes.post("/codeMount", (req, res, next) => {
  const usersId = req.body.id.toString();
  User.findOne({ _id: usersId }).then(user => {
	if (user) {
	  return res.json(user);
    } else {
		console.log("Error");
	}
  });
});

// Route to return all expenses with a specific group code
expenseRoutes.post("/code/:thisCode", (req, res, next) => {
  const groupCode = req.params.thisCode;
  console.log(groupCode);
  Expense.find({groupCode: groupCode}, function(err, expenses) {
	console.log(expenses);
	if (err) {
		console.log(err);
	} else {
		res.json(expenses);
	}
  });
});

// Route to return specific expense in database.
expenseRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Expense.findById(id, function(err, expense) {
        res.json(expense);
    });
});

// Route to add expense 
expenseRoutes.route('/add').post(function(req, res) {
    let expense = new Expense(req.body);
    expense.save()
        .then(expense => {
            res.status(200).json({'expense': 'expense added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new expense failed');
        });
});

expenseRoutes.route('/update/:id').post(function(req, res) {
    Expense.findById(req.params.id, function(err, expense) {
        if (!expense)
            res.status(404).send("data is not found");
        else
            expense.description = req.body.description;
            expense.amount = req.body.amount;
            expense.category = req.body.category;
            expense.month = req.body.month;
            expense.day = req.body.day;
            expense.year = req.body.year;
            expense.groupCode = req.body.groupCode;
            expense.save().then(expense => {
                res.json('Expense updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

// Route to delete
expenseRoutes.delete("/delete/:id", (req, res, next) => {
  const userId = "5c78ce86a484a23550339d6a";
  const id = req.params.id;
  Expense.findOneAndDelete({_id: id}, function(err, expenses) {
	if (err) {
		console.log(err);
	} else {
		res.json({
		success: id});
	}
  });
});

// @route POST expenses/register
// @desc Register user
// @access Public
expenseRoutes.post("/register", (req, res) => {
  // Form validation

  const { errors, isValid } = validateRegisterInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        groupCode: shortid.generate(),
        password: req.body.password
      });

      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route POST expenses/login
// @desc Login user and return JWT token
// @access Public
expenseRoutes.post("/login", (req, res) => {
  // Form validation

  const { errors, isValid } = validateLoginInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }

    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name
        };

        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});

app.use('/expenses', expenseRoutes);

// -----END ROUTES----- 

const PORT = process.env.PORT || 4000; // "process.env.PORT" is Heroku's port if we're deploying there, then 4000 is a custom chosen port for dev testing

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});