const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
const saltRounds = 10;
const JWT_SECRET = "dododada";

// var router = express.Router();
const upload = require("./middlewares/multer");
const verify = require("./middlewares/jwtverify");
const userSchema = require("./models/user");
const blogSchema = require("./models/blog");
const commentSchema = require("./models/comment");
const { RiEyeCloseFill } = require("react-icons/ri");

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send("invalid username or password!");
  }
  try {
    const user = await userSchema.findOne({ username: username });
    if (!user) {
      return res.status(400).send("incorrect username or password!");
    }
    const hash = await bcrypt.compare(password, user.password);
    if (!hash) {
      return res.status(400).send("incorrect username or password!");
    }
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "7d" });
    console.log(token);
    // return res.redirect('/feed');
    return res.status(200).send({ token });
  } catch (error) {
    return res.status(500).send("Something went wrong!");
  }
});

app.post("/create", async (req, res) => {
  const defaultImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb-aYAcml50UcDruz9iCeqTjKsI5t7Ocst0Q&s";
  const { username, email, password } = req.body;
  if (!username || !password || !email) {
    return res.status(400).send("invalid credentials!");
  }
  try {
    const exists = await userSchema.findOne({
      $or: [{ username: username }, { email: email }],
    });
    if (exists) {
      return res.status(401).send("User already exists!");
    }
    const hash = await bcrypt.hash(password, saltRounds);
    const user = await userSchema.create({
      username,
      password: hash,
      email,
      image: defaultImage,
    });
    if (!user) {
      throw new Error();
    }
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "7d" });
    return res.status(200).send({ token });
  } catch (error) {
    return res.status(500).send("Something went wrong!");
  }
});

app.post("/getuser", verify, async (req, res) => {
  const user = res.locals.user;

  try {
    const userr = await userSchema.findOne({ _id: user.id }).populate('blogs').populate('liked').populate('saved').populate('comments');
    if (!userr) throw new Error();
    return res.status(200).send(userr);
  } catch (error) {
    return res.status(500).send("Something went wrong!");
  }
});

app.post("/createblog", verify, upload.single("image"), async (req, res) => {
  // const defaultImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb-aYAcml50UcDruz9iCeqTjKsI5t7Ocst0Q&s";
  console.log("this");
  const { title, caption, tags } = req.body;
  if (!title || !caption || !tags || !req.file.filename) {
    return res.status(400).send("please provide all the details");
  }
  try {
    // const exists = await userSchema.findOne({ $or: [{ username: username }, { email: email }] });
    // if (exists) {
    //     return res.status(401).send("User already exists!");
    // }
    // const hash = await bcrypt.hash(password, saltRounds);
    const user = res.locals.user;
    // const image = req.file.filename ? req.file.filename : defaultImage;
    const userr = await userSchema.findOne({ _id: user.id });
    // const blog = await blogSchema.create({ title: title, caption: caption, createdBy: userr._id, tags: tags });
    const blog = await blogSchema.create({
      title,
      caption,
      createdBy: userr._id,
      tags,
      image: req.file.filename,
    });
    if (!blog) {
      throw new Error();
    }
    userr.blogs.push(blog._id);
    userr.save();
    // const token = jwt.sign({ username: username }, JWT_SECRET, { expiresIn: '7d' });
    return res.status(200).send({ blog });
  } catch (error) {
    return res.status(500).send("Something went wrong!");
  }
});

app.post("/allposts", verify, async (req, res) => {
  try {
    // const user = res.locals.user;
    const blogs = await blogSchema.find();
    if (!blogs) {
      throw new Error();
    }
    return res.status(200).send(blogs);
  } catch (error) {
    return res.status(500).send("Something went wrong!");
  }
});

// searching for blogs
app.get("/searchblogs", verify, async function (req, res) {
  try {
    const { q } = req.query;
    const query = { $regex: ".*" + q + ".*", $options: "i" };
    const blogs = await blogSchema.find({
      $or: [{ title: query }, { caption: query }],
    });
    // let newUsers = [];
    // for (i = 0; i < users.length; i++) {
    //     for (j = 0; j < user.friends.length; j++) {
    //         if (JSON.stringify(users[i]._id) != JSON.stringify(user.friends[j])) {
    //             console.log(user.friends[j]);
    //             console.log(users[i]._id);
    //             newUsers.push(users[i]);
    //         }
    //     }
    // }
    if (blogs) {
      return res.status(200).send(blogs);
    } else res.status(404).send("nothing foud!");
  } catch (error) {
    res.send("something went wrong!");
  }
});

// like/dislike functionality
app.post("like", async (req, res) => {
  const { liked, blogId } = req.body;
  const user = res.locals.user;

  if (!blogId || !user)
    return res.status(404).send("Operation can't be performed!");

  try {
    const blog = await blogSchema.findOne({ _id: blogId });
    const userr = await userSchema.findOne({ _id: user.id });

    if (!blog || !userr)
      return res.status(404).send("Operation can't be performed!");
    if (liked) {
      userr.liked.push(blogId);
      blog.likes.push(userr._id);
      return res.status(200).send("liked the blog");
    } else if (!liked) {
      const newLiked = userr.liked.filter((post) => {
        return post !== blogId;
      });
      userr.liked = newLiked;
      userr.save();

      const blogLiked = blog.liked.filter((user) => {
        return user !== userr._id;
      });
      blog.liked = blogLiked;
      blog.save();
      return res.status(200).send("disliked the blog");
    }
  } catch (error) {
    return res.status(500).send("Something went wrong!");
  }
});

// functionality for saving the blog
app.post("/save", async (req, res) => {
  const { saved, blogId } = req.body;
  if (!blogId) {
    return res.status(404).send("invalid request");
  }

  const user = res.locals.user;
  try {
    const blog = await blogSchema.findOne({ _id: blogId });
    const userr = await userSchema.findOne({ _id: user.id });

    if (saved) {
      userr.saved.push(blogId);
      blog.saved.push(userr._id);
      userr.save();
      blog.save();
      return res.status(200).send("saved!");
    } else if (!saved) {
      const newSaved = userr.saved.filter((blog) => {
        return blog != blogId;
      });
      const nSaved = blog.saved.filter((user) => {
        return user != userr._id;
      });
      userr.saved = newSaved;
      blog.saved = nSaved;
      userr.save();
      blog.save();
      return res.status(200).send("unsaved!");
    }
  } catch (error) {
    return res.status(500).send("Something went wrong!");
  }
});

// // uploading a photo from the user's computer
// app.post('/upload', isLoggedIn, upload.single('file'), async function (req, res, next) {

//     try {
//         const user = await userSchema.findOne({ username: req.session.passport.user });
//         const newUser = await userSchema.updateOne({ _id: user._id }, { $set: { image: req.file.filename } });

//         if (!newUser) return res.status(404).send('something went wrong!');
//         // user.image = req.file.filename;
//         // await user.save();
//     }

//     catch (error) {
//         return res.status(400).send('Something went wrong!');
//     }
//     res.redirect('/chat');
// });

// // signing-up the user
// app.post('/signup', async function (req, res, next) {
//     const { username, fullName, email } = req.body;
//     const user = await userSchema.findOne({ $or: [{ username: username }, { email: email }] });
//     // try {
//     if (user) {
//         return res.status(400).send("User Already Exists");
//     }

//     const newUser = new userSchema({ username, fullName, email });
//     userSchema.register(newUser, req.body.password)
//         .then(function () {
//             passport.authenticate('local')(req, res, function () {
//                 res.redirect('/profile')
//                 // res.status(200).send("user created successfully");
//             })
//         })
// });

app.listen(3001);
