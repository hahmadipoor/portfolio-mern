const router = require("express").Router();
const { Intro, About, Project, Contact, Experience, Course } = require("../models/portfolioModel");
const {User} =require("../models/userModel");

router.get("/get-portfolio-data", async (req, res) => {
  try {
    const intros = await Intro.find();
    const abouts = await About.find();
    const projects = await Project.find();
    const contacts = await Contact.find();
    const experiences = await Experience.find();
    const courses = await Course.find();

    res.status(200).send({
      intro: intros[0],
      about: abouts[0],
      projects: projects,
      contact: contacts[0],
      experiences: experiences,
      courses: courses,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

////////////////Intro
router.post("/add-intro", async (req, res) => {
  try {
    const newIntro = new Intro(req.body);
    await newIntro.save();
    res.status(201).send({
      data: newIntro,
      success: true,
      message: "Intro added successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Failed to add intro",
      error,
    });
  }
});

router.put("/update-intro", async (req,res)=>{
  try{
    const intro=await Intro.findOneAndUpdate(
      {_id:req.body._id},
      req.body,
      {new:true}
    );
    res.status(200).send({
      data:intro,
      success:true,
      message:"Intro updated successfully"
    });
  }catch(e){
    console.error(e);    
  }
});

router.delete("/delete-intro/:id", async (req, res) => {
  try {
    await Intro.findByIdAndDelete(req.params.id);
    res.status(200).send({
      success: true,
      message: "Intro deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Failed to delete intro",
      error,
    });
  }
});

///////////////About
router.post("/add-about", async (req, res) => {
  try {
    const newAbout = new About(req.body);
    await newAbout.save();
    res.status(201).send({
      data: newAbout,
      success: true,
      message: "About added successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Failed to add About",
      error,
    });
  }
});

router.put("/update-about", async (req,res)=>{
  try{
    const about=await About.findOneAndUpdate(
      {_id:req.body._id},
      req.body,
      {new:true}
    );
    res.status(200).send({
      data:about,
      success:true,
      message:"About updated successfully"
    });
  }catch(e){
    console.error(e);    
  }
});

router.delete("/delete-about/:id", async (req, res) => {
  try {
    await About.findByIdAndDelete(req.params.id);
    res.status(200).send({
      success: true,
      message: "About deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Failed to delete About",
      error,
    });
  }
});

///////////////////Experience
router.post("/add-experience", async (req, res) => {
  try {
    const newExperience = new Experience(req.body);
    await newExperience.save();
    res.status(201).send({
      data: newExperience,
      success: true,
      message: "Experience added successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Failed to add Experience",
      error,
    });
  }
});

router.put("/update-experience", async (req,res)=>{
  try{
    const experience=await Experience.findOneAndUpdate(
      {_id:req.body._id},
      req.body,
      {new:true}
    );
    res.status(200).send({
      data:experience,
      success:true,
      message:"Experience updated successfully"
    });
  }catch(e){
    console.error(e);    
  }
});

router.delete("/delete-experience/:id", async (req, res) => {
  try {
    await Experience.findByIdAndDelete(req.params.id);
    res.status(200).send({
      success: true,
      message: "Experience deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Failed to delete Experience",
      error,
    });
  }
});

//////////////////Project
router.post("/add-project", async (req, res) => {
  try {
    const newProject = new Project(req.body);
    await newProject.save();
    res.status(201).send({
      data: newProject,
      success: true,
      message: "Project added successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Failed to add Project",
      error,
    });
  }
});

router.put("/update-project", async (req,res)=>{
  try{
    const project=await Project.findOneAndUpdate(
      {_id:req.body._id},
      req.body,
      {new:true}
    );
    res.status(200).send({
      data:project,
      success:true,
      message:"Project updated successfully"
    });
  }catch(e){
    console.error(e);    
  }
});

router.delete("/delete-project/:id", async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.status(200).send({
      success: true,
      message: "Project deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Failed to delete Project",
      error,
    });
  }
});

//////////////////Course
router.post("/add-course", async (req, res) => {
  try {
    const newCourse = new Course(req.body);
    await newCourse.save();
    res.status(201).send({
      data: newCourse,
      success: true,
      message: "Course added successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Failed to add Course",
      error,
    });
  }
});

router.put("/update-course", async (req,res)=>{
  try{
    const course=await Course.findOneAndUpdate(
      {_id:req.body._id},
      req.body,
      {new:true}
    );
    res.status(200).send({
      data:course,
      success:true,
      message:"Course updated successfully"
    });
  }catch(e){
    console.error(e);    
  }
});

router.delete("/delete-course/:id", async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.status(200).send({
      success: true,
      message: "Course deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Failed to delete Course",
      error,
    });
  }
});

/////////////////Contact
router.post("/add-contact", async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).send({
      data: newContact,
      success: true,
      message: "Contact added successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Failed to add Contact",
      error,
    });
  }
});

router.put("/update-contact", async (req,res)=>{
  try{
    const contact=await Contact.findOneAndUpdate(
      {_id:req.body._id},
      req.body,
      {new:true}
    );
    res.status(200).send({
      data:contact,
      success:true,
      message:"Contact updated successfully"
    });
  }catch(e){
    console.error(e);    
  }
});

router.delete("/delete-contact/:id", async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).send({
      success: true,
      message: "Contact deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Failed to delete Contact",
      error,
    });
  }
});


/////////////////Authentication
router.post("/signup", async (req, res) => {

  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).send({
      data: newUser,
      success: true,
      message: "User created successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Failed to add signup",
      error,
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });

    if (user) {
      res.status(200).send({
        data: user,
        success: true,
        message: "Login successfully",
      });
    } else {
      res.status(200).send({
        data: user,
        success: false,
        message: "Invalid username or password",
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
